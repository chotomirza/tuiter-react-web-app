const WhoToFollowListItem = (who) => {
    const {avatarIcon, userName, handle} = who;

    return(`
            <li class="list-group-item">
            <div class="row">
                <div class="col-2">
                    <img src="${avatarIcon}"
                         width="50px" class="rounded-circle">
                </div>
                <div class="col-sm-9 col-lg-10 float-start">
                    <div class="row"><b>${userName} <i class="fa fa-check-circle"></i></b></div>

                    <div class="text-black">@${handle}</div>

                </div>
                <div class="col wd-vertical-center">
                    <button class="btn btn-primary rounded-pill float-end">Follow</button>
                </div>
            </div>
        </li>
    `);
}

export default WhoToFollowListItem;


