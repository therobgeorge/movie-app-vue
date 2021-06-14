<template>
  <div class="actors-new">
    <h2>Know a cool actor? Add them!</h2>
    Frist Name:
    <input type="text" v-model="newActorParams.first_name" />
    <br />
    Last Name:
    <input type="text" v-model="newActorParams.last_name" />
    <br />
    Known For:
    <input type="text" v-model="newActorParams.known_for" />
    <br />
    Age:
    <input type="text" v-model="newActorParams.age" />
    <br />
    Gender:
    <input type="text" v-model="newActorParams.gender" />
    <br />
    <button v-on:click="createActor">Add Actor</button>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      actors: [],
      newActorParams: {},
    };
  },
  methods: {
    createActor: function () {
      axios
        .post("http://localhost:3000/actors", this.newActorParams)
        .then((response) => {
          console.log(response.data);
          this.actors$router.push("/actors");
        })
        .catch((error) => {
          console.log(error.response.data.errors);
        });
    },
  },
};
</script>
