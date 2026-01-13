import { useCallback, useEffect, useState } from "react";

const SearchComp = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState(""); // ✅ Set default value

  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  useEffect(() => {
    if (!value) return;

    const fetchData = async () => {
      const res = await fetch(
        `https://geodb-free-service.wirefreethought.com/v1/geo/cities?namePrefix=${value}`
      );
      const result = await res.json();
      setData(result.data);
    };

    fetchData();
  }, [value]);

  const handleChange = useCallback((inputValue) => {
    console.log('inputValue...',inputValue);
    setValue(inputValue || 'kadir');
  },[]);

  const debounceFunction = useCallback(debounce(handleChange, 1000),[handleChange]);

  return (
    <div>
      {data?.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}

      <input
        type="text"
        placeholder="search city"
        // defaultValue="kadir" // ✅ Set default value in input
        onChange={(e) =>{ 
            const searchValue = e.target.value || "kadir";
            debounceFunction(searchValue)
        }} // ✅ Pass event properly
      />
    </div>
  );
};

export default SearchComp;