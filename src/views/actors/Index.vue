<template>
  <div class="actors-index">
    <h1>All Actors</h1>
    <div v-for="actor in actors" v-bind:key="actor.id">
      <h2>{{ actor.first_name }} {{ actor.last_name }}</h2>

      <p>Known For: {{ actor.known_for }}</p>
      <p>Age: {{ actor.age }}</p>
      <p>Gender: {{ actor.gender }}</p>
      <router-link :to="`/actors/${actor.id}`">Actor Details</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      actors: [],
    };
  },
  created: function () {
    this.indexActors();
  },
  methods: {
    indexActors: function () {
      axios.get("/actors").then((response) => {
        console.log("actors index", response);
        this.actors = response.data;
      });
    },
  },
};
</script>
