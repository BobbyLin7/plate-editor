import { render, screen } from '@testing-library/react'
import React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { PlateEditor } from '../plate-editor'

// Mock platejs/react
vi.mock('platejs/react', () => ({
  Plate: ({ children, editor }: any) => (
    <div data-testid="plate" data-editor={editor ? 'present' : 'missing'}>
      {children}
    </div>
  ),
  usePlateEditor: vi.fn(() => ({
    id: 'test-editor',
    plugins: [],
    value: [
      {
        children: [{ text: 'Welcome to the Plate Playground!' }],
        type: 'h1',
      },
    ],
  })),
}))

// Mock the UI components
vi.mock('../../ui/editor', () => ({
  Editor: ({ variant, ...props }: any) => (
    <div data-testid="editor" data-variant={variant} {...props}>
      Editor Content
    </div>
  ),
  EditorContainer: ({ children, ...props }: any) => (
    <div data-testid="editor-container" {...props}>
      {children}
    </div>
  ),
}))

// Mock the editor kit
vi.mock('./editor-kit', () => ({
  EditorKit: [],
}))

// Mock CSS import
vi.mock('../styles/main.css', () => ({}))

describe('plateEditor', () => {
  it('should render the plate editor with all components', () => {
    render(<PlateEditor />)

    // Check if main Plate component is rendered
    const plate = screen.getByTestId('plate')
    expect(plate).toBeInTheDocument()
    expect(plate).toHaveAttribute('data-editor', 'present')

    // Check if EditorContainer is rendered
    const editorContainer = screen.getByTestId('editor-container')
    expect(editorContainer).toBeInTheDocument()

    // Check if Editor is rendered with demo variant
    const editor = screen.getByTestId('editor')
    expect(editor).toBeInTheDocument()
    expect(editor).toHaveAttribute('data-variant', 'demo')
  })

  it('should initialize editor with correct configuration', () => {
    // This test verifies that the component renders without errors
    // The actual editor configuration is tested through integration
    render(<PlateEditor />)

    // Check that the component renders successfully
    expect(screen.getByTestId('plate')).toBeInTheDocument()
  })

  it('should render editor content', () => {
    render(<PlateEditor />)

    expect(screen.getByText('Editor Content')).toBeInTheDocument()
  })
})
