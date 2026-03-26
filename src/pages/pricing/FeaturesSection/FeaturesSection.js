import "./Features.css";

function Features() {
    return (
        <section className="features">

            <div className="features-header">
                <h2>Why We Are the Leading Provider in <span>Ambadi</span></h2>
                <p>
                    Delivering high-speed, secure and reliable internet experience 
                    for homes and businesses.
                </p>
            </div>

            <div className="features-grid">

                <div className="feature-card">
                    <div className="icon">⚡</div>
                    <h3>Lowest Ping Time</h3>
                    <p>Enjoy ultra-low latency for gaming, streaming, and video calls.</p>
                </div>

                <div className="feature-card">
                    <div className="icon">🔒</div>
                    <h3>Reliable Connection</h3>
                    <p>Stable internet with 99.9% uptime and no interruptions.</p>
                </div>

                <div className="feature-card">
                    <div className="icon">🛡️</div>
                    <h3>Device Protection</h3>
                    <p>Advanced security to protect your devices and data.</p>
                </div>

                <div className="feature-card">
                    <div className="icon">🚀</div>
                    <h3>Up to 1 Gbps Speed</h3>
                    <p>Blazing-fast downloads and seamless online experience.</p>
                </div>

            </div>

        </section>
    );
}

export default Features;