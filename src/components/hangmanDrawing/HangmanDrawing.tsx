import drawingStyles from "./HangmanDrawing.module.css";

const HEAD = <div key={1} className={drawingStyles.head} />;

const BODY = <div key={2} className={drawingStyles.body} />;

const RIGHT_ARM = <div key={3} className={drawingStyles.right_arm} />;

const LEFT_ARM = <div key={4} className={drawingStyles.left_arm} />;

const RIGHT_LEG = <div key={5} className={drawingStyles.right_leg} />;

const LEFT_LEG = <div key={6} className={drawingStyles.left_leg} />;

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

export default function HangmanDrawing({
  numberOfGuesses,
}: HangmanDrawingProps) {
  return (
    <div style={{ position: "relative" }}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div className={drawingStyles.detail_one} />
      <div className={drawingStyles.detail_two} />
      <div className={drawingStyles.detail_three} />
      <div className={drawingStyles.detail_four} />
    </div>
  );
}
