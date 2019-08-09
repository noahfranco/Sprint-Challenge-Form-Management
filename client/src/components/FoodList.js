import React,  { useState, useEffect } from "react"; 
import axios from "axios";

const FoodList = () => {
    
    const [food, setFood] = useState([])

    useEffect(() => {
        axios
        .get("http://localhost:5000/api/restricted/data")
        .then(set => {
            console.log(set)
            setFood(set.data)
        })
        .catch(error => {
            console.log("ERROR", error)
        })
        
    }, [])

    return(
        <div> 
            { food }
        </div> 
    )

}

export default FoodList; 