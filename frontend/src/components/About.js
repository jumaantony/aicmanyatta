import React, {useEffect} from 'react'

const About = () => {
  // setting the title
  useEffect(() => {
    document.title = 'About Us';
  }, []);

  return (
    <div>
      This is my About
    </div>
  )
}

export default About;
