import React from 'react';
import DiamondPng from '../assets/diamond.png'
import '../styles/diamond.scss'

 export default class Diamond extends React.Component {
    render(){
        return (
            <>
            <img className="diamond" src={DiamondPng}></img>
            </>
            );
    }
}

