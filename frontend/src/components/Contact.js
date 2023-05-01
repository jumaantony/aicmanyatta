import React, {useEffect} from 'react'

const Contact = () => {
  // setting the title
  useEffect(() => {
    document.title = 'Contact';
  }, []);

  return (
    <div>
      This is the contact page
    </div>
  )
}

export default Contact;
