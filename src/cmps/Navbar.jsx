import React, { useState } from 'react'
import logo from '../assets/img/taskmanager.png'
import { ImgSearch } from './ImgSearch'
import eventBus from '../services/eventBusService'



export function Navbar() {

    const [imgs, setImgs] = useState([]);

    const setbackgroundImg=(full,thumb)=>{
        eventBus.emit('setBackground', {full,thumb})
        setImgs([]);
    }



    return (
        <div className='navbar-container'>


            <nav className='flex space-between align-center'>
                <div className="flex align-center">
                <img src={logo} alt="" />
                <h1>Task Manager</h1>
                </div>
              
                <ImgSearch setImgs={setImgs} />

            </nav>
            {imgs.length > 0 &&

                <div className='imgs-container'>
                    {imgs.map((img, idx) => (<img onClick={()=>setbackgroundImg(img.urls.full,img.urls.thumb)} key={idx} src={img.urls.thumb} />))}
                </div>
            }
        </div>
    )
}
