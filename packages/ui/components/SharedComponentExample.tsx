import React from "react";
import { Text } from "react-native";
import { getTheme } from "@app-name/theme/utils/theme";

export const SharedComponentExample: React.FC = () => {
  const themeStyles = getTheme();

  return <Text style={themeStyles.text}>Shared app component.</Text>;
};
