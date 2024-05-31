import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M14.1816 5.49997C14.1816 4.67155 14.8328 3.99998 15.6361 3.99998C16.4394 3.99998 17.0906 4.67155 17.0906 5.49997L17.091 10.9999M14.1816 10.9999V3.49999C14.1816 2.67157 13.5304 2 12.7271 2C11.9237 2 11.2725 2.67157 11.2725 3.49999L11.2727 4.99998M17.0906 11.9999L17.091 10.9999M17.091 10.9999C17.091 10.4765 17.5468 10.0783 18.0475 10.1643L18.3795 10.2214C19.3146 10.3821 20 11.2165 20 12.1942L19.9996 13.6667C19.9996 15.84 19.9996 16.9267 19.6786 17.7919C19.4924 18.2937 19.0011 18.9337 18.6083 19.3962C18.2685 19.7963 18.0603 20.3037 18.0603 20.8354V22M11.2727 4.99998C11.2724 4.17185 10.6213 3.50063 9.81824 3.50063C9.01493 3.50063 8.36373 4.1722 8.36373 5.00062L8.36353 13.4623L6.79236 11.837C6.103 11.1238 4.96746 11.1889 4.35844 11.9764C3.89244 12.579 3.87957 13.4314 4.32715 14.0488L7.81767 18.647C8.4855 19.5267 8.84836 20.8827 8.84836 22M11.2727 4.99998V9.99993',
  d2: 'M17.0906 5.49997C17.0906 4.67155 16.4394 3.99998 15.6361 3.99998C14.8328 3.99998 14.1816 4.67155 14.1816 5.49997V3.49999C14.1816 2.67157 13.5304 2 12.7271 2C11.9237 2 11.2725 2.67157 11.2725 3.49999L11.2727 4.99998C11.2724 4.17185 10.6213 3.50063 9.81824 3.50063C9.01493 3.50063 8.36373 4.1722 8.36373 5.00062L8.36353 13.4623L6.79236 11.837C6.103 11.1238 4.96746 11.1889 4.35844 11.9764C3.89244 12.579 3.87957 13.4314 4.32715 14.0488L7.81767 18.647C8.4855 19.5267 8.84836 20.8827 8.84836 22H18.0603V20.8354C18.0603 20.3037 18.2685 19.7963 18.6083 19.3962C19.0011 18.9337 19.4924 18.2937 19.6786 17.7919C19.9996 16.9267 19.9996 15.84 19.9996 13.6667L20 12.1942C20 11.2165 19.3146 10.3821 18.3795 10.2214L18.0475 10.1643C17.5468 10.0783 17.091 10.4765 17.091 10.9999L17.0906 5.49997Z',
  d3: 'M11.1643 10.1849C11.402 10.1849 11.5946 9.99739 11.5946 9.76607V2.48866C11.5946 1.80457 12.1492 1.25 12.8333 1.25C13.5174 1.25 14.072 1.80457 14.072 2.48867V10.8829C14.072 11.1143 14.2646 11.3018 14.5023 11.3018C14.74 11.3018 14.9326 11.1143 14.9326 10.8829V4.60476C14.9326 3.9205 15.4873 3.36581 16.1716 3.36581C16.8558 3.36581 17.4106 3.92054 17.4105 4.60482L17.4102 11.9997C17.4101 12.231 17.6027 12.4186 17.8403 12.4187C18.078 12.4187 18.2707 12.2313 18.2708 12L18.2709 10.0417C18.271 9.74889 18.271 9.60248 18.3875 9.51241C18.504 9.42234 18.6243 9.45367 18.8649 9.51633C20.054 9.82596 20.7492 11.0473 20.7492 12.194L20.7488 13.6916C20.7488 14.757 20.7488 15.5912 20.7073 16.2658C20.665 16.9514 20.5779 17.5219 20.381 18.0526C20.1429 18.6943 19.5658 19.4263 19.1791 19.8816C18.9414 20.1615 18.8095 20.6652 18.8095 20.9998C18.8095 21.9663 18.026 22.7498 17.0595 22.7498H9.84758C8.85905 22.7498 8.16166 21.9612 8.02128 21.1296C7.89064 20.3558 7.60391 19.6067 7.21951 19.1003L3.53974 14.0389C3.43189 13.8932 3.35412 13.7324 3.30628 13.565C3.27267 13.4104 3.25392 13.2533 3.25 13.0959C3.26202 12.7878 3.36906 12.483 3.57027 12.2298C4.10987 11.5507 5.10598 11.4972 5.71348 12.1089L7.51645 13.9243C7.63834 14.047 7.82456 14.0855 7.98716 14.0215C8.14975 13.9575 8.25618 13.8039 8.25619 13.6332V3.98936C8.25619 3.30514 8.81086 2.75047 9.49508 2.75047C10.1793 2.75047 10.734 3.30514 10.734 3.98936V9.76607C10.734 9.99739 10.9266 10.1849 11.1643 10.1849Z',
  d4: 'M14.1816 5.49997C14.1816 4.67155 14.8328 3.99998 15.6361 3.99998C16.4394 3.99998 17.0906 4.67155 17.0906 5.49997V10.1643M14.1816 5.49997V3.49999C14.1816 2.67157 13.5304 2 12.7271 2C11.9237 2 11.2725 2.67157 11.2725 3.49999L11.2727 4.99998M14.1816 5.49997V11.5M11.2727 4.99998C11.2724 4.17185 10.6213 3.50063 9.81824 3.50063C9.01493 3.50063 8.36373 4.1722 8.36373 5.00062L8.36353 13.4623L6.79236 11.837C6.103 11.1238 4.96746 11.1889 4.35844 11.9764C3.89244 12.579 3.87957 13.4314 4.32715 14.0488L8.36373 19.5V22M11.2727 4.99998V10.5M18.0603 22V19.5C18.0603 19.5 19.4924 18.2937 19.6786 17.7919C19.9996 16.9267 19.9996 15.84 19.9996 13.6667V11.6643C19.9996 10.8359 19.328 10.1643 18.4996 10.1643H17.0906M17.0906 12.5V10.1643',
  d5: 'M11.5687 10.329H10.768V4.2022C10.7677 3.48362 10.1907 2.92168 9.50469 2.92168C8.81848 2.92168 8.24133 3.48384 8.24133 4.20276L8.24107 14.5934L5.75579 12.0894C5.13806 11.467 4.12478 11.5215 3.57635 12.2122C3.15258 12.7459 3.14021 13.5043 3.54685 14.052L3.54798 14.0535L8.24133 20.2263V22.75H18.5317V20.1736C18.686 20.0411 19.2881 19.5295 19.5012 19.3312C19.7152 19.1321 19.9303 18.9208 20.1026 18.7287C20.287 18.5231 20.3829 18.382 20.4078 18.3165C20.572 17.8856 20.6601 17.3849 20.7049 16.6769C20.7498 15.966 20.75 15.0721 20.75 13.8567V11.6261C20.75 10.9185 20.1611 10.345 19.4346 10.345H18.2233V12.557H17.4226V4.75903C17.4226 4.04011 16.8454 3.47796 16.1592 3.47796C15.473 3.47796 14.8959 4.04011 14.8959 4.75903V11.443H14.0952V2.53107C14.0952 1.81215 13.5181 1.25 12.8318 1.25C12.1457 1.25 11.5685 1.81218 11.5685 2.53107L11.5687 10.329Z',
} as const;

export const IconThreeFinger01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="three-finger-01-stroke-rounded IconThreeFinger01StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconThreeFinger01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="three-finger-01-duotone-rounded IconThreeFinger01DuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconThreeFinger01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="three-finger-01-twotone-rounded IconThreeFinger01TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconThreeFinger01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="three-finger-01-solid-rounded IconThreeFinger01SolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconThreeFinger01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="three-finger-01-bulk-rounded IconThreeFinger01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconThreeFinger01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="three-finger-01-stroke-sharp IconThreeFinger01StrokeSharp"
    >
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconThreeFinger01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="three-finger-01-solid-sharp IconThreeFinger01SolidSharp"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfThreeFinger01: TheIconSelfPack = {
  name: 'ThreeFinger01',
  StrokeRounded: IconThreeFinger01StrokeRounded,
  DuotoneRounded: IconThreeFinger01DuotoneRounded,
  TwotoneRounded: IconThreeFinger01TwotoneRounded,
  SolidRounded: IconThreeFinger01SolidRounded,
  BulkRounded: IconThreeFinger01BulkRounded,
  StrokeSharp: IconThreeFinger01StrokeSharp,
  SolidSharp: IconThreeFinger01SolidSharp,
};