// for node (client) and config (server)
const createBackwardCompatible = (obj) => {
  if (typeof obj.name === 'undefined') obj.name = ''
  if (typeof obj.transformer === 'undefined') obj.transformer = obj.transformerOpts
  if (typeof obj.errorHandling === 'undefined') obj.errorHandling = ''

  if (typeof obj.internalErrors === 'undefined') obj.internalErrors = {}

  if (typeof obj.devMode === 'undefined') obj.devMode = false
  if (typeof obj.showBanner === 'undefined') obj.showBanner = false
  if (typeof obj.disableInput === 'undefined') obj.disableInput = false 

}

module.exports = {
  createBackwardCompatible
}
