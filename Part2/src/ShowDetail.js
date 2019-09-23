import React, {useState} from 'react'
import CountryLang from './CountryLang'
import axios from 'axios'

const ShowDetail = ({languages, capital,population, flag}) => {
    // console.log(props)
    const ACCESS_KEY = 'e94f8f549694a0c8a49ca8cd9a210790'
    console.log('SHOWDETAIL')
    const languageRow = () => languages.map( eachLang =>
        <CountryLang
            language = {eachLang.name}
            key = {eachLang.name}
        />
    )
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    const [weather, setWeather] = useState('')
    const weatherData = () =>{
        axios
        .get(`http://api.weatherstack.com/current?access_key=45823a7f39174c1490b63c6bc6bcc0f0&query=${capital}`, { cancelToken: source.token })
        .then(response =>{
            setWeather(response.data.current)
            console.log(response.data.current)
                })

        weatherData();
        return () => {
            source.cancel();
        };
    }

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
            <div>
                {weatherData()}
            </div>
        </>
    )
}

export default ShowDetail