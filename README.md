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
- `src/data/content.json`：产品和茶叶科普数据；Q&A 正文已迁入 Markdown 集合。
- `src/components/SiteHeader.astro` / `SiteFooter.astro`：公共导航与页脚。
- `src/layouts/SiteLayout.astro`：中文语言、标题、摘要、canonical、社交文字元数据与品牌结构化数据。
- `src/styles/reference.css`：原站样式；`site.css`：渐进增强和无障碍样式。
- `src/scripts/site.ts`：少量原生浏览器交互。
- `public/images/`：原站图片的本地副本。

文章详情有 Article 结构化数据。站点地图由 Astro sitemap 生成，robots.txt 指向站点地图。保留 RSS 功能并替换为品牌科普内容。品牌正文在不执行 JavaScript 时仍然存在，内部链接为普通 HTML 链接。

## 后续维护

茶叶科普列表与详情仍使用原有数据维护方式。问答与新闻的列表、详情、摘要和结构化数据均从 Markdown 集合读取。发布前请由品牌方核对文案中的产地、企业动态、品质及茶叶知识表述。

Noto Serif SC 沿用原站 Google Fonts 样式引用；无法连接时使用系统衬线字体。其余品牌图片均已保存在本地。无 React 客户端渲染依赖，也不加载原站建站平台和分析脚本。

原项目备份保存在本次 Codex 工作目录的 `work/original-project/`。未修改原有依赖和锁文件。静态可读性有助于抓取，但不保证搜索引擎收录或 AI 引用。

## 内容集合迁移（阶段一）

- 常见问题：`src/content/qa/1.md` 至 `5.md`，包含 title、60–80 字 description、数字 order；可选 date 保留原发布日期。列表按 order 升序，当前顺序为 5、1、2、3、4。
- 企业动态：`src/content/news/2026-spring-tea-expo.md`，包含 title、description 和 date，日期取原详情数据的 2026-08-10。新增新闻使用英文短横线文件名，列表按 date 倒序。
- `/qa/6/` 是新闻的历史保留入口，直接读取 news 集合同一篇文章，不重定向、不进入问答集合和 FAQPage。编号 6 预留给此入口，不要创建 qa/6.md；新增问答可从 7.md 开始。
- `/news/2026-spring-tea-expo/` 为该新闻的新栏目地址。旧入口使用独立标题和摘要前缀，正文只维护一份。
- Markdown 正文支持标题、列表和链接。将文件加入对应集合后重新构建即可生成页面。
- FAQPage 当前为 5 组，使用问答标题与页面可见的摘要回答；不包含企业动态。
- 阶段二已完成：`/brand-news/` 为品牌资讯总栏目，自动显示 qa 与 news 的全部条目。顶部及页脚导航已改为品牌资讯，llms.txt 同步更新。问答与新闻详情的面包屑包含品牌资讯；所有旧 URL 保留。