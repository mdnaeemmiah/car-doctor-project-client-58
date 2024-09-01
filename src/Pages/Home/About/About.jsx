import parts from '../../../assets/images/about_us/parts.jpg'
import person from '../../../assets/images/about_us/person.jpg'

const About = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col md:flex-row">
                <div className='md:w-1/2 relative'>
                    <img src={person}
                        className="w-3/4 rounded-lg shadow-2xl" />
                    <img
                        src={parts}
                        className="w-1/2 right-5 top-1/2 border-8 border-white absolute rounded-lg shadow-2xl" />
                </div>
                <div className='md:w-1/2 space-y-4 p-4'>
                <h3 className='text-3xl text-orange-500 font-bold'>About Us</h3>
                    <h1 className="text-5xl font-bold">Box Office News! Lorem ipsum doloramet.</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-warning">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;