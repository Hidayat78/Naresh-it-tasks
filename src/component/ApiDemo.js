import "./ApiDemo.css";
import { useEffect, useState } from "react"

export function ApiDemo() {
    const [mars, setMars] = useState([]);

    useEffect(() => {
        fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY&quot;")
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                setMars(data.photos);
            })
    }, [])

    return (
        <div className="container-fluid">
            <h2>Mars Rover Photos</h2>
            <div className="d-flex flex-wrap">
                {
                    mars.map(item =>
                        <div className="card m-2 p-2">
                            <img src={item.img_src} className="card-img-top" height="150" />
                            <div className="card-header">
                                <h2>{item.id}</h2>
                            </div>
                            <div className="card-body">
                                <dl>
                                    <dt>Camera</dt>
                                    <dd>{item.camera.full_name}</dd>
                                    <dt>Rover</dt>
                                    <dd>{item.rover.name}</dd>
                                </dl>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}