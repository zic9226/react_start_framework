import { Button } from "./shared/ui/Button";
import { app } from "./data/app";
import { buttons } from "./data/buttons";
import type { ButtonAction } from "./types/button";
import "./App.css"
import { useGreeting } from "./features/greeting";
import { useLogoToggle } from "./features/logo-switcher/";
import { StackListWidget } from "./features/stack/";


export default function App() {
  const { count, greet } = useGreeting()
  const { currentLogo, toggleLogo } = useLogoToggle(app.logo, app.altLogo)


  const actions: Record<ButtonAction, () => void> = {
    hello: greet,
    toggleLogo: toggleLogo,
  }

  return(
    <section id = "center">
      <img src={currentLogo} alt={"Logo: " + app.title }  width={ app.logoSize} />
      <h1>{app.title}</h1>
      <div className="buttons">
        {buttons.map((button) => (
          <Button 
          key={button.id} 
          text={button.text} 
          onClick={actions[button.action]} />

        ))}

      </div>

      <StackListWidget />
      <p>I said Hello {count} times</p>
      <p>Autor: {app.author}</p>
    </section>
  )
}