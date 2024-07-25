import AppFooter from '../../../../app/AppFooter';
import AppFooterItem from '../../../../app/AppFooterItem';
import { iconPackOfComputer } from '../../../../complect/the-icon/icons/computer';
import { iconPackOfFile02 } from '../../../../complect/the-icon/icons/file-02';
import { iconPackOfFileSearch } from '../../../../complect/the-icon/icons/file-search';

export const BibleFooter = () => {
  return (
    <AppFooter>
      <AppFooterItem
        to="i"
        title="Глава"
        iconPack={iconPackOfFile02}
      />
      <AppFooterItem
        to="search"
        title="Поиск"
        iconPack={iconPackOfFileSearch}
      />
      <AppFooterItem
        to="tran"
        title="Трансляция"
        iconPack={iconPackOfComputer}
      />
    </AppFooter>
  );
};
