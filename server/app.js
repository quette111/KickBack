import 'dotenv/config';  
console.log('MONGO_URI=', process.env.MONGO_URI);
import Product from './models/Products.js';
import express from 'express';
import 'express-async-errors';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import mongoSanitize from 'express-mongo-sanitize';
import xss from 'xss-clean';
import hpp from 'hpp';
import path from 'path';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import productsRouter from './routers/products.js';
import appRoutes from './routers/api.js';
import loginRoutes from './routers/loginRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(helmet());
//({ origin: 'http://localhost:8080', credentials: true }));
//app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));


app.use(cors({
  origin: process.env.FRONTEND_ORIGIN || 'http://localhost:5173',
  // credentials: true     // uncomment 4cookies/auth
}));
app.use(cors()); // allows everything
app.options('*', cors()); // enable preflight for all routes

app.use(express.urlencoded({ extended: true }));
app.use('/images', express.static(path.join(__dirname, 'public/images')));

app.use(cookieParser());
app.use(express.json());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());
app.use((req, res, next) => {
  res.setHeader("Content-Security-Policy", "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; connect-src 'self';");
  next();
});


app.use('/api/v1/users', appRoutes);
app.use('/api/v1/login', loginRoutes)
app.use('/api/products', productsRouter);

app.use('/scripts', express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'public')));
console.log('Running from:', __dirname);



app.use('/images', express.static('public/images'));

app.use(express.json());

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "https://cdn.jsdelivr.net"],
      imgSrc: ["'self'", "data:", "https://img.logo.dev"],

    },
  })
);


app.get('/auth/check', (req, res) => {
  if (req.cookies.jid) {

    return res.json({ loggedIn: true });
  }
  res.json({ loggedIn: false });
});





app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});


import fs from 'fs';


app.get('/_debug/views', (req, res) => {
  const viewsDir = path.join(__dirname, '../views');
  fs.readdir(viewsDir, (err, files) => {
    if (err) return res.status(500).send(err.message);
    res.json(files);
  });
});

app.all('*', (req, res) => {
  res.status(404).send('Resource not found');
});



app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke! Check the console for details.');
});

const start = async () => {
  try {

    await mongoose.connect(process.env.MONGO_URI, console.log('connected to DB'))
    app.listen(PORT, console.log(`Server is listening onnn port: ${PORT}...`))
  } catch (error) {
    console.log(error)
  }
}


start()