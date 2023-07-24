import React, { useState, useEffect } from "react";

const Api2 = () => {
    const [country, setCountry] = useState([]);

    useEffect(() => {
        const getCountry = async () => {
            const rescountry = await fetch("https://restcountries.com/v3.1/all?fields=name,capital,currencies");
            const rescoun = rescountry.json();
            setCountry(rescoun);
        }
        getCountry();
    }, []);
    return (
        <div>
            <>
                <div className="row">
                    <div className="col sm-12">
                        <h2 className="mt-4 mb-4 fw-bold">
                            Select country, State and City
                        </h2>
                        <form className="row g-3">
                            <div className="col md-3">
                                <label className="form-label">Country</label>
                                <select name="country" className="form-control p-2">
                                    <option value="">--select country--</option>
                                    {/* {
                                        country.map((name, index) => (
                                            <option key={index} value={name.symbol}>{name.common}</option>
                                        ))
                                    } */}
                                </select>
                            </div>
                            <div className="col md-3">
                                <label className="form-label">State</label>
                                <select className="form-select" name="state">
                                    <option value="">--select state--</option>
                                    <option value="state...">state...</option>
                                </select>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        </div>
    )
}
export default Api2;