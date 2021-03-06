import React from 'react'
import Action from './Action'
import AddOption from './AddOption'
import Header from './Header'
import Options from './Options'
import validator from 'validator'
import OptionModal from './OptionModal'

class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    }

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }))
    }

    handleDeleteSingleOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }))
    }

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randomNum]
        
        this.setState(() => ({ selectedOption: option}))
    }

    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined }))
    }

    handleAddOption = (option) => {
        if (!option) {
            return "Enter valid value to add item"
        } else if (this.state.options.indexOf(option) > -1) {
            return "This already exists"
        }

        this.setState((prevState) => ({ options: prevState.options.concat(option) }))
    }

    componentDidMount() {
        const json = localStorage.getItem('options')
        const options = JSON.parse(json)

        if (options) {
            this.setState(() => ({ options }));
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }
    }

    render() {

        const subtitle = "Not sure what to do? Let me decide for you!"


        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteSingleOption={this.handleDeleteSingleOption}
                        />
                        <AddOption
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                    <OptionModal
                        selectedOption={this.state.selectedOption}
                        handleClearSelectedOption={this.handleClearSelectedOption}
                    />
                </div>
            </div>
        )
    }
}

export default IndecisionApp