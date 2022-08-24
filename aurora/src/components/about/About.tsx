import { decrement, increment } from "../../state/appSlice";
import { RootState, useAppDispatch, useAppSelector } from "../../state/store";
import styles from "../../styles/About.module.css";
import React, {ForwardedRef} from "react";
export interface AboutInterface {
  main_text: string[];
  main_stack: string[];
  location: string;
  resume_url: string;
  linkedIn__url: string;
  contact_email: string;
}
const About = React.forwardRef(( props,ref: ForwardedRef<HTMLElement>) => {
  const activeCount = useAppSelector((state: RootState) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <section id="about" ref={ref} className={styles.container}>
      <h1>About</h1>
      <p>Counter:&nbsp;{activeCount}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </section>
  );
});

About.displayName = "about display"

export default About;
