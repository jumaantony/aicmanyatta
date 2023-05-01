import React, {useEffect} from 'react'

const Sermons = () => {
  // setting the title
  useEffect(() => {
    document.title = 'Sermons';
  }, []);

  return (
    <div>
      This is the sermons page
    </div>
  )
}

export default Sermons;
