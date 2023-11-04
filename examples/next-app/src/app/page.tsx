import { button } from '@nostalgic-ui/css';

export default function Home() {
  return (
    <main>
      <button className={button({ color: 'blue' })}>Blue</button>
      <button className={button({ color: 'red' })}>Red</button>
      <button className={button({ color: 'green' })}>Green</button>
      <button className={button({ color: 'yellow' })}>Yellow</button>
      <button className={button({ color: 'white' })}>White</button>
    </main>
  );
}
