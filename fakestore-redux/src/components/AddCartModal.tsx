import { useEffect, useState } from 'react';
import '../styles/cartModal.css'

interface AddCartModalProps {
  onClose: () => void;
}

const AddCartModal: React.FC<AddCartModalProps> = ({ onClose }) => {

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
    
      
      <h4>Item added to cart!</h4>
      
    </div>
  );
}

export default AddCartModal