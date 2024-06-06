import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12.0027 20.5C7.2874 20.5 4.92973 20.5 3.46487 19.0355C2 17.5711 2 15.214 2 10.5V7.44427C2 5.6278 2 4.71956 2.38042 4.03806C2.6516 3.55227 3.05255 3.15142 3.53848 2.88032C4.22017 2.5 5.12865 2.5 6.94562 2.5C8.10969 2.5 8.69172 2.5 9.20122 2.69101C10.3645 3.12712 10.8442 4.18358 11.3691 5.23313L12.0027 6.5M7.00136 6.5H16.754C18.8613 6.5 19.9149 6.5 20.6718 7.00559C20.9995 7.22447 21.2808 7.50572 21.4997 7.83329C21.8937 8.42282 21.9808 9.19244 22 10.5',
  d2: 'M16.7372 15.6755L16.7372 14.2848C16.7372 14.0794 16.7458 13.8714 16.8194 13.6796C17.0153 13.1689 17.5343 12.5 18.4791 12.5C19.424 12.5 19.9633 13.1689 20.1593 13.6796C20.2329 13.8714 20.2414 14.0794 20.2414 14.2848L20.2414 15.6755M16.8067 21.5H20.1923C21.1891 21.5 21.9971 20.6932 21.9971 19.6979V17.6961C21.9971 16.7008 21.1891 15.894 20.1923 15.894H16.8067C15.81 15.894 15.002 16.7008 15.002 17.6961V19.6979C15.002 20.6932 15.81 21.5 16.8067 21.5Z',
  d3: 'M13.251 20.5049H12.001C7.28693 20.5049 4.92991 20.5049 3.46545 19.04C2.00098 17.5752 2.00098 15.2174 2.00098 10.5022V7.4456C2.00098 5.62864 2.00098 4.72016 2.3813 4.03847C2.6524 3.55255 3.05325 3.1516 3.53904 2.88042C4.22054 2.5 5.12878 2.5 6.94525 2.5C8.109 2.5 8.69088 2.5 9.20024 2.69106C10.3089 3.10689 10.7965 4.0866 11.2942 5.08667C11.3186 5.1357 11.343 5.18479 11.3676 5.23387L12.001 6.50108H16.751C18.8577 6.50108 19.911 6.50108 20.6677 7.0068C20.9953 7.22574 21.2765 7.50707 21.4954 7.83473C22.001 8.5916 22.001 9.64524 22.001 11.7525C22.001 14.0839 22.001 15.6415 21.7545 16.7944C21.5627 16.4492 21.2711 16.1769 20.9207 16.0213C20.7423 15.9421 20.5373 15.9069 20.251 15.8912V14.1907C20.251 13.2584 19.4675 12.5027 18.501 12.5027C17.5345 12.5027 16.751 13.2584 16.751 14.1907V15.8912C16.4647 15.9069 16.2597 15.9421 16.0813 16.0213C15.6525 16.2117 15.3118 16.5768 15.1342 17.0364C15.001 17.381 15.001 17.818 15.001 18.6919C15.001 19.5657 15.001 20.0027 15.1342 20.3473C15.154 20.3986 15.1759 20.4487 15.1997 20.4976C14.6166 20.5049 13.9707 20.5049 13.251 20.5049Z',
  d4: 'M16.7434 15.6806V14.2911C16.7434 14.0858 16.752 13.878 16.8254 13.6864C17.0208 13.1762 17.5384 12.5078 18.4807 12.5078C19.4231 12.5078 19.961 13.1762 20.1564 13.6864C20.2298 13.878 20.2384 14.0858 20.2384 14.2911V15.6806M16.8127 21.5H20.1894C21.1835 21.5 21.9894 20.6939 21.9894 19.6995V17.6993C21.9894 16.705 21.1835 15.8989 20.1894 15.8989H16.8127C15.8186 15.8989 15.0127 16.705 15.0127 17.6993V19.6995C15.0127 20.6939 15.8186 21.5 16.8127 21.5Z',
  d5: 'M12.0037 20.5049C7.28838 20.5049 4.93071 20.5049 3.46585 19.04C2.00098 17.5752 2.00098 15.2174 2.00098 10.5022V7.4456C2.00098 5.62864 2.00098 4.72016 2.3814 4.03847C2.65258 3.55255 3.05353 3.1516 3.53946 2.88042C4.22115 2.5 5.12963 2.5 6.9466 2.5C8.11067 2.5 8.6927 2.5 9.2022 2.69106C10.3655 3.12729 10.8452 4.18403 11.3701 5.23387L12.0037 6.50108M7.00234 6.50108H16.755C18.8623 6.50108 19.9159 6.50108 20.6728 7.0068C21.0005 7.22574 21.2818 7.50707 21.5007 7.83473C21.8947 8.42442 21.9818 9.19424 22.001 10.5022',
  d6: 'M16 15.2492V14.1875C16 12.8158 17.1452 11.75 18.5 11.75C19.8548 11.75 21 12.8158 21 14.1875V15.2492C21.0751 15.272 21.1498 15.2993 21.2239 15.3322C21.8441 15.6074 22.3211 16.1277 22.5663 16.762C22.6722 17.036 22.7129 17.3173 22.7318 17.6139C22.75 17.8994 22.75 18.2943 22.75 18.7111C22.75 19.1278 22.75 19.4756 22.7318 19.7611C22.7129 20.0577 22.6722 20.3391 22.5663 20.613C22.3211 21.2474 21.8441 21.7676 21.2239 22.0428C20.9516 22.1637 20.6728 22.2093 20.3872 22.2302C20.1156 22.25 19.7866 22.25 19.4011 22.25H17.5989C17.2135 22.25 16.8844 22.25 16.6128 22.2302C16.3272 22.2093 16.0484 22.1637 15.7761 22.0428C15.1559 21.7676 14.6789 21.2474 14.4337 20.613C14.3278 20.3391 14.2871 20.0577 14.2682 19.7611C14.25 19.4756 14.25 19.1279 14.25 18.7111C14.25 18.2944 14.25 17.8994 14.2682 17.6139C14.2871 17.3173 14.3278 17.036 14.4337 16.762C14.6789 16.1277 15.1559 15.6074 15.7761 15.3322C15.8502 15.2993 15.9249 15.272 16 15.2492ZM17.5 14.1875C17.5 13.6952 17.9218 13.25 18.5 13.25C19.0782 13.25 19.5 13.6952 19.5 14.1875V15.125C19.4675 15.125 19.4345 15.125 19.4011 15.125H17.5989C17.5655 15.125 17.5325 15.125 17.5 15.125V14.1875Z',
  d7: 'M9.4626 1.98884C8.82373 1.74927 8.11205 1.74958 7.08264 1.75004C6.2039 1.75003 5.32205 1.75006 4.7497 1.80052C4.15996 1.8525 3.64388 1.96246 3.17258 2.22548C2.56533 2.56435 2.06428 3.06541 1.7254 3.67266C1.46238 4.14396 1.35242 4.66004 1.30044 5.24978C1.24998 5.82212 1.24999 6.53085 1.25 7.40958V10.5575C1.24999 12.8658 1.24998 14.6749 1.43975 16.0864C1.63399 17.5311 2.03933 18.6711 2.93414 19.5659C3.82895 20.4608 4.96897 20.8661 6.41371 21.0603C7.82519 21.2501 9.63423 21.2501 11.9426 21.2501H12.1979C12.5837 21.2501 12.7766 21.2501 12.8666 21.1421C12.9565 21.0341 12.9182 20.8252 12.8415 20.4073C12.8041 20.2037 12.7812 20.0135 12.7712 19.8564C12.75 19.5227 12.75 19.1342 12.75 18.7459C12.75 18.3577 12.7499 17.8524 12.7712 17.5186C12.7946 17.1511 12.8502 16.6981 13.0346 16.2211C13.2879 15.5658 13.705 14.9784 14.2517 14.5276C14.376 14.4251 14.4382 14.3738 14.4665 14.3183C14.4948 14.2629 14.4998 14.1839 14.5097 14.0261C14.6571 11.6778 16.4624 10.25 18.5 10.25C20.6094 10.25 22.4699 11.9253 22.4996 14.2812C22.5001 14.317 22.4878 14.3296 22.5167 14.3508C22.5915 14.4057 22.7302 14.3758 22.7325 14.283C22.75 13.5522 22.75 12.7272 22.75 11.7923C22.75 10.7733 22.75 9.86889 22.683 9.20956C22.6137 8.529 22.4669 7.9388 22.118 7.41669C21.8444 7.00723 21.4929 6.65566 21.0834 6.38207C20.5613 6.03321 19.9711 5.88636 19.2905 5.81713C18.6312 5.75006 17.8095 5.75007 16.7905 5.75008L13.2361 5.75008C12.92 5.75008 12.7396 5.74915 12.6064 5.73539C12.5044 5.72825 12.4348 5.65263 12.4128 5.61571C12.3409 5.50277 12.0838 4.98916 11.9425 4.70644C11.4704 3.75129 10.8581 2.51213 9.4626 1.98884Z',
  d8: 'M20.4988 16V14.5C20.4988 13.3954 19.6029 12.5 18.4978 12.5C17.3927 12.5 16.4968 13.3954 16.4968 14.5V16M14.9961 16H21.9995V21.5H14.9961V16Z',
  d9: 'M6.9829 6.5112H21.8936C21.9488 6.5112 21.9936 6.55597 21.9936 6.6112V11.0051M12.0033 20.4987H2.09712C2.04186 20.4987 1.99707 20.454 1.99707 20.3987L1.99718 2.60139C1.99718 2.54616 2.04197 2.50139 2.09722 2.50139L8.97096 2.50098L11.8409 6.27213',
  d10: 'M18.5 11.75C16.9812 11.75 15.75 12.9812 15.75 14.5V15.25H14.25V22.25H22.75V15.25H21.25V14.5C21.25 12.9812 20.0188 11.75 18.5 11.75ZM19.75 14.5V15.25H17.25V14.5C17.25 13.8096 17.8096 13.25 18.5 13.25C19.1904 13.25 19.75 13.8096 19.75 14.5Z',
  d11: 'M2 1.75C1.80109 1.75 1.61032 1.82902 1.46967 1.96967C1.32902 2.11032 1.25 2.30109 1.25 2.5V20.5C1.25 20.9142 1.58579 21.25 2 21.25H12.75V13.75H14.316C14.6702 11.7605 16.4087 10.25 18.5 10.25C20.5913 10.25 22.3298 11.7605 22.684 13.75H22.75V6.5C22.75 6.08579 22.4142 5.75 22 5.75H12.375L9.375 1.75001L2 1.75Z',
};

export const IconFolderLockedStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-locked-stroke-rounded IconFolderLockedStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFolderLockedDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-locked-duotone-rounded IconFolderLockedDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFolderLockedTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-locked-twotone-rounded IconFolderLockedTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFolderLockedSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-locked-solid-rounded IconFolderLockedSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconFolderLockedBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-locked-bulk-rounded IconFolderLockedBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconFolderLockedStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-locked-stroke-sharp IconFolderLockedStrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconFolderLockedSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-locked-solid-sharp IconFolderLockedSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFolderLocked: TheIconSelfPack = {
  name: 'FolderLocked',
  StrokeRounded: IconFolderLockedStrokeRounded,
  DuotoneRounded: IconFolderLockedDuotoneRounded,
  TwotoneRounded: IconFolderLockedTwotoneRounded,
  SolidRounded: IconFolderLockedSolidRounded,
  BulkRounded: IconFolderLockedBulkRounded,
  StrokeSharp: IconFolderLockedStrokeSharp,
  SolidSharp: IconFolderLockedSolidSharp,
};