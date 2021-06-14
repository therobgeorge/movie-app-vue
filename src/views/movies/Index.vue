<template>
  <div class="movies-index">
    <h1>All Movies</h1>
    <div v-for="movie in movies" v-bind:key="movie.id">
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
export default {
  data: function () {
    return {
      movies: [],
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
