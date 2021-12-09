import { base } from './base';

export const theme = {
  ...base,
  flex: {
    column: {
      flexDirection: 'column',
    },
    row: {
      flexDirection: 'row',
    },
  },
  link: {
    nav: {
      variant: 'styles.a',
      width: 'auto',
      color: 'secondary',
      '&.active': {
        color: 'text',
      },
      '&:hover': {
        color: 'text',
      },
      fontSize: [3, 3, 3],
      textDecoration: 'none',
    },
  },
  text: {
    default: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      letterSpacing: 'body',
    },
    ...base.text,
  },
  buttons: {
    default: {
      color: 'text',
      cursor: 'pointer',
    },
    primary: {
      variant: 'buttons.default',
      bg: 'background',
    },
    highlight: {
      variant: 'buttons.default',
      color: 'background',
      bg: 'text',
    },
    disabled: {
      color: 'muted',
      cursor: 'default',
      bg: 'hinted',
      '&:hover': {
        color: 'muted',
        bg: 'hinted',
      },
    },
  },
  cards: {
    primary: {
      backgroundColor: 'hinted',
      px: [7],
      py: [7],
      my: [2],
      display: 'flex',
      flexDirection: 'column',
      fontSize: [2, 2, 2, 3],
    },
  },
  box: {
    error: {
      borderStyle: 'solid',
      borderColor: 'red',
      borderWidth: '1px',
      color: 'red',
      p: 3,
    },
    success: {
      borderStyle: 'solid',
      borderColor: 'green',
      borderWidth: '1px',
      color: 'green',
      p: 3,
    },
  },
};
