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
        .mission-bg{
            background-image: url(https://res.cloudinary.com/poorna/image/upload/c_scale,w_2000/v1633962358/tss/pexels-los-muertos-crew-7205803.png);
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
    <div class="flex justify-between py-4 pl-4 pr-10 shadow-2xl bg-white rounded absolute top-4 w-11/12">
        <div class="flex">
            <img height="100" width="100" class="block h-16 w-16" src="/favicon.png" alt="TSS Logo" />
            <h2 class="block my-auto ml-4 font-display text-3xl text-gray-900" >Textile Sourcing Solutions</h2>
        </div>
        <div class="flex justify-between space-x-6 text-lg font-display">
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
                <a href="/contact" class="bg-tss-600 text-white p-4 px-6 font-extrabold text-lg rounded-full border-2 border-tss-200 hover:shadow-xl hover:border-tss-accent " >
                    Contact Us
                    <svg class="inline fill-current" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.17 13L15.59 15.59L17 17L22 12L17 7L15.59 8.41L18.17 11H2V13H18.17Z"></path>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</div>

<div class="py-3 pr-3 bg-gray-100">
    <h3 class="text-2xl text-center font-display text-gray-600"> Our International Clientele </h3>
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

<div class="2xl:px-28 lg:px-10 py-20">
    <div class="grid grid-flow-row grid-cols-2">
        <div class="col-span-1 my-auto" >
            <div class="block" >
            <p class="text-xl"  >Our Vision</p>
            <div class="w-7 h-1 bg-tss-600 mt-2"></div>
            <h3 class="lg:text-5xl 2xl:text-6xl font-display text-tss-accent mt-2" >Efficient, Sustainable and Ethical Future</h3>

            <div class="mt-4 text-lg 2xl:w-3/4 ">
                <p>
                    How <span class="text-tss-600 font-display">TSS</span> can help you service your customers:
                </p>
                <ul class="ml-3 mt-2 list-disc list-inside">
                    <li> We research and isolate key, relevant trends on a frequent basis </li>
                    <li> We Comp shop to understand strengths and weaknesses of the competition to identify areas of opportunity </li>
                    <li> Acting as our clients Asia office, we create seasonal concept boards, fabric presentation and sample collection based on trend research as well as customer’s specific direction </li>
                    <li> We ensure brand cohesiveness across categories for each customer </li>
                    <li> We strengthen the business with our current customers by delivering monthly collections of newness to create excitement and keep them engaged </li>
                    <li> We call this our ‘Magic Box’ & it consists of our latest works in fabric, apparel, scarves, handbags, home goods </li>
                </ul>
            </div>
        </div>

            <!-- <div class="mt-4 w-4/5" >
                <p class="text-lg">
                    At TSS our passion for detail, transparency and customer satisfaction which are the key driving force behind strong partnership we built over the years. Head quartered at Bangalore with our vendors spread around Bangalore, Tirpur, Delhi-NCR, Hosur, Bijapur and Bangaladesh.
                </p>
            </div> -->

            <!-- <h4 class="text-2xl font-display mt-5" >Our Mission</h4>
            <p class="mt-3 text-lg w-4/5">
                We are on a mission to leverage our experience, Knowledge & Network to help Global & India Retail brands build and grow their business in the Indian Sub-continent
            </p> -->

        </div>
        <div class="col-span-1 my-auto">
            <div class="flex justify-start" >
                <img class="relative -right-32 rounded-br-md z-10 border-b-8 border-r-8 border-white" alt="bags" src="https://res.cloudinary.com/poorna/image/upload/c_scale,h_600/v1633886133/tss/pexels-meruyert-gonullu-6034060.png" />
                <img class="rounded-md relative -left-64 -bottom-10  border-b-4 border-r-4 border-tss-accent shadow-md " src="https://res.cloudinary.com/poorna/image/upload/c_scale,h_604/v1633961746/tss/pexels-dids-3754600.png" alt="BG"  />
                                
            </div>
        </div>
    </div>
</div>


<div class="mission-bg bg-no-repeat bg-cover bg-bottom bg-fixed" >
    <div class="px-36 py-16" >
        <h4 class="text-3xl text-gray-200" >
            Our Mission
        </h4>
        <div class="w-7 h-1 bg-tss-accent mt-2"></div>
        <h3 class="text-5xl font-display text-tss-200 mt-4" > We are on a mission to leverage our experience, knowledge & network to help global & Indian retail brands build and grow their business in the Indian Sub-continent
        </h3>
        <a href="/" class="mt-8 bg-tss-accent py-4 px-8 inline-block rounded-full text-white hover:bg-indigo-800 shadow-lg hover:shadow-xl text-lg " >
            Reach out to us
            <svg class="fill-current text-white inline" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.17 13L15.59 15.59L17 17L22 12L17 7L15.59 8.41L18.17 11H2V13H18.17Z"></path>
                </svg>
                
        </a>
    </div>
</div>

<div class="h-60" ></div>