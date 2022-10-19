import post from "./post.js";
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
    return (`
    <ul class="list-group">
        ${ post.map(content =>
    {
        return(PostSummaryItem(content));
    }).join('')
    }
    </ul>
    `);
}

export default PostSummaryList;