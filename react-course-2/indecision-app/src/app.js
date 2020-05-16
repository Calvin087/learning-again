class IndecisionApp extends React.Component {
  render() {

    const title = "Indecision App"
    const subtitle = "Let's decide for you"
    const options = ['Choice one', 'Choice two', 'Choice three']

    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action />
        <Options options={options}/>
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
        <button>What should i do</button>
      </div>
    )
  }
}

class Options extends React.Component {
  render(){
    return (
      <div>
        <p>Options Component Here</p>
        {this.props.options.map((option) => <p>{option}</p>)}
      </div>
    )
  }
}

class Option extends React.Component {
  render(){
    return (
      <div>
        <p>Option Component</p>
      </div>
    )
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <div>
        <p>Add option Component here</p>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))