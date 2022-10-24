import React from "react";
import whoArray from './who.json';
// does it matter what I make the above import?
import WhoToFollowListItem from "./who-to-follow-list-item";

const WhoToFollowList = () => {
    return (
        <ul className="list-group list-unstyled">
            <li className="item-group-item">
                <h3>Who to follow</h3>
            </li>
            {
                whoArray.map(who =>
                    <WhoToFollowListItem
                        /*unsure about why it is not being able to understand who._id */
                        key={who._id}
                        who={who}/>
                )
            }
        </ul>
    );
};

export default WhoToFollowList;


