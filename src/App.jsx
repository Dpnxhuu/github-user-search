import React from 'react'
import Search from './components/Search'
import Profile from './components/Profile'

const App = () => {
  return (
    <main className='h-screen w-full pb-5 overflow-x-hidden gap-2 bg-black flex flex-col items-center'>
      <Search/>
    </main>
  )
}

export default App
