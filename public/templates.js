const navbarHtml = ` 
<!--navbar-->
<nav class="navbar d-print shadow rounded-bottom justify-content-center navbar-expand-sm navbar-dark bg-dark fixed-top">

  <!--toggler-->
  <button class="navbar-toggler mb-1" type="button" data-toggle="collapse" data-target="#navContainer" aria-controls="navContainer" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>

  <!--nav container-->
  <div class="collapse navbar-collapse" id="navContainer">

    <!--nav-->
    <div class="navbar-nav ml-sm-4">
      <router-link data-toggle="collapse" data-target=".navbar-collapse.show" class="nav-item nav-link" to="/home">Home</router-link>
      <router-link data-toggle="collapse" data-target=".navbar-collapse.show" class="nav-item nav-link" :to="{name: 'projectsIndex'}">Projects</router-link>
      <router-link data-toggle="collapse" data-target=".navbar-collapse.show" class="nav-item nav-link" to="/members">Members</router-link>
    </div>
    <!--end of nav-->

  </div>
  <!--end of nav container-->

</nav>
<!--end of navbar-->
`;

const loadingScreenHtml = `
  <div>

<!-- progress indicator -->
<div v-if="loading" class="loading-indicator"></div>

<template v-else-if="success">
<slot :response="response"></slot>
</template>

  <!--error indicator-->
  <div v-else>error</div>

  </div>
   `

const homeScreenHtml =
    `
    <div class="container-fluid">
    <div class="row">
      <div class="col-md-7">
      <h5 class="mt-2">Latest News:</h5>
      <news-screen></news-screen>
      </div>
      <div class="col-md">
      <h5 class="mt-2"><em>Latest Projects:</em></h5>
      <index-screen
      endpoint="/api/projects"
      route-for-single="projectDetails">
      </index-screen>
      </div>
      </div>
      </div>
    `
    const newsScreenHtml = `
    <loading-screen endpoint="/api/news">
    <template v-slot:default="slotProps">
    <div class="my-3 p-3 shadow news-container bg-dark rounded d-inline-block"
    v-for="news in slotProps.response"
    :key="news._id">
  
    <p>{{news.date}}</p>
    <p>{{news.title}}</p>
    <p>{{news.description}}</p>
  
    </div>
    </template>
    </loading-screen>`
    ;

