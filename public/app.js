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
var card = Vue.component("card", {
  props: ["thumbnailUrl", "shortDescription", "name", "url"],
  template: cardHtml
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
const loadingComponentMixin = {
  props: ["endpoint"],
  data: function() {
    return {
      response: null,
      loading: true,
      success: false,
      error: false,
      load: async function() {
        try {
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
    endpoint: function(){
      this.load()
    }
  }

};

const indexComponent = {
  mixins: [loadingComponentMixin],
  props: ["routeForSingle"],
  template: indexComponentHtml
};

//Project details screen component
var projectDetailsScreen = {
  mixins: [loadingComponentMixin],
  template: projectDetailsScreenHtml
};

const routes = [
  {
    name: "projectsIndex",
    path: "/projects",
    component: indexComponent,
    props: (route) => {return {endpoint: '/api/projects',routeForSingle: 'projectDetails'}}
  },
  {
    name: "projectDetails",
    path: "/projects/:_id",
    component: projectDetailsScreen,
    props: (route) => {return  {endpoint: '/api/projects' + route.params_id}}
  },
  {
    name: "membersIndex",
    path: "/members",
    component: indexComponent,
    props: function(){return {endpoint: '/api/projects' , routeForSingle: 'projectDetails'}}
  }
];

const router = new VueRouter({
  routes: routes
});

var app = new Vue({
  router,
  el: "#app"
});
