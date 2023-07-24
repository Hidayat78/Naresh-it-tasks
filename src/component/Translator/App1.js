import React, { useEffect, useState, } from "react";
import './App1.css';
import axios from 'axios';
import { setIn } from "formik";
const App1 = () => {
    const [option, setOption] = useState([])
    const [from, setFrom] = useState("en");
    const [to, setTo] = useState("en");
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");

    const Translate = () => {
        // curl -X POST "https://libretranslate.de/translate" -H  "accept: application/json" -H  "Content-Type: application/x-www-form-urlencoded" -d "q=hello&source=en&target=es&api_key=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
        const params = new URLSearchParams();
        params.append('q', input);
        params.append('source', from);
        params.append('target, to');
        params.append('api_key', 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');
        axios.post('https://libretranslate.de/translate', params, {
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        }).then(res => {
            console.log(res.data)
            setOutput(res.data.translatedText)
        })
    };
    useEffect(() => {
        //curl -X 'GET' \ 'https://libretranslate.de/languages' \  -H 'accept: application/json'
        axios.get('https://libretranslate.com/languages',
            { headers: { 'Accept': 'application/json' } }).then(res => {
                //console.log(res.data);
                setOption(res.data);
            })
    }, [])

    return (
        <div className="App1">
            <div>
                Form ({from}):
                <select onChange={e => setFrom(e.target.value)}>
                    {option.map(opt => <option key={opt.code} value={opt.code}>{opt.name}</option>)}
                </select>
                To ({to}):
                <select onChange={e => setTo(e.target.value)}>
                    {option.map(opt => <option key={opt.code} value={opt.code}>{opt.name}</option>)}
                </select>
            </div>
            <div>
                <textarea cols="50" rows="8" onInput={(e) => setInput(e.target.value)}></textarea>
            </div>
            <div>
                <textarea cols="50" rows="8" value={output}></textarea>
            </div>
            <div>
                <button onClick={(e) => Translate()}>Translate</button>
            </div>
        </div>
    )
}
export default App1;