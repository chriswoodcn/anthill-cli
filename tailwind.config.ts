/** @type {import('tailwindcss').Config} */
import { Config } from "tailwindcss";
import { withBasePath, } from "./lib";
import configuraton, { BlackColors, mixBlack, mixWhite, PrimaryColors, WhiteColors } from './configuration.mjs';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);

const levelDefault = configuraton.Colors.DefaultLevel
const config: Config = {
  darkMode: ["selector", '[data-mantine-color-scheme="dark"]'],
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        nunito: ['var(--font-nunito)'],
      },
      colors: {
        primary: {
          DEFAULT: PrimaryColors[levelDefault],
          0: PrimaryColors[0],
          1: PrimaryColors[1],
          2: PrimaryColors[2],
          3: PrimaryColors[3],
          4: PrimaryColors[4],
          5: PrimaryColors[5],
          6: PrimaryColors[6],
          7: PrimaryColors[7],
          8: PrimaryColors[8],
          9: PrimaryColors[9],
        },
        secondary: {
          DEFAULT: '#018ACB',
          light: '#018ACB77',
          'dark-light': 'rgb(128 93 202 / 15%)',
        },
        success: {
          DEFAULT: '#3ab078',
          light: '#3ab07877',
          'dark-light': 'rgb(58,176,120,.15)',
        },
        danger: {
          DEFAULT: '#FF7878',
          light: '#FF787877',
          'dark-light': 'rgb(255,120,120,.15)',
        },
        warning: {
          DEFAULT: '#FFD966',
          light: '#FFD96677',
          'dark-light': 'rgb(255,217,102,.15)',
        },
        info: {
          DEFAULT: '#DBA979',
          light: '#DBA979',
          'dark-light': 'rgb(219, 169, 121,.15)',
        },
        white: {
          DEFAULT: WhiteColors[9],
          0: WhiteColors[0],
          1: WhiteColors[1],
          2: WhiteColors[2],
          3: WhiteColors[3],
          4: WhiteColors[4],
          5: WhiteColors[5],
          6: WhiteColors[6],
          7: WhiteColors[7],
          8: WhiteColors[8],
          9: WhiteColors[9],
        },
        black: {
          DEFAULT: BlackColors[9],
          0: BlackColors[0],
          1: BlackColors[1],
          2: BlackColors[2],
          3: BlackColors[3],
          4: BlackColors[4],
          5: BlackColors[5],
          6: BlackColors[6],
          7: BlackColors[7],
          8: BlackColors[8],
          9: BlackColors[9],
        },
        dark: {
          DEFAULT: '#3b3f5c',
          light: '#eaeaec',
          'dark-light': 'rgba(59,63,92,.15)',
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        bg_login: `url('${withBasePath(
          "/assets/images/background/bg-login.jpg"
        )}')`,
        bg_home: `url('${withBasePath(
          "/assets/images/background/bg-home-dolphin.jpg"
        )}')`,
        bg_map: `url('${withBasePath(
          "/assets/images/background/bg-map.png"
        )}')`,
        bg_message_box: `url('${withBasePath(
          "/assets/images/background/menu-heade.jpg"
        )}')`,
        bg_checbox_close: `url('${withBasePath(
          "/assets/images/template/close.svg"
        )}')`,
        bg_checbox_checked: `url('${withBasePath(
          "/assets/images/template/checked.svg"
        )}')`,
        bg_knowledge_pattern: `url('${withBasePath(
          "/assets/images/template/knowledge/pattern.png"
        )}')`,
      },
      backgroundColor: {
        "white-gray": mixBlack('#ffffff', 0.05),
        "black-gray": mixWhite('#000000', 0.05)
      }
    },
    //@ts-ignore
    typography: ({ theme }) => ({
      DEFAULT: {
        css: {
          '--tw-prose-invert-headings': theme('colors.white'),
          '--tw-prose-invert-links': theme('colors.black'),
          h1: { fontSize: '40px', marginBottom: '0.5rem', marginTop: 0, lineHeight: '1em' },
          h2: { fontSize: '32px', marginBottom: '0.5rem', marginTop: 0, lineHeight: '1em' },
          h3: { fontSize: '28px', marginBottom: '0.5rem', marginTop: 0, lineHeight: '1em' },
          h4: { fontSize: '24px', marginBottom: '0.5rem', marginTop: 0, lineHeight: '1em' },
          h5: { fontSize: '20px', marginBottom: '0.5rem', marginTop: 0, lineHeight: '1em' },
          h6: { fontSize: '16px', marginBottom: '0.5rem', marginTop: 0, lineHeight: '1em' },
          p: { marginBottom: '0.5rem' },
          li: { margin: 0 },
          img: { margin: 0 },
        },
      },
    }),
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    require('@tailwindcss/typography'),
  ],
};
export default config;
