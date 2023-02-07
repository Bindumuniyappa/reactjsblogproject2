import React from 'react'
import { useLocation } from 'react-router-dom'

const ResultPage = () => {
    const location = useLocation();
    const { title, img, description } = location.state;
    console.log(title)
    return (
        <div className='singlePage'>
            <h1 style={{color:'red'}}>{title}</h1>
            <img src={img} alt="" />
            <p style={{color:'green'}}>{description}</p>
        </div>
    )
}

export default ResultPage;