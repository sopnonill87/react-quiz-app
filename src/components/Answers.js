import classes from "../styles/Answers.module.css";
import Checkbox from "./Checkbox";

export default function Answers() {
  return (
    <div className={classes.answers}>
      <Checkbox
        type="checkbox"
        text="A New Hope 1"
        for="option1"
        id="option1"
        labelClassName={classes.answer}
      />
      <Checkbox
        type="checkbox"
        text="A New Hope 2"
        for="option2"
        id="option2"
        labelClassName={classes.answer}
      />
      <Checkbox
        type="checkbox"
        text="A New Hope 3"
        for="option3"
        id="option3"
        labelClassName={classes.answer}
      />
      <Checkbox
        type="checkbox"
        text="A New Hope 4"
        for="option4"
        id="option4"
        labelClassName={classes.answer}
      />
      <Checkbox
        type="checkbox"
        text="A New Hope 5"
        for="option5"
        id="option5"
        labelClassName={classes.answer}
      />
      <Checkbox
        type="checkbox"
        text="A New Hope 6"
        for="option6"
        id="option6"
        labelClassName={classes.answer}
      />
      <Checkbox
        type="checkbox"
        text="A New Hope 7"
        for="option7"
        id="option7"
        labelClassName={classes.answer}
      />
      <Checkbox
        type="checkbox"
        text="A New Hope 8"
        for="option8"
        id="option8"
        labelClassName={`${classes.answer} ${classes.correct}`}
      />
      <Checkbox
        type="checkbox"
        text="A New Hope 9"
        for="option9"
        id="option9"
        labelClassName={classes.answer}
      />

      <Checkbox
        type="checkbox"
        text="A New Hope 10"
        for="option10"
        id="option10"
        labelClassName={classes.answer}
      />
    </div>
  );
}
