import styles from './shared-ui.module.css';

export interface GreetingProps {
  name: string;
  appName: string;
}

export function Greeting({ name, appName }: GreetingProps) {
  return (
    <div className={styles['container']}>
      <h2>👋 Hello {name}!</h2>

      <p>
        This shared component is imported from the monorepo library into{' '}
        <strong>{appName}</strong>
      </p>
    </div>
  );
}

export default Greeting;
