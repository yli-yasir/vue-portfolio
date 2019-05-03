//Navbar Component
var navbarComponent = Vue.component("navbar", {
  template: navbarHtml
});

//Card component
var cardComponent = Vue.component("card", {
  props: ["thumbnailUrl", "shortDescription", "name", "url"],
  template: cardHtml
});

//Youtube embed component
var youtubeEmbedComponent = Vue.component("youtube-embed", {
  props: ["embedUrl"],
  template: youtubeEmbedHtml
});

var carouselComponent = Vue.component("carousel", {
  props: ["imgUrls"],
  template: carouselHtml
});

var loadingScreenComponent = Vue.component("loading-screen", {
  template: loadingScreenHtml,
  props: ["endpoint"],
  data: function() {
    return {
      response: null,
      loading: true,
      success: false,
      error: false,
      load: async function() {
        try {
          console.log("making AJAX request to " + this.endpoint);
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
  template: homeScreenHtml
};

var newsScreenComponent = Vue.component("news-screen", {
  template: newsScreenHtml
});

var indexScreenComponent = Vue.component("index-screen", {
  props: ["endpoint", "routeForSingle"],
  template: indexScreenHtml
});

//Project details screen component
var projectDetailsScreenComponent = {
  props: ["endpoint"],
  template: projectDetailsScreenHtml
};

var memberDetailsScreenComponent = {
  props: ["endpoint"],
  template: memberDetailsScreenHtml
};

const defaultDataset = {
  type: [Array,String],
  default: function() {
    return [""];
  }
}
var bindedToDatasetMixin = {
  data: function(){
    return {
      newItems: []
    }
  },
  props: {
    dataset: defaultDataset,
    addToDatasetButton: { type: Boolean, default: false }
  },
  computed: {
    ownDataset: function(){
       if(Array.isArray(this.dataset)){
        return this.dataset === [] ? [''] : this.dataset.concat(this.newItems)
       } 
       else{
         return Array(this.dataset)
       }
    }
  },
  methods: {
    addNewItem: function(){
      this.newItems.push('')
    }
  }
};




var formGroupComponent = Vue.component("form-group", {
  mixins: [bindedToDatasetMixin],
  props: [
    "textArea",
    "inputId",
    "inputName",
    "inputLabel",
    "placeholder",
    "helpId",
    "help"
  ],
  template: formGroupHtml
});

var branchedFormGroupComponent = Vue.component("branched-form-group", {
  mixins: [bindedToDatasetMixin],
  props: ["mainId", "mainLabel", "inputs", "helpId", "help"],
  template: branchedFormGroupHtml
});


//this component takes datasets as props, the datasets
//the datasets are then passed into each formGroupComponent
//or branchedFormGroupComponent which is enabled through the bindedToDataSetMixin
//thus, a suitable number of forms will be rendered for each dataset, with its value
//if available
var projectFormComponent = Vue.component("project-form", {
  props: {
    method: {type: String, default: "post"},
    action : {type: String, default: "/api/projects"},
    pathDataset: defaultDataset,
    nameDataset: defaultDataset,
    thumbnailUrlDataset: defaultDataset,
    shortDescriptionDataset: defaultDataset,
    descriptionDataset: defaultDataset,
    youtubeEmbedDataset: defaultDataset,
    imgUrlsDataset: defaultDataset,
    linksDataset: defaultDataset,
    contributorsDataset: defaultDataset
  },
  template: projectFormHtml
});

//This component is the  newProjectFormComponent but it's wrapped with a 
//loadingComponent then loading component then grabs datasets from the endpoint
//and supplies it to the newProjectFormComponent, which results in a populated
//newProjectFormComponent
var editProjectFormComponent = {
  props: ["endpoint","projectId"],
  template: editProjectFormHtml
};

const routes = [
  { path: "/", redirect: "/home" },
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
    component: projectFormComponent
  },
  {
    name: "editProject",
    path: "/projects/:_id/edit",
    component: editProjectFormComponent,
    props: route => {
      return { endpoint: "/api/projects/" + route.params._id , projectId: route.params._id };
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
    props: route => {
      return {
        endpoint: "/api/members/" + route.params._id,
        routeForSingle: "memberDetails"
      };
    }
  }
];

const router = new VueRouter({
  mode: "history",
  routes: routes
});

var app = new Vue({
  router,
  el: "#app"
});
