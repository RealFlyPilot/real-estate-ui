import { ClubhouseClient, T_TicketParams } from './clubhouse'

export const ClubhouseService = () => {
  const urbanManagerID =
    process.env.REACT_APP_CLUBHOUSE_URBAN_MANAGER_PROJECT_ID

  const listTickets = async () => {
    const tickets = await ClubhouseClient.listStories(urbanManagerID)
    console.log('tickets: ', tickets)
  }
  const submitTicket = async (ticketParams: T_TicketParams): Promise<any> => {
    const newTicket = await ClubhouseClient.createStory(urbanManagerID)
    console.log('newTicket: ', newTicket)
    return newTicket
  }
  return { submitTicket, listTickets }
}
