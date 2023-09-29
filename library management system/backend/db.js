const mongoose = require('mongoose')

module.exports = ()=>{
    const connectionparams = {
		dbName: `sample`,
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
    try{
        mongoose.connect('mongodb+srv://sundar:123@cluster0.hehzzu6.mongodb.net/?retryWrites=true&w=majority',connectionparams)
        .then(()=>{console.log("Data base connected successfully")})
        .catch(()=>{console.log("Data base connected faild")})
    } 
    catch{
        console.log("error");
    }
}