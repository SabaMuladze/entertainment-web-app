<template>
    <div class=" xl:w-full p-6 xl:pl-0 xl:overflow-x-hidden">
        <div>
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
                <SwiperSlide  v-for="(trending) in trendings" :key="trending.title">
                        <img class="rounded-lg min-w-[230px] max-w-[260px] md:hidden" v-if="trending.isTrending == true && small " :src="trending.thumbnail.trending.small" alt="">
                        <img class="rounded-lg hidden" v-else-if="trending.isTrending == true && large" :src="trending.thumbnail.trending.large" alt="">
                        <div class="absolute bottom-0 p-5">
                            <p>{{ trending.year}} {{ trending.category }} {{ trending.rating }}</p>
                            <h3 class="text-[28px]" > {{ trending.title }}</h3>
                        </div>
                </SwiperSlide>
            </swiper>
        </div>
        <div></div>
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
    },
    mounted(){
        console.log(this.trendings);
    }
}
</script>


<style scoped>
h2{
    @apply text-[20px] p-3 md:text-[32px] md:p-4
}
</style>