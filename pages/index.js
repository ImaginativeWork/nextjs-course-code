<<<<<<< HEAD
const HomePage = () => {

  return (
    <>
      <h1>Home Page (pages/index.js file, Video Tutorial)</h1>
    </>
  )
}

export default HomePage;
=======
import Link from 'next/link';

function HomePage() {
  return (
    <div>
      <h1>The Home Page</h1>
      <ul>
          <li>
              <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
              <Link href="/clients">Clients</Link>
          </li>
      </ul>
    </div>
  );
}

export default HomePage;
>>>>>>> 02-file-based-routing
