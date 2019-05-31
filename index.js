const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = () => {
  return ({ addUtilities, addComponents, theme }) => {
    addUtilities({
      '.sr-only': {
        position: 'absolute',
        width: '1px',
        height: '1px',
        padding: '0',
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        whiteSpace: 'nowrap',
        border: '0',
      },
    });

    addComponents({
      '.form-checkbox': {
        appearance: 'none',
        display: 'inline-block',
        height: '1em',
        width: '1em',
        verticalAlign: 'middle',
        borderWidth: theme('borderWidth.default', defaultTheme.borderWidth.default),
        borderRadius: theme('borderRadius.default', defaultTheme.borderRadius.default),
        backgroundColor: '#fff',
        userSelect: 'none',
        'input[type=checkbox]:focus + &, input[type=checkbox]&:focus': {
          outline: 'none',
          boxShadow: theme('boxShadow.outline', defaultTheme.boxShadow.outline),
        },
        'input[type=checkbox]:focus:not(:checked) + &, input[type=checkbox]&:focus:not(:checked)': {
          borderColor: defaultTheme.colors.blue[400],
        },
        'input[type=checkbox]:checked + &, input[type=checkbox]&:checked': {
          backgroundColor: 'currentColor',
          borderColor: 'currentColor',
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 16 16' fill='%23fff' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.293 4.293a1 1 0 0 1 0 1.414L7 12a1 1 0 0 1-1.414 0L3.293 9.707a1 1 0 0 1 1.414-1.414l1.586 1.586 5.586-5.586a1 1 0 0 1 1.414 0z'/%3E%3C/svg%3E")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        },
      },
      '.form-radio': {
        appearance: 'none',
        display: 'inline-block',
        height: '1em',
        width: '1em',
        verticalAlign: 'middle',
        borderWidth: theme('borderWidth.default', defaultTheme.borderWidth.default),
        borderRadius: '9999px',
        backgroundColor: '#fff',
        userSelect: 'none',
        'input[type=radio]:focus + &, input[type=radio]&:focus': {
          outline: 'none',
          boxShadow: theme('boxShadow.outline', defaultTheme.boxShadow.outline),
        },
        'input[type=radio]:focus:not(:checked) + &, input[type=radio]&:focus:not(:checked)': {
          borderColor: defaultTheme.colors.blue[400],
        },
        'input[type=radio]:checked + &, input[type=radio]&:checked': {
          backgroundColor: 'currentColor',
          borderColor: 'currentColor',
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='%23ffffff' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='12' cy='12' r='5'/%3E%3C/svg%3E")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        },
      },
      '.form-input, .form-textarea, .form-multiselect': {
        appearance: 'none',
        backgroundColor: '#fff',
        borderWidth: theme('borderWidth.default', defaultTheme.borderWidth.default),
        borderRadius: theme('borderRadius.default', defaultTheme.borderRadius.default),
        padding: `${theme('spacing.2', defaultTheme.spacing[2])} ${theme('spacing.3', defaultTheme.spacing[3])}`,
        lineHeight: theme('lineHeight.normal', defaultTheme.lineHeight.normal),
        '&:focus': {
          outline: 'none',
          boxShadow: theme('boxShadow.outline', defaultTheme.boxShadow.outline),
          borderColor: defaultTheme.colors.blue[400],
        },
      },
      '.form-select': {
        backgroundColor: '#fff',
        borderWidth: theme('borderWidth.default', defaultTheme.borderWidth.default),
        borderRadius: theme('borderRadius.default', defaultTheme.borderRadius.default),
        paddingTop: theme('spacing.2', defaultTheme.spacing[2]),
        paddingRight: theme('spacing.10', defaultTheme.spacing[10]),
        paddingBottom: theme('spacing.2', defaultTheme.spacing[2]),
        paddingLeft: theme('spacing.3', defaultTheme.spacing[3]),
        lineHeight: theme('lineHeight.normal', defaultTheme.lineHeight.normal),
        appearance: 'none',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='${theme('colors.gray.500', defaultTheme.colors.gray[500]).replace('#', '%23')}' viewBox='0 0 24 24' %3E%3Cpath d='M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z'/%3E%3C/svg%3E")`,
        backgroundPosition: `right ${theme('spacing.2', defaultTheme.spacing[2])} center`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '1.5em 1.5em',
        '&::-ms-expand': {
          display: 'none',
        },
        '&:focus': {
          outline: 'none',
          boxShadow: theme('boxShadow.outline', defaultTheme.boxShadow.outline),
          borderColor: defaultTheme.colors.blue[400],
        },
      },
      '.form-input-group': {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'stretch',
      },
      '.form-input-group-left': {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        '& > *': {
          display: 'flex',
          alignItems: 'center',
          lineHeight: theme('lineHeight.normal', defaultTheme.lineHeight.normal),
          paddingLeft: theme('spacing.5', defaultTheme.spacing[5]),
          paddingRight: theme('spacing.5', defaultTheme.spacing[5]),
          height: '100%',
          borderRadius: `${theme('borderRadius.default', defaultTheme.borderRadius.default)} 0 0 ${theme('borderRadius.default', defaultTheme.borderRadius.default)}`,
        },
      },
      '.form-input-group-right': {
        display: 'flex',
        marginRight: '-1px',
        borderRadius: `0 ${theme('borderRadius.default', defaultTheme.borderRadius.default)} ${theme('borderRadius.default', defaultTheme.borderRadius.default)} 0`,
        '& > *': {
          display: 'flex',
          alignItems: 'center',
          borderRadius: `0 ${theme('borderRadius.default', defaultTheme.borderRadius.default)} ${theme('borderRadius.default', defaultTheme.borderRadius.default)} 0`,
          whiteSpace: 'nowrap',
          lineHeight: theme('lineHeight.normal', defaultTheme.lineHeight.normal),
          paddingLeft: theme('spacing.5', defaultTheme.spacing[5]),
          paddingRight: theme('spacing.5', defaultTheme.spacing[5]),
        },
      },
      '.form-input.form-input-group-left, .form-input.form-input-group-right': {
        flex: '1 1 0%',
      },
      '.form-input-group-left > button, .form-input-group-right > button': {
        paddingLeft: theme('spacing.5', defaultTheme.spacing[5]),
        paddingRight: theme('spacing.5', defaultTheme.spacing[5]),
      },
    });
  };
};
