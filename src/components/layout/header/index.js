import React, {useState, useContext} from 'react';
import { PageHeader, Space, Drawer, Button } from 'antd';
import logo from '../../../assests/images/astroLogo.png'
import {ThemeContext} from "../../../App";
import { Sun, Moon, Menu } from 'react-feather';

const Header = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);

    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState('left');

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };


    const downloadResume = () => {
        // using Java Script method to get PDF file
        fetch('resume.docx').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'resume.docx';
                alink.click();
            })
        })
    }

    return (
        <div>
            <PageHeader
                className="nav site-page-header"
                ghost={false}
                title={<img className="logo" width="60" height="60" src={logo} alt="No Image"/>}
                extra={[
                    <Space size={20}>
                        <a href="#about">ABOUT</a>
                        <a href="#work">WORK</a>
                        <a href="#skills">SKILLS</a>
                        <a href="#contact">CONTACT</a>
                        <button className="custom-btn resume" onClick={downloadResume}>RESUME</button>
                        <span onClick={toggleTheme}>{theme === 'light' ? <Moon/> : <Sun color="white"/>}</span>
                    </Space>
                ]}
            >
            </PageHeader>


            <div className="sideDrawer">
                <img className="logo" width="60" height="60" src={logo} alt="No Image"/>
                <span><Menu size={30} style={{float:'right', margin:'30px'}} onClick={showDrawer} /></span>
            </div>


            <Drawer
                className={theme === 'light' ? '' : 'dark-drawer'}
                title={
                    <>
                        <img className="logo" width="60" height="60" src={logo} alt="No Image"/>
                        <p style={{float:'right', margin:'15px'}} onClick={toggleTheme}>
                            {theme === 'light' ? <Moon/> : <Sun color="white"/>}
                        </p>
                    </>
                }
                placement={placement}
                closable={false}
                onClose={onClose}
                open={open}
                key={placement}
            >
                <p><a href="#about">ABOUT</a></p>
                <p><a href="#work">WORK</a></p>
                <p><a href="#skills">SKILLS</a></p>
                <p onClick={downloadResume}>RESUME</p>

            </Drawer>

        </div>
    )
}

export default Header;