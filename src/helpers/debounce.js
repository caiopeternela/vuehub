export function debounce(f, time) {
  let _timeoutCode = null
  function decorated() {
      if(_timeoutCode) {
          clearTimeout(_timeoutCode)
      }
      const _this = this
      const _arguments = arguments
      _timeoutCode = setTimeout(() => {
          f.apply(_this, _arguments)
          _timeoutCode = null
      }, time)
  }
  return decorated
}