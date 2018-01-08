var App = React.createClass({
  displayName: 'App',

  getInitialState: function getInitialState() {
    return {
      loading: false,
      searchingText: '',
      gif: {}
    };
  },

  handleSearch: function handleSearch(searchingText) {
    var _this = this;

    this.setState({
      loading: true
    });

    this.getGif(searchingText).then(function (gif) {
      return _this.setState({
        loading: false,
        gif: gif,
        searchingText: searchingText
      });
    }).catch(function (error) {
      return console.error(error);
    });
  },

  getGif: function getGif(searchingText) {
    return new Promise(function (resolve, reject) {
      var url = GIPHY_API_URL + '/v1/gifs/random?api_key=' + GIPHY_PUB_KEY + '&tag=' + searchingText;
      var xhr = new XMLHttpRequest();
      xhr.onload = function () {
        if (xhr.status === 200) {
          var data = JSON.parse(xhr.responseText).data;
          var gif = {
            url: data.fixed_width_downsampled_url,
            sourceUrl: data.url
          };
          resolve(gif);
        } else {
          reject(new Error(xhr.statusText));
        }
      };

      xhr.onerror = function () {
        return reject(new Error('XMLHTTPRequest Error: ' + xhr.statusText));
      };

      xhr.open('GET', url);
      xhr.send();
    });
  },

  render: function render() {

    var styles = {
      margin: '0 auto',
      textAlign: 'center',
      width: '90%'
    };

    return React.createElement(
      'div',
      { style: styles },
      React.createElement(
        'h1',
        null,
        'Wyszukiwarka GIF\xF3w!'
      ),
      React.createElement(
        'p',
        null,
        'Znajd\u017A gifa na ',
        React.createElement(
          'a',
          { href: 'https://giphy.com' },
          'giphy'
        ),
        '. Naciskaj enter, aby pobra\u0107 kolejne gify. Powered by Giphy.'
      ),
      React.createElement(Search, { onSearch: this.handleSearch }),
      React.createElement(Gif, {
        loading: this.state.loading,
        url: this.state.gif.url,
        sourceUrl: this.state.gif.sourceUrl
      })
    );
  }
});