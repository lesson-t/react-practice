import * as React from "react"
import { NameItem } from "./NameItem"

export const NameList: React.FC = () => {
    const persons = [
        { id: 1, name: "ao", birthday: "1999/01/01" },
        { id: 2, name: "aka", birthday: "1999/01/02" },
        { id: 3, name: "asu", birthday: "1999/01/03" },
    ]

    return (
        <ul>
            {persons.map((person) => (
                <NameItem key={person.id} name={person.name} birthday={person.birthday} />
            ))}
        </ul>
    )
}