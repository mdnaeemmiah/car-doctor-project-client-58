import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className="mt-5">
            <div className="text-center space-y-3">
                <h3 className="text-2xl text-orange-500 font-bold">Our Services</h3>
                <h2 className="text-5xl font-semibold">Our Services Aria</h2>
                <p>Lorem ipsum parum ndi, explicabo? Veniam natus doloribus fuga. Officiis aliquam at quos necessitatibus distinctio accusamus aspernatur, rerum atque, ab omnis aperiam sed excepturi earum minus?</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
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