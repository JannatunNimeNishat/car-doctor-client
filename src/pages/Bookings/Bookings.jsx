import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import BookingRow from './BookingRow';
import { useNavigate } from 'react-router-dom';

const Bookings = () => {
    const { user, loading } = useContext(AuthContext)
    const [bookings, setBookings] = useState([]);

    //if access token is not valid or expired
    const navigate = useNavigate();


    //get specific user bookings
    const url = `http://localhost:5000/bookings?email=${user?.email}`
    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers:{
                authorization: `Bearer ${localStorage.getItem('car-access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                //if access token is not valid or expired
                if(!data.error){
                    setBookings(data)
                }
                else{
                    //logout and then navigate
                    navigate('/login')
                }
            })
    }, [url,navigate])



    //delete a booking
    const handleDelete = (id) =>{
        //we should use sweet alert here
        const proceed = confirm('Are you sure you want to delete')
        if(proceed){
            fetch(`http://localhost:5000/bookings/${id}`,{
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data =>{
                console.log(data);
                 if(data.deletedCount>0){
                    alert('Deleted successfully')
                   const remainingBookings =  bookings.filter(booking => booking._id !== id);
                    setBookings(remainingBookings)
                }
            })
        }
    }


    //update confirm booking
    const handleBookingConfirm = (id) =>{
       
        fetch(`http://localhost:5000/bookings/${id}`,{
            method: 'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify({status: 'confirm'})
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount>0){  
               // update state
               //booking which are not updated
               const remaining = bookings.filter(booking=> booking._id !==id)
               //find the updated booking
               const updated = bookings.find(booking => booking._id === id )
                //hardcoded the status
                updated.status = 'confirm'
                const newBookings = [updated,...remaining]
                setBookings(newBookings);
               

            }
        })
    }



    return (
        <div>
            <h2 className='text-5xl'>Your bookings: {bookings.length}</h2>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>


                            <th>Image</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Statues</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            bookings.map(booking => <BookingRow
                                key={booking._id}
                                booking={booking}
                                handleDelete={handleDelete}
                                handleBookingConfirm={handleBookingConfirm}
                            ></BookingRow>)
                        }



                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default Bookings;