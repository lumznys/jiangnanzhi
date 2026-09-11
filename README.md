# 江南枝 · Astro 品牌官网

以 https://www.jiangnantea.com 的公开页面为参照迁移，保留原有视觉、图片、正文和网址结构。主页面及文章均由 Astro 在构建时输出 HTML；浏览器脚本只处理菜单、滚动样式、分类筛选和入场动画。

## 本地运行

```sh
npm run dev -- --background
npm run astro -- dev status
npm run astro -- dev logs
npm run astro -- dev stop
npm run build
```

开发预览默认地址为 http://localhost:4321。构建结果位于 `dist/`，可部署到支持静态网站的主机。本次仅修改本地项目，未发布或更改线上网站。

## 内容与页面

- `src/pages/index.astro`：首页。
- `src/pages/products.astro`：四个产品系列。
- `src/pages/about.astro` / `contact.astro`：品牌介绍和联系方式。
- `src/pages/tea-knowledge.astro` / `qa.astro`：文章列表和分类筛选。
- `src/data/content.json`：科普和 Q&A 正文；两个 `[id].astro` 模板生成 12 个独立详情页。
- `src/components/SiteHeader.astro` / `SiteFooter.astro`：公共导航与页脚。
- `src/layouts/SiteLayout.astro`：中文语言、标题、摘要、canonical、社交文字元数据与品牌结构化数据。
- `src/styles/reference.css`：原站样式；`site.css`：渐进增强和无障碍样式。
- `src/scripts/site.ts`：少量原生浏览器交互。
- `public/images/`：原站图片的本地副本。

文章详情有 Article 结构化数据。站点地图由 Astro sitemap 生成，robots.txt 指向站点地图。保留 RSS 功能并替换为品牌科普内容。品牌正文在不执行 JavaScript 时仍然存在，内部链接为普通 HTML 链接。

## 后续维护

目前列表页文字与详情数据各自保留原站内容；改文章标题、摘要时同步更新相应列表。原站有部分列表日期与详情日期不一致，尚未擅自改写。发布前请由品牌方核对文案中的产地、企业动态、品质及茶叶知识表述。

Noto Serif SC 沿用原站 Google Fonts 样式引用；无法连接时使用系统衬线字体。其余品牌图片均已保存在本地。无 React 客户端渲染依赖，也不加载原站建站平台和分析脚本。

原项目备份保存在本次 Codex 工作目录的 `work/original-project/`。未修改原有依赖和锁文件。静态可读性有助于抓取，但不保证搜索引擎收录或 AI 引用。
