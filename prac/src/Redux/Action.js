import axios from "axios";
import { ADD_API } from "./ActionType";


export const add_api = (payload) => {
    return {
        type:ADD_API,
        payload,
    }
}
export const Fetch_api = () => (dispatch) => {
    //   console.log("rosh");
    axios.get("https://fakestoreapi.com/products").then((data) => {
        dispatch(add_api(data.data))
        // console.log(data)
    }).catch((err) => {
        console.log(err)
    })
}