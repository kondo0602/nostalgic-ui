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
      ':disabled': {
        backgroundColor: theme.color.neutral300,
        color: theme.color.neutral900,
        borderColor: theme.color.neutral900,
        boxShadow: `inset ${theme.border.mdNegative} ${theme.border.mdNegative} ${theme.color.neutral500}`,
        pointerEvents: 'none',
        opacity: 0.6,
      },
    },
  ],
  variants: {
    color: {
      blue: {},
      green: {},
      red: {},
      yellow: {},
      white: {
        backgroundColor: theme.color.white,
        color: theme.color.black,
        boxShadow: `inset ${theme.border.mdNegative} ${theme.border.mdNegative} ${theme.color.slate300}`,
        ':active': {
          boxShadow: `inset ${theme.border.md} ${theme.border.md} ${theme.color.slate300}`,
        },
      },
    },
    variant: {
      solid: {},
      outline: {},
      ghost: {},
    },
    size: {
      sm: { padding: '6px 10px' },
      md: { padding: '10px 12px' },
    },
  },

  compoundVariants: [
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
        backgroundColor: 'transparent',
        color: theme.color.sky500,
        borderColor: theme.color.sky500,
        boxShadow: `inset ${theme.border.mdNegative} ${theme.border.mdNegative} ${theme.color.slate300}`,
        ':active': {
          boxShadow: `inset ${theme.border.md} ${theme.border.md} ${theme.color.slate300}`,
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
        backgroundColor: 'transparent',
        color: theme.color.lime500,
        borderColor: theme.color.lime500,
        boxShadow: `inset ${theme.border.mdNegative} ${theme.border.mdNegative} ${theme.color.slate300}`,
        ':active': {
          boxShadow: `inset ${theme.border.md} ${theme.border.md} ${theme.color.slate300}`,
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
        backgroundColor: 'transparent',
        color: theme.color.red500,
        borderColor: theme.color.red500,
        boxShadow: `inset ${theme.border.mdNegative} ${theme.border.mdNegative} ${theme.color.slate300}`,
        ':active': {
          boxShadow: `inset ${theme.border.md} ${theme.border.md} ${theme.color.slate300}`,
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
        backgroundColor: 'transparent',
        color: theme.color.yellow400,
        borderColor: theme.color.yellow400,
        boxShadow: `inset ${theme.border.mdNegative} ${theme.border.mdNegative} ${theme.color.slate300}`,
        ':active': {
          boxShadow: `inset ${theme.border.md} ${theme.border.md} ${theme.color.slate300}`,
        },
      },
    },
  ],

  defaultVariants: {
    color: 'blue',
    variant: 'solid',
    size: 'md',
  },
});
