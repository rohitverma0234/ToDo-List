import React, { useState } from 'react'
import styled from "styled-components";
import { FaPlus } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";

const ToDo = () => {

  const[data, setData] = useState("");
  const[items, setItems] = useState([]);

  const change=(e)=>{
    setData(e.target.value)
  }

  const addData=()=>{
    if(!data){
      alert("No Data")
    }else{
    setItems([...items,data])
    setData("")
    }
  }

  const deleteData=(id)=>{
    console.log(id);
    
    const updatesItems = items.filter((val,ind)=>{
      return id!==ind;
    })
    setItems(updatesItems);
  }

  const clear=()=>{
    setItems([])
  }


  return (
    <Wrapper>
      <div className='main'>

        <div className='center'>
          <img className='to-do-img' src="./images/to do img.png" alt='' />
          <h2 className='head'>Add Your List Here✌</h2>

          <div className='input_fields'>
            <div>
              <input className='add_items' type='text' placeholder='✍️Add item...' value={data} onChange={change} />
              <FaPlus className='plus' onClick={addData} />
            </div>

            <div>
            {
              items.map((val,index)=>{
                return(
                <div  key={index} className='list_items'>
                  <h3 className='lists'>{val}</h3>
                  <FaRegTrashAlt className='trash' onClick={()=>deleteData(index)}/>
                </div>
                )
                
              })
            }
              
            </div>
          </div>

          <button onClick={clear}>Remove All</button>

        </div>

      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display:flex;
  justify-content:center;
  align-items:center;
  height:100vh;

  .to-do-img{
    height:15vh;
  }

  .center{
    text-align:center;
  }

  .head{
    color:white;
  }

  .plus{
    color: black;
    margin-left: -36px;
    font-size: 30px;
    margin-bottom: -10px;
    cursor:pointer;
  }

  .list_items .trash{
    color: black;
    position: absolute;
    top: 10px;
    right: 8px;
    font-size: 30px;
    cursor:pointer;
  }

  .add_items{
    width: 50vh;
    height: 6vh;
  }

  .list_items{
    position:relative;
  }

  .list_items .lists{
    width: 50vh;
    height: 5vh;
    background-color: white;
    text-align: left;
    padding-left: 10px;
    font-weight: 600;
    padding-top:15px;
  }

  .input_fields{
    display: flex;
    flex-direction: column;
    gap: 35px;
  }

  button{
    margin-top: 25px;
    padding: 15px;
    border-radius: 4px;
    cursor: pointer;
  }
  
`

export default ToDo