const core = require('@actions/core')
const common = require('./common.js')

function doEval () {
  const benchmarkName = common.getBenchmarkName()
  console.log(`Evaluate results with ${benchmarkName}.`)

  const prefix = common.initEnv(common.getBenchmarkFile('eval-env.yaml'), 'eval-env')

  const result = core.getInput('result')

  common.exec(`${prefix}; ${common.getOutpathEnvvars()} result="${result}" bash ${common.getBenchmarkFile('eval.sh')}`)

  core.setOutput('report', common.getOutpath('report'))
}

module.exports = doEval