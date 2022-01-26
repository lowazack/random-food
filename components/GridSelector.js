import classes from '../styles/components/GridSelector.module.scss'
import {faTimes} from "@fortawesome/pro-thin-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useImperativeHandle, forwardRef, useState, useEffect} from "react";

const GridSelector = function ({options, callback}, ref) {

    const [isOpen, setIsOpen] = useState(false)
    const [activeIds, setActiveIds] = useState([])

    useImperativeHandle(ref, () => ({
        openModal() {
            setIsOpen(true);
            document.body.style.overflow = 'hidden';
        },
        setActiveIds(ids){
            setActiveIds(ids)
        }
    }), [])

    const closeModal = function () {
        setIsOpen(false);
        document.body.style.overflow = 'auto';
    }

    return (
        <>
            {isOpen ?
                <div className={classes.gridSelector}>
                    <div className={classes.gridContainer}>
                        {options.map((option, key) => (
                            <button
                                className={activeIds.includes(option.id)? classes.gridButtonActive: classes.gridButton}
                                key={key}
                                onClick={() => {callback(option.id)}}
                            >
                                <FontAwesomeIcon icon={option.icon}/>
                                <span>
                            {option.name}
                        </span>
                            </button>
                        ))}
                    </div>
                    <button className={classes.close} onClick={closeModal}>
                        <FontAwesomeIcon icon={faTimes}/>
                    </button>
                </div>:null
            }
        </>
    )
}

export default forwardRef(GridSelector)
