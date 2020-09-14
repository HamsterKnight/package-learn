const cheerio = require('cheerio')

const url = 'https://movie.douban.com/chart'

const axios = require('axios')
async function getMoviesHtml() {
  const resp = await axios.get(url)
  return resp.data
}
/**
 * 
 * 获取电影数据
 */
async function getMovieData() {
  const data = await getMoviesHtml()
  const $ = cheerio.load(data)
  const list = $('tr.item')
  const m = []
  for(let i= 0 ; i < list.length; i++) {
    m.push(getMovie(list[i], $))
  }
  return m
}
function getMovie(item, $) {
  const name = $(item).find('.nbg').attr('title')
  const imgSrc = $(item).find('img').attr('src')
  const detail = $(item).find('pl').text()
  return {
    name,
    imgSrc,
    detail
  }
}
module.exports = getMovieData