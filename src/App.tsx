import { useState } from "react";
import { Button } from "./components/Button";
import { app } from "./data/app";
import { buttons } from "./data/buttons";
import type { ButtonAction } from "./types/button";
import "./App.css"
import { StackList } from "./components/StackList";
import { stack } from "./data/stack";
import { useGreeting } from "./hooks/useGreeting";
import { useLogoToggle } from "./hooks/useLoggoToggle";

export default function App() {
  const { count, greet } = useGreeting()
  const { currentLogo, toggleLogo } = useLogoToggle()


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

      <StackList items={stack} />
      <p>I said Hello {count} times</p>
      <p>Autor: {app.author}</p>
    </section>
  )
}