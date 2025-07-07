'use client'

import { Plate, usePlateEditor } from 'platejs/react'
import * as React from 'react'

import { Editor, EditorContainer } from '../ui/editor'
import { EditorKit } from './editor-kit'

export function PlateEditor(): React.JSX.Element {
  const editor = usePlateEditor({
    plugins: EditorKit,
    value: [
      {
        children: [{ text: 'Welcome to the Plate Playground!' }],
        type: 'h1',
      },
    ],
  })

  return (
    <Plate editor={editor}>
      <EditorContainer>
        <Editor />
      </EditorContainer>
    </Plate>
  )
}
