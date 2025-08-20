import React from 'react'
import NavBar from './NavBar'
import '../styles/pageLayout.css'


type PageLayoutProps = {
    children?:React.ReactNode;
}

const PageLayout:React.FC<PageLayoutProps> 
= ({ children }) => {


  return (
    <body className='page-layout'>

        <header className=''>
            <NavBar />
        </header>

        <main>
            {children}
        </main>

        <footer>

        </footer>

    </body>
  )
}

export default PageLayout