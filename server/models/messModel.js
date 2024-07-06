import mongoose from "mongoose";

const messSchema = mongoose.Schema({
    messName: String,
})

const Mess = mongoose.model('Mess', messSchema);

export default Mess;