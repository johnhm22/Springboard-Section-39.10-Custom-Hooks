import React, { useState } from "react";
import axios from "axios";
import { v4 as uuid} from 'uuid';



const useAxios = (url) => {
    const [cards, setCards] = useState([]);
  
    //it is here I have to add on to the base url
    //where do I get the rest of the url from?
    const getData = async (name) => {    
        if(name){
            url = url + name
        }
        else
        {url = url}
        console.log("name is: ", name);
        console.log("url is: ", url)
        const response = await axios.get(url);
        setCards(cards => [...cards, { ...response.data, id: uuid() }]);
    }
return [cards, getData]
}

export default useAxios;