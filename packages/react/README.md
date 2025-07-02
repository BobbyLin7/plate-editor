# `@plate-editor/react`

基于Plate的React编辑器

与官方版本不同的是，官方使用了类似`shadcn`的安装方式将编辑器代码安装到代码中。
而这个库则将`Plate`编辑器打包成一个组件。

好处是统一编辑器行为，便于在不同的项目中使用，便于维护。但也带来了缺点，缺点就是无法灵活的自定义编辑器的各种行为。

## 安装

```bash
npm install @plate-editor/react
# 或
pnpm add @plate-editor/react
# 或
yarn add @plate-editor/react
```

## 使用

### 基本用法

```tsx
import React from 'react'
import { PlateEditor } from '@plate-editor/react'
import '@plate-editor/react/styles'

function App() {
  return (
    <div>
      <h1>我的编辑器</h1>
      <PlateEditor />
    </div>
  )
}

export default App
```

### 自定义编辑器

```tsx
import React from 'react'
import { Plate } from 'platejs/react'
import { EditorKit, Editor, EditorContainer } from '@plate-editor/react'
import '@plate-editor/react/styles'

function CustomEditor() {
  return (
    <Plate plugins={EditorKit}>
      <EditorContainer>
        <Editor placeholder="开始输入..." />
      </EditorContainer>
    </Plate>
  )
}

export default CustomEditor
```

## 导出的组件和功能

### 主编辑器组件
- `PlateEditor` - 完整的编辑器组件

### 编辑器配置
- `EditorKit` - 编辑器插件配置
- `BasicBlocksKit` - 基本块级元素插件

### UI 组件
- `Editor` - 核心编辑器组件
- `EditorContainer` - 编辑器容器
- `ParagraphElement` - 段落节点
- `H1Element`, `H2Element`, `H3Element` - 标题节点
- `BlockquoteElement` - 引用块节点
- `HrElement` - 水平分割线节点

### 工具函数
- `cn` - CSS 类名合并工具
- `useEditor` - 编辑器实例 Hook

## 开发

### 运行测试

```bash
# 运行测试一次
pnpm test:run

# 监听模式运行测试
pnpm test:watch

# 运行测试并生成覆盖率报告
pnpm test:coverage

# 交互式运行测试
pnpm test
```

### 构建

```bash
pnpm build
```

## 测试

本包使用 Vitest 进行测试，配置包括：

- **测试框架**: Vitest
- **测试库**: @testing-library/react
- **环境**: jsdom
- **覆盖率**: v8 provider

### 测试结构

- `src/lib/__tests__/` - 工具函数测试
- `src/ui/__tests__/` - UI组件测试
- `src/editor/__tests__/` - 编辑器组件测试

### 测试配置

测试配置在 `vitest.config.ts` 中，包括：

- React插件支持JSX
- jsdom环境用于DOM测试
- 全局测试工具
- 多格式覆盖率报告（HTML、JSON、文本）
- 导入路径别名

### 覆盖率报告

覆盖率报告生成多种格式：
- 终端输出（文本）
- HTML报告在 `coverage/` 目录
- JSON报告用于CI/CD集成

## 参数设置
