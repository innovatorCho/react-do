import React from "react";
import styles from "./Button.module.css";

const Button = (props) => (
<button className={styles.answer} onClick={props.onClick}>{props.text}</button>
);
export default Button;