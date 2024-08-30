import "./Button.css";

const Button = ({ text, type, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`Button Button_${type}`}
    >
      {text}
    </button>
  );
};

function Button1() {
  return (
    <>
      <Button href="#">Link</Button> <Button type="submit">Button</Button>{' '}
      <Button as="input" type="button" value="Input" />{' '}
      <Button as="input" type="submit" value="Submit" />{' '}
      <Button as="input" type="reset" value="Reset" />
    </>
  );
}


export default Button;
