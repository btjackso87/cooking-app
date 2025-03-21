

import React from 'react'
import { useTheme } from '../hooks/useTheme'

//styles
import "./Themeselector.css"



const themeColors = ['#58249c', '#249c6b', '#b70233']

export default function ThemeSelector() {
  const {changeColor, changeMode, mode} = useTheme()

  const toggleMode = () => {
      changeMode(mode === 'dark' ? "light" : "dark")
  }
  console.log(mode)

  return (
    <div className="theme-selector">
      <div className='mode-toggle' onClick={() => toggleMode()}>
            test
      </div>
      <div className="theme-buttons">
        {themeColors.map(color => (
          <div 
            key={color} 
            onClick={() => changeColor(color)}
            style={{ background: color }}
          />
        ))}
      </div>
    </div>
  )
}
