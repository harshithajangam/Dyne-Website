import './Footer.css'


const Footer = () => {
  return (
    <div className='footer'>
    <div className="left-footer">
          <h1> Contact Us</h1>
          <p>
          <span> DYNE Consultancy Limited (IT Services)</span>
         
         
        <span>13 Adelaide Road, Saint Kevin's,</span>
          
          <span> Dublin 2</span>
         
          <span> D02 P950</span>
          </p>

           <p>
           <span>DYNE-RESOURCING@DYNEITS.COM</span>
            <span>+353-1-902-6502</span>
           
           <span> +353-89-2777-823</span>
          </p>
          </div>
          <div className="right-footer">
            <form>
                <div className='name-email'>
                <input  placeholder="Name"/>
                <input  placeholder="Email"/>
                </div>
                <div className='phone-subject'>
                <input  placeholder="Phone"/>
                <input  placeholder="Subject" /></div>
                
                <textarea placeholder="your message"/>
                <button>Submit</button>
            </form>
          </div>
          </div>
  )
}

export default Footer