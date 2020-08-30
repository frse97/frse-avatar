import { useCallback } from "react"
import { AvatarParts } from "../store/avatar/avatar.state"
import { useDispatch } from 'react-redux';
import { avatarSetPartProperty } from "../store/avatar/avatar.actions";
import { GenericProperties } from "./models/generic.model";

export const useActions = () => {
   const dispatch = useDispatch();
   
   const setAvatarProperty = useCallback(
       (part: AvatarParts, attribute: GenericProperties, value: any) => {
           dispatch(avatarSetPartProperty(part, attribute, value));
       },
       [dispatch]
   );

   const actions = {
       setAvatarProperty
   }
   return actions;
}