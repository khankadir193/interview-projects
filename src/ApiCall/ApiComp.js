const ApiComp = async (URL) => {
    const result = await fetch(URL);
    const data = await result.json();
    return data;
}

export default ApiComp;


// dictionary Api free
// https://dictionaryapi.dev/