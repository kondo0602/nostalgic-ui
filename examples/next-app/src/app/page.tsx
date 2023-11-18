import { button, input, list, listItem, radio } from '@nostalgic-ui/css';

import * as styles from './page.css'

const Home = () => {
  return (
    <main className={styles.wrapper}>
      <h1>Welcome to Nostalgic-UI.</h1>
      <section>
        <h2>Buttons</h2>
        <div>
          <button className={button()}>White</button>
          <button className={button({ color: 'blue' })}>Blue</button>
          <button className={button({ color: 'green' })}>Green</button>
          <button className={button({ color: 'red' })}>Red</button>
          <button className={button({ color: 'yellow' })}>Yellow</button>
          <button className={button()} disabled>Disabled</button>
        </div>
        <div>
          <button className={button()}>White</button>
          <button className={button({ color: 'blue', size: 'sm' })}>Blue</button>
          <button className={button({ color: 'green', size: 'sm' })}>Green</button>
          <button className={button({ color: 'red', size: 'sm' })}>Red</button>
          <button className={button({ color: 'yellow', size: 'sm' })}>Yellow</button>
          <button className={button({ size: 'sm' })} disabled>Disabled</button>
        </div>
        <div>
          <button className={button({ color: 'blue', variant: 'outline' })}>Blue</button>
          <button className={button({ color: 'green', variant: 'outline' })}>Green</button>
          <button className={button({ color: 'red', variant: 'outline' })}>Red</button>
          <button className={button({ color: 'yellow', variant: 'outline' })}>Yellow</button>
        </div>
        <div>
          <button className={button({ variant: 'ghost' })}>White</button>
          <button className={button({ color: 'blue', variant: 'ghost' })}>Blue</button>
          <button className={button({ color: 'green', variant: 'ghost' })}>Green</button>
          <button className={button({ color: 'red', variant: 'ghost' })}>Red</button>
          <button className={button({ color: 'yellow', variant: 'ghost' })}>Yellow</button>
        </div>
      </section>
      <section className={styles.vStack}>
        <h2>Inputs</h2>
        <input className={input()} />
        <input className={input({ color: 'red' })} />
        <input className={input({ size: 'sm' })} />
        <input className={input({ color: 'red', size: 'sm' })} />
        <div className={styles.hStack}>
          <label>
            <input className={radio} type="radio" name="sample" value="yes" />
            Yes
          </label>
          <label>
            <input className={radio} type="radio" name="sample" value="no" />
            No
          </label>
        </div>
      </section>
      <section>
        <h2>Lists</h2>
        <ul className={list}>
          <li className={listItem}>List Item 1</li>
          <li className={listItem}>List Item 2</li>
          <li className={listItem}>List Item 3</li>
        </ul>
      </section>
    </main>
  );
};

export default Home;
