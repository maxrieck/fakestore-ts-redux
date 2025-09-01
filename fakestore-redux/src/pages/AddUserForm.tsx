import React, { useState } from 'react';
import { db } from '../firebase/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import type { User } from '../types/types' 
import DisplayUser from '../components/DisplayUser';
import PageLayout from '../components/PageLayout';


const AddUserForm:React.FC = () => {

    const [data, setData] = useState<Omit<User, 'id'>>({ name: '', age: 0})

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setData({...data, [name]: name === 'age' ? parseInt(value) : value});
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, 'user'), data);
            alert('User added!');
            setData({ name: '', age: 0 });
        } catch (error) {
            console.log('Error adding document: ', error);
        }
    };

  return (
    <PageLayout>
    <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={data.name} name="name" placeholder='Name' />
        <input onChange={handleChange} value={data.age} name="age" placeholder='Age' />
        <button type='submit' >Add User</button>
    </form>
    <DisplayUser />
    </PageLayout>
  )
}

export default AddUserForm;