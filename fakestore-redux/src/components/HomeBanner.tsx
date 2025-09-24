import React from 'react'
import { Link } from 'react-router-dom'
import { jacketBanner } from '../bannerData'


const HomeBanner:React.FC = () => {


  return (

    <div className="jacket-banner">

        {jacketBanner.map((jacket, index) => 
        
        <>

        <div key={index} className="jacket-item">
            <img src={jacket.image} alt={jacket.name} />
            <Link to='/productlist'>{jacket.name}</Link>
        </div>
        
        </>)}
        
    </div>

  )
}

export default HomeBanner