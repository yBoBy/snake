import React, { Component } from 'react';
import { View } from 'react-native';
import Constants from './Constants';


export default class Head extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        const x = this.props.position[0];
        const y = this.props.position[1];

        return (
            <View style={{
                width: this.props.size/2,
                height: this.props.size/2,
                backgroundColor: Constants.colorSnakeHead,
                position: 'absolute',
                left: x * this.props.size,
                top: y * this.props.size
             }} />
        )
    }
        
    
}
