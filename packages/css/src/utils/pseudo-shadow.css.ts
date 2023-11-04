import type { StyleRule } from '@vanilla-extract/css';

export const pseudoShadow: StyleRule = {
  position: 'relative',
  '::after': {
    position: 'absolute',
    inset: 0,
    content: '',
    opacity: 0,
    backgroundColor: '#0000000f',
    pointerEvents: 'none',
    transition: 'opacity .25s',
  },
  selectors: {
    '&:hover:not(:disabled)::after': {
      opacity: 1,
    },
  },
};
