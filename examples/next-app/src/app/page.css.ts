import { style } from "@vanilla-extract/css";

export const wrapper = style({
  backgroundColor: "purple",
  padding: "16px",
})

export const hStack = style({
  display: 'flex',
  gap: '8px',
})

export const vStack = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
})
