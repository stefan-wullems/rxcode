import {rangeStart, rangeEnd} from 'Number/Range'

function sortColorsDesc(colors) {
  return [...colors].sort((a, b) => {
    if (a.range.row === b.range.row) {
      if (typeof a.range.column === 'number' && typeof b.range.column === 'number') {
        return a.range.column > b.range.column ? -1 : 1
      } else if (typeof a.range.column === 'number') {
        return a.range.column > b.range.column.end ? -1 : 1
      } else {
        return a.range.column.end > b.range.column ? -1 : 1
      }
    } else {
      return a.range.row > b.range.row ? -1 : 1
    }
  })
}

function makeMap(arr, keyAccessor) {
  return arr.reduce((map, item) => {
    const key = keyAccessor(item)
    const entries = map[key]

    return {
      ...map,
      [key]: [item, ...(entries || [])]
    }
  }, {})
}

function colorMap(colors) {
  return makeMap(colors, color => color.row)
}

function replaceRange(s, start, end, substitute) {
  return s.substring(0, start) + substitute + s.substring(end)
}

function colorValues(colors, value) {
  const lines = value.split('\n')

  sortColorsDesc(colors).reduce(color => {
    const colRange = typeof color.range.column === 'number' ? [color.range.column, color.range.column + 1] : [color.range.column.start, color.range.column.end + 1]

    lines[color.range.row] = replaceRange(
      lines[color.range.row],
      ...colRange,
      `<span style='color: ${color.color};'>${lines[color.range.row].slice(...colRange)}</span>`
    )
  })

  return lines.join('<br />')
}
