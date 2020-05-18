import React from 'react'
import Option from './Option'

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

export default Options