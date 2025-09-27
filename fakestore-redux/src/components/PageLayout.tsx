import React from 'react'
import NavBar from './NavBar'
import '../styles/pageLayout.css'


type PageLayoutProps = {
    children?:React.ReactNode;
}

const PageLayout:React.FC<PageLayoutProps> 
= ({ children }) => {


  return (
    <div className='page-layout'>

        
            <NavBar />
        

        <main>
            {children}
        </main>

        <footer>

        </footer>

    </div>
  )
}

export default PageLayout