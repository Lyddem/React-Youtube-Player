import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => { // takes the property video from props and declares it in a variable.
	// const video = props.video;	//<-- you don't need this line if you use the above ({video}) <-- ES6 
	const imageUrl = video.snippet.thumbnails.default.url;

	return (
		<li onClick={ () => onVideoSelect(video)}className = "list-group-item">
			<div className = "video-list media">
				<div className = "media-left">
					<img className = "media-object" src={video.snippet.thumbnails.default.url} />
				</div>

				<div className="media-body">
					<div className="media-heading">{video.snippet.title}</div>
				</div>
			</div>
		</li>
	);
}

export default VideoListItem;