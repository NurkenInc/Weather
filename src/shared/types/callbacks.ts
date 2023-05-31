import { Session, Account, User } from 'next-auth';
import { Profile } from '@shared/types/auth';

export interface SessionProps {
  session: Session,
}

export interface SignInProps {
  account: Account,
  profile: Profile,
  user: User,
}