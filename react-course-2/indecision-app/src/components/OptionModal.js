import React from "react"
import Modal from "react-modal"

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel="SelectedOption"
        onRequestClose={props.handleClearSelectedOption}
    >
        <h3>Selected Option is:</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.handleClearSelectedOption}>Okay</button>
    </Modal>
)

export default OptionModal