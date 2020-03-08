import { Komponent , render} from 'kofujs'
import TipInput from './components/TipInput'

const styles = {
  mainPageHeading: {
    backgroundColor: 'red'
  }
}

class Example extends Komponent{
  constructor (props)  {
    super (props)

    this.classes = this.setStyles(styles).classes
  }

  komponentDidMount () {
    console.log('Hello world')
  }

  present () {
    return (
        <TipInput />
    )
  }
}

render(<Example />, document.getElementById('app'))
