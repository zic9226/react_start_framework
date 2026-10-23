import { HomePage } from "../../pages/home";
import { TicTacToePage } from "../../pages/tic-tac-toe";
import type { Section } from "./types";

export const sections: Section[] = [
    {
        id: "get-started",
        title: "Get Started",
        lessons: [
            { id: "quick-start", title: "Quick Start", component: HomePage },
            { id: "tic-tac-toe", title: "Tic Tac Toe", component: TicTacToePage },
        ],
    },
]



