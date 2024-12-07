import './index.css'

const NotFound = () => {
  console.log('notfound')
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-not-found-img.png"
          alt="not found"
          className="not-found-img"
        />
        <h1 className="not-found-heading">Page Not Found</h1>
        <p className="not-found-description">
          We are sorry, the page you requested could not be found
        </p>
      </div>
    </div>
  )
}

export default NotFound
