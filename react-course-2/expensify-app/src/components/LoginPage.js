import React from 'react'
import { connect } from 'react-redux'
import { startLoginGoogle, startLoginGit } from '../actions/auth'

export const LoginPage = ({ startLoginGoogle, startLoginGit }) => ( // Stateless function with startlogin passed in as a prop
    <div className="box-layout">
        <div className="box-layout__box">
            <img className="app-image" src="/img/money2.jpg" />
            <h1 className="box-layout__title">Expensis</h1>
            <p>Start Tracking Your Expenses</p>
            <button className="button" onClick={startLoginGoogle}>Log in with Google</button>
            <button className="button__git" onClick={startLoginGit}>Log in with Github</button>
        </div>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    startLoginGoogle: () => dispatch(startLoginGoogle()),
    startLoginGit: () => dispatch(startLoginGit())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)