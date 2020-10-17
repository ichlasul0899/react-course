import React from 'react';
import ProgressBar from './ProgressBar';

const AboutSub = () => {
  const skill = [
    {
      title: 'Javascript - MERN STACK',
      score: '95%',
    },
    {
      title: 'PHP  - XAMPP STACK',
      score: '85%',
    },
    {
      title: 'UI/UX - Adobe XD & FIGMA',
      score: '80%',
    },
  ];

  return (
    <div id="about" className="scrollspy">
      <div className="container">
        <div className="row">
          <h3 className="center light">About Me</h3>

          <div className="col m6 s12">
            <h5>Professional</h5>
            <p>
              I am javascript and PHP developper, If you want to know a
              javascript and php, i can help you, dont worry to chat me via
              email. ichlasul0899@gmail.com is my email. Or you can subscribe my
              Youutbe Channel. See AA Youtube.
              {' '}
            </p>
            <a href="/" className="waves-effect waves-teal btn black">
              <i className="material-icons left">sentiment_very_satisfied</i>
              AA
              Youtube
            </a>
          </div>

          <div className="col m6 s12">
            {skill.map((data, index) => {
 return (
   <ProgressBar data={data} id={index} />
            );
})}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSub;
