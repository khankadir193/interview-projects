import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPost } from './Reducer/fetchData';

const PostsExample = () => {
    const dispatch = useDispatch();
    const { loading, error, data } = useSelector((state) => state.posts);

    useEffect(() => {
        dispatch(fetchPost());
    },[]);


    console.log('data has been fetched...', data);

    return (
        <div>
            {loading && <p>Loading....</p>}
            {error && <p>{error}</p>}
            {!loading && !error &&
                data?.map((item) => {
                    return <p key={item.id}>{item.body}</p>
                })
            }
        </div>
    )
}

export default PostsExample;