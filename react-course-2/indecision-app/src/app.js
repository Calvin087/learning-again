class IndecisionApp extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: "Indecision App",
      subtitle: "Let's decide for you",
      options: ['Choice one', 'Choice two', 'Choice three'],
    }
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
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
    alert(this.state.options[randomNum])
  }

  render() {
    return (
      <div>
        <Header title={this.state.title} subtitle={this.state.subtitle}/>
        <Action 
          hasOptions={this.state.options.length > 0} 
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption />
      </div>
    )
  }
}

class Header extends React.Component {
  render(){
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    )
  }
} 

class Action extends React.Component {
    render() {
    return (
      <div>
        <button
          disabled={!this.props.hasOptions}
          onClick={this.props.handlePick}
        >
          What should i do
        </button>
      </div>
    )
  }
}

class Options extends React.Component {
  render(){
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        {this.props.options.map((option) => <Option key={[option]} optionText={option}/>)}
      </div>
    )
  }
}

class Option extends React.Component {
  render(){
    return (
      <div>
        <p>{this.props.optionText}</p>
      </div>
    )
  }
}

class AddOption extends React.Component {

  handleAddOption(e) {
    e.preventDefault()

    const option = e.target.elements.option.value.trim()

    if(option) {
      alert(option)
    }

  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleAddOption}>
        <input type="text" name="option"/>
          <button>Add Option</button>
      </form>
        <p>Add option Component here</p>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))