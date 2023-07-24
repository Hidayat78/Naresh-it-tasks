import React, { useState } from 'react'


const countries = [
    {
        name: "New Jersey",
        state: [
            {
                name: "State Park,",
                cities: ["Veyas", "Park vnue"]
            },
            {
                name: "Georgia ",
                cities: ["Culver", " Georgia  city"]
            }

        ],
    },
    {
        name: "India",
        state: [
            {
                name: " Bihar",
                cities: ["Muzaffarpur", " Darbhanga"]
            },
            {
                name: "New Delhi",
                cities: ["Okhla", "Silampur"]
            },
            {
                name: "UP",
                cities: ["Lucknow", "Kanpur"]
            },
            {
                name: "Maharastra",
                cities: ["Napur", "Boisar"]
            }
        ],
    },
    {
        name: "Nepal",
        state: [
            {
                name: " Kathmandu",
                cities: ["Bhali ghat", "Dewariya"]
            },
            {
                name: "Janakpurdham",
                cities: ["Jinan", " Somon"]
            },
            {
                name: "Dharan",
                cities: ["Yeti Mount", "abu hill"]
            },
        ],
    },
]
const LocalData = () => {

    const [country, setCountry] = useState('--Select Country--');
    const [state, setState] = useState('--Select State--');
    const [city, setCity] = useState('--Select Cities--');
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [items, setItems] = useState([]);


    const changeCountry = (e) => {
        setCountry(e.target.value)
        setStates(countries.find((elem) => {
            return elem.name === e.target.value
        }).state)
    }


    const changeState = (e) => {
        setState(e.target.value)
        setCities(states.find((elem) => {
            return elem.name === e.target.value
        }).cities)
    }

    function showdata() {
        const users = {
            country: country,
            state: state,
            cities: cities
        }

        setItems([...items, users])
    }


    function deleteHandle(id) {
        const newItems = items.filter((elem, ind) => {
            return ind !== id
        })
        setItems(newItems)
    }

    return (
        <div  >
            <div className='w-50 mt-5'>
                <h3>Select Country and Cities</h3>
                <select className='form-control' value={country} onChange={changeCountry}>
                    <option>--Country--</option>
                    {
                        countries.map((elem) => {
                            return (
                                <option value={elem.name}>{elem.name}</option>
                            )
                        })
                    }
                </select>
                <br />
                <select className='form-control' value={state} onChange={changeState}>
                    <option>--State--</option>

                    {
                        states.map((elem) => {
                            return (
                                <option value={elem.name}>{elem.name}</option>
                            )
                        })
                    }
                </select>
                <br />
                <select className='form-control' value={city} onChange={(e) => setCity(e.target.value)}>
                    <option>--Cities--</option>
                    {
                        cities.map((elem) => {
                            return (
                                <option value={elem}>{elem}</option>
                            )
                        })
                    }
                </select>
                <button className='btn btn-dark mt-2' onClick={showdata} >Show Data</button>
            </div>

            <div>
                <table>
                    <thead>
                        <tr>
                            <th>sr.No</th>
                            <th>country</th>
                            <th>State</th>
                            <th>Cities</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            items.map((elem, ind) => {
                                return (
                                    <tr key={ind}>
                                        <th>{ind + 1}</th>
                                        <td>{elem.country}</td>
                                        <td>{elem.state}</td>
                                        <td>{elem.cities}</td>
                                        <td><button onClick={() => deleteHandle(ind)}>DELETE</button></td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default LocalData;