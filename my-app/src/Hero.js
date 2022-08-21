import React from 'react'
import { useGlobalContext } from './Context'
import firstImg from './background.jpeg'
import phone from'./sunny.jpg'
const Hero = () => {
  const data=useGlobalContext()
  const {Closesubmenu} =useGlobalContext()
  console.log(data);
  return (
    <section className='hero' style={{width:'100%'}} onMouseOver={Closesubmenu}>
      <div className='hero-center' style={{display:'flex'}}>
      <article className='discription'>
     <h1>How can you make it happen??</h1>
     <p>If only it were all so simple! If only there were evil people somewhere insidiously committing evil deeds, and it were necessary only to separate them from the rest of us and destroy them. But the line dividing good and evil cuts through the heart of every human being. And who is willing to destroy a piece of his own heart?
     </p>
     <p>So what is the answer? How can you stand your ground when you are weak and sensitive to pain, when people you love are still alive, when you are unprepared? What do you need to make you stronger than the interrogator and the whole trap? From the moment you go to prison you must put your cozy past firmly behind you. At the very threshold, you must say to yourself: “My life is over, a little early to be sure, but there’s nothing to be done about it. I shall never return to freedom. I am condemned to die – now or a little later. But later on, in truth, it will be even harder, and so the sooner the better. I no longer have any property whatsoever.For me those I love have died, and for them I have died. From today on, my body is useless and alien to me. Only my spirit and my conscience remain precious and important to me.”</p>
     {/* <button className='read'>Read more</button> */}
      </article>
      <article className='img-description'>
      <img src={phone}alt='image1'></img>
      </article>
      </div>
    </section>
  )
}

export default Hero