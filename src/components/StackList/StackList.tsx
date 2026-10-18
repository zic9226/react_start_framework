import type { StackItem } from "../../types/stack";
import "./StackList.css"

type StackListProps = {
    items: StackItem[];
}

export function StackList({ items }: StackListProps) {
    return (
        <ul className="stack">
            {items.map((item) => (
                <li key={item.id}>
                    <a href={item.url} target="_blank" rel="noreferrer">
                        {item.name}
                    </a>

                </li>
            ))}

        </ul>
    )
}