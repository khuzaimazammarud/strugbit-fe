import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'

 import logo from '../../../src/assets/images/logo.png'
 import customerSvg from '../../../src/assets/images/customers icon.svg'

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div style={{display:'flex', justifyContent: 'center'}}>
        <img className='sidebar-img' src={logo} />

        </div>
        <div className='sidebar-title'>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a className='list-button' href="">
                    <img src={customerSvg}/>
                    <p style={{margin: '0px 20px'}}> CUSTOMERS</p>
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar