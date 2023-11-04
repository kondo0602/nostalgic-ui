import { button } from '@nostalgic-ui/css';

const Home = () => {
  return (
    <main>
      <h1>Welcome to Nostalgic-UI.</h1>
      <div>
        <button className={button({ color: 'blue' })}>Blue</button>
        <button className={button({ color: 'green' })}>Green</button>
        <button className={button({ color: 'red' })}>Red</button>
        <button className={button({ color: 'yellow' })}>Yellow</button>
        <button className={button({ color: 'white' })}>White</button>
        <button className={button()} disabled>Disabled</button>
      </div>
      <div>
        <button className={button({ color: 'blue', size: 'sm' })}>Blue</button>
        <button className={button({ color: 'green', size: 'sm' })}>Green</button>
        <button className={button({ color: 'red', size: 'sm' })}>Red</button>
        <button className={button({ color: 'yellow', size: 'sm' })}>Yellow</button>
        <button className={button({ color: 'white', size: 'sm' })}>White</button>
        <button className={button({ size: 'sm' })} disabled>Disabled</button>
      </div>
      <div>
        <button className={button({ color: 'blue', variant: 'outline' })}>Blue</button>
        <button className={button({ color: 'green', variant: 'outline' })}>Green</button>
        <button className={button({ color: 'red', variant: 'outline' })}>Red</button>
        <button className={button({ color: 'yellow', variant: 'outline' })}>Yellow</button>
      </div>
      <div>
        <button className={button({ color: 'blue', variant: 'ghost' })}>Blue</button>
        <button className={button({ color: 'green', variant: 'ghost' })}>Green</button>
        <button className={button({ color: 'red', variant: 'ghost' })}>Red</button>
        <button className={button({ color: 'yellow', variant: 'ghost' })}>Yellow</button>
      </div>
    </main>
  );
};

export default Home;
