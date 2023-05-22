import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

   

    const [asc, setAsc] = useState(true);

    useEffect(()=>{
        // fetch('services.json')
        // fetch(`http://localhost:5000/services?sort=${asc ? 1 : -1}`)
        fetch(`http://localhost:5000/services?sort=${asc ? 'asc' : 'desc'}`)
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[asc])

    

    return (
        <div className='mt-4'>
            <div className='text-center'>
                <h3 className='text-2xl font-bold text-orange-600'>Our Services</h3>
                <h2 className='text-5xl'>Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>

                

                {/* sort operation */}
                <div className='mt-3 mb-3'>
                    <h3>Sort by</h3>

                    <button onClick={()=> setAsc(!asc)}
                     className='px-5 py-3 text-white font-bold mt-1 bg-red-500 rounded-lg'>

                        {asc ? 'Price High to Low' : 'Price Low to High'}
                        
                        </button>
                   
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
               {
                services.map(service => <ServiceCard
                key={service._id}
                service={service}
                ></ServiceCard>)
               }
            </div>
        </div>
    );
};

export default Services;