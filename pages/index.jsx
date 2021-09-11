import Header from '../components/Header';
import Orders from '../components/Orders';


const menu = () => {
  
  return (
      <div>
          <Header />
          <div className="container">
              <Orders />
          </div>
      </div>
  )
}

export default menu;