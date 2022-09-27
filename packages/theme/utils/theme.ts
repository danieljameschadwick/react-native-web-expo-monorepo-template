import { Theme } from "@app-name/types/enum/Theme";
import { darkStyles } from "@app-name/theme/styles/darkStyles";
import { lightStyles } from "@app-name/theme/styles/lightStyles";
import { useAppSelector } from "@app-name/state/hooks";
import { selectTheme } from "@app-name/state/reducer/ThemeReducer";

export const getTheme = () => {
  const theme = useAppSelector(selectTheme);

  if (theme === Theme.DARK_MODE) {
    return darkStyles;
  }

  // default to LIGHT_MODE
  return lightStyles;
};
