import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const BookService = () => {
    const service = useLoaderData();
    const { _id, title, price, service_id,img } = service
    
    
    //getting user info from AuthContext
    const {user} = useContext(AuthContext);

    const handleBookService = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        // const name = form.name.value;
        const order ={
            customerName: name,
            email,
            img,
            date,
            service_id: _id,
            price: price
        }
        console.log(order);
        //sending order to server
        fetch('http://localhost:5000/bookings',{
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(order)

        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                alert('successfully added')
            }
        })
    }

    return (
        <div>
            <h3 className='text-center text-3xl'>Book Service: {title}</h3>


            <div className="card-body">
                <form onSubmit={handleBookService}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' defaultValue={user?.displayName}  placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name='date' className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' defaultValue={user?.email} placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Due amount</span>
                            </label>
                            <input type="text"  name='dueAmount' defaultValue={'$'+ price} className="input input-bordered" />

                        </div>
                    </div>
                    <div className="form-control mt-6">

                        <input className="btn btn-primary  btn-block" type="submit" value="Order Confirm" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookService;