import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
  <div class="row">
    <!-- search field and cog -->
    <div class="col-11 position-relative">
      <input class="form-control rounded-pill ps-5"
      placeholder="Search Tuiter"/>
      <span class="position-absolute wd-nudge-up">
        <!--                        <i class="fa fa-binoculars"></i>-->
        <i class="fa fa-search"></i>
      </span>
    </div>
    
    <div class="col-1">
      <span class="float-end">
        <i class="fa fa-cog fa-2x wd-vertical-align" style="color: #0d6dfc"></i>
      </span>
    </div>
    
    
  </div>
  
  
  <ul class="nav mb-2 nav-tabs">
    <!-- tabs -->
    
    <li class="nav-item">
      <a href="for-you.html" class="nav-link active">For You</a>
    </li>
    
    <li class="nav-item">
      <a href="trending.html" class="nav-link">Trending</a>
    </li>
    
    <li class="nav-item">
      <a href="news.html" class="nav-link">News</a>
    </li>
    
    <li class="nav-item">
      <a href="sports.html" class="nav-link">Sports</a>
    </li>
    
    <li class="nav-item">
      <a href="entertainment.html" class="nav-link d-none d-md-block">Entertainment</a>
    </li>
    
    
  </ul>
  
  
  
  
  <!-- image with overlaid text -->
  <div class="card">
    <span class="position-relative">
      <img class="card-img-top" src="../../images/ships.png" alt="a fleet of ships">
      <h1 class="text-white position-absolute wd-post-title-pos display-6">Fleets of War</h1>
    </span>
    
<!--    calling the post funtion    -->
    ${PostSummaryList()}
  </div>
  `);
}

export default ExploreComponent;
