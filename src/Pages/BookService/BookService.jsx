import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";


const BookService = () => {
    const service = useLoaderData();
    const { title, _id,price,img } = service;
    const {user} = useContext(AuthContext);

    const handleBookService = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const booking ={
            customerName :name,
            email,
            img,
            date,
            service:title,
            service_id: _id,
            price:price

        }
        console.log(booking);

        fetch('http://localhost:5000/bookings',{
            method:"POST",
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your order confirm",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
        
    }

    return (
        <div>
            <h2 className="text-center text-3xl">Book services {title}</h2>

            <form onSubmit={handleBookService} className="card-body">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name="name"
                        defaultValue={user?.displayName}
                        type="text" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input name="date" type="date" placeholder="date" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email"
                        defaultValue={user?.email}
                        placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Amount</span>
                        </label>
                        <input name="due" defaultValue={'$' +price} type="text" placeholder="password" className="input input-bordered" required />

                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary btn-block" type="submit" value=" order confirm" />
                </div>
            </form>
        </div>
    );
};

export default BookService;