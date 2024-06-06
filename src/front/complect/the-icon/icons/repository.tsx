import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M6 19.6231C5.31093 19.4279 4.76772 19.1317 4.31802 18.682C3 17.364 3 15.2426 3 11C3 6.75736 3 4.63604 4.31802 3.31802C5.63604 2 7.75736 2 12 2C16.2426 2 18.364 2 19.682 3.31802C21 4.63604 21 6.75736 21 11C21 15.2426 21 17.364 19.682 18.682C19.2323 19.1317 18.6891 19.4279 18 19.6231',
  d2: 'M12 20.1928C11.5858 20.1928 11.2525 20.5121 10.5858 21.1508C9.93941 21.77 9.61623 22.0796 9.34374 21.9824C9.31027 21.9705 9.27805 21.9548 9.24763 21.9355C9 21.7786 9 21.3111 9 20.3762L9 17.2512C9 15.7186 9 14.9523 9.43934 14.4761C9.87868 14 10.5858 14 12 14C13.4142 14 14.1213 14 14.5607 14.4761C15 14.9523 15 15.7186 15 17.2512V20.3762C15 21.3111 15 21.7786 14.7524 21.9355C14.7219 21.9548 14.6897 21.9705 14.6563 21.9824C14.3838 22.0796 14.0606 21.77 13.4142 21.1508C12.7475 20.5121 12.4142 20.1928 12 20.1928Z',
  d3: 'M8 10H16',
  d4: 'M8 6L12 6',
  d5: 'M4.31802 3.32651C3 4.65302 3 6.78801 3 11.058C3 15.328 3 17.4629 4.31802 18.7895C5.27997 19.7576 6.66983 20.0192 9 20.0898V17.2512C9 15.7186 9 14.9523 9.43934 14.4761C9.87868 14 10.5858 14 12 14C13.4142 14 14.1213 14 14.5607 14.4761C15 14.9523 15 15.7186 15 17.2512V20.0898C17.3302 20.0192 18.72 19.7576 19.682 18.7895C21 17.4629 21 15.328 21 11.058C21 6.78801 21 4.65302 19.682 3.32651C18.364 2 16.2426 2 12 2C7.75736 2 5.63604 2 4.31802 3.32651Z',
  d6: 'M11.9282 1.25H12.0718C14.0791 1.24998 15.684 1.24996 16.9433 1.41797C18.245 1.59164 19.3228 1.96059 20.1769 2.8082C21.032 3.65675 21.4051 4.7291 21.5806 6.02403C21.75 7.27506 21.75 8.86879 21.75 10.8596V11.0048C21.75 12.9956 21.75 14.5893 21.5806 15.8404C21.4051 17.1353 21.032 18.2076 20.1769 19.0562C19.5994 19.6293 18.9138 19.9885 18.114 20.2134C17.5956 20.3591 17.0572 20.0572 16.9114 19.5392C16.7656 19.0212 17.0676 18.4832 17.586 18.3375C18.1299 18.1846 18.5036 17.9705 18.8029 17.6734C19.2329 17.2467 19.5024 16.6552 19.6482 15.5789C19.7979 14.4738 19.8 13.0124 19.8 10.9322C19.8 8.852 19.7979 7.39056 19.6482 6.28548C19.5024 5.20915 19.2329 4.61765 18.8029 4.19096C18.372 3.76333 17.7732 3.49467 16.6853 3.34953C15.57 3.20073 14.0957 3.19869 12 3.19869C9.90434 3.19869 8.43 3.20073 7.31475 3.34953C6.22684 3.49467 5.628 3.76333 5.19708 4.19096C4.7671 4.61765 4.49765 5.20915 4.35182 6.28548C4.2021 7.39056 4.2 8.852 4.2 10.9322C4.2 13.0124 4.2021 14.4738 4.35182 15.5789C4.49765 16.6552 4.7671 17.2467 5.19708 17.6734C5.49643 17.9705 5.87009 18.1846 6.414 18.3375C6.93236 18.4832 7.23438 19.0212 7.08858 19.5392C6.94278 20.0572 6.40437 20.3591 5.886 20.2134C5.08622 19.9885 4.40062 19.6293 3.82306 19.0562C2.96797 18.2076 2.59489 17.1353 2.41945 15.8404C2.24996 14.5893 2.24998 12.9956 2.25 11.0048V10.8596C2.24998 8.86879 2.24996 7.27507 2.41945 6.02403C2.59489 4.7291 2.96797 3.65675 3.82306 2.8082C4.67721 1.96059 5.75504 1.59164 7.0567 1.41797C8.31602 1.24996 9.92087 1.24998 11.9282 1.25Z',
  d7: 'M11.9475 13.25L12 13.25L12.0525 13.25C12.7146 13.25 13.2912 13.2499 13.7541 13.3174C14.2573 13.3907 14.7328 13.5567 15.1119 13.9675C15.483 14.3698 15.6254 14.8597 15.6894 15.3752C15.7501 15.8642 15.75 16.478 15.75 17.2041L15.75 20.4214V20.4214C15.7501 20.8498 15.7501 21.2392 15.7135 21.5385C15.6795 21.8169 15.5884 22.2936 15.1538 22.569C15.077 22.6177 14.9947 22.658 14.9082 22.6889C14.3912 22.8732 13.957 22.6041 13.7336 22.4413C13.4965 22.2684 12.4628 21.3185 12.1699 21.0378C12.0928 20.9814 12 20.9428 12 20.9428C11.9766 20.9522 11.9073 20.9814 11.8301 21.0378C11.5372 21.3185 10.5035 22.2684 10.2664 22.4413C10.043 22.6041 9.60878 22.8732 9.09187 22.6889C9.00529 22.658 8.92299 22.6177 8.84622 22.569C8.41159 22.2936 8.32051 21.8169 8.2865 21.5385C8.24992 21.2392 8.24996 20.8498 8.25 20.4214L8.25001 17.2041C8.24998 16.478 8.24995 15.8642 8.31063 15.3752C8.37457 14.8597 8.51698 14.3698 8.88815 13.9675C9.26724 13.5567 9.74274 13.3907 10.246 13.3174C10.7088 13.2499 11.2854 13.25 11.9475 13.25L11.9475 13.25Z',
  d8: 'M7 10C7 9.44772 7.44772 9 8 9H16C16.5523 9 17 9.44772 17 10C17 10.5523 16.5523 11 16 11H8C7.44772 11 7 10.5523 7 10Z',
  d9: 'M7 6C7 5.44772 7.44772 5 8 5L12 5C12.5523 5 13 5.44772 13 6C13 6.55228 12.5523 7 12 7L8 7C7.44772 7 7 6.55228 7 6Z',
  d10: 'M17 18.0532H21V2H3V18.0532H7',
  d11: 'M7 10.0264H17',
  d12: 'M7 6.01367H12',
  d13: 'M14.8992 14.0303H9.10195C9.04673 14.0303 9.00195 14.0752 9.00195 14.1306L9.00204 21.8848C9.00204 21.9628 9.08686 22.011 9.15351 21.9709L12.0135 20.2482L14.8471 21.9843C14.9138 22.0251 14.9992 21.977 14.9992 21.8987V14.1306C14.9992 14.0752 14.9545 14.0303 14.8992 14.0303Z',
  d14: 'M2.25 2.22222C2.25 1.68528 2.68652 1.25 3.225 1.25H20.775C21.3135 1.25 21.75 1.68528 21.75 2.22222V17.7778C21.75 18.3147 21.3135 18.75 20.775 18.75H17.875V16.8056H19.8V3.19444H4.2V16.8056L6.125 16.8056L6.125 18.75L3.225 18.75C2.68652 18.75 2.25 18.3147 2.25 17.7778V2.22222Z',
  d15: 'M8.25 14C8.25 13.5858 8.58579 13.25 9 13.25H15C15.4142 13.25 15.75 13.5858 15.75 14V22C15.75 22.2704 15.6044 22.5199 15.3689 22.653C15.1335 22.786 14.8446 22.782 14.613 22.6424L12 21.0684L9.38701 22.6424C9.15535 22.782 8.86651 22.786 8.63105 22.653C8.3956 22.5199 8.25 22.2704 8.25 22V14Z',
  d16: 'M17 11H7V9H17V11Z',
  d17: 'M12 7L7 7L7 5L12 5V7Z',
};

export const IconRepositoryStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="repository-stroke-rounded IconRepositoryStrokeRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRepositoryDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="repository-duotone-rounded IconRepositoryDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRepositoryTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="repository-twotone-rounded IconRepositoryTwotoneRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRepositorySolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="repository-solid-rounded IconRepositorySolidRounded"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRepositoryBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="repository-bulk-rounded IconRepositoryBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRepositoryStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="repository-stroke-sharp IconRepositoryStrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconRepositorySolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="repository-solid-sharp IconRepositorySolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfRepository: TheIconSelfPack = {
  name: 'Repository',
  StrokeRounded: IconRepositoryStrokeRounded,
  DuotoneRounded: IconRepositoryDuotoneRounded,
  TwotoneRounded: IconRepositoryTwotoneRounded,
  SolidRounded: IconRepositorySolidRounded,
  BulkRounded: IconRepositoryBulkRounded,
  StrokeSharp: IconRepositoryStrokeSharp,
  SolidSharp: IconRepositorySolidSharp,
};