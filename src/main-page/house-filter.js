import React, { Component } from 'react';

class Housefilter extends Component {
    state = {}
    mychangeHandler = (event) => {
        const country = event.target.value 
        this.props.filterHouses(country)
    }
    render() { 
        const search = this.state.search;
        const countries = this.props.countries || []
        return (
            <div className="form-group row text-center mt-3 mb-2">
        <div className="offset-md-2 col-md-4 dream">
        Look for your dream house in this country
        </div>
        <div className="col-md-4 dropdown">
    <select className="form-control" 
    value={search} 
    onChange={this.mychangeHandler}>
     {countries.map((c) => <option key={c} value={c}>{c}</option>)}
   </select>
        </div>
        </div>
          );
    }
}
 
export default Housefilter;