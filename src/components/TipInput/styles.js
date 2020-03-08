export const tipInputStyles = {
  container: {
    'display': 'flex',
    'flexDirection': 'column',
    'justifyContent': 'center',
    'alignItems': 'center',
    'boxShadow': '0 4px 8px rgba(0,0,0,0.2)',
    'transition': '0.3s',
    'width': '50vw',
    'minWidth': '300px',
    'margin': '0 auto',
    'padding': '1rem',
    'boxSizing':'border-box',
    '&:hover': {
      'boxShadow': '0 8px 16px rgba(0,0,0,0.4)'
    }
  },
  formStyle: {
    'display': 'flex',
    'justifyContent': 'center',
    'width': '100%'
  },
  buttonStyle: {
    'backgroundColor': 'red',
    'color': 'white',
    'height':'2rem',
    'fontSize': '1.4rem',
    'flexBasis': '25%'
  },
  inputStyle: {
    'border': 'solid 1px black',
    'height': '2rem',
    'flexBasis':'45%'
  }
}
