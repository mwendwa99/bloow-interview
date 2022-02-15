import React from "react";
// assets
import FavouriteFilled from "../../assets/svg/FavouriteFilled";
import FavouriteOutlined from '../../assets/svg/FavouriteOutlined';

export default function FavouriteButton({ isFavourite, handleClick, width, height }) {
    return (
        <div className="flex justify-center items-center" onClick={handleClick} >
            {
                isFavourite ?
                    <FavouriteFilled width={width}
                        height={height} />
                    :
                    <FavouriteOutlined width={width}
                        height={height} />
            }
        </div>
    );
}
