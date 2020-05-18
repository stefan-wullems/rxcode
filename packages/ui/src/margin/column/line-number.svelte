<script>
  export let row
</script>

<style>
  div {
    display: inline-block;
    text-align: right;
    width: 40px;
    color: #858585;

    /* This is here so that the user cannot select the line number */
    user-select: none;
    cursor: default;
  }
</style>

<div>{row}</div>