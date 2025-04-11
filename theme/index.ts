import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { headingRecipe } from "./heading.recipe";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: {
          DEFAULT: { value: "{colors.primary.500}" },
          100: { value: "#CDF7FF" },
          200: { value: "#9BE9FF" },
          300: { value: "#69D6FF" },
          400: { value: "#43C0FF" },
          500: { value: "#059DFF" },
          600: { value: "#0379DB" },
          700: { value: "#025BB7" },
          800: { value: "#014093" },
          900: { value: "#002D7A" },
        },
        secondary: {
          DEFAULT: { value: "{colors.secondary.500}" },
          100: { value: "#FEE8D9" },
          200: { value: "#FECCB3" },
          300: { value: "#FDAA8E" },
          400: { value: "#FC8971" },
          500: { value: "#FB5343" },
          600: { value: "#D73130" },
          700: { value: "#B4212D" },
          800: { value: "#911529" },
          900: { value: "#780C26" },
        },
      },
    },
    semanticTokens: {
      colors: {
        primary: {
          solid: { value: "{colors.primary.500}" },
          contrast: { value: "white" },
          fg: { value: "{colors.primary.700}" },
          muted: { value: "{colors.primary.100}" },
          subtle: { value: "{colors.primary.200}" },
          emphasized: { value: "{colors.primary.300}" },
          focusRing: { value: "{colors.primary.500}" },
        },
      },
    },
    recipes: {
      heading: headingRecipe,
    },
  },
});

export const system = createSystem(defaultConfig, config);

/*
primary -> #059dff
secondary -> #fb5343
pink -> #e33fa1

*/