const indexScreenHtml = `
<loading-screen class="container-fluid" :endpoint="endpoint">
<template v-slot:default="slotProps">
<div class="index-screen">
<card 
  v-for="item in slotProps.response" 
  :thumbnail-url="item.thumbnailUrl"
  :short-description="item.shortDescription"
  :name="item.name"
  :key="item._id"
  :url="{name: routeForSingle , params: { _id : item._id } }"
  >
  </card>
  </div>
  </template>
  </loading-screen>`;


  const projectDetailsScreenHtml =`
  <loading-screen class="container-fluid" :endpoint="endpoint">

      <template v-slot:default="slotProps">
      <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md">
      <youtube-embed :embed-url="slotProps.response.youtubeEmbed"></youtube-embed>
      <carousel :img-urls="slotProps.response.imgUrls"></carousel>
      <p>{{slotProps.response.description}}</p>
      <p v-for="item in slotProps.response.links">{{item.label}} : {{item.url}}</p>
      <p v-for="contrib in slotProps.response.contributors">{{contrib.name}} : {{contrib.role}}</p>

      </div>
      <div class="col-md-2"></div>

      </div>
      </template>
      </loading-screen>
  `;



  const memberDetailsScreenHtml =`
  <loading-screen class="container-fluid" :endpoint="endpoint">
      <template v-slot:default="slotProps">
      <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md">
      <div>
      <h4>{{slotProps.response.title}}</h4>
      <p>{{slotProps.response.description}}</p>
      </div>
      <div class="col-md-2"></div>
      </div>
      </template>
      </loading-screen>
  `;

  const formGroupHtml= `
  <div class="form-group">
  <label :for="inputId + 0">{{inputLabel}}</label>
  <div v-if="textArea">
  <textarea v-for="(one,index) in ownDataset" :name="inputName" class="form-control" :id="inputId + index" :aria-describedby="helpId" :placeholder="placeholder">{{one}}</textarea>
  </div>
  <div v-else>
  <input v-for="(one,index) in ownDataset" :value="one" type="text" :name="inputName" class="form-control" :id="inputId + index" :aria-describedby="helpId" :placeholder="placeholder">
  </div>
  <button v-if="addToDatasetButton" type="button" class="btn btn-primary" @click="addNewItem">+</button>
  <small :id="helpId" class="form-text text-muted">{{help}}</small>
  </div>
  `;

  const branchedFormGroupHtml = `
  <div class="form-group">
  <label :for="mainId + 0">{{mainLabel}}</label>
  <div v-for="(one,index) in ownDataset" :id="mainId+index" :aria-describedby="helpId">
  <template v-for="input in inputs">
  <label :for="input.id + index">{{input.label}}</label>
  <input :value="one[input.propertyKey]" type="text" :name="input.name" class="form-control" :id="input.id + index" :placeholder="input.placeholder">
  </template>
  </div>
  <button v-if="addToDatasetButton" type="button" class="btn btn-primary" @click="addNewItem">+</button>
  <small :id="helpId" class="form-text text-muted">{{help}}</small>
  </div>
  `


  const projectFormHtml=`
  <form class="container" :method="method" :action="action">

  <form-group :dataset="pathDataset" input-id="pathInput" input-name="path" input-label="*Path:" placeholder="red-leaf-app" help-id="pathHelp" help="Unique, no spaces or underscores."></form-group>

  <form-group :dataset="nameDataset" input-id="nameInput" input-name="name" input-label="*Name:" placeholder="Red Leaf" help-id="pathHelp" help="Preferably unique, can contain any character."></form-group>

  <form-group :dataset="thumbnailUrlDataset" input-id="thumbnailUrlInput" input-name="thumbnailUrl" input-label="*Thumbnail URL:" placeholder="https://exampleimghosting/xyz.png" help-id="thumbnailUrlHelp" help="URL to thumbnail image that will be shown in the project card at the index screen."></form-group>

  <form-group :dataset="shortDescriptionDataset" input-id="shotDescriptionInput" input-name="shortDescription" input-label="Short description:" placeholder="Red leaves are so beautiful" help-id="shortDescriptionHelp" help="A short description of the project."></form-group>

  <form-group :dataset="descriptionDataset" :text-area="true" input-id="descriptionInput" input-name="description" input-label="*Description:" placeholder="Red leaves are so beautiful, they remind me of Autmn." help-id="descriptionHelp" help="A Longer description of the project."></form-group>

  <form-group :dataset="youtubeEmbedDataset" input-id="youtubeEmbedUrlInput" input-name="youtubeEmbed" input-label="Youtube embed URL:" placeholder="https://www.youtube.com/embed/lX44CAz-JhU" help-id="youtubeEmbedHelp" help="A YouTube embed URL of the project."></form-group>

  <form-group :dataset="imgUrlsDataset" :addToDatasetButton="true" input-id="imgUrlsInput" input-name="imgUrls" input-label="*Image URLs:" placeholder="https://exampleimghosting/xyz.png" help-id="imgUrlsHelp" help="one or more URLs to images."></form-group>

  <branched-form-group :dataset="linksDataset" :addToDatasetButton="true" :inputs="[{label:'Label:',id:'linkLabelInput',name:'linkLabel',placeholder:'playstore', propertyKey:'label'},{label:'URL:',id:'linkUrlInput',name:'linkUrl',placeholder:'playstore/mygame.exe',propertyKey:'url'}]" main-id="linksInputContainer" main-label="Links:" help-id="linksHelp" help="A label that describes what the following URL is for."></branched-form-group>

  <branched-form-group :dataset="contributorsDataset" :addToDatasetButton="true" 
  :inputs="[{label:'name:',id:'contributorNameInput',name:'contributorName',placeholder:'John Smith the 17th',propertyKey: 'name'},
  {label:'Role:',id:'contributoRoleInput',name:'contributorRole',placeholder:'graphic design and being cool',propertyKey: 'role'}]" 
  main-id="contributorsInputContainer" main-label="Contributors:" help-id="contributorsHelp" 
  help="The name of contributor(s) and their role."></branched-form-group>

  <button type="submit" class="mb-4 btn btn-primary">Submit</button>

</form>
  `;

const editProjectFormHtml = 
`
<loading-screen class="container" :endpoint="endpoint">
<template v-slot:default="slotProps">
<project-form 
method="post"
:action="'/api/projects/' + projectId + '?_method=PUT' "
:path-dataset="slotProps.response._id"
:name-dataset="slotProps.response.name"
:thumbnail-url-dataset="slotProps.response.thumbnailUrl"
:short-description-dataset="slotProps.response.shortDescription"
:description-dataset="slotProps.response.description"
:youtube-embed-dataset="slotProps.response.youtubeEmbed"
:img-urls-dataset="slotProps.response.imgUrls" 
:contributors-dataset="slotProps.response.contributors" 
:links-dataset="slotProps.response.links"></project-form>
</template>
</loading-screen>
`;

const cardHtml = `
<div class="card m-3 rounded bg-dark shadow">
  
<img :src="thumbnailUrl" class="card-img-top rounded-top p-1" alt="thumbnail">

<div class="card-body">

  <div class="card-text">
  <h5 class="card-title">{{name}}</h5>
  <p>{{shortDescription}}</p>
  </div>

  <router-link :to="url"
    class="btn card-btn btn-success rounded">
    More Details
  </router-link>

</div>

</div>
`;

const youtubeEmbedHtml = `
<div class="embed-responsive embed-responsive-16by9 mb-2">
        <iframe
          class="aspect-ratio-child"
          :src="embedUrl"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
`;

const carouselHtml= `
<div class="embed-responsive embed-responsive-16by9 mb-2">
  
  <div
    id="carouselControls"
    class="carousel slide aspect-ratio-child"
    data-ride="carousel"
  >
    <div class="carousel-inner">
      <div  v-for="(imgUrl,index) in imgUrls" class="carousel-item" :class="{ active : index==0 }">
        <img :src="imgUrl" alt="screenshot" />
      </div>
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#carouselControls"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselControls"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>`;