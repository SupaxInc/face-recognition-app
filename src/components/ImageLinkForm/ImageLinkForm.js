import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onPictureSubmit}) => {
    return(
        <div>
            <p className='f3'>
                {'This Magic Brain will detect faces in your pictures. Give it a try.'}
                <ol type="1">
                    <li><strong>Step 1)</strong> Find a picture on google that contains a face.</li>
                    <li><strong>Step 2)</strong> Copy the image address of the picture.</li>
                    <li><strong>Step 3)</strong> Paste the image address into the text box below and press "Detect".</li>
                </ol>
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
                    <button className='w-30 ph3 pv2 dib white bg-light-purple grow link f4' onClick={onPictureSubmit}>Detect</button>
                </div>
            </div>

        </div>
    )
}

export default ImageLinkForm;