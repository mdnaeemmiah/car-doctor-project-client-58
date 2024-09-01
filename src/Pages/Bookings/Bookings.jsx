import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookingRow from "./BookingRow";


const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([])

    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBookings(data)
            })
    }, [url]);
    const handleDelete =id=>{
        const proceed =confirm('are you sure');
        if(proceed){
            fetch(`http://localhost:5000/bookings/${id}`,{
                method:"DELETE",
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount>0){
                    alert('deleted')
                    const remaining =bookings.filter(booking=> booking._id !== id);
                    setBookings(remaining);
                }
            })
        }
     }
     const handleBookingConfirm =id=>{
        fetch(`http://localhost:5000/bookings/${id}`,{
            method:"PATCH",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({status: 'confirm'})
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
                const remaining = bookings.filter(booking => booking._id !== id);
                const updated = bookings.find(booking => booking._id !== id);
                updated.status='confirm'
                const newBooking = [updated,...remaining];
                setBookings(newBooking);
            }
        })
     }


    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>image</th>
                        <th>service</th>
                        <th>date</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.map(booking => <BookingRow
                        key={booking._id}
                        bookings={bookings}
                        handleDelete={handleDelete}
                        handleBookingConfirm={handleBookingConfirm}
                        ></BookingRow>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default Bookings;