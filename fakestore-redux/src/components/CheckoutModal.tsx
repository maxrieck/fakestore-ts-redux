import { useEffect, useState } from 'react';
import '../styles/cartModal.css'

interface CheckoutModalProps {
  onClose: () => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ onClose }) => {

    const [isFading, setIsFading] = useState<boolean>(false)
    
    useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 1500);
    const closeTimer = setTimeout(() => {
      onClose();
    }, 2000);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(closeTimer);
    };
  }, [onClose]);

  return (
    <div className={`cart-modal ${isFading ? 'fade' : 'show'}`}>
    
      
      <h4>Checkout Successfull!</h4>
      
    </div>
  );
}

export default CheckoutModal