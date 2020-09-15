import { useCallback, useRef } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
/* eslint no-param-reassign: 0 */
/* eslint no-underscore-dangle: 0 */
type handleResizeFn = (entry: ResizeObserverEntry) => void;

// Use a single resize observer instance.
const resizeObserver = new ResizeObserver(entries => {
  for (let i = 0; i < entries.length; i += 1) {
    const entry = entries[i];
    const target = entry.target as Element & { _handleResize: handleResizeFn };
    // TODO: This if(target) is a check if component is still mounted - check this
    if (target && target._handleResize) {
      target._handleResize(entry);
    }
  }
});

/**
 * The options used to track the size of an element.
 *
 * If neither the `height` nor the `width` is tracked
 * the `handleResize` will never be called.
 */
export interface TrackOptions {
  /**
   * A debounce intervall in ms. As long as there are any
   * resize events within this time periode they are not delivered.
   * Not set by default.
   */
  debounce?: number;
  /**
   * The callback function used to handle the resize event.
   */
  handleResize: (size: { height: number; width: number }) => void;
  /**
   * A flag indicating whether height changes should be tracked.
   * `false` by default.
   */
  height?: boolean;
  /**
   * A throttle interval in ms. Resize events are delayed the specified amount
   * of time. Multiple events within the time periode are ignored.
   * Not set by default. Not used it `debounce` is set.
   */
  throttle?: number;
  /**
   * A flag indicating whether width changes should be tracked.
   * `true` by default.
   */
  width?: boolean;
}

/**
 * A `hook` to track size changes of a DOM element.
 *
 * @returns A `callback ref` which should be used as `ref` at
 *          the DOM element for which the size should be tracked.
 */
export function useTrackSize<T extends Element>(options: TrackOptions): (node: T) => void {
  const contextRef = useRef<{
    node?: T & { _handleResize: handleResizeFn };
    options: TrackOptions;
    size?: { height: number; width: number };
    timerId?: any;
  }>();
  if (contextRef.current != null) {
    contextRef.current.options = options;
  } else {
    contextRef.current = { options };
  }

  const on = options.height === true || options.width !== false;

  return useCallback(
    (node: T) => {
      const context = contextRef.current as any;
      if (on && node != null) {
        const clientRect = node.getBoundingClientRect();
        context.size = {
          height: Math.round(clientRect.height),
          width: Math.round(clientRect.width)
        };

        context.node = node as T & { _handleResize: handleResizeFn };
        context.node._handleResize = (entry: ResizeObserverEntry) => {
          const { options: opts } = context;
          const prevSize = context.size;
          const newSize = {
            height: Math.round(entry.contentRect.height),
            width: Math.round(entry.contentRect.width)
          };
          if ((opts.height === true && newSize.height !== prevSize.height) || (opts.width !== false && newSize.width !== prevSize.width)) {
            context.size = newSize;
            if (opts.debounce && opts.debounce > 0) {
              if (context.timerId != null) {
                clearTimeout(context.timerId);
              }
              context.timerId = setTimeout(() => {
                opts.handleResize(context.size);
                context.timerId = undefined;
              }, opts.debounce);
            } else if (opts.throttle && opts.throttle > 0) {
              if (context.timerId == null) {
                context.timerId = setTimeout(() => {
                  opts.handleResize(context.size);
                  context.timerId = undefined;
                }, opts.throttle);
              }
            } else {
              if (context.timerId != null) {
                clearTimeout(context.timerId);
                context.timerId = undefined;
              }
              opts.handleResize(context.size);
            }
          }
        };
        resizeObserver.observe(context.node);
        context.options.handleResize(context.size);
      } else if (context.node) {
        resizeObserver.unobserve(context.node);
        if (context.timerId) {
          clearTimeout(context.timerId);
          context.timerId = undefined;
        }
        delete context.node._handleResize;
        context.node = undefined;
      }
    },
    [contextRef, on]
  );
}
