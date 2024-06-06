import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M3 5.74755C3 3.98094 3 3.09763 3.51256 2.54882C4.02513 2 4.85008 2 6.5 2C8.14992 2 8.97487 2 9.48744 2.54882C10 3.09763 10 3.98094 10 5.74755V7.54157C10 8.8676 10 9.53062 9.66489 9.81195C9.57217 9.88979 9.46572 9.94678 9.35193 9.9795C8.94067 10.0977 8.44529 9.69994 7.45455 8.90432C7.04241 8.57336 6.83635 8.40788 6.60214 8.3784C6.53428 8.36986 6.46572 8.36986 6.39786 8.3784C6.16365 8.40788 5.95759 8.57336 5.54545 8.90432C4.55471 9.69994 4.05933 10.0977 3.64807 9.9795C3.53428 9.94678 3.42783 9.88979 3.33511 9.81195C3 9.53062 3 8.8676 3 7.54157V5.74755Z',
  d2: 'M13 2H13.2727C16.5339 2 18.1645 2 19.2969 2.79784C19.6214 3.02643 19.9094 3.29752 20.1523 3.60289C21 4.66867 21 6.20336 21 9.27273V11.8182C21 14.7814 21 16.2629 20.5311 17.4462C19.7772 19.3486 18.1829 20.8491 16.1616 21.5586C14.9044 22 13.3302 22 10.1818 22C8.38275 22 7.48322 22 6.76478 21.7478C5.60979 21.3424 4.69875 20.4849 4.26796 19.3979C4 18.7217 4 17.8751 4 16.1818V13',
  d3: 'M21 12C21 13.8409 19.5076 15.3333 17.6667 15.3333C17.0009 15.3333 16.216 15.2167 15.5686 15.3901C14.9935 15.5442 14.5442 15.9935 14.3901 16.5686C14.2167 17.216 14.3333 18.0009 14.3333 18.6667C14.3333 20.5076 12.8409 22 11 22',
  d4: 'M4 9.96711V16.1818C4 17.8751 4 18.7217 4.26796 19.3979C4.69875 20.4849 5.60979 21.3424 6.76478 21.7478C7.48321 22 8.38275 22 10.1818 22H10.1832C10.7172 22 11.2059 22 11.6555 21.9978C13.9262 21.8711 14.4675 18.9333 14.4508 17.4483C14.4099 15.8053 15.2005 15.5021 15.502 15.5021C19.09 15.5021 20.6582 13.8464 20.9986 13.0104C21 12.6419 21 12.2462 21 11.8199V9.27273C21 6.20337 21 4.66867 20.1523 3.60289C19.9094 3.29753 19.6214 3.02643 19.2969 2.79784C18.1645 2 16.5339 2 13.2727 2H9C8.46203 2 8.07977 2 7.77827 2.01491C8.61768 2.0496 9.12896 2.16499 9.48744 2.54882C10 3.09763 10 3.98094 10 5.74755V7.54157C10 8.8676 10 9.53062 9.66489 9.81195C9.57217 9.88979 9.46572 9.94678 9.35193 9.9795C8.94067 10.0977 8.44529 9.69994 7.45455 8.90432C7.04242 8.57336 6.83635 8.40788 6.60214 8.3784C6.53428 8.36986 6.46572 8.36986 6.39786 8.3784C6.16365 8.40788 5.95759 8.57336 5.54546 8.90432C4.81699 9.48931 4.35633 9.85925 4 9.96711Z',
  d5: 'M6.44636 1.25L6.5 1.25L6.55364 1.25H6.55369C7.33278 1.24996 7.99687 1.24993 8.52709 1.32626C9.09658 1.40824 9.61929 1.59118 10.0356 2.0369C10.4451 2.47536 10.6067 3.01358 10.6801 3.59807C10.7501 4.15525 10.75 4.85705 10.75 5.69886V5.69888V7.58716C10.75 8.21122 10.7501 8.7441 10.7033 9.15365C10.6573 9.55584 10.5487 10.0492 10.1471 10.3864C9.97586 10.5301 9.77618 10.6379 9.55918 10.7003C9.03193 10.8519 8.56321 10.63 8.22737 10.4233C7.88789 10.2143 7.48577 9.89134 7.0232 9.51983L7.02319 9.51982C6.80553 9.34503 6.59432 9.18675 6.5 9.12514C6.40568 9.18675 6.19447 9.34504 5.97681 9.51983C5.51424 9.89134 5.11212 10.2143 4.77263 10.4233C4.43679 10.63 3.96807 10.8519 3.44082 10.7003C3.22383 10.6379 3.02415 10.5301 2.85288 10.3864C2.45126 10.0492 2.34268 9.55584 2.29674 9.15365C2.24995 8.74411 2.24997 8.21125 2.25 7.58721V7.58717V5.69887V5.69882C2.24998 4.85703 2.24996 4.15524 2.31992 3.59807C2.39331 3.01358 2.55495 2.47536 2.96444 2.0369C3.38072 1.59118 3.90343 1.40824 4.47291 1.32626C5.00313 1.24993 5.66723 1.24996 6.44632 1.25H6.44636Z',
  d6: 'M17.0635 1.35275C16.0812 1.24999 14.7935 1.24999 13.2524 1.25C12.7127 1.25 12.2751 1.68756 12.2751 2.22731C12.2751 2.76705 12.7127 3.20459 13.2524 3.20459C14.861 3.20459 15.9922 3.20584 16.8616 3.29679C17.7155 3.38612 18.1994 3.55288 18.5573 3.80592C18.7987 3.97667 19.0111 4.17776 19.1889 4.40211C19.4445 4.72461 19.6139 5.1574 19.7061 5.94419C19.8011 6.75395 19.8026 7.81128 19.8026 9.33473L19.8027 12.2349C19.8027 12.5019 19.8026 13.1405 19.522 13.6127C19.349 13.9036 19.1276 14.1467 18.9002 14.2706C18.5336 14.4701 18.1135 14.5835 17.6668 14.5835L16.6264 14.547C16.2463 14.5391 15.8028 14.5511 15.3746 14.6658C14.5407 14.8893 13.8893 15.5407 13.6658 16.3746C13.5511 16.8028 13.5391 17.2463 13.547 17.6264L13.5835 18.6668C13.5835 19.1345 13.4591 19.5416 13.2417 19.92C13.115 20.1406 12.8943 20.3425 12.5895 20.5198C12.1274 20.7887 11.574 20.7912 11.2358 20.7927C10.8977 20.7943 10.5409 20.7954 10.2428 20.7954C8.40872 20.7954 7.74159 20.7815 7.23823 20.6041C6.3656 20.2967 5.6999 19.655 5.38981 18.8697C5.31217 18.673 5.25733 18.4146 5.22789 17.9667C5.19788 17.51 5.19739 16.927 5.19739 16.0868V13.9737C5.19739 13.4359 4.76145 13 4.22369 13C3.68594 13 3.25 13.4359 3.25 13.9737V16.12C3.24999 16.9191 3.24999 17.5667 3.28473 18.0952C3.32052 18.6399 3.39613 19.1255 3.5794 19.5897C4.10821 20.929 5.21664 21.9633 6.5932 22.4483C7.452 22.7509 8.92408 22.7505 10.4791 22.7499C13.3187 22.7503 15.0054 22.7505 16.3878 22.2634C18.6078 21.4813 20.3815 19.8185 21.2249 17.6825C21.506 16.9705 21.6306 16.2058 21.6908 15.2889C21.75 14.3882 21.75 13.2756 21.75 11.8573V11.8573V9.27382C21.75 7.82573 21.75 6.65308 21.6402 5.71575C21.526 4.74235 21.2828 3.90447 20.713 3.1854C20.4178 2.81292 20.0692 2.48414 19.6789 2.20809C18.9341 1.68143 18.0729 1.45834 17.0635 1.35275Z',
  d7: 'M12.9488 2H20.99C20.9955 2 21 2.00448 21 2.01V15L14 22H4.01C4.00448 22 4 21.9955 4 21.99V12.9793M20.395 15H14V21.3171',
  d8: 'M3.01 2H9.99C9.99552 2 10 2.00448 10 2.01V10L6.5 8L3 10V2.01C3 2.00448 3.00448 2 3.01 2Z',
  d9: 'M2.25 2C2.25 1.58579 2.58579 1.25 3 1.25H10C10.4142 1.25 10.75 1.58579 10.75 2V10.75L6.5 8.32143L2.25 10.75V2Z',
  d10: 'M3.25 21.7727C3.25 22.3125 3.68593 22.75 4.22368 22.75H14.3638L21.75 15.3366V2.22727C21.75 1.68754 21.3141 1.25 20.7763 1.25H12.9869V3.2045H19.8027V13.9545H12.9869L12.9869 20.7954H5.19747V13H3.25V21.7727Z',
};

export const IconFileBookmarkStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-bookmark-stroke-rounded IconFileBookmarkStrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFileBookmarkDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-bookmark-duotone-rounded IconFileBookmarkDuotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFileBookmarkTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-bookmark-twotone-rounded IconFileBookmarkTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFileBookmarkSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-bookmark-solid-rounded IconFileBookmarkSolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFileBookmarkBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-bookmark-bulk-rounded IconFileBookmarkBulkRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFileBookmarkStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-bookmark-stroke-sharp IconFileBookmarkStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconFileBookmarkSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-bookmark-solid-sharp IconFileBookmarkSolidSharp"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFileBookmark: TheIconSelfPack = {
  name: 'FileBookmark',
  StrokeRounded: IconFileBookmarkStrokeRounded,
  DuotoneRounded: IconFileBookmarkDuotoneRounded,
  TwotoneRounded: IconFileBookmarkTwotoneRounded,
  SolidRounded: IconFileBookmarkSolidRounded,
  BulkRounded: IconFileBookmarkBulkRounded,
  StrokeSharp: IconFileBookmarkStrokeSharp,
  SolidSharp: IconFileBookmarkSolidSharp,
};