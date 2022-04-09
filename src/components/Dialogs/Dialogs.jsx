import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages"

const Dialogs = (props) => {
      
    // dialogsData map to dialogsElements
    let dialogsElements = props.dio.map(dialog => <DialogItem name={dialog.name} id={dialog.id} /> )

    let messagesElements = props.mess.map(messageel => <Messages message={messageel.message} id={messageel.id} />)
    
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} /> 
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />  */}
                
                {dialogsElements}

            </div>
            <div className={s.messages}>
                {/* <Messages message={messagesData[0].message} id={messagesData[0].id} />
                <Messages message={messagesData[1].message} id={messagesData[1].id} />
                <Messages message={messagesData[2].message} id={messagesData[2].id} /> */}

                {messagesElements}

            </div>
        </div>
    );
}

export default Dialogs;