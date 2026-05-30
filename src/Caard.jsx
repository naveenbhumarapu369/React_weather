import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import LightModeTwoToneIcon from '@mui/icons-material/LightModeTwoTone';
import ThunderstormTwoToneIcon from '@mui/icons-material/ThunderstormTwoTone';
import AcUnitTwoToneIcon from '@mui/icons-material/AcUnitTwoTone';
import FmdGoodTwoToneIcon from '@mui/icons-material/FmdGoodTwoTone';
import ice from './assets/ice.png';
import rain from './assets/rain.jpeg';
import sunny from './assets/sunny.avif';
import winter from './assets/winter.webp'
export default function Caard({info}){
    let icon = ((info.temp<0)?<AcUnitTwoToneIcon />:info.hum>60?<ThunderstormTwoToneIcon />:(info.temp>30)?<LightModeTwoToneIcon />:<AcUnitTwoToneIcon />)
    let img = (info.temp<0)?ice:info.hum > 60
    ? rain
    : info.temp > 30
    ? sunny
    : winter;
    return(
        <div>
         <Card sx={{ maxWidth: 345 }} className="card">
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image={img}
                        alt="Weather-Image"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} {icon}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                            Weather: {info.weather}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Temperature: {info.temp}*C<br></br>
                            Humidity: {info.hum} %<br></br>
                            ({info.lon} , {info.lat}) <FmdGoodTwoToneIcon />
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>     
        </div>
    )
}