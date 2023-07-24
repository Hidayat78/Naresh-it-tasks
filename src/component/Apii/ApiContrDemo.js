import React, { useState, useEffect } from "react";

const ApiContrDemo = () => {

    const [country, setCountry] = useState([]);
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all?fields=name,capital,currencies")
            .then(function (response) {
                return response.json();

            })
            .then(function (data) {
                setCountry(data);
            })

    })

    return (
        <div>
            <h1>Country</h1>
            <div>
                <label>Country</label>
                <select >
                    <option value="">Select Country</option>
                    {
                        country.map(items => <option key={items} value={setCountry}>{items}</option>)
                    }
                </select>
            </div>
        </div>
    )
}
export default ApiContrDemo;