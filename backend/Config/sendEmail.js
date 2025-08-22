import { Resend } from "resend";
import dotenv from 'dotenv'
dotenv.config()

if (!process.env.RESENT_API_KEY)
{
    console.log("Provide RESENT_API_KEY in .env file")
}


const resend = new Resend(process.env.RESENT_API_KEY);
const sendEmail = async({  sendTo, subject, html })=>{
    try {

        const { data, error } = await resend.emails.send({
          from: "Binkeyit <onboarding@resend.dev>",
          to: sendTo,
          subject: subject,
          html: html,
        });

        
    } catch (error) {
       console.log(error) 
    }
}
 export default sendEmail
