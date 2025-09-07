import dotenv from 'dotenv';
dotenv.config();
console.log('Mongo URI:', process.env.MONGO_URI);

import mongoose from 'mongoose';
import Product from './Products.js';


const products = [
  {
    title: "Air Max Plus",
    brand: "Nike",
    price: 180,
    category: "womens",
    id: 1,
    description:
      "The Nike Air Max Plus brings iconic late-’90s style with its bold design lines and visible Air cushioning. Built for comfort and attitude, this classic sneaker delivers lightweight support, durable materials, and the signature Tuned Air units for all-day performance. True to size with a snug midfoot fit, it features mesh panels for breathability and a padded collar for extra comfort. The rubber outsole offers traction for city streets, while vibrant colorways and the signature Swoosh branding elevate your streetwear game. Perfect for casual rotation or collectors seeking a piece of sneaker history.",
    images: [
      "/images/newAirMax.png",
      "/images/airMax2.png",
      "/images/airMax3.png",
      "/images/airMax4.png"
    ],
    stock: 1
  },
  {
    title: "adidas Originals Samba OG",
    brand: "adidas",
    price: 100,
    category: "mens",
    id: 2,
    description:"VERY DOPE",
    images: ["/images/samba.webp", "/images/samba.webp", "/images/samba.webp", "/images/samba.webp"],
    stock: 1
  },
  {
    title: "Jordan Retro 3 OG",
    brand: "Jordan",
    price: 100,
    category: "kids",
    id: 3,
    description: "VERY DOPE",
    images: ["/images/jr3.webp", "/images/jr3.webp", "/images/jr3.webp", "/images/jr3.webp" ],
    stock: 1
  },
  {
    title: "Nike Air Force 1 Low '24",
    brand: "Nike",
    price: 120,
    category: "mens",
    id: 4,
    description: "VERY DOPE",
    images: ["/images/af1.webp", "/images/af1.webp", "/images/af1.webp", "/images/af1.webp"],
    stock: 1
  },
  {
    title: "adidas Originals Handball Spezial",
    brand: "adidas",
    price: 110,
    category: "mens",
    id: 5,
    description: "VERY DOPE",
    images: ["/images/aOH.webp", "/images/aOH.webp", "/images/aOH.webp", "/images/aOH.webp"],
    stock: 1
  },
  {
    title: "adidas Originals Handball Spezial",
    brand: "adidas",
    price: 110,
    category: "mens",
    id: 5,
    description: "VERY DOPE",
    images: ["/images/aOH.webp", "/images/aOH.webp", "/images/aOH.webp", "/images/aOH.webp"],
    stock: 1
  },
  {
    title: "adidas Originals Handball Spezial",
    brand: "adidas",
    price: 110,
    category: "mens",
    id: 5,
    description: "VERY DOPE",
    images: ["/images/aOH.webp", "/images/aOH.webp", "/images/aOH.webp", "/images/aOH.webp"],
    stock: 1
  },
  {
    title: "adidas Originals Handball Spezial",
    brand: "adidas",
    price: 110,
    category: "mens",
    id: 5,
    description: "VERY DOPE",
    images: ["/images/aOH.webp", "/images/aOH.webp", "/images/aOH.webp", "/images/aOH.webp"],
    stock: 1
  },
  {
    title: "adidas Originals Handball Spezial",
    brand: "adidas",
    price: 110,
    category: "mens",
    id: 5,
    description: "VERY DOPE",
    images: ["/images/aOH.webp", "/images/aOH.webp", "/images/aOH.webp", "/images/aOH.webp"],
    stock: 1
  },
  {
    title: "Air Max Plus",
    brand: "Nike",
    price: 180,
    category: "womens",
    id: 1,
    description:
      "The Nike Air Max Plus brings iconic late-’90s style with its bold design lines and visible Air cushioning. Built for comfort and attitude, this classic sneaker delivers lightweight support, durable materials, and the signature Tuned Air units for all-day performance. True to size with a snug midfoot fit, it features mesh panels for breathability and a padded collar for extra comfort. The rubber outsole offers traction for city streets, while vibrant colorways and the signature Swoosh branding elevate your streetwear game. Perfect for casual rotation or collectors seeking a piece of sneaker history.",
    images: [
      "/images/newAirMax.png",
      "/images/airMax2.png",
      "/images/airMax3.png",
      "/images/airMax4.png"
    ],
    stock: 1
  },
  {
    title: "adidas Originals Samba OG",
    brand: "adidas",
    price: 100,
    category: "mens",
    id: 2,
    description: "VERY DOPE",
    images: ["/images/samba.webp", "/images/samba.webp", "/images/samba.webp", "/images/samba.webp"],
    stock: 1
  },
  {
    title: "Jordan Retro 3 OG",
    brand: "Jordan",
    price: 100,
    category: "kids",
    id: 3,
    description: "VERY DOPE",
    images: ["/images/jr3.webp", "/images/jr3.webp", "/images/jr3.webp", "/images/jr3.webp"],
    stock: 1
  },
  {
    title: "Air Max Plus",
    brand: "Nike",
    price: 180,
    category: "womens",
    id: 1,
    description:
      "The Nike Air Max Plus brings iconic late-’90s style with its bold design lines and visible Air cushioning. Built for comfort and attitude, this classic sneaker delivers lightweight support, durable materials, and the signature Tuned Air units for all-day performance. True to size with a snug midfoot fit, it features mesh panels for breathability and a padded collar for extra comfort. The rubber outsole offers traction for city streets, while vibrant colorways and the signature Swoosh branding elevate your streetwear game. Perfect for casual rotation or collectors seeking a piece of sneaker history.",
    images: [
      "/images/newAirMax.png",
      "/images/airMax2.png",
      "/images/airMax3.png",
      "/images/airMax4.png"
    ],
    stock: 1
  },
  {
    title: "adidas Originals Samba OG",
    brand: "adidas",
    price: 100,
    category: "mens",
    id: 2,
    description: "VERY DOPE",
    images: ["/images/samba.webp", "/images/samba.webp", "/images/samba.webp", "/images/samba.webp"],
    stock: 1
  },
  {
    title: "Jordan Retro 3 OG",
    brand: "Jordan",
    price: 100,
    category: "kids",
    id: 3,
    description: "VERY DOPE",
    images: ["/images/jr3.webp", "/images/jr3.webp", "/images/jr3.webp", "/images/jr3.webp"],
    stock: 1
  },
  {
    title: "Air Max Plus",
    brand: "Nike",
    price: 180,
    category: "womens",
    id: 1,
    description:
      "The Nike Air Max Plus brings iconic late-’90s style with its bold design lines and visible Air cushioning. Built for comfort and attitude, this classic sneaker delivers lightweight support, durable materials, and the signature Tuned Air units for all-day performance. True to size with a snug midfoot fit, it features mesh panels for breathability and a padded collar for extra comfort. The rubber outsole offers traction for city streets, while vibrant colorways and the signature Swoosh branding elevate your streetwear game. Perfect for casual rotation or collectors seeking a piece of sneaker history.",
    images: [
      "/images/newAirMax.png",
      "/images/airMax2.png",
      "/images/airMax3.png",
      "/images/airMax4.png"
    ],
    stock: 1
  },
  {
    title: "adidas Originals Samba OG",
    brand: "adidas",
    price: 100,
    category: "mens",
    id: 2,
    description: "VERY DOPE",
    images: ["/images/samba.webp", "/images/samba.webp", "/images/samba.webp", "/images/samba.webp"],
    stock: 1
  },
  {
    title: "Jordan Retro 3 OG",
    brand: "Jordan",
    price: 100,
    category: "kids",
    id: 3,
    description: "VERY DOPE",
    images: ["/images/jr3.webp", "/images/jr3.webp", "/images/jr3.webp", "/images/jr3.webp"],
    stock: 1
  },
  {
    title: "Air Max Plus",
    brand: "Nike",
    price: 180,
    category: "womens",
    id: 1,
    description:
      "The Nike Air Max Plus brings iconic late-’90s style with its bold design lines and visible Air cushioning. Built for comfort and attitude, this classic sneaker delivers lightweight support, durable materials, and the signature Tuned Air units for all-day performance. True to size with a snug midfoot fit, it features mesh panels for breathability and a padded collar for extra comfort. The rubber outsole offers traction for city streets, while vibrant colorways and the signature Swoosh branding elevate your streetwear game. Perfect for casual rotation or collectors seeking a piece of sneaker history.",
    images: [
      "/images/newAirMax.png",
      "/images/airMax2.png",
      "/images/airMax3.png",
      "/images/airMax4.png"
    ],
    stock: 1
  },
  {
    title: "adidas Originals Samba OG",
    brand: "adidas",
    price: 100,
    category: "mens",
    id: 2,
    description: "VERY DOPE",
    images: ["/images/samba.webp", "/images/samba.webp", "/images/samba.webp", "/images/samba.webp"],
    stock: 1
  },
  {
    title: "Jordan Retro 3 OG",
    brand: "Jordan",
    price: 100,
    category: "kids",
    id: 3,
    description: "VERY DOPE",
    images: ["/images/jr3.webp", "/images/jr3.webp", "/images/jr3.webp", "/images/jr3.webp"],
    stock: 1
  },
  {
    title: "Air Max Plus",
    brand: "Nike",
    price: 180,
    category: "womens",
    id: 1,
    description:
      "The Nike Air Max Plus brings iconic late-’90s style with its bold design lines and visible Air cushioning. Built for comfort and attitude, this classic sneaker delivers lightweight support, durable materials, and the signature Tuned Air units for all-day performance. True to size with a snug midfoot fit, it features mesh panels for breathability and a padded collar for extra comfort. The rubber outsole offers traction for city streets, while vibrant colorways and the signature Swoosh branding elevate your streetwear game. Perfect for casual rotation or collectors seeking a piece of sneaker history.",
    images: [
      "/images/newAirMax.png",
      "/images/airMax2.png",
      "/images/airMax3.png",
      "/images/airMax4.png"
    ],
    stock: 1
  },
  {
    title: "adidas Originals Samba OG",
    brand: "adidas",
    price: 100,
    category: "mens",
    id: 2,
    description: "VERY DOPE",
    images: ["/images/samba.webp", "/images/samba.webp", "/images/samba.webp", "/images/samba.webp"],
    stock: 1
  },
  {
    title: "Jordan Retro 3 OG",
    brand: "Jordan",
    price: 100,
    category: "kids",
    id: 3,
    description: "VERY DOPE",
    images: ["/images/jr3.webp", "/images/jr3.webp", "/images/jr3.webp", "/images/jr3.webp"],
    stock: 1
  },
  {
    title: "Air Max Plus",
    brand: "Nike",
    price: 180,
    category: "womens",
    id: 1,
    description:
      "The Nike Air Max Plus brings iconic late-’90s style with its bold design lines and visible Air cushioning. Built for comfort and attitude, this classic sneaker delivers lightweight support, durable materials, and the signature Tuned Air units for all-day performance. True to size with a snug midfoot fit, it features mesh panels for breathability and a padded collar for extra comfort. The rubber outsole offers traction for city streets, while vibrant colorways and the signature Swoosh branding elevate your streetwear game. Perfect for casual rotation or collectors seeking a piece of sneaker history.",
    images: [
      "/images/newAirMax.png",
      "/images/airMax2.png",
      "/images/airMax3.png",
      "/images/airMax4.png"
    ],
    stock: 1
  },
  {
    title: "adidas Originals Samba OG",
    brand: "adidas",
    price: 100,
    category: "mens",
    id: 2,
    description: "VERY DOPE",
    images: ["/images/samba.webp", "/images/samba.webp", "/images/samba.webp", "/images/samba.webp"],
    stock: 1
  },
  {
    title: "Jordan Retro 3 OG",
    brand: "Jordan",
    price: 100,
    category: "kids",
    id: 3,
    description: "VERY DOPE",
    images: ["/images/jr3.webp", "/images/jr3.webp", "/images/jr3.webp", "/images/jr3.webp"],
    stock: 1
  },
  {
    title: "Air Max Plus",
    brand: "Nike",
    price: 180,
    category: "womens",
    id: 1,
    description:
      "The Nike Air Max Plus brings iconic late-’90s style with its bold design lines and visible Air cushioning. Built for comfort and attitude, this classic sneaker delivers lightweight support, durable materials, and the signature Tuned Air units for all-day performance. True to size with a snug midfoot fit, it features mesh panels for breathability and a padded collar for extra comfort. The rubber outsole offers traction for city streets, while vibrant colorways and the signature Swoosh branding elevate your streetwear game. Perfect for casual rotation or collectors seeking a piece of sneaker history.",
    images: [
      "/images/newAirMax.png",
      "/images/airMax2.png",
      "/images/airMax3.png",
      "/images/airMax4.png"
    ],
    stock: 1
  },
  {
    title: "adidas Originals Samba OG",
    brand: "adidas",
    price: 100,
    category: "mens",
    id: 2,
    description: "VERY DOPE",
    images: ["/images/samba.webp", "/images/samba.webp", "/images/samba.webp", "/images/samba.webp"],
    stock: 1
  },
  {
    title: "Jordan Retro 3 OG",
    brand: "Jordan",
    price: 100,
    category: "kids",
    id: 3,
    description: "VERY DOPE",
    images: ["/images/jr3.webp", "/images/jr3.webp", "/images/jr3.webp", "/images/jr3.webp"],
    stock: 1
  },
  {
    title: "Air Max Plus",
    brand: "Nike",
    price: 180,
    category: "womens",
    id: 1,
    description:
      "The Nike Air Max Plus brings iconic late-’90s style with its bold design lines and visible Air cushioning. Built for comfort and attitude, this classic sneaker delivers lightweight support, durable materials, and the signature Tuned Air units for all-day performance. True to size with a snug midfoot fit, it features mesh panels for breathability and a padded collar for extra comfort. The rubber outsole offers traction for city streets, while vibrant colorways and the signature Swoosh branding elevate your streetwear game. Perfect for casual rotation or collectors seeking a piece of sneaker history.",
    images: [
      "/images/newAirMax.png",
      "/images/airMax2.png",
      "/images/airMax3.png",
      "/images/airMax4.png"
    ],
    stock: 1
  },
  {
    title: "adidas Originals Samba OG",
    brand: "adidas",
    price: 100,
    category: "mens",
    id: 2,
    description: "VERY DOPE",
    images: ["/images/samba.webp", "/images/samba.webp", "/images/samba.webp", "/images/samba.webp"],
    stock: 1
  },
  {
    title: "Jordan Retro 3 OG",
    brand: "Jordan",
    price: 100,
    category: "kids",
    id: 3,
    description: "VERY DOPE",
    images: ["/images/jr3.webp", "/images/jr3.webp", "/images/jr3.webp", "/images/jr3.webp"],
    stock: 1
  },
  {
    title: "Air Max Plus",
    brand: "Nike",
    price: 180,
    category: "womens",
    id: 1,
    description:
      "The Nike Air Max Plus brings iconic late-’90s style with its bold design lines and visible Air cushioning. Built for comfort and attitude, this classic sneaker delivers lightweight support, durable materials, and the signature Tuned Air units for all-day performance. True to size with a snug midfoot fit, it features mesh panels for breathability and a padded collar for extra comfort. The rubber outsole offers traction for city streets, while vibrant colorways and the signature Swoosh branding elevate your streetwear game. Perfect for casual rotation or collectors seeking a piece of sneaker history.",
    images: [
      "/images/newAirMax.png",
      "/images/airMax2.png",
      "/images/airMax3.png",
      "/images/airMax4.png"
    ],
    stock: 1
  },
  {
    title: "adidas Originals Samba OG",
    brand: "adidas",
    price: 100,
    category: "mens",
    id: 2,
    description: "VERY DOPE",
    images: ["/images/samba.webp", "/images/samba.webp", "/images/samba.webp", "/images/samba.webp"],
    stock: 1
  },
  {
    title: "Jordan Retro 3 OG",
    brand: "Jordan",
    price: 100,
    category: "kids",
    id: 3,
    description: "VERY DOPE",
    images: ["/images/jr3.webp", "/images/jr3.webp", "/images/jr3.webp", "/images/jr3.webp"],
    stock: 1
  },

];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });


    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("Products seeded!");
  } catch (err) {
    console.error(err);
  } finally {
    mongoose.disconnect();
  }
};



seedDB();

export default products

