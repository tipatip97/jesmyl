import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z',
  d2: 'M14.4921 11.6429C15.0223 11.031 16.0939 10.1642 15.9847 9.80444M15.9847 9.80444C15.9847 9.38542 14.9336 8.58635 14.4921 8.00049M15.9847 9.80444C14.0658 9.92644 11.5926 9.55136 10.5852 10.3508C9.52468 11.2379 9.91163 13.7604 9.80534 15.993M9.80534 15.993C10.3405 16.0399 11.0315 15.0079 11.6398 14.4736M9.80534 15.993C9.44987 16.0907 8.54077 14.9853 8.00781 14.4759',
  d3: 'M15.784 9.30137L16.3139 8.77052V8.77052L15.784 9.30137ZM15.0099 7.46915C14.7168 7.17654 14.2419 7.17701 13.9493 7.47019C13.6567 7.76337 13.6571 8.23824 13.9503 8.53085L15.0099 7.46915ZM15.784 10.3279L16.3139 10.8587L15.784 10.3279ZM13.9503 11.0984C13.6571 11.391 13.6567 11.8659 13.9493 12.1591C14.2419 12.4522 14.7168 12.4527 15.0099 12.1601L13.9503 11.0984ZM10.3324 15.7874L10.8623 16.3183L10.3324 15.7874ZM12.1662 15.0169C12.4594 14.7243 12.4598 14.2494 12.1672 13.9562C11.8746 13.663 11.3997 13.6626 11.1066 13.9552L12.1662 15.0169ZM9.30392 15.7874L8.77411 16.3183H8.77411L9.30392 15.7874ZM8.52981 13.9552C8.23663 13.6626 7.76176 13.663 7.46915 13.9562C7.17654 14.2494 7.17701 14.7243 7.47019 15.0169L8.52981 13.9552ZM16 10.5646C16.4142 10.5646 16.75 10.2288 16.75 9.81462C16.75 9.40041 16.4142 9.06462 16 9.06462V10.5646ZM9.06818 15.9843C9.06818 16.3985 9.40397 16.7343 9.81818 16.7343C10.2324 16.7343 10.5682 16.3985 10.5682 15.9843H9.06818ZM16.3139 8.77052L15.0099 7.46915L13.9503 8.53085L15.2542 9.83222L16.3139 8.77052ZM15.2542 9.79702L13.9503 11.0984L15.0099 12.1601L16.3139 10.8587L15.2542 9.79702ZM15.2542 9.83222C15.2447 9.82267 15.2447 9.80657 15.2542 9.79702L16.3139 10.8587C16.8915 10.2823 16.8915 9.34699 16.3139 8.77052L15.2542 9.83222ZM10.8623 16.3183L12.1662 15.0169L11.1066 13.9552L9.80263 15.2566L10.8623 16.3183ZM9.83373 15.2566L8.52981 13.9552L7.47019 15.0169L8.77411 16.3183L9.83373 15.2566ZM9.80263 15.2566C9.80394 15.2552 9.80681 15.2531 9.81048 15.2516C9.81365 15.2503 9.81624 15.25 9.81818 15.25C9.82012 15.25 9.82271 15.2503 9.82588 15.2516C9.82955 15.2531 9.83242 15.2552 9.83373 15.2566L8.77411 16.3183C9.3509 16.8939 10.2855 16.8939 10.8623 16.3183L9.80263 15.2566ZM14.1818 10.5646H16V9.06462H14.1818V10.5646ZM9.06818 14.1697V15.9843H10.5682V14.1697H9.06818ZM14.1818 9.06462C13.1745 9.06462 12.3436 9.06303 11.688 9.15101C11.011 9.24185 10.4096 9.44035 9.92741 9.92156L10.987 10.9833C11.1439 10.8267 11.3763 10.7063 11.8875 10.6377C12.4202 10.5662 13.1321 10.5646 14.1818 10.5646V9.06462ZM10.5682 14.1697C10.5682 13.122 10.5698 12.4117 10.6413 11.8805C10.71 11.3709 10.8303 11.1396 10.987 10.9833L9.92741 9.92156C9.44505 10.403 9.2459 11.0038 9.15478 11.6802C9.06658 12.3349 9.06818 13.1645 9.06818 14.1697H10.5682Z',
  d4: 'M12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 6.06294 6.06294 1.25 12 1.25ZM15.2551 11.9167C14.9622 12.2096 14.4873 12.2096 14.1944 11.9167C14.048 11.7702 13.9747 11.5783 13.9747 11.3864V10.3184H13.5679C12.6039 10.3184 11.9563 10.32 11.4733 10.3849C11.0118 10.4469 10.8143 10.5542 10.684 10.6845C10.5537 10.8148 10.4464 11.0123 10.3844 11.4738C10.3195 11.9568 10.3179 12.6043 10.3179 13.5684V13.9746H11.3858C11.5779 13.9745 11.7701 14.0477 11.9167 14.1943C12.2096 14.4872 12.2096 14.962 11.9167 15.2549L10.6128 16.5589C10.3647 16.8069 10.0504 16.9483 9.72686 16.983C9.67571 16.9941 9.62262 16.9999 9.56817 16.9999C9.51372 16.9999 9.46063 16.9941 9.40948 16.983C9.0859 16.9483 8.77161 16.8069 8.52358 16.5589L7.21966 15.2549C6.92677 14.962 6.92677 14.4872 7.21966 14.1943C7.3661 14.0478 7.55805 13.9746 7.74999 13.9746H8.81786V13.5164C8.81783 12.6179 8.81781 11.8687 8.89777 11.2739C8.98218 10.6461 9.16785 10.0793 9.62332 9.62382C10.0788 9.16835 10.6456 8.98268 11.2734 8.89827C11.8682 8.8183 12.6174 8.81833 13.5158 8.81836H13.5159L13.5679 8.81836H13.9747V7.75C13.9747 7.55806 14.048 7.36612 14.1944 7.21967C14.4873 6.92678 14.9622 6.92678 15.2551 7.21967L16.559 8.52359C16.807 8.77163 16.9484 9.08592 16.9832 9.40949C16.9942 9.46064 17 9.51373 17 9.56818C17 9.62263 16.9942 9.67572 16.9832 9.72687C16.9484 10.0504 16.807 10.3647 16.559 10.6128L15.2551 11.9167Z',
  d5: 'M22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12Z',
  d6: 'M14.1944 11.9167C14.4873 12.2096 14.9622 12.2096 15.2551 11.9167L16.559 10.6128C16.807 10.3647 16.9484 10.0504 16.9832 9.72687C16.9942 9.67572 17 9.62263 17 9.56818C17 9.51373 16.9942 9.46064 16.9832 9.40949C16.9484 9.08592 16.807 8.77163 16.559 8.52359L15.2551 7.21967C14.9622 6.92678 14.4873 6.92678 14.1944 7.21967C14.048 7.36612 13.9747 7.55806 13.9747 7.75V8.81836H13.5679L13.5159 8.81836C12.6174 8.81833 11.8682 8.8183 11.2734 8.89827C10.6456 8.98268 10.0788 9.16835 9.62332 9.62382C9.16785 10.0793 8.98218 10.6461 8.89777 11.2739C8.81781 11.8687 8.81783 12.6179 8.81786 13.5164V13.9746H7.74999C7.55805 13.9746 7.3661 14.0478 7.21966 14.1943C6.92677 14.4872 6.92677 14.962 7.21966 15.2549L8.52358 16.5589C8.77161 16.8069 9.0859 16.9483 9.40948 16.983C9.46063 16.9941 9.51372 16.9999 9.56817 16.9999C9.62262 16.9999 9.67571 16.9941 9.72686 16.983C10.0504 16.9483 10.3647 16.8069 10.6128 16.5589L11.9167 15.2549C12.2096 14.962 12.2096 14.4872 11.9167 14.1943C11.7701 14.0477 11.5779 13.9745 11.3858 13.9746H10.3179V13.5684C10.3179 12.6043 10.3195 11.9568 10.3844 11.4738C10.4464 11.0123 10.5537 10.8148 10.684 10.6845C10.8143 10.5542 11.0118 10.4469 11.4733 10.3849C11.9563 10.32 12.6039 10.3184 13.5679 10.3184H13.9747V11.3864C13.9747 11.5783 14.048 11.7702 14.1944 11.9167Z',
  d7: 'M14.5039 7L17 9.5L14.5039 12M7 14.5L9.5 17L12 14.5M16.7071 9.5H9.50391L9.50023 16.5653',
  d8: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM14.4688 8.53033L15.1884 9.25H9.99908C9.58487 9.25 9.24908 9.58578 9.24908 10V15.1893L8.52941 14.4697L7.46875 15.5303L9.99908 18.0607L12.5294 15.5303L11.4688 14.4697L10.7491 15.1893V10.75H15.1884L14.4688 11.4697L15.5294 12.5303L18.0597 10L15.5294 7.46967L14.4688 8.53033Z',
};

export const IconCircleArrowMoveRightDownStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-move-right-down-stroke-rounded IconCircleArrowMoveRightDownStrokeRounded"
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

export const IconCircleArrowMoveRightDownDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-move-right-down-duotone-rounded IconCircleArrowMoveRightDownDuotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="12" 
        cy="12" 
        r="10" 
        fill="var(--icon-fill)"></circle>
      <path 
        d={d.d3} 
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

export const IconCircleArrowMoveRightDownTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-move-right-down-twotone-rounded IconCircleArrowMoveRightDownTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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

export const IconCircleArrowMoveRightDownSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-move-right-down-solid-rounded IconCircleArrowMoveRightDownSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowMoveRightDownBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-move-right-down-bulk-rounded IconCircleArrowMoveRightDownBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconCircleArrowMoveRightDownStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-move-right-down-stroke-sharp IconCircleArrowMoveRightDownStrokeSharp"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowMoveRightDownSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-move-right-down-solid-sharp IconCircleArrowMoveRightDownSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCircleArrowMoveRightDown: TheIconSelfPack = {
  name: 'CircleArrowMoveRightDown',
  StrokeRounded: IconCircleArrowMoveRightDownStrokeRounded,
  DuotoneRounded: IconCircleArrowMoveRightDownDuotoneRounded,
  TwotoneRounded: IconCircleArrowMoveRightDownTwotoneRounded,
  SolidRounded: IconCircleArrowMoveRightDownSolidRounded,
  BulkRounded: IconCircleArrowMoveRightDownBulkRounded,
  StrokeSharp: IconCircleArrowMoveRightDownStrokeSharp,
  SolidSharp: IconCircleArrowMoveRightDownSolidSharp,
};