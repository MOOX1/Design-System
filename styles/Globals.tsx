import { createStitches } from "@stitches/core";
import { violet, slate } from "@radix-ui/colors";


export const {
  css,
  globalCss,
  keyframes,
  theme,
  createTheme,
  getCssText,
  config,
} = createStitches({
  theme: {
    colors: {
      ...slate,
      ...violet,
    },
    space: {
      1: "5px",
      2: "10px",
      3: "15px",
      4: "20px",
      5: "25px",
      6: "30px",
      7: "35px",
    },
    sizes: {
      1: "5px",
      2: "10px",
      3: "15px",
      4: "20px",
      5: "25px",
      6: "30px",
      7: "35px",
    },
    radii: {
      round: "999999px",
    },
    fontSizes: {
      1: "13px",
      2: "15px",
    },
  },
});
 
