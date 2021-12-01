import React from 'react';
import './FacialRecognition.css'

const FacialRecognition = ({imageUrl, box}) => {
    return(
        <div className='center ma'>
            <div className='absolute mt2 shadow-5'>
                {/* Height is auto so that the photo does not look squished */}
                <img id='imgInput' alt='' src={imageUrl} width='500px' height='auto'/> 
                <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </div>
            
        </div>
    )
}

export default FacialRecognition;