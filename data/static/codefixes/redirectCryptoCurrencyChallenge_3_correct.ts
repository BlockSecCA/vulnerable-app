export const redirectAllowlist = new Set([
  'https://github.com/vulnerable-app/vulnerable-app',
  'http://shop.spreadshirt.com/vulnapp',
  'http://shop.spreadshirt.de/vulnapp',
  'https://www.stickeryou.com/products/owasp-vulnerable-app/794',
  'http://leanpub.com/vulnerable-app'
])

export const isRedirectAllowed = (url: string) => {
  let allowed = false
  for (const allowedUrl of redirectAllowlist) {
    allowed = allowed || url.includes(allowedUrl)
  }
  return allowed
}