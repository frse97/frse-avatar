export interface IAvatarProps {
  skinColor: string;
  bodyColor: string;
  mouthColor: string;
  tongueColor: string;
  eyesColor: string;
  eyebrownColor: string;
  noseColor: string;
  blushColor: string;
}
export interface IBody extends GenericElement{}
export interface IFace extends GenericElement{}
export interface INeck extends GenericElement{}
export interface IMouth extends GenericElement{
  tongueColor: string;
}
export interface IEyes extends GenericElement{}
export interface IEyeBrown extends GenericElement{}
export interface IBlush extends GenericElement {}
export interface INose extends GenericElement {}

interface GenericElement{
  width?: string;
  height?: string;
  top?: string;
  left?: string;
  borderRadius?: string;
  background: string;
  zIndex?: string;
}