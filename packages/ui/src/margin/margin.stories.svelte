<script>
  import Margin from './margin.svelte'
  import LineNumber from './column/line-number.svelte'
</script>

<Margin let:row={row} rows={30}>
  <LineNumber {row} />
</Margin>