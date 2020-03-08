import {Komponent} from 'kofujs';
import {tipInputStyles} from './styles.js'

export default class TipInput extends Komponent {
  constructor(props){
    super(props)
    this.state = {
      value: 0,
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
    this.setState({value: value })
  }
  handleChange(event){
    this.setState({input: event.currentTarget.value})
  }

  present () {
    return (
      <div className={this.classNames.container}>
      <h1>Your food Costs {this.state.input}</h1>
      <h1>You Should Tip {this.state.value}</h1>
      <form onSubmit={this.handleSubmit} className = {this.classNames.formStyle}>
        <input className={this.classNames.inputStyle} type="number" name="tip" onChange={this.handleChange} onBlur={this.handleChange} onKeyUp={this.handleChange} />
        <input className={this.classNames.buttonStyle} type="submit" value="What to tip" />
      </form>
      </div>
    )
  }

}
