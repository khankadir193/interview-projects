import React from "react";

const CardComp = ({login,avatar_url,profileUrl})=> {
    console.log('login',login);
    return (
        <div className="card">
            <h3>{login}</h3>
            <h3>{avatar_url}</h3>
            <h3>{profileUrl}</h3>
        </div>
    )
};

export default CardComp;