<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Rad Movies!</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link active" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" to="/movies">All Movies</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" to="/movies/new">Add Movie</router-link>
            </li>
           <span v-if="isLoggedIn()">
              <li class="nav-item">
                <router-link class="nav-link active" to="/logout">Logout</router-link>
              </li>
            </span>
            <span v-else>
              <li class="nav-item">
                <router-link class="nav-link active" to="/signup">Signup</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link active" to="/login">Login</router-link>
              </li>
            </span>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  data: function () {
    return {};
  },
  methods: {
    isLoggedIn: function () {
      return localStorage.getItem("jwt");
    },
  },
};
</script>
