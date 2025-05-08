import React, { useRef, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

function Room() {
    const { roomID } = useParams();
    const myMeetingRef = useRef(null);

    useEffect(() => {
        const myMeeting = async (element) => {
            const appID = 634323875;
            const serverSecret = "9ece950cd71483ede4ff750aaddff7d9";
            const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(), "Priyanshu keshari");

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
