import { faker } from '@faker-js/faker';

export interface User {
  firstName: string;
  lastName: string;
  fullName: string;
  avatar: string;
  initials: string;
  description: string;
}

// Generate an array of fake user data
export const fakeUsers: User[] = Array.from({ length: 8 }).map(() => {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();

  return {
    firstName,
    lastName,
    fullName: `${firstName} ${lastName}`, // Concatenated full name
    avatar: faker.image.avatar(),
    initials: `${firstName.charAt(0)}${lastName.charAt(0)}`,
    description: faker.lorem.sentence(), // A short description
  };
});
