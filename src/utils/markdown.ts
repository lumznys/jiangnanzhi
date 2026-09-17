// 共享工具：markdown 正文 → 纯文本
// 供 FAQPage/QAPage 结构化数据使用（去掉图片/链接/标记符号，保留完整内容）
export const mdToText = (md: string): string => md
  .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
  .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
  .replace(/^\s{0,3}#{1,6}\s+/gm, '')
  .replace(/^\s*[-*+]\s+/gm, '')
  .replace(/^\s*\d+\.\s+/gm, '')
  .replace(/[*_~`>]/g, '')
  .replace(/\n{2,}/g, '\n')
  .trim();
