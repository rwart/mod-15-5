//var GIPHY_LOADING_URL = 'http://www.ifmo.ru/images/loader.gif';
var GIPHY_LOADING_URL = 'https://loading.io/spinners/gear-set/lg.triple-gears-loading-icon.gif';
var styles = {
  minHeight: '310px',
  margin: '0.5em'
};

Gif = React.createClass({
  displayName: 'Gif',

  getUrl: function getUrl() {
    return this.props.sourceUrl || GIPHY_LOADING_URL;
  },

  render: function render() {
    var url = this.props.loading ? GIPHY_LOADING_URL : this.props.url;

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