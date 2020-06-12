import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabletop from 'tabletop'
import CardComponent from './CardComponent'
import Grid from '@material-ui/core/Grid';
import './App.css'

class App extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            selction: 'all'
        }

        console.log(this.state.selection);


        this.handleChange = this.handleChange.bind(this);

    }

    componentDidMount() {
        Tabletop.init({
            key: '1eU49VfDMFI5lWCpqb7rZnAxlqmAee8E_xr3wS0okdto',
            callback: googleData => {
                this.setState({
                    data: googleData
                })
            },
            simpleSheet: true
        })
    }

    handleChange(e) {
        this.setState({ selection: e.target.value });
    }

    render() {
        const { data } = this.state
        console.log(this.state.selection);
        // <div key={item.key}>
        return (

            <div className="main-container">

                <header className="App-header">
                    <h1 className="page-title">My attempt</h1>
                </header>

                <div>
                    <p>Business Type</p>
                    <select value={this.state.selection} onChange={this.handleChange}>
                        <option value="all">all</option>
                        <option value="restaurant">restaurant</option>
                        <option value="bar">bar</option>
                        <option value="fitness">fitness</option>
                    </select>
                </div>


                <div className="card-container">
                    {data.map(item => {
                        return (
                            <div key={item.key}>


                                <CardComponent
                                    bizName={item.bizName}
                                    website={item.website}
                                    description={item.description}
                                    address={item.addy}
                                    phone={item.phone}
                                    times={item.openingTimes}
                                    categoryOne={item.categoryOne}
                                    categoryTwo={item.categoryTwo}
                                    categoryThree={item.categoryThree}
                                    heroImg={item.heroImg}
                                />

                            </div>
                        )
                    })
                    }
                </div>

            </div>

        );
    }
}

export default App;