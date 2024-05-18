import { useObject } from '@realm/react';

const writeCustomUserData = async (user: any, name: string) => {
  const customUserDataCollection = user
    .mongoClient('mongodb-atlas')
    .db('LeagueChamp')
    .collection('User');

  const filter = {
    userId: user.id,
  };
  const updateDoc = {
    $set: {
      userId: user.id,
      name: name,
      image: '',
      leagues: [],
    },
  };
  const options = { upsert: true };
  await customUserDataCollection.updateOne(filter, updateDoc, options);
  // Refresh custom user data once it's been updated on the server
  const customUserData = await user.refreshCustomData();
  console.log(customUserData);
};
const addLeagueCustomUser = async (user: any, owner: any, newLeague: any) => {
  const userCollection = user
    .mongoClient('mongodb-atlas')
    .db('LeagueChamp')
    .collection('User');
  const filter = {
    userId: user.id,
  };
  const updateDoc = {
    $set: {
      leagues: [
        ...owner.leagues,
        { _id: newLeague._id, name: newLeague.leagueName },
      ],
    },
  };
  const options = { upsert: false };
  await userCollection.updateOne(filter, updateDoc, options);
  // Refresh custom user data once it's been updated on the server
  const customUserData = await user.refreshCustomData();
  console.log(customUserData);
};
// ...
export { writeCustomUserData, addLeagueCustomUser };
