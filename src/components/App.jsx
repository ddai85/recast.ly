class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: exampleVideoData[0],
      collection: exampleVideoData
    };

    this.onVideoEntryClick = this.onVideoEntryClick.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  onVideoEntryClick(mainVideo) {
    this.setState({currentVideo: mainVideo});
  }

  onSearch(newCollection) {
    this.setState({currentVideo: newCollection[0]});
    this.setState({collection: newCollection});
  }

  // componentDidMount() {

  // }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div>
              <Search onSearch={this.onSearch}/>
            </div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div>
              <VideoPlayer video={this.state.currentVideo}/>
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
