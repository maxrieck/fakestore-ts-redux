import React, { useState, useEffect } from 'react';
import { db } from '../firebase/firebaseConfig';
import { collection, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import type { User } from '../types/types'


const DisplayUser:React.FC = () => {
    const [users, setUsers] = useState<User[]>([])
    const [newAge, setNewAge] = useState<string>('');
    const [newName, setNewName] = useState<string>('');

    const updateUser = async (userId: string | undefined, updatedData: { name?: string; age?: string; }) => {
        if (!userId) {
            console.error('User ID is undefined');
            return;
        }
        const userDoc = doc(db, 'user', userId);
        await updateDoc(userDoc, updatedData);
    }

    // deleteUser Function
    const deleteUser = async (userId: string | undefined) => {
        if (!userId) {
            console.error('User ID is undefined');
            return;
        }
        await deleteDoc(doc(db, 'user', userId));
    }

    useEffect(() => {
        const fetchData = async () => {
            const querySnapshot = await getDocs(collection(db, 'user'));
            const dataArray = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            })) as User[];
            setUsers(dataArray)
            console.log('Fetched users:', dataArray);
            
        }
        fetchData();
    }, [])


  return (

    <div>
      <h2>Users List</h2>
      {users.map((user) => (
        <div
          key={user.id}
          style={{ border: '2px solid black', margin: '10px' }}
        >
          <div key={user.id}>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
          </div>
          <input
            onChange={(e) => setNewName(e.target.value)}
            type="string"
            placeholder="Enter new name:"
          />
          <button onClick={() => updateUser(user.id, { name: newName })}>
            Update Name
          </button>
          <input
            onChange={(e) => setNewAge(e.target.value)}
            type="number"
            placeholder="Enter new age:"
          />
          <button onClick={() => updateUser(user.id, { age: newAge })}>
            Update Age
          </button>
          <button style={{ backgroundColor: 'crimson'}} onClick={() => deleteUser(user.id)}>Delete User</button>
        </div>
      ))}
    </div>
  )
}

export default DisplayUser;