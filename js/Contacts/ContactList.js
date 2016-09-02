import React from 'react';

import ContactSearch from './ContactSearch';
import ContactEntry from './ContactEntry';

class ContactList extends React.Component {
  constructor(props) {
    super(props);

    this.handleFilter = this.handleFilter.bind(this);
    this.filter = this.filter.bind(this);

    this.state = {
      filterText : ''
    };
  }
  handleFilter(filterText){
    this.setState({
      filterText : filterText
    });
  }
  filter() {
    if (!this.state.filterText) return this.props.contacts;

    return this.props.contacts.filter( (item) => {
      return (item.name.first + ' ' + item.name.last).startsWith(this.state.filterText);
    });
  }
  render() {
    return (
      <div>
        <div className="row">
          <ContactSearch filterContacts={this.handleFilter}/>
        </div>
        <div className="row">
          <ul>
            { this.filter().map(  (contact) => <ContactEntry contact={contact} selectContact={this.props.selectContact}/>  ) }
          </ul>
        </div>
      </div>
    )
  }
}

export default ContactList;
