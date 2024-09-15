import { useState } from 'react'
import bp_image from './assets/blackpink_1.webp'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <header>
        <h1>My Tunes</h1>
      </header>
      <main>
        <div className='leftSection'>
          <img src={bp_image} className='image' alt='blackpink image'/>
        </div>
        <div className='rightSection'>
          <h2>Blackpink's albums</h2>
          <details>
            <summary>Born Pink</summary>
            <ol>
              <li>Pink Venom</li>
              <li>Shut Down</li>
              <li>Typa Girl</li>
              <li>Yeah Yeah Yeah</li>
              <li>Hard to love</li>
            </ol>
          </details>
          <details>
            <summary>Blackpink</summary>
            <ol>
              <li>Boombayah</li>
              <li>Whistle</li>
              <li>Playing with Fire</li>
              <li>Stay</li>
              <li>As If It's Your Last</li>
            </ol>
          </details>
        </div>
        
      </main>
    </>
  )
}

export default App
