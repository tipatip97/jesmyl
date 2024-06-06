import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M21.2916 13H2.70845C1.18885 13 2.48394 15.238 3.16941 15.581L5.53031 16.7625C5.76629 16.8806 5.88428 16.9396 5.98205 17.026C6.86002 17.8017 7.02027 19.169 8.12986 19.7633C8.57168 20 9.09521 20 10.1423 20H13.8577C14.9048 20 15.4283 20 15.8701 19.7633C16.9797 19.169 17.14 17.8017 18.018 17.026C18.1157 16.9396 18.2337 16.8806 18.4697 16.7625L20.8306 15.581C21.5161 15.238 22.8112 13 21.2916 13Z',
  d2: 'M15 13C15 9.68629 12.3137 7 9 7C5.68629 7 3 9.68629 3 13',
  d3: 'M21 13C21 10.2386 18.7749 8 16.03 8C15.1061 8 14.2411 8.25382 13.5 8.69575',
  d4: 'M7 12.2222C7 10.9949 7.89543 10 9 10C10.1046 10 11 10.9949 11 12.2222V14',
  d5: 'M9 6.55561C9.43124 4.79022 11.3282 3.68242 13.2369 4.08128C15.1456 4.48014 16.3434 6.23461 15.9121 8',
  d6: 'M13.2369 4.08128C11.3282 3.68242 9.43124 4.79022 9 6.55561C10.1579 6.90652 12.6264 7.8475 13.2369 8.80417C13.5993 8.53611 14.6418 8 15.9121 8C16.3434 6.23461 15.1456 4.48014 13.2369 4.08128Z',
  d7: 'M1.89284 12.57C2.14719 12.4253 2.43193 12.375 2.70848 12.375H21.2916C21.5681 12.375 21.8529 12.4253 22.1072 12.57C22.3747 12.7223 22.5587 12.9514 22.6583 13.2142C22.838 13.6882 22.7197 14.195 22.5927 14.5437C22.4535 14.9257 22.2356 15.3022 22.0049 15.6088C21.7903 15.8942 21.4957 16.2119 21.1663 16.3768L18.8054 17.5582C18.6809 17.6205 18.6122 17.6551 18.5615 17.6838C18.539 17.6965 18.5269 17.7043 18.5206 17.7087L18.5153 17.7125C18.241 17.9548 18.0636 18.2737 17.8121 18.7267L17.8116 18.7276C17.7715 18.8 17.7294 18.8758 17.6847 18.9553C17.3899 19.4796 16.9841 20.1425 16.2243 20.5495C15.8848 20.7313 15.5359 20.8072 15.1606 20.8422C14.8085 20.875 14.3861 20.875 13.8905 20.875H10.1096C9.61393 20.875 9.19153 20.875 8.83945 20.8422C8.46416 20.8072 8.11522 20.7313 7.77577 20.5495C7.01597 20.1425 6.61021 19.4796 6.31539 18.9553C6.27053 18.8755 6.2283 18.7994 6.18798 18.7268L6.18792 18.7267L6.18791 18.7267C5.93649 18.2737 5.75981 17.9554 5.4855 17.713L5.47949 17.7087C5.4732 17.7043 5.46104 17.6965 5.43853 17.6838C5.38783 17.6551 5.3192 17.6205 5.1947 17.5582L2.8338 16.3768C2.50433 16.2119 2.20973 15.8942 1.99513 15.6088C1.7645 15.3022 1.54661 14.9257 1.40739 14.5437C1.28033 14.195 1.16204 13.6882 1.34173 13.2142C1.44137 12.9514 1.62536 12.7223 1.89284 12.57Z',
  d8: 'M9 8.125C6.23858 8.125 4 10.3636 4 13.125C4 13.6773 3.55228 14.125 3 14.125C2.44772 14.125 2 13.6773 2 13.125C2 9.25901 5.13401 6.125 9 6.125C12.866 6.125 16 9.25901 16 13.125C16 13.6773 15.5523 14.125 15 14.125C14.4477 14.125 14 13.6773 14 13.125C14 10.3636 11.7614 8.125 9 8.125Z',
  d9: 'M16.0302 9.125C15.2919 9.125 14.6032 9.3273 14.0123 9.67964C13.538 9.9625 12.9241 9.80727 12.6413 9.33293C12.3584 8.85858 12.5136 8.24474 12.988 7.96187C13.8793 7.43034 14.9206 7.125 16.0302 7.125C19.333 7.125 22.0002 9.81698 22.0002 13.125C22.0002 13.6773 21.5524 14.125 21.0002 14.125C20.4479 14.125 20.0002 13.6773 20.0002 13.125C20.0002 10.9102 18.2171 9.125 16.0302 9.125Z',
  d10: 'M9 11.125C8.54421 11.125 8 11.5705 8 12.3472C8 12.8995 7.55228 13.3472 7 13.3472C6.44772 13.3472 6 12.8995 6 12.3472C6 10.6694 7.24665 9.125 9 9.125C10.7534 9.125 12 10.6694 12 12.3472V14.125C12 14.6773 11.5523 15.125 11 15.125C10.4477 15.125 10 14.6773 10 14.125V12.3472C10 11.5705 9.45579 11.125 9 11.125Z',
  d11: 'M13.0326 5.18418C11.5888 4.88247 10.2602 5.7356 9.97167 6.91694C9.84061 7.45345 9.29944 7.78214 8.76293 7.65108C8.22642 7.52002 7.89774 6.97885 8.0288 6.44234C8.60271 4.09291 11.068 2.73045 13.4417 3.22646C15.8344 3.72645 17.4655 5.98004 16.8838 8.36134C16.7527 8.89785 16.2116 9.22653 15.6751 9.09547C15.1385 8.96442 14.8099 8.42325 14.9409 7.88674C15.2217 6.73726 14.4573 5.4819 13.0326 5.18418Z',
  d12: 'M13.0327 5.18418C11.8843 4.9442 10.8088 5.43487 10.2715 6.24019C11.4615 6.45854 12.5463 6.97782 13.444 7.71624C13.9268 7.48264 14.4457 7.31233 14.9895 7.21608C14.9017 6.28779 14.1821 5.42436 13.0327 5.18418ZM13.4418 3.22646C11.1571 2.74905 8.78764 3.9933 8.10137 6.18216C4.86234 6.5973 2.31581 9.22617 2.02735 12.5032C2.24544 12.4094 2.47976 12.375 2.70848 12.375H4.05598C4.41784 9.96937 6.49359 8.125 9.00011 8.125C11.5066 8.125 13.5824 9.96937 13.9442 12.375H15.9604C15.8404 11.2488 15.4534 10.2023 14.8638 9.3003C15.2322 9.18634 15.6237 9.125 16.0303 9.125C17.9639 9.125 19.5819 10.5207 19.9307 12.375H21.2916C21.5188 12.375 21.7515 12.4089 21.9684 12.5013C21.6912 9.80652 19.6378 7.63536 16.9978 7.20331C16.9081 5.2858 15.4407 3.64417 13.4418 3.22646ZM12.0001 12.375V12.3472C12.0001 10.6694 10.7535 9.125 9.00011 9.125C7.24675 9.125 6.00011 10.6694 6.00011 12.3472C6.00011 12.3565 6.00023 12.3658 6.00048 12.375H7.99973C7.99998 12.3658 8.00011 12.3565 8.00011 12.3472C8.00011 11.5705 8.54432 11.125 9.00011 11.125C9.45589 11.125 10.0001 11.5705 10.0001 12.3472V12.375H12.0001Z',
  d13: 'M22 13H2C2 14.1363 2.64201 15.321 3.65836 15.8292L6 17L8 20H16L18 17L20.3416 15.8292C21.358 15.321 22 14.1363 22 13Z',
  d14: 'M6.5 13C6.5 11.6193 7.61929 10.5 9 10.5C10.3807 10.5 11.5 11.6193 11.5 13V16',
  d15: 'M7.41836 12.25C7.69922 11.6588 8.30185 11.25 8.99995 11.25C9.69805 11.25 10.3007 11.6588 10.5815 12.25H12.163C11.8244 10.8167 10.5367 9.75 8.99995 9.75C7.46316 9.75 6.1755 10.8167 5.83691 12.25H7.41836Z',
  d16: 'M9 7.74951C6.10051 7.74951 3.75 10.1 3.75 12.9995H2.25C2.25 9.27159 5.27208 6.24951 9 6.24951C12.7279 6.24951 15.75 9.27159 15.75 12.9995H14.25C14.25 10.1 11.8995 7.74951 9 7.74951Z',
  d17: 'M10.5816 12.25H7.41841C7.31042 12.4773 7.25 12.7316 7.25 13H5.75C5.75 12.7419 5.78009 12.4908 5.83697 12.25H2C1.58579 12.25 1.25 12.5858 1.25 13C1.25 14.3804 2.01858 15.8478 3.32295 16.5L5.48644 17.5817L7.37596 20.416C7.51506 20.6247 7.74924 20.75 8 20.75H16C16.2508 20.75 16.4849 20.6247 16.624 20.416L18.5136 17.5817L20.6771 16.5C21.9814 15.8478 22.75 14.3804 22.75 13C22.75 12.5858 22.4142 12.25 22 12.25H12.163C12.2199 12.4908 12.25 12.7419 12.25 13V16H10.75V13C10.75 12.7316 10.6896 12.4773 10.5816 12.25Z',
  d18: 'M16.0299 8.74951C15.2451 8.74951 14.5124 8.96469 13.884 9.33943L13.1157 8.0511C13.9695 7.54197 14.9667 7.24951 16.0299 7.24951C19.1932 7.24951 21.7499 9.82814 21.7499 12.9995H20.2499C20.2499 10.648 18.3563 8.74951 16.0299 8.74951Z',
  d19: 'M13.0835 4.81495C11.5235 4.48896 10.0529 5.40575 9.72864 6.7331L8.27148 6.37715C8.80973 4.17373 11.1329 2.87494 13.3904 3.34666C15.6621 3.82137 17.1848 5.95017 16.6408 8.1775L15.1836 7.82155C15.502 6.51809 14.6293 5.13796 13.0835 4.81495Z',
};

export const IconSpaghettiStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="spaghetti-stroke-rounded IconSpaghettiStrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSpaghettiDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="spaghetti-duotone-rounded IconSpaghettiDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSpaghettiTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="spaghetti-twotone-rounded IconSpaghettiTwotoneRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSpaghettiSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="spaghetti-solid-rounded IconSpaghettiSolidRounded"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSpaghettiBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="spaghetti-bulk-rounded IconSpaghettiBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSpaghettiStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="spaghetti-stroke-sharp IconSpaghettiStrokeSharp"
    >
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSpaghettiSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="spaghetti-solid-sharp IconSpaghettiSolidSharp"
    >
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
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSpaghetti: TheIconSelfPack = {
  name: 'Spaghetti',
  StrokeRounded: IconSpaghettiStrokeRounded,
  DuotoneRounded: IconSpaghettiDuotoneRounded,
  TwotoneRounded: IconSpaghettiTwotoneRounded,
  SolidRounded: IconSpaghettiSolidRounded,
  BulkRounded: IconSpaghettiBulkRounded,
  StrokeSharp: IconSpaghettiStrokeSharp,
  SolidSharp: IconSpaghettiSolidSharp,
};