import React, { useEffect, useState } from "react";

const SearchInterview = () => {
    const [data, setData] = useState([]);
    const [defaultValue, setDefaultValue] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const res = await fetch('https://dummyjson.com/products');
            const result = await res.json();
            // console.log('result...?', result);
            setData(result.products);
            setDefaultValue(result.products);
        };
        fetchData();
    }, [])

    const handleChange = (e) => {
        let value = e.target.value;
        // setValue(value);
        if (value) {
            handleSearch(value);
        } else {
            setData(defaultValue)
        }
    }

    const handleSearch = (value) => {
        console.log('value..filter',value);
        const filterData = data.filter((item) =>
            item.title.toLowerCase().includes(value.toLowerCase()) 
        );
        console.log('filterData...?---',filterData);
        setData(filterData);
    };

    return (
        <div>
            {data.length > 0 && (data?.map((item) => {
                return <p>{item.title}</p>
            })) 
            }
            {/* : (<p>Data Not Found..?</p>) */}
            <input type="text" placeholder="enter the text" onChange={handleChange} />
        </div>
    )
};

export default SearchInterview;