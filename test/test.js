'use strict'
var dStats = require('../index.js')
var ndarray = require('ndarray')
var test = require('tape')

test('givenData', function (t) {
  var cases = [
    [
      ndarray([0, 0, 0]),
      {n: 3, mean: 0, sigma: 0, s: 0, min: 0, max: 0, sum: 0}
    ], [
      ndarray([1, 2, 3]),
      {n: 3, mean: 2, sigma: Math.sqrt(2 / 3), s: 1, min: 1, max: 3, sum: 6}
    ], [
      ndarray([-2, 2.0, -2]),
      {n: 3, mean: -2 / 3, sigma: Math.sqrt((32 / 3) / 3), s: Math.sqrt((32 / 3) / 2), min: -2, max: 2, sum: -2}
    ], [
      ndarray([1, 1, 3, -4]),
      {n: 4, mean: 0.25, sigma: Math.sqrt(26.75 / 4), s: Math.sqrt(26.75 / 3), min: -4, max: 3, sum: 1}
    ], [
      ndarray([0]),
      {n: 1, mean: 0, sigma: 0, s: null, min: 0, max: 0, sum: 0}
    ], [
      ndarray([]),
      {n: 0}
    ]
  ]

  for (let i = 0; i < cases.length; i++) {
    t.deepEqual(dStats(cases[i][0]), cases[i][1], 'given case ' + i)
  }
  t.end()
})

test('inputFormats', function (t) {
  var validInputs = [
    ndarray([]),
    ndarray([0]),
    ndarray([0, 0]),
    ndarray([0, 0, 0, 0], [2, 2])
  ]
  var invalidInputs = [
    [],
    0,
    [0],
    [0, 0],
    '0, 0',
    {0: 0, 1: 0},
    [[0, 0], [0, 0]],
    'hello'
  ]
  for (let i = 0; i < validInputs.length; i++) {
    t.doesNotThrow(function () { dStats(validInputs[i]) })
  }
  for (let i = 0; i < invalidInputs.length; i++) {
    t.throws(function () { dStats(invalidInputs[i]) })
  }
  t.end()
})
