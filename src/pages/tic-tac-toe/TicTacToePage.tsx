import {Game} from "../../features/tic-tac-toe";
import "./TicTacToePage.css"

export function TicTacToePage() {
    return (
        <div className="tic-tac-toe-page">
            <h1>Tic Tac Toe</h1>
            <Game />
        </div>
    )
}