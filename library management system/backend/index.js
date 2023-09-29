const express=require("express")
const app = express()
const cors = require("cors");
const db = require('./db.js')
const User = require('./modules/user.js')
const Book = require('./modules/addbooks.js')

app.use(express.json());
app.use(cors("http://localhost:3000/"))

db()

// new User({
//     name:"sundar",
//     email:"s@gmail.com",
//     password:"1231",}).save()

app.get('/',async (req,res)=>{
    // console.log("getdata");
    const user = await Book.find({})
    if (user){
        // console.log(user);
        return res.json({ message: "this book is already Exist!",user:user });
       
    }
   
// res.send("hi this is get route") 
})

app.post('/signup',async (req,res)=>{
    const name= req.body.name
    const email= req.body.email
    const password= req.body.password
    console.log(name,email,password);
    const user = await User.findOne({ email: email });
		if (user){
			return res.json({ message: "User with given email already Exist!" });
		}else{
    new User({
        name:name,
        email:email,
        password:password,}).save()
        res.status(201).json({ message: "User created successfully"});}
    console.log("hi this is signup"); 

})
app.post('/login',async (req,res)=>{
    // const name= req.body.name
    const email= req.body.email
    const password= req.body.password
    console.log(email,password);
    const user = await User.findOne({ email: email })
    .then((user)=>{
        if(user.password===password){
            res.status(201).json({ message: "User login successfully", people:"user"})
        }else{
            return res.json({ error: "password is not match" });
        }
    }).catch(()=>{
        res.json({ error: "no user found"})
    })

})
app.post('/Addbook',async (req,res)=>{
    // const name= req.body.name
    const book= req.body.name
    const author= req.body.author
    const des= req.body.des
    const img= req.body.img
    console.log(book,author);
    const user = await Book.findOne({ book: book })
    if (user){
        return res.status(200).json({ message: "this book is already Exist!" });
    }else{
new Book({
    book: book,
	author: author,
	des: des,
	img: img,
    status: "available"}).save()
    console.log("sucess");
    res.status(201).json({ message: "Book added successfully"});}
console.log("hi this is addbook"); 
})
app.post('/delete',async (req,res)=>{
    // const name= req.body.name
    const book= req.body.name
    const author= req.body.author
    const des= req.body.des
    const img= req.body.img
    console.log(book,author);
    const user = await Book.findOne({ book: book })
    if (user){
        return res.status(200).json({ message: "this book is already Exist!" });
    }else{
new Book({
    book: book,
	author: author,
	des: des,
	img: img,
    status: "available"}).save()
    console.log("sucess");
    res.status(201).json({ message: "Book added successfully"});}
console.log("hi this is addbook"); 
})

app.listen(4000,(req,res)=>{
    console.log("app listion on port 4000");  
})