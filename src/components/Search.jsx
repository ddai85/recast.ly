class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      key: window.YOUTUBE_API_KEY,
      maxResults: 5,
      q: '', 
      type: 'video',
      part: 'snippet'
    };

    this.handleChange = this.handleChange.bind(this);
    this.keyPress = this.keyPress.bind(this);
  }

  keyPress(event) {
    if (event.charCode === 13) {
      searchYouTube(this.state, this.props.onSearch);
    }
  }

  handleChange(event) {
    this.setState({q: event.target.value});
  }

  render() { 
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" onChange={this.handleChange} onKeyPress={this.keyPress}/>
        <button className="btn hidden-sm-down" onClick={() => {
          searchYouTube(this.state, this.props.onSearch);
        }}>
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div> 
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
