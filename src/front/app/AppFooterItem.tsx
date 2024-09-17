import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { contextCreator } from '../complect/contextCreator';
import { TheIconSelfPack } from '../complect/the-icon/model';
import { AppName } from './App.model';

interface Props {
  to: string;
  iconPack: TheIconSelfPack;
  title: string;
  search?: `?${string}`;
}

const [CurrentAppFooterItemPlaceContext, useCurrentAppFooterItemPlaceContext] = contextCreator<string | und>(undefined);
const [CurrentAppFooterItemAppNameContext, useCurrentAppFooterItemAppNameContext] = contextCreator<AppName | und>(
  undefined,
);
const footerItemPlaceLsPrefix = 'nav-link:';

export { CurrentAppFooterItemAppNameContext, CurrentAppFooterItemPlaceContext, footerItemPlaceLsPrefix };

export default function AppFooterItem({ to, iconPack, title, search }: Props) {
  const appName = useCurrentAppFooterItemAppNameContext();
  const place = useCurrentAppFooterItemPlaceContext();
  const isActive = to === place;

  if (!isActive && appName && place) {
    to = localStorage.getItem(footerItemPlaceLsPrefix + appName + '/' + to) ?? to;
  }

  if (search !== undefined && !to.includes('?')) to += search;

  return (
    <StyledLink
      to={to}
      className={'pointer ' + (isActive ? 'active' : '')}
    >
      <div className="icon-container">{isActive ? <iconPack.TwotoneRounded /> : <iconPack.BulkRounded />}</div>
      <div className="title">{title}</div>
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;

  > .icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
    transition:
      width 0.1s,
      background-color 0.05s;
    border-radius: 30px;
    width: 24px;
    height: 30px;
  }

  &.active {
    > .icon-container {
      background-color: var(--color--2);
      width: 50px;
      color: var(--color--3);
    }
  }
`;
