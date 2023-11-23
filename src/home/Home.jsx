import React, { useEffect, useState } from 'react';
import {breeds} from './dogBreeds';
import './Home.css';

const Home = () => {

    const [name, setName] = useState('');
    const [fetchedData, setFetchedData] = useState('');
    console.log(breeds);
    console.log(fetchedData)

    const inputHandler = (e) => {
        setName(e.target.value);
    }
    const apiKey = 'A/Ir7m4zhZVR9BiOSgAyQA==4HvmOWSIvfkbfuLd'

    useEffect(() => {
        const fetchedData = async () => {
            try{
                const response = await fetch(`https://api.api-ninjas.com/v1/dogs?name=${name}`, {
                headers: {
                    'X-Api-Key': apiKey,
                },
                })
                if(!response.ok){
                    throw new Error(`Error: ${response.error}`);
                }

                const data = await response.json();
                console.log(data);
                setFetchedData(data);
            }
            catch(error){
                console.log('Request failed:', error.message);
            }
        }
        fetchedData()

    }, [name])


  return (
    <div>
        <select value={name} onChange={inputHandler}>
        <option value=''>Select Breed  </option>
        {breeds.map((breed, index) => (
            <option key={index} value={breed}>
                {breed}
            </option>
        ))}
      
        </select>
        <div className='card'>
        {fetchedData.map((data, index) => (
            <div key={index}>
                <div className='img_container'>
                    <img src={data?.image_link}/>
                </div>
                <div className='info'>
                    <p style={{fontSize: '1.6rem'}}>{data.name}</p>
                    <p>Max-height(female): {data.max_height_female} inches</p>
                    <p>Max-height(male): {data.max_height_male} inches</p>
                    <p>Max-weight(female): {data.max_weight_female} pounds</p>
                    <p>Max-weight(male): {data.max_weight_male} pounds</p>
                    <p>Life expectancy: {data.max_life_expectancy} years</p>
                </div>
            </div>
            
        ))}
        </div>
    </div>
  )
}

export default Home