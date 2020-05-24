<script>
  export let value = ''
  export let onChange = () => {}
  export let colors = []

  function sortColorsDesc(colors) {
    return [...colors].sort((a, b) => {
      if(a.range.row === b.range.row) {
        if(typeof a.range.column === 'number' && typeof b.range.column === 'number') {
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

  function replaceRange(s, start, end, substitute) {
    return s.substring(0, start) + substitute + s.substring(end);
}

  function colorValues(colors, value) {
    const lines = value.split('\n')

    sortColorsDesc(colors).forEach(color => {
      let colRange =  typeof color.range.column === 'number'
       ? [color.range.column, color.range.column + 1]
       : [color.range.column.start, color.range.column.end + 1]

     
        lines[color.range.row] = replaceRange(
          lines[color.range.row], 
          ...colRange,
          `<span style='color: ${color.color};'>${lines[color.range.row].slice(...colRange)}</span>`
          )
      
    })

    return lines.join('<br />')
  }

  $: coloredValue = colorValues(colors, value)

  // Aria autocomplete -> list when intellisense is implemented
</script>

<div 
  role="textbox"
  aria-autocomplete="none"
  aria-multiline="true"
  contenteditable="true"
  tabindex="0"
  on:input={e => onChange(e.target.innerText)}>
  {@html coloredValue}
</div>

<style>
  div {
    background-color: #1e1e1e;
    color: #d4d4d4;
    
    min-width: 100%;
    min-height: 100%;                                                                           

    font-family: monospace;
    font-size: 14px;
    line-height: 20px;
  }
</style>