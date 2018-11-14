import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props) {
  return (
    <div className="this">
      <style jsx>{`
        div.this {
          background-color: red;
        }
      `}</style>
      <h3>{props.location} - {props.names}</h3>
      <p><em>{props.issue}</em></p>
      <hr/>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string
};

export default Ticket;