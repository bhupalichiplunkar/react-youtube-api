import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './../components/search_bar';
import VideoList from './../components/video_list';
import VideoBox from './../components/video_box';
import YoutubeSearch from 'youtube-api-search';
import _ from 'lodash'

const API_KEY = 'AIzaSyCrEL-j6sb5QQ44wnN-E_9-sOluOusVzrE';

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos : [],
      selectedVideo : null
    }

    this.onVideoSearch('judwa')

  }

  onVideoSearch(term){
    YoutubeSearch({ key : API_KEY, term : term}, (videos) => {
      this.setState({
        videos :videos,
        selectedVideo : videos[0]
      })
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {this.onVideoSearch(term)}, 300)

    return (
      <div>
        <SearchBar onSearchTermChange = { videoSearch} />
        <VideoBox video = {this.state.selectedVideo} />
        <VideoList
        onVideoSelect = { selectedVideo => this.setState({selectedVideo})}
        videos = { this.state.videos } />
      </div>
    );
  }
}
