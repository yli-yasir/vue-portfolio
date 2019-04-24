//Navbar Component
var navbar = Vue.component("navbar", {
  template: navbarHtml
});

//Card component
var card = Vue.component("card", {
  props: ["thumbnailUrl", "shortDescription", "title", "url"],
  template: cardHtml,

});

//Youtube embed component
var youtubeEmbed = Vue.component("youtube-embed", {
  props: ["embedUrl"],
  template: youtubeEmbedHtml
});

//Carousel component
var carousel = Vue.component("carousel", {
  props: ["imgUrls"],
  template: carouselHtml
});

//Generic Component that loads data...
var loadingScreenComponent = Vue.component('loading-screen',{
  template:loadingScreenHtml,
  props: ["endpoint"],
  data: function() {
    return {
      response: null,
      loading: true,
      success: false,
      error: false,
      load: async function() {
        try {
          console.log('making AJAX request to ' + this.endpoint)
          let response = await axios.get(this.endpoint);
          this.response = response.data;
          this.success = true;
          this.loading = false;
        } catch (err) {
          console.error(err);
          this.error = true;
          this.loading = false;
        }
      }
    };
  },
  mounted: function() {
    this.load();
  },
  watch: {
    endpoint: function() {
      this.load();
    }
  }
});


var homeScreenComponent = {
  template: homeScreenHtml,
};

var newsScreenComponent= Vue.component('news-screen',{
  template: newsScreenHtml,
});

var indexScreenComponent = Vue.component('index-screen',{
  props: ["endpoint","routeForSingle"],
  template: indexScreenHtml
});

//Project details screen component
var projectDetailsScreenComponent = {
  props: ["endpoint"],
  template: projectDetailsScreenHtml
};

var memberDetailsScreenComponent= {}

const routes = [
  {
    name: "home",
    path: "/home",
    component: homeScreenComponent
  },
  {
    name: "projectsIndex",
    path: "/projects",
    component: indexScreenComponent,
    props: route => {
      return { endpoint: "/api/projects", routeForSingle: "projectDetails" };
    }
  },
  {
    name: "projectDetails",
    path: "/projects/:_id",
    component: projectDetailsScreenComponent,
    props: route => {
      return { endpoint: "/api/projects/" + route.params._id };
    }
  },
  {
    name: "membersIndex",
    path: "/members",
    component: indexScreenComponent,
    props: function() {
      return { endpoint: "/api/members", routeForSingle: "memberDetails" };
    }
  },  
  {
    name: "memberDetails",
    path: "/members/:_id",
    component: memberDetailsScreenComponent,
    props: function() {
      return { endpoint: "/api/members", routeForSingle: "memberDetails" };
    }
  }
];

const router = new VueRouter({
  mode: 'history',
  routes: routes
});

var app = new Vue({
  router,
  el: "#app"
});
