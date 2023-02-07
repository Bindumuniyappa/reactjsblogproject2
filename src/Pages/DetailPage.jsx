import React from 'react'
import { Link } from "react-router-dom"
import ResultPage from './ResultPage'



const DetailPage = () => {
    const mystyle = {
        color: "red",
        backgroundColor: "yellow",
        borderRadius: "7px"
    }

    return (
        <div className='main'>
        <ResultPage/>
        <Link to="/"><button style={mystyle} >Go Home</button> </Link>
        </div>
    )
}

export default DetailPage;