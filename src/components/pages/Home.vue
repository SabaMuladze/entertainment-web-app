<template>
  <div class="xl:w-full md:p-5 xl:pl-0 xl:overflow-x-hidden">
    <Search
      @filtData="getData"
      @setInptutText="setFilteredMovies"
      :data="moviesData"
    ></Search>
    <h2 v-if="filteredMovies !== ''">
      Found {{ filteredData.length }} results for ‘{{ filteredMovies }}’
    </h2>
    <Trendings
      v-if="filteredMovies == ''"
      :trendings="trendings"
      :filteredMovies="filteredMovies"
    ></Trendings>
    <div>
      <h2 v-if="filteredMovies == ''" class="px-2">Recommended for you</h2>
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
          <div
            @click="setmark(recommended)"
            class="absolute top-5 right-5 w-8 h-8 bg-[#525151a1] rounded-full flex items-center justify-center"
          >
            <svg
              v-if="!recommended.marked"
              width="12"
              height="14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
                stroke="#FFF"
                stroke-width="1.5"
                fill="none"
              />
            </svg>
            <svg
              v-else
              width="12"
              height="14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.61 0c.14 0 .273.028.4.083a1.03 1.03 0 0 1 .657.953v11.928a1.03 1.03 0 0 1-.656.953c-.116.05-.25.074-.402.074-.291 0-.543-.099-.756-.296L5.833 9.77l-4.02 3.924c-.218.203-.47.305-.756.305a.995.995 0 0 1-.4-.083A1.03 1.03 0 0 1 0 12.964V1.036A1.03 1.03 0 0 1 .656.083.995.995 0 0 1 1.057 0h9.552Z"
                fill="#FFF"
              />
            </svg>
          </div>
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
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      moviesData: data,
      trendings: [],
      filteredData: [],
      filteredMovies: "",
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
  mounted() {},
  methods: {
    getData(data) {
      this.filteredData = data;
    },
    setFilteredMovies(data) {
      this.filteredMovies = data;
    },
    ...mapActions(["bookmark"]),
    setmark(recommended) {
      this.bookmark(recommended);
    },
  },
  provide() {
    return {
      filter: this.filter,
      filteredMovies: this.filteredMovies,
      moviesData: this.moviesData,
    };
  },
  computed: {
    ...mapGetters(["marked"]),
  },
};
</script>

<style scoped>
h2 {
  @apply text-[20px] py-2  md:text-[32px] md:py-4;
}
</style>
