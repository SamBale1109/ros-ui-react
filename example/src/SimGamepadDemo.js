import { SimGamepad } from 'ros-ui-react';
import { ImageStream } from 'ros-ui-react';
import './App.css';
import './scss/style.scss';

function SimGamepadDemo() {
  return (
    <div className="App">
      <ImageStream src="http://192.168.2.158:8080/stream?topic=/video_topic" />
      <SimGamepad rosbridgeAddress="ws://192.168.2.158:9090"/>
    </div>
  );
}

export default SimGamepadDemo;
