import { useEffect, useRef } from 'react';

const YouTubePlayer = ({ setIsPlaying }) => {
    const playerRef = useRef(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://www.youtube.com/iframe_api';
        script.async = true;
        document.body.appendChild(script);

        window.seekToTime = (minutes, seconds) => {
            if (playerRef.current && playerRef.current.seekTo) {
                const timeInSeconds = minutes * 60 + seconds;
                playerRef.current.seekTo(timeInSeconds, true);
                playerRef.current.playVideo();
                console.log(`Seeking to ${minutes}:${seconds}`);
            } else {
                console.log('Player not ready yet');
            }
        };

        window.onYouTubeIframeAPIReady = () => {
            playerRef.current = new window.YT.Player('youtube-player', {
                videoId: 'AjLR56Lpyco',
                height: '360',
                width: '100%',
                playerVars: {
                    controls: 1,
                    modestbranding: 1,
                    rel: 0,
                },
                events: {
                    onReady: () => {
                        console.log('Video is ready to play');
                    },
                    onStateChange: (event) => {
                        if (event.data === window.YT.PlayerState.PLAYING) {
                            setIsPlaying(true);
                        } else {
                            setIsPlaying(false);
                        }
                    },
                },
            });
        };

        return () => {
            delete window.seekToTime;
            delete window.onYouTubeIframeAPIReady;
            const scriptElement = document.querySelector('script[src="https://www.youtube.com/iframe_api"]');
            if (scriptElement) document.body.removeChild(scriptElement);
            if (playerRef.current) {
                playerRef.current.destroy();
                playerRef.current = null;
            }
        };
    }, [setIsPlaying]);

    return (
        <div style={{ width: '100%', maxWidth: '640px' }}>
            <div id="youtube-player"></div>
        </div>
    );
};

export default YouTubePlayer;
