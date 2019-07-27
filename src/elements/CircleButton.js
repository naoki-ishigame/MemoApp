import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import { createIconSet } from '@expo/vector-icons';
import fontAwesome from '../../assets/fonts/fa-solid-900.ttf';

const CustomIcon = createIconSet({
  pencil: '\uf303',
  plus: '\uf067',
}, 'FontAwesome');

class CircleButton extends React.Component {
  state = {
    fontLoaded: false,
  };
  async componentWillMount() {
    await Font.loadAsync({
      FontAwesome: fontAwesome,
    });

    this.setState({ fontLoaded: true });
  }



  render() {
    const { style, color, name } = this.props;

    let bgColor = '#ff5a77';
    let textColor = '#fff';

    if (color === 'white') {
      bgColor = '#fff';
      textColor = '#ff5a77';
    }

    return (
      <View style={[styles.CircleButton, style, { backgroundColor: bgColor }]}>
        {
          this.state.fontLoaded ? (
            < CustomIcon name={name} style={[styles.CircleButtonTitle, { color: textColor }]} />
          ) : null
        }
      </View>
    );
  }
}


const styles = StyleSheet.create({
  CircleButton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  CircleButtonTitle: {
    fontFamily: 'FontAwesome',
    fontSize: 24,
    lineHeight: 32,
  }
});


export default CircleButton;
