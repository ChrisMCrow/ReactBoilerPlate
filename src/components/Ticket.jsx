import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props) {
  if (props.currentRouterPath === '/admin') {
    return (
      <div onClick={() => {props.onTicketSelection(props.ticketId);}}>
        {ticketInformation}
      </div>
    );
  }
  return (
    <div className="this">
      <style jsx>{`
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
  issue: PropTypes.string,
  currentRouterPath: PropTypes.string,
  onTicketSelection: PropTypes.func,
  ticetId: PropTypes.string
};

export default Ticket;