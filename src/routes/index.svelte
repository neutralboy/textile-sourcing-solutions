<svelte:head>
    <title>
        Textile Sourcing Solutions
    </title>
</svelte:head>
<style>
    @media only screen and (min-width: 992px) {
        .mainBg{
            background-image: url(https://res.cloudinary.com/poorna/image/upload/v1633852557/tss/pexels-pixabay-236748-rbb.png);
        }
    }
    @media only screen and (max-width: 768px) {
        .mainBg{
            background-image: url(https://res.cloudinary.com/poorna/image/upload/c_scale,h_1000/v1633850209/tss/pexels-pixabay-236748_4_3.png);
        }
    } 
</style>
<script>
    import {onMount} from "svelte";

    let brandScroller;
    onMount(()=>{
        
        const totalScrollable = brandScroller.scrollWidth;
            const screenWidth = screen.width;
            const difference = totalScrollable - screenWidth;
            const iterWidth = 6;
            let iterCount = 0;
            const totalIterParts = Math.floor(difference/iterWidth) - 1 ;

            if(totalScrollable > screenWidth){
                setInterval(()=>{
                    brandScroller.scrollTo({ left: iterWidth*iterCount });

                    if(iterCount === (totalIterParts+2)){
                        iterCount = 0;
                    }else{
                        iterCount += 1;
                    }


                }, 100);
            }

    });

</script>
<div class="flex justify-center">
    <div class="flex justify-between py-4 pl-4 pr-10 shadow-2xl bg-white absolute top-4 w-11/12">
        <div class="flex">
            <img height="100" width="100" class="block h-16 w-16" src="/favicon.png" alt="TSS Logo" />
            <h2 class="block my-auto ml-4 font-display text-3xl text-gray-900" >Textile Sourcing Solutions</h2>
        </div>
        <div class="flex justify-between space-x-6 2xl:text-xl xl:text-lg">
            <div class="my-auto">
                <a class="hover:text-tss-600" href="/" >Home</a>
            </div>
            <div class="my-auto">
                <a class="hover:text-tss-600" href="/" >Services</a>
            </div>
            <div class="my-auto">
                <a class="hover:text-tss-600" href="/about" >About</a>
            </div>
            <div class="my-auto">
                <a class="hover:text-tss-600" href="/contact" >Contact</a>
            </div>
        </div>
    </div>
</div>

<div style="min-height: 85vh" class="mainBg bg-no-repeat bg-cover p-0 m-0 bg-left">
    <div class="2xl:px-56 2xl:py-28 lg:px-32 lg:py-14">
        <div class="mt-32 w-3/5">
            <h3 class="text-tss-600 font-black text-xl" >Since 1998</h3>
            <h1 class="font-display text-6xl text-white">Your trusted textile sourcing and solutions partner</h1>
            <div class="mt-8">
                <p class="text-gray-100 text-lg">
                    Headquartered in Bangalore TSS has been a leading ethical apparel and accessories sourcing solutions provider since 23 years.
                    <br/>
                    TSS offers a 360 degree solution from designing, to developing, sourcing and logistics essential to build your brand. 
                </p>
            </div>
            <div class="mt-7">
                <a href="/contact" class="bg-tss-600 text-white p-4 uppercase font-extrabold text-lg rounded-md" >
                    Contact Us
                </a>
            </div>
        </div>
    </div>
</div>

<div class="py-3 pr-3 bg-gray-100">
    <h3 class="text-3xl text-center font-display text-gray-600"> Our International Clientele </h3>
    <div bind:this={brandScroller} style="scroll-behavior: smooth;" class="w-full overflow-x-hidden">
        <div class="flex flex-row space-x-6 mt-3">
            <img class="block" alt="abercombie" src="https://res.cloudinary.com/poorna/image/upload/c_scale,h_100/v1633870707/tss/abercrombie-fitch-logo.png" />
            <img class="block w-36" src="https://res.cloudinary.com/poorna/image/upload/v1633870707/tss/superdry.png" alt="Superdry" />
            <img alt="American Eagle" class="block" src="https://res.cloudinary.com/poorna/image/upload/c_scale,h_100/v1633870708/tss/American-Eagle-Logo-1985.png" />
            <img alt="Hollister" class="block" src="https://res.cloudinary.com/poorna/image/upload/c_scale,h_100/v1633870708/tss/Hollister-symbol.png" />
            <img alt="Ralph Lauren" class="block" src="https://res.cloudinary.com/poorna/image/upload/c_scale,h_100/v1633870708/tss/Ralph-Lauren-Logo.png" />
            <img alt="Champion" class="block h-10 my-auto" src="https://res.cloudinary.com/poorna/image/upload/c_scale,h_100/tss/Champion-logo.png" />
            <img alt="Liliy Pulitzer" class="block h-16 my-auto" src="https://res.cloudinary.com/poorna/image/upload/c_scale,h_100/v1633871690/tss/lilly-pulitzer-logo_0.png" />
            <img alt="Easter Mountain Sports" class="block my-auto" src="https://res.cloudinary.com/poorna/image/upload/c_scale,h_80/v1633870854/tss/eastern-mountain-sports-logo-05F9379E20-seeklogo.com.png" />
            <img alt="Amazon" class="block my-auto h-14" src="https://res.cloudinary.com/poorna/image/upload/c_scale,h_100/v1633870945/tss/amazon-logo-transparent.png" />
            <img alt="Pantaloons" class="block my-auto h-14" src="https://res.cloudinary.com/poorna/image/upload/v1633871039/tss/Pantaloons-Gift-Voucher-SDL026711860-1-90e34.png" />
            <img alt="Being Human" class="block my-auto h-24" src="https://res.cloudinary.com/poorna/image/upload/c_scale,h_150/v1633871111/tss/41YTcyA8eeL.png" />
        </div>
    </div>
</div>

<div class="h-28"></div>