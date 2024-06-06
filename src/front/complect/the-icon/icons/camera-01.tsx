import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7 6.00049C5.77936 6.00415 5.10383 6.03335 4.54873 6.26634C3.7712 6.59269 3.13801 7.19552 2.76811 7.96158C2.46618 8.58687 2.41677 9.38799 2.31796 10.9902L2.16312 13.5009C1.91739 17.4853 1.79452 19.4775 2.96369 20.7388C4.13285 22 6.10252 22 10.0419 22H13.9581C17.8975 22 19.8672 22 21.0363 20.7388C22.2055 19.4775 22.0826 17.4853 21.8369 13.5009L21.682 10.9902C21.5832 9.38799 21.5338 8.58687 21.2319 7.96158C20.862 7.19552 20.2288 6.59269 19.4513 6.26634C18.8962 6.03335 18.2206 6.00415 17 6.00049',
  d2: 'M17 7L16.1142 4.78543C15.732 3.82996 15.3994 2.7461 14.4166 2.25955C13.8924 2 13.2616 2 12 2C10.7384 2 10.1076 2 9.58335 2.25955C8.6006 2.7461 8.26801 3.82996 7.88583 4.78543L7 7',
  d3: 'M15.5 14C15.5 15.933 13.933 17.5 12 17.5C10.067 17.5 8.5 15.933 8.5 14C8.5 12.067 10.067 10.5 12 10.5C13.933 10.5 15.5 12.067 15.5 14Z',
  d4: 'M11.9998 6H12.0088',
  d5: 'M2.31796 10.9902L2.16312 13.5009C1.91739 17.4853 1.79452 19.4775 2.96369 20.7388C4.13285 22 6.10252 22 10.0419 22H13.9581C17.8975 22 19.8672 22 21.0363 20.7388C22.2055 19.4775 22.0826 17.4853 21.8369 13.5009L21.682 10.9902C21.5832 9.38799 21.5338 8.58687 21.2319 7.96158C20.862 7.19552 20.2288 6.59269 19.4513 6.26634C18.8962 6.03335 18.2206 6.00415 17 6.00049H16.6L16.1139 4.78543C16.0752 4.68856 16.0369 4.59037 15.9985 4.49162C15.6576 3.61633 15.2995 2.69677 14.4164 2.25955C13.8922 2 13.2614 2 11.9998 2C10.7382 2 10.1074 2 9.58311 2.25955C8.7 2.69677 8.34189 3.61633 8.00103 4.49162C7.96257 4.59037 7.92433 4.68856 7.88558 4.78543L7.38741 6.00049H7C5.77936 6.00415 5.10383 6.03335 4.54873 6.26634C3.7712 6.59269 3.13801 7.19552 2.76811 7.96158C2.46618 8.58687 2.41677 9.38799 2.31796 10.9902ZM12 17.5C13.933 17.5 15.5 15.933 15.5 14C15.5 12.067 13.933 10.5 12 10.5C10.067 10.5 8.5 12.067 8.5 14C8.5 15.933 10.067 17.5 12 17.5Z',
  d6: 'M7 6C5.77936 6.00366 5.10383 6.03286 4.54873 6.26585C3.7712 6.5922 3.13801 7.19503 2.76811 7.9611C2.46618 8.58638 2.41677 9.3875 2.31796 10.9897L2.16312 13.5004C1.91739 17.4849 1.79452 19.4771 2.96369 20.7383C4.13285 21.9995 6.10252 21.9995 10.0419 21.9995H13.9581C17.8975 21.9995 19.8672 21.9995 21.0363 20.7383C22.2055 19.4771 22.0826 17.4849 21.8369 13.5004L21.682 10.9897C21.5832 9.3875 21.5338 8.58638 21.2319 7.9611C20.862 7.19503 20.2288 6.5922 19.4513 6.26585C18.8962 6.03286 18.2206 6.00366 17 6',
  d7: 'M11.9666 1.25H12.0295H12.0295C12.6335 1.24999 13.1336 1.24998 13.5465 1.28515C13.9793 1.32201 14.3703 1.40069 14.7475 1.58742C15.4194 1.92009 15.8442 2.44877 16.1424 2.979C16.3735 3.39004 16.553 3.85182 16.7051 4.24318C16.741 4.33553 16.7754 4.42396 16.8086 4.50689L16.956 4.87534C17.0285 5.0566 17.0647 5.14722 17.1397 5.19869C17.2146 5.25016 17.3133 5.25145 17.5106 5.25403C18.4319 5.26608 19.1281 5.31819 19.7394 5.57479C20.6872 5.97261 21.4565 6.70632 21.9052 7.63547C22.1054 8.05002 22.2073 8.49536 22.2747 9.01254C22.3405 9.51676 22.3789 10.1389 22.4269 10.9174L22.5869 13.5123C22.7068 15.4557 22.8015 16.9915 22.7131 18.196C22.6223 19.4329 22.3322 20.4418 21.5842 21.2486C20.8348 22.0571 19.855 22.4154 18.6375 22.5851C17.4548 22.75 15.9347 22.75 14.015 22.75H9.98078C8.06116 22.75 6.54105 22.75 5.35833 22.5851C4.14086 22.4154 3.16102 22.0571 2.41158 21.2486C1.6636 20.4418 1.37356 19.4329 1.28274 18.196C1.1943 16.9915 1.28903 15.4557 1.4089 13.5123L1.56895 10.9172C1.61695 10.1388 1.65531 9.51672 1.72108 9.01254C1.78854 8.49536 1.89046 8.05002 2.09063 7.63547C2.53929 6.70632 3.30858 5.97261 4.25638 5.57479C4.86778 5.31817 5.56411 5.26607 6.48546 5.25403C6.68279 5.25145 6.78146 5.25016 6.85642 5.19869C6.93139 5.14722 6.96764 5.0566 7.04014 4.87534L7.18752 4.50689C7.22069 4.42397 7.25506 4.33554 7.29095 4.2432L7.29095 4.2432L7.29096 4.24317C7.44307 3.85181 7.62256 3.39003 7.85372 2.979C8.15192 2.44877 8.5767 1.92009 9.24864 1.58742C9.6258 1.40069 10.0168 1.32201 10.4496 1.28515C10.8625 1.24998 11.3625 1.24999 11.9666 1.25H11.9666ZM11 6C11 5.44772 11.4457 5 11.9955 5C12.5414 5 13 5.44791 13 6C13 6.55209 12.5414 7 11.9955 7C11.4457 7 11 6.55228 11 6ZM12 10C9.79086 10 8 11.7909 8 14C8 16.2091 9.79086 18 12 18C14.2091 18 16 16.2091 16 14C16 11.7909 14.2091 10 12 10Z',
  d8: 'M11.9666 1.25H12.0295C12.6335 1.24999 13.1336 1.24998 13.5465 1.28515C13.9793 1.32201 14.3703 1.40069 14.7475 1.58742C15.4194 1.92009 15.8442 2.44877 16.1424 2.979C16.3735 3.39004 16.553 3.85182 16.7051 4.24318C16.741 4.33553 16.7754 4.42396 16.8086 4.50689L17.1062 5.25086C18.2333 5.25543 19.0417 5.28193 19.7394 5.57479C20.6872 5.97261 21.4565 6.70632 21.9052 7.63547C22.1054 8.05002 22.2073 8.49536 22.2747 9.01254C22.3405 9.51676 22.3789 10.1389 22.4269 10.9174L22.5869 13.5123C22.7068 15.4557 22.8015 16.9915 22.7131 18.196C22.6223 19.4329 22.3322 20.4418 21.5842 21.2486C20.8348 22.0571 19.855 22.4154 18.6375 22.5851C17.4548 22.75 15.9347 22.75 14.015 22.75H9.98078C8.06116 22.75 6.54105 22.75 5.35833 22.5851C4.14086 22.4154 3.16102 22.0571 2.41158 21.2486C1.6636 20.4418 1.37356 19.4329 1.28274 18.196C1.1943 16.9915 1.28903 15.4557 1.4089 13.5123L1.56895 10.9172C1.61695 10.1388 1.65531 9.51672 1.72108 9.01254C1.78854 8.49536 1.89046 8.05002 2.09063 7.63547C2.53929 6.70632 3.30858 5.97261 4.25638 5.57479C4.95418 5.2819 5.76261 5.25543 6.88993 5.25086L7.18752 4.50689C7.22069 4.42397 7.25506 4.33554 7.29095 4.2432C7.44306 3.85184 7.62255 3.39004 7.85372 2.979C8.15192 2.44877 8.5767 1.92009 9.24864 1.58742C9.6258 1.40069 10.0168 1.32201 10.4496 1.28515C10.8625 1.24998 11.3626 1.24999 11.9666 1.25Z',
  d9: 'M11 6C11 5.44772 11.4457 5 11.9955 5C12.5414 5 13 5.44791 13 6C13 6.55209 12.5414 7 11.9955 7C11.4457 7 11 6.55228 11 6Z',
  d10: 'M8 14C8 11.7909 9.79086 10 12 10C14.2091 10 16 11.7909 16 14C16 16.2091 14.2091 18 12 18C9.79086 18 8 16.2091 8 14Z',
  d11: 'M1.99854 21.9998L1.2489 21.9763L1.22473 22.7498H1.99854V21.9998ZM21.9985 21.9998V22.7498H22.7723L22.7482 21.9763L21.9985 21.9998ZM21.4985 5.99976L22.2482 5.97633L22.2255 5.24976H21.4985V5.99976ZM2.49854 6.00054V5.25054C2.09344 5.25054 1.76155 5.57222 1.7489 5.97711L2.49854 6.00054ZM8.49854 1.99976V1.24976H7.91295L7.77093 1.81785L8.49854 1.99976ZM15.4985 1.99976L16.2261 1.81785L16.0841 1.24976H15.4985V1.99976ZM1.99854 22.7498H21.9985V21.2498H1.99854V22.7498ZM16.9985 6.74976H21.4985V5.24976H16.9985V6.74976ZM20.7489 6.02318L21.2489 22.0232L22.7482 21.9763L22.2482 5.97633L20.7489 6.02318ZM2.74817 22.0232L3.24817 6.02396L1.7489 5.97711L1.2489 21.9763L2.74817 22.0232ZM2.49854 6.75054H6.99854V5.25054H2.49854V6.75054ZM7.72614 8.18166L9.22614 2.18166L7.77093 1.81785L6.27093 7.81785L7.72614 8.18166ZM17.7261 7.81785L16.2261 1.81785L14.7709 2.18166L16.2709 8.18166L17.7261 7.81785ZM8.49854 2.74976H15.4985V1.24976H8.49854V2.74976Z',
  d12: 'M1.77301 5.97736C1.78564 5.57246 2.11679 5.25078 2.52099 5.25078H6.92546L7.92344 1.25H16.0766L17.0743 5.25H22.2043L22.75 22.75H1.25L1.77301 5.97736ZM16 14C16 16.2091 14.2091 18 12 18C9.79086 18 8 16.2091 8 14C8 11.7909 9.79086 10 12 10C14.2091 10 16 11.7909 16 14ZM13 5H11V7H13V5Z',
};

export const IconCamera01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-01-stroke-rounded IconCamera01StrokeRounded"
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

export const IconCamera01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-01-duotone-rounded IconCamera01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
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

export const IconCamera01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-01-twotone-rounded IconCamera01TwotoneRounded"
    >
      <path 
        d={d.d6} 
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

export const IconCamera01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-01-solid-rounded IconCamera01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCamera01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-01-bulk-rounded IconCamera01BulkRounded"
    >
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
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCamera01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-01-stroke-sharp IconCamera01StrokeSharp"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCamera01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-01-solid-sharp IconCamera01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCamera01: TheIconSelfPack = {
  name: 'Camera01',
  StrokeRounded: IconCamera01StrokeRounded,
  DuotoneRounded: IconCamera01DuotoneRounded,
  TwotoneRounded: IconCamera01TwotoneRounded,
  SolidRounded: IconCamera01SolidRounded,
  BulkRounded: IconCamera01BulkRounded,
  StrokeSharp: IconCamera01StrokeSharp,
  SolidSharp: IconCamera01SolidSharp,
};