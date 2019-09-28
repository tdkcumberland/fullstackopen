import React, {useState} from 'react'
import ShowDetail from './ShowDetail'

const CountryDetail = (props) => {

    const [showCountry, setShowCountry] = useState(false)
    const [buttonName, setButtonName] = useState('show')

    const showCountryDetail = (event) => {
        event.preventDefault()
        setShowCountry(showCountry ? false : true)
        setButtonName(buttonName==='show' ? 'hide' : 'show')
        console.log(showCountry)
    }

    const showCountryDetailToggle = () =>{
        const whatToShow = (showCountry ? <ShowDetail languages={props.languages}
            capital={props.capital}
            population={props.population}
            flag={props.flag}
            /> : '')
        return (
            whatToShow
        )
    }

    return (
        <>
            <h3>
                Country Name : {props.name}
                <button onClick={showCountryDetail}>{buttonName}</button>
            </h3>
            <div>
                {showCountryDetailToggle()}
            </div>
            <div>
            </div>
        </> 
    )

}

export default CountryDetail