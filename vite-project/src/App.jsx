import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { routes } from './routes'
import { RouterProvider } from 'react-router'

function App() {

  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
