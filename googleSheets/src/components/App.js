import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabletop from 'tabletop'
import CardComponent from './CardComponent'
import loadingImg from '../images/curveLoad.gif'
import './App.css'

class App extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            categories: undefined,
            city: undefined,
            country: undefined,
            imgLoad: true
        }

        this.handleChangeCountry = this.handleChangeCountry.bind(this);
        this.handleChangeCity = this.handleChangeCity.bind(this);
        this.handleChangeCategories = this.handleChangeCategories.bind(this);

    }

    componentDidMount() {
        Tabletop.init({
            key: '1eU49VfDMFI5lWCpqb7rZnAxlqmAee8E_xr3wS0okdto',
            callback: googleData => {
                this.setState({
                    data: googleData,
                    categories: 'all',
                    city: "Madrid",
                    country: "España",
                    imgLoad: false
                })
            },
            simpleSheet: true,
        })
    }

    handleChangeCountry(e) {
        const countryChoice = e.target.value

        switch (countryChoice) {
            case "United Kingdom":
                this.setState({ city: "London"})
                break
            case "España":
                this.setState({ city: "Madrid" })
                break
        }
        this.setState({ country: countryChoice });
    }

    handleChangeCity(e) {
        this.setState({ city: e.target.value });
    }

    handleChangeCategories(e) {
        this.setState({ categories: e.target.value });
    }

    render() {
        const { data, categories, city, country} = this.state
        
        const filteredData = data.filter(item => item.categories.includes(categories) && item.city.includes(city) && item.country.includes(country))
        
        return (

            <div>
            <div className="main-container">

                <div className="top-bar">
                        <p className="top-bar__content">We need your help to expand to more countries. Suggest a business <a href="https://forms.gle/Z7Gh48YXqz2cK5iCA" target="_blank" >Here</a></p>
                </div>

                <header>
                    <div className="header-content">
                        <h1 className="page-title">✊🏾 Local Black Business</h1>
                        <p className="page-title__sub">From restaurants to urban orchards. Find what you need below and continue to support the black economy.</p>
                    </div>  
                </header>

                <div className="select-nav">
                    <select value={country} onChange={this.handleChangeCountry}>
                        <option value="" disabled selected>Country</option>
                        <option value="España">España</option>
                        <option value="United Kingdom">United Kingdom</option>
                    </select>

                    <select value={city} onChange={this.handleChangeCity}>
                        <option value="" disabled selected>City</option>
                        <option value="Madrid">Madrid</option>
                        <option value="London">London</option>
                    </select>

                    <select value={categories} onChange={this.handleChangeCategories}>
                        <option value="" disabled selected>City</option>
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


                        {this.state.imgLoad === true ? <img className="loadingImage" src={loadingImg} /> : null}
                    
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

                <div className="footer">
                    👨🏾‍💻 A Work In Progress - Built with 🖤 by <a href="https://www.calvintorra.com" target="_blank" >Calvin Torra</a>
                </div>

        </div>

        );
    }
}

export default App;