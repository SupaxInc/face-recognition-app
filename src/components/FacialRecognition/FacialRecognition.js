import React from 'react';
import FaceBox from '../FaceBox/FaceBox';
import './FacialRecognition.css'

const FacialRecognition = ({imageUrl, box}) => {
    return(
        <div className='center ma'>
            <div className='absolute mt2 shadow-5'>
                {/* Height is auto so that the photo does not look squished */}
                <img id='imgInput' alt='' src={imageUrl} width='500px' height='auto'/>
                {
                    box.map(({id, ...otherProps}) => {
                        return <FaceBox key={id} {...otherProps} />
                    })
                } 
                
            </div>
            
        </div>
    )
}

export default FacialRecognition;