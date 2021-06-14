<template>
  <div class="movies-index">
    <h1>All Movies</h1>
    Search by Title:
    <input v-model="titleFilter" />

    <div v-for="movie in filterBy(movies, titleFilter, 'title')" v-bind:key="movie.id">
      <h2>{{ movie.title }}</h2>

      <p>Director: {{ movie.director }}</p>
      <p>{{ movie.year }}</p>
      <p>{{ movie.plot }}</p>
      <router-link :to="`/movies/${movie.id}`">Movie Details</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
  data: function () {
    return {
      movies: [],
      titleFilter: "",
    };
  },
  created: function () {
    this.indexmovies();
  },
  methods: {
    indexmovies: function () {
      axios.get("/movies").then((response) => {
        console.log("movies index", response);
        this.movies = response.data;
      });
    },
  },
};
</script>
