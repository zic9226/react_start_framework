import { useState } from "react";


export function useLogoToggle(logo: string, altLogo: string) {
    const [isAltLogo, setIsAltLogo] = useState(false)

    function toggleLogo() {
        setIsAltLogo((prev) => !prev)
    }

    
const currentLogo = isAltLogo ? altLogo : logo


return { currentLogo, toggleLogo }

}



