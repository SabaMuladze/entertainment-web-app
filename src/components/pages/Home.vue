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
                            <p class="text-[12px] md:text-[16px] text-gray-400">{{ trending.year}} {{ trending.category }} {{ trending.rating }}</p>
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
                            <p class="text-[10px] md:text-[14px] text-gray-400">{{ recommended.year}} {{ recommended.category }} {{ recommended.rating }}</p>
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