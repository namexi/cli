const {promisify} = require('util')

module.exports.clone = async (repo,desc) =>{
    const download = promisify(require('download-git-repo'))
    const ora = require('ora')
    const procsess = ora(`下载...${repo}`)
    procsess.start()
    await download(repo,desc)
    procsess.succeed()
}