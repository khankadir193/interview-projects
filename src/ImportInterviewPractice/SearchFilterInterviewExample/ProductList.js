import react, { useEffect, useMemo, useState } from 'react';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [errors, setErrors] = useState('');
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('all');
    const [sort, setSort] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('https://fakestoreapi.com/products');
                const result = await res.json();
                console.log('result..', result);
                setProducts(result);
            } catch (err) {
                setErrors(err);
                console.log('getting error...', err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const filteredProducts = useMemo(() => {
        let result = [...products];

        //search
        if (search) {
            result = result.filter(p =>
                p.title.toLowerCase().includes(search.toLowerCase())
            )
        };

        if (category !== 'all') {
            result = result.filter(p => p.category === category)
        };


        console.log('sort...', sort);

        if (sort === 'asc') {
            result.sort((a,b)=> a.price-b.price);
        }else if(sort === 'des'){
            result.sort((a,b)=> b.price-a.price);
        }

        return result;
        // filter
    }, [search, products, category, sort])


    // const searchProducts = useMemo(() => {
    //     // console.log('products..kadir', products);
    //     console.log('serach...',search);
    //     return products?.filter(item =>
    //         item.title?.toLowerCase()?.includes(search?.toLowerCase()
    //         ));
    // }, [search]);

    const categories = useMemo(() => {
        return ['all', ...new Set(products.map(p => p.category))];
        // return ["all", ...new Set(products.map(p => p.category))];
    }, [products])

    if (errors) return <p>{errors}</p>
    if (loading) return <p>Loading...</p>


    return (
        <div>
            <input type='text' placeholder='search your text' onChange={e => setSearch(e.target.value)} />

            <select value={category} onChange={e => setCategory(e.target.value)}>
                {categories.map(cat => (
                    <option value={cat} key={cat}>{cat}</option>
                ))}
            </select>

            <select value={sort} onChange={e => setSort(e.target.value)}>
                <option value=''>Sort By</option>
                <option value='asc'>Ascending</option>
                <option value='des'>Descending</option>
            </select>

            {
                filteredProducts.length === 0 ? (
                    <p>No Products Found</p>
                ) : (
                    <ul>
                        {
                            filteredProducts.map(product => (<li key={product.id}>
                                <strong>{product.title}</strong> - ₹ {product.price}
                            </li>)
                            )
                        }
                    </ul>
                )
            }
        </div>
    )

};

export default ProductList;