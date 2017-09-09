var ToggleAutoplay = (props) => (
  <div className="divSwitch">
  <div className="autoplay">Autoplay:</div>
    <label className="switch">
      <input type="checkbox" onClick={props.toggleHandler}></input>
      <span className="slider round"></span>
    </label>
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated


// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.ToggleAutoplay = ToggleAutoplay;
