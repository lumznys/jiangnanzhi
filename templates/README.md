# 品牌资讯发文指南（常见问题 + 企业动态）

两个栏目都是「框架 + Markdown 文章」结构：**网页是自动生成的，加文章只需要加 .md 文件**。

## 发文三步

1. 从 `templates/qa-template.md`（常见问题）或 `templates/news-template.md`（企业动态）复制一份模板
2. 填好顶部信息（title / description / order 或 date），正文用 Markdown 写，存进对应文件夹：
   - 常见问题 → `src/content/qa/`，文件名用编号：`6.md`、`7.md`…（网址 `/brand-news/qa/6/`）
   - 企业动态 → `src/content/news/`，文件名用英文短横线：`2026-autumn-tea-fair.md`（网址 `/brand-news/news/2026-autumn-tea-fair/`）
3. 推送到 GitHub → Cloudflare 自动重建上线

## 自动更新的内容（无需手工改动）

- `/brand-news/qa/`、`/brand-news/news/` 列表页（统一按日期倒序：最新的排最上方）
- `/brand-news/` 总栏目页（两个板块的文章卡片）
- `/brand-news/qa/`、`/brand-news/qa/N/` 等详情页（含 URL 全部自动生成）
- FAQPage 结构化数据（自动收录所有问答的 title + description）
- NewsArticle / Article 结构化数据、面包屑
- `sitemap-0.xml`（新页面自动进入 sitemap）

## 规则与红线

- qa 的 `description` 必须 60-80 个字符（构建时自动校验，不合格会报错）；`date` 强烈建议填写（YYYY-MM-DD，列表按它倒序排列）
- news 的 `date` 必填（YYYY-MM-DD）
- **不要创建 `qa/6.md`**：`/brand-news/qa/6/` 是茶博会文章的存档地址，从 7 开始编号
- 文件名即网址，发布后不要再改名，避免链接失效
- 每篇文章的 title 全站唯一，避免 AI 引擎混淆

## 本地预览（可选）

```bash
npm install   # 首次
npm run build # 构建到 dist/，可直接检查生成结果
```
