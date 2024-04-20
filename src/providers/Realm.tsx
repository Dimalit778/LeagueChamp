import Realm from 'realm';
import { PropsWithChildren } from 'react';
import { RealmProvider } from '@realm/react';
import { Round } from '../models/Round';
import { Task } from '../models/Task';
import { AppProvider, UserProvider } from '@realm/react';
import 'react-native-get-random-values';
import LoadingBall from '../components/LoadingBall';

import { League } from '../models/League';

import Welcome from '../app/Welcome';
import Toast from 'react-native-toast-message';
import toastAlert from '../myAssets/toastAlert';
import Register from '../app/Register';

const APP_ID: string = 'league-rwomr';

export default function RealmCustomProvider({ children }: PropsWithChildren) {
  return (
    <AppProvider id={APP_ID}>
      <UserProvider fallback={Welcome}>
        <RealmProvider
          schema={[League]}
          fallback={LoadingBall}
          // sync={{
          //   flexible: true,
          //   initialSubscriptions: {
          //     update(subs, realm) {
          //       subs.add(realm.objects('League'));
          //     },
          //     rerunOnOpen: true,
          //   },
          // }}
        >
          {children}
        </RealmProvider>
      </UserProvider>
      <Toast config={toastAlert} />
    </AppProvider>
  );
}
