import { PropsWithChildren } from 'react';
import { AppProvider, RealmProvider, UserProvider } from '@realm/react';
import 'react-native-get-random-values';

import Welcome from '../app/Welcome';
import Toast from 'react-native-toast-message';
import toastAlert from '../myAssets/toastAlert';
import { schemas } from './RealmContext';

import { LoadingSplash } from '../components/LoadingBall';

import { User } from '../models/User';
import { League } from '../models/League';

import { Round } from '../models/Round';
import { Match } from '../models/Match';

const APP_ID: string = 'leaguechamp-xqhhequ';

export default function RealmCustomProvider({ children }: PropsWithChildren) {
  return (
    <AppProvider id={APP_ID}>
      <UserProvider fallback={Welcome}>
        <RealmProvider
          schema={schemas}
          sync={{
            flexible: true,
            initialSubscriptions: {
              update(subs, realm) {
                subs.add(realm.objects(User));
                subs.add(realm.objects(League));
                subs.add(realm.objects(Match));
                subs.add(realm.objects(Round));
              },
              rerunOnOpen: true,
            },
            onError: (_, error) => {
              console.error(error);
            },
          }}
          fallback={<LoadingSplash />}
        >
          {children}
        </RealmProvider>
      </UserProvider>
      <Toast config={toastAlert} />
    </AppProvider>
  );
}

// sync={{
//   flexible: true,
//   initialSubscriptions: {
//     update(subs, realm) {
//       subs.add(realm.objects('League'));
//     },
//     rerunOnOpen: true,
//   },
