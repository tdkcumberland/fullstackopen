import React from 'react'
import CountryLang from './CountryLang'

const CountryDetail = (props) => {

    const languageRow = () => props.languages.map( eachLang =>
        <CountryLang
            language = {eachLang.name}
            key = {eachLang.name}
        />
    )

    return (
        <>
            <h3>
                Country Name : {props.name}
            </h3>
            <h4>
                <p>Capital : {props.capital}</p>
                <p>Population: {props.population.toLocaleString('en')}</p>
            </h4>
            <h4>
                Offical Language(s):
            </h4>
            <div>
                {languageRow()}
            </div>
            <img src={props.flag.toString()} style={{width:300, height:175}} alt='flag'></img>
        </>
    )

}

export default CountryDetail