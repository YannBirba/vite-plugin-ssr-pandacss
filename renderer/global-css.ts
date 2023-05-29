import { defineGlobalStyles } from "@pandacss/dev";

export const globalCss = defineGlobalStyles({
  html: {
    lineHeight: "1.5",
    textRendering: "optimizeLegibility",
    MozOsxFontSmoothing: "grayscale",
    WebkitFontSmoothing: "antialiased",
    WebkitTextSizeAdjust: "100%",
    minHeight: "100%",
    scrollPaddingTop: "6rem",
    scrollBehavior: "smooth",
    overflowX: "hidden",
    overflowY: "scroll",
    _dark: {
      colorScheme: "dark",
    },
  },
  body: {
    backgroundColor: "bg.muted",
    color: "fg.text",
    fontFamily: "sans",
    display: "flex",
    flexDirection: "column",
    flexGrow: "1",
  },
  "html, body": {
    display: "flex",
    flexDirection: "column",
    height: "unset !important", // TODO possbile issue in panda
  },
  "*, *::before, *::after": {
    borderColor: "border.default",
    borderStyle: "solid",
  },
  "*::placeholder": {
    opacity: 1,
    color: "fg.muted",
  },
  hr: {
    borderBottomWidth: "1px",
  },
  a: {
    color: "fg.link",
    _hover: {
      color: "fg.link.hover",
    },
  },
  ".panda-theme-toggle-button": {
    _before: {
      content: "'☀️'",
    },
  },
  ".dark .panda-theme-toggle-button": {
    _before: {
      content: "'🌙'",
    },
  },
});
