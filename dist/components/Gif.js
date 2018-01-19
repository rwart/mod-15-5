var GIPHY_LOADING_URL = 'https://loading.io/spinners/gear-set/\nlg.triple-gears-loading-icon.gif';

var Gif = React.createClass({
  displayName: 'Gif',

  getUrl: function getUrl() {
    return this.props.sourceUrl || GIPHY_LOADING_URL;
  },

  render: function render() {
    var url = this.props.loading ? GIPHY_LOADING_URL : this.props.url;
    var styles = {
      minHeight: '310px',
      margin: '0.5em'
    };

    return React.createElement(
      'div',
      { style: styles },
      React.createElement(
        'a',
        { href: this.getUrl(), title: 'view this on giphy', target: 'new' },
        React.createElement('img', { id: 'gif', src: url, style: { width: '100%', maxWidth: '350px' } })
      )
    );
  }
});