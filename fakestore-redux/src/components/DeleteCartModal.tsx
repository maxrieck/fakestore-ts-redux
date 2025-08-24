import { useEffect, useState } from 'react';
import '../styles/cartModal.css'

interface DeleteCartModalProps {
  onClose: () => void;
}

const DeleteCartModal: React.FC<DeleteCartModalProps> = ({ onClose }) => {
  const [isFading, setIsFading] = useState<boolean>(false);

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
    <div className={`cart-modal${isFading ? ' fade' : ' show'}`}>      
      <h4>Item removed from cart!</h4>      
    </div>
  );
}

export default DeleteCartModal