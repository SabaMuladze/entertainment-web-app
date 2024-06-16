<template>
  <div class="xl:w-full md:p-5 xl:pl-0 xl:overflow-x-hidden">
    <ul class="w-full flex flex-wrap px-2">
      <li
        class="relative w-[50%] md:w-[33%] lg:w-[25%] p-2 lg:p-3"
        v-for="(movie, index) in bookmarkedData"
        :key="index"
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
        <div
          @click="setmark(movie)"
          class="absolute top-5 right-5 w-8 h-8 bg-[#525151a1] rounded-full flex items-center justify-center"
        >
          <svg
            v-if="!movie.marked"
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
          <svg v-else width="12" height="14" xmlns="http://www.w3.org/2000/svg">
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
      </li>
    </ul>
  </div>
</template>

<script>
import { watch } from "vue";
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["bookmarkedData"]),
  },
  methods: {
    ...mapActions(["unbookmark"]),
    setmark(movie) {
      this.unbookmark(movie);
    },
  },
};
</script>
