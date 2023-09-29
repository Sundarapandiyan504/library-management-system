 import "./App.css"

import Card from 'react-bootstrap/Card';
export default function HomePage(){
    return(<>
    <center>
    <Card style={{ width: '50%',height:'500px',marginTop:'4%',boxShadow:'0px 0px 10px 0px black'}}><br></br>
        <center><Card.Img style={{ width: '80%'}} className="img" variant="top" src={"https://th.bing.com/th/id/OIP.wCFArHWF-U3nHjeJ3CottgHaE7?pid=ImgDet&rs=1"} /></center>
      
      <Card.Body>
        <Card.Title>Welcome to library management system</Card.Title>
        <br></br><br></br>
      </Card.Body>
    </Card></center>
    {/* <center>
     <button className="white_btn">Delete account</button>
    </center> */}
    
    
    </>)
}