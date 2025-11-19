export const redirectAllowlist = new Set([
  'https://github.com/vulnerable-app/vulnerable-app',
  'https://blockchain.info/address/1AbKfgvw9psQ41NbLi8kufDQTezwG8DRZm',
  'https://explorer.dash.org/address/Xr556RzuwX6hg5EGpkybbv5RanJoZN17kW',
  'https://etherscan.io/address/0x0f933ab9fcaaa782d0279c300d73750e1311eae6',
  'http://shop.spreadshirt.com/vulnapp',
  'http://shop.spreadshirt.de/vulnapp',
  'https://www.stickeryou.com/products/owasp-vulnerable-app/794',
  'http://leanpub.com/vulnerable-app'
])

export const isRedirectAllowed = (url: string) => {
  let allowed = false
  for (const allowedUrl of redirectAllowlist) {
    allowed = allowed || url === allowedUrl
  }
  return allowed
}