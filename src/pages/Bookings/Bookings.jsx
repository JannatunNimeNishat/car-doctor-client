import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import BookingRow from './BookingRow';

const Bookings = () => {
    const { user, loading } = useContext(AuthContext)
    const [bookings, setBookings] = useState([]);

    /*  if(loading){
         return <h3>Loading</h3>
     } */

    const url = `http://localhost:5000/bookings?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])

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
                                bookings={bookings}
                                setBookings={setBookings}
                                handleDelete={handleDelete}
                            ></BookingRow>)
                        }



                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default Bookings;