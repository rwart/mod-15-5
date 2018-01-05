Search = React.createClass({
  displayName: 'Search',

  getInitialState: function getInitialState() {
    return {
      searchingText: ''
    };
  },

  handleChange: function handleChange(event) {
    var searchingText = event.target.value;
    this.setState({
      searchingText: searchingText
    });

    if (searchingText.length > 2) {
      this.props.onSearch(searchingText);
    }
  },

  handleKeyUp: function handleKeyUp(event) {
    if (event.keyCode === 13) {
      this.props.onSearch(this.state.searchingText);
    }
  },

  render: function render() {
    var styles = {
      fontSize: '1.5em',
      width: '90%',
      maxWidth: '346px'
    };

    return React.createElement('input', {
      type: 'text',
      onChange: this.handleChange,
      onKeyUp: this.handleKeyUp,
      placeholder: 'Tutaj wpisz wyszukiwan\u0105 fraz\u0119',
      style: styles,
      value: this.state.searchingText
    });
  }
});