import './Services.css'
import ServicesCard from './ServicesCard'


const Services = () => {
  return (
    <div className='services'>
    <div className='services-heading'> <h1>Our Services</h1> </div>
    <div className='services-cards'>
      
      <div className='card-1'>
      <ServicesCard 
      heading="IT Consulting"
      
      desc = "Provide best resourcing and services"
      />
  </div>

  <div className='card-2'>
      <ServicesCard 
      heading="Application Development"
      
      desc = "Delivering value to clients"
      />
  </div>

  <div className='card-3'>
      <ServicesCard 
      heading="Web Development and Design"
      
      desc = "Expert guidance"
      />
  </div>

  <div className='card-4'>
      <ServicesCard 
      heading="Managed IT Services"
      
      desc = "Customized client services"
      />
  </div>

  <div className='card-5'>
      <ServicesCard 
      heading="Bussiness Analysis and PM Services"
      
      desc = "Expert Guidance Agile and Scrum"
      />
  </div>
  
      </div>  
       

        
    </div>
  )
}

export default Services