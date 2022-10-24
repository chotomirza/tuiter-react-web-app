import React from "react";

import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";



function Tuiter() {
    return(

        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="explore"/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                 style={{"position": "relative"}}>
                <ExploreComponent/>
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <WhoToFollowList/>
            </div>
        </div>





        // <div>
        //     {/*<Nav/>*/}
        //     {/*<NavigationSidebar active="home"/>*/}
        //     {/*<WhoToFollowListItem/>*/}
        //     {/*<WhoToFollowListItem who={{*/}
        //     {/*    userName: 'NASA', handle: 'NASA',*/}
        //     {/*    avatarIcon: 'nasa.png',*/}
        //     {/*}}/>*/}
        //     {/*<WhoToFollowListItem who={{*/}
        //     {/*    userName: 'Tesla', handle: 'tesla',*/}
        //     {/*    avatarIcon: 'tesla.png',*/}
        //     {/*}}/>*/}
        //     {/*<WhoToFollowListItem who={{*/}
        //     {/*    userName: 'SpaceX', handle: 'SpaceX',*/}
        //     {/*    avatarIcon: 'spacex.png',*/}
        //     {/*}}/>*/}
        //
        //
        //     {/*<h1>Tuiter</h1>*/}
        // </div>
    );
}
export default Tuiter
// do we need a ; at the end?