import "./Status.css";

function NetworkStatus() {
    return (
        <div className="network-status">

            <div className="status-card">
                <span className="dot active"></span>
                Network Status: <b>Online</b>
            </div>

            <div className="status-card">
                ⚡ Avg Speed: <b>150 Mbps</b>
            </div>

            <div className="status-card">
                📡 Uptime: <b>99.9%</b>
            </div>

        </div>
    );
}

export default NetworkStatus;