const mongoose = require('mongoose')
// var Schema = mongoose.Schema;

const bookSchema = new mongoose.Schema({
	book: { type: String, required: true },
	author: { type: String, required: true },
	des: { type: String, required: true },
	img: { type: String, required: true },
	status: { type: String, required: true },
	// hostel: { type: String, required: true },
	// admission_id: { type: String, required: true },
	// room_number: { type: String, required: true },
	// mobile_number: { type: Number, required: true },
	// outpass_history:[{}],
});
// const User = mongoose.model("user", bookschema);
module.exports = mongoose.model("book", bookSchema)