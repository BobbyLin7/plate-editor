'use client'

import dynamic from 'next/dynamic'

// 使用动态导入禁用SSR，避免hydration错误
const PlateEditor = dynamic(
  () => import('@plate-editor/react').then((mod) => ({ default: mod.PlateEditor })),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center h-[400px] border border-border my-20 bg-background">
        <div className="text-muted-foreground">编辑器加载中...</div>
      </div>
    ),
  }
)

export default function Page() {
  return (
    <div className='min-h-screen mx-auto max-w-screen-lg'>
      <PlateEditor
        variant="demo"
        size={{ height: '400px' }}
        theme={{
          containerClassName: 'border border-border my-20',
          cssVariables: { '--editor-font-size': '16px' },
        }}
        showPerformanceMonitor={true}
        debug={true}
      />
    </div>
  )
}
