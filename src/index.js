import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom'; //library
import SearchBar from './components/search_bar'; //file you made, therefore include relative path
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyBfN8VRPAD7Kzp5JceTnzIGpVmV1KWsM40';

class App extends Component { //this is a class -- creates instances of what gets rendered to the DOM
		constructor(props) {
			super(props);

			this.state = {
				videos: [],
				selectedVideo: null
			};

			this.videoSearch('surfboards');
}

		videoSearch(term) {
			
			YTSearch({key: API_KEY, term: term }, (videos) => {

			this.setState({ 
				videos: videos, // or this.setState({ videos }) <-- property and val both called videos
				selectedVideo: videos[0]
			});
		 }); 
		}

		render () {
			const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
			return (
				<div> 
					<SearchBar onSearchTermChange={videoSearch}/>
					<VideoDetail video={this.state.selectedVideo} />
					<VideoList 
					onVideoSelect={ selectedVideo => this.setState({ selectedVideo })}
					videos={this.state.videos} />
				</div>
			);
		}
}

ReactDOM.render(<App />, document.querySelector('.container'));




















