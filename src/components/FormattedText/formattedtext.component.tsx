import React, { FC } from "react";
import "./formattedtext.styles.scss";

interface formattedTextProps {
    text: string
}

const FormattedText:FC<formattedTextProps> = (props) => {
    console.log(props.text.split(/\n/).length);
    return (
        <div>
            {props.text.split(/\n/).map((text, index) => (
                <p key={index}>{text}</p>
            ))}
        </div>
    )
}

export default FormattedText;
