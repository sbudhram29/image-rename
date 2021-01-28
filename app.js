const fs = require('fs')

const source = __dirname + '/images'
const destination = __dirname + '/output'

fs.readdir(source, (err, files) => {
    if (err) {
        console.log(err)
    } else {
        for (let file of files) {
            const result = file.match(/[\d]{6}/)
            const ext = '.' + file.toLowerCase().split('.').pop()
            if ([ '.jpg', '.png', '.jpeg', '.gif' ].includes(ext)) {
                fs.rename(source + '/' + file, destination + '/' + result + ext, () => {
                    console.log(result + ext)
                })
            }
        }
    }
})