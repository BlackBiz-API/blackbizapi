import JSONPretty from 'react-json-pretty';
import axios from 'axios';
import TryForm from './TryForm';
import { useState } from 'react';

const API = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

function Try() {
    const [sample, setSample] = useState([]);
    const [city, setCity] = useState('');
    const handleInput = (event) => {
        setCity(event.target.value)
    }

    const getJson = () => {
          return axios.get(`${BASE_URL}/v1/businesses/city/${city}?limit=1`, {
            headers: {
                'x-api-key': `${API}`,
            }
          })
          .then((response) => {
              setSample(response.data)
          })
          .catch((err) => {
              console.log(err.response.data.error)
          })
      }

    return (
    <>
    <section className='try_api'>
        <div className='container'>
            <div className="title ld-title">
                    <h2>🔥 Try it out</h2>
                    <p>With each API key, you will get 2000 requests per day.</p>
                </div>
            <div className='row'>
                <div className='col-lg-6 col-md-12 col-sm-12'>
                  <TryForm
                    cityInput = {city}
                    handleInput = {handleInput}
                    getJson = {getJson}
                    BASE_URL = {BASE_URL}
                  />
                </div>
                <div className='col-lg-6 col-md-12 col-sm-12'>
                <div className='jsonPretty'>
                    <JSONPretty id="json-pretty" data={sample}></JSONPretty>
                </div>
                </div>
            </div>
        </div>
    </section>
    </>
    );
}

export default Try;