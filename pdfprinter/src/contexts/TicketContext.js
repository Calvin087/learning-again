import React, { createContext, useState } from 'react'

export const TicketContext = createContext()

const TicketContextProvidor = (props) => {
    
    const [tickets, setTickets] = useState([{ // initial state
            id: "dave",
            title: "stan",
            issue: "pete",
            status: "completed"
    }])

    const addTicket = (ticket) => {
        setTickets([...tickets, ticket])
    }

    const removeTicket = (id) => {
        setTickets(tickets.filter(ticket => ticket.id !== id))
    }

    console.log(tickets);
    

        return (
            <TicketContext.Provider value={ {tickets, addTicket, removeTicket} }>
                {props.children}
            </TicketContext.Provider>
        )
    }

export default TicketContextProvidor