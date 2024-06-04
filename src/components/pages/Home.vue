<template>
    <div class=" xl:w-[90%] p-6 xl:pl-0 ">
        <div>
            <swiper 
    :spaceBetween="10"
    :onReachEnd="5"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    :breakpoints="{
      '@0.00': {
        slidesPerView: 1.2,
        spaceBetween: 10,
      },
      '@0.75': {
        slidesPerView: 2.2,
        spaceBetween: 20,
      },
      }"
    class="mySwiper"
             >
                <SwiperSlide v-for="(trending) in moviesData" :key="trending.title">
                        <img class="rounded-lg min-w-[230px] max-w-[260px] md:hidden" v-if="trending.isTrending == true && small " :src="trending.thumbnail.trending.small" alt="">
                        <img class="rounded-lg hidden" v-if="trending.isTrending == true && large" :src="trending.thumbnail.trending.large" alt="">

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
    mounted(){

        console.log(screen.width < 768);
    }
}
</script>


<!-- <Swiper>
                <swiper-slide v-for="(trending, index) in moviesData" :key="index">
                    <div>
                        <img :src="trending?.thumbnail?.trending.small" alt="">
                    </div>
                </swiper-slide>
            </Swiper> -->