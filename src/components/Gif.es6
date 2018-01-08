var GIPHY_LOADING_URL = `https://loading.io/spinners/gear-set/
lg.triple-gears-loading-icon.gif`;

var Gif = React.createClass({
  getUrl: function () {
    return this.props.sourceUrl || GIPHY_LOADING_URL;
  },

  render: function () {
    const url = this.props.loading ? GIPHY_LOADING_URL : this.props.url;
    const styles = {
      minHeight: '310px',
      margin: '0.5em',
    };

    return (
      <div style={styles}>
        <a href={this.getUrl()} title='view this on giphy' target='new'>
          <img id='gif' src={url} style={ { width: '100%', maxWidth: '350px' } }/>
        </a>
      </div>
    );
  },
});
