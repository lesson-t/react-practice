import * as React from "react";

type NameItemProps = {
    name: string;
    birthday: string;
}

export const NameItem: React.FC<NameItemProps> = ({ name, birthday }) => {
    return (
        <li>
            {name} {birthday}
        </li>
    )
}