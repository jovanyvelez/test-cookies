
<script>
    export let data;
</script>

<h1>Este es el resultado</h1>
{#if data.cookie}
    <h1>{data.cookie}</h1>
{/if}