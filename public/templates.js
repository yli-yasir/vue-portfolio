const navbarHtml = ` 
<!--navbar--------------------------------------------------->
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

const progressIndicatorHtml = `
<div class="spinner-container">
<!--progress indicator-->
<div class="spinner-border text-warning" role="status">
  <span class="sr-only">Loading...</span>
</div>
</div>`;

const errorIndicatorHtml = `
<div>
</div>
`;

const projectsIndexScreenHtml = `
<div>

<!-- progress indicator -->

<progress-indicator v-if="loading"></progress-indicator>

<!-- cards for each project will be rendered in here -->

<template v-if="success">
<card 
  v-for="project in projects" 
  :thumbnail-url="project.thumbnailUrl"
  :key="project.id"
  >
  </card>
  </template>

  <error-indicator v-if="error"></error-indicator>

  </div>
  `;

const cardHtml = `

<div class="card m-4 rounded bg-dark shadow" style="width: 18rem;">
  
<img :src="thumbnailUrl" class="card-img-top rounded-top p-1" alt="thumbnail">

<div class="card-body">

  <h5 class="card-title"></h5>

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

const youtubeEmbedHtml = `
<div class="aspect-ratio-16by9">
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
<div class="aspect-ratio-16by9 my-4">
  
  <div
    id="carouselControls"
    class="carousel slide aspect-ratio-child"
    data-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="data:image/jpeg;base64,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" alt="First slide" />
      </div>
      <div v-for="imgUrl in imgUrls" class="carousel-item">
      <img :src="imgUrl" alt="First slide" />
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


const projectDetailsScreenHtml = `
<div class="container-fluid">
    <!-- First column for ad content-->
    <div class="row">
      <div class="col-sm" style="background-color:white;color:black">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
          delectus id tempora cum. Nobis, provident quibusdam rerum culpa minus
          ut perspiciatis? Voluptatum aperiam explicabo sapiente accusantium
          pariatur consequatur iusto incidunt.
        </p>
      </div>

      <!-- this column is for true content-->
      <div class="col-sm-7 true-content">
      <youtube-embed :embed-url="youtubeEmbedUrl"></youtube-embed>
      <carousel :img-urls="imgUrls"></carousel>
      <p>{{description}}</p>
      <p v-for='link in links'>{{link.label}} : {{link.url}}</p>
      </div>

      <!-- the 3rd column is also for ads-->
      <div class="col-sm" style="background-color:white;color:black">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
          delectus id tempora cum. Nobis, provident quibusdam rerum culpa minus
          ut perspiciatis? Voluptatum aperiam explicabo sapiente accusantium
          pariatur consequatur iusto incidunt.
        </p>
      </div>
    </div>
    <!-- the closing div tag above is for the ending of the row-->
  </div>`;