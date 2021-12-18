import React from 'react';
import "./FaceBox.css"

const FaceBox = ({ topRow, rightCol, bottomRow, leftCol }) => {
    return (
        <div 
            className='bounding-box' 
            style={{top: topRow, right: rightCol, bottom: bottomRow, left: leftCol}}>
        </div>
    )
}

export default FaceBox;
