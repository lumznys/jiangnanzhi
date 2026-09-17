# old/ — 旧路由归档（2026-09 链路简化）

本文件夹是路径简化重构前的旧路由源文件，**不参与构建**（位于项目根目录，不在 `src/pages/` 下），仅作过渡期备查。

## 路径变更对照

| 旧路径 | 新路径 | 过渡方式 |
|---|---|---|
| `/tea-knowledge/knowledge-article/[slug]/` | `/tea-knowledge/[slug]/` | `_redirects` 301（通配） |
| `/brand-news/qa/[id]/` | `/brand-news/[id]/` | `_redirects` 301（逐条） |
| `/brand-news/news/[slug]/` | `/brand-news/[id]/` | `_redirects` 301（逐条） |
| `/brand-news/qa/6/`（茶博会存档页） | `/brand-news/2026-spring-tea-expo/` | `_redirects` 301（不再生成 noindex 存档页） |

## 归档文件

- `pages/tea-knowledge/knowledge-article/[slug].astro` → 现为 `src/pages/tea-knowledge/[slug].astro`
- `pages/brand-news/qa/[id].astro` → 与 news 合并为 `src/pages/brand-news/[id].astro`
- `pages/brand-news/news/[slug].astro` → 同上

详情页共用的 `CollectionArticle.astro` 布局中，原 qa/6 的 legacy/noindex 逻辑已随存档页一并移除。

确认线上 301 全部生效且搜索收录迁移完成后，可整体删除本文件夹。
