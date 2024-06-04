<template>
    <div class="w-full">
        <div>
            <ul>
                <li v-for="(trending) in moviesData" :key="trending.title">
                    <div>
                        <img v-if="trending.isTrending == true" :src="trending.thumbnail.trending.small" alt="">
                        <!-- <p v-if="trending.isTrending == true">{{ trending.thumbnail.trending.small }}</p> -->
                    </div>
                </li>
            </ul>
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
            moviesData:data
        }
    },
    components:{
        Swiper,
        SwiperSlide
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