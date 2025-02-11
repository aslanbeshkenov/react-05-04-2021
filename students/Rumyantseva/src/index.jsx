import React from 'react';
import ReactDom from 'react-dom';

//const element = <div id="my-id" className="my-class"></div>

const messagesListArray = ["Hi!", "Hello", "Привет!"];

const Msg = ({ message }) => {
    return (
        <div id="my-id" className="msg">
            {message}
        </div>
    )
};

const MsgList = (props) => {
    return props.messagesList.map((message, index) => {
        return <Msg key={index} message={message} />
    })
};

const Button = (props) => {
    const HandleClick = (event) => {
        //console.log(messagesListArray);
        //console.log(event);
        messagesListArray.push("Нормально");
        ReactDom.render(
            <>
                <MsgList messagesList={messagesListArray} />
                <Button>Отправить</Button>
            </>,
            document.getElementById("app")

        );
        //console.log(messagesListArray);


    };
    return <button className="btn" onClick={HandleClick}>{props.children}</button>

};

ReactDom.render(
    <>
        <MsgList messagesList={messagesListArray} />
        <Button>Отправить</Button>
    </>,
    document.getElementById("app")

);