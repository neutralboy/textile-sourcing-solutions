<svelte:head>
    <title>
        Textile Sourcing Services | Your trusted textile sourcing and solutions partner
    </title>
    <meta name="Description" content="Headquartered in Bangalore TSS has been a leading ethical apparel and accessories sourcing solutions provider since 23 years"  >
    <meta property="og:title" content="Textile Sourcing Services | Your trusted textile sourcing and solutions partner" />
    <meta property="og:type" content="website" />
    <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
    <!-- <meta property="og:url" content="https://tss.com" /> -->
</svelte:head>
<style>
    .products-bg{
        /* background: linear-gradient(45deg,#CB5EEE, #4BE1EC) W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        background-image: url(https://res.cloudinary.com/poorna/image/upload/c_scale,w_1000/v1636436132/tss/pexels-arina-krasnikova-7002964.png);
        /* background-image: url(https://res.cloudinary.com/poorna/image/upload/c_scale,w_1200/v1636438584/tss/pexels-monstera-7794364.png); */
        background-repeat: no-repeat;
        background-size: cover;
    }
    @media only screen and (min-width: 992px) {
        .mission-bg{
            height: 70vh;
            overflow: hidden;
            position: relative;
        }
        .video_ctn{  
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            object-fit: cover;
        }

        .services-bg{
            /* height: 70vh; */
            overflow: hidden;
            position: relative;
        }
        .video-service-ctn{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            object-fit: cover;
        }

        .fullscreen-70{
            height: 70vh;
        }

    }
    @media only screen and (max-width: 768px) {
        .mission-bg{
            height: 110vh;
            overflow: hidden;
            position: relative;
        }
        .video_ctn{  
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            object-fit: cover;
        }


        .services-bg{
            /* height: 70vh; */
            overflow: hidden;
            position: relative;
        }
        .video-service-ctn{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            object-fit: cover;
        }


    } 
</style>
<script context="module" >
    export const prerender = true;
