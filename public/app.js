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
  props: ["thumbnailUrl","shortDescription","name","url"],
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
const loadingComponent = function(template, endpoint,reloadOn) {
  var component =  {
    data: function() {
      return {
        response: null ,
        loading: true,
        success: false,
        error: false
      };
    },
    template: template};

    component[reloadOn]=  async function() {
      try {
        let response = await axios.get(endpoint.apply(this));
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


//Projects index screen component
var projectsIndexScreen = loadingComponent(
  projectsIndexScreenHtml,
  () => {return "/api/projects"},
  'created'
  );

//Project details screen component
var projectDetailsScreen = loadingComponent(projectDetailsScreenHtml,
   function(){{ return "/api/projects/" + this.$route.params._id}},
   'mounted'
   );



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
