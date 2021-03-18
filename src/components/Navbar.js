import { useState } from 'react';
import slideData from '../data/slideData';
import '../styles/components/navbar.scss';

const Navbar = () => {
  const [actions, setActions] = useState(slideData);
  const [index, setIndex] = useState(0);

  return (
    <>
      <div className="background">
        <nav className="nav">
          <div className="nav-brand">
            <h2>Glowstars</h2>
          </div>
          <div className="nav-link">
            <ul className="nav-link__container">
              <li className="nav-link__container--item"><a href="#">Login</a></li>
              <li className="nav-link__container--item"><a href="#">Join Free</a></li>
              <li className="nav-link__container--item"><a href="#"><i class="fas fa-ellipsis-v"></i></a></li>
            </ul>
          </div>
        </nav>

        <div className="hero">
          <h1>{actions[index].title}</h1>
          <p>{actions[index].slogan}</p>

          <div className="hero-button">
            <button>Join Now</button>
            <button>Install App</button>
          </div>
        </div>

        <div className="action">
          <button onClick={() => setIndex(0)} className="action-button"></button>
          <button onClick={() => setIndex(1)} className="action-button"></button>
          <button onClick={() => setIndex(2)} className="action-button"></button>
        </div>
      </div>
    </>
  )
}

export default Navbar
