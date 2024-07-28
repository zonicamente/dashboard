import React from 'react';
import { MdOutlinePreview } from "react-icons/md";
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar({ toggleNav }) {
    return (
        <div className='sidebar bgColores col-auto col-lg-2 min-vh-100 text-sm fs-6 d-flex  flex-column'>
            <ul className='nav nav-pills flex-column'>
                <li className='nav-item text-white fs-4 my-1 py-2 py-sm-0'>
                    <Link to="/" onClick={toggleNav} title='Etapa 1' className='nav-link text-white fs-5'>
                        <MdOutlinePreview className='d-lg-none icon-hover' />
                        <span className='ms-3 d-none d-lg-inline'>Etapa</span>
                        <span className='ms-3'>01</span>
                    </Link>
                </li>
                <li className='nav-item text-white fs-4 my-1 py-2 py-sm-0'>
                    <Link to="/etapa2" onClick={toggleNav} title='Etapa 2' className='nav-link text-white fs-5'>
                        <MdOutlinePreview className='d-lg-none icon-hover' />
                        <span className='ms-3 d-none d-lg-inline'>Etapa</span>
                        <span className='ms-3'>02</span>
                    </Link>
                </li>
                <li className='nav-item text-white fs-4 my-1 py-2 py-sm-0'>
                    <Link to="/etapa3" onClick={toggleNav} title='Etapa 3' className='nav-link text-white fs-5'>
                        <MdOutlinePreview className='d-lg-none icon-hover' />
                        <span className='ms-3 d-none d-lg-inline'>Etapa</span>
                        <span className='ms-3'>03</span>
                    </Link>
                </li>
                <li className='nav-item text-white fs-4 my-1 py-2 py-sm-0'>
                    <Link to="/etapa4" onClick={toggleNav} title='Etapa 4' className='nav-link text-white fs-5'>
                        <MdOutlinePreview className='d-lg-none icon-hover' />
                        <span className='ms-3 d-none d-lg-inline'>Etapa</span>
                        <span className='ms-3'>04</span>
                    </Link>
                </li>
                <li className='nav-item text-white fs-4 my-1 py-2 py-sm-0'>
                    <Link to="/etapa5" onClick={toggleNav} title='Etapa 5' className='nav-link text-white fs-5'>
                        <MdOutlinePreview className='d-lg-none icon-hover' />
                        <span className='ms-3 d-none d-lg-inline'>Etapa</span>
                        <span className='ms-3'>05</span>
                    </Link>
                </li>
                <li className='nav-item text-white fs-4 my-1 py-2 py-sm-0'>
                    <Link to="/etapa6" onClick={toggleNav} title='Etapa 6' className='nav-link text-white fs-5'>
                        <MdOutlinePreview className='d-lg-none icon-hover' />
                        <span className='ms-3 d-none d-lg-inline'>Etapa</span>
                        <span className='ms-3'>06</span>
                    </Link>
                </li>
                <li className='nav-item text-white fs-4 my-1 py-2 py-sm-0'>
                    <Link to="/etapa7" onClick={toggleNav} title='Etapa 7' className='nav-link text-white fs-5'>
                        <MdOutlinePreview className='d-lg-none icon-hover' />
                        <span className='ms-3 d-none d-lg-inline'>Etapa</span>
                        <span className='ms-3'>07</span>
                    </Link>
                </li>
                <li className='nav-item text-white fs-4 my-1 py-2 py-sm-0'>
                    <Link to="/etapa8" onClick={toggleNav} title='Etapa 8' className='nav-link text-white fs-5'>
                        <MdOutlinePreview className='d-lg-none icon-hover' />
                        <span className='ms-3 d-none d-lg-inline'>Etapa</span>
                        <span className='ms-3'>08</span>
                    </Link>
                </li>
                <li className='nav-item text-white fs-4 my-1 py-2 py-sm-0'>
                    <Link to="/etapa9" onClick={toggleNav} title='Etapa 9' className='nav-link text-white fs-5'>
                        <MdOutlinePreview className='d-lg-none icon-hover' />
                        <span className='ms-3 d-none d-lg-inline'>Etapa</span>
                        <span className='ms-3'>09</span>
                    </Link>
                </li>
                <li className='nav-item text-white fs-4 my-1 py-2 py-sm-0'>
                    <Link to="/etapa10" onClick={toggleNav} title='Etapa 10' className='nav-link text-white fs-5'>
                        <MdOutlinePreview className='d-lg-none icon-hover' />
                        <span className='ms-3 d-none d-lg-inline'>Etapa</span>
                        <span className='ms-3'>10</span>
                    </Link>
                </li>
                <li className='nav-item text-white fs-4 my-1 py-2 py-sm-0'>
                    <Link to="/etapa11" onClick={toggleNav} title='Etapa 11' className='nav-link text-white fs-5'>
                        <MdOutlinePreview className='d-lg-none icon-hover' />
                        <span className='ms-3 d-none d-lg-inline'>Etapa</span>
                        <span className='ms-3'>11</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;
