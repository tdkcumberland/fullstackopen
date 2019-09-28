import React, {useState, useEffect} from 'react'
import CountryLang from './CountryLang'
import axios from 'axios'

const ShowDetail = ({languages, capital,population, flag}) => {
    // console.log(props)
    console.log('SHOWDETAIL')
    const languageRow = () => languages.map( eachLang =>
        <CountryLang
            language = {eachLang.name}
            key = {eachLang.name}
        />
    )

    const [chuckQuote, setChuckQuote] = useState('')
    useEffect(()=>{
        console.log("getting a Chuck Norris' quote...")
        axios
            .get('https://api.chucknorris.io/jokes/random')
            .then( response => {
                console.log('got one...')
                setChuckQuote(response.data.value)
            })
    }, [])

    return (
        <>
            <h4>
                <p>Capital : {capital}</p>
                <p>Population: {population.toLocaleString('en')}</p>
            </h4>
            <h4>
                Offical Language(s):
            </h4>
            <div>
                {languageRow()}
            </div>
            <img src={flag.toString()} style={{width:300, height:175}} alt='flag'></img>
            <h5>
                Random Chuck Norris' Quote :)
            </h5>
            
            <div>
                {chuckQuote}
            </div>
        </>
    )
}

export default ShowDetail