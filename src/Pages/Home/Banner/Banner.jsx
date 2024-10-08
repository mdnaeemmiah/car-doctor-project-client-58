import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[600px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src={img1}
                        className="w-full rounded-xl " />
                    <div className="absolute rounded-xl left-0 top-0 bottom-0 flex items-center
                    bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] 
               ">
                        <div className='text-white font-semibold space-y-4 w-4/6 pl-10'>
                            <h2 className='text-6xl'>Lorem ipsum dolor sit amet.</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, at alias velit eos temporibus ex. Atque cum distinctio nobis quod alias! Doloribus, nisi id. Veritatis laborum esse pariatur similique eligendi!</p>
                            <button className="btn btn-primary mr-5">Discover more</button>
                            <button className="btn btn-outline btn-secondary">Latest project</button>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
                        <a href="#slide6" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src={img2}
                        className="w-full rounded-xl " />
                    <div className="absolute rounded-xl left-0 top-0 bottom-0 flex items-center
                    bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] 
               ">
                        <div className='text-white font-semibold space-y-4 w-4/6 pl-10'>
                            <h2 className='text-6xl'>Lorem ipsum dolor sit amet.</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, at alias velit eos temporibus ex. Atque cum distinctio nobis quod alias! Doloribus, nisi id. Veritatis laborum esse pariatur similique eligendi!</p>
                            <button className="btn btn-primary mr-5">Discover more</button>
                            <button className="btn btn-outline btn-secondary">Latest project</button>
                        </div>
                    </div>
                    <div className="absolute rounded-xl left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
                        <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src={img3}
                        className="w-full rounded-xl " />
                    <div className="absolute rounded-xl left-0 top-0 bottom-0 flex items-center
                    bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] 
               ">
                        <div className='text-white font-semibold space-y-4 w-4/6 pl-10'>
                            <h2 className='text-6xl'>Lorem ipsum dolor sit amet.</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, at alias velit eos temporibus ex. Atque cum distinctio nobis quod alias! Doloribus, nisi id. Veritatis laborum esse pariatur similique eligendi!</p>
                            <button className="btn btn-primary mr-5">Discover more</button>
                            <button className="btn btn-outline btn-secondary">Latest project</button>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
                        <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src={img4}
                        className="w-full rounded-xl " />
                    <div className="absolute rounded-xl left-0 top-0 bottom-0 flex items-center
                    bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] 
               ">
                        <div className='text-white font-semibold space-y-4 w-4/6 pl-10'>
                            <h2 className='text-6xl'>Lorem ipsum dolor sit amet.</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, at alias velit eos temporibus ex. Atque cum distinctio nobis quod alias! Doloribus, nisi id. Veritatis laborum esse pariatur similique eligendi!</p>
                            <button className="btn btn-primary mr-5">Discover more</button>
                            <button className="btn btn-outline btn-secondary">Latest project</button>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
                        <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide5" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <img
                        src={img5}
                        className="w-full rounded-xl " />
                    <div className="absolute rounded-xl left-0 top-0 bottom-0 flex items-center
                    bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] 
               ">
                        <div className='text-white font-semibold space-y-4 w-4/6 pl-10'>
                            <h2 className='text-6xl'>Lorem ipsum dolor sit amet.</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, at alias velit eos temporibus ex. Atque cum distinctio nobis quod alias! Doloribus, nisi id. Veritatis laborum esse pariatur similique eligendi!</p>
                            <button className="btn btn-primary mr-5">Discover more</button>
                            <button className="btn btn-outline btn-secondary">Latest project</button>
                        </div>
                    </div>
                    <div className="absolute  left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
                        <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide6" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide6" className="carousel-item relative w-full">
                    <img
                        src={img6}
                        className="w-full rounded-xl " />
                    <div className="absolute rounded-xl left-0 top-0 bottom-0 flex items-center
                    bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] 
               ">
                        <div className='text-white font-semibold space-y-4 w-4/6 pl-10'>
                            <h2 className='text-6xl'>Lorem ipsum dolor sit amet.</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, at alias velit eos temporibus ex. Atque cum distinctio nobis quod alias! Doloribus, nisi id. Veritatis laborum esse pariatur similique eligendi!</p>
                            <button className="btn btn-primary mr-5">Discover more</button>
                            <button className="btn btn-outline btn-secondary">Latest project</button>
                        </div>
                    </div>
                    <div className="absolute  left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
                        <a href="#slide5" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
