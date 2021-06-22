<template>
  <div class="movies-new">
    <h1>Rad Movies</h1>
    <h2>Know a rad movie? Add it!</h2>
    Title:
    <input type="text" v-model="newTitle" placeholder="Title" />
    <br />
    Director:
    <input type="text" v-model="newDirector" placeholder="Director" />
    <br />
    Year:
    <input type="text" v-model="newYear" placeholder="Year" />
    <br />
    Plot:
    <br />
    <textarea name="plot" id="plot" cols="30" rows="10" v-model="newPlot" placeholder="Plot Description"></textarea>
    <br />
    <small class="text-danger">{{ 500 - newPlot.length }} characters left.</small>
    <br />
    English:
    <input type="checkbox" v-model="newEnglish" />
    <br />
    <button v-on:click="createMovie">Add Movie</button>
  </div>
</template>

<style>
.text-danger {
  color: red;
}
</style>

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
