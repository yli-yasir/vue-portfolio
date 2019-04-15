const navbarHtml = ` <!--navbar--------------------------------------------------->
<nav class="navbar shadow rounded-bottom justify-content-center navbar-expand-sm navbar-dark bg-dark fixed-top">
  <!--toggler-->
  <button class="navbar-toggler mb-1" type="button" data-toggle="collapse" data-target="#navContainer" aria-controls="navContainer" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>

  <!--nav container-->
  <div class="collapse navbar-collapse" id="navContainer">

    <!--nav-->
    <div class="navbar-nav ml-sm-4">
      <router-link class="nav-item nav-link" to="/home">Home</router-link>
      <router-link class="nav-item nav-link" to="/projects">Projects</router-link>
      <router-link class="nav-item nav-link" to="/members">Members</router-link>

    </div>
    <!--end of nav-->

  </div>
  <!--end of nav container-->

</nav>`;

const cardHtml = `<div class="card m-4 rounded bg-dark shadow" style="width: 18rem;">
  
<img :src="thumbnailUrl" class="card-img-top rounded-top p-1" alt="thumbnail">

<div class="card-body">

  <h5 class="card-title">{{key}}</h5>

  <p class="card-text">
  {{thumbnailUrl}}
  </p>

  <a href="moreDetailsUrl"
    class="btn btn-success rounded">
    More Details
  </a>

</div>

</div>
`;

var navbar = Vue.component("navbar", {
  template: navbarHtml
});

var card = {
  props: ["thumbnailUrl"],
  template: cardHtml
};

fakeResponse = [
  {
    id: 0,
    thumbnailUrl: "https://i.imgur.com/nmJtFM5.jpg"
  }
];

var projectsIndexComponent = {
  data: function() {
    return {
      projects: []
    };
  },
  components: { card },
  template: `<div><card 
  v-for="project in projects" 
  :key="project.id"
  :thumbnailUrl="project.thumbnailUrl">
  </card></div>`,
  mounted: function() {
    var vm = this;
    setTimeout(function() {
      vm.projects = fakeResponse;
    }, 2000);
  }
};

const routes = [{ path: "/projects", component: projectsIndexComponent }];

const router = new VueRouter({
  routes: routes
});

var app = new Vue({
  router,
  el: "#app",
  mounted: function() {
    console.log(this.$router);
  }
});
