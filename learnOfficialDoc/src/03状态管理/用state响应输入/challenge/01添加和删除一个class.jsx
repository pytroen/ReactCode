import { useState } from "react"
import image from './16.jpg'

export default function Picture() {
    const [isActive, setIsActicve] = useState(false);
    let divName = 'background';
    let pictureName = 'picture'
    if (isActive) {
        pictureName += ' picture-active'

    } else {
        divName += ' background-active';
    }

    function handlePictureClick(e){
        e.stopPropagation();
        setIsActicve(true);
    }
    return (
        <div className={divName} style={{backgroundColor:'orange'}} onClick={() => setIsActicve(false)}>
            <img src={image} alt="图片呢" className={pictureName} onClick={handlePictureClick} />
        </div>
    )
}