import React from 'react'
import { useParams} from 'react-router-dom';
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'

const RoomPage= () => {
  const { roomId } = useParams();
  const myMeeting = async (element) => {

    // generate Kit Token
    const appID = 913326630;
    const serverSecret = "e99002123fe95540e35a0b75c03754f1";
    const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      Date.now().toString(),
      'Sanskrit Gupta');

    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    // start the call
    zp.joinRoom({
           container: element,
           scenario: {
            mode: ZegoUIKitPrebuilt.VideoConference,
           },
      });
     };
  return (
    <div className='room-page' ref={myMeeting} style={{width: '100vw', height: '100vh'}}></div>
  )
}

export default RoomPage