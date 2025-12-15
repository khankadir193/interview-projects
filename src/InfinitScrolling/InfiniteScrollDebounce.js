import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { debounce } from './debounce';

const InfiniteScrollDebounce = () => {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const fetchedData = async () => {
        if (loading) return;
        setLoading(true);

        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`);
        const data = await res.json();

        console.log('data...', data);

        setItems((prev) => [...prev, ...data])
        setPage((prev) => prev + 1);
        setLoading(false);
    };

    const handleScroll = useMemo(() => debounce(() => {
        const bottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
        console.log('------');
        if (bottom) {
            fetchedData();
        }
    }, 300), [page, loading]);

    useEffect(() => {
        fetchedData();
    }, [0])

    useEffect(() => {
        console.log('hi....');
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return (
        <div>
            {items.map((item) =><p key={item.id}>{item.title}</p>)}
            {loading && <p>Loading....</p>}
        </div>
    )
}

export default InfiniteScrollDebounce;