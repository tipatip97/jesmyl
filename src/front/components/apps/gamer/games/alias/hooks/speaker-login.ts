import { useAliasMemberList } from './member-list';
import { useAliasRoomState } from './state';

export const useAliasSpeakerLogin = () => {
  const state = useAliasRoomState();
  const memberList = useAliasMemberList(state);

  if (state?.speakeri == null || !memberList) return null;
  return memberList[state.speakeri];
};
