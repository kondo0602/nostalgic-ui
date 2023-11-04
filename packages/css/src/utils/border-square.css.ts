import { calc } from '@vanilla-extract/css-utils';

import { theme } from '../theme';

import type { StyleRule } from '@vanilla-extract/css';

const widthExcludingBorder = calc.subtract('100%', theme.border.md);

export const borderSquare: StyleRule = {
  borderWidth: theme.border.md,
  borderStyle: 'solid',
  borderColor: theme.color.black,
  // Coordinates from the top-left corner -> top-right corner -> bottom-right corner -> bottom-left corner
  clipPath: `polygon(
    0 ${theme.border.md}, ${theme.border.md} ${theme.border.md}, ${theme.border.md} 0,
    ${widthExcludingBorder} 0, ${widthExcludingBorder} ${theme.border.md}, 100% ${theme.border.md},
    100% ${widthExcludingBorder}, ${widthExcludingBorder} ${widthExcludingBorder}, ${widthExcludingBorder} 100%,
    ${theme.border.md} 100%, ${theme.border.md} ${widthExcludingBorder}, 0 ${widthExcludingBorder}
  )`,
};

export const borderSquareTopOnly: StyleRule = {
  borderWidth: theme.border.md,
  borderStyle: 'solid',
  borderColor: theme.color.black,
  borderBottomStyle: 'none',
  // Coordinates from the top-left corner -> top-right corner -> bottom-right corner -> bottom-left corner// Coordinates from the top-left corner -> top-right corner -> bottom-right corner -> bottom-left corner
  clipPath: `polygon(
    0 ${theme.border.md}, ${theme.border.md} ${theme.border.md}, ${theme.border.md} 0,
    ${widthExcludingBorder} 0, ${widthExcludingBorder} ${theme.border.md}, 100% ${theme.border.md},
    100% 100%,
    0% 100%,
    0 0
  )`,
};

export const borderSquareBottomOnly: StyleRule = {
  borderWidth: theme.border.md,
  borderStyle: 'solid',
  borderColor: theme.color.black,
  borderTopStyle: 'none',
  // Coordinates from the top-left corner -> top-right corner -> bottom-right corner -> bottom-left corner
  clipPath: `polygon(
    0 0,
    100% 0,
    100% ${widthExcludingBorder}, ${widthExcludingBorder} ${widthExcludingBorder}, ${widthExcludingBorder} 100%,
    ${theme.border.md} 100%, ${theme.border.md} ${widthExcludingBorder}, 0 ${widthExcludingBorder},
    0 0
  )`,
};
