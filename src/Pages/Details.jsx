import React, { createContext, useEffect, useState } from 'react'

export const store = createContext()

const Details = (props) => {
    const [content, setContent] = useState([]);
    useEffect(()=>{
        let fetchDetails=async()=>{
            let fetchUrl=await fetch('https://backendapi-q8rm.onrender.com')
            let fetchData=await fetchUrl.json()
            setContent(fetchData)
        }
        fetchDetails();
    })
    return (
        <div>
            <store.Provider value={[content, setContent]}>
                {props.children}
            </store.Provider>
        </div>
    )
}


export default Details;