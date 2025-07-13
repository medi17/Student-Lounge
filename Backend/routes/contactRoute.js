import express from "express"
import { contactMessages } from "../controllers/contactController.js";

const contactRouter = express.Router()

contactRouter.post("/send", contactMessages)

export default contactRouter