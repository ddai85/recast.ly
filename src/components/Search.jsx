class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.keyPress = this.keyPress.bind(this);
  }

  keyPress(event) {
    if (event.charCode === 13) {
      this.props.searchYouTube(this.state.query);
    }
  }

  handleChange(event) {
    this.setState({query: event.target.value});
  }

  render() { 
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" value={this.state.query} onChange={this.handleChange} onKeyPress={this.keyPress}/>
        <button className="btn hidden-sm-down" onClick={() => {
          this.props.searchYouTube(this.state.query);
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
