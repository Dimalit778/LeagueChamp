import { PropsWithChildren } from 'react';
import { AppProvider, RealmProvider, UserProvider } from '@realm/react';
import 'react-native-get-random-values';

import Welcome from '../app/Welcome';
import Toast from 'react-native-toast-message';
import toastAlert from '../myAssets/toastAlert';
import { schemas } from './RealmContext';

const APP_ID: string = 'league-rwomr';

export default function RealmCustomProvider({ children }: PropsWithChildren) {
  return (
    <AppProvider id={APP_ID}>
      <UserProvider fallback={Welcome}>
        <RealmProvider
          schema={schemas}
          sync={{
            flexible: true,
            onError: (_, error) => {
              console.error(error);
            },
          }}
          // fallback={<LoadingBall />}
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
