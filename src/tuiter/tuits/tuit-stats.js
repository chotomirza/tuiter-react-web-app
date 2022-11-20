import {updateTuitThunk} from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";

const TuitStats = ({tuit}) => {
    // added the line below
    const dispatch = useDispatch();
    return (
        <div className="row mt-3">
            <div className="col">
                <i className="bi bi-chat me-2"></i>
                {tuit.replies}
            </div>

            <div className="col">
                <i className="bi bi-arrow-repeat me-2"></i>
                {tuit.retuits}
            </div>


            <div className="col">
                {
                tuit.liked &&
                <i className="bi bi-heart-fill me-2 text-danger"></i>
                }
                {
                    !tuit.liked &&
                    <i className="bi bi-heart me-2"></i>
                }
                {tuit.likes}
            </div>

            <div className="col">
                {
                    tuit.disliked &&
                    <i className="bi bi-hand-thumbs-down-fill me-2 text-danger"></i>
                }
                {
                    !tuit.disliked &&
                    <i className="bi bi-hand-thumbs-down me-2"></i>
                }
                {tuit.dislikes}
            </div>

            <div className="col">
                <i className="bi bi-share"></i>
            </div>

            <div>
                Likes: {tuit.likes}
                <i onClick={() => dispatch(updateTuitThunk({
                    ...tuit,
                    likes: tuit.likes + 1
                }))
                }
                   // className="bi bi-heart-fill me-2 text-danger">
>
                </i>
            </div>

            <div>
                Dislikes: {tuit.dislikes}
                <i onClick={() => dispatch(updateTuitThunk({
                    ...tuit,
                    dislikes: tuit.dislikes + 1
                }))} className="bi bi-sign-do-not-enter me-2 text-danger"></i>
            </div>


        </div>
    )
}


export default TuitStats;