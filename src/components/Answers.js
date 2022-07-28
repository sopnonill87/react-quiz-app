import classes from "../styles/Answers.module.css";
import Checkbox from "./Checkbox";

export default function Answers({ options = [], handleChange }) {
  console.log("options", options);

  return (
    <div className={classes.answers}>
      {options.length > 0 &&
        options.map((option, index) => (
          <Checkbox
            key={option.title}
            type="checkbox"
            text={option.title}
            htmlFor={option.title}
            id={option.title}
            labelClassName={classes.answer}
            value={index}
            checked={option.checked}
            onChange={(e) => handleChange(e, index)}
          />
        ))}
    </div>
  );
}
