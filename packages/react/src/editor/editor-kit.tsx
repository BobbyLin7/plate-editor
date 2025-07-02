import type { Value } from 'platejs'
import type { TPlateEditor } from 'platejs/react'
import { useEditorRef } from 'platejs/react'
import { BasicBlocksKit } from '../plugins/basic-blocks-kit'

export const EditorKit: any[] = [
  ...BasicBlocksKit,
]

export type MyEditor = TPlateEditor<Value, any>

export const useEditor = (): MyEditor => useEditorRef<MyEditor>()
