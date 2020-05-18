import React from 'react'

class AddOption extends React.Component {
    constructor(props) {
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
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
                <p>Add option Component here</p>
            </div>
        )
    }
}

export default AddOption