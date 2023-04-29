import React, { useEffect ,useState} from 'react'
import { useDispatch } from 'react-redux';
import './Home.css';
import { ADD_TO_CART } from '../Action';
const Home = () => {
 const[info , setInfo] = useState([]);
 // const products = useSelector(state => state.products);
 const dispatch = useDispatch();
   useEffect(()=>{
     const fetchdata = async ()=>{
          const api = await fetch('https://dummyjson.com/products')
          .then((data)=>data.json())
          .then((user)=>{setInfo(user)
          
          })
          console.log("info",info);
     }
     fetchdata();
    },[])
    
    const handleClick = (item)=>{
      console.log("item" , item);
     dispatch(ADD_TO_CART(item));
     console.log("checking",ADD_TO_CART);
    }

  return (
    <div>
     <h1>Home Page</h1>
     {info.length === 0 ? (
        <p>Loading...</p>
      ) : (
      
     info.products.map((item,index) => (
    <div key={index} className='container'>
      <div className='img'> <img src={item.thumbnail} alt='images' /></div>  
      <div className='text' >
      <p>Title : {item.title}</p>
      <p>Price :{item.price}</p>
      </div>
      <div><button className='btn' type='submit' value={index} onClick={()=>handleClick(item)}>Add Cart</button></div>
    </div>
  ))
      ) }
             
</div>
  )
}

export default Home;