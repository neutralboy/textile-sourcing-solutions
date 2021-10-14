<svelte:head>
    <title>
        Textile Sourcing Services | Your trusted textile sourcing and solutions partner
    </title>
    <meta name="Description" content="Headquartered in Bangalore TSS has been a leading ethical apparel and accessories sourcing solutions provider since 23 years"  >
    <meta property="og:title" content="Textile Sourcing Services | Your trusted textile sourcing and solutions partner" />
    <meta property="og:type" content="website" />
    <!-- <meta property="og:url" content="https://tss.com" /> -->
</svelte:head>
<style>
    @media only screen and (min-width: 992px) {
        .mainBg{
            background-image: url(https://res.cloudinary.com/poorna/image/upload/c_scale,w_2000/tss/clark-street-mercantile-qnKhZJPKFD8-unsplash.png);
            min-height: 85vh;
        }
        .mission-bg{
            background-image: url(https://res.cloudinary.com/poorna/image/upload/c_scale,w_2000/v1634226130/tss/agto-nugroho-1mnXGDl3iRY-unsplash.png);
        }
        /* .form-bg{
            background-image: url(https://res.cloudinary.com/poorna/image/upload/c_scale,q_auto,w_1500/v1634055337/tss/pexels-anni-roenkae-2860807_16_9.png);
        } */
    }
    @media only screen and (max-width: 768px) {
        .mainBg{
            background-image: url(https://res.cloudinary.com/poorna/image/upload/c_scale,w_800/v1634227214/tss/clark-street-mercantile-qnKhZJPKFD8-unsplash_4_3.png);
            min-height: 50vh;
        }
        .mission-bg{
            background-image: url(https://res.cloudinary.com/poorna/image/upload/c_scale,w_800/v1634227098/tss/agto-nugroho-1mnXGDl3iRY-unsplash_4_3.png);
        }
        /* .form-bg{
            background-image: url(https://res.cloudinary.com/poorna/image/upload/q_auto/v1634055373/tss/pexels-anni-roenkae-2860807_4_3.png);
        } */
    } 
</style>
<script context="module" >
    export const prerender = true;
</script>
<script>
    import {onMount} from "svelte";

    let navOpen = false;
    const toggleNav = () => {
        navOpen = !navOpen
    };

    let brandScroller;
    onMount(async ()=>{
        const totalScrollable = brandScroller.scrollWidth;
        const screenWidth = screen.width;
        const difference = totalScrollable - screenWidth;
        const iterWidth = 6;
        let iterCount = 0;
        const totalIterParts = Math.floor(difference/iterWidth) - 1 ;
        if(totalScrollable > screenWidth){
            await setInterval(()=>{
                brandScroller.scrollTo({ left: iterWidth*iterCount });
                if(iterCount === (totalIterParts+2)){
                    iterCount = 0;
                }else{
                    iterCount += 1;
                }
            }, 100);
        };

        await import("../modules/maps");
    });

    const services = [
        {
            name: "Design to Delivery Model",
            image: `<svg class="inline-block fill-current text-gray-600" width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.41999 20.579C4.13948 20.5785 3.87206 20.4603 3.68299 20.253C3.49044 20.0475 3.39476 19.7695 3.41999 19.489L3.66499 16.795L14.983 5.48103L18.52 9.01703L7.20499 20.33L4.51099 20.575C4.47999 20.578 4.44899 20.579 4.41999 20.579ZM19.226 8.31003L15.69 4.77403L17.811 2.65303C17.9986 2.46525 18.2531 2.35974 18.5185 2.35974C18.7839 2.35974 19.0384 2.46525 19.226 2.65303L21.347 4.77403C21.5348 4.9616 21.6403 5.21612 21.6403 5.48153C21.6403 5.74694 21.5348 6.00146 21.347 6.18903L19.227 8.30903L19.226 8.31003Z"></path>
                        </svg>`
        }, 
        {
            name: "Fabric Innovation",
            image: `<svg class="inline-block fill-current text-gray-600" width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 23.27L3 16.27L4.62 15.01L11.99 20.74L19.37 15.001L21 16.27L12 23.27ZM12 19L3 12L4.62 10.74L11.99 16.47L19.37 10.73L21 12L12 19ZM12 14.73L4.63 9.00001L3 7.73001L12 0.730011L21 7.73001L19.36 9.00001L12 14.73Z" fill="#2E3A59"></path>
                </svg>
                `
        },
        {
            name: "Quality Assurance & Control",
            image: `<svg class="inline-block fill-current text-gray-600" width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 21H13V15H21V21ZM11 21H3V11H11V21ZM21 13H13V3H21V13ZM11 9H3V3H11V9Z" fill="#2E3A59"></path>
                </svg>
                `
        },
        {
            name: "Compliance",
            image: `<svg class="inline-block fill-current text-gray-600" width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 19H2C2 15.6863 4.68629 13 8 13C11.3137 13 14 15.6863 14 19H12C12 16.7909 10.2091 15 8 15C5.79086 15 4 16.7909 4 19ZM15.994 15.41L13.288 12.71L14.7 11.292L15.992 12.584L20.292 8.292L21.704 9.708L15.992 15.408L15.994 15.41ZM8 12C5.79086 12 4 10.2091 4 8C4 5.79086 5.79086 4 8 4C10.2091 4 12 5.79086 12 8C11.9972 10.208 10.208 11.9972 8 12ZM8 6C6.9074 6.00111 6.01789 6.87885 6.00223 7.97134C5.98658 9.06383 6.85057 9.9667 7.94269 9.99912C9.03481 10.0315 9.95083 9.1815 10 8.09V8.49V8C10 6.89543 9.10457 6 8 6Z" fill="#2E3A59"></path>
                    </svg>
                    `
        },
        {
            name: "Fast Fashion / Speed to Market",
            image: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C19.995 7.58378 16.4162 4.00496 12 4ZM17 13H11V7H13V11H17V13Z" fill="#2E3A59"></path>
                    </svg>
                    `
        },
        {
            name: "Cost Negotiation & Cost Re Engineering",
            image: `<svg class="inline-block fill-current text-gray-600" width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 21.5C5.95411 21.4935 4.59326 20.4795 4.145 19H2V17H4.145C4.6599 15.273 6.40204 14.2192 8.1707 14.565C9.93936 14.9108 11.1563 16.5431 10.9828 18.3369C10.8094 20.1307 9.30215 21.4995 7.5 21.5ZM7.5 16.5C6.67157 16.5 6 17.1716 6 18C6 18.8284 6.67157 19.5 7.5 19.5C8.32843 19.5 9 18.8284 9 18C9 17.1716 8.32843 16.5 7.5 16.5ZM22 19H12V17H22V19ZM16.5 15.5C14.6979 15.4995 13.1906 14.1307 13.0172 12.3369C12.8437 10.5431 14.0606 8.91084 15.8293 8.56503C17.598 8.21923 19.3401 9.27297 19.855 11H22V13H19.855C19.4067 14.4795 18.0459 15.4935 16.5 15.5ZM16.5 10.5C15.6716 10.5 15 11.1716 15 12C15 12.8284 15.6716 13.5 16.5 13.5C17.3284 13.5 18 12.8284 18 12C18 11.1716 17.3284 10.5 16.5 10.5ZM12 13H2V11H12V13ZM9.5 9.49999C7.69785 9.49953 6.19063 8.1307 6.01715 6.33692C5.84367 4.54314 7.06064 2.91084 8.8293 2.56503C10.598 2.21923 12.3401 3.27297 12.855 4.99999H22V6.99999H12.855C12.4065 8.47928 11.0458 9.4932 9.5 9.49999ZM9.5 4.49999C8.68198 4.5011 8.01568 5.15742 8.00223 5.97534C7.98878 6.79325 8.63315 7.47112 9.45069 7.49911C10.2682 7.52711 10.9575 6.89491 11 6.07799V6.36799V5.99999C11 5.17157 10.3284 4.49999 9.5 4.49999ZM5 6.99999H2V4.99999H5V6.99999Z" fill="#2E3A59"></path>
                    </svg>
                    `
        },
        {
            name: "Manufacturing & Technical Support",
            image: `<svg class="inline-block fill-current text-gray-600" width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 21H4C2.89543 21 2 20.1046 2 19V9C2 7.89543 2.89543 7 4 7H5V5C5 3.89543 5.89543 3 7 3H20C21.1046 3 22 3.89543 22 5V16C22 17.1046 21.1046 18 20 18H12V19C12 20.1046 11.1046 21 10 21ZM4 9V19H10V9H4ZM7 7H10C11.1046 7 12 7.89543 12 9V16H20V5H7V7Z" fill="#2E3A59"></path>
                    </svg>
                    `
        },
        {
            name: "Wash Expertise & Sustainable Wash Innovation",
            image: `<svg class="inline-block fill-current text-gray-600" width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C7.439 22 4 20.065 4 17.5V6.00003H4.047C4.39672 4.70028 5.33486 3.63927 6.582 3.13303C8.27819 2.34782 10.1313 1.9603 12 2.00003C16.561 2.00003 20 3.93503 20 6.50003C19.999 6.66779 19.9829 6.83513 19.952 7.00003H20V17.5C20 20.065 16.561 22 12 22ZM5.777 9.39403V17.5C5.777 18.519 8.2 20 12 20C15.8 20 18.222 18.519 18.222 17.5V9.39403C16.3471 10.5202 14.1857 11.0781 12 11C9.81398 11.078 7.6523 10.5201 5.777 9.39403ZM12 4.00003C8.2 4.00003 5.777 5.48103 5.777 6.50003C5.777 7.51903 8.2 9.00003 12 9.00003C15.8 9.00003 18.222 7.51903 18.222 6.50003C18.222 5.48103 15.8 4.00003 12 4.00003Z" fill="#2E3A59"></path>
                </svg>
                `
        },
        {
            name: "CSR & Sustainable Solutions",
            image: `<svg class="inline-block fill-current text-gray-600" width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 3C6.23858 3 4 5.23858 4 8C4 10.7614 6.23858 13 9 13C11.7614 13 14 10.7614 14 8C14 5.23858 11.7614 3 9 3ZM6 8C6 6.34315 7.34315 5 9 5C10.6569 5 12 6.34315 12 8C12 9.65685 10.6569 11 9 11C7.34315 11 6 9.65685 6 8Z" fill="#2E3A59"></path>
                    <path d="M16.9084 8.21828C16.6271 8.07484 16.3158 8.00006 16 8.00006V6.00006C16.6316 6.00006 17.2542 6.14956 17.8169 6.43645C17.8789 6.46805 17.9399 6.50121 18 6.5359C18.4854 6.81614 18.9072 7.19569 19.2373 7.65055C19.6083 8.16172 19.8529 8.75347 19.9512 9.37737C20.0496 10.0013 19.9987 10.6396 19.8029 11.2401C19.6071 11.8405 19.2719 12.3861 18.8247 12.8321C18.3775 13.2782 17.8311 13.6119 17.2301 13.8062C16.6953 13.979 16.1308 14.037 15.5735 13.9772C15.5046 13.9698 15.4357 13.9606 15.367 13.9496C14.7438 13.8497 14.1531 13.6038 13.6431 13.2319L13.6421 13.2311L14.821 11.6156C15.0761 11.8017 15.3717 11.9248 15.6835 11.9747C15.9953 12.0247 16.3145 12.0001 16.615 11.903C16.9155 11.8059 17.1887 11.639 17.4123 11.416C17.6359 11.193 17.8035 10.9202 17.9014 10.62C17.9993 10.3198 18.0247 10.0006 17.9756 9.68869C17.9264 9.37675 17.8041 9.08089 17.6186 8.82531C17.4331 8.56974 17.1898 8.36172 16.9084 8.21828Z" fill="#2E3A59"></path>
                    <path d="M19.9981 21C19.9981 20.475 19.8947 19.9551 19.6938 19.47C19.4928 18.9849 19.1983 18.5442 18.8271 18.1729C18.4558 17.8017 18.0151 17.5072 17.53 17.3062C17.0449 17.1053 16.525 17.0019 16 17.0019V15C16.6821 15 17.3584 15.1163 18 15.3431C18.0996 15.3783 18.1983 15.4162 18.2961 15.4567C19.0241 15.7583 19.6855 16.2002 20.2426 16.7574C20.7998 17.3145 21.2417 17.9759 21.5433 18.7039C21.5838 18.8017 21.6217 18.9004 21.6569 19C21.8837 19.6416 22 20.3179 22 21H19.9981Z" fill="#2E3A59"></path>
                    <path d="M16 21H14C14 18.2386 11.7614 16 9 16C6.23858 16 4 18.2386 4 21H2C2 17.134 5.13401 14 9 14C12.866 14 16 17.134 16 21Z" fill="#2E3A59"></path>
                    </svg>
                    `
        },
        {
            name: "Logistics",
            image: `<svg class="inline-block fill-current text-gray-600" width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 20L4 16L9 12V15H22V17H9V20ZM15 12V9H2V7H15V4L20 8L15 12Z" fill="#2E3A59"></path>
                    </svg>
                    `
        },
        {
            name: "Market Intel & Product Development",
            image: `<svg class="inline-block fill-current text-gray-600" width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.7501 22H4.91705C3.76655 21.9989 2.83415 21.0665 2.83305 19.916V10.216C2.01626 9.63641 1.76196 8.53756 2.24105 7.65803C3.14105 6.05003 4.05905 4.46503 4.96205 2.94603C5.32422 2.35303 5.97123 1.99383 6.66605 1.99995C7.08957 2.00426 7.50154 2.13867 7.84605 2.38503L7.87005 2.40003C8.28205 2.64003 12.2621 5.00903 15.4611 6.91203L18.3001 8.60003L18.4301 8.67703C20.6481 9.98803 21.1471 10.286 21.1751 10.305C21.9916 10.8831 22.2427 11.9828 21.7581 12.858C20.8751 14.435 19.9581 16.02 19.0371 17.57C18.6796 18.1566 18.044 18.5164 17.3571 18.521C17.2225 18.5211 17.0883 18.506 16.9571 18.476C16.8411 18.545 16.2011 18.956 15.3901 19.476C13.9471 20.401 11.9751 21.666 11.7471 21.783C11.4394 21.9414 11.0956 22.0162 10.7501 22ZM4.50005 13.03V19.916C4.50005 20.1463 4.68675 20.333 4.91705 20.333H8.74005C7.28705 17.88 5.86105 15.422 4.50005 13.03ZM5.85805 12.03C6.25805 12.717 10.5741 20.162 10.6101 20.212C10.6669 20.2859 10.7549 20.3291 10.8481 20.329C10.8972 20.329 10.9456 20.3171 10.9891 20.294C11.1241 20.218 15.1831 17.61 15.2231 17.584C14.9091 17.399 12.6371 16.045 10.2311 14.612L5.83805 12L5.84505 12.011L5.85505 12.028V12.034L5.85805 12.03ZM6.33205 3.90003C5.52405 5.20003 3.71605 8.42803 3.69205 8.48703C3.63276 8.62868 3.68536 8.79241 3.81605 8.87303C3.94905 8.95203 17.1701 16.829 17.2961 16.849C17.312 16.8502 17.3281 16.8502 17.3441 16.849C17.4527 16.8494 17.5536 16.7929 17.6101 16.7C18.4241 15.333 20.2991 12.043 20.3041 12.033C20.362 11.8908 20.3092 11.7275 20.1791 11.646C20.0521 11.57 6.85605 3.72803 6.77105 3.69103C6.73242 3.67477 6.69097 3.66627 6.64905 3.66603C6.54374 3.66661 6.44574 3.71993 6.38805 3.80803L6.38105 3.82003L6.37305 3.83203L6.36105 3.85203V3.85703L6.34605 3.88103L6.33105 3.90003H6.33205ZM7.68505 9.39003C6.7656 9.38948 6.02042 8.64415 6.02006 7.7247C6.01969 6.80524 6.76427 6.05932 7.68372 6.05803C8.60318 6.05675 9.34984 6.80058 9.35205 7.72003C9.35095 8.64024 8.60525 9.38593 7.68505 9.38703V9.39003Z" fill="#2E3A59"></path>
                    </svg>
                    `
        },
        {
            name: "Seasonal Trend analysis",
            image: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 21H4C3.44772 21 3 20.5523 3 20V3H5V19H21V21ZM8.373 16L7 14.656L11.856 9.9C12.2383 9.52848 12.8467 9.52848 13.229 9.9L15.456 12.081L19.627 8L21 9.344L16.144 14.1C15.7617 14.4715 15.1533 14.4715 14.771 14.1L12.543 11.918L8.374 16H8.373Z" fill="#2E3A59"></path>
                    </svg>`
        }
    ];

</script>


<div class="hidden lg:flex justify-center">
    <div class="flex justify-between py-4 pl-4 pr-10 shadow-2xl bg-white rounded absolute top-4 w-11/12">
        <div class="flex">
            <img height="100" width="100" class="block h-16 w-16" src="/favicon.png" alt="TSS Logo" />
            <h2 class="block my-auto ml-4 font-display text-3xl text-gray-900" >Textile Sourcing Services</h2>
        </div>
        <div class="flex justify-between space-x-6 text-lg font-display">
            <div class="my-auto">
                <a class="hover:text-tss-600" href="/" >Home</a>
            </div>
            <div class="my-auto">
                <a class="hover:text-tss-600" href="#services" >Services</a>
            </div>
            <div class="my-auto">
                <a class="hover:text-tss-600" href="/products" >Products</a>
            </div>
            <div class="my-auto">
                <a class="hover:text-tss-600" href="#about" >About</a>
            </div>
            <div class="my-auto">
                <a class="hover:text-tss-600" href="#contact" >Contact</a>
            </div>
        </div>
    </div>
</div>

<div class="lg:hidden sticky top-0 shadow-md w-full z-50 bg-tss-200 h-14">
    <div class="flex justify-between p-2" >
        <div class="flex justify-start">
            <img alt="TSS Logo" src="https://res.cloudinary.com/poorna/image/upload/c_scale,w_40/v1634060000/tss/favicon.png" >
            <h2 class="text-2xl font-display text-black ml-2 my-auto" >Textile Sourcing Solutions</h2>
        </div>
        <button on:click={toggleNav} class="block my-auto mr-3" >
            <svg class="{navOpen ? 'text-gray-400 block fill-current' : 'block fill-current'}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 21H13V15H21V21ZM11 21H3V11H11V21ZM21 13H13V3H21V13ZM11 9H3V3H11V9Z"></path>
                </svg>
        </button>
    </div>
    <div on:click={toggleNav} class="{navOpen ? 'bg-white px-2 py-2 flex flex-col text-lg space-y-2 shadow-md' : 'hidden'}" >
        <a class="block" href="/" >Home</a>
        <a class="block" href="#about" >About</a>
        <a class="block" href="#services" >Services</a>
        <a class="block" href="/products" >Products</a>
        <a class="block" href="#contact" >Contact</a>
    </div>

</div>


<div class="mainBg bg-no-repeat bg-cover p-0 m-0 bg-left">
    <div class="2xl:px-56 2xl:py-28 lg:px-32 lg:py-14 py-10 px-6">
        <div class="lg:mt-32 lg:w-3/5 pt-4">
            <!-- <h3 class="text-tss-600 font-black lg:text-xl text-base" >Since 1998</h3> -->
            <h1 class="font-display lg:text-6xl text-5xl text-white">Taking fashion forward, since 1998</h1>
            <div class="lg:mt-8 mt-4">
                <p class="text-gray-200 lg:text-xl font-body font-extrabold">
                    Headquartered in Bangalore TSS has been a leading ethical apparel and accessories sourcing solutions provider since 23 years.
                    <br/>
                    <!-- TSS offers a 360 degree solution from designing, to developing, sourcing and logistics essential to build your brand.  -->
                    At TSS, our goal is to lead our industry to a more Effectient, Sustainable and Ethical future
                </p>
            </div>
            <div class="mt-7">
                <a href="#contact" class="bg-tss-600 text-white p-4 px-6 font-extrabold lg:text-lg rounded-full border-2 border-tss-200 hover:shadow-xl hover:border-tss-accent " >
                    Contact Us
                    <svg class="inline fill-current" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.17 13L15.59 15.59L17 17L22 12L17 7L15.59 8.41L18.17 11H2V13H18.17Z"></path>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</div>


<!-- ABOUT US -->
<div id="about" class="2xl:px-44 lg:px-14 lg:py-20 py-8 px-6">
    <div class="lg:grid lg:grid-flow-row lg:grid-cols-6">
        <div class="col-span-2 my-auto" >
            <div class="block" >
            <p class="text-xl"  >About us</p>
            <div class="w-7 h-1 bg-tss-600 mt-2"></div>
            <h3 class="lg:text-5xl 2xl:text-6xl text-4xl font-display text-tss-accent mt-2" >From runway to wardrobe</h3>

            <div class="mt-4 lg:text-lg 2xl:w-3/4 ">
                <!-- <p>
                    How <span class="text-tss-600 font-display">TSS</span> can help you service your customers:
                </p>
                <ul class="ml-3 mt-2 list-disc list-inside">
                    <li> We research and isolate key, relevant trends on a frequent basis </li>
                    <li> We Comp shop to understand strengths and weaknesses of the competition to identify areas of opportunity </li>
                    <li> Acting as our clients Asia office, we create seasonal concept boards, fabric presentation and sample collection based on trend research as well as customer’s specific direction </li>
                    <li> We ensure brand cohesiveness across categories for each customer </li>
                    <li> We strengthen the business with our current customers by delivering monthly collections of newness to create excitement and keep them engaged </li>
                    <li> We call this our ‘Magic Box’ & it consists of our latest works in fabric, apparel, scarves, handbags, home goods </li>
                </ul> -->
                <p>

                </p>
                <p class="mt-3">
                    Passion for Detail, Transparency & Customer satisfaction are our key driving force behind the strong partnerships we built over the years.
                </p>
            </div>
        </div>

        </div>
        <div class="col-span-4 my-auto">
            <div class="flex lg:justify-end justify-center lg:mt-0 mt-4" >
                <img class="relative xl:h-80 h-56 lg:-right-52 rounded-md lg:rounded-br-md z-10 border-b-4 border-r-4 lg:border-b-8 lg:border-r-8 lg:border-white border-tss-accent" alt="bags" src="https://res.cloudinary.com/poorna/image/upload/c_scale,w_600/v1634224235/tss/pexels-ksenia-chernaya-3965545.png" />
                <img class="rounded-md relative hidden lg:block   lg:-bottom-10 border-b-4 border-r-4 border-tss-accent shadow-md " src="https://res.cloudinary.com/poorna/image/upload/c_scale,w_400/v1634223956/tss/pexels-ron-lach-9849320.png" alt="BG"  />
                                
            </div>
        </div>
    </div>
</div>

<!-- CLIENT CAROUSEL -->
<div class="py-3 bg-gray-100">
    <h3 class="text-2xl text-center font-display text-gray-600"> Our Clientele </h3>
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
<!-- OUR MISSION -->
<div class="mission-bg bg-no-repeat bg-cover bg-bottom" >
    <div class="2xl:px-36 lg:px-14 py-16 px-6" >
        <h4 class="lg:text-3xl text-xl text-gray-200" >
            Our Mission
        </h4>
        <div class="w-7 h-1 bg-tss-accent mt-2"></div>
        <h3 class="lg:text-5xl text-4xl font-display text-white mt-4" >
            It takes the best to service the best
        </h3>
        <h4 class="lg:text-2xl text-xl text-gray-200 mt-4" > We are on a mission to leverage our experience, knowledge & network to help global & Indian retail brands build and grow their business in the Indian Sub-continent
        </h4>
        <a href="#contact" class="mt-8 bg-tss-accent py-4 px-8 inline-block rounded-full text-white hover:bg-indigo-800 shadow-lg hover:shadow-xl lg:text-lg ring-2 hover:ring-4" >
            Reach out to us
            <svg class="fill-current text-white inline" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.17 13L15.59 15.59L17 17L22 12L17 7L15.59 8.41L18.17 11H2V13H18.17Z"></path>
            </svg>
        </a>
    </div>
</div>

<!-- OUR SERVICES -->
<div id="services" class="2xl:px-44 lg:px-20 lg:py-20 py-10 px-6 bg-tss-accent" >
    <div>
        <h4 class="text-xl text-gray-200" >Our Services</h4>
        <div class="w-7 h-1 bg-tss-600 mt-2"></div>
        <h1 class="lg:text-5xl text-4xl font-display text-white mt-3" > We provide 360-degree solution to our business partners </h1>
    </div>
    <div class="grid grid-flow-row lg:grid-cols-4 grid-cols-2 mt-10 lg:grid-rows-3" >
        
        {#each services as {name, image}}

        <div class="col-span-1 lg:mx-3 m-1 lg:my-2">
            <div class="bg-tss-200 py-6 px-4 shadow-md rounded border-b-4 border-tss-600 border-solid h-full flex flex-col justify-between" >
                <div class="flex justify-center" >
                    <div class="text-center rounded-full bg-gray-200 inline-block p-6 my-auto" >
                        {@html image}
                    </div>
                </div>
                <div>
                    <h4 class="text-xl text-center text-green-800 font-display font-light mb-0"> {name} </h4>
                </div>

            </div>
        </div>

        {/each}

    </div>
</div>

<div class="2xl:px-44 lg:px-14 lg:py-20 py-8 px-6" >

</div>

<!-- PARTNER LOCATIONS -->
<div class="2xl:px-44 lg:px-20 lg:py-20 py-10 px-6" >
    <div class="grid grid-cols-2" >
        <div class="col-span-1" >
            <h3 class="lg:text-5xl text-4xl font-display text-gray-800" >Partner locations</h3>
            <div class="w-7 h-1 bg-tss-accent mt-2"></div>
            <div class="mt-6 lg:text-lg">
                <p>
                    Work with our partners all over the Indian Subcontinent to get the best in quality products that speak for your brand.
                </p>
            </div>
        </div>
        <div class="col-span-1" >
            <div class="lg:mt-10 h-80" id="chartdiv" ></div>
        </div>
    </div>
</div>

<!-- CONTACT US -->
<div id="contact" class="2xl:px-44 lg:px-20 lg:py-20 py-10 px-6 bg-tss-200 grid grid-cols-4" >
    <div class="col-span-3 " >
        <div>
            <h3 class="text-tss-accent lg:text-5xl text-4xl font-display mt-2" > Reach out to us </h3>
            <div class="w-7 h-1 bg-tss-600 mt-2"></div>
            <p class="mt-3 lg:text-lg" >
                Find out how TSS can help your business grow. Fill the form and we'll reach out to you.
            </p>
        </div>

        <div>

            <div>
            
                <!-- form - start -->
                <form class="max-w-screen-md grid sm:grid-cols-2 gap-4 text-sm mt-4">
                  <div>
                    <label for="name" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Name*</label>
                    <input required name="name" class="w-full bg-gray-200 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"/>
                  </div>
            
                  <div class="sm:col-span-1">
                    <label for="company" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Company</label>
                    <input name="company" class="w-full bg-gray-200 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"/>
                  </div>
            
                  <div class="sm:col-span-1">
                    <label for="email" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Email*</label>
                    <input required name="email" class="w-full bg-gray-200 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"/>
                  </div>
            
            
                  <div class="sm:col-span-2">
                    <label for="message" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Message*</label>
                    <textarea required name="message" class="w-full h-64 bg-gray-200 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"></textarea>
                  </div>
            
                  <div class="sm:col-span-2 flex justify-between items-center">
                    <button type="submit" class=" bg-tss-600 rounded-full px-4 py-3 border-2 border-tss-accent hover:bg-green-800 text-white shadow-md hover:shadow-xl text-lg">
                        Send

                        <svg class="inline fill-current text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.17 13L15.59 15.59L17 17L22 12L17 7L15.59 8.41L18.17 11H2V13H18.17Z"></path>
                        </svg>
                            

                    </button>
            
                    <span class="text-gray-500 text-sm">*Required</span>
                  </div>
            
                </form>
                <!-- form - end -->
              </div>


        </div>


    </div>
    <div class="col-span-1 my-auto" >
        <p class="text-lg font-display text-gray-800" >Registered Address:</p>
        <div class="mt-3 text-gray-700 my-auto" >
            <p class="block" >
                No . 2 , Hayes Road , Richmond Town
                <br>
                Bangalore - 560025
                <br>
                Karnataka
                <br>
                India
            </p>
        </div>
        <div class="mt-3 text-tss-accent" >
            <a href="tel:+918041121400" > +91 80 41121400 </a>
            <br>
            <a href="mailto:contact@tssindia.com" >contact@tssindia.com</a>
        </div>
    </div>
</div>



<div class="bg-tss-200   pt-4 sm:pt-10 lg:pt-12 font-body">
    <footer class="max-w-screen-2xl px-4 md:px-8 mx-auto">
      <div class="flex flex-col items-center border-t pt-6">
        <!-- nav - start -->
        <nav class="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 md:gap-6 mb-4">
          <a href="#about" class="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100">About</a>
          <a href="#services" class="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Services</a>
          <a href="#contact" class="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Contact</a>
        </nav>
        <!-- nav - end -->  
      <div class="text-gray-400 text-sm text-center py-8">
        © 2021 - Present Textile Sourcing Services. All rights reserved.
      </div>
    </footer>
  </div>