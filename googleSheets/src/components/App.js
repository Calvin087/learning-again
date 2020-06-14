import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabletop from 'tabletop'
import CardComponent from './CardComponent'
import loadingPinkImg from '../images/pink-run.gif'
import './App.css'

class App extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            selction: undefined,
            pinkLoad: true
        }

        this.handleChange = this.handleChange.bind(this);

    }

    componentDidMount() {
        Tabletop.init({
            key: '1eU49VfDMFI5lWCpqb7rZnAxlqmAee8E_xr3wS0okdto',
            callback: googleData => {
                this.setState({
                    data: googleData,
                    selection: 'all',
                    pinkLoad: false
                })
            },
            simpleSheet: true,
        })
    }

    handleChange(e) {
        this.setState({ selection: e.target.value });
    }

    // const filteredData = data.filter(item => item.categories === this.state.selection)

    render() {
        const { data } = this.state
        const filteredData = data.filter(item => item.categories.includes(this.state.selection))

        return (

            <div>
            <div className="main-container">

                <header className="App-header">
                    <div className="header-content">
                        <h1 className="page-title">✊🏾 Local Black Business</h1>
                        <p className="page-title__sub">From restaurants to health and wellness. Find what you need below and contribute to the black economy</p>
                    </div>  
                </header>

                <div className="select-nav">
                    <select value={this.state.selection} onChange={this.handleChange}>
                    <option value="" disabled selected>Business Type</option>
                    <option value="all">All</option>
                    <option value="art">Art</option>
                    <option value="hair & beauty">Hair & Beauty</option>
                    <option value="bar">Drink</option>
                    <option value="restaurant">Food</option>
                    <option value="fruit & veg">Fruit & Veg</option>
                    <option value="shopping">Shopping</option>
                    </select>
                </div>


                <div className="card-container">


                    {this.state.pinkLoad === true ? <img className="loadingImage" src={loadingPinkImg} /> : null}
                
                    {filteredData.map(item => {
                        return (
                            <div key={item.key}>


                                <CardComponent
                                    bizName={item.bizName}
                                    website={item.website}
                                    description={item.description}
                                    street={item.street}
                                    city={item.city}
                                    country={item.country}
                                    phone={item.phone}
                                    times={item.openingTimes}
                                    categories={item.categories}
                                    heroImg={item.heroImg}
                                />

                            </div>
                        )
                    })
                    }
                </div>

                </div>

                <div className="footer">👨🏾‍💻 Made by <a href="https://www.calvintorra.com" target="_blank" >Calvin Torra</a> - With the long lasting future in mind</div>
        </div>

        );
    }
}

export default App;