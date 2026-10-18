import { useState } from "react";
import { app } from "../data/app";

export function useLogoToggle() {
    const [isAltLogo, setIsAltLogo] = useState(false)

    function toggleLogo() {
        setIsAltLogo((prev) => !prev)
    }


const currentLogo = isAltLogo ? app.altLogo : app.logo


return { currentLogo, toggleLogo }

}