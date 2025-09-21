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
    title: "Air Force One (University of Missouri Edition)",
    brand: "Nike",
    price: 150,
    category: "mens",
    id: 2,
    description: "A classic Nike Air Force One reimagined by a talented artist with a bold University of Missouri theme. Featuring custom-painted details, this one-of-a-kind pair blends timeless style with school spirit.",
    images: ["/images/miz1.png", "/images/miz2.png", "/images/miz3.png", "/images/miz4.png"],
    stock: 1
  },

  {
    title: "2002R",
    brand: "New Balance",
    price: 144.99,
    category: "mens",
    id: 3,
    description: "A modern take on running-inspired style, the New Balance 2002R offers premium comfort and cushioning with a sleek, versatile silhouette perfect for everyday wear.",
    images: ["/images/nb1.png", "/images/nb2.png", "/images/nb3.png", "/images/nb4.png" ],
    stock: 1
  },
  {
    title: "Cloudeclipse",
    brand: "ON",
    price: 125,
    category: "mens",
    id: 4,
    description: "Engineered for long-distance comfort, the On Cloudeclipse delivers plush cushioning and responsive energy return with every step, ideal for runners who crave smooth support.",
    images: ["/images/ON1.png", "/images/ON2.png", "/images/ON3.png", "/images/ON4.png"],
    stock: 1
  },
  {
    title: "Cloudgo",
    brand: "ON",
    price: 105,
    category: "mens",
    id: 5,
    description: "Lightweight and versatile, the On Cloudgo brings next-level comfort for your daily runs or all-day wear, featuring CloudTec® cushioning for a soft yet springy ride.",
    images: ["/images/Onn1.png", "/images/Onn2.png", "/images/Onn3.png", "/images/Onn4.png"],
    stock: 1
  },
  {
    title: "Dunk Low Retro",
    brand: "Nike",
    price: 96.97,
    category: "mens",
    id: 6,
    description: "A timeless streetwear staple, the Nike Dunk Low Retro combines heritage basketball style with modern comfort, making it a go-to for everyday wear.",
    images: ["/images/dunk1.png", "/images/dunk2.png", "/images/dunk34.png", "/dunk2.png"],
    stock: 1
  },
  {
    title: "Gyakusou Zoom Pegasus 36",
    brand: "Nike X Undercover",
    price: 160,
    category: "mens",
    id: 7,
    description: "A collaboration between Nike and Undercover’s Gyakusou line, this Zoom Pegasus 36 fuses performance running technology with avant-garde style, offering a bold and functional look.",
    images: ["/images/nik1.png", "/images/nik2.png", "/images/nik3.png", "/nik4.png"],
    stock: 1
  }
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

