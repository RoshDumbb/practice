import React, { useState } from "react";
import axios from "axios"



const Fetch = () => {
    const [text, setText] = useState("men's clothing");
    const [data, setData] = useState([])
    
    const handleText = (e) => {
        setText(e.target.value)
    }
    const handleSearch = () => {
        addData()
    }
    function addData() {
         axios
           .get("https://fakestoreapi.com/products")
           .then((res) => {
                // setData(res.data);
             addFilter(res.data);
           })
           .catch((err) => {
             console.log(err);
           });
        
    }

    function addFilter(res) {
        console.log(res);
        let more = res.filter((val) => val.text==text);
        // let sorted = more.sort((b,a) => a.value - b.value)
        // setData([...sorted])
        setData([...more])
        
    }
   
    return (
        <div>
            <input placeholder="enter" onChange={handleText} />
            <button onClick={handleSearch}>search</button>
            {data.map(item => {
                return (
                  <>
                    <RenderedData
                       category={item["category"]}
                       description={item.value}
                       price={item.price}
                        image={item.image}    
                    />
                  </>
                );
        })}
        </div>
    )
}
function RenderedData({ category, description, price,image }) {
    return (
        <>
            <h3>{category}</h3>
            <p>{description}</p>
            <h4>{price}</h4>
            <img src={image}/>
          
        </>
    );
}
export default Fetch;