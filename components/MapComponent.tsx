// SimpleMap.jsx
export default function MapComponent({
  lat = 11.57820,
  lng = 104.92281,
  zoom = 13,
  className = "",
  style = {},
}) {
  const mapSrc = `https://www.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`;

  return (
    <div
      className={`w-full h-[400px] rounded-xl overflow-hidden shadow ${className}`}
      style={style}
    >
      <iframe
        title="Simple Map"
        src={mapSrc}
        width="100%"
        height="100%"
        loading="lazy"
        allowFullScreen
      ></iframe>
    </div>
  );
}
