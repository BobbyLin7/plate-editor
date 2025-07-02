import { render } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import React from 'react'
import { Editor, EditorContainer } from '../editor'

// Mock platejs/react
vi.mock('platejs/react', () => ({
  PlateContainer: ({ children, className, ...props }: any) => (
    <div className={className} {...props}>
      {children}
    </div>
  ),
  PlateContent: ({ children, className, ...props }: any) => (
    <div className={className} {...props}>
      {children}
    </div>
  ),
}))

describe('editorContainer', () => {
  it('should render with default variant', () => {
    const { container } = render(<EditorContainer data-testid="editor-container" />)

    const editorContainer = container.firstChild as HTMLElement
    expect(editorContainer).toBeInTheDocument()
    expect(editorContainer).toHaveClass('ignore-click-outside/toolbar')
  })

  it('should render with demo variant', () => {
    const { container } = render(<EditorContainer variant="demo" data-testid="editor-container" />)

    const editorContainer = container.firstChild as HTMLElement
    expect(editorContainer).toBeInTheDocument()
    expect(editorContainer).toHaveClass('h-[650px]')
  })

  it('should render with comment variant', () => {
    const { container } = render(<EditorContainer variant="comment" data-testid="editor-container" />)

    const editorContainer = container.firstChild as HTMLElement
    expect(editorContainer).toBeInTheDocument()
  })

  it('should apply custom className', () => {
    const { container } = render(<EditorContainer className="custom-class" data-testid="editor-container" />)

    const editorContainer = container.firstChild as HTMLElement
    expect(editorContainer).toHaveClass('custom-class')
  })
})

describe('editor', () => {
  it('should render with default variant', () => {
    const { container } = render(<Editor data-testid="editor" />)

    const editor = container.firstChild as HTMLElement
    expect(editor).toBeInTheDocument()
    expect(editor).toHaveClass('group/editor')
  })

  it('should render with demo variant', () => {
    const { container } = render(<Editor variant="demo" data-testid="editor" />)

    const editor = container.firstChild as HTMLElement
    expect(editor).toBeInTheDocument()
  })

  it('should handle disabled state', () => {
    const { container } = render(<Editor disabled data-testid="editor" />)

    const editor = container.firstChild as HTMLElement
    expect(editor).toBeInTheDocument()
    expect(editor).toHaveAttribute('disabled')
  })

  it('should apply custom className', () => {
    const { container } = render(<Editor className="custom-editor-class" data-testid="editor" />)

    const editor = container.firstChild as HTMLElement
    expect(editor).toHaveClass('custom-editor-class')
  })

  it('should have correct display name', () => {
    expect(Editor.displayName).toBe('Editor')
  })
})
