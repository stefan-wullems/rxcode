<script>
  export let value = ''
  export let onChange = () => void 0
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

</script>

<textarea on:input|stopPropagation={e => onChange(e.target.value)}>{value}</textarea>