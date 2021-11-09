<script>
    import { onMount } from "svelte"; 
    onMount(async ()=>{
        await import("../modules/maps");
    });
</script>
<div style="height: 100vh;" >
    <div style="height: 100vh;" id="chartdiv" ></div>
</div>