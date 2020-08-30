import { IPartState } from "../store/avatar/avatar.state"

export interface IBody extends GenericElementState { }
export interface IFace extends GenericElementState { }
export interface INeck extends GenericElementState { }
export interface IMouth extends GenericElementState {
  tongueColor: string;
}
export interface IEyes extends GenericElementState { }
export interface IEyeBrown extends GenericElementState { }
export interface IBlush extends GenericElementState { }
export interface INose extends GenericElementState { }

export type GenericElementState = {
  state: IPartState;
}