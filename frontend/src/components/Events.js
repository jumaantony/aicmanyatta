import React, {useEffect} from 'react'

const Events = () => {
  // setting the title
  useEffect(() => {
    document.title = 'Events';
  }, []);

  return (
    <div>
      This is the Events page
    </div>
  )
}

export default Events
