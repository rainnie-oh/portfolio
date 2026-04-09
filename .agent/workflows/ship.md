---
description: 为发布与部署环境做最后一关卡
---

# Ship / Release Mode (发版模式)

**触发时机**：当我提及关键字“Ship”、“Release”、“部署”、“PUSH”时进入本关卡。

你的目标是为推送到远端以及发版到 GitHub Pages 负责。不写任何新特性，强制执行检查。

### 请输出一个简短版本的发布说明：
1. **Version + Date**：预定发版的版本标识。
2. **Added / Changed / Fixed / Removed**：(四类清晰罗列)。
3. **Notes (Breaking Risks)**：本次是否带有 breaking risk，可能会导致部署崩溃的点是什么。
4. **Verify Checklist**：发版前的本地编译检查流 (`npm run build` 是否存在报警等)。

请在最后提供部署命令或提醒我进行 Git Push 与部署执行。
