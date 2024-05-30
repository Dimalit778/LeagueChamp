exports = async function deleteUser({ user }) {
  const serviceName = 'mongodb-atlas';
  const databaseName = 'LeagueChamp';
  const collectionName = 'User';

  const collection = context.services
    .get(serviceName)
    .db(databaseName)
    .collection(collectionName);

  try {
    return await collection.deleteOne({ userId: user.id });
  } catch (err) {
    console.error('Error while executing `deleteUser()`:', err.message);
  }
};
