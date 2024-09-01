import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg";

const Login = () => {
    const handleLogin = e=>{
       e.preventDefault();
       const form = e.target;
       const email = form.email.value;
       const password = form.password.value;
       const user = {email,password}
       console.log(user);
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col md:flex-row">
                <div className="mr-10 w-1/2">
                  
                   <img src={img} alt="" />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                    <h1 className="text-3xl text-center font-bold">Login</h1>
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
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className="text-center my-4">New to cart Doctors <Link to='/singup'
                    className="text-orange-600 font-semibold"
                    >Sing up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;