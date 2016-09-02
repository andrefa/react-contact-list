import React from 'react';

class ContactSearch extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      text : ''
    };
  }
  handleChange(event){
    this.setState({
      text: event.target.value
    });
    this.props.filterContacts(event.target.value);
  }
  render() {
    return (
      <div>
        <span>Type to search:</span>
        <input value={this.state.text} onChange={this.handleChange}/>
      </div>
    )
  }
}

export default ContactSearch;
