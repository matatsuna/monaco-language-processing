const fs = require('fs');
export default (() => {
    try {
        fs.readdir('.', function (err, files) {
            if (err) throw err;
            var fileList = files.filter(function (file) {
                return fs.statSync(file).isFile() && /.*\.js$/.test(file); //絞り込み
            })
            console.log(fileList);
        });
    }
    catch (err) {
        console.warn(err);
    }

});
