import { toast } from 'react-hot-toast';
// import styles from "./styles.module.css";
import Card from 'react-bootstrap/Card';
import axios from "axios";
import { useState } from 'react';

const View = () => {

	const [data,setData]= useState([])
	
	const getuser = async  () => {
		try {
			const response =await axios.get('http://localhost:4000/'); // Send a POST request to your server's /clearCookie endpoint
			if (response.status === 200) {
				setData(response.data.user)
				// console.log(response.data.user);
				// toast.error(response.data.message);
			  }
			// window.location='/login';
		  } catch (error) {
			console.error('Failed to get cookie:', error);
		  }
		// localStorage.removeItem("token");
		
	};
	// setInterval(function () {
	// 	getuser()
	//   }, 1000);
	

	return (<>
	<button style={{background:"blue", color:"white", marginTop:"5%",marginLeft:"45%"}} onClick={()=>{getuser()}}>view Books</button>
		{/* <div style={{width:"80%",height:"500px",marginTop:"5%",boxShadow:"4px 2px 10px 0px black" }}> */}
		{data.map((item, key) => (<>
        
        <Card id="all" style={{background:"white",color:"black"}}
                  className="mb-2"
                >
                  <Card.Header>book-{key+1}</Card.Header>
                  <Card.Body>
				  <Card.Img style={{ width: '100px',height:"100px",float:"left",margin:"20px" }} className="img" variant="top" src={`${item.img}`} />
				  {/* <img src= /> */}
                    <Card.Title>Book name: {item.book}</Card.Title>
                    <Card.Text>
                      Author Name: {item.author}<br></br>
					  Description: {item.des}<br></br>
                     ID:{item._id}
                    </Card.Text>
					<h3 style={{color:"green"}}>{item.status}</h3>
                    {/* <Button variant="outline-danger"  id="del" onClick={()=>del(item)}>Delete</Button> */}
                    {/* <input type="button" id="del" value="Delete" onClick={()=>del(item)} /> */}
                    {/* <button  onclick={(item)=>del(item)}>Delete</button> */}
                  </Card.Body>
                  
                </Card>
                
        {/* <li>
          {item.Name}:{item.balance}
        </li> */}
     </> ))}
		{/* </div> */}
		
		</>
	);
};

export default View;
