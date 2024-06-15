import { PropsWithChildren } from 'react';
import { AppProvider, RealmProvider, UserProvider } from '@realm/react';
import 'react-native-get-random-values';
import { I18nManager } from 'react-native';
I18nManager.allowRTL(false);
import Toast from 'react-native-toast-message';
import toastAlert from '../myAssets/toastAlert';
import { LoadingSplash } from '../components/LoadingBall';
import Welcome from '../app/Welcome';
import { League, Match, Round, User } from '@/models';
const APP_ID: string = 'leaguechamp-xqhhequ';

export default function RealmCustomProvider({ children }: PropsWithChildren) {
  return (
    <AppProvider id={APP_ID}>
      <UserProvider fallback={Welcome}>
        <RealmProvider
          schema={[League, Match, Round, User]}
          sync={{
            flexible: true,
            onError: (_session, error) => {
              console.log(error);
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
// newRealmFileBehavior: {
//   type: OpenRealmBehaviorType.DownloadBeforeOpen,
// },
// initialSubscriptions: {
//   update(subs, realm) {
//     subs.add(realm.objects(User));
//   },
//   rerunOnOpen: true,
// },
