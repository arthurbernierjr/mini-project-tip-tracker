import { Komponent , render} from 'kofujs'
import TipInput from './components/TipInput'

const styles = {
  mainBackground: {
    'backgroundColor': 'rgba(25,25,25,0.4)',
    'minHeight': '100vh'
  },
  mainHeading: {
    'fontSize': '4rem',
    'color': 'white',
    'textAlign': 'center',
    'margin': '0',
    'padding': '8px'
  }
}

class Example extends Komponent{
  constructor (props)  {
    super (props)

    this.classNames = this.setStyles(styles).classes
  }

  komponentDidMount () {
    console.log('Hello world')
  }

  present () {
    return (
      <div className={this.classNames.mainBackground}>
        <h1 className={this.classNames.mainHeading}>Tip Calculator Example</h1>
        <TipInput />
      </div>
    )
  }
}

render(<Example />, document.getElementById('app'))
