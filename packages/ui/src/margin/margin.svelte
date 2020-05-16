<script>
  const ROW_HEIGHT = 20

  export let rows = 0
  export let columns = []
</script>

<div id='margin'>
  {#each Array(rows) as _, i}
    <div class="row">
        {#each columns as Column}
          <Column row={i + 1} />
        {/each}
    </div>
  {/each}
</div>

<style>
  #margin {
    background-color: #1e1e1e;
    color: #d4d4d4;
    font-family: Arial;
    font-size: 14px;

    /* This makes the margin shrink to the size of all of its columns */
    display: table;
  }

  .row {
    height: 20px;
  }
</style>

