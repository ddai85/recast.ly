class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ''
    };

    this.searchYouTube = this.searchYouTube.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.keyPress = this.keyPress.bind(this);
  }

  keyPress(event) {
    if (event.charCode === 13) {
      this.searchYouTube();
    }
  }

  handleChange(event) {
    this.setState({query: event.target.value});
  }

  searchYouTube() {
    var context = this;
    $.ajax({
      type: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      data: {
        key: window.YOUTUBE_API_KEY,
        maxResults: 5,
        q: context.state.query, 
        type: 'video',
        part: 'snippet'
      },
      dataType: 'json',
      success: function(data) {
        console.log('success!', data);
        var dataArray = data.items;

        context.props.onSearch(dataArray);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log('failure', jqXHR, textStatus, errorThrown);
      }
    });
  }

  render() { 
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" value={this.state.query} onChange={this.handleChange} onKeyPress={this.keyPress}/>
        <button className="btn hidden-sm-down" onClick={this.searchYouTube}>
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div> 
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
