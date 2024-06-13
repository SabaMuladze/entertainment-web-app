<template>
  <div class="flex py-2 gap-2">
    <img
      class="w-6 h-6 md:h-8 md:w-8"
      src="../../../public/icon-search.svg"
      alt=""
    />
    <input
      @input="filter"
      v-model="inputText"
      placeholder="Search for movies or TV series"
      class="bg-transparent w-80 outline-none caret-cusred"
      type="text"
    />
  </div>
</template>

<script>
import data from "../../../data.json";
export default {
  inject: ["filteredMovies", "moviesData"],
  data() {
    return {
      inputText: this.value,
      filtdData: [],
      movData: this.data,
    };
  },
  props: ["value", "data"],
  emits: ["update:value", "filtData", "setInptutText"],
  watch: {
    inputText(newVal) {
      this.$emit("update:value", newVal);
      this.filter();
    },
  },
  methods: {
    filter() {
      this.filtdData = this.movData.filter((movie) =>
        movie.title.toLowerCase().includes(this.inputText.toLowerCase())
      );
      this.sendData();
    },
    sendData() {
      this.$emit("filtData", this.filtdData);
      this.$emit("setInptutText", this.inputText);
    },
  },
  created() {
    this.inputText = this.filteredMovies;
    this.filtdData = this.movData;
    // this.sendData();
  },
  mounted() {
    // this.filter();
  },
};
</script>
