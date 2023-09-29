import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import View from "./components/Main";
import HomePage from "./components/home/home";
import Addbook from "./components/Addbook/addbook";
// import Deposit from "./components/deposit/deposit";
// import Withdraw from "./components/withdraw/withdraw";
import Navigation from "./components/nav/nav";
// import Transaction_history from "./components/TH/transaction_history";
import {Toaster} from 'react-hot-toast'

function App() {
	const user = localStorage.getItem("token");

	return (<>
		<Toaster position='center-top' toastOptions={{duration:2000}} />
		<Navigation />
		<Routes>
			{/* {user && <Route path="/" exact element={<Main />} />} */}
			<Route path="/" element={<HomePage />} />   
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/addbook" element={<Addbook />} />
            <Route path="/view" element={<View />} />
			{/* <Route path="/logout" exact element={<Main />} /> */}
			{/* <Route path="/Transaction" exact element={<Transaction_history />} /> */}
			{/* <Route path="/" element={<Navigate replace to="/login" />} /> */}
		</Routes>
		</>
	);
}

export default App;
