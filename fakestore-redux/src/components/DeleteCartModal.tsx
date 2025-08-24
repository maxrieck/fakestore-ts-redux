
import { useEffect } from 'react';

interface DeleteCartModalProps {
  onClose: () => void;
}

const DeleteCartModal: React.FC<DeleteCartModalProps> = ({ onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div style={{
      border: 'none',
      padding: '0 2rem',
      textAlign: 'center',
      zIndex: '9999',
      boxShadow: '0 0.5px 2px black',
      position: 'fixed',
      top: '85px',
      left: '80%',
      transform: 'translateX(-50%)',
      backgroundColor: 'white',
    }}>
      
      <h4>Item removed from cart!</h4>
      
    </div>
  );
}

export default DeleteCartModal