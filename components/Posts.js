import React from 'react';
import Post from '../components/Post';

function Posts() {
  const posts = [
    {
      id: '123',
      username: 'sexea',
      userImg: 'https://links.papareact.com/ocw',
      img: 'https://links.papareact.com/ocw',
      caption:
        'Doooooooooooooooooooooooooooooooooooooooooooooooogssssssssssssssssss',
    },
    {
      id: '123',
      username: 'sexea',
      userImg: 'https://links.papareact.com/ocw',
      img: 'https://links.papareact.com/ocw',
      caption:
        'fsdkjfsldl;fj;ksfksajdf sdkfjshfjsahf sadlfkjhsdjkl fhsalkdhf lsadfhljsadhfkl shklja',
    },
  ];
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
