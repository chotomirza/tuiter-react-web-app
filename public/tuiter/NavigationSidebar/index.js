const NavigationSidebar = () => {
    return (`
  
  <div class="list-group">
    <a class="list-group-item" href="/">
      <i class="fab fa-twitter"></i>
    </a>
    <!-- continue rest of list, e.g.,
    Home, Explore, Notifications,  Messages, etc. -->
    
    
    
    <!--            COPIED FROM BEFORE : starts here      -->
    
    <!--        ==Left Sidebar==      -->
<!--    here    -->
<!--    <div class="col-sm-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2">-->
    <!--            <div class="list-group">-->
    <!--                <a href="#" class="list-group-item"><i class="fab fa-twitter"></i></a>-->
    <a href="#" class="list-group-item"><i class="fa fa-home float-start pe-2 pt-1"></i><span class="d-none d-xl-block">Home</span></a>
    <a href="#" class="list-group-item active"><i class="fa fa-hashtag float-start pe-2 pt-1"></i><span class="d-none d-xl-block">Explore</span></a>
    <a href="#" class="list-group-item"> <i class="fa fa-bell float-start pe-2 pt-1"></i><span class="d-none d-xl-block">Notifications</span></a>
    <a href="#" class="list-group-item"> <i class="fa fa-envelope float-start pe-2 pt-1"></i><span class="d-none d-xl-block">Messages</span></a>
    <a href="#" class="list-group-item"> <i class="fa fa-bookmark float-start pe-2 pt-1"></i><span class="d-none d-xl-block">Bookmarks</span></a>
    <a href="#" class="list-group-item"> <i class="fa fa-list float-start pe-2 pt-1"></i><span class="d-none d-xl-block">Lists</span></a>
    <a href="#" class="list-group-item"> <i class="fa fa-user float-start pe-2 pt-1"></i><span class="d-none d-xl-block">Profile</span></a>
    <a href="#" class="list-group-item">
      <span class="fa-stack wd-stacked-remove-padding float-start">
        <i class="fa fa-circle fa-stack-1x"></i>
        <i class="fa fa-ellipsis-h fa-stack-1x fa-inverse"></i>
      </span>
      <span class="d-none d-xl-block ps-4">More</span></a>
    </div>
    
    <!--            <button class="btn btn-primary w-100 mt-2 rounded-pill">Tuit</button>-->
  <!--    here    -->
<!--  </div>-->


<!--            COPIED FROM BEFORE : ends here      -->




    <div class="d-grid mt-2">
      <a href="tuit.html"
      class="btn btn-primary btn-block rounded-pill">
      Tuit</a>
    </div>
`);
}


export default NavigationSidebar;