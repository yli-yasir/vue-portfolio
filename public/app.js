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
const loadingComponent = function(options) {
  var component = {
    data: function() {
      return {
        extras: options.extras,
        response: null,
        loading: true,
        success: false,
        error: false
      };
    },
    template: options.template
  };

  component[options.reloadOn] = async function() {
    try {
      let response = await axios.get(options.endpoint.apply(this));
      this.response = response.data;
      this.success = true;
      this.loading = false;
    } catch (err) {
      console.error(err);
      this.error = true;
      this.loading = false;
    }
  };

  return component;
};

const indexComponent = function(endpoint, extras) {
  return loadingComponent({
    template: indexScreenHtml,
    endpoint: endpoint,
    reloadOn: "mounted",
    extras: extras
  });
};

//Projects index screen component
var projectsIndexScreen = indexComponent(
  () => {
    return "/api/projects";
  },
  { leadsTo: "projectDetails" }
);

//Project details screen component
var projectDetailsScreen = loadingComponent({
  template: projectDetailsScreenHtml,
  endpoint: function() {
    {
      return "/api/projects/" + this.$route.params._id;
    }
  },
  reloadOn: "mounted"
});

const routes = [
  {
    name: "projects",
    path: "/projects",
    component: projectsIndexScreen
  },
  {
    name: "projectDetails",
    path: "/projects/:_id",
    component: projectDetailsScreen
  }
];

const router = new VueRouter({
  routes: routes
});

var app = new Vue({
  router,
  el: "#app"
});
