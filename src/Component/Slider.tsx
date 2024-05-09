import {Slider as EuiSlider, SliderProps} from '@rneui/base';
import {View} from 'react-native';
const Slider = ({...props}: SliderProps) => (
  <EuiSlider
    value={50}
    maximumValue={100}
    minimumValue={0}
    step={1}
    allowTouchTrack
    trackStyle={{height: 5, borderRadius: 4, backgroundColor: 'transparent'}}
    thumbStyle={{height: 20, width: 20, backgroundColor: 'transparent'}}
    maximumTrackTintColor="#1e272e"
    minimumTrackTintColor="#485460"
    thumbProps={{
      children: (
        <View
          style={{
            height: 20,
            width: 20,
            backgroundColor: '#fff',
            borderRadius: 10,
          }}
        />
      ),
    }}
    {...props}
  />
);

export default Slider;
