import React from "react";
// import whoArray from '../data/who.json';
import WhoToFollowListItem from "./who-to-follow-list-item";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
    const whoArray = useSelector(
        (state) => state.who);

    return (
        // <div>
        //     <h1>Who To Follow!!</h1>
        // </div>
        <ul className="list-group list-unstyled">
            <li className="item-group-item">
                <h3>Who to follow</h3>
            </li>
            {
                whoArray.map(who =>
                    <WhoToFollowListItem
                        key={who._id}
                        who={who}/>
                )
            }
        </ul>
    );
};

export default WhoToFollowList;


