import classes from '../styles/components/SearchHero.module.scss'
import {useEffect, useRef, useState} from "react";
import {faBriefcaseMedical, faPlateUtensils, faPanFood} from "@fortawesome/pro-thin-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import GridSelector from "./GridSelector";
import intolerances from "../json/intolerances";


export default function SiteHero() {

    const [imageCount, setImageCount] = useState(1);
    const [activeImage, setActiveImage] = useState(null);
    const imageRef = useRef();
    const bgContainerRef = useRef();
    const intolerancesRef = useRef();
    const [activeIntolerances, setActiveIntolerances] = useState([])



    useEffect(() => {
            setImageCountState()
            selectRandomImage()
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

    const getRandomMealImage = function (int) {
        const images = ['foodboard.png', 'pasta.png', 'steak.png', 'eggs.png', 'veg.png', 'toast.png', 'asdfihvasd.png', 'vnabisudfb.png', 'vansldifvasdf.png', 'asdvaoisf.png', 'aiywegufsadf.png']
        return images[int % images.length]
    }

    const openIntolerancesSelector = function (){
        intolerancesRef.current.openModal()
    }

    const intoleranceCallback = function (name) {
        console.log(name)
        let tempActiveIntolerances = activeIntolerances;
        if (activeIntolerances.includes(name)){
            tempActiveIntolerances.splice(
                activeIntolerances.indexOf(name),
                1
            )
        }
        else {
            tempActiveIntolerances.push(name)
        }
        setActiveIntolerances(tempActiveIntolerances)
    }

    return (
        <>
            <GridSelector
                options={intolerances}
                ref={intolerancesRef}
                callback={intoleranceCallback}
                activeNames={activeIntolerances}
            />
            <div className={classes.searchHero}>
                <div className={classes.searchHeroBgContainer} ref={bgContainerRef}>
                    {[...Array(imageCount)].map((ele, int) => (
                        (<div
                            key={int}
                            className={`${int === activeImage ? classes.searchHeroImageActive : classes.searchHeroImage}`}
                            ref={imageRef}
                            style={{backgroundImage: `url('/img/meals/${getRandomMealImage(int)}')`}}
                        />)
                    ))}
                </div>
                <div className={classes.content}>
                    <h1 className={classes.title}>Find Food Here</h1>
                    <h3 className={classes.subtitle}>
                        Personalise Your search
                    </h3>
                    <div className={classes.selector}>
                        <button className={classes.selectorButton} onClick={()=> {openIntolerancesSelector()}}>
                            <FontAwesomeIcon icon={faBriefcaseMedical}/>
                            <span>Allergy <br/>Information</span>
                        </button>

                        <button className={classes.selectorButton}>
                            <FontAwesomeIcon icon={faPlateUtensils}/>
                            <span>Diet <br/>Information</span>
                        </button>

                        <button className={classes.selectorButton}>
                            <FontAwesomeIcon icon={faPanFood}/>
                            <span>Favourite<br/>Dishes</span>
                        </button>
                    </div>
                </div>
            </div>
        </>

    )
}
