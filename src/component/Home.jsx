import React from 'react'
import img1 from '../assets/img1.jpg'
import Block from '../data/Block'



const Home = () => {
  return (
    <section className='container'>


    <div className='subContainer'>
        <nav className='navContainer'>
            <div>
                <h1 className='w'>W.</h1>
            </div>
            <ul className='navLinks'>
            <li >
                <a href="">Home</a>
            </li>
            <li >
                <a href="">New</a>
            </li>
            <li >
                <a href="">Popular </a>
            </li>
            <li>
                <a href="">Trending </a>
            </li>
            <li>
                <a href="">Categories </a>
            </li>
            </ul>
        </nav>

        <div className='section2'>
            <div className='subSection1'>
            <img className='image' src={img1} alt="img1" />
           <div className='text'>
            <h1> The Bright Future of Web 3.0?</h1>
            <div className='subText'>
            <h6>  We dive into the next evolution of the web that
                claims to put the power of the platforms back 
                into the hands of the people. But is it really 
                fulfilling its promise?</h6>
                <div  className='btn'>
                <button>Read More</button>
                </div>

            </div>
           </div>
            </div>
         {/* other side */}
        
         <div className='subSection2'>
            <div className='new'>
            <h2>New</h2>
            </div>

            <div className='a'>
            <h4 >Hydrogen VS Electric Cars</h4>
            <h6>Will hydrogen-fueled cars ever catch up to EVs?</h6>
            {/* <hr style={'width: 20%'}/> */}
            </div>
            <br />
            <div className='b'>
            <h4>The Downsides of AI Artistry</h4>
            <h6>What are the possible adverse effects of on-demand AI image generation?</h6> 
            {/* <hr /> */} 
            </div>
            <br />
            <div className='c'>
            <h4>Is VC Funding Drying Up?</h4>
            <h6>Private funding by VC firms is down 50% YOY. We take a look at what that means.</h6>

            </div>

         </div>

        </div>

        <div>
            <Block/>
        </div>


    </div>
    </section>
  )
}

export default Home

