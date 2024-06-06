import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M21 12V12.5C21 16.9783 21 19.2175 19.6088 20.6088C18.2175 22 15.9783 22 11.5 22C7.02166 22 4.78249 22 3.39124 20.6088C2 19.2175 2 16.9783 2 12.5C2 8.02166 2 5.78249 3.39124 4.39124C4.78249 3 7.02166 3 11.5 3H12',
  d2: 'M22 5.5C22 7.433 20.433 9 18.5 9C16.567 9 15 7.433 15 5.5C15 3.567 16.567 2 18.5 2C20.433 2 22 3.567 22 5.5Z',
  d3: 'M21 14H16.0743C15.2322 14 14.5706 14.7036 14.1995 15.4472C13.7963 16.2551 12.9889 17 11.5 17C10.0111 17 9.20373 16.2551 8.80054 15.4472C8.42942 14.7036 7.76777 14 6.92566 14H2',
  d4: 'M15.9577 3.09448C14.7815 3 13.3271 3 11.5 3C7.02166 3 4.78249 3 3.39124 4.39124C2 5.78249 2 8.02166 2 12.5C2 13.0307 2 13.5299 2.00231 14H6.92566C7.76777 14 8.42942 14.7036 8.80054 15.4472C9.20373 16.2551 10.0111 17 11.5 17C12.9889 17 13.7963 16.2551 14.1995 15.4472C14.5706 14.7036 15.2322 14 16.0743 14L20.9977 14.0035C21 13.5324 21 13.032 21 12.5C21 10.6729 21 9.2185 20.9055 8.04235C20.2784 8.63595 19.4317 9 18.5 9C16.567 9 15 7.433 15 5.5C15 4.5683 15.364 3.72164 15.9577 3.09448Z',
  d5: 'M14.1995 15.4472L14.8705 15.7821L14.8705 15.7821L14.1995 15.4472ZM8.80054 15.4472L9.47161 15.1123V15.1123L8.80054 15.4472ZM21 13.25H16.0743V14.75H21V13.25ZM16.0743 13.25C14.7942 13.25 13.9389 14.2898 13.5284 15.1123L14.8705 15.7821C15.2023 15.1174 15.6703 14.75 16.0743 14.75V13.25ZM13.5284 15.1123C13.2382 15.6938 12.6746 16.25 11.5 16.25V17.75C13.3032 17.75 14.3544 16.8164 14.8705 15.7821L13.5284 15.1123ZM11.5 16.25C10.3254 16.25 9.76183 15.6938 9.47161 15.1123L8.12947 15.7821C8.64563 16.8164 9.69685 17.75 11.5 17.75V16.25ZM9.47161 15.1123C9.06112 14.2898 8.20585 13.25 6.92566 13.25V14.75C7.32969 14.75 7.79772 15.1174 8.12947 15.7821L9.47161 15.1123ZM6.92566 13.25H2V14.75H6.92566V13.25Z',
  d6: 'M14.25 5.5C14.25 3.15279 16.1528 1.25 18.5 1.25C20.8472 1.25 22.75 3.15279 22.75 5.5C22.75 7.84721 20.8472 9.75 18.5 9.75C16.1528 9.75 14.25 7.84721 14.25 5.5Z',
  d7: 'M20.2156 10.9897C19.9813 11.0629 19.8641 11.0994 19.8057 11.1792C19.7474 11.259 19.748 11.373 19.7491 11.6009C19.7513 12.0381 19.7518 12.4898 19.7519 12.9499C19.752 13.1155 19.6176 13.25 19.4519 13.25L16.072 13.25C14.7918 13.25 13.9366 14.2898 13.5261 15.1123C13.2358 15.6938 12.6723 16.25 11.4977 16.25C10.3231 16.25 9.7595 15.6938 9.46929 15.1123C9.05879 14.2898 8.20352 13.25 6.92333 13.25L3.55194 13.25C3.38626 13.25 3.25193 13.1155 3.25197 12.9499C3.25245 10.7983 3.26128 8.82894 3.41693 7.67121C3.57593 6.4886 3.87144 5.8272 4.35029 5.34835C4.82915 4.8695 5.49055 4.57399 6.67315 4.41499C7.88452 4.25212 9.9845 4.25 12.2519 4.25C12.3035 4.25 12.3542 4.25 12.4041 4.25001C12.6299 4.25002 12.7427 4.25003 12.822 4.19171C12.9014 4.13339 12.9377 4.0171 13.0103 3.78451C13.0682 3.59881 13.1354 3.41715 13.2111 3.24007C13.4166 2.75982 13.5193 2.51969 13.4304 2.38492C13.3415 2.25015 13.1029 2.25011 12.6257 2.25002C12.5291 2.25 12.4296 2.25 12.3268 2.25H11.6775C9.50152 2.24998 7.76678 2.24996 6.40666 2.43283C5.00228 2.62164 3.84847 3.02175 2.93608 3.93414C2.02369 4.84653 1.62358 6.00033 1.43477 7.40471C1.2708 8.62426 1.25387 10.5469 1.25214 12.4999L1.25 14.0037C1.25858 15.7454 1.29789 17.1539 1.50296 18.2892C1.71192 19.4461 2.10342 20.3839 2.85859 21.1391C3.71679 21.9973 4.80904 22.3843 6.1857 22.5694C7.52911 22.75 9.24978 22.75 11.4405 22.75H11.5548C13.7455 22.75 15.4662 22.75 16.8097 22.5694C18.1863 22.3843 19.2786 21.9973 20.1368 21.1391C20.8919 20.3839 21.2834 19.4461 21.4924 18.2892C21.6975 17.1539 21.7368 15.7454 21.7453 14.0037L21.7517 12.5C21.7514 12.1187 21.7505 11.7385 21.748 11.3645C21.7449 10.8942 21.7433 10.6591 21.6087 10.5709C21.4741 10.4828 21.2371 10.5844 20.763 10.7876C20.585 10.8638 20.4023 10.9314 20.2156 10.9897Z',
  d8: 'M20 11V22H2V4H13',
  d9: 'M20 15H14C14 16.6569 12.6569 18 11 18C9.34315 18 8 16.6569 8 15H2',
  d10: 'M1.25 4.225C1.25 3.68652 1.68652 3.25 2.225 3.25H12.5V5.20001H3.19922V14H8.74922V14.75C8.74922 15.9927 9.75658 17 10.9992 17C12.2419 17 13.2492 15.9927 13.2492 14.75V14H18.7992V11.5H20.75V21.775C20.75 22.3135 20.3135 22.75 19.775 22.75H2.225C1.68652 22.75 1.25 22.3135 1.25 21.775V4.225Z',
};

export const IconInboxUnreadStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="inbox-unread-stroke-rounded IconInboxUnreadStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconInboxUnreadDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="inbox-unread-duotone-rounded IconInboxUnreadDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconInboxUnreadTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="inbox-unread-twotone-rounded IconInboxUnreadTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconInboxUnreadSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="inbox-unread-solid-rounded IconInboxUnreadSolidRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconInboxUnreadBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="inbox-unread-bulk-rounded IconInboxUnreadBulkRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconInboxUnreadStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="inbox-unread-stroke-sharp IconInboxUnreadStrokeSharp"
    >
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconInboxUnreadSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="inbox-unread-solid-sharp IconInboxUnreadSolidSharp"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfInboxUnread: TheIconSelfPack = {
  name: 'InboxUnread',
  StrokeRounded: IconInboxUnreadStrokeRounded,
  DuotoneRounded: IconInboxUnreadDuotoneRounded,
  TwotoneRounded: IconInboxUnreadTwotoneRounded,
  SolidRounded: IconInboxUnreadSolidRounded,
  BulkRounded: IconInboxUnreadBulkRounded,
  StrokeSharp: IconInboxUnreadStrokeSharp,
  SolidSharp: IconInboxUnreadSolidSharp,
};