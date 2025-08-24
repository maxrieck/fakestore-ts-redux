
import { useEffect } from 'react';

interface AddCartModalProps {
  onClose: () => void;
}

const AddCartModal: React.FC<AddCartModalProps> = ({ onClose }) => {
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
      
      <h4>Item added to cart!</h4>
      
    </div>
  );
}

export default AddCartModal