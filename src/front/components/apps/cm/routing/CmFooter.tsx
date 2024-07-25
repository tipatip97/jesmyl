import AppFooter from '../../../../app/AppFooter';
import AppFooterItem from '../../../../app/AppFooterItem';
import { iconPackOfEdit02 } from '../../../../complect/the-icon/icons/edit-02';
import { iconPackOfLeftToRightListBullet } from '../../../../complect/the-icon/icons/left-to-right-list-bullet';
import { iconPackOfPlaylist01 } from '../../../../complect/the-icon/icons/playlist-01';
import { useAuth } from '../../../index/molecules';

export const CmFooter = () => {
  const auth = useAuth();

  return (
    <AppFooter>
      <AppFooterItem
        to="i"
        title="Все"
        iconPack={iconPackOfLeftToRightListBullet}
      />
      <AppFooterItem
        to="li"
        title="Списки"
        iconPack={iconPackOfPlaylist01}
      />
      {auth.level >= 50 && (
        <AppFooterItem
          to="edit"
          title="Редактор"
          iconPack={iconPackOfEdit02}
        />
      )}
    </AppFooter>
  );
};
