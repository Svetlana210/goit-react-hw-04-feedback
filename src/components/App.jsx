import styles from './app.module.css';
import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

const App = () => {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });

  const onButtonClick = name => {
    setState(prevState => {
      return { ...prevState, [name]: prevState[name] + 1 };
    });
  };

  const total = state.good + state.neutral + state.bad;
  const positivePercent = Number(((state.good / total) * 100).toFixed(2));
  const options = Object.keys(state);

  return (
    <div className={styles.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onButtonClick={onButtonClick} />
      </Section>
      <Section title="Statistics">
        {total ? (
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={total}
            positivePercent={positivePercent}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};

export default App;
