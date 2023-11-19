import { recipe } from '@vanilla-extract/recipes';

import { theme } from '../theme';
import { borderSquare } from '../utils';

export const textarea = recipe({
  base: {
    ...borderSquare,
  },
  variants: {
    color: {
      white: {},
      red: {
        borderColor: theme.color.red500,
      },
    },
    size: {
      sm: {
        padding: '6px 10px',
      },
      md: {
        padding: '10px 12px',
      },
    },
  },
  defaultVariants: {
    color: 'white',
    size: 'md',
  },
});
