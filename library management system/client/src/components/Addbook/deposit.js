import { useState ,useEffect} from "react";
import axios from "axios";
import { toast } from 'react-hot-toast';
import styles from "./styles.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import Cookies from 'js-cookie';
export default function Deposit() {
 
  let [deposit, setDeposit] = useState();
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
   const value = item.map((i,index) => {
        const balance= parseInt(i.balance)+parseInt(deposit)
        const email=item[0].email;
        const th={
          name:i.name,
          email:i.email,
          amount:`+ ${deposit}`,
          total:balance,
          type:"deposite"
         }
           console.log(data.balance);
           const response = axios.post(
            'https://back-end-eymw.onrender.com/api/users/deposit',
            { email, balance,th },
            { withCredentials: true })
            toast.success(`Amount ${deposit} is Deposit Successfully`);
           setDeposit("")
           
    }) 
  }

  return (
    <>
      <div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
    <div className={styles.form_container}>
      <h1>Deposit</h1>
      <h4>{tata} </h4>
      <input
        type="text"
        placeholder="Enter Amount"
        value={deposit}
        onChange={(e) => setDeposit(e.target.value)}
		className={styles.input}
      />
      <Button type="submit" className={styles.green_btn} disabled={!(deposit)} onClick={handleSubmit} >Deposit</Button>
      {/* <button onClick={handleSubmit}  disabled={!(deposit)} className={styles.green_btn}>Login</button> */}
       {/* <button onClick={get}>get</button> */}
	   </div>
	   </div>
    </div>
    </div>
    </>
  );
}