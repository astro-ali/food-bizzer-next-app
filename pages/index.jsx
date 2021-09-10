import Header from '../components/Header';
import Orders from '../components/Orders';
import { useState, useEffect } from 'react';


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