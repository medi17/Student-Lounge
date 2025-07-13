import mongoose from "mongoose"

const contactSchema = new mongoose.Schema({
     firstName: { type: String, required: true, trim: true },
     lastName: { type: String, required: true, trim: true },
     email: { type: String, required: true, trim: true },
     message: { type: String, required: true, trim: true }, 
     sentDate: { type: Date, default: Date.now }
})

const contactModel = mongoose.models.contact || mongoose.model("contact", contactSchema)


export default contactModel