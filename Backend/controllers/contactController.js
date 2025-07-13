import nodemailer from "nodemailer"
import validator from 'validator'
import contactModel from "../models/contactModel.js"

const transpoter = nodemailer.createTransport({
     service: 'gmail',
     auth: {
          user: process.env.EMAIL_USER_EMAIL,
          pass: process.env.EMAIL_PASSWORD,
     }
})


const contactMessages = async (req, res) => {
     
     const { firstName, lastName, email, message } = req.body;

     if (!validator.isEmail(email)) {
          return res.status(400).json({ message: 'Invalid email format.' });
     }

     try {
          const newContact = new contactModel({
               firstName: firstName,
               lastName: lastName,
               email: email,
               message: message,  
          })

          await newContact.save()

          const mailFormat = {
               to: process.env.EMAIL_USER,   
               subject: `New Contact Message from ${firstName} ${lastName}`,
               html: `<p>You have received a new contact message:</p>
                         <ul>
                              <li><strong>Name:</strong> ${firstName}</li>
                              <li><strong>Email:</strong> ${email}</li>
                              <li><strong>Message:</strong> ${message}</li>
                         </ul>
                    <p>Sent at: ${newContact.sentDate.toLocaleString()}</p>
               `
          }

          await transpoter.sendMail(mailFormat)

          res.status(200).json({ message: 'Message sent successfully!' });

     } catch (error) {
          console.log(error)

          if (error.name === 'ValidationError') {
               const errors = Object.values(error.errors).map(err => err.message);
               return res.status(400).json({ message: 'Validation failed', errors });
          }
          
          res.status(500).json({ message: 'Server error please try again later.' });
     }
}

export { contactMessages }