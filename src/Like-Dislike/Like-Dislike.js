import React ,{Component} from 'react';
import './Like-Dislike.css';
class LikeDislike extends Component{

    constructor(props){
        super(props);
        this.state={likesCount:100,dislikesCount:25,liked:true,disliked:false};
    }

    handleLikeClick=()=>{
        if(this.state.disliked)
            this.setState({
                disliked:!this.state.disliked,
                likesCount:++this.state.likesCount,
                dislikesCount:--this.state.dislikesCount,
            })
        else if(this.state.liked)
            this.setState({likesCount:--this.state.likesCount})
        else
            this.setState({likesCount:++this.state.likesCount})
            

        this.setState({liked:!this.state.liked});
    }
    handleDislikeClick=()=>{
        if(this.state.liked)
            this.setState({
                liked:!this.state.liked,
                dislikesCount:++this.state.dislikesCount,
                likesCount:--this.state.likesCount,
            })
        else if(this.state.disliked)
            this.setState({dislikesCount:--this.state.dislikesCount})
        else
            this.setState({dislikesCount:++this.state.dislikesCount})
        
        this.setState({disliked:!this.state.disliked});
        
    }
    render(){
        let liked=this.state.liked ? "liked":""
        let disliked=this.state.disliked ? "disliked":""

        return (
            <>
                <button className={'like-button ' + liked } onClick={this.handleLikeClick}>Like | <span className="likes-counter">{this.state.likesCount}</span></button>
                <button className={'dislike-button ' + disliked } onClick={this.handleDislikeClick}>Dislike | <span className="dislikes-counter">{this.state.dislikesCount}</span></button>
            </>
        );
    }

}
export default LikeDislike;