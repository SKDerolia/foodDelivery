import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
// import { resList } from "./utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () =>{
    // const apiData = resList[0].card.card.gridElements.infoWithStyle.restaurants

    const [listOfRestaurants, setListOfRestaurants] = useState([])
//   console.log(apiData.map(data=>{data}))
    const [searchText, setSearchText] = useState("")
    const [filteredRestraunt, setFilteredRestraunt] = useState([])

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
    setFilteredRestraunt(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
}

return listOfRestaurants.length === 0 ? <Shimmer/> :(
    <div className="body">
    <div className="filter">

    <div className="search">
        <input type="text" className="search-box" value={searchText}
            onChange={(e) =>{
            setSearchText(e.target.value)
        }}/>

        <button onClick={()=>{
           const filteredRes = listOfRestaurants.filter((res) => (
           res.info.name.toLowerCase().includes(searchText.toLowerCase())
           ))
           setFilteredRestraunt(filteredRes)
        }}>Search</button>

    </div>
        <button className="filter-btn" onClick={()=>{
            const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
            );
            setFilteredRestraunt(filteredList)
        }}>Top Rated Restaurant</button>

    </div>
    <div className="res-container">
        {/* <RestaurantCard resData = {apiData[0].info} /> */}
        {
            filteredRestraunt.map((restraunt) =>{
               return <Link to = {"/restaurants/"+restraunt.info.id} key={restraunt.info.id}><RestaurantCard key={restraunt.info.id} resData={restraunt.info} /></Link>
              })
        }
    </div>

    </div>
    )
}

export default Body