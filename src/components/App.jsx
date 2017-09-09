class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: exampleVideoData[0],
      collection: exampleVideoData,
      viewCount: '',
      description: '',
      likes: '',
      autoplay: false
    };

    this.onVideoEntryClick = this.onVideoEntryClick.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.onFirstSearch = this.onFirstSearch.bind(this);
    this.updateView = this.updateView.bind(this);
    this.onGetComment = this.onGetComment.bind(this);
    this.toggleHandler = this.toggleHandler.bind(this);
    
    this.options = {
      key: window.YOUTUBE_API_KEY,
      maxResults: 5,
      q: 'dogs', 
      type: 'video',
      part: 'snippet'
    };

    this.commentOptions = {
      key: window.YOUTUBE_API_KEY,
      maxResults: 1,
      part: 'snippet, statistics',
      id: ''
    };

  }
  
  toggleHandler() {
    this.setState({autoplay: !this.state.autoplay});
    console.log(this.state.autoplay);
  }

  onVideoEntryClick(mainVideo) {
    this.setState({currentVideo: mainVideo});
    this.commentOptions.id = mainVideo.id.videoId;
    getYouTubeComment(this.commentOptions, this.onGetComment);
  }
  
  updateView() {
    this.setState({currentVideo: this.state.collection[0]});
    this.commentOptions.id = this.state.collection[0].id.videoId;
    getYouTubeComment(this.commentOptions, this.onGetComment);
  }

  onSearch(newCollection) {
    this.setState({collection: newCollection});
    
  }

  onFirstSearch(newCollection) {
    this.setState({collection: newCollection});
    this.updateView();
  }
  
  onGetComment(newComment) {
    this.setState({viewCount: newComment.statistics.viewCount});
    this.setState({description: newComment.snippet.description});
    this.setState({likes: newComment.statistics.likeCount});
  }
  //comments callback function

  componentDidMount() {
    searchYouTube(this.options, this.onFirstSearch);
  }


  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div>
              <Search onSearch={this.onSearch} updateView={this.updateView}/>
            </div>
          </div>
          <div>
              <ToggleAutoplay toggleHandler={this.toggleHandler}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div>
              <VideoPlayer toggleAutoplay={this.state.autoplay} video={this.state.currentVideo} viewCount={this.state.viewCount} description={this.state.description} likes={this.state.likes}/>
            </div>
          </div>
          <div className="col-md-5">
            <div>
              <VideoList onVideoEntryClick={this.onVideoEntryClick} videos={this.state.collection}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
