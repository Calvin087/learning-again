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
  }

  handleDeleteOptions(){
    this.setState(() => {
      return {
        options: [],
      }
    })
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

    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
        }
    })
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
      {props.options.map((option) => <Option key={[option]} optionText={option} />)}
    </div>
  )
}

const Option = (props) => {
  return (
    <div>
      <p>{props.optionText}</p>
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

    this.setState(() => {
      return { error }
    })
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