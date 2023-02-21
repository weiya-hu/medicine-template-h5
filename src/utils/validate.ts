export function GetQueryString(key: string) {
  const urlGets = location.search
  if (urlGets.length > 0) {
    let start = urlGets.indexOf(key + '=')
    if (start != -1) {
      start = start + key.length + 1
      let end = urlGets.indexOf('&', start)
      if (end == -1) {
        end = urlGets.length
      }
      return decodeURIComponent(urlGets.substring(start, end))
    }
  }
  return ''
}
