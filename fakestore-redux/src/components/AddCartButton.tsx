import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../store/store'
import { addCartItem, } from '../store/cartSlice';
import type { Product } from '../types/types'
import AddCartModal from './AddCartModal';


interface AddCartButtonProps {
    product: Product;
}


const AddCartButton:React.FC<AddCartButtonProps>= ({ product }) => {

    const dispatch = useDispatch<AppDispatch>();

    const [showModal, setShowModal] = useState<boolean>(false)
    
    const handleModal = () => {
            setShowModal(true)
    }


  return (

    <>
    {showModal && <AddCartModal onClose={()=>setShowModal(false)}/>}
    <button 
        onClick={() => {
            dispatch(addCartItem(product));
            handleModal();
        }}
        className='button-theme'
    
    >Add to Cart</button>
    
    </>

  )
}

export default AddCartButton