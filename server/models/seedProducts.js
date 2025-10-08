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
    category: "mens",
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
    images: ["/images/dunk1.png", "/images/dunk2.png", "/images/dunk34.png", "/images/dunk2.png"],
    stock: 1
  },
  {
    title: "Gyakusou Zoom Pegasus 36",
    brand: "Nike X Undercover",
    price: 160,
    category: "mens",
    id: 7,
    description: "A collaboration between Nike and Undercover’s Gyakusou line, this Zoom Pegasus 36 fuses performance running technology with avant-garde style, offering a bold and functional look.",
    images: ["/images/nik1.png", "/images/nik2.png", "/images/nik3.png", "/images/nik4.png"],
    stock: 1
  },
  {
    title: "Club C 85",
    brand: "Reebok",
    price: 85,
    category: "womens",
    id: 8,
    description: "A timeless low-top sneaker with a soft blush suede upper, crisp white Reebok vector stripes, and a durable gum rubber sole. Lightweight cushioning and a supportive insole deliver all-day comfort, while the minimalist silhouette pairs effortlessly with jeans, joggers, or skirts.",
    images: ["/images/rebok1.png", "/images/rebok2.png", "/images/rebok3.png", "/images/rebok4.png"],
    stock: 1
  },
  {
    title: "Tasman II",
    brand: "Ugg",
    price: 125,
    category: "womens",
    id: 9,
    description: "The UGG Tasman II pairs a soft suede upper with a plush wool lining for instant warmth and comfort. The easy slip-on silhouette and cushioned footbed make it perfect for lounging at home or quick trips outside, while the lightweight molded sole adds grip and durability without feeling bulky.",
    images: ["/images/ugg1.png", "/images/ugg2.png", "/images/ugg3.png", "/images/ugg4.png"],
    stock: 1
  },
  {
    title: "Tasman II",
    brand: "Dr Martens",
    price: 140,
    category: "womens",
    id: 10,
    description: "The 8065 Mary Jane features a smooth leather upper and a secure adjustable strap, built on Dr. Martens’ classic, air-cushioned sole for legendary comfort and grip. With Goodyear-welted construction and a slightly chunky profile, it’s a versatile shoe that dresses up or down — wear it with skirts, dresses, or tailored trousers.",
    images: ["/images/dm1.png", "/images/dm2.png", "/images/dm3.png", "/images/dm4.png"],
    stock: 1
  },
  {
    title: "Bondi 8",
    brand: "Hoka",
    price: 115,
    category: "womens",
    id: 11,
    description: "The HOKA Bondi is the brand’s plushest road shoe, delivering cloud-like cushioning and a smooth, propulsive roll thanks to its thick EVA midsole and rocker geometry. Breathable engineered mesh and a padded heel collar keep your feet comfortable mile after mile, making it ideal for long runs, recovery days, or anyone who wants maximal comfort without sacrificing responsiveness.",
    images: ["/images/hb1.png", "/images/hb2.png", "/images/hb3.png", "/images/hb4.png"],
    stock: 1
  },
  {
    title: "Chuck Taylor All Star",
    brand: "Converse",
    price: 50,
    category: "kids",
    id: 12,
    description: "A timeless kid-friendly sneaker, the Chuck Taylor All Star in toddler size 4T pairs a lightweight canvas upper with the signature rubber toe cap and vulcanized outsole for durable, flexible wear. The simple lace-up design and cushioned insole make it easy for little feet to move and play, while the iconic silhouette pairs with everything from shorts to dresses.",
    images: ["/images/ct1.png", "/images/ct2.png", "/images/ct3.png", "/images/ct4.png"],
    stock: 1
  },
  {
    title: "Classic Clog",
    brand: "Crocs",
    price: 50,
    category: "kids",
    id: 13,
    description: "A go-to toddler shoe, the Crocs in 4T delivers pillowy comfort thanks to its Croslite™ foam construction, plus roomy fit and ventilation ports that help keep little feet cool. The back strap locks in a secure fit for running and splash-friendly fun, while the easy-clean material makes them perfect for daycare, the beach, or backyard play.",
    images: ["/images/croc1.png", "/images/croc2.png", "/images/croc3.png", "/images/croc4.png"],
    stock: 1
  },
  {
    title: "Huarache",
    brand: "Nike",
    price: 85,
    category: "kids",
    id: 14,
    description: "A mini version of the classic Huarache, this 4T sneaker features a soft neoprene bootie and flexible forefoot for easy on/off and all-day comfort. The iconic heel cage locks the foot in place while a lightweight foam midsole delivers cushioned support for playground adventures. Durable rubber pods underfoot provide traction without weighing little feet down.",
    images: ["/images/hur1.png", "/images/hur2.png", "/images/hur3.png", "/images/hur2.png"],
    stock: 1
  },
  {
    title: "Gold Proverbs Chain",
    brand: "LLDLH",
    price: 10000000000000000000,
    category: "jewelry",
    id: 14,
    description: "A legendary necklace worn by the late Donald Lucell Hanson and passed down to his son. This necklace holds power, wisdom, and greatness. All characteristics embodied by Don during his time with us on earth. He will never be forgotten.",
    images: ["/images/dh1.png", "/images/dh3.png", "/images/dh4.png", "/images/dh5.JPG"],
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

