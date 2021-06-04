<template>
  <div class="home">
    <h1>Rad Movies</h1>
    <h2>Know a rad movie? Add it!</h2>
    Title:
    <input type="text" v-model="newTitle" />
    <br />
    Director:
    <input type="text" v-model="newDirector" />
    <br />
    Year:
    <input type="text" v-model="newYear" />
    <br />
    Plot:
    <input type="text" v-model="newPlot" />
    <br />
    English:
    <input type="text" v-model="newEnglish" />
    <br />
    <button v-on:click="createMovie">Add Movie</button>
    <div v-for="movie in movies" v-bind:key="movie.id">
      <h3>{{ movie.title }}</h3>
      <br />
      <button v-on:click="showMovie(movie)">More Info</button>
      <p>{{ movie.year }}</p>
      <p>{{ movie.director }}</p>
      <p>{{ movie.plot }}</p>
    </div>
    <dialog id="movie-details">
      <form method="dialog">
        <h1>Movie Info</h1>
        <p>Title: {{ currentMovie.title }}</p>
        <p>Plot: {{ currentMovie.plot }}</p>
        <p>Year: {{ currentMovie.year }}</p>
        <button>Close</button>
      </form>
    </dialog>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      movies: [],
      newTitle: "",
      newDirector: "",
      newYear: "",
      newPlot: "",
      newEnglish: "",
      currentMovie: "",
    };
  },
  created: function () {
    this.indexMovies();
  },
  methods: {
    indexMovies: function () {
      axios.get("http://localhost:3000/movies").then((response) => {
        console.log(response.data);
        this.movies = response.data;
      });
    },
    createMovie: function () {
      var params = {
        title: this.newTitle,
        director: this.newDirector,
        year: this.newYear,
        plot: this.newPlot,
        english: this.newEnglish,
      };
      axios
        .post("http://localhost:3000/movies", params)
        .then((response) => {
          console.log(response.data);
          this.movies.push(response.data);
        })
        .catch((error) => {
          console.log(error.response.data.errors);
        });
    },
    showMovie: function (movie) {
      console.log(movie);
      this.currentMovie = movie;
      document.querySelector("#movie-details").showModal();
    },
  },
};
</script>
