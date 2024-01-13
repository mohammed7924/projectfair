import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import landingImg from '../assets/landingimg.png' 
function Home() {
    const navigate=useNavigate()
    const handleNavigate=()=>{
        navigate('projects')
    }
  return (
    <>
    {/* landing aprt */}
        <div style={{height:'100vh'}} className='w-100 d-flex justify-content-center align-items-center rounded bg'>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-lg-6'>
                        <h1 style={{fontSize:'80px'}} className='fw-bolder text-light mb-3'>
                            <i style={{height:'85px'}} className='fa-solid fa-hands-holding-circle'></i> Project Fair
                        </h1>
                        <p  className='text-white' style={{textAlign:'justify'}}> One stop destination for all software develepment projects.Where user can add and manage their projects.As well as access all projects available in our website...what are you waiting for!! </p>               

                    <Link id='but' className='btn   ' to={'/login'}><span className='text-white'>Start To Expolore</span>  </Link>
                    </div>
                    <div className='col-lg-1'></div>
                    <div className='col-lg-4'>
                        <img className='img-fluid' src={landingImg} alt="landing" />
                    </div>
                </div>
            </div>
            <div>
                
            </div>
            
        </div>
{/* all projects part */}
        
        <div className='mt-5'>
                    <h1 className='text-center mb-5'>Explore Our Project</h1>
                    <marquee>
                        <div className='d-flex'>
                            <div className='project me-5'>
                                <ProjectCard></ProjectCard>
                            </div>
                        </div>
                    </marquee>
                    <div className='text-center'>
                        <button  style={{textDecoration:'none'}} onClick={handleNavigate} className='btn btn-link'>View More Projects</button>
                    </div>
                   
                </div>
        
    </>
     
  )
}

export default Home