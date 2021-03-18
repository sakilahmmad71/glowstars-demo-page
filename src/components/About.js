import { useState } from 'react';
import aboutData from '../data/aboutData';
import '../styles/components/about.scss';

const About = () => {
  const [data, setData] = useState(aboutData);

  return (
    <>
      <div className="about">
        <div className="about__container">
          {data.map((about, index) => (
            <div className={`box ${index === 0 ? 'active' : ''}`}>
              <div className="icon"><i className={`fas ${about.icon}`}></i></div>
              <div className="title">
                <h3>{about.title}</h3>
                <div className="seperator"></div>
                <p>{about.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default About
