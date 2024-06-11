<template>
  <div class="xl:w-full md:p-5 xl:pl-0 xl:overflow-x-hidden">
    <div>
      <h2 class="px-2">Movies</h2>
      <div class="w-full flex flex-wrap">
        <div
          class="relative w-[50%] md:w-[33%] lg:w-[25%] p-2 lg:p-3"
          v-for="movie in moviesData"
          :key="movie.title"
        >
          <img
            class="rounded-lg md:hidden"
            :src="movie.thumbnail.regular.small"
            alt=""
          />
          <img
            class="rounded-lg max-md:hidden"
            :src="movie.thumbnail.regular.medium"
            alt=""
          />
          <div class="w-full rounded-lg py-2">
            <p
              class="text-[10px] md:text-[14px] text-gray-400 flex items-center gap-2"
            >
              {{ movie.year }}
              <img
                v-if="movie.category == 'Movie'"
                src="../../../public/icon-category-movie.svg"
                alt=""
              />
              <img v-else src="../../../public/icon-category-tv.svg" alt="" />
              {{ movie.category }} {{ movie.rating }}
            </p>
            <h3 class="text-[15px] md:text-[20px] font-semibold">
              {{ movie.title }}
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from "../../../data.json";
export default {
  data() {
    return {
      moviesData: data,
    };
  },
  created() {
    this.moviesData = data.filter((movie) => movie.category == "Movie");
  },
};
</script>

<style scoped>
h2 {
  @apply text-[20px] py-2  md:text-[32px] md:py-4;
}
</style>
