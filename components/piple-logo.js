import React from 'react'
import {StyleSheet, View, Button} from 'react-native'
import Svg, { G, Ellipse, Circle } from 'react-native-svg'

export default class Piple extends React.Component {
    constructor(){
        super();
        this.state = {
            circleX: 17.512,
            circleY: 17.512
        }
    }
    
    setCirclePosition(){
        switch(this.state.circleX){
                case 17.512:
                    this.setState({
                        circleX: 77.512,
                        circleY: 17.512
                    })
                    break;
                case 77.512:
                    this.setState({
                        circleX: 17.512
                    })
                    break;
        }
    }

    render(){
        return(
            <View>
            <Svg width="20em" height="20em" 
            viewBox="0 0 97.701 139.051">
                <G data-name="Group 759">
                    <G data-name="Group 753">
                        <Ellipse
                        data-name="Ellipse 1"
                        cx={48.85}
                        cy={49.013}
                        rx={48.85}
                        ry={49.013}
                        fill="#2d948d"
                        />
                        <Ellipse
                        data-name="Ellipse 2"
                        cx={29.82}
                        cy={29.928}
                        rx={29.82}
                        ry={29.928}
                        transform="translate(18.976 19.085)"
                        fill="#fff"
                        />
                        <Circle
                        data-name="Ellipse 3"
                        cx={this.state.circleX}
                        cy={this.state.circleY}
                        r={17.512}
                        transform="translate(0 98.026)"
                        fill="#2d948d"
                        />
                    </G>
                </G>
            </Svg>
            <View style={{bottom: -150}}>
                <Button title="Click me!"
                width="5em" heigth="2em" 
                color="grey"
                onPress={() => {this.setCirclePosition()}}
                />
            </View>
            </View>
        );
    }
}