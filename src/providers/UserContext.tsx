// import React, { ReactNode, createContext, useState } from 'react';
// import type Realm from 'realm';

// import { League } from '../models/League';

// type UserContextType = {
//   user: {
//     id: string;
//     name: string;
//     image: string;
//     leagues: Realm.List<League>;
//   }[];
//   selectedLeague: League | null;
//   setSelectedLeague: (league: League) => void;
// };

// const UserContext = createContext<UserContextType>({
//   leagues: [],
//   selectedLeague: null,
//   setSelectedMovie: () => {},
// });

// type UserProviderProps = {
//   children: ReactNode;
// };

// export function MovieProvider({ children }: UserProviderProps) {
//   const realm = useRealm();

//   const [selectedMovie, setSelectedMovie] = useState<League | null>(null);

//   const query = (movies: Realm.Results<League>, genre: string) =>
//     movies.filtered(`'${genre}' IN genres`);
//   //   const action = useQuery(Movie, (movies) => query(movies, 'Action'));

//   // const myList = useMemo(
//   //   () => privateContent[0]?.myList || [],
//   //   [privateContent]
//   // );

//   const contextValue = {
//     selectedMovie,
//     setSelectedMovie,
//   };

//   return (
//     <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
//   );
// }
