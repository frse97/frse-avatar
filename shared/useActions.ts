import { useCallback } from "react"
import { AvatarParts } from "../store/avatar/avatar.state"
import { useDispatch } from 'react-redux';
import { avatarSetPartProperty } from "../store/avatar/avatar.actions";
import { GenericProperties } from "./models/generic.model";
import { FrseAvatarGeneratorThemes } from "../model/theme.model";
import { settingsSetTheme } from './../store/settings/settings.actions';

export const useActions = () => {
   const dispatch = useDispatch();
   
   const setAvatarProperty = useCallback(
       (part: AvatarParts, attribute: GenericProperties, value: any) => {
           dispatch(avatarSetPartProperty(part, attribute, value));
       },
       [dispatch]
   );

   const setTheme = useCallback(
       (theme: FrseAvatarGeneratorThemes)=> {
           dispatch(settingsSetTheme(theme));
       },
       [dispatch]
   );

   const actions = {
       setAvatarProperty,
       setTheme
   }
   return actions;
}