import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from './who.js'

const WhoToFollowList = () => {
    return (`
<!--        <div className="col-lg-4 col-xl-4 col-xxl-4 d-none d-lg-block">-->
        <ul class="list-group">
            <li class="list-group-item">
                <div class="row">
                    <div class="col"><b>Who to follow</b></div>
                 </div>
            </li>
        ${who.map(
            profile => {
                return(WhoToFollowListItem(profile));
        }).join('')
        }
        </ul>
        `);
}
export default WhoToFollowList;
