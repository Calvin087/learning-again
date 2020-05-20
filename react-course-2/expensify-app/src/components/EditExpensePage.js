import React from 'react'

const EditExpensePage = (props) => {
    console.log(props)
    return (
        <div>
            You're editing {props.match.params.id}
        </div>
    )
}

export default EditExpensePage 