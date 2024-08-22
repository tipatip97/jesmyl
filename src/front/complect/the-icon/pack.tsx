import { iconPackOfAttachment } from './icons/attachment';
import { iconPackOfBasketballHoop } from './icons/basketball-hoop';
import { iconPackOfCheckList } from './icons/check-list';
import { iconPackOfFileMusic } from './icons/file-music';
import { iconPackOfGithub01 } from './icons/github-01';
import { iconPackOfPlaylist01 } from './icons/playlist-01';
import { iconPackOfPlaylist02 } from './icons/playlist-02';
import { iconPackOfPlaylist03 } from './icons/playlist-03';
import { iconPackOfTeacher } from './icons/teacher';
import { iconPackOfUserGroup } from './icons/user-group';
import { TheIconSelfPack } from './model';

export const theIconUsedPack: Record<KnownIconNameForPack, TheIconSelfPack> = {
  Playlist01: iconPackOfPlaylist01,
  Playlist02: iconPackOfPlaylist02,
  Playlist03: iconPackOfPlaylist03,
  FileMusic: iconPackOfFileMusic,
  Github01: iconPackOfGithub01,
  BasketballHoop: iconPackOfBasketballHoop,
  Attachment: iconPackOfAttachment,
  CheckList: iconPackOfCheckList,
  Teacher: iconPackOfTeacher,
  UserGroup: iconPackOfUserGroup,
};
