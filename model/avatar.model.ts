export interface IAvatarProps {
  skinColor: string;
  bodyColor: string;
  mouthColor: string;
  tongueColor: string;
}
export interface IBody extends GenericElement{}
export interface IFace extends GenericElement{}
export interface INeck extends GenericElement{}
export interface IMouth extends GenericElement{
  tongueColor: string;
}

interface GenericElement{
  width?: string;
  height?: string;
  top?: string;
  left?: string;
  borderRadius?: string;
  background: string;
  zIndex?: string;
}