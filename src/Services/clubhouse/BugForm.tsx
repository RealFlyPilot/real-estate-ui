import React from 'react'
import {
  ConnectedField,
  InputText,
  Form,
  Button,
  RadioGroup,
  RadioTab
} from '../..'
import { ClubhouseService } from './clubhouse.service'

export interface BugFormProps {}

export const BugForm: React.SFC<BugFormProps> = () => {
  const { listTickets, submitTicket } = ClubhouseService()
  const [formState, setFormState] = React.useState({
    ticketTitle: '',
    ticketDescription: '',
    ticketSeverity: '',
    ticketType: ''
  })
  const handleChange = ({ target: { name, value } }) => {
    setFormState((formstate) => ({
      ...formState,
      [name]: value
    }))
  }

  const handleSubmit = async () => {
    await submitTicket({
      name: formState.ticketTitle
    }).then((res) => {
      console.log('res: ', res)
    })
  }

  React.useEffect(() => {
    listTickets().then((res) => {
      console.log('res: ', res)
    })
  }, [])
  return (
    <Form initialValues={{ ...formState }} onSubmit={handleSubmit}>
      <ConnectedField
        name='ticketTitle'
        onChange={handleChange}
        component={InputText}
        placeholder={`What's the bug?`}
        label='Ticket Title'
        required
      />
      <ConnectedField
        name='ticketDescription'
        onChange={handleChange}
        component={InputText}
        placeholder={`Describe the issue`}
        label='Ticket Description'
        required
      />
      <ConnectedField
        component={RadioGroup}
        flexDirection='row'
        label='Severity'
        mb='xl'
        name='ticketSeverity'
        onChange={handleChange}
        options={[
          { label: 'High', value: 'high' },
          { label: 'Moderate', value: 'moderate' },
          { label: 'Low', value: 'low' }
        ]}
        required
      />
      <ConnectedField
        component={RadioGroup}
        label='Choose a ticket type'
        mb='xl'
        name='ticketType'
        onChange={handleChange}
        options={[
          { label: 'Chore', value: 'chore' },
          { label: 'Bug', value: 'bug' },
          { label: 'Feature', value: 'feature' }
        ]}
        renderOption={RadioTab}
        required
        width={1 / 3}
      />
      <Button type='submit'>Submit</Button>
    </Form>
  )
}
