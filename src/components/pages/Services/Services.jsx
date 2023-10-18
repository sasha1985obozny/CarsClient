import './Services.scss';
import Navigation from 'components/navigation/Navigation';
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getServices } from 'features/services/serviceSlice';

const Services = () => {

    const dispatch = useDispatch();
    const services = useSelector((state) => state.service.services)
  
    useEffect(()=>{
        dispatch(getServices());
    }, [dispatch])
    return (
        <>
            <Navigation />
            <h1>Services</h1>
            <div className='service-cards'>
            {services?.map(service => {
            return (
                <div className='service-card'>                
                    <div className='service-title'>{service.title}</div>
                    <div>{service.place}</div>
                    <img className='service-image' src={service.imageURL} alt='img'/>
                </div>
                );
            })}
            </div>
        </>
    )
}

export default Services