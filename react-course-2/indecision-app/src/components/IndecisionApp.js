import React from 'react'
import Action from './Action'
import AddOption from './AddOption'
import Header from './Header'
import Options from './Options'
import validator from 'validator'

class IndecisionApp extends React.Component {
    constructor(props) {
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

    componentDidMount() {
        const json = localStorage.getItem('options')
        const options = JSON.parse(json)

        this.setState(() => ({ options }))
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }
    }

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }))
    }

    handleDeleteSingleOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }))
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randomNum]
        alert(option)
    }

    handleAddOption(option) {
        if (!option) {
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
                <Header subtitle={this.state.subtitle} />
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

export default IndecisionApp