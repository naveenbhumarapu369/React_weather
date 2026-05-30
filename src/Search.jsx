import './Search.css';
import Caard from './Caard.jsx';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { useState } from 'react';
export default function Search(){
    let [city,setCity] = useState("");
    let [info,setInfo] = useState({});
    let [er,setEr] = useState(false);
    let handChange = (e)=>{
        setCity(e.target.value);
    }
    let handClick = async(e)=>{
        setEr(false);
        e.preventDefault();
        let APIurl = "https://api.openweathermap.org/data/2.5/weather?q=";
        let APIkey = "d083aad42f32ed4edb352265c536a527";
        try{
            let x = await fetch(`${APIurl}${city}&limit=1&appid=${APIkey}&units=metric`);
            let res = await x.json();
            console.log(res);
            setInfo({
                city:res.name,
                temp:res.main.temp,
                hum:res.main.humidity,
                weather:res.weather[0].description,
                lon:res.coord.lon,
                lat:res.coord.lat
            })
        }
        catch(err){
            setEr(true);
        }
    }
    
    return(
        <div className='search'>
            <h1>Ultra Weather Report</h1>
            <form onSubmit={handClick}>
                <TextField
                    required
                    id="filled-required"
                    label="City Name"
                    variant="filled"
                    onChange={handChange}
                    value={city}
                    />
                    <br></br><br></br>
                    <Button type="submit" variant="contained" startIcon={<SearchIcon />}>
                   
                    Search
                </Button>
            </form>
            {!er?info.city&&<Caard info={info}/>:<Alert className='alert' severity="error">City Not Found...!</Alert>}
            
        </div>
    );
}