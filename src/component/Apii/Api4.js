import React, { useState, useEffect } from "react";
function Api4() {

    const [data, setData] = useState();

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all?fields=name,capital,currencies')
            .then(res => res.json())
            .then(data => setData(data))
        console.log(data);
        // .then(json => console.log(json))
    }, [])

    return (
        <>

            <div className="dropdown text-center mt-5">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown button
                </button>

                <ul className="dropdown-menu">
                    {data?.map((item) => (
                        <>
                            <li key={item.id}></li>
                            <li><span>CountryName:</span> {item.name.common}</li><br />

                        </>

                    ))}

                </ul>
            </div>


        </>

    )
}

export default Api4;