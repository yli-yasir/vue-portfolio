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
var card = Vue.component('card',{
  props: ["thumbnailUrl"],
  template: cardHtml
});


//Youtube embed component
var youtubeEmbed = Vue.component('youtube-embed',{
  props: ["embedUrl"],
  template: youtubeEmbedHtml
});

//Carousel component
var carousel = Vue.component('carousel',{
  props: ['imgUrls'],
  template: carouselHtml
})

//Projects index screen component
var projectsIndexScreen = {
  data: function() {
    return {
      projects: [],
      loading: true,
      success: false,
      error: false
    };
  },
  template: projectsIndexScreenHtml,
  mounted: async function() {
    try{
    let response = await axios.get('/api/projects');
    this.projects = response.data;
    this.success = true;
    this.loading = false;
    }
    catch(err){
      console.log(err);
      this.error = true; 
      this.loading = false;
    }
  }
};

//Project details screen component
var projectDetailsScreen= {
  data: function(){
    return {
      youtubeEmbedUrl: "https://www.youtube.com/embed/rMh2ygHlHRs",
      imgUrls: ["https://i.imgur.com/amCdfuY.jpg","https://i.imgur.com/5skWNZ0.jpg"],
      description: 'lorem ipsum dolar idk come on man thsi is some text!',
      links: [{label: 'Download', url: 'https://www.apple.com'},{label: 'appstore',url:'https://www.google.com'}]
    }
  },
  template: projectDetailsScreenHtml
};


const routes = [
  { 
    name: 'projects',
    path: "/projects", 
  component: projectsIndexScreen },
  { 
    name: 'projectDetails',
    path: "/projects/:projectName", 
  component: projectDetailsScreen }
];

const router = new VueRouter({
  routes: routes
});

var app = new Vue({
  router,
  el: "#app",
});
