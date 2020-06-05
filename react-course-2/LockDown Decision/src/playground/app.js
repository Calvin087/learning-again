class IndecisionApp extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: "Indecision App",
      subtitle: "Let's decide for you",
      options: props.options,
    }
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handleDeleteSingleOption = this.handleDeleteSingleOption.bind(this)
  }

  componentDidMount(){
    const json = localStorage.getItem('options')
    const options = JSON.parse(json)

    this.setState(() => ({ options }))
  }

  componentDidUpdate() {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json)
    }
  }

  handleDeleteOptions(){
    this.setState(() => ({ options: [] }))
  }

  handleDeleteSingleOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }))
  }

  handlePick(){
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randomNum]
    alert(option)
  }

  handleAddOption(option){
    if(!option) {
      return "enter valid value to add item"
    } else if (this.state.options.indexOf(option) > -1) {
      return "This already exists"
    }

    this.setState((prevState) => ({ options: prevState.options.concat(option) }))
    }

  // RENDER

  render() {
    return (
      <div>
        <Header subtitle={this.state.subtitle}/>
        <Action 
          hasOptions={this.state.options.length > 0} 
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteSingleOption={this.handleDeleteSingleOption}
        />
        <AddOption 
          handleAddOption={this.handleAddOption}
        />
      </div>
    )
  }
}

IndecisionApp.defaultProps = {
  options: []
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  )
}

Header.defaultProps = {
  title: "Indecision App"
}

const Action = (props) => {
  return (
    <div>
      <button
        disabled={!props.hasOptions}
        onClick={props.handlePick}
      >
        What should i do
        </button>
    </div>
  )
}

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.map((option) => (
        <Option
          key={[option]}
          optionText={option}
          handleDeleteSingleOption={props.handleDeleteSingleOption}
          />
          ))
        }
    </div>
  )
}

const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button
        onClick={(e) => {
          props.handleDeleteSingleOption(props.optionText)
        }}
        >
          remove
        </button>
    </div>
  )
}

class AddOption extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      error: undefined,
    }
    this.handleAddOption = this.handleAddOption.bind(this)
  }

  handleAddOption(e) {
    e.preventDefault()

    const option = e.target.elements.option.value.trim()
    const error = this.props.handleAddOption(option)
    
    this.setState(() => ({ error }))
    e.target.elements.option.value = ""
  }

  render() {
    return (
      <div>
      {this.state.error && <p>{this.state.error}</p>}
      <form onSubmit={this.handleAddOption}>
        <input type="text" name="option"/>
          <button>Add Option</button>
      </form>
        <p>Add option Component here</p>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp options={["dave", "div"]} />, document.getElementById('app'))