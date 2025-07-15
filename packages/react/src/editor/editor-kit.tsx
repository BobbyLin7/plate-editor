import type { Value } from 'platejs'
import type { TPlateEditor } from 'platejs/react'
import { useEditorRef } from 'platejs/react'
import { FixedToolbarKit } from '@/plugins/fixed-toolbar-kit'
import { BasicBlocksKit } from '../plugins/basic-blocks-kit'

export const EditorKit: any[] = [
  ...BasicBlocksKit,

  // UI
  ...FixedToolbarKit,
]

export type MyEditor = TPlateEditor<Value, any>

export const useEditor = (): MyEditor => useEditorRef<MyEditor>()
