import Realm from 'realm';
import { PropsWithChildren } from 'react';
import { RealmProvider } from '@realm/react';
import { Round } from '../models/Round';
import { Task } from '../models/Task';

export default function RealmCustomProvider({ children }: PropsWithChildren) {
  return <RealmProvider schema={[Round, Task]}>{children}</RealmProvider>;
}
