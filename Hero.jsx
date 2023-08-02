'use client'
import './Hero.css'
import { useRouter } from 'next/navigation'

const Hero = () => {
    const router = useRouter();
    const handleAboutClick = () =>{
        router.push('/About')
    }
  return (
    <div className='hero'>
        <h1>Welcome To DYNE</h1>
        <p>DYNE has extensive experience in the IT industry,
         acquired through many years of engagement in the information technology sector. </p>
        
        
        <p> Whether you’ve just started your own business,
         or have been in the market for years - taking care of your IT needs can be complicated and time consuming.
          At DYNE, we believe that your IT requirements should be supported by experienced professionals,
           and we offer a variety of services to cater to your organization’s needs.</p>
            <button
                type='button'
                onClick={handleAboutClick}
                className='about-button'
            >About Dyne</button>
           </div>
  )
}

export default Hero