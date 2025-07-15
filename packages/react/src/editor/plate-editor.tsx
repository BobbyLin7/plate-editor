'use client'

import type { PlateEditorProps } from '@/types'
import { Plate, usePlateEditor } from 'platejs/react'
import * as React from 'react'

import { cn } from '@/lib/utils'
import { Editor, EditorContainer } from '../ui/editor'
import { EditorKit } from './editor-kit'

export function PlateEditor({
  // 核心配置
  value,
  defaultValue = [],
  readOnly = false,
  disabled = false,
  placeholder,
  id,

  // 样式配置
  variant = 'default',
  containerVariant = 'default',
  size,
  theme,
  className,
  style,

  // 行为配置
  behavior = {},
  plugins = {},
  performance = {},

  // 事件处理
  onChange,
  onFocus,
  onBlur,
  onKeyDown,
  onReady,

  // 高级配置
  plateProps,
  renderElement,
  renderLeaf,
  editorRef,
  containerRef,
  contentRef,

  // 无障碍支持
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedby,
  role = 'textbox',
  'aria-required': ariaRequired,
  'aria-invalid': ariaInvalid,

  // 开发配置
  debug = false,
  showPerformanceMonitor = false,
}: PlateEditorProps): React.JSX.Element {
  // 合并插件配置
  const mergedPlugins = React.useMemo(() => {
    const { plugins: customPlugins = [], enableBasicBlocks = true, disabledPlugins = [] } = plugins

    let allPlugins = enableBasicBlocks ? [...EditorKit, ...customPlugins] : customPlugins

    if (disabledPlugins.length > 0) {
      allPlugins = allPlugins.filter(plugin => !disabledPlugins.includes(plugin.key))
    }

    return allPlugins
  }, [plugins])

  const editor = usePlateEditor({
    plugins: mergedPlugins,
    value: value ?? defaultValue,
    id,
    ...plateProps,
  })

  // 处理编辑器准备就绪
  React.useEffect(() => {
    if (editor && onReady) {
      onReady(editor)
    }
  }, [editor, onReady])

  // 设置编辑器引用
  React.useEffect(() => {
    if (editorRef && editor) {
      editorRef.current = editor
    }
  }, [editor, editorRef])

  // 处理值变化
  React.useEffect(() => {
    if (onChange && editor) {
      const handleChange = () => {
        onChange(editor.children)
      }

      // 监听编辑器变化
      editor.onChange = handleChange

      return () => {
        editor.onChange = undefined
      }
    }
  }, [editor, onChange])

  // 构建容器样式
  const containerClassName = React.useMemo(() => {
    const baseClasses = []

    if (size?.width) {
      baseClasses.push(`w-[${size.width}]`)
    }
    if (size?.height) {
      baseClasses.push(`h-[${size.height}]`)
    }
    if (size?.minHeight) {
      baseClasses.push(`min-h-[${size.minHeight}]`)
    }
    if (size?.maxHeight) {
      baseClasses.push(`max-h-[${size.maxHeight}]`)
    }

    if (disabled) {
      baseClasses.push('opacity-50 cursor-not-allowed')
    }

    return cn(baseClasses, theme?.containerClassName, className)
  }, [size, disabled, theme?.containerClassName, className])

  // 构建编辑器样式
  const editorClassName = React.useMemo(() => {
    return cn(theme?.editorClassName)
  }, [theme?.editorClassName])

  // 构建编辑器属性
  const editorProps = React.useMemo(() => {
    const props: any = {
      variant,
      disabled,
      placeholder,
      'className': editorClassName,
      'ref': contentRef,
      'data-testid': debug ? 'plate-editor-content' : undefined,
      // 无障碍支持
      'aria-label': ariaLabel,
      'aria-describedby': ariaDescribedby,
      role,
      'aria-required': ariaRequired,
      'aria-invalid': ariaInvalid,
    }

    // 添加事件处理器
    if (onFocus)
      props.onFocus = onFocus
    if (onBlur)
      props.onBlur = onBlur
    if (onKeyDown)
      props.onKeyDown = onKeyDown

    // 添加行为配置
    if (behavior?.autoFocus)
      props.autoFocus = true
    if (behavior?.spellCheck !== undefined)
      props.spellCheck = behavior.spellCheck

    return props
  }, [
    variant,
    disabled,
    placeholder,
    editorClassName,
    contentRef,
    debug,
    ariaLabel,
    ariaDescribedby,
    role,
    ariaRequired,
    ariaInvalid,
    onFocus,
    onBlur,
    onKeyDown,
    behavior,
  ])

  // 应用自定义 CSS 变量
  const containerStyle = React.useMemo(() => {
    return {
      ...style,
      ...theme?.cssVariables,
    }
  }, [style, theme?.cssVariables])

  return (
    <div
      ref={containerRef}
      className={containerClassName}
      style={containerStyle}
      data-testid={debug ? 'plate-editor-container' : undefined}
    >

      {/* 编辑器 */}
      <Plate
        editor={editor}
        readOnly={readOnly}
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        {...plateProps}
      >
        <EditorContainer
          variant={containerVariant}
        >
          <Editor {...editorProps} />
        </EditorContainer>
      </Plate>

      {/* 性能监控 */}
      {showPerformanceMonitor && debug && (
        <div className="mt-2 p-2 bg-gray-100 rounded text-xs">
          <div>
            Editor ID:
            {editor?.id}
          </div>
          <div>
            Plugins:
            {mergedPlugins.map((plugin: any) => plugin.key).join(', ')}
          </div>
          <div>
            Performance:
            {JSON.stringify(performance)}
          </div>
        </div>
      )}
    </div>
  )
}
