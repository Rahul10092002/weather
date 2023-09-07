import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadInfo } from "./redux/weatherSlice";
import WeatherDetails from "./components/weatherDetails/WeatherDetails";
import { apiKey } from "./utils/apikey";

function App() {

  const [query, setquery] = useState("Indore");
  const dispatch = useDispatch();
  const data = useSelector((state) => state.weatherReducer.weather);
  const handleFormSubmit = (e) => {
    e.preventDefault(); 
    setquery(e.target.elements.cityInput.value);
  };
  useEffect(() => {
    async function fetchData() {
      const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${query}&aqi=yes`;
      const response = await fetch(url);
      const jsonData = await response.json();
      dispatch(loadInfo(jsonData));
      // console.log(jsonData)
    }
    fetchData();
  }, [query, dispatch]);
  console.log(data);
  if (data ==={}) {
    return <h1>Loading ....</h1>;
  } else {
    return (
      <>
        <div className="App">
          <nav className="navbar">
            <h1>Weather App</h1>
            <div className="search-container">
              <form onSubmit={handleFormSubmit}>
                <input
                  type="text"
                  placeholder="Enter a city"
                
                  name="cityInput"
                />
                <button>Search</button>
              </form>
            </div>
          </nav>
          <WeatherDetails data={data} />
        </div>
      </>
    );
  }
}

export default App;
