<template>
    <div class=" xl:w-full  xl:pl-0 xl:overflow-x-hidden">
        <div class="p-2 xl:pl-0">
            <div class="flex py-2 gap-2">
                <img class="w-6 h-6 md:h-8 md:w-8" src="../../../public/icon-search.svg" alt="">
                <input v-model="filterMovies" placeholder="Search for movies or TV series" class="bg-transparent w-80 outline-none" type="text">
            </div>
            <h2>Trending</h2>
            <swiper 
    :spaceBetween="10"
    :modules="modules"
    :breakpoints="{
      '@0.00': {
        slidesPerView: 1.2,
        spaceBetween: 10,
      },
      '@0.50':{
        slidesPerView:1.7,
        spaceBetween:15,
      },
      '@0.75': {
        slidesPerView: 2.2,
        spaceBetween: 20,
      },
      }"
    class="mySwiper"
             >
                <SwiperSlide class="cursor-pointer"   v-for="(trending) in trendings" :key="trending.title">
                        <img class="rounded-lg  md:hidden" v-if="trending.isTrending == true && small " :src="trending.thumbnail.trending.small" alt="">
                        <img class="rounded-lg max-md:hidden " v-else-if="trending.isTrending == true && large" :src="trending.thumbnail.trending.large" alt="">
                        <div class=" w-full absolute bottom-0 p-5 rounded-lg  bg-gradient-to-b from-transparent  to-black ">
                            <p class="text-[12px] md:text-[16px] text-gray-400 flex items-center gap-2">{{ trending.year}}
                               <svg v-if="trending.category == 'Movie'"  width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.689H5.448L7.068.722 6.132 0 4.2 2.345 2.268.017l-.936.705 1.62 1.967H0V12h12V2.689Zm-4.8 8.147h-6V3.853h6v6.983Zm3-2.328H9V7.344h1.2v1.164Zm0-2.328H9V5.016h1.2V6.18Z" fill="#FFF" opacity=".75"/></svg>
                               <svg v-else  width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M10.173 0H1.827A1.827 1.827 0 0 0 0 1.827v8.346C0 11.183.818 12 1.827 12h8.346A1.827 1.827 0 0 0 12 10.173V1.827A1.827 1.827 0 0 0 10.173 0ZM2.4 5.4H1.2V4.2h1.2v1.2ZM1.2 6.6h1.2v1.2H1.2V6.6Zm9.6-1.2H9.6V4.2h1.2v1.2ZM9.6 6.6h1.2v1.2H9.6V6.6Zm1.2-4.956V2.4H9.6V1.2h.756a.444.444 0 0 1 .444.444ZM1.644 1.2H2.4v1.2H1.2v-.756a.444.444 0 0 1 .444-.444ZM1.2 10.356V9.6h1.2v1.2h-.756a.444.444 0 0 1-.444-.444Zm9.6 0a.444.444 0 0 1-.444.444H9.6V9.6h1.2v.756Z" fill="#FFF" opacity=".75"/></svg>
                                 {{ trending.category }} {{ trending.rating }}</p>
                            <h3 class="text-[15px] md:text-[28px]" > {{ trending.title }}</h3>
                        </div>
                </SwiperSlide>
            </swiper>
        </div>
        <div>
            <h2>Recommended for you</h2>
            <div class="w-full flex flex-wrap">
                <div class="relative w-[50%] md:w-[33%] lg:w-[25%] p-2" v-for="recommended in filterData " :key="recommended.title">
                    <img class="rounded-lg  md:hidden"  :src="recommended.thumbnail.regular.small" alt="">
                    <img class="rounded-lg max-md:hidden " :src="recommended.thumbnail.regular.medium" alt="">
                        <div class=" w-full rounded-lg   ">
                            <p class="text-[10px] md:text-[14px] text-gray-400 flex items-center gap-2">{{ recommended.year}}
                                <img v-if="recommended.category == 'Movie'" src="../../../public/icon-category-movie.svg" alt="">
                                <img v-else src="../../../public/icon-category-tv.svg" alt="">
                                 {{ recommended.category }} {{ recommended.rating }}</p>
                            <h3 class="text-[15px] md:text-[18px] font-semibold" > {{ recommended.title }}</h3>
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import data from '../../../data.json'
import 'swiper/css';
import '../../styles.css';

export default{
    data() {
        return {
            moviesData:data,
            trendings: [],
            filterData:[],
        }
    },
    components:{
        Swiper,
        SwiperSlide
    },
    computed:{
        small(){
           return screen.width <= 768
        },
        large(){
           return screen.width >= 768
        }
    },
    created(){
    const trendings = this.moviesData.filter(data => data.isTrending)
     this.trendings = trendings
     this.filterData = this.moviesData
    //  this.filterData = this.moviesData.filter()
    },
    mounted(){
        console.log(this.trendings);
    }
}
</script>


<style scoped>
h2{
    @apply text-[20px] py-2  md:text-[32px] md:py-4
}
</style>