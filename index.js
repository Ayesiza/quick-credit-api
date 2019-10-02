import express from 'express'
import apiRouters from './app/routers/apiRouters'




const PORT = process.env.PORT || 3000 ;
const app = express();
app.use(express.json());
app.use('/api/v1/', apiRouters)



app.use((error, req, res, next) => {
  res.status(error.status || 500).send({ error: error.status || 500, message: error.message  });
  next();
});


app.listen( PORT, () => console.log(`listening on port ${PORT}`));

 export default app 