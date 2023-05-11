import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface AvatarProps {
    className?: string;
    image?: string;
    alt?: string;
}
 
const AvatarComponent: React.FC<Partial<AvatarProps>> = (props) => {
    return (
        <Avatar className="flex flex-col items-center justify-center">
            {props.image ?
                <AvatarImage src={props.image} alt={props.alt} /> :
                <div>
                    {props.alt ?
                        <AvatarFallback>{props.alt && props.alt.split(' ').map(function (item) { return item[0] }).join('')}</AvatarFallback>
                        : <AvatarFallback>?</AvatarFallback>
                    }
                </div>
            }
        </Avatar>
    );
}

export default AvatarComponent;
