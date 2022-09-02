export function fakeApiRequest(options = {}) {
  const {
    success = Math.round(Math.random()),
    timeout = 10000
  } = options

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      success ? resolve() : reject(new Error('Error'))
    }, timeout)
  })
}