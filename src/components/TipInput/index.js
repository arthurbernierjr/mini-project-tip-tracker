import {Komponent} from 'kofujs';
import {tipInputStyles} from './styles.js'

export default class TipInput extends Komponent {
  constructor(props){
    super(props)
    this.state = {
      tip: 0,
      input: 0
    }
    this.classNames = this.setStyles(tipInputStyles).classes
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({input: document.querySelector('input[name="tip"]').value})
    const value = (this.state.input * 0.15).toFixed(2)
    this.setState({tip: value })
  }
  handleChange(event){
    this.setState({input: event.currentTarget.value})
  }

  present () {
    return (
      <div className={this.classNames.container}>
      <h1>Your food Costs {this.state.input}</h1>
      <h1>You Should Tip {this.state.tip}</h1>
      <form onSubmit={this.handleSubmit} className = {this.classNames.formStyle}>
        <input className={this.classNames.inputStyle} type="number" name="tip" onChange={this.handleChange} onBlur={this.handleChange} onKeyUp={this.handleChange} />
        <input className={this.classNames.buttonStyle} type="submit" value="What to tip" />
      </form>
      <p>
          This is a very very simple application that uses a form to do a simple calculation.
          {' '}
          The app takes a value in the input box and dynamically changes the application state to store a new input value in the Komponent state.
          {' '}
          On submit the form makes a calculation of 15 percent of the value and stores that in the tip value in the state. 
      </p>
      </div>
    )
  }

}
