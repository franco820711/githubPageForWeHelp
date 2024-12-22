export default function imageLoader({ src, width, quality }) {
  // src 已經包含了 /githubPageForWeHelp 前綴，所以這裡不需要再加
  return `${src}?w=${width}&q=${quality || 75}`
}
