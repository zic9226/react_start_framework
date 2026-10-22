import { useState } from "react";
import Swal from "sweetalert2"

export function useGreeting() {
    const [count, setCount] = useState(0)

    function greet() {
        setCount(count + 1)
        Swal.fire({
            title: "Hello!",
            text: `Nice to see you. I speaked with you ${count + 1} times`,
            icon: "success",

        })
    }

    return { count, greet }

}