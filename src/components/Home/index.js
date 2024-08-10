import NavigationBar from '../NavigationBar'
import Dashboardimg from '../Dashboardimg'
import './index.css'
const BeautifulPic = [
  {
    id: 1,
    caption: 'Hello World!',
    url: 'https://tse2.mm.bing.net/th?id=OIP.hewm7ZhNQ06wxgQupm1lUgHaDq&pid=Api&P=0&h=220',
    user_id: 1,
  },
  {
    id: 2,
    caption: 'This is a test post',
    url: 'https://tse3.mm.bing.net/th?id=OIP.Ark7sHUur4VPPmOgAcVSewHaGX&pid=Api&P=0&h=220',
    user_id: 2,
  },
  {
    id: 3,
    caption: 'Check out this awesome video!',
    url: 'https://i.pinimg.com/originals/d9/14/f1/d914f191d4d9869f6c9814ea783d47d0.jpg',
    user_id: 3,
  },
  {
    id: 4,
    caption: 'Beautiful sunset!',
    url: 'https://tse1.mm.bing.net/th?id=OIP.ru21J98gzD0MLK64Y4pFiQHaEo&pid=Api&P=0&h=220',
    user_id: 1,
  },
]

const Home = () => (
  <>
    <NavigationBar />
    <div>
      <div className="container">
        <ul className="tabs-container">
          {BeautifulPic.map(tabDetails => (
            <Dashboardimg key={tabDetails.tabId} tabDetails={tabDetails} />
          ))}
        </ul>
      </div>
    </div>

    <div className="follow-us-section pt-5 pb-5">
      <div>
        <div>
          <div>
            <h1 className="follow-us-section-heading">Follow Us</h1>
          </div>
          <img
            src="https://cdn3.iconfinder.com/data/icons/circle-social-media-pack/512/Twitter-256.png"
            className="followicon"
          />
          <img
            src="https://logos-world.net/wp-content/uploads/2020/06/Instagram-Logo.png"
            className="followicon"
          />
          <img
            src="https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-1-2.png"
            className="followicon"
          />
        </div>
      </div>
    </div>
    <div className="footer-section pt-5 pb-5">
      <div>
        <div className="row">
          <div className="col-12 text-center">
            <h1>newthings</h1>
            <h1 className="footer-section-mail-id">newthing@.com</h1>
            <p className="footer-section-address"></p>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Home
