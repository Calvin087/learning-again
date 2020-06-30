import React, { useContext } from 'react'
import generatePDF from '../components/reportGenerator'
import { TicketContext } from '../contexts/TicketContext'

const Tickets = () => {

    const { tickets } = useContext(TicketContext)   
    
    // const processFormTickets = (newTicket) => {
    //   console.log(newTicket);
      
    // }


    //  similar to component did mount, calling api on route /tickets
    // useEffect(() => {
    //     const getAllTickets = async () => {
    //         try {
    //             const response = await axios.get ("http://localhost:3000/tickets")
    //             setTickets(response.data.tickets)
    //         } catch (err) {
    //             console.log(("Some error, dunno"));
    //         }
    //     }
    //     getAllTickets()
    // }, [])

    const reportTickets = tickets.filter(ticket => ticket.status === "completed")

    return (
        <div>
            <div className="container mb-4 mt-4 p-3">
                <div className="row">
                    <button
                            className="btn btn-primary"
                            onClick={() => generatePDF(reportTickets)}
                        >
                            Generate Tickets Yo
                        </button>
                </div>
            </div>
        </div>
    )

}

export default Tickets

// We also have a reportTickets variable that filters our tickets
// to get only the tickets that have the status of completed.

// A few points about our <Tickets /> component.
// When our component loads, we make a request to
// http://localhost:3000/tickets to fetch all our tickets.
// We then save them to the tickets state. And finally,
// we pass them as a prop to the <TicketsComponent /> to render the tickets in the DOM.