import './App.css'
import 'antd/dist/antd.css'
import Layouts from './components/layout'
import React,{useState,createContext} from 'react'

export const ThemeContext = createContext()

function App() {
    const [theme, setTheme] = useState('dark')

    const toggleTheme = () =>{
        setTheme((curr) => curr === 'light' ? 'dark' : 'light')
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div id={theme}>
                <Layouts />
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
