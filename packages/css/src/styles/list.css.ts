import { style } from '@vanilla-extract/css';

export const list = style({
  listStyleType: 'none',
});

export const listItem = style({
  '::before': {
    content: '•',
    paddingRight: '0.5rem',
  },
});
