var App = React.createClass({
  getInitialState: () => ({
      loading: false,
      searchingText: '',
      gif: {},
    }),

  handleSearch: function (searchingText) {
    this.setState({
      loading: true,
    });

    this.getGif(searchingText)
    .then(gif => this.setState({
      loading: false,
      gif: gif,
      searchingText: searchingText,
    }))
    .catch(error => console.error(error));
  },

  getGif:  searchingText => new Promise((resolve, reject) => {
      const url = `${GIPHY_API_URL}/v1/gifs/random?api_key=${GIPHY_PUB_KEY}&tag=${searchingText}`;
      const xhr = new XMLHttpRequest();
      xhr.onload = () => {
        if (xhr.status === 200) {
          const data = JSON.parse(xhr.responseText).data;
          const gif = {
            url: data.fixed_width_downsampled_url,
            sourceUrl: data.url,
          };
          resolve(gif);
        } else {
          reject(new Error(xhr.statusText));
        }
      };

      xhr.onerror = () => reject(new Error(`XMLHTTPRequest Error: ${xhr.statusText}`));

      xhr.open('GET', url);
      xhr.send();
    }),

  render: function () {

    const styles = {
      margin: '0 auto',
      textAlign: 'center',
      width: '90%',
    };

    return (
      <div style={styles}>
        <h1>Wyszukiwarka GIFów!</h1>
        <p>Znajdź gifa na <a href='https://giphy.com'>giphy</a>. Naciskaj enter, aby pobrać kolejne gify. Powered by Giphy.</p>
        <Search onSearch={this.handleSearch} />
        <Gif
          loading={this.state.loading}
          url={this.state.gif.url}
          sourceUrl={this.state.gif.sourceUrl}
        />
      </div>
    );
  },
});
