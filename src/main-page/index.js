// import logo from './logo.svg'
import React, {Component} from 'react';
import './main-page.css';
import Header from './header';
import FeaturedHouse from './featured-house'
import Housefilter from './house-filter';
import SearchResults from '../search-results';
import HouseDetail from '../house'



class App extends Component{

    state = {}

 componentDidMount(){
   this.fetchHouses()
 }   

fetchHouses = () =>(
  fetch('/houses.json')
  .then(res=>res.json())
  .then(allHouses =>
    {this.allHouses = allHouses;
      this.determinedFeaturedHouse()
      this.determinedUniqueCountries()
console.log(allHouses)
    })
)

determinedUniqueCountries =() => {
const countries = this.allHouses ? Array.from(new Set(this.allHouses.map(h => h.country))) : [];
countries.unshift(null);
this.setState({countries})
}
determinedFeaturedHouse = () => {
  if(this.allHouses){
    const randomIndex = Math.floor(Math.random() * this.allHouses.length)
    const featuredHouse = this.allHouses[randomIndex]
    this.setState({featuredHouse})
  }
}

filterHouses = (country) => {
  this.setState({activeHouse: null})
  const filteredHouses = this.allHouses.filter((h) => h.country === country)
  this.setState({filteredHouses})
  this.setState({country})
}

setActiveHouse = (house) => {
  this.setState({activeHouse: house})
}

  render(){
    let activeComponent = null
    if(this.state.country)
     activeComponent = <SearchResults country={this.state.country} 
     filteredHouses={this.state.filteredHouses}
     activeHouse={this.activeHouse}/>
     if(this.state.activeHouse)
     activeComponent = <HouseDetail house={this.state.activeHouse}/>
     if(!activeComponent)
    activeComponent = <FeaturedHouse house={this.state.featuredHouse}/> 
  return (
    <div className="container">
      <Header message="Providing houses world wide" />  
      <Housefilter countries={this.state.countries} filterHouses={this.filterHouses} />
      
      {activeComponent} 
    </div>
  );
}
}
export default App;
