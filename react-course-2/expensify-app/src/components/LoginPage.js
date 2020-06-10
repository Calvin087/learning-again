import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth'

export const LoginPage = ({startLogin}) => ( // Stateless function with startlogin passed in as a prop
    <div className="box-layout">
        <div className="box-layout__box">
            <img className="app-image" src="/img/money2.jpg" />
            <h1 className="box-layout__title">Expensis</h1>
            <p>Start Tracking Your Expenses</p>
            <button className="button" onClick={startLogin}>Log in with Google</button>
            <button className="button" onClick={startLogin}>Log in with Google</button>
        </div>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)