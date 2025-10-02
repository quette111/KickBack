import { useEffect } from "react";
import './cartPopup.css'

export default function CartPopup({ message, onClose, shoe, gender, price, size }) {


  useEffect(() => {
    const timer = setTimeout(() => {


      
      localStorage.setItem("cart:", JSON.stringify({ shoe, gender, price, size }));


      onClose(); 
    }, 2000);



    return () => clearTimeout(timer);
  }, [message, onClose, shoe, gender, PeriodicWave]);

  return (
    <div className="cart-popup">
      ✅ {message}
    </div>
  );
}
