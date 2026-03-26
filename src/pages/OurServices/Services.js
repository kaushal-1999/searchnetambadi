import "./Services.css";
import {
    ShieldCheck,
    SlidersHorizontal,
    Wrench,
    Headphones,
    Wifi,
    Gauge,
    Camera,
    Phone
} from "lucide-react";

const services = [
    {
        title: "Best Security",
        icon: <ShieldCheck />,
        desc: "Advanced data protection ensuring complete safety."
    },
    {
        title: "Leased Line Internet",
        icon: <SlidersHorizontal />,
        desc: "Dedicated fiber connection with ultra-low latency."
    },
    {
        title: "CCTV Surveillance",
        icon: <Camera />,
        desc: "Smart security systems with remote monitoring."
    },
    {
        title: "Intercom Systems",
        icon: <Phone />,
        desc: "Reliable internal communication for homes & offices."
    },
    {
        title: "24/7 Technical Support",
        icon: <Headphones />,
        desc: "Instant assistance anytime you need help."
    },
    {
        title: "Unlimited Broadband",
        icon: <Wifi />,
        desc: "High-speed unlimited internet up to 1Gbps."
    },
    {
        title: "Quick Installation",
        icon: <Wrench />,
        desc: "Fast and professional setup service."
    },
    {
        title: "High Speed Network",
        icon: <Gauge />,
        desc: "Stable performance with consistent speeds."
    }
];

function Services() {
    return (
        <section className="services">

            <h2>
                Our <span>Premium Services</span>
            </h2>

            <div className="services-grid">
                {services.map((item, i) => (
                    <div className="service-card" key={i}>
                        <div className="icon">{item.icon}</div>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                    </div>
                ))}
            </div>

        </section>
    );
}

export default Services;