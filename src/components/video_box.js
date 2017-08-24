import React from 'react';

const VideoBox = ({video}) => {
  if(!video){
    return <div> Loading ... </div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="col-md-8 video-details">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src = {url}></iframe>
      </div>
      <div className="details">
        <div className="video-title">{video.snippet.title}</div>
        <div className="video-description">{video.snippet.description}</div>
      </div>
    </div>
  )
}

export default VideoBox;
