import classes from '../styles/components/GridSelector.module.scss'
import {faTimes} from "@fortawesome/pro-thin-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useImperativeHandle, forwardRef, useState} from "react";

const GridSelector = function ({options, callback, activeNames}, ref) {

    const [isOpen, setIsOpen] = useState(false)

    useImperativeHandle(ref, () => ({
        openModal() {
            setIsOpen(true);
            document.body.style.overflow = 'hidden';
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
                                className={activeNames.includes(option.name)? classes.gridButtonActive: classes.gridButton}
                                key={key}
                                onClick={() => {callback(option.name)}}
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
