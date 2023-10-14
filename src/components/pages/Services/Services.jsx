import './Services.scss';
import Navigation from 'components/navigation/Navigation';
import axios from "axios";
import { useEffect, useState } from "react";

const src = 'https://tech-serv-cars-rest-api.onrender.com/services'

const Services = () => {
    const [services, setServices] = useState([]);

  useEffect(()=>{
    axios
      .get(src)
      .then(data => {
        console.log(data.data.data);
        setServices(data.data.data.services);
      })
  }, [])
    return (
        <>
            <Navigation />
            <h1>Services</h1>
            <div className='service-cards'>
            {services.map(service => {
        return (
            <div className='service-card'>                
                <div className='service-title'>{service.title}</div>
                <div>{service.place}</div>
            </div>
                );
            })}
            </div>
        </>
    )
}

export default Services