// import './wishlist.css';

// // Example of a data array that
// // you might receive from an API
// const data = [
// { name: "Anom", age: 19, gender: "Male" },
// { name: "Megha", age: 19, gender: "Female" },
// { name: "Subham", age: 25, gender: "Male"},
// ]

// function Wishlist() {
// return (
// 	<div className="App">
// 	<table>
// 		<tr>
// 		<th>Name</th>
// 		<th>Rating</th>
// 		</tr>
// 		{data.map((val, key) => {
// 		return (
// 			<tr key={key}>
// 			<td>{val.name}</td>
// 			<td>{val.age}</td>
// 			<td>{val.gender}</td>
// 			</tr>
// 		)
// 		})}
// 	</table>
// 	</div>
// );
// }

// export default Wishlist;


// import React from "react";
// //import db from 'firebase/firestore';
// import { getFirestore } from "firebase/firestore";
// import {useState,useEffect} from 'react';
  
// const Wishlist = () => {
// 	const db=getFirestore();
	
// 	const [blogs,setBlogs]=useState([])

//   const fetchBlogs=async()=>{
//     const response=db.collection('Wishlist');
//     const data=await response.get();
//     data.docs.forEach(item=>{
//      setBlogs([...blogs,item.data()])
//     })
// 	useEffect(() => {
// 		fetchBlogs();
		
// 	  }, [])
// 	}

//   return(
    
	
// 	  <div className="App">
//       {
//         blogs && blogs.map(blog=>{
//           return(
//             <div className="blog-container">
// 			  <h1>Wishlist</h1>
//               <h4>{blog.name}</h4>
//               <p>{blog.rating}</p>
//             </div>
//           )
//         })
//       }
//     </div>
//   );
	
// 	}
  


// export default Wishlist;



import React from "react";
//import db from 'firebase/firestore';
import { getFirestore } from "firebase/firestore";
import {useState,useEffect} from 'react';
const db=getFirestore();
const Wishlist = () => {
	const [info , setInfo] = useState([]);
  
    // Start the fetch operation as soon as
    // the page loads
    window.addEventListener('load', () => {
        Fetchdata();
      });
  
    // Fetch the required data using the get() method
    const Fetchdata = ()=>{
        db.collection("Wishlist").get().then((querySnapshot) => {
             
            // Loop through the data and store
            // it in array to display
            querySnapshot.forEach(element => {
                var data = element.data();
                setInfo(arr => [...arr , data]);
                  
            });
        })
    }
  return(
    
	
	  <div>
            <center>
            <h2>Wishlist</h2>
            </center>
          
        {
            info.map((Wishlist) => (
            <Frame name={Wishlist.name} 
                   rating={Wishlist.rating} 
                   />
            ))
        }
        </div>
  
  );
	
	}
  const Frame = ({name ,rating}) => {
    console.log(name + " " + rating );
    return (
        <center>
            <div className="div">
                  
<p>NAME : {name}</p>
   
                  
<p>Age : {rating}</p>
  
                  
   
            </div>
        </center>
    );
}


export default Wishlist;