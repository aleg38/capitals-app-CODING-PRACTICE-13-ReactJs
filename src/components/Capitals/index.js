import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {activeCapitalId: countryAndCapitalsList[0].id}

  onChangeCapital = event => {
    this.setState({activeCapitalId: event.target.value})
  }

  getCapitalToDisplayCountry = () => {
    const {activeCapitalId} = this.state
    const resultCountry = countryAndCapitalsList.find(
      each => each.id === activeCapitalId,
    )
    return resultCountry.country
  }

  render() {
    const {activeCapitalId} = this.state
    const country = this.getCapitalToDisplayCountry(activeCapitalId)

    return (
      <div className="app-container">
        <div className="capitals-card-container">
          <h1 className="main-heading">Countries And Capitals</h1>
          <div className="select-capitals-container">
            <select
              className="capitals-box"
              onChange={this.onChangeCapital}
              value={activeCapitalId}
            >
              {countryAndCapitalsList.map(eachObject => (
                <option key={eachObject.id} value={eachObject.id}>
                  {eachObject.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="capital-extend-text">is capital of which country?</p>
          </div>
          <p className="result-country-name">{country}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
