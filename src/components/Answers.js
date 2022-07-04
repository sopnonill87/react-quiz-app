import classes from "../styles/Answers.module.css";
import Checkbox from "./Checkbox";

export default function Answers() {
  return (
    <div className={classes.answers}>
      <Checkbox
        type="checkbox"
        text="A New Hope 1"
        htmlFor="option1"
        id="option1"
        labelClassName={classes.answer}
      />
      <Checkbox
        type="checkbox"
        text="A New Hope 2"
        htmlFor="option2"
        id="option2"
        labelClassName={classes.answer}
      />
      <Checkbox
        type="checkbox"
        text="A New Hope 3"
        htmlFor="option3"
        id="option3"
        labelClassName={classes.answer}
      />
      <Checkbox
        type="checkbox"
        text="A New Hope 4"
        htmlFor="option4"
        id="option4"
        labelClassName={classes.answer}
      />
      <Checkbox
        type="checkbox"
        text="A New Hope 5"
        htmlFor="option5"
        id="option5"
        labelClassName={classes.answer}
      />
      <Checkbox
        type="checkbox"
        text="A New Hope 6"
        htmlFor="option6"
        id="option6"
        labelClassName={`${classes.answer} ${classes.wrong}`}
      />
      <Checkbox
        type="checkbox"
        text="A New Hope 7"
        htmlFor="option7"
        id="option7"
        labelClassName={classes.answer}
      />
      <Checkbox
        type="checkbox"
        text="A New Hope 8"
        htmlFor="option8"
        id="option8"
        labelClassName={`${classes.answer} ${classes.correct}`}
      />
      <Checkbox
        type="checkbox"
        text="A New Hope 9"
        htmlFor="option9"
        id="option9"
        labelClassName={classes.answer}
      />

      <Checkbox
        type="checkbox"
        text="A New Hope 10"
        htmlFor="option10"
        id="option10"
        labelClassName={classes.answer}
      />
    </div>
  );
}
