import React from "react";
import {useEffect} from "react";

import {useSelector} from "react-redux";
import TuitItem from "./tuit-item";

import {findTuitsThunk} from "../../services/tuits-thunks";

const TuitsList = () => {

    const {tuits, loading} = useSelector(
        state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])

    // const tuitsArray = useSelector(state => state.tuits)
    return (
        <ul className="list-group">

            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }


            {
                tuitsArray.map(
                    post =>
                        <TuitItem
                            key={post._id}
                            tuit={post}
                         />
                )
            }
        </ul>
    );
};

export default TuitsList;