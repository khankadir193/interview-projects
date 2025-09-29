import React from "react";
import './cardDesign.css';

const CardComp = ({ login, avatar_url, profileUrl }) => {
    console.log('login', login);
    return (
        <div className="card">
            <img src={avatar_url} alt="avatarImg" className="card-image" />
            <h3 className="card-title">{login}</h3>
            <a href={profileUrl} className="card-link" target="_blank" rel="noopener noreferrer">
                View Profile
            </a>
        </div>
    )
};

export default CardComp;