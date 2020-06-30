import React, { Component, createContext, useState } from 'react'

export const TicketContext = createContext()

const TicketContextProvidor = (props) => {
    
    const [tickets, setTickets] = useState([{
            id: "dave",
            title: "stan",
            issue: "pete",
            status: "completed"
    }])

        return (
            <TicketContext.Provider value={{tickets}}>
                {props.children}
            </TicketContext.Provider>
        )
    }

export default TicketContextProvidor