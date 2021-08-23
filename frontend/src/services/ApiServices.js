import { API_URL } from "./Endpoints";

export default function ApiGet(endpoint){
    const data =  fetch(API_URL + endpoint)
    .then(response => response.json())
    .then(responseData => {
        return responseData
    })
    .catch(error =>{
        console.error(error)
        alert("Error: " + error)
    });
    return data;
}

export  function ApiPost(endpoint, data){
    fetch(API_URL + endpoint , data)
    .then(response => response.json())
    .then(responseData => {return responseData})
    .catch(error =>{
        console.error(error)
        alert("Error: " + error)
    });
}