import type { Value } from 'platejs'
import type { PlateProps } from 'platejs/react'

// 编辑器变体类型
export type EditorVariant = 'default' | 'demo' | 'ai' | 'aiChat' | 'comment' | 'fullWidth' | 'none' | 'select'
export type EditorContainerVariant = 'default' | 'demo' | 'comment' | 'select'

// 编辑器大小配置
export interface EditorSize {
  width?: string | number
  height?: string | number
  minHeight?: string | number
  maxHeight?: string | number
}

// 编辑器主题配置
export interface EditorTheme {
  /** 编辑器容器的自定义类名 */
  containerClassName?: string
  /** 编辑器内容区域的自定义类名 */
  editorClassName?: string
  /** 自定义 CSS 变量 */
  cssVariables?: Record<string, string>
}

// 编辑器行为配置
export interface EditorBehavior {
  /** 是否自动获取焦点 */
  autoFocus?: boolean
  /** 是否启用拼写检查 */
  spellCheck?: boolean
  /** 是否启用自动保存 */
  autoSave?: boolean
  /** 自动保存间隔（毫秒） */
  autoSaveInterval?: number
  /** 是否启用撤销/重做 */
  enableHistory?: boolean
  /** 历史记录最大长度 */
  historySize?: number
}

// 编辑器插件配置
export interface EditorPlugins {
  /** 自定义插件列表 */
  plugins?: any[]
  /** 是否启用基本块级元素插件 */
  enableBasicBlocks?: boolean
  /** 禁用的插件键列表 */
  disabledPlugins?: string[]
  /** 插件配置覆盖 */
  pluginOverrides?: Record<string, any>
}

// 编辑器性能优化配置
export interface EditorPerformance {
  /** 是否启用虚拟滚动 */
  enableVirtualScroll?: boolean
  /** 是否启用懒加载 */
  enableLazyLoading?: boolean
  /** 节流延迟（毫秒） */
  throttleDelay?: number
  /** 防抖延迟（毫秒） */
  debounceDelay?: number
}

// 主要的 PlateEditor 属性接口
export interface PlateEditorProps {
  // === 核心配置 ===
  /** 编辑器的初始值 */
  'value'?: Value
  /** 编辑器的默认值 */
  'defaultValue'?: Value
  /** 是否为只读模式 */
  'readOnly'?: boolean
  /** 是否禁用编辑器 */
  'disabled'?: boolean
  /** 占位符文本 */
  'placeholder'?: string
  /** 编辑器的唯一标识符 */
  'id'?: string
  /** 编辑器名称，用于表单提交 */
  'name'?: string

  // 编辑器组件
  'fixedToolbar'?: boolean

  // === 样式配置 ===
  /** 编辑器变体 */
  'variant'?: EditorVariant
  /** 编辑器容器变体 */
  'containerVariant'?: EditorContainerVariant
  /** 编辑器尺寸配置 */
  'size'?: EditorSize
  /** 编辑器主题配置 */
  'theme'?: EditorTheme
  /** 自定义类名 */
  'className'?: string
  /** 自定义样式 */
  'style'?: React.CSSProperties

  // === 行为配置 ===
  /** 编辑器行为配置 */
  'behavior'?: EditorBehavior
  /** 编辑器插件配置 */
  'plugins'?: EditorPlugins
  /** 编辑器性能配置 */
  'performance'?: EditorPerformance

  // === 事件处理 ===
  /** 编辑器内容变化时的回调 */
  'onChange'?: (value: Value) => void
  /** 编辑器获得焦点时的回调 */
  'onFocus'?: (event: React.FocusEvent) => void
  /** 编辑器失去焦点时的回调 */
  'onBlur'?: (event: React.FocusEvent) => void
  /** 编辑器按键事件的回调 */
  'onKeyDown'?: (event: React.KeyboardEvent) => void
  /** 编辑器准备就绪时的回调 */
  'onReady'?: (editor: any) => void
  /** 编辑器出错时的回调 */
  'onError'?: (error: Error) => void
  /** 选择内容变化时的回调 */
  'onSelectionChange'?: (selection: any) => void

  // === 高级配置 ===
  /** 传递给 Plate 组件的属性 */
  'plateProps'?: Omit<PlateProps, 'editor' | 'readOnly' | 'renderElement' | 'renderLeaf'>
  /** 自定义渲染元素函数 */
  'renderElement'?: PlateProps['renderElement']
  /** 自定义渲染叶子节点函数 */
  'renderLeaf'?: PlateProps['renderLeaf']
  /** 编辑器实例引用 */
  'editorRef'?: React.RefObject<any>
  /** 编辑器容器引用 */
  'containerRef'?: React.RefObject<HTMLDivElement>
  /** 编辑器内容区域引用 */
  'contentRef'?: React.RefObject<HTMLDivElement>

  // === 无障碍支持 ===
  /** 无障碍标签 */
  'aria-label'?: string
  /** 无障碍描述 */
  'aria-describedby'?: string
  /** 角色描述 */
  'role'?: string
  /** 是否为必填字段 */
  'aria-required'?: boolean
  /** 是否为无效状态 */
  'aria-invalid'?: boolean

  // === 开发配置 ===
  /** 是否启用调试模式 */
  'debug'?: boolean
  /** 是否显示性能监控 */
  'showPerformanceMonitor'?: boolean
}
