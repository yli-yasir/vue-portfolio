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
  props: ["thumbnailUrl", "shortDescription", "title", "url"],
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
          console.log('making AJAX request to ' + this.endpoint)
          let response = await axios.get(this.endpoint);
          this.response = response.data;
          console.log(this.response.length)
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
};

const indexScreenComponent = {
  mixins: [loadingComponentMixin],
  props: ["routeForSingle"],
  template: indexScreenHtml
};

//Project details screen component
var projectDetailsScreenComponent = {
  mixins: [loadingComponentMixin],
  template: projectDetailsScreenHtml
};



var newsScreenComponent= Vue.component('news-screen',{
  mixins: [loadingComponentMixin],
  props: {endpoint:{type: String, default: '/api/news'}},
  template: newsScreenHtml,
});

var homeScreenComponent = {
  template: homeScreenHtml,
  components: {'index-screen': indexScreenComponent}
}

var newItemFormComponent = {
  mixins:[loadingComponentMixin],
  template:newItemFormHtml
}

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
    name: "newProject",
    path: "/projects/new",
    component: newItemFormComponent,
    props: function() {
      return { endpoint: "/api/projects/new"};
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
      return { endpoint: "/api/projects", routeForSingle: "projectDetails" };
    }
  },  
];

const router = new VueRouter({
  mode: 'history',
  routes: routes
});

var app = new Vue({
  router,
  el: "#app"
});
