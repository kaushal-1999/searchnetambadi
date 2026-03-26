import "./Map.css";

const areas = [
  "Ambadi",
  "Ambadi Gaon",
  "Uchat",
  "Shindewadi",
  "Zhidke",
  "Met",
  "Ghonsai"
];

function MapSection() {

  const handleClick = (area) => {
    const phone = "918550934568"; // your number
    const message = `Hello, I want to check internet availability in ${area}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="map-section">

      <h2>Check Availability in Your Area</h2>
      <p>Click your location to connect instantly via WhatsApp</p>

      <div className="map-container">

        {/* Fake map background (you can replace with real map later) */}
        <div className="map-bg"></div>

        {/* Clickable Points */}
        {areas.map((area, i) => (
          <div
            key={i}
            className={`map-point p${i}`}
            onClick={() => handleClick(area)}
          >
            📍
            <span>{area}</span>
          </div>
        ))}

      </div>

    </section>
  );
}

export default MapSection;