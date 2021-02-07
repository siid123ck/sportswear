import React from 'react'
import { Link } from 'react-router-dom';
import "./Button.scss";

export default function CustomButton({name, ...others}) {
    return (
        <div>
            <Link to={others.to}>
            <button  className='btn' {...others}>{name}</button>
            </Link>
        </div>
    )
}
