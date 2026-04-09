---
description: 执行高水准前端设计打磨 (Spatial, Typo, Motion, Polish)
---

# /design Workflow

本 Workflow 旨在将 AI 切换到“顶级前端设计师”模式，对页面进行像素级的打磨。当你需要提升已有页面的高级感、动效流畅度或排版严谨性时，请启动此流程。

## 1. 空间系统 (Spatial System)
- **4px 基准**：所有 `margin`, `padding`, `gap` 必须遵循 4px 步进系统（4, 8, 12, 16, 24, 32, 48, 64, 80, 128, 160）。
- **容器一致性**：检查全站对齐线，确保左右内边距在不同断点下保持逻辑统一。

## 2. 字体与排版 (Typography)
- **字阶比例**：使用 1.25 (Major Third) 或 1.33 (Perfect Fourth) 的字阶。
- **Line-height**：大标题（>32px）使用 1.05-1.1；正文（14-16px）使用 1.5-1.6。
- **权重对比**：通过字重（400 vs 500/600）而非仅仅通过字号来建立层级。
- **克制颜色**：主色使用 `--text-primary`，次要/说明信息严格使用 `--text-secondary`（带透明度）。

## 3. 动效与触感 (Motion & Feel)
- **统一缓动**：禁止使用 `ease`, `ease-in-out`。
- **机械感缓动**：推荐使用 `cubic-bezier(0.16, 1, 0.3, 1)` (Out Expo) 或 `cubic-bezier(0.76, 0, 0.24, 1)` (In Out Quat)。
- **微交互**：所有 Hover 状态必须包含过渡效果（通常为 0.2s - 0.35s）。
- **进场动画**：使用 `fadeUp` 或 `fadeScale` 配合交错延时 (Staggered Delay)。

## 4. 视觉打磨 (Visual Polish)
- **圆角管理**：全局遵循 `--radius` (16px)。嵌套内部元素圆角应略小（如容器 16px，内部图 8px）。
- **边框与阴影**：
    - 浅色模式使用极细的半透明边框 (`1px solid rgba(0,0,0,0.08)`)。
    - 深色模式使用发光效果 (`box-shadow: 0 0 14px rgba(255,255,255,0.05)`) 代替纯黑边框。
- **Glassmorphism**：在需要悬浮感的地方使用 `backdrop-filter: blur(12px)`。

## 执行步骤
1. **审查**：先通过 `view_file` 读取目标文件的 CSS。
2. **诊断**：指出不符合上述系统的“设计噪音”（如 ad-hoc 的间距、生硬的动画）。
3. **重构**：提交 `multi_replace_file_content` 进行一站式修复。
4. **验证**：通过 `get_screenshot` 确认视觉平衡。
