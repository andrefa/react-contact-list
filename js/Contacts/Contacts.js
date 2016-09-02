import React from 'react';

import ContactList from './ContactList';
import ContactDetails from './ContactDetails';

class Contacts extends React.Component {
  constructor(props) {
    super(props)

    this.handleSelected = this.handleSelected.bind(this);

    this.state = {
      contacts : [],
      selected : null
    }
  }
  componentDidMount() {
    fetch('http://api.randomuser.me/?results=25')
      .then((response) => {
        return response.json();
      })
      .then( ( { results } ) => {
        this.setState({
          contacts : results.sort(({name_a},{name_b}) => (name_a.first + name_a.last) > (name_b.first + name_b.last) ? 1 : -1)
        })
      });
  }
  handleSelected(contact) {
    this.setState({
      selected: contact
    });
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <ContactList contacts={this.state.contacts} selectContact={this.handleSelected}/>
          </div>
          <div className="col-md-8">
            <ContactDetails contact={this.state.selected}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Contacts;
