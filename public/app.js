//Fake response to simulate response from mongo
fakeResponse = [
  {
    id: 0,
    thumbnailUrl: "https://i.imgur.com/nmJtFM5.jpg"
  },
  {
    id: 0,
    thumbnailUrl: "https://i.imgur.com/nmJtFM5.jpg"
  },
  {
    id: 0,
    thumbnailUrl: "https://i.imgur.com/nmJtFM5.jpg"
  },
  {
    id: 0,
    thumbnailUrl: "https://i.imgur.com/nmJtFM5.jpg"
  },
  {
    id: 0,
    thumbnailUrl: "https://i.imgur.com/nmJtFM5.jpg"
  },
  {
    id: 0,
    thumbnailUrl: "https://i.imgur.com/nmJtFM5.jpg"
  }
];

//Navbar Component
const navbar = Vue.component("navbar", {
  template: navbarHtml
});

//Progress indicator component
const progressIndicator = Vue.component("progress-indicator", {
  template: progressIndicatorHtml
});

//Error indicator component
const errorIndicator = Vue.component("error-indicator", {
  template: errorIndicatorHtml
});

//Card component
var card = {
  props: ["thumbnailUrl"],
  template: cardHtml
};

//projects index screen component
var projectsIndexScreen = {
  data: function() {
    return {
      projects: [],
      loading: true,
      success: false,
      error: false
    };
  },
  components: { card },
  template: projectsIndexScreenHtml,
  mounted: function() {
    var vm = this;
    setTimeout(function() {
      vm.projects = fakeResponse;
      vm.loading= false;
      vm.success = true;
    }, 2000);
  }
};

const routes = [{ path: "/projects", component: projectsIndexScreen }];

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
