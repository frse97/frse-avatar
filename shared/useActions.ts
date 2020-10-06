import { useCallback } from "react"
import { AvatarParts } from "../store/avatar/avatar.state"
import { useDispatch } from 'react-redux';
import { avatarSetPartProperty } from "../store/avatar/avatar.actions";
import { GenericProperties } from "./models/generic.model";
import { FrseAvatarGeneratorThemes } from "../model/theme.model";
import { settingsSetRegion, settingsSetTheme } from './../store/settings/settings.actions';
import { FrseAvatarGeneratorSupportedLang } from "./models/region.model";

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

   const setRegion = useCallback(
       (region: FrseAvatarGeneratorSupportedLang)=> {
           dispatch(settingsSetRegion(region));
       },
       [dispatch]
   )

   const actions = {
       setAvatarProperty,
       setTheme,
       setRegion
   }
   return actions;
}