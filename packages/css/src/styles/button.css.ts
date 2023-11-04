import { recipe } from "@vanilla-extract/recipes";
import { theme } from "../theme";

export const button = recipe({
  base: [
    {
      display: 'inline-flex',
      flexShrink: 0,
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
    },
  ],
  variants: {
    color: {
      primary: {
        backgroundColor: theme.color.sky500,
        color: theme.color.white,
      },
      secondary: {
        backgroundColor: theme.color.white,
        color: theme.color.black,
      },
      success: {
        backgroundColor: theme.color.lime500,
        color: theme.color.white,
      },
      warning: {
        backgroundColor: theme.color.yellow500,
      },
      danger: {
        backgroundColor: theme.color.red500,
        color: theme.color.white,
      },
    },
    size: {
      sm: { padding: '6px 10px' },
      md: { padding: '10px 12px' },
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'md',
  }
});
