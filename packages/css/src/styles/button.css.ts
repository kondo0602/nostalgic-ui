import { recipe } from '@vanilla-extract/recipes';

import { theme } from '../theme';
import { borderSquare, pseudoShadow } from '../utils';

export const button = recipe({
  base: [
    borderSquare,
    {
      display: 'inline-flex',
      flexShrink: 0,
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      ':disabled': {
        backgroundColor: theme.color.neutral300,
        color: theme.color.neutral500,
        borderColor: theme.color.neutral900,
        boxShadow: `inset ${theme.border.mdNegative} ${theme.border.mdNegative} ${theme.color.neutral500}`,
        pointerEvents: 'none',
      },
    },
  ],
  variants: {
    color: {
      white: {
        backgroundColor: theme.color.white,
        color: theme.color.black,
      },
      blue: {},
      green: {},
      red: {},
      yellow: {},
    },
    variant: {
      solid: { ...pseudoShadow },
      outline: {
        backgroundColor: theme.color.white,
        ...pseudoShadow,
      },
      ghost: {
        borderColor: 'transparent',
      },
    },
    size: {
      sm: { padding: '6px 10px' },
      md: { padding: '10px 12px' },
    },
  },

  compoundVariants: [
    {
      variants: {
        color: 'white', variant: 'solid',
      },
      style: {
        backgroundColor: theme.color.white,
        color: theme.color.black,
        boxShadow: `inset ${theme.border.mdNegative} ${theme.border.mdNegative} ${theme.color.slate300}`,
        ':active': {
          boxShadow: `inset ${theme.border.md} ${theme.border.md} ${theme.color.slate300}`,
        },
      },
    },
    {
      variants: {
        color: 'white', variant: 'ghost',
      },
      style: {
        backgroundColor: 'transparent',
        ':hover': {
          backgroundColor: theme.color.slate100,
        },
      },
    },
    {
      variants: {
        color: 'blue', variant: 'solid',
      },
      style: {
        backgroundColor: theme.color.sky500,
        color: theme.color.white,
        boxShadow: `inset ${theme.border.mdNegative} ${theme.border.mdNegative} ${theme.color.blue700}`,
        ':active': {
          boxShadow: `inset ${theme.border.md} ${theme.border.md} ${theme.color.blue700}`,
        },
      },
    },
    {
      variants: {
        color: 'blue', variant: 'outline',
      },
      style: {
        color: theme.color.sky500,
        borderColor: 'currentcolor',
        boxShadow: `inset ${theme.border.mdNegative} ${theme.border.mdNegative} ${theme.color.slate300}`,
        ':active': {
          boxShadow: `inset ${theme.border.md} ${theme.border.md} ${theme.color.slate300}`,
        },
      },
    },
    {
      variants: {
        color: 'blue', variant: 'ghost',
      },
      style: {
        backgroundColor: 'transparent',
        color: theme.color.sky500,
        ':hover': {
          backgroundColor: theme.color.sky100,
        },
      },
    },
    {
      variants: {
        color: 'green', variant: 'solid',
      },
      style: {
        backgroundColor: theme.color.lime500,
        color: theme.color.white,
        boxShadow: `inset ${theme.border.mdNegative} ${theme.border.mdNegative} ${theme.color.green700}`,
        ':active': {
          boxShadow: `inset ${theme.border.md} ${theme.border.md} ${theme.color.green700}`,
        },
      },
    },
    {
      variants: {
        color: 'green', variant: 'outline',
      },
      style: {
        color: theme.color.lime500,
        borderColor: 'currentcolor',
        boxShadow: `inset ${theme.border.mdNegative} ${theme.border.mdNegative} ${theme.color.slate300}`,
        ':active': {
          boxShadow: `inset ${theme.border.md} ${theme.border.md} ${theme.color.slate300}`,
        },
      },
    },
    {
      variants: {
        color: 'green', variant: 'ghost',
      },
      style: {
        backgroundColor: 'transparent',
        color: theme.color.lime500,
        ':hover': {
          backgroundColor: theme.color.lime100,
        },
      },
    },
    {
      variants: {
        color: 'red', variant: 'solid',
      },
      style: {
        backgroundColor: theme.color.red500,
        color: theme.color.white,
        boxShadow: `inset ${theme.border.mdNegative} ${theme.border.mdNegative} ${theme.color.red700}`,
        ':active': {
          boxShadow: `inset ${theme.border.md} ${theme.border.md} ${theme.color.red700}`,
        },
      },
    },
    {
      variants: {
        color: 'red', variant: 'outline',
      },
      style: {
        color: theme.color.red500,
        borderColor: 'currentcolor',
        boxShadow: `inset ${theme.border.mdNegative} ${theme.border.mdNegative} ${theme.color.slate300}`,
        ':active': {
          boxShadow: `inset ${theme.border.md} ${theme.border.md} ${theme.color.slate300}`,
        },
      },
    },
    {
      variants: {
        color: 'red', variant: 'ghost',
      },
      style: {
        backgroundColor: 'transparent',
        color: theme.color.red500,
        ':hover': {
          backgroundColor: theme.color.red100,
        },
      },
    },
    {
      variants: {
        color: 'yellow', variant: 'solid',
      },
      style: {
        backgroundColor: theme.color.yellow400,
        color: theme.color.black,
        boxShadow: `inset ${theme.border.mdNegative} ${theme.border.mdNegative} ${theme.color.yellow600}`,
        ':active': {
          boxShadow: `inset ${theme.border.md} ${theme.border.md} ${theme.color.yellow600}`,
        },
      },
    },
    {
      variants: {
        color: 'yellow', variant: 'outline',
      },
      style: {
        color: theme.color.yellow400,
        borderColor: 'currentcolor',
        boxShadow: `inset ${theme.border.mdNegative} ${theme.border.mdNegative} ${theme.color.slate300}`,
        ':active': {
          boxShadow: `inset ${theme.border.md} ${theme.border.md} ${theme.color.slate300}`,
        },
      },
    },
    {
      variants: {
        color: 'yellow', variant: 'ghost',
      },
      style: {
        backgroundColor: 'transparent',
        color: theme.color.yellow400,
        ':hover': {
          backgroundColor: theme.color.yellow100,
        },
      },
    },
  ],

  defaultVariants: {
    color: 'white',
    variant: 'solid',
    size: 'md',
  },
});
