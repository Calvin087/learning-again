import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth'

export const LoginPage = ({startLogin}) => ( // Stateless function with startlogin passed in as a prop
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layou__title">Boiler Plate</h1>
            <p>Tagline for App</p>
            <button className="button" onClick={startLogin}>Log in with Google</button>
        </div>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)