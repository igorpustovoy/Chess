import { GameState } from "src/App";
import CHESS_PIECES from "./";

interface ChesspieceProps {
  column: string;
  row: number;
  gameState: GameState;
}

export default function Chesspiece({
  column,
  row,
  gameState,
}: ChesspieceProps) {
  const stringField = `${column}${row}`;
  const piece = gameState[stringField];

  if (!piece) return null;

  const ChessPieceSVG = CHESS_PIECES[`${piece.color}_${piece.piece}`];

  return <ChessPieceSVG />;
}
