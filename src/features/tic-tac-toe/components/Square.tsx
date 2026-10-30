type SquareProps = {
    value: string;
}

export function Square({ value }: SquareProps) {
    return (
        <button type="button" className="square">
            {value}
        </button>
    );
}