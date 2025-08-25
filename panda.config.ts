import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/components/**/*.{ts,tsx,js,jsx}", "./src/app/**/*.{ts,tsx,js,jsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      // Color tokens
      tokens: {
        colors: {
          // Primary palette
          primary: {
            50: { value: "#f0f9ff" },
            100: { value: "#e0f2fe" },
            200: { value: "#bae6fd" },
            300: { value: "#7dd3fc" },
            400: { value: "#38bdf8" },
            500: { value: "#0ea5e9" },
            600: { value: "#0284c7" },
            700: { value: "#0369a1" },
            800: { value: "#075985" },
            900: { value: "#0c4a6e" },
            950: { value: "#082f49" },
          },
          // Secondary palette
          secondary: {
            50: { value: "#fafafa" },
            100: { value: "#f4f4f5" },
            200: { value: "#e4e4e7" },
            300: { value: "#d4d4d8" },
            400: { value: "#a1a1aa" },
            500: { value: "#71717a" },
            600: { value: "#52525b" },
            700: { value: "#3f3f46" },
            800: { value: "#27272a" },
            900: { value: "#18181b" },
            950: { value: "#09090b" },
          },
          // Semantic colors
          success: {
            50: { value: "#f0fdf4" },
            100: { value: "#dcfce7" },
            500: { value: "#22c55e" },
            600: { value: "#16a34a" },
            700: { value: "#15803d" },
            900: { value: "#14532d" },
          },
          warning: {
            50: { value: "#fffbeb" },
            100: { value: "#fef3c7" },
            500: { value: "#f59e0b" },
            600: { value: "#d97706" },
            700: { value: "#b45309" },
            900: { value: "#78350f" },
          },
          error: {
            50: { value: "#fef2f2" },
            100: { value: "#fee2e2" },
            500: { value: "#ef4444" },
            600: { value: "#dc2626" },
            700: { value: "#b91c1c" },
            900: { value: "#7f1d1d" },
          },
          // Neutral colors
          white: { value: "#ffffff" },
          black: { value: "#000000" },
          transparent: { value: "transparent" },
        },
        // Typography tokens
        fonts: {
          sans: {
            value: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          },
          mono: { value: "'JetBrains Mono', Consolas, 'Monaco', 'Courier New', monospace" },
          heading: {
            value: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          },
        },
        fontSizes: {
          xs: { value: "0.75rem" },
          sm: { value: "0.875rem" },
          base: { value: "1rem" },
          lg: { value: "1.125rem" },
          xl: { value: "1.25rem" },
          "2xl": { value: "1.5rem" },
          "3xl": { value: "1.875rem" },
          "4xl": { value: "2.25rem" },
          "5xl": { value: "3rem" },
          "6xl": { value: "3.75rem" },
        },
        fontWeights: {
          thin: { value: 100 },
          light: { value: 300 },
          normal: { value: 400 },
          medium: { value: 500 },
          semibold: { value: 600 },
          bold: { value: 700 },
          extrabold: { value: 800 },
          black: { value: 900 },
        },
        lineHeights: {
          none: { value: 1 },
          tight: { value: 1.25 },
          snug: { value: 1.375 },
          normal: { value: 1.5 },
          relaxed: { value: 1.625 },
          loose: { value: 2 },
        },
        // Spacing tokens - 8px grid system + 4px
        spacing: {
          0: { value: "0" }, // 0px
          1: { value: "0.25rem" }, // 4px
          2: { value: "0.5rem" }, // 8px
          4: { value: "1rem" }, // 16px
          6: { value: "1.5rem" }, // 24px
          8: { value: "2rem" }, // 32px
          10: { value: "2.5rem" }, // 40px
          12: { value: "3rem" }, // 48px
          16: { value: "4rem" }, // 64px
          20: { value: "5rem" }, // 80px
          24: { value: "6rem" }, // 96px
          32: { value: "8rem" }, // 128px
          40: { value: "10rem" }, // 160px
          48: { value: "12rem" }, // 192px
          56: { value: "14rem" }, // 224px
          64: { value: "16rem" }, // 256px
          72: { value: "18rem" }, // 288px
          80: { value: "20rem" }, // 320px
          96: { value: "24rem" }, // 384px
          128: { value: "32rem" }, // 512px
          160: { value: "40rem" }, // 640px
          192: { value: "48rem" }, // 768px
          224: { value: "56rem" }, // 896px
          256: { value: "64rem" }, // 1024px
        },
        // Sizing tokens - 8px grid system + 4px
        sizes: {
          1: { value: "0.25rem" }, // 4px
          2: { value: "0.5rem" }, // 8px
          4: { value: "1rem" }, // 16px
          6: { value: "1.5rem" }, // 24px
          8: { value: "2rem" }, // 32px
          10: { value: "2.5rem" }, // 40px
          12: { value: "3rem" }, // 48px
          16: { value: "4rem" }, // 64px
          20: { value: "5rem" }, // 80px
          24: { value: "6rem" }, // 96px
          32: { value: "8rem" }, // 128px
          40: { value: "10rem" }, // 160px
          48: { value: "12rem" }, // 192px
          56: { value: "14rem" }, // 224px
          64: { value: "16rem" }, // 256px
          72: { value: "18rem" }, // 288px
          80: { value: "20rem" }, // 320px
          96: { value: "24rem" }, // 384px
          128: { value: "32rem" }, // 512px
          160: { value: "40rem" }, // 640px
          192: { value: "48rem" }, // 768px
          224: { value: "56rem" }, // 896px
          256: { value: "64rem" }, // 1024px
          // Semantic sizes
          xs: { value: "20rem" }, // 320px
          sm: { value: "24rem" }, // 384px
          md: { value: "28rem" }, // 448px
          lg: { value: "32rem" }, // 512px
          xl: { value: "36rem" }, // 576px
          "2xl": { value: "42rem" }, // 672px
          "3xl": { value: "48rem" }, // 768px
          "4xl": { value: "56rem" }, // 896px
          "5xl": { value: "64rem" }, // 1024px
          "6xl": { value: "72rem" }, // 1152px
          "7xl": { value: "80rem" }, // 1280px
          // Special values
          full: { value: "100%" },
          screen: { value: "100vw" },
          min: { value: "min-content" },
          max: { value: "max-content" },
          fit: { value: "fit-content" },
        },
        // Border radius tokens
        radii: {
          none: { value: "0" },
          sm: { value: "0.125rem" },
          base: { value: "0.25rem" },
          md: { value: "0.375rem" },
          lg: { value: "0.5rem" },
          xl: { value: "0.75rem" },
          "2xl": { value: "1rem" },
          "3xl": { value: "1.5rem" },
          full: { value: "9999px" },
        },
        // Border width tokens
        borderWidths: {
          0: { value: "0" },
          1: { value: "1px" },
          2: { value: "2px" },
          4: { value: "4px" },
          8: { value: "8px" },
        },
        // Shadow tokens
        shadows: {
          sm: { value: "0 1px 2px 0 rgb(0 0 0 / 0.05)" },
          base: { value: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)" },
          md: { value: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)" },
          lg: { value: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)" },
          xl: { value: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" },
          "2xl": { value: "0 25px 50px -12px rgb(0 0 0 / 0.25)" },
          inner: { value: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)" },
          none: { value: "none" },
        },
        // Z-index tokens
        zIndex: {
          hide: { value: -1 },
          auto: { value: "auto" },
          base: { value: 0 },
          docked: { value: 10 },
          dropdown: { value: 1000 },
          sticky: { value: 1100 },
          banner: { value: 1200 },
          overlay: { value: 1300 },
          modal: { value: 1400 },
          popover: { value: 1500 },
          skipLink: { value: 1600 },
          toast: { value: 1700 },
          tooltip: { value: 1800 },
        },
      },
      // Keyframes for animations
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInUp: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInDown: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        bounce: {
          "0%, 20%, 53%, 80%, 100%": { transform: "translate3d(0,0,0)" },
          "40%, 43%": { transform: "translate3d(0, -30px, 0)" },
          "70%": { transform: "translate3d(0, -15px, 0)" },
          "90%": { transform: "translate3d(0, -4px, 0)" },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",

  // Enable JSX framework
  jsxFramework: "react",
});
