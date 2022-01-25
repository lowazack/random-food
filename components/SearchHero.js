import classes from '../styles/components/SearchHero.module.scss'
import {useEffect, useRef, useState} from "react";

export default function SiteHero() {

    const [imageCount, setImageCount] = useState(1);
    const [activeImage, setActiveImage] = useState(null);
    const imageRef = useRef();
    const bgContainerRef = useRef();
    let imageSelectInterval = null;

    useEffect(() => {
            setImageCountState()
            setInterval(selectRandomImage, 3000)
        }, []
    );


    const setImageCountState = function () {
        setImageCount(calculateImageCount())
    }

    const calculateImageCount = function () {
        let targetHeight = bgContainerRef.current.clientHeight;
        let slidesPerRow = Math.ceil(bgContainerRef.current.clientWidth / imageRef.current.clientWidth);
        let imageHeight = imageRef.current.clientHeight
        let rows = 0;
        while ((rows * imageHeight) < targetHeight) {
            rows += 1
        }

        return rows * slidesPerRow;


    }

    const selectRandomImage = function () {
        let min = 0;
        let max = calculateImageCount();

        setActiveImage(Math.floor(Math.random() * (max - min + 1)) + min)
    }

    return (
        <div className={classes.searchHero}>
            <div className={classes.searchHeroBgContainer} ref={bgContainerRef}>
                {[...Array(imageCount)].map((ele, int) => (
                    (<div
                        key={int}
                        className={`${int === activeImage ? classes.searchHeroImageActive :classes.searchHeroImage}`}
                        ref={imageRef}
                    />)
                ))}
            </div>
        </div>
    )
}
