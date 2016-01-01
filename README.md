# ndarray-descriptive-stats

Descriptive statistics for [ndarrays](https://github.com/scijs/ndarray).

This module computes descriptive statistics for ndarrays and returns them in an
object.  The main benefit of this package is that only one pass is needed to
generate the folowing basic summary statistics:

* Number of observations `n`,
* `mean`,
* (population) standard deviation `sigma`,
* sample standard deviation `s`,
* minimum `min`,
* maximum `max`,
* `sum`.

If only mean and standard deviation are needed, you should check out
 [ndarray-moments](https://github.com/scijs/ndarray-moments).

## Install

```bash
$ npm install mrakow/ndarray-descriptive-stats
```

## Usage

```javascript
var dStats = require('ndarray-descriptive-stats')
var ndarray = require('ndarray')

var arr = ndarray([1, 2, 3, 4])
var stats = dStats(arr)

console.log(stats.n)      // 4
console.log(stats.sigma)  // 1.118033988749895
console.log(stats.s)      // 1.2909944487358056
console.log(stats.max)    // 4
```

### (Population) Standard Deviation or Sample Standard Deviation?

The (population) standard deviation, denoted as `sigma`, is calculated with the
`n`-divisor, whereas the sample standard deviation is calculated with the
`n-1`-divisor:

```
sigma = sqrt(  sum( (x_i - mean)^2 )  /     n     )
    s = sqrt(  sum( (x_i - mean)^2 )  /  (n - 1)  )
```

See [Wikipedia](https://en.wikipedia.org/wiki/Unbiased_estimation_of_standard_deviation)
for details.

## License

(c) Moritz Rakow. MIT License
