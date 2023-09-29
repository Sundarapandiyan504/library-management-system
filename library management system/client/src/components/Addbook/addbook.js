import { useState ,useEffect} from "react";
import axios from "axios";
import { toast } from 'react-hot-toast';
import styles from "./styles.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import Cookies from 'js-cookie';
export default function Addbook() {
 
  let [book, setBook] = useState();
  let [author, setAuthor] = useState();
  let [img, setImg] = useState();
  let [des, setDes] = useState();
//   let [book, setBook] = useState();
  let [data, setData] = useState();
  let [item, setItem] = useState([]);
  
  let url = "https://back-end-eymw.onrender.com/api/auth/getuserdata";
useEffect(() => {
  const email=Cookies.get('email');
  // console.log(email);
  async function fetchdata() {
    let res = await axios.post(url,{email},{ withCredentials: true });
    let result = [res.data];
    // console.log(result);
    setData(result);
    let newItems = result.map((item) => {
    let name = item.name;
    let id=item._id
    let email = item.email;
    let balance = item.balance;
    return {name,email,balance,id};
  });
  console.log(newItems);
  setItem([...newItems]);
  }
  fetchdata();
},[data]);
  
 const tata= item.map((i,index)=>{
    // console.log(i);
      return `${i.name} balance is : ${i.balance}`
  })
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = book.toUpperCase()
    // console.log(name);
   
        const response = await axios.post(
          'http://localhost:4000/Addbook',
          { name, author,des,img } 
        );
        if (response.status === 200) {
          toast.error(response.data.message);
        }
        if (response.status === 201) {
          toast.success(response.data.message);
        }
       
     
  }

  return (
    <>
      <div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
    <div className={styles.form_container}>
      <h1>Add Book</h1>
      <h4>{tata} </h4>
      <input
        type="text"
        placeholder="Enter book name"
        value={book}
        onChange={(e) => setBook(e.target.value)}
		className={styles.input}
      />
      <input
        type="text"
        placeholder="Enter author name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
		className={styles.input}
      />
      <input
        type="text"
        placeholder="Enter description"
        value={des}
        onChange={(e) => setDes(e.target.value)}
		className={styles.input}
      />
      <input
        type="text"
        placeholder="Enter image url"
        value={img}
        onChange={(e) => setImg(e.target.value)}
		className={styles.input}
      />
      <Button type="submit" className={styles.green_btn} disabled={!(des)} onClick={handleSubmit} >Addbook</Button>
      {/* <button onClick={handleSubmit}  disabled={!(deposit)} className={styles.green_btn}>Login</button> */}
       {/* <button onClick={get}>get</button> */}
	   </div>
	   </div>
    </div>
    </div>
    </>
  );
}