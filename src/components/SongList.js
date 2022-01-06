import React from "react";

const SongList = ({ songs }) => {

    const listItems = songs.map((song, index) => {
        return(
            <li key={index}>
                <h3>Title: {song['im:name'].label}</h3>
                <h4>Artist: {song['im:artist'].label}</h4>
            </li>
        );
    });

    return(
        <ol>
            {listItems}
        </ol>
    );

};

export default SongList;