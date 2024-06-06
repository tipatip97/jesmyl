import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M19 10.5V10C19 6.22876 19 4.34315 17.8284 3.17157C16.6569 2 14.7712 2 11 2C7.22876 2 5.34315 2 4.17157 3.17157C3 4.34315 3 6.22876 3 10V16C3 17.8638 3 18.7956 3.30448 19.5307C3.71046 20.5108 4.48915 21.2895 5.46927 21.6955C6.20435 22 7.13623 22 9 22',
  d2: 'M7 7H15M7 11H11',
  d3: 'M15.2825 19.0044C15.2235 18.1157 15.118 17.1658 14.6817 16.0917C14.3095 15.1756 14.4132 13.0205 16.5 13.0205C18.5868 13.0205 18.6664 15.1756 18.2942 16.0917C17.8578 17.1658 17.7765 18.1157 17.7175 19.0044M21 22H12V20.7543C12 20.3078 12.2664 19.9154 12.6528 19.7928L14.9076 19.077C15.0684 19.0259 15.2348 19 15.4021 19H17.5979C17.7652 19 17.9316 19.0259 18.0924 19.077L20.3472 19.7928C20.7336 19.9154 21 20.3078 21 20.7543V22Z',
  d4: 'M19 14V10C19 6.22876 19 4.34315 17.8284 3.17157C16.6569 2 14.7712 2 11 2C7.22876 2 5.34315 2 4.17157 3.17157C3 4.34315 3 6.22876 3 10V16C3 17.8638 3 18.7956 3.30448 19.5307C3.71046 20.5108 4.48915 21.2895 5.46927 21.6955C6.20435 22 7.13623 22 9 22H11C11.3492 22 11.6822 22 12 21.9991V20.7543C12 20.3078 12.2664 19.9154 12.6528 19.7928L14.9076 19.077C15.0684 19.0259 15.2348 19 15.4021 19H15.25C15.25 17.8588 15.0058 17.0863 14.7961 16.4229C14.6383 15.9237 14.5 15.4863 14.5 15C14.5 13.8954 15.3954 13 16.5 13C17.6046 13 18.5 13.8954 18.5 15C18.5 15.4863 18.3617 15.9237 18.2039 16.4229C17.9942 17.0863 17.75 17.8588 17.75 19H17.5979C17.7652 19 17.9316 19.0259 18.0924 19.077L18.6839 19.2647C19 18.0864 19 16.4369 19 14Z',
  d5: 'M15.2825 18.9942C15.2235 18.1055 15.118 17.1556 14.6817 16.0815C14.3095 15.1654 14.4132 13.0103 16.5 13.0103C18.5868 13.0103 18.6664 15.1654 18.2942 16.0815C17.8578 17.1556 17.7765 18.1055 17.7175 18.9942M21 21.9898H12V20.7441C12 20.2976 12.2664 19.9052 12.6528 19.7826L14.9076 19.0668C15.0684 19.0157 15.2348 18.9898 15.4021 18.9898H17.5979C17.7652 18.9898 17.9316 19.0157 18.0924 19.0668L20.3472 19.7826C20.7336 19.9052 21 20.2976 21 20.7441V21.9898Z',
  d6: 'M18.5238 18.427C18.5758 17.8186 18.7054 17.338 18.8417 16.8956C18.8649 16.8205 18.8893 16.7437 18.9144 16.6652C19.0714 16.1726 19.25 15.6121 19.25 15C19.25 13.4812 18.0188 12.25 16.5 12.25C14.9812 12.25 13.75 13.4812 13.75 15C13.75 15.6121 13.9286 16.1726 14.0856 16.6652C14.1106 16.7437 14.1351 16.8206 14.1583 16.8956C14.2946 17.338 14.4242 17.8186 14.4762 18.427L12.4258 19.0779C11.6873 19.3124 11.25 20.0258 11.25 20.7543V22C11.25 22.4142 11.5858 22.75 12 22.75H21C21.4142 22.75 21.75 22.4142 21.75 22V20.7543C21.75 20.0258 21.3127 19.3124 20.5742 19.0779L18.5238 18.427ZM15.25 15C15.25 14.3096 15.8096 13.75 16.5 13.75C17.1904 13.75 17.75 14.3096 17.75 15C17.75 15.3625 17.6508 15.6787 17.4922 16.1846C17.4658 16.2687 17.4378 16.3581 17.4083 16.4538C17.2578 16.9422 17.1008 17.5184 17.0337 18.25H15.9663C15.8992 17.5184 15.7422 16.9422 15.5917 16.4538C15.5623 16.3582 15.5343 16.2689 15.5079 16.1848C15.3492 15.6789 15.25 15.3625 15.25 15Z',
  d7: 'M11.0564 1.25C12.8942 1.24999 14.3498 1.24997 15.489 1.40314C16.6614 1.56076 17.6104 1.89288 18.3588 2.64124C19.1071 3.38961 19.4392 4.33856 19.5969 5.51098C19.75 6.65018 19.75 8.10585 19.75 9.94359V12.2612C18.9704 11.3371 17.8038 10.75 16.5 10.75C14.1528 10.75 12.25 12.6528 12.25 15C12.25 15.8485 12.5 17 12.7405 17.4043L11.9719 17.6482C10.5232 18.1082 9.75 19.4687 9.75 20.7543V22C9.75 22.2624 9.79491 22.5142 9.87745 22.7483C8.54537 22.7425 7.39805 22.7161 6.51098 22.5969C5.33856 22.4392 4.38961 22.1071 3.64124 21.3588C2.89288 20.6104 2.56076 19.6614 2.40314 18.489C2.24997 17.3498 2.24999 15.8942 2.25 14.0564V14.0564V9.94357V9.94356C2.24999 8.10581 2.24997 6.65019 2.40314 5.51098C2.56076 4.33856 2.89288 3.38961 3.64124 2.64124C4.38961 1.89288 5.33856 1.56076 6.51098 1.40314C7.65019 1.24997 9.21867 1.24999 11.0564 1.25H11.0564ZM7 6.25C6.58579 6.25 6.25 6.58579 6.25 7C6.25 7.41421 6.58579 7.75 7 7.75H15C15.4142 7.75 15.75 7.41421 15.75 7C15.75 6.58579 15.4142 6.25 15 6.25H7ZM7 10.25C6.58579 10.25 6.25 10.5858 6.25 11C6.25 11.4142 6.58579 11.75 7 11.75H11C11.4142 11.75 11.75 11.4142 11.75 11C11.75 10.5858 11.4142 10.25 11 10.25H7Z',
  d8: 'M15.489 1.40314C14.3498 1.24997 12.8942 1.24998 11.0564 1.25C9.21867 1.24998 7.65019 1.24997 6.51098 1.40314C5.33856 1.56076 4.38961 1.89288 3.64124 2.64124C2.89288 3.38961 2.56076 4.33856 2.40314 5.51098C2.24997 6.65019 2.24998 8.10582 2.25 9.94357V14.0564C2.24998 15.8942 2.24997 17.3498 2.40314 18.489C2.56076 19.6614 2.89288 20.6104 3.64124 21.3588C4.38961 22.1071 5.33856 22.4392 6.51098 22.5969C7.39805 22.7161 8.54537 22.7425 9.87745 22.7483C9.79491 22.5142 9.75 22.2624 9.75 22V20.7543C9.75 19.4687 10.5232 18.1082 11.9719 17.6482L12.7405 17.4043C12.5 17 12.25 15.8485 12.25 15C12.25 12.6528 14.1528 10.75 16.5 10.75C17.8038 10.75 18.9704 11.3371 19.75 12.2612V9.94359C19.75 8.10585 19.75 6.65018 19.5969 5.51098C19.4392 4.33856 19.1071 3.38961 18.3588 2.64124C17.6104 1.89288 16.6614 1.56076 15.489 1.40314Z',
  d9: 'M6.25 7C6.25 6.58579 6.58579 6.25 7 6.25H15C15.4142 6.25 15.75 6.58579 15.75 7C15.75 7.41421 15.4142 7.75 15 7.75H7C6.58579 7.75 6.25 7.41421 6.25 7ZM6.25 11C6.25 10.5858 6.58579 10.25 7 10.25H11C11.4142 10.25 11.75 10.5858 11.75 11C11.75 11.4142 11.4142 11.75 11 11.75H7C6.58579 11.75 6.25 11.4142 6.25 11Z',
  d10: 'M21 22H12V20L15.5 19H17.5L21 20V22Z',
  d11: 'M19 10.5V2H3V22H9',
  d12: 'M15.271 18.6827C15.2099 17.2221 14.3972 15.6542 14.5097 14.7834C14.6355 13.8098 15.212 13.4614 15.497 13.2715C15.861 13.0341 16.9128 12.6807 17.9121 13.5759C18.2498 13.866 18.7558 14.7189 18.3494 15.9539C18.1423 16.7842 17.7232 17.7378 17.7718 18.7219',
  d13: 'M14.4827 18.5106C14.436 17.8623 14.3008 17.3581 14.1583 16.8956C14.1351 16.8205 14.1107 16.7437 14.0856 16.6652C13.9286 16.1726 13.75 15.6121 13.75 15C13.75 13.4812 14.9812 12.25 16.5 12.25C18.0188 12.25 19.25 13.4812 19.25 15C19.25 15.6121 19.0714 16.1726 18.9144 16.6652C18.8893 16.7437 18.8649 16.8205 18.8417 16.8956C18.6992 17.3581 18.564 17.8623 18.5173 18.5106L21.75 19.4343V22.75H11.25V19.4343L14.4827 18.5106ZM15.25 15C15.25 14.3096 15.8096 13.75 16.5 13.75C17.1904 13.75 17.75 14.3096 17.75 15C17.75 15.3625 17.6508 15.6787 17.4922 16.1846C17.4658 16.2687 17.4378 16.3581 17.4083 16.4538C17.2578 16.9422 17.1008 17.5184 17.0337 18.25H15.9663C15.8992 17.5184 15.7422 16.9422 15.5917 16.4538C15.5622 16.3581 15.5342 16.2687 15.5078 16.1846C15.3492 15.6787 15.25 15.3625 15.25 15Z',
  d14: 'M2.25 1.25H19.75V12.2612C18.9704 11.3371 17.8038 10.75 16.5 10.75C14.1528 10.75 12.25 12.6528 12.25 15C12.25 15.8485 12.4899 16.5993 12.6404 17.0703C12.6725 17.1749 12.7196 17.3298 12.7519 17.4451L9.75 18.3028V22.75H2.25V1.25ZM7 7.75H15V6.25H7V7.75ZM7 11.75H11V10.25H7V11.75Z',
};

export const IconAudit01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="audit-01-stroke-rounded IconAudit01StrokeRounded"
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

export const IconAudit01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="audit-01-duotone-rounded IconAudit01DuotoneRounded"
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

export const IconAudit01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="audit-01-twotone-rounded IconAudit01TwotoneRounded"
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

export const IconAudit01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="audit-01-solid-rounded IconAudit01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAudit01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="audit-01-bulk-rounded IconAudit01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconAudit01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="audit-01-stroke-sharp IconAudit01StrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconAudit01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="audit-01-solid-sharp IconAudit01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAudit01: TheIconSelfPack = {
  name: 'Audit01',
  StrokeRounded: IconAudit01StrokeRounded,
  DuotoneRounded: IconAudit01DuotoneRounded,
  TwotoneRounded: IconAudit01TwotoneRounded,
  SolidRounded: IconAudit01SolidRounded,
  BulkRounded: IconAudit01BulkRounded,
  StrokeSharp: IconAudit01StrokeSharp,
  SolidSharp: IconAudit01SolidSharp,
};