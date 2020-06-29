import React from 'react'

const TicketsComponent = ({ tickets }) => {

    // assign bootstrap styling classes based on status
    const assignColourToTicketStatus = ticket => {
        if( ticket.status === "completed" ) {
            return "p-3 mb-2 bg-success text-white"
        } else if ( ticket.status === "in_progress" ) {
            return "p-3 mb-2 bg-warning text-dark"
        } else if ( ticket.status === "opened" ) {
            return "p-3 mb-2 bg-light text-dark"
        }
    }

    return (
        <div className="container">
            {tickets.length === 0 ? (
                "You don't have any tickets"
            ) : (
                <table className="table">
                    
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Issue</th>
                            <th scope="col">Status</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>

                    <tbody>
                        {tickets.map(ticket => (
                            <tr key={ticket.id}>
                                <td>{ticket.id}</td>
                                <td>{ticket.title}</td>
                                <td>{ticket.issue}</td>
                                <td className={assignColourToTicketStatus(ticket)}>
                                    {ticket.status}
                                </td>
                                <td>
                                    
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default TicketsComponent
// <Link to={`/ticket/${ticket.id}`}>See Comments</Link>