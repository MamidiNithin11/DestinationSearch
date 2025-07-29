import {Component} from 'react'
import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onChangeinput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searcheddata = destinationsList.filter(eachlocation =>
      eachlocation.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <h1 className="heading">Destination Search</h1>
        <div className="searchbar">
          <input
            type="search"
            placeholder="Search"
            onChange={this.onChangeinput}
            className="search-input"
            value={searchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="search-icon"
          />
        </div>
        <ul className="listof-cards">
          {searcheddata.map(eachone => (
            <DestinationItem key={eachone.id} eachcarddetails={eachone} />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
