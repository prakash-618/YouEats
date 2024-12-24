import React, { useEffect, useState } from 'react'
import './List.css'
import axios from "axios"
import {toast} from 'react-toastify'
const List = ({url}) => {
  const [list,setList] = useState([])
  const fetchList = async()=>{
    const response = await axios.get(`${url}/api/food/list`)
    
    if(response.data.success){
      setList(response.data.data)
    }
    else{
      toast.error("Error")
    }
  }

  const removeFood = async(foodId)=>{
    const response = await axios.post(`${url}/api/food/remove`,{id:foodId})
    await fetchList();
    if(response.data.success){
      toast.success(response.data.message)
    }
    else{
      toast.error("Error")
    }
  }


  useEffect(()=>{
    fetchList()
  },[])
  return (
    <div className='list add flex-col'>
      <p>ALL Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
            <p>image</p>
            <p>Name</p>
            <p>Description</p>
            <p>Category</p>
            <p>Price</p>
            <p>Action</p>
        </div>
        {list.map((item,index)=>{
          return(
            <div key={index} className='list-table-format'>
              <img src={`${url}/images/`+item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.description}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p onClick={()=>removeFood(item._id)}className='cursor'>X</p>
            </div>
          )
        })} 
      </div>
    </div>
  )
}

export default List
