import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import { useRef, useState } from 'react';

const ImageCropper = (props) => {
    const { src, cropperRef } = props

    return (
        <div>
            {src && (
                <div>
                    <Cropper
                        src={src}
                        style={{ height:500, width: '100%' }}
                        guides={true}
                        ref={cropperRef}
                    />
                </div>
            )}
        </div>
    );
};

export default ImageCropper