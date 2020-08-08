import * as React from 'react'
// import jsonTheme from '../Theme/base.theme.json'
import { JsonForm } from './JsonForm'
import { withTheme } from '@rjsf/core'

export default { title: 'Compositions|EditableThemeForm' }

export const JsonThemeFile = () => {
  return (
    <JsonForm
      schema={{
        title: 'A list of tasks',
        type: 'object',
        required: ['title'],
        properties: {
          title: {
            type: 'string',
            title: 'Task list title'
          },
          tasks: {
            type: 'array',
            title: 'Tasks',
            items: {
              type: 'object',
              required: ['title'],
              properties: {
                title: {
                  type: 'string',
                  title: 'Title',
                  description: 'A sample title'
                },
                details: {
                  type: 'string',
                  title: 'Task details',
                  description: 'Enter the task details'
                },
                done: {
                  type: 'boolean',
                  title: 'Done?',
                  default: false
                }
              }
            }
          }
        }
      }}
      onChange={(d) => console.log(d)}
      onError={(d) => console.log(d)}
      onSubmit={(d) => console.log(d)}
    />
  )
}

// export const CustomThemeForm = () => {
//   // @ts-ignore
//   const ThemedForm: any = withTheme(JSON.stringify(jsonTheme))
//   return (
//     <ThemedForm
//       schema={jsonTheme}
//       onChange={(d) => console.log(d)}
//       onError={(d) => console.log(d)}
//       onSubmit={(d) => console.log(d)}
//     />
//   )
// }
