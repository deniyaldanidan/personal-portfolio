import vars from '../styles/_vars.module.scss';
import {CSSProperties, useEffect, useState} from 'react';
import {BsRocketFill} from 'react-icons/bs';

const borderTopStyle:CSSProperties = {
    width: "97.5%",
    height: "1.5px",
    backgroundColor: vars.textcolor,
    margin: "80px auto 0",
    opacity: "0.25"
}

const copyrightStyles:CSSProperties = {
    color: vars.textcolor,
    textAlign: 'center',
    padding: "25px 0 20px",
    fontSize: "0.95rem",
    fontWeight: 500,
    width: "fit-content",
    minWidth: "225px",
    margin: "0 auto"
}

const rocketStyles:CSSProperties = {
    position: "fixed",
    fontSize: "1.25rem",
    bottom: "40px",
    right: "40px",
    width: "2.5rem",
    height: "2.5rem",
    backgroundColor: vars.accentcolor,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    cursor: "pointer",
    zIndex: 20
}

export default function Footer() {
    const [showRocket, setShowRocket] = useState<boolean>(false);

    useEffect(()=>{
        const myListener = function(this:Window){
            if (this?.scrollY > this?.innerHeight + 20){
                setShowRocket(true)
            } else {
                setShowRocket(false)
            }
        }

        window.addEventListener("scroll", myListener);
        return ()=>{
            window.removeEventListener("scroll", myListener);
        }
    }, [])


    return (
        <>
            <button style={{...rocketStyles, display: showRocket ? "block" : "none"}} onClick={()=>{
                typeof window !== "undefined" && window?.scrollTo({top: 0})
            }}><BsRocketFill/></button>
            <div style={borderTopStyle}></div>
            <div style={copyrightStyles}>&copy; 2023. Dani's Product</div>
        </>
    )
}