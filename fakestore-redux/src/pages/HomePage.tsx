import PageLayout from '../components/PageLayout';
import '/public/images/cotton-jacket.jpg'
import '/public/images/snow-jacket.jpg'
import '/public/images/black-jacket.jpg'
import '../styles/homePage.css'
import '/public/images/wd-banner.jpg'


const HomePage = () => {

  return (
    <PageLayout>
      <div className='homepage'>

        

        <div className='jacket-banner'>
          <img src="/public/images/cotton-jacket.jpg" alt="" />
          <img src="/public/images/black-jacket.jpg" alt="" />
          <img src="/public/images/snow-jacket.jpg" alt="" />
        </div>
        
        <hr />

        <div className="wd-banner">
          <img src="/public/images/wd-banner.jpg" alt="" />
        </div>
        
      </div>
    </PageLayout>
  )
}

export default HomePage;