</script>
<script>
    import {onMount} from "svelte";
    import FadeInText from "../modules/FadeInText.svelte";

    let Carousel;
    let carousel;

    let moreWindowOpen = false;
    let navOpen = false;
    let kmDesc = "";
    let kmHeading = "";
    
    const toggleMoreWindow = () => {
        moreWindowOpen = !moreWindowOpen;
    };

    const toggleNav = () => {
        navOpen = !navOpen
    };

    let brands = [
            `<img class="block mx-3" alt="abercombie" src="https://res.cloudinary.com/poorna/image/upload/c_scale,h_100/v1633870707/tss/abercrombie-fitch-logo.png" />`,
            `<img class="block mx-3" alt="Ralph Lauren" src="https://res.cloudinary.com/poorna/image/upload/c_scale,h_100/v1636434111/tss/ralph-lauren-logo-evolution.png" />`,
            // `<img alt="Ralph Lauren" class="block mx-3 h-20" src="https://res.cloudinary.com/poorna/image/upload/c_scale,h_100/v1633870708/tss/Ralph-Lauren-Logo.png" />`,
            `<img alt="Hollister" class="block mx-3" src="https://res.cloudinary.com/poorna/image/upload/c_scale,h_100/v1633870708/tss/Hollister-symbol.png" />`,
            ` <img alt="American Eagle" class="block mx-3" src="https://res.cloudinary.com/poorna/image/upload/c_scale,h_100/v1633870708/tss/American-Eagle-Logo-1985.png" />`,
            `<img class="block mx-3 w-32 my-auto" src="https://res.cloudinary.com/poorna/image/upload/c_scale,h_200/v1635942435/tss/877cbd5d8ca8d415a541f9274fcd0ea2.png" alt="Chubbies" />`,
           ` <img class="block mx-3 w-36" src="https://res.cloudinary.com/poorna/image/upload/v1633870707/tss/superdry.png" alt="Superdry" />`,
           `<img alt="Easter Mountain Sports" class="block mx-3 my-auto" src="https://res.cloudinary.com/poorna/image/upload/c_scale,h_80/v1633870854/tss/eastern-mountain-sports-logo-05F9379E20-seeklogo.com.png" />`,
           `<img alt="Champion" class="block mx-3 h-10 my-auto" src="https://res.cloudinary.com/poorna/image/upload/c_scale,h_100/tss/Champion-logo.png" />`,
           `<img alt="Liliy Pulitzer" class="block mx-3 h-16 my-auto" src="https://res.cloudinary.com/poorna/image/upload/c_scale,h_100/v1633871690/tss/lilly-pulitzer-logo_0.png" />`,
            `<img alt="Sundance" class="mx-3 block" src="https://res.cloudinary.com/poorna/image/upload/c_scale,h_100/v1635942907/tss/71835468_10157074377789790_6526269524293976064_n_400x.png" />`,
            `<img alt="Amazon" class="block mx-3 my-auto h-14" src="https://res.cloudinary.com/poorna/image/upload/c_scale,h_100/v1633870945/tss/amazon-logo-transparent.png" />`,
            `<img alt="Being Human" class="block mx-3 my-auto h-24" src="https://res.cloudinary.com/poorna/image/upload/c_scale,h_150/v1633871111/tss/41YTcyA8eeL.png" />`,
            `<img alt="Pantaloons" class="block mx-3 my-auto w-32" src="https://res.cloudinary.com/poorna/image/upload/v1633871039/tss/Pantaloons-Gift-Voucher-SDL026711860-1-90e34.png" />`,
            `<img alt="Killer" class="mx-3 block h-10 my-auto" src="https://res.cloudinary.com/poorna/image/upload/c_scale,h_100/v1635943028/tss/98605b358b0a048af6b8cb3e1011917b.png" />`,
    ];

    // CHENNIA
    // COIMBATORE
    // TIRRUPUR
    // DELHI
    // LUDHIANA
    // BANGALORE
    // BIJAPUR
    // DHAKA

    onMount(async ()=>{
        const module = await import('svelte-carousel');
        Carousel = module.default;
        // await import("../modules/maps");
    });

    const services = [
        {
            name: "Design to Delivery Model",
            tagline: "Rich in experience & inspiration",
            image: `<svg class="inline-block fill-current text-gray-600" width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.41999 20.579C4.13948 20.5785 3.87206 20.4603 3.68299 20.253C3.49044 20.0475 3.39476 19.7695 3.41999 19.489L3.66499 16.795L14.983 5.48103L18.52 9.01703L7.20499 20.33L4.51099 20.575C4.47999 20.578 4.44899 20.579 4.41999 20.579ZM19.226 8.31003L15.69 4.77403L17.811 2.65303C17.9986 2.46525 18.2531 2.35974 18.5185 2.35974C18.7839 2.35974 19.0384 2.46525 19.226 2.65303L21.347 4.77403C21.5348 4.9616 21.6403 5.21612 21.6403 5.48153C21.6403 5.74694 21.5348 6.00146 21.347 6.18903L19.227 8.30903L19.226 8.31003Z"></path>
                        </svg>`,
            desc: `
            We stay one step ahead:
            <ul class="list-disc ml-2" >
                <li>We Research and isolate key, relevant trends, on a frequent basis</li>
                <li>We Comp shop to understand strengths and weaknesses of the competition to identify areas of
            opportunity</li>
                <li>Acting as our clients Asia office, we create seasonal concept boards, fabric presentation and
            sample collection based on trend research as well as customer’s specific direction</li>
                <li>We ensure brand cohesiveness across categories for each customer</li>
                <li>We strengthen the business with our current customers by delivering monthly collections of
            newness to create excitement and keep them engaged</li>
                <li>We call this our ‘Magic Box’ &amp; it consists of our latest works in fabric, apparel, scarves,
            handbags, home goods</li>
            </ul>`
        }, 
        {
            name: "Quality",
            tagline: "Good quality never goes out of fashion",
            image: `<svg class="inline-block fill-current text-gray-600" width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 21H13V15H21V21ZM11 21H3V11H11V21ZM21 13H13V3H21V13ZM11 9H3V3H11V9Z" fill="#2E3A59"></path>
                </svg>
                `,
            desc: `Every yarn &amp; every stitch of our product speaks of the superior quality that is carefully ensured at every
                    stage from Vendor finalization, Raw material Sourcing , Sampling, Pre Production &amp; Production.`
        },
        {
            name: "Costing",
            tagline: "Efficient Sourcing & Negotiation for Success",
            image: `<svg class="inline-block fill-current text-gray-600" width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 21.5C5.95411 21.4935 4.59326 20.4795 4.145 19H2V17H4.145C4.6599 15.273 6.40204 14.2192 8.1707 14.565C9.93936 14.9108 11.1563 16.5431 10.9828 18.3369C10.8094 20.1307 9.30215 21.4995 7.5 21.5ZM7.5 16.5C6.67157 16.5 6 17.1716 6 18C6 18.8284 6.67157 19.5 7.5 19.5C8.32843 19.5 9 18.8284 9 18C9 17.1716 8.32843 16.5 7.5 16.5ZM22 19H12V17H22V19ZM16.5 15.5C14.6979 15.4995 13.1906 14.1307 13.0172 12.3369C12.8437 10.5431 14.0606 8.91084 15.8293 8.56503C17.598 8.21923 19.3401 9.27297 19.855 11H22V13H19.855C19.4067 14.4795 18.0459 15.4935 16.5 15.5ZM16.5 10.5C15.6716 10.5 15 11.1716 15 12C15 12.8284 15.6716 13.5 16.5 13.5C17.3284 13.5 18 12.8284 18 12C18 11.1716 17.3284 10.5 16.5 10.5ZM12 13H2V11H12V13ZM9.5 9.49999C7.69785 9.49953 6.19063 8.1307 6.01715 6.33692C5.84367 4.54314 7.06064 2.91084 8.8293 2.56503C10.598 2.21923 12.3401 3.27297 12.855 4.99999H22V6.99999H12.855C12.4065 8.47928 11.0458 9.4932 9.5 9.49999ZM9.5 4.49999C8.68198 4.5011 8.01568 5.15742 8.00223 5.97534C7.98878 6.79325 8.63315 7.47112 9.45069 7.49911C10.2682 7.52711 10.9575 6.89491 11 6.07799V6.36799V5.99999C11 5.17157 10.3284 4.49999 9.5 4.49999ZM5 6.99999H2V4.99999H5V6.99999Z" fill="#2E3A59"></path>
                    </svg>
                    `,
            desc: `We work closely with our vendor partners to help, better sourcing, increase efficiency by
                    automation & also work on re-engineer products without changing the aesthetics of the
                    product.`
        },
        {
            name: "Manufacturing & Technical Support",
            tagline: "Everything lies in the detail",
            image: `<svg class="inline-block fill-current text-gray-600" width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 21H4C2.89543 21 2 20.1046 2 19V9C2 7.89543 2.89543 7 4 7H5V5C5 3.89543 5.89543 3 7 3H20C21.1046 3 22 3.89543 22 5V16C22 17.1046 21.1046 18 20 18H12V19C12 20.1046 11.1046 21 10 21ZM4 9V19H10V9H4ZM7 7H10C11.1046 7 12 7.89543 12 9V16H20V5H7V7Z" fill="#2E3A59"></path>
                    </svg>
                    `,
            desc: `We take responsibility of every step of Production &amp; support our customers till the final delivery of the
                    product. From creating tech packs to conducting fit session, tracking Sample approvals , tracking Raw
                    materials , Tracking factory planning , on time start of production &amp; daily target vs achieved &amp; on time
                    delivery to customer.. We provide a holistic technical support structure.`
        },
        {
            name: "Social Footprint",
            tagline: "Fashioning a Better World.",
            image: `<svg class="inline-block fill-current text-gray-600" width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 3C6.23858 3 4 5.23858 4 8C4 10.7614 6.23858 13 9 13C11.7614 13 14 10.7614 14 8C14 5.23858 11.7614 3 9 3ZM6 8C6 6.34315 7.34315 5 9 5C10.6569 5 12 6.34315 12 8C12 9.65685 10.6569 11 9 11C7.34315 11 6 9.65685 6 8Z" fill="#2E3A59"></path>
                    <path d="M16.9084 8.21828C16.6271 8.07484 16.3158 8.00006 16 8.00006V6.00006C16.6316 6.00006 17.2542 6.14956 17.8169 6.43645C17.8789 6.46805 17.9399 6.50121 18 6.5359C18.4854 6.81614 18.9072 7.19569 19.2373 7.65055C19.6083 8.16172 19.8529 8.75347 19.9512 9.37737C20.0496 10.0013 19.9987 10.6396 19.8029 11.2401C19.6071 11.8405 19.2719 12.3861 18.8247 12.8321C18.3775 13.2782 17.8311 13.6119 17.2301 13.8062C16.6953 13.979 16.1308 14.037 15.5735 13.9772C15.5046 13.9698 15.4357 13.9606 15.367 13.9496C14.7438 13.8497 14.1531 13.6038 13.6431 13.2319L13.6421 13.2311L14.821 11.6156C15.0761 11.8017 15.3717 11.9248 15.6835 11.9747C15.9953 12.0247 16.3145 12.0001 16.615 11.903C16.9155 11.8059 17.1887 11.639 17.4123 11.416C17.6359 11.193 17.8035 10.9202 17.9014 10.62C17.9993 10.3198 18.0247 10.0006 17.9756 9.68869C17.9264 9.37675 17.8041 9.08089 17.6186 8.82531C17.4331 8.56974 17.1898 8.36172 16.9084 8.21828Z" fill="#2E3A59"></path>
                    <path d="M19.9981 21C19.9981 20.475 19.8947 19.9551 19.6938 19.47C19.4928 18.9849 19.1983 18.5442 18.8271 18.1729C18.4558 17.8017 18.0151 17.5072 17.53 17.3062C17.0449 17.1053 16.525 17.0019 16 17.0019V15C16.6821 15 17.3584 15.1163 18 15.3431C18.0996 15.3783 18.1983 15.4162 18.2961 15.4567C19.0241 15.7583 19.6855 16.2002 20.2426 16.7574C20.7998 17.3145 21.2417 17.9759 21.5433 18.7039C21.5838 18.8017 21.6217 18.9004 21.6569 19C21.8837 19.6416 22 20.3179 22 21H19.9981Z" fill="#2E3A59"></path>
                    <path d="M16 21H14C14 18.2386 11.7614 16 9 16C6.23858 16 4 18.2386 4 21H2C2 17.134 5.13401 14 9 14C12.866 14 16 17.134 16 21Z" fill="#2E3A59"></path>
                    </svg>
                    `,
            desc: `When it comes to Social Responsibility, we at TSS like to lead by Example.. We ensure we abide by
                    stringent ethical compliances, create gender parity &amp; work towards creating environmentally
                    sustainable solutions.`
        },
        {
            name: "Logistics",
            tagline: "We will always go the extra mile",
            image: `<svg class="inline-block fill-current text-gray-600" width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 20L4 16L9 12V15H22V17H9V20ZM15 12V9H2V7H15V4L20 8L15 12Z" fill="#2E3A59"></path>
                    </svg>
                    `,
            desc: `Our logistics dept goes several steps beyond merely moving Merchandise from origin to destination.
                    We anticipate even the smallest of challenges &amp; set up contingency plans to ensure timely delivery.
                    Our logistics specialists assist in a seamless flow of merchandise from the point of origin to the point of sale. <br/> We ensure all documentary requirements related to export as well as import of merchandise are complied with. 
                    And our clients are kept updated about the shipment status till it reaches their warehouse. <br/> Logistics as we practice, is all about guaranteeing merchandise arrives at the right place at the right time.
                    Competition in the ever-changing logistics industry is intense.`
        },
        {
            name: "Speed to Market",
            tagline: "Business that has speed has success",
            image: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C19.995 7.58378 16.4162 4.00496 12 4ZM17 13H11V7H13V11H17V13Z" fill="#2E3A59"></path>
                    </svg>
                    `
        },
        {
            name: "Fabric R&D",
            tagline: "Innovation is the future",
            image: `<svg class="inline-block fill-current text-gray-600" width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 23.27L3 16.27L4.62 15.01L11.99 20.74L19.37 15.001L21 16.27L12 23.27ZM12 19L3 12L4.62 10.74L11.99 16.47L19.37 10.73L21 12L12 19ZM12 14.73L4.63 9.00001L3 7.73001L12 0.730011L21 7.73001L19.36 9.00001L12 14.73Z" fill="#2E3A59"></path>
                </svg>
                `
        },
        {
            name: "Wash",
            tagline: "Research & Development",
            image: `<svg class="inline-block fill-current text-gray-600" width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C7.439 22 4 20.065 4 17.5V6.00003H4.047C4.39672 4.70028 5.33486 3.63927 6.582 3.13303C8.27819 2.34782 10.1313 1.9603 12 2.00003C16.561 2.00003 20 3.93503 20 6.50003C19.999 6.66779 19.9829 6.83513 19.952 7.00003H20V17.5C20 20.065 16.561 22 12 22ZM5.777 9.39403V17.5C5.777 18.519 8.2 20 12 20C15.8 20 18.222 18.519 18.222 17.5V9.39403C16.3471 10.5202 14.1857 11.0781 12 11C9.81398 11.078 7.6523 10.5201 5.777 9.39403ZM12 4.00003C8.2 4.00003 5.777 5.48103 5.777 6.50003C5.777 7.51903 8.2 9.00003 12 9.00003C15.8 9.00003 18.222 7.51903 18.222 6.50003C18.222 5.48103 15.8 4.00003 12 4.00003Z" fill="#2E3A59"></path>
                </svg>
                `
        }
    ];

    const products = [
        {
            name: "Men's wear",
            content: "Shirts, Jackets & Bottoms",
            bg: "https://res.cloudinary.com/poorna/image/upload/c_scale,w_600/v1634407403/tss/pexels-anna-tis-7006753.png"
        },
        {
            name: "Women's wear",
            content: "Tops, Skirts, Dresses, Bottoms & Jackets",
            bg: "https://res.cloudinary.com/poorna/image/upload/c_scale,w_600/v1634454479/tss/pexels-ron-lach-8386652.png"
        },
        {
            name: "Kids's wear",
            bg: "https://res.cloudinary.com/poorna/image/upload/c_scale,w_600/v1634455077/tss/pexels-polina-tankilevitch-3875080.png"
        },
        {
            name: "Knits",
            content: "Tee, Polo, Sweatshirt & Outerwear",
            bg: "https://res.cloudinary.com/poorna/image/upload/c_scale,w_600/v1634455467/tss/mediamodifier-kJXGTOY1wLQ-unsplash.png"
        },
        {
            name: "Leather",
            content: "Apparel & Small Leather Goods",
            bg: "https://res.cloudinary.com/poorna/image/upload/c_scale,w_600/v1634455598/tss/robbie-noble-ruNmAlLLnpo-unsplash.png"
        },
        {
            name: "Accessories",
            content: "Scarves, Jewellery, Bags & Belts",
            bg: "https://res.cloudinary.com/poorna/image/upload/c_scale,w_600/v1634455766/tss/trinh-minh-th-ScYGyGhA9HQ-unsplash.png"
        },
        {
            name: "Home",
            content: "Towels, Bedsheets & Cushion Covers",
            bg: "https://res.cloudinary.com/poorna/image/upload/c_scale,w_600/v1634455896/tss/sven-mieke-BB3dR-N5Npg-unsplash.png"
        }
    ];

    const openServiceDescription = (id) => {

        if( services[id].desc ){
            toggleMoreWindow();
            kmHeading = services[id].name || "";
            kmDesc = services[id].desc || "";
        };

    };

</script>

<!-- DESKTOP NAV -->
<nav class="hidden lg:flex justify-center sticky top-0 bg-white z-50">
    <div class="flex justify-between py-4 pl-4 pr-10 shadow-md bg-white rounded sticky w-full">
        <div class="flex">
            <img height="100" width="100" class="block h-16 w-16" src="/favicon.png" alt="TSS Logo" />
            <div class="my-auto" >
                <h2 class="block my-auto ml-4 font-display text-2xl text-gray-900" >Textile Sourcing Services</h2>
                <h3 class="block text-gray-700 ml-4" > Taking Fashion forward since 1998 – From Runway to Wardrobe </h3>
            </div>

        </div>
        <div class="flex justify-between space-x-6 text-lg font-display">
            <div class="my-auto">
                <a class="hover:text-tss-600" href="/" >Home</a>
            </div>
            <div class="my-auto">
                <a class="hover:text-tss-600" href="#about" >About</a>
            </div>
            <div class="my-auto">
                <a class="hover:text-tss-600" href="#mission" >Mission</a>
            </div>
            <div class="my-auto">
                <a class="hover:text-tss-600" href="#clientele" >Clientele</a>
            </div>
            <div class="my-auto">
                <a class="hover:text-tss-600" href="#services" >Services</a>
            </div>
            <div class="my-auto">
                <a class="hover:text-tss-600" href="#products" >Products</a>
            </div>
            <div class="my-auto">
                <a class="hover:text-tss-600" href="#contact" >Contact</a>
            </div>
        </div>
    </div>
</nav>

<!-- MOBILE NAV -->
<div class="lg:hidden sticky top-0 shadow-md w-full z-50 bg-tss-200 h-14">
    <div class="flex justify-between p-2" >
        <div class="flex justify-start">
            <img alt="TSS Logo" src="https://res.cloudinary.com/poorna/image/upload/c_scale,w_40/v1634060000/tss/favicon.png" >
            <h2 class="text-xl font-display text-black ml-2 my-auto" >Textile Sourcing Solutions</h2>
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
        <a class="block" href="#mission" >Mission</a>
        <a class="block" href="#services" >Services</a>
        <a class="block" href="#products" >Products</a>
        <a class="block" href="#contact" >Contact</a>
    </div>

</div>

<div class="flex justify-center animate__animated animate__fadeIn" >
    <img alt="Main" src="https://res.cloudinary.com/poorna/image/upload/v1635169034/tss/office_tss.png" />
</div>

<!-- ABOUT US -->
<div id="about" class="2xl:px-44 lg:px-14 lg:py-20 py-8 px-6">
    <div class="lg:grid lg:grid-flow-row lg:grid-cols-6">
        <div class="col-span-3 my-auto" >
            <div class="block" >
            <p class="text-xl"  >About us</p>
            <div class="w-7 h-1 bg-tss-600 mt-2"></div>
            <h3 class="lg:text-3xl 2xl:text-6xl text-3xl font-display text-tss-accent mt-2" >Fit for the very Best</h3>

            <div class="mt-4 lg:text-base lg:w-10/12 2xl:w-3/4">
                <p class="" >
                    <FadeInText text={`Headquartered in Bangalore, TSS started way back in 1998 when we made sourcing from Southeast Asia
                        more efficient by providing fast, cost, friendly &amp; flexible service tailored to individual client needs.`} className="animate__slideInLeft" />
                </p>
                <p class="mt-3">
                    <FadeInText
                        text={`Today we run a powerhouse, that services some of the most respected &amp; culturally significant brands in
                            the world doing everything we can to ensure their presence reaches every corner of the globe.`}
                        className="animate__slideInLeft animate__delay-1s animate__slower"
                    />
                    
                </p>
                <p class="mt-3" >
                    <FadeInText
                        text={`Over the years, we have supported iconic Brands like Abercrombie &amp; Fitch, American Eagle, Ralph
                            Lauren, Super Dry &amp; many more brands build &amp; grow their business in the Indian Sub-continent by
                            ethical &amp; sustainable sourcing.`} className="animate__slideInLeft animate__delay-3s animate__slower"
                    />
                    
                </p>
            </div>
        </div>

        </div>
        <div class="col-span-3 my-auto">
            <div class="flex lg:justify-end justify-center lg:mt-0 mt-4" >
                <!-- <img class="relative xl:h-80 h-56 lg:-right-52 rounded-md lg:rounded-br-md z-10 border-b-4 border-r-4 lg:border-b-8 lg:border-r-8 lg:border-white border-tss-accent" alt="bags" src="https://res.cloudinary.com/poorna/image/upload/c_scale,w_600/v1634224235/tss/pexels-ksenia-chernaya-3965545.png" />
                <img class="rounded-md relative hidden lg:block   lg:-bottom-10 border-b-4 border-r-4 border-tss-accent shadow-md " src="https://res.cloudinary.com/poorna/image/upload/c_scale,w_400/v1634223956/tss/pexels-ron-lach-9849320.png" alt="BG"  /> -->
                                
                <video autoplay loop muted style="xl:h-80 h-64 rounded-md lg:rounded-br-md z-10 border-b-4 border-r-4 lg:border-b-8 lg:border-r-8 lg:border-white border-tss-accent" >
                    <source src="https://res.cloudinary.com/poorna/video/upload/c_scale,w_600/v1635940989/tss/production_ID_4621999.mp4" type="video/mp4" >
                    <source src="https://res.cloudinary.com/poorna/video/upload/c_scale,w_600/v1635940989/tss/production_ID_4621999.webm" type="video/webm" />
                </video>

            </div>
        </div>
    </div>
</div>

<!-- OUR MISSION -->
<div id="mission" class="mission-bg bg-gray-900 bg-opacity-50" >
    <video autoplay loop muted class="video_ctn" >
        <source src="https://res.cloudinary.com/poorna/video/upload/ac_none,c_scale,q_auto,vc_auto,w_2000/v1635269236/tss/pexels-karolina-grabowska-5743177.mp4" type="video/mp4" >
        <source src="https://res.cloudinary.com/poorna/video/upload/ac_none,c_scale,q_auto,vc_auto,w_2000/v1635269236/tss/pexels-karolina-grabowska-5743177.webm" type="video/webm" />
    </video>
    <div class="2xl:px-36 lg:px-14 py-16 px-6" >
        <h4 class="lg:text-3xl text-xl text-gray-200" >
            Our Mission
        </h4>
        <div class="w-7 h-1 bg-tss-accent mt-2"></div>
        <h3 class="lg:text-3xl text-2xl font-display text-white mt-4" >
            It takes the best to service the best
        </h3>
        <div class="mt-4 text-gray-200 text-lg" >
            <p>
                <FadeInText text={`We are on a mission to leverage our experience, knowledge &amp; network to help global &amp; Indian retail
                    brands build & grow their business in the Indian Sub-continent.`} className="animate__slideInLeft" />
            </p>
            <p class="mt-3">
                <FadeInText text={`Our ability to anticipate future challenges & respond effectively to changing market demands is our core strength
                    that we offer to both our Vendor & Customer partners in building a sustainable & ethical business.`} className="animate__delay-1s animate__slideInLeft animate__slower" />
            </p>
            <p class="mt-3">
                <FadeInText text={`Passion for detail, transparency & customer satisfaction are the key driving force behind our strong
                    partnerships that we have built over the years.`} className="animate__delay-3s animate__slideInLeft animate__slower" />
            </p>
            <p class="mt-3">
                <FadeInText text={`When it comes to servicing some of the best & biggest brands in the world, we ensure our design team
                    is on par with the best in the industry & our team brings real time insight into current trends with their
                    expertise in design & international sourcing so that our customers are empowered to bring their ideas to
                    life.`} className="animate__delay-5s animate__slideInLeft animate__slower" />
            </p>
        </div>
        <a href="#contact" class="mt-8 bg-tss-accent py-4 px-8 inline-block rounded-full text-white hover:bg-indigo-800 shadow-lg hover:shadow-xl lg:text-lg ring-2 hover:ring-4" >
            Reach out to us
            <svg class="fill-current text-white inline" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.17 13L15.59 15.59L17 17L22 12L17 7L15.59 8.41L18.17 11H2V13H18.17Z"></path>
            </svg>
        </a>
    </div>
</div>

<!-- CLIENT CAROUSEL -->
<div class="py-3 bg-gray-100">
    <h3 class="text-2xl text-center font-display text-gray-600"> Our Clientele </h3>
    <div>
        <svelte:component this={Carousel} bind:this={carousel} arrows={false} autoplay={true} dots={false} particlesToShow={8} autoplayDuration={15} >
            {#each brands as brand}
                {@html brand}
            {/each}
        </svelte:component>
    </div>
</div>

<!-- OUR SERVICES -->
<div id="services" class="2xl:px-44 lg:px-20 lg:py-20 py-10 px-6 bg-opacity-50 bg-gray-900 services-bg" >
    <video autoplay loop muted class="video-service-ctn" >
        <source src="https://res.cloudinary.com/poorna/video/upload/ac_none,c_scale,q_auto,vc_auto,w_2000/v1635269236/tss/pexels-karolina-grabowska-5743177.mp4" type="video/mp4" >
        <source src="https://res.cloudinary.com/poorna/video/upload/ac_none,c_scale,q_auto,vc_auto,w_2000/v1635269236/tss/pexels-karolina-grabowska-5743177.webm" type="video/webm" />
    </video>
    <div>
        <h4 class="text-xl text-gray-200" >Our Services</h4>
        <div class="w-7 h-1 bg-tss-600 mt-2"></div>
        <h1 class="lg:text-3xl text-3xl font-display text-white mt-3" > We provide 360-degree solution to your business </h1>
    </div>
    <div class="grid grid-flow-row lg:grid-cols-3 grid-cols-2 mt-4 lg:grid-rows-3" >
        
        {#each services as {name, image, tagline, desc}, s}

        <div class="col-span-1 lg:mx-1 m-1 my-3 block">
            <div class="bg-tss-200 shadow-md pb-3 h-full" >
                <div class=" px-1 flex flex-col justify-between h-full" >
                    <div class="lg:flex lg:flex-row lg:justify-around lg:my-auto mx-auto lg:mx-0" >
                        <div class="text-center rounded-full bg-gray-200 inline-block p-3 lg:my-auto mx-auto lg:mx-0 mt-2" >
                            {@html image}
                        </div>
                        <div class="lg:my-auto mt-2" >
                            <h4 class="text-lg text-center text-green-800 font-display font-light lg:my-auto"> 
                                {name}
                            </h4>
                        </div>
                    </div>
                    <div>
                        <p class="my-1 text-center first-letter:capitalize lowercase" >{tagline || ""}</p>
                    </div>
                </div>
                {#if desc }
                    <div>
                        <button on:click={() => openServiceDescription(s)} class="w-full bg-tss-600 px-2 py-1 text-gray-200 hover:bg-green-600 shadow-md hover:shadow-lg" >Know more</button>
                    </div>
                {/if}

            </div>
        </div>

        {/each}

    </div>
</div>

<!-- PRODUCTS -->
<div id="products" class="bg-tss-600 products-bg " >
    <div class="2xl:px-44 lg:px-14 lg:pt-20 pt-8 pb-2 px-6 " >
        <h3 class="text-3xl text-black font-display" >Products</h3>    
        <div class="w-7 h-1 bg-tss-accent mt-2"></div>

        <div class="mt-4 grid lg:grid-cols-4 grid-cols-2" >
            {#each products as { name, bg, content} }
                <div class="bg-white rounded-md m-1 flex flex-col" >
                    <div>
                        <img class="lg:h-56 h-36 block mx-auto" alt={name} src={bg} />
                    </div>
                    <div class="text-center my-auto py-2" >
                        <h4 class="text-2xl block mx-auto font-display" >{name}</h4>
                        {#if content }
                            <p class="text-gray-700 mt-2" > {content} </p>
                        {/if}

                    </div>
                </div>
            {/each}
        </div>

    </div>


</div>

<!-- PARTNER LOCATIONS -->
<div class="2xl:px-44 lg:px-20 lg:py-20 py-10 px-6" >
    <div >
        <div >
            <h3 class="lg:text-3xl text-3xl font-display text-gray-800" >Partner locations</h3>
            <div class="w-7 h-1 bg-tss-accent mt-2"></div>
            <div class="mt-6 lg:text-lg">
                <p>
                    Work with our partners all over the Indian Subcontinent to get the best in quality products that speak for your brand.
                </p>
            </div>
        </div>
        <div >
            <!-- <div class="lg:mt-10" style="height: 90vh;" id="chartdiv" ></div> -->
            <div class="mt-10 flex justify-center">
                <img class="fullscreen-70" alt="Map of partner locations" src="https://res.cloudinary.com/poorna/image/upload/v1636438485/tss/Screenshot_2021-11-09_at_11-43-37_Screenshot.png" />
            </div>
        </div>
    </div>
</div>

<!-- CONTACT US -->
<div id="contact" class="2xl:px-44 lg:px-20 lg:py-20 py-10 px-6 bg-tss-200 lg:grid lg:grid-cols-4" >
    <div class="lg:col-span-3 " >
        <div>
            <h3 class="text-tss-accent lg:text-3xl text-3xl font-display mt-2" > Reach out to us </h3>
            <div class="w-7 h-1 bg-tss-600 mt-2"></div>
        </div>
        <div class="mt-3" >
            <p class="text-2xl font-display text-gray-800" >Registered Address:</p>
            <div class="mt-3 text-gray-700 my-auto" >
                <p class="block text-xl" >
                    No . 2 , Hayes Road , Richmond Town
                    <br>
                    Bangalore - 560025
                    <br>
                    Karnataka
                    <br>
                    India
                </p>
            </div>
            <div class="mt-3 text-tss-accent text-xl" >
                <a href="tel:08041121400" > 080 41121400 </a>
                <br>
                <a href="mailto:contact@tssindia.com" >contact@tssindia.com</a>
            </div>
        </div>

            <!-- <div>
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
              </div> -->


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

<!-- KNOW MORE WINDOW -->
<div class={`antialiased fixed z-50 top-0 left-0 right-0 bottom-0 ${ moreWindowOpen ? "flex" : "hidden" } `} >
    <div class="bg-gray-800 opacity-60 overflow-hidden min-h-screen min-w-full top-0 left-0 right-0 bottom-0 absolute"></div>
    <button on:click={toggleMoreWindow} class="absolute right-3 top-3 hidden lg:block">
        <svg  class="inline fill-current text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41L17.59 5Z"></path>
        </svg>
    </button>
      
        <button on:click={toggleMoreWindow} id="close-get-details-modal" class="fixed right-3 top-3 lg:hidden bg-black z-50 ">
            <svg class="inline fill-current text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41L17.59 5Z"></path>
              </svg>
        </button>
    <div class="text-gray-900 lg:px-auto my-auto max-h-screen min-w-full relative flex justify-center overflow-scroll" >
        <div class="shadow-xl lg:rounded-md p-4 px-6 py-10 bg-white lg:w-3/4 w-full h-full">
            <h2 class="text-3xl font-display" > {kmHeading} </h2>
            <div class="text-base mt-6" >
                <p>
                    {@html kmDesc}
                </p>
            </div>
        </div>
    </div>
</div>


