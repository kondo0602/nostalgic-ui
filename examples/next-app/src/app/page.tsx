import { button } from '@nostalgic-ui/css';

const Home = () => {
  return (
    <main>
      <h1>Welcome to Nostalgic-UI.</h1>
      <div>
        <button className={button({ color: 'blue' })}>Blue</button>
        <button className={button({ color: 'red' })}>Red</button>
        <button className={button({ color: 'green' })}>Green</button>
        <button className={button({ color: 'yellow' })}>Yellow</button>
        <button className={button({ color: 'white' })}>White</button>
        <button className={button({ color: 'blue' })} disabled>Disabled</button>
      </div>
      <div>
        <button className={button({ color: 'blue', size: 'sm' })}>Blue</button>
        <button className={button({ color: 'red', size: 'sm' })}>Red</button>
        <button className={button({ color: 'green', size: 'sm' })}>Green</button>
        <button className={button({ color: 'yellow', size: 'sm' })}>Yellow</button>
        <button className={button({ color: 'white', size: 'sm' })}>White</button>
        <button className={button({ color: 'blue', size: 'sm' })} disabled>Disabled</button>
      </div>
    </main>
  );
};

export default Home;
