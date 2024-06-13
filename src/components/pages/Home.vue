<template>
  <div class="xl:w-full md:p-5 xl:pl-0 xl:overflow-x-hidden">
    <Search @filtData="getData" :data="moviesData"></Search>
    <h2 v-if="filteredMovies !== ''">
      Found {{ filteredData.length }} results for ‘{{ filteredMovies }}’
    </h2>
    <Trendings
      :trendings="trendings"
      :filteredMovies="filteredMovies"
    ></Trendings>
    <div>
      <h2 class="px-2">Recommended for you</h2>
      <div class="w-full flex flex-wrap">
        <div
          class="relative w-[50%] md:w-[33%] lg:w-[25%] p-2 lg:p-3"
          v-for="recommended in filteredData"
          :key="recommended.title"
        >
          <img
            class="rounded-lg md:hidden"
            :src="recommended.thumbnail.regular.small"
            alt=""
          />
          <img
            class="rounded-lg max-md:hidden"
            :src="recommended.thumbnail.regular.medium"
            alt=""
          />
          <div class="w-full rounded-lg py-2">
            <p
              class="text-[10px] md:text-[14px] text-gray-400 flex items-center gap-2"
            >
              {{ recommended.year }}
              <img
                v-if="recommended.category == 'Movie'"
                src="../../../public/icon-category-movie.svg"
                alt=""
              />
              <img v-else src="../../../public/icon-category-tv.svg" alt="" />
              {{ recommended.category }} {{ recommended.rating }}
            </p>
            <h3 class="text-[15px] md:text-[20px] font-semibold">
              {{ recommended.title }}
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import data from "../../../data.json";
import "swiper/css";
import "../../styles.css";
import Search from "../additional/Search.vue";
import Trendings from "../additional/Trendings.vue";

export default {
  data() {
    return {
      moviesData: data,
      trendings: [],
      filteredData: [],
      filteredMovies: "",
      copyData: [],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    Search,
    Trendings,
  },
  created() {
    const trendings = this.moviesData.filter((data) => data.isTrending);
    this.trendings = trendings;
  },
  mounted() {
    // console.log(this.filteredData);
  },
  methods: {
    // filter(filtData, movData) {
    //   filtData = movData.filter((movie) =>
    //     movie.title.toLowerCase().includes(this.filteredMovies.toLowerCase())
    //   );
    // },
    getData(data) {
      this.filteredData = data;
    },
  },
  provide() {
    return {
      filter: this.filter,
      filteredMovies: this.filteredMovies,
      moviesData: this.moviesData,
    };
  },
};
</script>

<style scoped>
h2 {
  @apply text-[20px] py-2  md:text-[32px] md:py-4;
}
</style>
