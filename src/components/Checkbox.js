export default function Checkbox({ text, labelClassName, ...rest }) {
  return (
    <label className={labelClassName}>
      <input {...rest} />
      <span> {text}</span>
    </label>
  );
}
