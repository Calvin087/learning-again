import React, { useState } from 'react'

const TicketForm = ( { addTicket } ) => {

    const [newTicket, setNewTicket] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        addTicket(newTicket)  
        setNewTicket("")      
    }

    const onIdChange = e => {
        const id = e.target.value
        setNewTicket({...newTicket, id })
    }

    const onTitleChange = e => {
        const title = e.target.value
        setNewTicket({...newTicket, title })
    }

    const onIssueChange = e => {
        const issue = e.target.value
        setNewTicket({...newTicket, issue })
    }

    const onStatusChange = e => {
        const status = e.target.value
        setNewTicket({...newTicket, status })
    }

    return (
        <form className="form-group container" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="id"
                autoFocus
                value={newTicket.id}
                onChange={onIdChange}
                className="form-control"
            />
            
            <input
                type="text"
                placeholder="title"
                autoFocus
                value={newTicket.title}
                onChange={onTitleChange}
                className="form-control"
            />
            
            <input
                type="text"
                placeholder="issue"
                autoFocus
                value={newTicket.issue}
                onChange={onIssueChange}
                className="form-control"
            />
            
            <select
                value={newTicket.status}
                onChange={onStatusChange}
                className="form-control"
            >
                <option value="" disabled selected>Status</option>
                <option value="opened">Opened</option>
                <option value="in_progress">In Progress</option>
                <option value="completed">Completed</option>
            </select>
            
            <button className="btn btn-primary"> add ticket</button>
        </form>

    )

}

export default TicketForm