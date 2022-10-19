const PostSummaryItem = (post) => {

    const {topic, userName, time, image, title, tweets} = post;
    return(`
    <li class="list-group-item wd-card-padding-spec">
    
    
       <div class="card-body wd-card-body-override-spec">
        <!--                                each row added here-->
        <div class="row">
            <div class="col-sm-9 col-lg-10 float-start">
                <div class="text-secondary small">
                    ${topic}
                </div>

                <div class="">
                    <span class="text-black fw-bolder">${userName}</span>
                    <span>
                            <img class="wd-author-logo wd-img-bnw" width="12px"
                                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/2048px-Twitter_Verified_Badge.svg.png" alt="verified logo tuiter"/>
                    </span>
                    <span class="text-secondary small">- ${time}</span>
                </div>

                <div class="text-black fw-bold small">
                    ${title}
                </div>

                <div class="text-secondary small">
                    ${tweets} Tweets
                </div>

            </div>


            <div class="col-sm-3 col-lg-2  float-end">
                <img src="${image}" width="100px" height="100px"
                     class="float-end rounded" alt="logo">
            </div>

        </div>
    </div>
    
    </li>
    `);

}

export default PostSummaryItem;