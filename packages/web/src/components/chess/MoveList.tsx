interface MoveListProps {
  moves: string[];
}

export function MoveList({ moves }: MoveListProps) {
  if (moves.length === 0) return null;

  const pairs: { number: number; white: string; black?: string }[] = [];
  for (let i = 0; i < moves.length; i += 2) {
    pairs.push({
      number: i / 2 + 1,
      white: moves[i],
      black: moves[i + 1],
    });
  }

  return (
    <div className="move-list">
      <strong>Moves</strong>
      <ol className="move-list-rows">
        {pairs.map(({ number, white, black }) => (
          <li key={number}>
            <span className="move-num">{number}.</span>
            <span className="move-cell">{white}</span>
            <span className="move-cell">{black ?? ""}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
