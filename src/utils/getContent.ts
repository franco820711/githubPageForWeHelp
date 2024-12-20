import fs from 'fs'
import path from 'path'

export const getContent = (filename: string): string => {
  const filePath = path.join(process.cwd(), 'src', 'content', `${filename}.md`)
  try {
    const content = fs.readFileSync(filePath, 'utf8')
    // 將 markdown 轉換為純文字，移除 HTML 標籤
    const plainText = content
      .replace(/#{1,6}\s/g, '') // 移除標題標記
      .replace(/(?:^|\n)[-*]\s/g, '\n') // 移除清單標記
      .replace(/`{1,3}[^`]*`{1,3}/g, '') // 移除程式碼區塊
      .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1') // 將連結轉換為純文字
      .replace(/\n{3,}/g, '\n\n') // 將多個換行縮減為最多兩個
      .trim()
    return plainText
  } catch (error) {
    console.error(`Error reading file ${filename}.md:`, error)
    return ''
  }
}
