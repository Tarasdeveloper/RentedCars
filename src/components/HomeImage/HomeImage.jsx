import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import {
  Backdrop,
  BackgroundImg,
  CloseBtn,
  PlayBtn,
  PlaySvg,
} from './HomeImage.styled';
import sprite from '../../assets/sprite.svg';

const VideoImage = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleClose = () => {
    setShowVideo(false);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Escape') {
      handleClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  });

  return (
    <BackgroundImg>
      {!showVideo && (
        <PlayBtn onClick={() => setShowVideo(true)}>
          <PlaySvg>
            <use href={`${sprite}#play-btn`} />
          </PlaySvg>
        </PlayBtn>
      )}
      {showVideo && (
        <Backdrop
          onClick={handleClose}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <CloseBtn onClick={handleClose}>&#10060;</CloseBtn>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=ACJjhSBhsGQ&t=1s"
              width="900px"
              height="506px"
              playing
              controls
            />
          </div>
        </Backdrop>
      )}
    </BackgroundImg>
  );
};

export default VideoImage;
