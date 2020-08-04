import * as React from 'react'
import { useCopyText } from './useCopyText'

import { Button } from '../Button'
import { icons } from '../Icon'

const { CheckIcon, LinkIcon } = icons

export default { title: 'Utilities|useCopyText' }

export const useCopyTextFirstStory = () => {
  const copyRef: any = React.useRef()
  const [copy, copied]: any = useCopyText(copyRef, 2000)

  return (
    <>
      <div ref={copyRef}>This text will be copied</div>
      <Button onClick={copy} mt='sm'>
        {copied ? (
          <>
            <CheckIcon />
            <span>Copied!</span>
          </>
        ) : (
          <>
            <LinkIcon />
            <span>Copy text</span>
          </>
        )}
      </Button>
    </>
  )
}
