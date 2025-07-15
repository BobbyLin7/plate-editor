import { BaseAlignKit } from '../plugins/align-base-kit'
import { BaseBasicBlocksKit } from '../plugins/basic-blocks-base-kit'
import { BaseBasicMarksKit } from '../plugins/basic-marks-base-kit'
import { MarkdownKit } from '../plugins/markdown-kit'

export const BaseEditorKit = [
  ...BaseBasicBlocksKit,
  ...BaseBasicMarksKit,
  ...BaseAlignKit,
  ...MarkdownKit,
]
