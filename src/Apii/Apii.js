import React    from "react";
import { useState,useEffect } from "react";

/*class Apii extends React.Component {
  render() {
    return template.call(this);
  }
}*/


const Api = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=8f7a3ba93df34ab3970160913240401&q=Bizerte&aqi=no`);
        const result = await response.json();
        console.log(result);
        
        setData(result);
      } catch (error) {
        console.error('Error fetching data from the API', error);
      }
    };

    fetchData();
  }, []);

  return (
     <div>
    <div>Weather Information</div>
    <ul>
      {data.location && data.current && (
        
        <React.Fragment>
          <li>Location: {data.location.name}</li>
          <li>Country: {data.location.country}</li>
          <li>Local Time: {data.location.localtime}</li>
          <li>Condition: {data.current.condition.text}</li>
        </React.Fragment>
        
      )}
    </ul>
  </div>)
};

export default Api;
