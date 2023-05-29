import { defineConfig } from "@pandacss/dev";
import { globalCss } from "./renderer/global-css";

export default defineConfig({
  // Whether to include css reset styles in the generated css.
  preflight: true,

  // Files to watch for changes.
  include: ["./**/*.{tsx,ts}"],
  // BUG in panda: Issue when include does not contain "ts", even if there are no ts files that uses css in the project

  // Used to create reusable config presets for your project or team.
  presets: ["@pandacss/dev/presets"],

  // The framework to use for generating supercharged elements.
  jsxFramework: "react",

  // The output directory.
  outdir: "panda",

  globalCss,

  theme: {
    tokens: {
      colors: {
        black: { value: "#1C1917" },
        white: { value: "fafafa" },
        gray: {
          50: { value: "#f6f5f5" },
          100: { value: "#ececec" },
          200: { value: "#d0cfcf" },
          300: { value: "#b3b2b2" },
          400: { value: "#7b7978" },
          500: { value: "#423f3e" },
          600: { value: "#3b3938" },
          700: { value: "#322f2f" },
          800: { value: "#282625" },
          900: { value: "#201f1e" },
        },
        orange: {
          50: { value: "#F6E1DB" },
          100: { value: "#EEC2B7" },
          200: { value: "#E49582" },
          300: { value: "#DE7960" },
          400: { value: "#EB5E41" },
          500: { value: "#BD4E34" },
          600: { value: "#953D2B" },
          700: { value: "#662314" },
          800: { value: "#451D14" },
          900: { value: "#391915" },
        },
        /* Shades generated using https://javisperez.github.io/tailwindcolorshades */
        "deep-cerulean": {
          50: { value: "#f4f9fb", description: "deep-cerulean_50" },
          100: { value: "#eaf3f7", description: "deep-cerulean_100" },
          200: { value: "#cae1ec", description: "deep-cerulean_200" },
          300: { value: "#a9cee1", description: "deep-cerulean_300" },
          400: { value: "#69aaca", description: "deep-cerulean_400" },
          500: { value: "#2985b3", description: "deep-cerulean_500" },
          600: { value: "#2578a1", description: "deep-cerulean_600" },
          700: { value: "#1f6486", description: "deep-cerulean_700" },
          800: { value: "#19506b", description: "deep-cerulean_800" },
          900: { value: "#144158", description: "deep-cerulean_900" },
        },
      },
      lineHeights: {
        none: { value: "0" },
        1: { value: "1" },
        "1.25": { value: "1.25" },
        "1.5": { value: "1.5" },
        "1.75": { value: "1.75" },
        2: { value: "2" },
      },
      fonts: {
        sans: {
          value:
            "Inter, Inter Fallback, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
        },
        mono: {
          value:
            "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
        },
      },
      fontSizes: {
        0: { value: "0" },
        1: { value: "0.75rem" },
        2: { value: "0.875rem" },
        3: { value: "1rem" },
        4: { value: "1.125rem" },
        5: { value: "1.25rem" },
        6: { value: "1.5rem" },
        7: { value: "1.875rem" },
        8: { value: "2.25rem" },
        9: { value: "3rem" },
        10: { value: "4rem" },
        11: { value: "5rem" },
        12: { value: "6rem" },
      },
      radii: {
        none: { value: "0" },
        xs: { value: "10px" },
        sm: { value: "20px" },
        md: { value: "30px" },
        lg: { value: "40px" },
        xl: { value: "50px" },
        full: { value: "9999px" },
      },
      easings: {
        "ease-in": { value: "cubic-bezier(0.4, 0, 1, 1)" },
        "ease-out": { value: "cubic-bezier(0, 0, 0.2, 1)" },
        "ease-in-out": { value: "cubic-bezier(0.4, 0, 0.2, 1)" },
        "ease-in-back": { value: "cubic-bezier(0.4, 0, 0.6, 1)" },
        "ease-out-back": { value: "cubic-bezier(0.2, 0, 0.4, 1)" },
      },
      sizes: {
        "5xs": { value: "16px" },
        "4xs": { value: "32px" },
        "3xs": { value: "48px" },
        "2xs": { value: "64px" },
        xs: { value: "96px" },
        sm: { value: "128px" },
        md: { value: "256px" },
        lg: { value: "512px" },
        xl: { value: "768px" },
        "2xl": { value: "1024px" },
        "3xl": { value: "1536px" },
        "4xl": { value: "2048px" },
        "5xl": { value: "2560px" },
      },
      durations: {
        0: { value: "0ms" },
        xs: { value: "50ms" },
        sm: { value: "100ms" },
        md: { value: "150ms" },
        lg: { value: "200ms" },
        xl: { value: "250ms" },
        "2xl": { value: "300ms" },
        "3xl": { value: "350ms" },
        "4xl": { value: "400ms" },
        "5xl": { value: "450ms" },
        "6xl": { value: "500ms" },
      },
      zIndex: {
        0: { value: 0 },
        10: { value: 10 },
        20: { value: 20 },
        30: { value: 30 },
        40: { value: 40 },
        50: { value: 50 },
        60: { value: 60 },
        70: { value: 70 },
        80: { value: 80 },
        90: { value: 90 },
        100: { value: 100 },
        dialog: { value: 100 },
        modal: { value: 100 },
        popover: { value: 110 },
        toast: { value: 120 },
        tooltip: { value: 130 },
      },
      spacing: {
        0: { value: "0" },
        "5xs": { value: "4px" },
        "4xs": { value: "8px" },
        "3xs": { value: "12px" },
        "2xs": { value: "16px" },
        xs: { value: "20px" },
        sm: { value: "24px" },
        md: { value: "32px" },
        lg: { value: "40px" },
        xl: { value: "48px" },
        "2xl": { value: "56px" },
        "3xl": { value: "64px" },
        "4xl": { value: "80px" },
        "5xl": { value: "96px" },
        "6xl": { value: "112px" },
        "7xl": { value: "128px" },
        "8xl": { value: "144px" },
        "9xl": { value: "160px" },
        "10xl": { value: "176px" },
      },
      opacity: {
        0: { value: 0 },
        quarter: { value: 0.25 },
        half: { value: 0.5 },
        threeQuarters: { value: 0.75 },
        full: { value: 1 },
      },
      blurs: {
        0: { value: "0" },
        xs: { value: "4px" },
        sm: { value: "8px" },
        md: { value: "16px" },
        lg: { value: "24px" },
        xl: { value: "32px" },
      },
      breakpoints: {
        xxs: { value: "300px" },
        xs: { value: "500px" },
        sm: { value: "768px" },
        md: { value: "1024px" },
        lg: { value: "1280px" },
        xl: { value: "1536px" },
        xxl: { value: "1920px" },
      },
    },
    semanticTokens: {
      colors: {
        fg: {
          text: {
            value: { base: "{colors.gray.700}", _dark: "{colors.gray.100}" },
          },
          link: {
            default: {
              value: {
                base: "{colors.deep-cerulean.500}",
                hover: "{colors.deep-cerulean.600}",
                dark: {
                  base: "{colors.deep-cerulean.400}",
                  hover: "{colors.deep-cerulean.300}",
                },
              },
            },
            active: {
              value: {
                base: "{colors.orange.500}",
                hover: "{colors.orange.600}",
                dark: {
                  base: "{colors.orange.400}",
                  hover: "{colors.orange.300}",
                },
              },
            },
          },
          heading: {
            value: { base: "{colors.gray.900}", _dark: "{colors.gray.50}" },
          },
          muted: {
            value: { base: "{colors.gray.500}", _dark: "{colors.gray.400}" },
          },
        },
        bg: {
          surface: {
            value: { base: "{colors.gray.50}", _dark: "{colors.gray.900}" },
          },
          muted: {
            value: { base: "{colors.gray.100}", _dark: "{colors.gray.800}" },
          },
          accent: {
            value: {
              base: "{colors.deep-cerulean.400}",
              _dark: "{colors.deep-cerulean.300}",
            },
          },
        },
        accent: {
          default: {
            value: {
              base: "{colors.deep-cerulean.500}",
              _dark: "{colors.deep-cerulean.400}",
            },
          },
          muted: {
            value: {
              base: "{colors.deep-cerulean.100}",
              _dark: "{colors.deep-cerulean.800}",
            },
          },
        },
        border: {
          muted: {
            value: { base: "{colors.gray.200}", _dark: "{colors.gray.700}" },
          },
          default: {
            value: { base: "{colors.gray.300}", _dark: "{colors.gray.600}" },
          },
        },
      },
      shadows: {
        xs: {
          value: {
            base: "0px 0px 1px rgba(48, 49, 51, 0.05), 0px 1px 2px rgba(48, 49, 51, 0.1)",
            _dark: "0px 0px 1px #0D0D0D, 0px 1px 2px rgba(13, 13, 13, 0.9)",
          },
        },
        sm: {
          value: {
            base: "0px 0px 1px rgba(48, 49, 51, 0.05), 0px 2px 4px rgba(48, 49, 51, 0.1)",
            _dark: "0px 0px 1px #0D0D0D, 0px 2px 4px rgba(13, 13, 13, 0.9)",
          },
        },
        md: {
          value: {
            base: "0px 0px 1px rgba(48, 49, 51, 0.05), 0px 4px 8px rgba(48, 49, 51, 0.1)",
            _dark: "0px 0px 1px #0D0D0D, 0px 4px 8px rgba(13, 13, 13, 0.9)",
          },
        },
        lg: {
          value: {
            base: "0px 0px 1px rgba(48, 49, 51, 0.05), 0px 8px 16px rgba(48, 49, 51, 0.1)",
            _dark: "0px 0px 1px #0D0D0D, 0px 8px 16px rgba(13, 13, 13, 0.9)",
          },
        },
        xl: {
          value: {
            base: "0px 0px 1px rgba(48, 49, 51, 0.05), 0px 16px 24px rgba(48, 49, 51, 0.1)",
            _dark: "0px 0px 1px #0D0D0D, 0px 16px 24px rgba(13, 13, 13, 0.9)",
          },
        },
      },
    },
    recipes: {
      link: {
        name: "link",
        description: "A link styles",
        base: {
          cursor: "pointer",
        },
        variants: {
          variant: {
            primary: {
              color: "fg.link.default",
              textDecoration: "underline",
              _hover: {
                color: "fg.link.default.hover",
              },
              _dark: {
                color: "fg.link.default.dark",
                _hover: {
                  color: "fg.link.default.dark.hover",
                },
              },
              "&.is-active": {
                color: "fg.link.active",
                textDecoration: "dashed",
                _hover: {
                  color: "fg.link.active.hover",
                },
                _dark: {
                  color: "fg.link.active.dark",
                  _hover: {
                    color: "fg.link.active.dark.hover",
                  },
                },
              },
              _active: {
                color: "fg.link.active",
                _hover: {
                  color: "fg.link.active.hover",
                },
                _dark: {
                  color: "fg.link.active.dark",
                  _hover: {
                    color: "fg.link.active.dark.hover",
                  },
                },
              },
            },
            unstyled: {
              color: "inherit",
              textDecoration: "none",
            },
          },
        },
        defaultVariants: {
          variant: "primary",
        },
      },
      flexCustom: {
        name: "flex",
        description: "A flex styles",
        base: {
          display: "flex",
          flexWrap: "wrap",
          alignItems: "stretch",
          "--col-gap": "0px",
          "--row-gap": "0px",
          "--basis": "100%",
          columnGap: "var(--col-gap)",
          rowGap: "var(--row-gap)",

          "& > *": {
            flexBasis: "calc(var(--basis) - var(--col-gap))",
          },
        },
        variants: {
          direction: {
            row: {
              flexDirection: "row",
            },
            column: {
              flexDirection: "column",
              "& > *": {
                flexBasis: "100%",
              },
            },
            rowReverse: {
              flexDirection: "row-reverse",
            },
            columnReverse: {
              flexDirection: "column-reverse",
              "& > *": {
                flexBasis: "100%",
              },
            },
          },
          wrap: {
            wrap: {
              flexWrap: "wrap",
            },
            noWrap: {
              flexWrap: "nowrap",
            },
            wrapReverse: {
              flexWrap: "wrap-reverse",
            },
          },
          align: {
            jc: {
              start: "flex-start",
              end: "flex-end",
              center: "center",
              between: "space-between",
              around: "space-around",
              evenly: "space-evenly",
            },
            ai: {
              start: "flex-start",
              end: "flex-end",
              center: "center",
              baseline: "baseline",
              stretch: "stretch",
            },
          },
          gap: {
            0: {
              "--col-gap": "0px",
              "--row-gap": "0px",
            },
            xxs: {
              "--col-gap": "10px",
              "--row-gap": "10px",
            },
            xs: {
              "--col-gap": "20px",
              "--row-gap": "20px",
            },
            sm: {
              "--col-gap": "30px",
              "--row-gap": "30px",
            },
            md: {
              "--col-gap": "40px",
              "--row-gap": "40px",
            },
            lg: {
              "--col-gap": "50px",
              "--row-gap": "50px",
            },
            xl: {
              "--col-gap": "60px",
              "--row-gap": "60px",
            },
            xxl: {
              "--col-gap": "70px",
              "--row-gap": "70px",
            },
            max: {
              "--col-gap": "100px",
              "--row-gap": "100px",
            },
          },
          basis: {
            0: {
              "--basis": "0%",
            },
            8: {
              "--basis": "8.333333%",
            },
            16: {
              "--basis": "16.666667%",
            },
            25: {
              "--basis": "25%",
            },
            4: {
              "--basis": "33.333333%",
            },
            40: {
              "--basis": "41.666667%",
            },
            50: {
              "--basis": "50%",
            },
            60: {
              "--basis": "58.333333%",
            },
            66: {
              "--basis": "66.666667%",
            },
            75: {
              "--basis": "75%",
            },
            80: {
              "--basis": "83.333333%",
            },
            90: {
              "--basis": "91.666667%",
            },
            100: {
              "--basis": "100%",
            },
          },
        },
      },
    },
  },
  patterns: {
    extend: {
      container: {
        transform(props) {
          // TODO descructuring props.centerContent is not working @panda
          delete props.centerContent;
          return Object.assign(
            {
              position: "relative",
              width: "100%",
              maxWidth: "7xl",
              mx: "auto",
              paddingX: { base: "4", md: "6" },
            },
            props
          );
        },
      },
    },
  },
});
