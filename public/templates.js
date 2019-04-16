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
<div class="spinner-border text-success" role="status">
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
  :thumbnailUrl="project.thumbnailUrl"
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
