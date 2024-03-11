import { CDN_URL } from "../utils/constants"

const RestaurantCard = (props)=>{
    // const {resName, cuisine} = props    // we are desctructuring it here

    const {resData} = props
    //  or const data = props.resData
    console.log(resData.info)

    // const {name, cuisines, avgRating, cloudinaryImageId} = resData
    // console.log(resData.resData)
    return(
        <div className="res-card" key={resData.name} style={{backgroundColor: "#f0f0f0" }}>
        <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL+resData.cloudinaryImageId}/>
            <h3>{resData.name}</h3>
            <h4>{resData.cuisines.join(", ")}</h4>
            <h4>{resData.avgRating}</h4>
            <h4>{resData.sla.deliveryTime}</h4>
        </div>
    )
}

export default RestaurantCard