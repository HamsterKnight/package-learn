/* cheerio 
jquery的核心逻辑，支持所有环境，可用于将一个html字符串转化成jquery对象，并通过jquery对象进行操作
*/
const fs = require('fs')
const getMoviesList = require('./getMovies.js')
getMoviesList().then(movies => {
  fs.writeFile('movie.json', JSON.stringify(movies), function () {})
})