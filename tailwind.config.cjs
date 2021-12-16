const { em, rem, remPair } = require('@viget/tailwindcss-plugins/utilities/fns')
const plugins = require('@viget/tailwindcss-plugins')

module.exports = {
  content: ['./public/**/*.html', './src/**/*.{js,astro}'],
  theme: {
    screens: {
      ty: em(350),
      xs: em(400),
      sm: em(640),
      md: em(750),
      lg: em(1024),
      xl: em(1280),
      jb: em(1440),
      // Down
      xsd: { max: em(399) },
      smd: { max: em(639) },
      mdd: { max: em(749) },
      lgd: { max: em(1023) },
      xld: { max: em(1279) },
    },
    fontFamily: {
      serif: ['Prata', 'Georgia', 'Cambria', '"Times New Roman"', 'serif'],
      sans: [
        'Karla',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
      ],
      logo: [
        'Rubik',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
      ],
    },
    fontSize: {
      12: [rem(12), rem(12)],
      14: [rem(14), rem(17)],
      16: [rem(16), rem(16)],
      18: [rem(18), rem(18)],
      21: [rem(21), rem(21)],
      32: [rem(32), rem(32)],
      48: [rem(48), rem(52)],
      56: [rem(56), rem(64)],
      72: [rem(72), rem(98)],
      '72-fluid': ['clamp(1.5rem, 1em + 4vw, 4.5rem)', 1.2],
    },
    maxWidth: {
      ...remPair(520),
      ...remPair(1152),
    },
    spacing: {
      0: '0',
      px: rem(1),
      ...remPair(2),
      ...remPair(4),
      ...remPair(6),
      ...remPair(8),
      ...remPair(10),
      ...remPair(12),
      ...remPair(14),
      ...remPair(16),
      ...remPair(20),
      ...remPair(24),
      ...remPair(28),
      ...remPair(32),
      ...remPair(36),
      ...remPair(40),
      ...remPair(44),
      ...remPair(48),
      ...remPair(56),
      ...remPair(64),
      ...remPair(80),
      ...remPair(96),
      ...remPair(112),
      ...remPair(128),
      ...remPair(144),
      ...remPair(160),
      ...remPair(200),
    },
    zIndex: {
      '-2': -2,
      '-1': -1,
      0: 0,
      1: 1,
      2: 2,
      3: 3,
    },
    animate: (theme) => ({
      triggerClass: '-in-view',
      staggerDelay: {
        ...theme('transitionDelay'),
      },
      staggerInterval: {
        default: '150ms',
        ...theme('transitionDelay'),
      },
      maxItemIntervalSupport: 9,
      animations: {
        'zoom-in': {
          from: {
            transform: 'scale(0.8)',
            opacity: 0,
          },
        },
        'fade-in': {
          from: {
            opacity: 0,
          },
        },
        'fade-right': {
          from: {
            transform: 'translateX(-15px)',
            opacity: 0,
          },
          to: {
            transform: 'translateX(0)',
            opacity: 1,
          },
        },
      },
    }),
    extend: {
      minHeight: {
        screen: ['100vh', '-webkit-fill-available'],
      },
    },
  },
  plugins: [plugins.animate],
}
