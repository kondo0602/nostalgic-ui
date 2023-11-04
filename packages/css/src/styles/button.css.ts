import { recipe } from '@vanilla-extract/recipes';
import { theme } from '../theme';
import { borderSquare, pseudoShadow } from '../utils';

export const button = recipe({
  base: [
    borderSquare,
    pseudoShadow,
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
      blue: {
        backgroundColor: theme.color.sky500,
        color: theme.color.white,
      },
      red: {
        backgroundColor: theme.color.red500,
        color: theme.color.white,
      },
      yellow: {
        backgroundColor: theme.color.yellow500,
        color: theme.color.black,
      },
      green: {
        backgroundColor: theme.color.lime500,
        color: theme.color.white,
      },
      white: {
        backgroundColor: theme.color.white,
        color: theme.color.black,
      },
    },
    size: {
      sm: { padding: '6px 10px' },
      md: { padding: '10px 12px' },
    },
  },
  defaultVariants: {
    color: 'blue',
    size: 'md',
  },
});
