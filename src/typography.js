import Typography from 'typography';
import 'typeface-roboto';

const typography = new Typography({
  headerFontFamily: ['Roboto', 'sans-serif'],
  bodyFontFamily: ['Roboto', 'sans-serif'],

  baseFontSize: '19px',
  baseLineHeight: 1.2,
  headerWeight: 700,
  bodyWeight: 400,
  boldWeight: 700,

  headerColor: 'hsl(96, 20%, 5%)',
  bodyColor: 'hsl(197, 41%, 17%)',

  overrideStyles: () => {
    return {
      'h1, h2, h3, h4, h5, h6': {
        textTransform: 'uppercase',
      },
      a: {
        color: 'hsl(183, 31%, 34%)',
        textDecoration: 'none',
      },
      'a:hover': {
        textDecoration: 'underline',
      },
    };
  },
});

// Hot reload TypographyJS in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
