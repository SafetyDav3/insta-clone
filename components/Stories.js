// Generate fake users with Faker.js --- Solution found here: https://stackoverflow.com/questions/73006706/is-there-a-new-form-of-the-contextualcard-feature-in-faker-js/73661832#73661832

import { faker } from "@faker-js/faker";
import { useState, useEffect } from "react";
import Story from "./Story"

export default function Stories() {
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      userId: faker.datatype.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
    }));
    setSuggestions(suggestions);
    console.log(suggestions.username)
  }, []);

  return (
    <div>
      {suggestions.map((profile) => (
        <Story 
        key={suggestions.userId}
        img={suggestions.avatar}
        username={suggestions.username}
        />
      ))}
    </div>
  )


}
