import React, {useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Shop() {

  useEffect(() => {
    fetchItems()

  },[]);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=e6744cfd24904c71b60b673f94f673e2');

    const items = await data.json();
    console.log(items.articles);
    setItems(items.articles);
  }

  return (
    <div>
      {items.map(item => (
        <h1 key={item.url}>
        <Link to={`/shop/${item.url}`}>{item.author}</Link>
        </h1>
        ))}
    </div>
  );
}

export default Shop;
