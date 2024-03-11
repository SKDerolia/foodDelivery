import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
// import { resList } from "./utils/mockData";
import Shimmer from "./Shimmer";

const Body = () =>{
    // const apiData = resList[0].card.card.gridElements.infoWithStyle.restaurants

    const [listOfRestaurants, setListOfRestaurants] = useState([])
//   console.log(apiData.map(data=>{data}))

useEffect(()=>{ //  (call back function 1st arg) 2 arguments and once the component is
                //rendered (this body component) is done this call back function
    fetchData();

}, []) // dependency array 2nd arg

const fetchData = async () => {
    const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.705153156232374&lng=76.93278964608909&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

    const json = await data.json();
    // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    // .? is optional chaining
}

return listOfRestaurants.length === 0 ? <Shimmer/> :(
    <div className="body">
    <div className="filter">
        <button className="filter-btn" onClick={()=>{
            const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filteredList)
        }}>Top Rated Restaurant</button>
    </div>
    <div className="res-container">
        {/* <RestaurantCard resData = {apiData[0].info} /> */}
        {
            listOfRestaurants.map((restraunt) =>{
               return <RestaurantCard key={restraunt.info.id} resData={restraunt.info} />
              })
        }
    </div>

    </div>
    )
}

export default Body