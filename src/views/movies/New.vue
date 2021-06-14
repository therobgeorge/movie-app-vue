<template>
  <div class="movies-new">
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
  methods: {
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
  },
};
</script>
