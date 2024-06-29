import { useApp } from '@realm/react';

export const useCustomUser = () => {
  const app = useApp();
  const saveCustomUser = async (userData: any) => {
    const user = app.currentUser;
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
        name: userData.name,
        email: userData.email,
        image: userData.photo || '',
      },
    };
    const options = { upsert: true };
    await customUserDataCollection.updateOne(filter, updateDoc, options);
    await user.refreshCustomData();
  };
  return { saveCustomUser };
};
