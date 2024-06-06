import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M17 2V4M12 2V4M7 2V4',
  d2: 'M3.5 10C3.5 6.70017 3.5 5.05025 4.52513 4.02513C5.55025 3 7.20017 3 10.5 3H13.5C16.7998 3 18.4497 3 19.4749 4.02513C20.5 5.05025 20.5 6.70017 20.5 10V15C20.5 18.2998 20.5 19.9497 19.4749 20.9749C18.4497 22 16.7998 22 13.5 22H10.5C7.20017 22 5.55025 22 4.52513 20.9749C3.5 19.9497 3.5 18.2998 3.5 15V10Z',
  d3: 'M13.5 16H17',
  d4: 'M13.5 9H17',
  d5: 'M7 10C7 10 7.5 10 8 11C8 11 9.58824 8.5 11 8',
  d6: 'M7 17C7 17 7.5 17 8 18C8 18 9.58824 15.5 11 15',
  d7: 'M7 1.125C7.55228 1.125 8 1.57272 8 2.125V4.125C8 4.67728 7.55228 5.125 7 5.125C6.44772 5.125 6 4.67728 6 4.125V2.125C6 1.57272 6.44772 1.125 7 1.125ZM12 1.125C12.5523 1.125 13 1.57272 13 2.125V4.125C13 4.67728 12.5523 5.125 12 5.125C11.4477 5.125 11 4.67728 11 4.125V2.125C11 1.57272 11.4477 1.125 12 1.125ZM17 1.125C17.5523 1.125 18 1.57272 18 2.125V4.125C18 4.67728 17.5523 5.125 17 5.125C16.4477 5.125 16 4.67728 16 4.125V2.125C16 1.57272 16.4477 1.125 17 1.125Z',
  d8: 'M13.5558 2.375H13.5558C15.1584 2.37498 16.4373 2.37497 17.4404 2.50983C18.4767 2.64915 19.3301 2.94466 20.0052 3.6198C20.6803 4.29494 20.9758 5.14835 21.1152 6.18461C21.25 7.1877 21.25 8.46666 21.25 10.0693V15.1807C21.25 16.7833 21.25 18.0623 21.1152 19.0654C20.9758 20.1017 20.6803 20.9551 20.0052 21.6302C19.3301 22.3053 18.4767 22.6008 17.4404 22.7402C16.4373 22.875 15.1583 22.875 13.5557 22.875H10.4443C8.84166 22.875 7.5627 22.875 6.55961 22.7402C5.52335 22.6008 4.66994 22.3053 3.9948 21.6302C3.31966 20.9551 3.02415 20.1017 2.88483 19.0654C2.74997 18.0623 2.74998 16.7834 2.75 15.1808V15.1808V15.1807V10.0693V10.0692V10.0692C2.74998 8.46665 2.74997 7.1877 2.88483 6.18461C3.02415 5.14835 3.31966 4.29494 3.9948 3.6198C4.66994 2.94466 5.52335 2.64915 6.55961 2.50983C7.5627 2.37497 8.84165 2.37498 10.4442 2.375H10.4442H10.4443H13.5557H13.5558ZM12.75 16.125C12.75 15.7108 13.0858 15.375 13.5 15.375H17C17.4142 15.375 17.75 15.7108 17.75 16.125C17.75 16.5392 17.4142 16.875 17 16.875H13.5C13.0858 16.875 12.75 16.5392 12.75 16.125ZM13.5 8.375C13.0858 8.375 12.75 8.71079 12.75 9.125C12.75 9.53921 13.0858 9.875 13.5 9.875H17C17.4142 9.875 17.75 9.53921 17.75 9.125C17.75 8.71079 17.4142 8.375 17 8.375H13.5ZM11.707 14.8746C11.8453 15.2651 11.6408 15.6937 11.2504 15.832C11.0266 15.9112 10.7463 16.0914 10.4302 16.3686C10.1219 16.639 9.81844 16.967 9.5465 17.2929C9.276 17.6172 9.04576 17.9284 8.88295 18.1591C8.80181 18.274 8.6761 18.4625 8.63322 18.5269C8.48825 18.755 8.23154 18.8878 7.96165 18.874C7.6917 18.8602 7.45007 18.7022 7.32918 18.4604C7.12367 18.0494 6.95217 17.9112 6.89648 17.874C6.89166 17.8708 6.88745 17.8682 6.88388 17.8661C6.52481 17.8103 6.25 17.4997 6.25 17.125C6.25 16.7108 6.58579 16.375 7 16.375C7.12909 16.3695 7.20474 16.3928 7.26389 16.411C7.27364 16.414 7.28295 16.4169 7.29198 16.4195C7.42054 16.4562 7.5696 16.52 7.72853 16.626C7.81624 16.6844 7.90464 16.7541 7.99285 16.8367C8.11354 16.6782 8.24853 16.5073 8.39468 16.3321C8.69626 15.9705 9.05461 15.5798 9.44115 15.2408C9.81992 14.9086 10.2675 14.5888 10.7496 14.418C11.1401 14.2797 11.5687 14.4842 11.707 14.8746ZM11.2504 8.83197C11.6408 8.69369 11.8453 8.26506 11.707 7.87462C11.5687 7.48417 11.1401 7.27975 10.7496 7.41803C10.2675 7.58878 9.81992 7.90864 9.44115 8.24081C9.05461 8.5798 8.69626 8.97054 8.39468 9.33206C8.24853 9.50725 8.11354 9.6782 7.99285 9.83672C7.90464 9.75415 7.81624 9.68444 7.72853 9.62596C7.5696 9.52001 7.42054 9.45621 7.29198 9.41948C7.28295 9.4169 7.27365 9.41404 7.26389 9.41103C7.20474 9.3928 7.1291 9.36948 7 9.375C6.58579 9.375 6.25 9.71079 6.25 10.125C6.25 10.4997 6.52481 10.8103 6.88388 10.8661C6.88745 10.8682 6.89166 10.8708 6.89648 10.874C6.95217 10.9112 7.12367 11.0494 7.32918 11.4604C7.45007 11.7022 7.6917 11.8602 7.96165 11.874C8.23154 11.8878 8.48825 11.755 8.63322 11.5269C8.6761 11.4625 8.80181 11.274 8.88295 11.1591C9.04576 10.9284 9.276 10.6172 9.5465 10.2929C9.81844 9.96696 10.1219 9.63895 10.4302 9.36857C10.7463 9.09136 11.0266 8.91122 11.2504 8.83197Z',
  d9: 'M13.5558 2.375C15.1583 2.37498 16.4373 2.37497 17.4404 2.50983C18.4767 2.64915 19.3301 2.94466 20.0052 3.6198C20.6803 4.29494 20.9758 5.14835 21.1152 6.18461C21.25 7.1877 21.25 8.46666 21.25 10.0693V15.1807C21.25 16.7833 21.25 18.0623 21.1152 19.0654C20.9758 20.1017 20.6803 20.9551 20.0052 21.6302C19.3301 22.3053 18.4767 22.6008 17.4404 22.7402C16.4373 22.875 15.1583 22.875 13.5557 22.875H10.4443C8.84166 22.875 7.5627 22.875 6.55961 22.7402C5.52335 22.6008 4.66994 22.3053 3.9948 21.6302C3.31966 20.9551 3.02415 20.1017 2.88483 19.0654C2.74997 18.0623 2.74998 16.7833 2.75 15.1808V15.1807V10.0693V10.0692C2.74998 8.46666 2.74997 7.1877 2.88483 6.18461C3.02415 5.14835 3.31966 4.29494 3.9948 3.6198C4.66994 2.94466 5.52335 2.64915 6.55961 2.50983C7.5627 2.37497 8.84166 2.37498 10.4442 2.375H10.4443H13.5557H13.5558Z',
  d10: 'M11.2504 8.83217C11.6408 8.69389 11.8453 8.26527 11.707 7.87482C11.5687 7.48437 11.1401 7.27995 10.7496 7.41823C10.2675 7.58899 9.81992 7.90884 9.44115 8.24101C9.05461 8.58 8.69626 8.97074 8.39467 9.33226C8.24852 9.50746 8.11354 9.67841 7.99285 9.83692C7.90464 9.75435 7.81624 9.68464 7.72853 9.62617C7.5696 9.52022 7.42054 9.45642 7.29198 9.41969C7.28295 9.41711 7.27364 9.41424 7.26389 9.41123C7.20474 9.393 7.1291 9.36968 7 9.3752C6.58579 9.3752 6.25 9.71099 6.25 10.1252C6.25 10.4999 6.52481 10.8105 6.88388 10.8663C6.88745 10.8684 6.89166 10.871 6.89647 10.8742C6.95217 10.9114 7.12367 11.0496 7.32918 11.4606C7.45006 11.7024 7.69169 11.8604 7.96165 11.8742C8.23153 11.888 8.48825 11.7552 8.63321 11.5271C8.6761 11.4627 8.80181 11.2742 8.88295 11.1593C9.04576 10.9286 9.276 10.6174 9.5465 10.2931C9.81844 9.96717 10.1219 9.63916 10.4302 9.36877C10.7463 9.09157 11.0266 8.91142 11.2504 8.83217ZM13.5 8.375C13.0858 8.375 12.75 8.71079 12.75 9.125C12.75 9.53921 13.0858 9.875 13.5 9.875H17C17.4142 9.875 17.75 9.53921 17.75 9.125C17.75 8.71079 17.4142 8.375 17 8.375H13.5ZM13.5 15.375C13.0858 15.375 12.75 15.7108 12.75 16.125C12.75 16.5392 13.0858 16.875 13.5 16.875H17C17.4142 16.875 17.75 16.5392 17.75 16.125C17.75 15.7108 17.4142 15.375 17 15.375H13.5ZM11.707 14.8748C11.8453 15.2653 11.6408 15.6939 11.2504 15.8322C11.0266 15.9114 10.7463 16.0916 10.4302 16.3688C10.1219 16.6392 9.81844 16.9672 9.5465 17.2931C9.276 17.6174 9.04576 17.9286 8.88295 18.1593C8.80181 18.2742 8.6761 18.4627 8.63321 18.5271C8.48825 18.7552 8.23153 18.888 7.96165 18.8742C7.69169 18.8604 7.45006 18.7024 7.32918 18.4606C7.12367 18.0496 6.95217 17.9114 6.89647 17.8742C6.89166 17.871 6.88745 17.8684 6.88388 17.8663C6.52481 17.8105 6.25 17.4999 6.25 17.1252C6.25 16.711 6.58579 16.3752 7 16.3752C7.12909 16.3697 7.20474 16.393 7.26389 16.4112L7.2639 16.4112C7.27365 16.4142 7.28296 16.4171 7.29198 16.4197C7.42054 16.4564 7.5696 16.5202 7.72853 16.6262C7.81624 16.6846 7.90464 16.7544 7.99285 16.8369C8.11354 16.6784 8.24852 16.5075 8.39467 16.3323C8.69626 15.9707 9.05461 15.58 9.44115 15.241C9.81992 14.9088 10.2675 14.589 10.7496 14.4182C11.1401 14.28 11.5687 14.4844 11.707 14.8748Z',
  d11: 'M17 2V6M12 2V6M7 2V6',
  d12: 'M21 4H3V22L21 22V4Z',
  d13: 'M13 17H17.5',
  d14: 'M13 11L17.5 11',
  d15: 'M6.5 10.5L8 12L11 9',
  d16: 'M6.5 16.5L8 18L11 15',
  d17: 'M8 3.25H11V1.75H13V3.25H16V1.75H18V3.25H21C21.4142 3.25 21.75 3.58579 21.75 4V22C21.75 22.1989 21.671 22.3897 21.5303 22.5303C21.3897 22.671 21.1989 22.75 21 22.75L3 22.75C2.58579 22.75 2.25 22.4142 2.25 22V4C2.25 3.58579 2.58579 3.25 3 3.25H6V1.75H8V3.25ZM17.5 17.2373H13V15.7373H17.5V17.2373ZM13 11.2373H17.5V9.7373H13V11.2373ZM10.4688 7.95703L11.5294 9.01769L7.99908 12.548L5.96875 10.5177L7.02941 9.45703L7.99908 10.4267L10.4688 7.95703ZM11.5294 15.0177L10.4688 13.957L7.99908 16.4267L7.02941 15.457L5.96875 16.5177L7.99908 18.548L11.5294 15.0177Z',
};

export const IconNote03StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="note-03-stroke-rounded IconNote03StrokeRounded"
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNote03DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="note-03-duotone-rounded IconNote03DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNote03TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="note-03-twotone-rounded IconNote03TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNote03SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="note-03-solid-rounded IconNote03SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconNote03BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="note-03-bulk-rounded IconNote03BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconNote03StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="note-03-stroke-sharp IconNote03StrokeSharp"
    >
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconNote03SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="note-03-solid-sharp IconNote03SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfNote03: TheIconSelfPack = {
  name: 'Note03',
  StrokeRounded: IconNote03StrokeRounded,
  DuotoneRounded: IconNote03DuotoneRounded,
  TwotoneRounded: IconNote03TwotoneRounded,
  SolidRounded: IconNote03SolidRounded,
  BulkRounded: IconNote03BulkRounded,
  StrokeSharp: IconNote03StrokeSharp,
  SolidSharp: IconNote03SolidSharp,
};