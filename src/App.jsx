import logo from './logo.svg';
import './App.css';
import { RestaurantDetails } from './Component/RestaurantDetails'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Hello } from './Component/Hello';
function App() {


  const [hotel, setHotel] = useState([]);
  const [star, setStar] = useState(1);
  const [sort, setSort] = useState();
  const [card, setCard] = useState();
  const [page, setPage] = useState(1);



  const getData = () => {
    axios("http://localhost:8080/get-restaurants", {
      method: "GET",
      params: {
        star,
        sort,
        card,
        page

      }

    }).then((res) => {
      setHotel(res.data);
      // console.log("In the get method of the getData", res.data)

    })
  }
  // console.log("Outside", taskData);

  useEffect(() => {
    getData();

  }, [star, sort, card, page]);
  console.log(hotel);

  return (
    <div className="App">
      <button
        onClick={() => setStar(1)}>
        1 star</button>
      <button
        onClick={() => setStar(2)}>
        2 star
      </button>
      <button onClick={() => setStar(3)}
      >3 star
      </button>
      <button onClick={() => setStar(4)}>
        4 star
      </button>
      <div>
        <button
          onClick={() => setSort()}>Ascending</button>

        <button onClick={() => setSort()}>Descending</button>
      </div>
      <div>
        <button onClick={() => setCard('card')}>Card</button>
        <button onClick={() => setCard('Cash')}>Cash</button>
        <button onClick={() => setCard('upi')}>UPI</button>
      </div>


      {hotel.map((e) => (
        <RestaurantDetails obj={e} />

      ))}
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
}

export default App;
