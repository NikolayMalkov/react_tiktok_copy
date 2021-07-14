import './../../css/profile.css';
import './../../index.js';



function Profile(props) {



  const VideoPost = (props) => {
    return (   
        <div className="myPost">
        {props.name}
        {props.likesCount}
      </div>
    )
  }

  let videosElements = props.Videos.map( videopost => <VideoPost name={videopost.name} 
    key={videopost.id} likesCount={videopost.likesCount}/>);

  let sendNewPost = () => {
    props.newPost();
  }

 

  return (

    <div className="profile-content">
      <div className="header-profile">
        <div className="user-avatar">
          <img src="https://i.pinimg.com/originals/6a/e7/f3/6ae7f382c0bdd7c0306fb5d5c8982418.jpg" alt="" />
          <div className="user-nickname">nickname</div>
        </div>
        <div className="user-descr">
          <div className="descr">
          Описание
          </div>
          <div className="add-post-btn">
            <button type="button" onClick={sendNewPost}>Добавить видео</button>
          </div>
        </div>
      
      </div>



      <div className="myWall">
       
      {videosElements}

      </div>
      
    </div>


  );
}

export default Profile;
