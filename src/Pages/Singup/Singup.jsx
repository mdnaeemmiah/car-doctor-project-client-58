import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Singup = () => {
    const {createUSer}= useContext(AuthContext);
    const handleSingUp = e=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const user = {name,email,password}
        console.log(user);
        createUSer(email,password)
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.log(error);
        })
     }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col md:flex-row">
            <div className="mr-10 w-1/2">
              
               <img src={img} alt="" />
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleSingUp} className="card-body">
                <h1 className="text-3xl text-center font-bold">Sing Up</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name="name" type="text" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Sing Up</button>
                    </div>
                </form>
                <p className="text-center my-4">All ready have an account <Link to='/login'
                className="text-orange-600 font-semibold"
                >Login</Link></p>
            </div>
        </div>
    </div>
    );
};

export default Singup;