import React, { useRef, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

function Room() {
    const { roomID } = useParams();
    const myMeetingRef = useRef(null);

    useEffect(() => {
        const myMeeting = async (element) => {
            const appID = 1526987355;
            const serverSecret = "9b5192433157e75381bdae4969075d08";
            const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(), "Priyanshu");

            const zp = ZegoUIKitPrebuilt.create(kitToken);
            zp.joinRoom({
                container: element,
                sharedLinks: [
                    {
                        name: 'copy link',
                        url: `https://cloudconnect-lwdi.onrender.com/room/${roomID}`
                    },

                ],
                scenario: {
                    mode: ZegoUIKitPrebuilt.OneONoneCall, // For 1-on-1 calls
                },
            });
        };

        if (myMeetingRef.current) {
            myMeeting(myMeetingRef.current);
        }
    }, [roomID]);

    return (
        <div ref={myMeetingRef}></div>
    );
}

export default Room;
