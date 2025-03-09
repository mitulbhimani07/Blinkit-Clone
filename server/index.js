import express from 'express';
import cors from 'cors';
import dotnev from 'dotenv';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import connectDB from './config/mongodb.js';
import routes from './routes/user_routes.js';
dotnev.config();
const app = express();
app.use(cors({
    Credentials : true,
    origin : process.env.FRONTED_URL
}));
app.use(express.json());
app.use(cookieParser());
app.use(morgan())
app.use(helmet({
    crossOriginResourcePolicy : false
}));
const PORT = 8050 || process.env.PORT;

app.get('/',(req,res)=>{
    // server to clinte side
    res.json({message : "Hello World"})
})
app.use('/api/user',routes);

connectDB().then(()=>{
    app.listen(PORT,(error)=>{
        if (error) {
            console.log(error);
            return false
        }
        console.log(`Server is running http://localhost:${PORT}`);
    })
})
