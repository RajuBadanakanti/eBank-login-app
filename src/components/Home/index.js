import Header from '../Header'

import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="bg-home-container">
      <h1 className="home-heading">Your Flexibility, Our Excellence</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
        alt="digital card"
        className="digital-card"
      />
    </div>
  </>
)

export default Home
