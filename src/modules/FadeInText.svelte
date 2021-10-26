<script>
    import { onMount } from "svelte";
    export let text;
    export let className = "";
    let fade = false;
    let oe;

    const fadeInSection = (entries, observer) => {
        entries.forEach((e)=>{
            if(e.isIntersecting){
                fade = true;
            };
        });
    };

    onMount(()=>{
        const myObserver = new IntersectionObserver(fadeInSection, {});
        myObserver.observe(oe);
    });

</script>
<p bind:this={oe} class={`animate__animated ${fade ? `${className ? className : "animate__fadeInLeft" }` : ""}`} >
    {@html text}
</p>