import React from 'react';

class ContactDetails extends React.Component {
  render() {
    return (
      <div>
      {(this.props.contact
          ? <ul>
              <li><img src={this.props.contact.picture.medium}/></li>
              <li>{this.props.contact.name.first} {this.props.contact.name.last}</li>
            </ul>
          : <div>None selected.</div>
      )}
      </div>
    )
  }
}

export default ContactDetails;
