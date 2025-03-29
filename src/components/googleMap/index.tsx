
interface GoogleMapProps {
  location: {
    city: string;
    state: string;
    zipcode: string;
    another: string;
  };
}

const GoogleMap: React.FC<GoogleMapProps> = ({ location }) => {
    const formattedAddress = `${location.city}, ${location.state} ${location.zipcode ? ', ' + location.zipcode : ''} ${location.another ? ', ' + location.another : ''}`;


    const encodedAddress = encodeURIComponent(formattedAddress);

    const mapSrc = `https://www.google.com/maps?q=${encodedAddress}&output=embed`;

    return (
      <iframe
        className="w-full h-full"
        src={mapSrc}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    );
};
export default GoogleMap;
