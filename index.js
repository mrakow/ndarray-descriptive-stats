'use strict'
var cwise = require('cwise')

module.exports = function descriptiveStats (array) {
  return dStats(array)
}

var dStats = cwise({
  args: ['array'],
  pre: function () {
    this.n = 0
    this.sum = 0
    this.sumOfSqs = 0
    this.min = Number.POSITIVE_INFINITY
    this.max = Number.NEGATIVE_INFINITY
  },
  body: function (x) {
    this.n++
    this.sum += x
    this.sumOfSqs += x * x
    if (x < this.min) this.min = x
    if (x > this.max) this.max = x
  },
  post: function () {
    var n = this.n
    var stats = {}
    stats.n = n
    stats.mean = this.sum / n
    stats.sigma = Math.sqrt((this.sumOfSqs - (this.sum * this.sum) / n) / n)
    if (n === 1) {
      stats.s = null
    } else {
      stats.s = Math.sqrt((this.sumOfSqs - (this.sum * this.sum) / n) / (n - 1))
    }
    stats.min = this.min
    stats.max = this.max
    stats.sum = this.sum
    return stats
  }
})
