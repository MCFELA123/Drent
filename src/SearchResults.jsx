import React from 'react'
import mini from './img/mini-two.png'
import mavicAirTwo from './img/pngimg.com - mavic_PNG18.png'
import air2 from './img/air2.png'
import Dasher from './dasher'

export const SearchResults = () => {
  const head = {
    width: '90%',
    marginTop: '7px',
    position: 'absolute',
  }

  return (
    <div className='search-results d-align' id='result'>
    <div style={head}>
      <div className="left">
      <text className='capitalize off-white-col' style={{fontSize: '1em'}} id='status'></text>
      </div>
      <div className="right">
      <text style={{color: '#5b72f1', fontSize: '1em'}}>See all</text>
      </div>
    </div>
        <div className="results" id='results'>

          </div>
    </div>
  )
}

export default SearchResults