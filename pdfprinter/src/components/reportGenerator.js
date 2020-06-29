
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import { format } from 'date-fns' // docs says this formats dates

// attempt to create a component to use anyway to generate PDF
// i need a function that takes a ticket arg

const generatePDF = (tickets) => {
    let ticketData = null
    const doc = new jsPDF() // initialise new pdf

    const tableColumn = ["Id", "Title", "Issue", "Status", "Closed on"] // docs says to define columns and titles

    // empty array of rows to fill later a bit like Excel set up.
    const tableRows = []

    // for each function to put tickets object in an array
    // "tickets" comes from the arg (reminder)
    tickets.forEach(ticket => {
        ticketData = [
            ticket.id,
            ticket.title,
            ticket.request,
            ticket.status,
            format(new Date(ticketData), "yyyy-MM-dd")
        ]
        tableRows.push(ticketData)
    })

    // StartY is apparently the margin-top
    doc.autoTable(tableColumn, tableRows, { startY: 20 })
    const date = Date().split(" ")

    // This makes the file name based on the date that has been split on a space
    const dateStr = date[0] + date[1] + date[2] + date[3] + date[4] 

    // Ticket title and margin top + margin left
    doc.text("Closed tickets within the last 30 days.", 14, 15)

    // Name the PDF
    doc.save(`reports_${dateStr}.pdf`)
}

export default generatePDF

// This is just a function. nothing is rendered using jsx