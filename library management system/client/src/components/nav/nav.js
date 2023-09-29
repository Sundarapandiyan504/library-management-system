import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import axios from "axios";
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState ,useEffect} from "react";
import styles from "../Main/styles.module.css";
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

export default function Navigation(){
  
  let [data, setData] = useState();
  let [item, setItem] = useState();
  let [res, setRes] = useState([]);

	const navigate = useNavigate();

  var beforeArr=["signup","login"]

  setInterval(function () {
    const people = Cookies.get('people');
    // console.log(people);
    setItem(people)
  }, 1000);
 
  
  // let url = "https://back-end-eymw.onrender.com/api/auth/getuserdata";
// useEffect(() => {
//   const email=Cookies.get('email');
//   // console.log(email);
//   async function fetchdata() {
//     let res = await axios.post(url,{email},{ withCredentials: true });
//     let result = [res.data];

//     setData(result);
//     let newItems = result.map((item) => {
 
//     let id=item._id
    
//     return {id};
//   });
//     // console.log(newItems);
//     setRes(newItems);
//     const people = Cookies.get('people');
    
//     // console.log(people);
//     // alert(people)
//   setItem([people])
//   }
//   fetchdata();
// },[data]);
// const people = Cookies.get('people');

// console.log(item);
if(item==="user"){
  // console.log("ansfklnalfknasfnak");
  beforeArr=["addbook","view"]
}

// item.map((i,index)=>{
//   if(people==="user"){
//     beforeArr=["deposit","withdraw","Transaction"]
//   }else if(i==="admin"){
//     beforeArr=["create","login","alldata"]
//   }
  
// })

const handleLogout = async  () => {
    try {
      Cookies.remove('AuthToken');
      Cookies.remove('email');
      Cookies.remove('people');
        toast.success('Cookie cleared successfully');
        navigate("/login");
      } catch (error) {
        toast.error('Failed to clear cookie:', error);
      }
    // localStorage.removeItem("token");
    
};

const logOut = ()=>{
  Cookies.remove('people');
  navigate("/")
}
// console.log("sdfsdf",res[0].id);
// const deleteItem = async () => {
//   const itemId=res[0].id
//   try {
//     // Make an HTTP DELETE request to the server's delete route
//     await axios.delete(`https://back-end-eymw.onrender.com/api/auth/delete/${itemId}`);
//     // Cookies.remove('AuthToken');
//     // Cookies.remove('email');
//     Cookies.remove('people');
//     toast.success('Account Delete Successfully');
//     navigate("/login");
//     // Handle success (e.g., update the UI)
//     // console.log('Item deleted successfully');
//   } catch (error) {
//     // Handle error (e.g., show an error message)
//     console.error('Error deleting item', error);
//   }
// };
const btn =()=>{
    return (<button  onClick={logOut}>
        Logout
    </button>)
}
// const btn1 =()=>{
//     return (<button className='white_btn' onClick={deleteItem}>
//         Delete Account
//     </button>)
// }
// const nav =()=>{
//   const people = Cookies.get('people');
//   // console.log(people); 
//   setItem([people])
// }

    return(<>
    
      <Navbar  style={{ backgroundColor: '#3bb19b'}} >
        <Container>
        {/* {nav} */}
          {/* <Navbar.Brand  href="/">Home</Navbar.Brand> */}
          <button className="btn" onClick={()=>{navigate("/")}}>Home</button>
          <Nav className="me-auto">
          {beforeArr.map((i,index)=>{
           return <button onClick={()=>{navigate(`/${i}`)}}>{i}</button> 
            })}
          </Nav>
          {btn()}
          {/* {btn1()} */}
        </Container>
        
      </Navbar>
      

      
    </>)
}