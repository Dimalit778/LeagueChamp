import { PropsWithChildren } from 'react';
import { AppProvider, RealmProvider, UserProvider } from '@realm/react';
import 'react-native-get-random-values';

import Toast from 'react-native-toast-message';
import toastAlert from '../myAssets/toastAlert';
import { LoadingSplash } from '../components/LoadingBall';

import { User, League, Round, Match } from '../models/index';

import { schemas } from './RealmContext';
import Welcome from '../app/Welcome';

const APP_ID: string = 'leaguechamp-xqhhequ';

export default function RealmCustomProvider({ children }: PropsWithChildren) {
  return (
    <AppProvider id={APP_ID}>
      <UserProvider fallback={Welcome}>
        <RealmProvider
          schema={schemas}
          sync={{
            flexible: true,
            onError: (_session, error) => {
              console.log(error);
            },
            initialSubscriptions: {
              update(subs, realm) {
                subs.add(realm.objects(User));
                // subs.add(realm.objects(League));
                // subs.add(realm.objects(Round));
                // subs.add(realm.objects(Match));
              },
              rerunOnOpen: true,
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
