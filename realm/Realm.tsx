import { PropsWithChildren } from 'react';
import { AppProvider, RealmProvider, UserProvider, useApp } from '@realm/react';
import 'react-native-get-random-values';
import { I18nManager } from 'react-native';
I18nManager.allowRTL(false);
import Toast from 'react-native-toast-message';
import toastAlert from '../utils/toastAlert';
import { LoadingSplash } from '../components/LoadingBall';
import Welcome from '../app/Welcome';
import { League, Match, Round, User } from '@/realm/models';

const APP_ID: string = 'leaguechamp-xqhhequ';

// const { RealmProvider } = realmContext;
export default function RealmCustomProvider({ children }: PropsWithChildren) {
  return (
    <AppProvider id={APP_ID} baseUrl="https://services.cloud.mongodb.com">
      <UserProvider fallback={Welcome}>
        <RealmProvider
          schema={[League, Match, Round, User]}
          sync={{
            flexible: true,
            initialSubscriptions: {
              update(subs, realm) {
                subs.add(realm.objects(User));
                subs.add(realm.objects(League));
                subs.add(realm.objects(Round));
                subs.add(realm.objects(Match));
              },
              rerunOnOpen: true,
            },
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
