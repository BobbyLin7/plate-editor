'use client'

import { PlateEditor } from '@plate-editor/react'
import '@plate-editor/react/styles'


export default function Page() {
  return (
    <div className='flex min-h-screen justify-center items-center'>
      <PlateEditor />
    </div>
  )
}
