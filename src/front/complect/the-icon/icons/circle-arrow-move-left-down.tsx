import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z',
  d2: 'M9.51204 11.638C8.98182 11.0262 7.91022 10.1593 8.01948 9.79956M8.01948 9.79956C8.01948 9.38054 9.07053 8.58147 9.51204 7.99561M8.01948 9.79956C9.93839 9.92155 12.4115 9.54648 13.419 10.3459C14.4795 11.233 14.0925 13.7555 14.1988 15.9882M14.1988 15.9882C13.6637 16.035 12.9727 15.003 12.3644 14.4687M14.1988 15.9882C14.5543 16.0858 15.4634 14.9805 15.9963 14.471',
  d3: 'M14.4921 11.643C15.0224 11.031 16.094 10.164 15.9847 9.80499M15.9847 9.80499C15.9847 9.38599 14.9336 8.58698 14.4921 8.00098M15.9847 9.80499C14.0658 9.92699 11.5926 9.55201 10.5852 10.351C9.52471 11.238 9.91171 13.761 9.80541 15.993M9.80541 15.993C10.3405 16.04 11.0315 15.008 11.6398 14.474M9.80541 15.993C9.44991 16.091 8.54081 14.986 8.00781 14.476',
  d4: 'M8.22134 9.30392L7.69101 8.77359L7.69101 8.77359L8.22134 9.30392ZM10.0556 8.53033C10.3485 8.23744 10.3485 7.76256 10.0556 7.46967C9.7627 7.17678 9.28782 7.17678 8.99493 7.46967L10.0556 8.53033ZM8.22134 10.3324L7.69101 10.8628H7.69101L8.22134 10.3324ZM8.99493 12.1667C9.28782 12.4596 9.7627 12.4596 10.0556 12.1667C10.3485 11.8738 10.3485 11.3989 10.0556 11.106L8.99493 12.1667ZM13.6676 15.7787L13.1372 16.309L13.6676 15.7787ZM12.894 13.9444C12.6011 13.6515 12.1262 13.6515 11.8333 13.9444C11.5404 14.2373 11.5404 14.7122 11.8333 15.0051L12.894 13.9444ZM14.6961 15.7787L15.2264 16.309H15.2264L14.6961 15.7787ZM16.5303 15.0051C16.8232 14.7122 16.8232 14.2373 16.5303 13.9444C16.2374 13.6515 15.7626 13.6515 15.4697 13.9444L16.5303 15.0051ZM8 9.06818C7.58579 9.06818 7.25 9.40397 7.25 9.81818C7.25 10.2324 7.58579 10.5682 8 10.5682V9.06818ZM13.4318 16C13.4318 16.4142 13.7676 16.75 14.1818 16.75C14.596 16.75 14.9318 16.4142 14.9318 16H13.4318ZM8.75167 9.83425L10.0556 8.53033L8.99493 7.46967L7.69101 8.77359L8.75167 9.83425ZM7.69101 10.8628L8.99493 12.1667L10.0556 11.106L8.75167 9.80211L7.69101 10.8628ZM7.69101 8.77359C7.1141 9.3505 7.1141 10.2859 7.69101 10.8628L8.75167 9.80211C8.75291 9.80335 8.75507 9.80623 8.75661 9.81001C8.75794 9.81329 8.75832 9.81604 8.75832 9.81818C8.75832 9.82032 8.75794 9.82307 8.75661 9.82635C8.75507 9.83014 8.75291 9.83301 8.75167 9.83425L7.69101 8.77359ZM14.1979 15.2483L12.894 13.9444L11.8333 15.0051L13.1372 16.309L14.1979 15.2483ZM15.2264 16.309L16.5303 15.0051L15.4697 13.9444L14.1657 15.2483L15.2264 16.309ZM13.1372 16.309C13.7141 16.8859 14.6495 16.8859 15.2264 16.309L14.1657 15.2483C14.167 15.2471 14.1699 15.2449 14.1736 15.2434C14.1769 15.2421 14.1797 15.2417 14.1818 15.2417C14.184 15.2417 14.1867 15.2421 14.19 15.2434C14.1938 15.2449 14.1966 15.2471 14.1979 15.2483L13.1372 16.309ZM9.81818 9.06818H8V10.5682H9.81818V9.06818ZM13.4318 14.1818V16H14.9318V14.1818H13.4318ZM9.81818 10.5682C10.8679 10.5682 11.5797 10.5698 12.1123 10.6414C12.6233 10.7101 12.8555 10.8306 13.0124 10.9876L14.0731 9.92689C13.591 9.4448 12.9895 9.24581 12.3122 9.15475C11.6564 9.06659 10.8255 9.06818 9.81818 9.06818V10.5682ZM14.9318 14.1818C14.9318 13.1745 14.9334 12.3436 14.8453 11.6878C14.7542 11.0105 14.5552 10.409 14.0731 9.92689L13.0124 10.9876C13.1694 11.1445 13.2899 11.3767 13.3586 11.8877C13.4302 12.4203 13.4318 13.1321 13.4318 14.1818H14.9318Z',
  d5: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM8.74493 11.9167C9.03782 12.2096 9.5127 12.2096 9.80559 11.9167C9.95204 11.7702 10.0253 11.5783 10.0253 11.3864V10.3184H10.4321C11.3961 10.3184 12.0437 10.32 12.5267 10.3849C12.9882 10.4469 13.1857 10.5542 13.316 10.6845C13.4463 10.8148 13.5536 11.0123 13.6156 11.4738C13.6805 11.9568 13.6821 12.6043 13.6821 13.5684V13.9746H12.6142C12.4221 13.9745 12.2299 14.0477 12.0833 14.1943C11.7904 14.4872 11.7904 14.962 12.0833 15.2549L13.3872 16.5589C13.6353 16.8069 13.9496 16.9483 14.2731 16.983C14.3243 16.9941 14.3774 16.9999 14.4318 16.9999C14.4863 16.9999 14.5394 16.9941 14.5905 16.983C14.9141 16.9483 15.2284 16.8069 15.4764 16.5589L16.7803 15.2549C17.0732 14.962 17.0732 14.4872 16.7803 14.1943C16.6339 14.0478 16.442 13.9746 16.25 13.9746H15.1821V13.5164C15.1822 12.6179 15.1822 11.8687 15.1022 11.2739C15.0178 10.6461 14.8322 10.0793 14.3767 9.62382C13.9212 9.16835 13.3544 8.98268 12.7266 8.89827C12.1318 8.8183 11.3826 8.81833 10.4842 8.81836H10.4841L10.4321 8.81836H10.0253V7.75C10.0253 7.55806 9.95204 7.36612 9.80559 7.21967C9.5127 6.92678 9.03782 6.92678 8.74493 7.21967L7.44101 8.52359C7.19297 8.77163 7.05158 9.08592 7.01682 9.40949C7.0058 9.46064 7 9.51373 7 9.56818C7 9.62263 7.0058 9.67572 7.01682 9.72687C7.05158 10.0504 7.19297 10.3647 7.44101 10.6128L8.74493 11.9167Z',
  d6: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z',
  d7: 'M9.80559 11.9167C9.5127 12.2096 9.03782 12.2096 8.74493 11.9167L7.44101 10.6128C7.19297 10.3647 7.05158 10.0504 7.01682 9.72687C7.0058 9.67572 7 9.62263 7 9.56818C7 9.51373 7.0058 9.46064 7.01682 9.40949C7.05158 9.08592 7.19297 8.77163 7.44101 8.52359L8.74493 7.21967C9.03782 6.92678 9.5127 6.92678 9.80559 7.21967C9.95204 7.36612 10.0253 7.55806 10.0253 7.75V8.81836H10.4321L10.4841 8.81836C11.3826 8.81833 12.1318 8.8183 12.7266 8.89827C13.3544 8.98268 13.9212 9.16835 14.3767 9.62382C14.8322 10.0793 15.0178 10.6461 15.1022 11.2739C15.1822 11.8687 15.1822 12.6179 15.1821 13.5164V13.9746H16.25C16.442 13.9746 16.6339 14.0478 16.7803 14.1943C17.0732 14.4872 17.0732 14.962 16.7803 15.2549L15.4764 16.5589C15.2284 16.8069 14.9141 16.9483 14.5905 16.983C14.5394 16.9941 14.4863 16.9999 14.4318 16.9999C14.3774 16.9999 14.3243 16.9941 14.2731 16.983C13.9496 16.9483 13.6353 16.8069 13.3872 16.5589L12.0833 15.2549C11.7904 14.962 11.7904 14.4872 12.0833 14.1943C12.2299 14.0477 12.4221 13.9745 12.6142 13.9746H13.6821V13.5684C13.6821 12.6043 13.6805 11.9568 13.6156 11.4738C13.5536 11.0123 13.4463 10.8148 13.316 10.6845C13.1857 10.5542 12.9882 10.4469 12.5267 10.3849C12.0437 10.32 11.3961 10.3184 10.4321 10.3184H10.0253V11.3864C10.0253 11.5783 9.95204 11.7702 9.80559 11.9167Z',
  d8: 'M9.49609 7L7 9.5L9.49609 12M17 14.5L14.5 17L12 14.5M7.35577 9.5H14.4961L14.4998 16.5434',
  d9: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM9.53044 8.53033L8.46978 7.46967L5.93945 10L8.46978 12.5303L9.53044 11.4697L8.81077 10.75H13.2501V15.1893L12.5304 14.4697L11.4698 15.5303L14.0001 18.0607L16.5304 15.5303L15.4698 14.4697L14.7501 15.1893V10C14.7501 9.58578 14.4143 9.25 14.0001 9.25H8.81077L9.53044 8.53033Z',
};

export const IconCircleArrowMoveLeftDownStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-move-left-down-stroke-rounded IconCircleArrowMoveLeftDownStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconCircleArrowMoveLeftDownDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-move-left-down-duotone-rounded IconCircleArrowMoveLeftDownDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconCircleArrowMoveLeftDownTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-move-left-down-twotone-rounded IconCircleArrowMoveLeftDownTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const IconCircleArrowMoveLeftDownSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-move-left-down-solid-rounded IconCircleArrowMoveLeftDownSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowMoveLeftDownBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-move-left-down-bulk-rounded IconCircleArrowMoveLeftDownBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconCircleArrowMoveLeftDownStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-move-left-down-stroke-sharp IconCircleArrowMoveLeftDownStrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
    </TheIconWrapper>
  );
};

export const IconCircleArrowMoveLeftDownSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-move-left-down-solid-sharp IconCircleArrowMoveLeftDownSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCircleArrowMoveLeftDown: TheIconSelfPack = {
  name: 'CircleArrowMoveLeftDown',
  StrokeRounded: IconCircleArrowMoveLeftDownStrokeRounded,
  DuotoneRounded: IconCircleArrowMoveLeftDownDuotoneRounded,
  TwotoneRounded: IconCircleArrowMoveLeftDownTwotoneRounded,
  SolidRounded: IconCircleArrowMoveLeftDownSolidRounded,
  BulkRounded: IconCircleArrowMoveLeftDownBulkRounded,
  StrokeSharp: IconCircleArrowMoveLeftDownStrokeSharp,
  SolidSharp: IconCircleArrowMoveLeftDownSolidSharp,
};