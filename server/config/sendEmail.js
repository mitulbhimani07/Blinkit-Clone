import { Resend } from 'resend';
import dotenv from 'dotenv';
dotenv.config();
if (!process.env.RESEND_API) {
    console.log('Provie your Resend API key in side .env file');    
}
const resend = new Resend(process.env.RESEND_API);

const sendEmail = async ({name, sendTo, subject , html   })=>{
    try {
        const { data, error } = await resend.emails.send({
            from: 'Blinkit  <onboarding@resend.dev>',
            to: sendTo,
            subject: subject,
            html: html,
          });
           if (error) {
            return console.log({ error });
            
           }
           return data
    } catch (error) {
        console.log(error);
        
    }
}
export default sendEmail;