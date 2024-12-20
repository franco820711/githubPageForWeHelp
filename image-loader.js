export default function imageLoader({ src, width, quality }) {
  const baseUrl = process.env.NODE_ENV === 'production' 
    ? 'https://franco820711.github.io/githubPageForWeHelp' 
    : '';
  return `${baseUrl}${src}?w=${width}&q=${quality || 75}`
}
