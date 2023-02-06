import React, { useEffect, useState } from 'react';
import Story from '../components/Story';
import faker from 'faker';

function Stories() {
  // think of this as the react way to set variables!
  const [suggestions, setSuggestions] = useState([]);

  // because the array is empty, this code will load when the component loads or 'mounts' and when the variable changes
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setSuggestions(suggestions);
    console.log(suggestions);
  }, []);

  return (
    <div>
      {suggestions.map((profile) => (
        // DO NOT FORGET TO SET KEYS IS REACT COMPONENTS
        // BECAUSE IT WANTS TO RENDER THE LATEST ID
        <Story
          key={profile.id}
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKL6JUjkFxVqsT0xjDaZDIYxtki3Yj76NQCg&usqp=CAU"
          username={profile.username}
        />
      ))}
    </div>
  );
}

export default Stories;
