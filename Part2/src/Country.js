import React, { useState }  from 'react'
import CountryDetail from './CountryDetails'

const Country = (props) => {
    
    const row = () => country.map(eachCountry => 
        <CountryDetail
            key={eachCountry.name}
            name = {eachCountry.name}
            languages = {eachCountry.languages}
            population = {eachCountry.population}
            flag = {eachCountry.flag}
            capital = {eachCountry.capital}
            />
        )

    const [country, setCountry] = useState(props.country)
    const [searchCountry, setSearchCountry] = useState('')
        
    const handleSearchCountryChange = (event) => {
        event.preventDefault()
        setSearchCountry(event.target.value)
        const searchResult = country.filter(eachCountry => eachCountry.name.toUpperCase().includes(event.target.value.toUpperCase()))
        setCountry(searchResult)

        console.log(searchResult)
    }

    const getSearchResultLength = () => {
        let result = null
        if((country.length>=10) ){
            result = 'More than 10 results, please refine your search...'
        } else {
            result = row()
        }
        return (
            <>
                {result}
            </>
        )
    }

    const resetCountry = () => (
        setCountry(props.country) 
    )
    
    // const clearSearch = (event) =>{
    //     event.preventDefault()
    //     setSearchCountry('')
    //     resetCountry()
    // }

    return(
        <>
            <form onKeyDown={resetCountry}>
                <input  
                value={searchCountry}
                onChange={handleSearchCountryChange}>
                </input>
                <button>Clear Search</button>
            </form>
            <div>
                {getSearchResultLength({})}
            </div>
        </>
    )
}

export default Country