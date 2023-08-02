import './ServicesCard.css';
import Image from 'next/image';
const ServicesCard = (props) => {
  

  return (
    <div className="service-card" >
   
        <h1>{props.heading}</h1>
        
        <p>{props.desc}</p>
        <button>Read More</button>
   
    </div>
  );
};

export default ServicesCard;
