import PageLayout from '../components/PageLayout';
import '../styles/homePage.css'
import '/public/images/wd-banner.jpg'
import HomeBanner from '../components/HomeBanner';
// import { useEffect, useState } from "react";
// import { onAuthStateChanged, type User } from "firebase/auth";
// import { auth } from "../firebase/firebaseConfig";
// import Register from "./UserRegistration";
// import Login from "../components/Login";



const HomePage: React.FC = () => {

  // const [user, setUser] = useState<User | null>(null);

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     setUser(currentUser);
  //   });
  //   return () => unsubscribe();
  // }, []);

  return (
    <PageLayout>
      <div className='homepage'>
        {/*       
         {user ? (
        <div>
          <h2>Welcome, {user.email}</h2>
          <Login /> 
        </div>
      ) : (
        <>
          <Register />
          <Login />
        </>
      )} */}


        <HomeBanner />

        <hr />

        <div className="wd-banner">
          <img src="/images/wd-banner.jpg" alt="" />
        </div>

      </div>
    </PageLayout>
  )
}

export default HomePage;