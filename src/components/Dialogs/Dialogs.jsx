import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css"

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return(
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Messages = (props) => {
    return(
        <div className={s.message}>{props.message}</div>
    );
}

const Dialogs = () => {
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                <DialogItem name="Azamat" id="1" /> 
                <DialogItem name="Beka" id="2" /> 
                <DialogItem name="Jeka" id="3" /> 
                <DialogItem name="Aken" id="4" /> 
    
            </div>
            <div className={s.messages}>
                <Messages message="Hi"/>
                <Messages message="How are you?"/>
                <Messages message="Perfectly, bro!"/>
            </div>
        </div>
    );
}

export default Dialogs;