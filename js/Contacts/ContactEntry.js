import React from 'react';

class ContactEntry extends React.Component {
  constructor(props) {
    super(props);

    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(){
    this.props.selectContact(this.props.contact);
  }
  render() {
    return (
      <li onClick={this.handleSelect}>
        <a>{this.props.contact.name.first} {this.props.contact.name.last}</a>
      </li>
    )
  }
}

export default ContactEntry;
