import app from '../config/express'
import { PORT } from "../config/env/production";

app.listen(PORT,()=>{
    console.log(`SERVER IS STARTING AT PORT ${PORT}`);

})