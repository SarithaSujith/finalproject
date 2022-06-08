import express from 'express';
import 'dotenv/config';
import './db/client.js';
import cors from 'cors';
import router from './routes/recipes.js';

const port = process.env.PORT || 5000;
const app = express();
app.use(cors());

//built in middleware function in Express starting from v4.16.0. It parses incoming JSON requests and puts the parsed data in req.body. Without this, req.body would be undefined.
app.use(express.json());
//appending the users route
app.use('/recipes', router);

//creating the initial route
app.get('/', (req, res) => {
	res.send('<h1>Connecting your MongoDB database with mongoose!</h1>');
});

// const connection = `mongodb+srv://Saritha:${process.env.PASS}@cluster0.khzpx.mongodb.net/finalprojectdb?retryWrites=true&w=majority`;

// mongoose.connect(connection);
// mongoose.connection.on(
// 	'error',
// 	console.error.bind(console, 'connection error')
// );

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
