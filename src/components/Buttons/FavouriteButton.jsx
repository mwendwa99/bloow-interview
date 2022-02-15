import React from "react";
// assets
import FavouriteFilled from "../../assets/svg/FavouriteFilled";
import FavouriteOutlined from '../../assets/svg/FavouriteOutlined';

export default function FavouriteButton({ isFavourite, handleClick }) {
    return (
        <div className="flex justify-center items-center" onClick={handleClick} >
            {
                isFavourite ?
                    <FavouriteFilled />
                    :
                    <FavouriteOutlined />
            }
        </div>
    );
}