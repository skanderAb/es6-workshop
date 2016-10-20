import {transform} from 'babel-core'

test('String.prototype.padStart saves us from left-pad-gate', () => {
  const originalString = 'Worlds Finest'
  // call padStart on this string to make the test pass
  const result = originalString
  expect(result).toBe('    Worlds Finest')
})

test('String.prototype.padEnd (and padStart) can be given a string to pad with', () => {
  const originalString = 'Stronger Together'
  // call padEnd on this string to make the test pass
  expect(result).toBe('Stronger Together-123-123-1')
})

test('Object.values gets just the values of an object', () => {
  const show = {
    title: 'Supergirl',
    seasons: 1.2,
    characters: [
      'Supergirl',
      'Cat Grant',
      'Superman',
      'Jimmy Olsen',
      'Hank Henshaw',
      'Winn Schott',
      'Alex Danvers',
    ],
  }
  // get the values of the show object as an array
  expect(result).toEqual([
    'Supergirl',
    1.2,
    [
      'Supergirl',
      'Cat Grant',
      'Superman',
      'Jimmy Olsen',
      'Hank Henshaw',
      'Winn Schott',
      'Alex Danvers',
    ]
  ])
})

test('Object.entries gives an array of arrays as [key, value]', () => {
  const show = {
    title: 'The Flash',
    seasons: 2.2,
    characters: [
      'The Flash',
      'Iris West',
      'Caitlin Snow',
      'Eddie Thawne', // 😢
      'Cisco Ramon',
      'Harrison Wells',
      'Joe West',
    ],
  }
  // get a [key, value] array of the show object
  expect(result).toEqual([
    [ 'title', 'The Flash' ],
    [ 'seasons', 2.2 ],
    [ 'characters', [
      'The Flash',
      'Iris West',
      'Caitlin Snow',
      'Eddie Thawne',
      'Cisco Ramon',
      'Harrison Wells',
      'Joe West',
    ]]
  ])
})

test('Trailing commas in function parameter lists and calls help us with git', () => {
  function doStuff() {
    // use trailing commas everywhere you can...
    eval(transform(`
      function foo(
        a,
        b,
        c
      ) {
        log(a, b, c)
      }

      foo(
        1,
        2,
        3
      )

      function bar(
        a,
        b,
        ...rest,
      ) {
        log(a, b, ...rest)
      }
      bar(
        1, 2, 3,
        4, 5, 6
      )

      function log() {
        // do nothing :)
      }
    `).code)
  }

  expect(doStuff).not.toThrow()
})

// there's also this fancy Object.getOwnPropertyDescriptors thing, but you'll likely rarely
// use that directly... https://github.com/tc39/proposal-object-getownpropertydescriptors
