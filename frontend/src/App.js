import React from 'react'
import Tasks from './components/Tasks'


const App = () => {
  return (    
      <div> <Tasks /> </div>
  )
}

export default App


// We pass the store as a a props to this task component.   <Tasks store={store} /> 

// Imagine we have multiple components and this Task component is deep in the component tree.
// Then we have to pass this prop in all over the components, and that will be very messy.
// So to solve this, we can use very useful reat feature, which is "context".
// So with context, we can use this tool in every component which is available in app component.

// What ever component is available in between this provider,
// that Component and its child components can access this value, which is "store".