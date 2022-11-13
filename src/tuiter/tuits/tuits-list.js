import React from "react";
import {useEffect} from "react";

import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import TuitItem from "./tuit-item";

import {findTuitsThunk} from "../../services/tuits-thunks";

const TuitsList = () => {

    //below: changed tuits to tuitsArray
    const {tuitsArray, loading} = useSelector(
        state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])

    // uncommented the line below
    // const tuitsArray = useSelector(state => state.tuits);

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