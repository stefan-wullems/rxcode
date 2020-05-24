<script>
  export let value = ''
  export let onChange = () => {}

  // Aria autocomplete -> list when intellisense is implemented
</script>

<div 
  role="textbox"
  aria-autocomplete="none"
  aria-multiline="true"
  contenteditable="true"
  tabindex="0"
  on:input={e => onChange(e.target.innerText)}>
  {value}
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