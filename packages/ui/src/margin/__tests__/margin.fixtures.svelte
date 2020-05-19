<script>
  import Margin from '../margin.svelte'

  export let test = ''
</script>

{#if test === 'columns'}
  <Margin rows={1} >
    <div data-testid='column-1' />
    <div data-testid='column-2' />
  </Margin>
{:else if test === 'rows'}
  <Margin rows={30} >
    <div data-testid='column' />
  </Margin>
{:else if test === 'row-number'}
  <Margin let:row rows={30} >
    <div data-testid='column'>this is row {row}</div>
  </Margin>
{/if}

