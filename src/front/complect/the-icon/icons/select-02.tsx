import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M5 2V8M2 5H8',
  d2: 'M20 18L20 7M7 20H18M18 5H12M5 12V18',
  d3: 'M18 5C18 4.05719 18 3.58579 18.2929 3.29289C18.5858 3 19.0572 3 20 3C20.9428 3 21.4142 3 21.7071 3.29289C22 3.58579 22 4.05719 22 5C22 5.94281 22 6.41421 21.7071 6.70711C21.4142 7 20.9428 7 20 7C19.0572 7 18.5858 7 18.2929 6.70711C18 6.41421 18 5.94281 18 5Z',
  d4: 'M18 20C18 19.0572 18 18.5858 18.2929 18.2929C18.5858 18 19.0572 18 20 18C20.9428 18 21.4142 18 21.7071 18.2929C22 18.5858 22 19.0572 22 20C22 20.9428 22 21.4142 21.7071 21.7071C21.4142 22 20.9428 22 20 22C19.0572 22 18.5858 22 18.2929 21.7071C18 21.4142 18 20.9428 18 20Z',
  d5: 'M3 20C3 19.0572 3 18.5858 3.29289 18.2929C3.58579 18 4.05719 18 5 18C5.94281 18 6.41421 18 6.70711 18.2929C7 18.5858 7 19.0572 7 20C7 20.9428 7 21.4142 6.70711 21.7071C6.41421 22 5.94281 22 5 22C4.05719 22 3.58579 22 3.29289 21.7071C3 21.4142 3 20.9428 3 20Z',
  d6: 'M18 5H5V18C5.94281 18 6.41421 18 6.70711 18.2929C7 18.5858 7 19.0572 7 20H18C18 19.0572 18 18.5858 18.2929 18.2929C18.5858 18 19.0572 18 20 18V7C19.0572 7 18.5858 7 18.2929 6.70711C18 6.41421 18 5.94281 18 5Z',
  d7: 'M5.125 1.125C5.67728 1.125 6.125 1.57272 6.125 2.125V4.125H8.125C8.67728 4.125 9.125 4.57271 9.125 5.125C9.125 5.67728 8.67728 6.125 8.125 6.125H6.125V8.125C6.125 8.67728 5.67728 9.125 5.125 9.125C4.57271 9.125 4.125 8.67728 4.125 8.125V6.125H2.125C1.57272 6.125 1.125 5.67728 1.125 5.125C1.125 4.57271 1.57272 4.125 2.125 4.125H4.125V2.125C4.125 1.57272 4.57271 1.125 5.125 1.125Z',
  d8: 'M11.125 5.125C11.125 4.57272 11.5727 4.125 12.125 4.125H18.125C18.6773 4.125 19.125 4.57272 19.125 5.125C19.125 5.67728 18.6773 6.125 18.125 6.125H12.125C11.5727 6.125 11.125 5.67728 11.125 5.125ZM20.125 6.125C20.6773 6.125 21.125 6.57272 21.125 7.125L21.125 18.125C21.125 18.6773 20.6773 19.125 20.125 19.125C19.5727 19.125 19.125 18.6773 19.125 18.125L19.125 7.125C19.125 6.57272 19.5727 6.125 20.125 6.125ZM5.125 11.125C5.67728 11.125 6.125 11.5727 6.125 12.125V18.125C6.125 18.6773 5.67728 19.125 5.125 19.125C4.57272 19.125 4.125 18.6773 4.125 18.125V12.125C4.125 11.5727 4.57272 11.125 5.125 11.125ZM6.125 20.125C6.125 19.5727 6.57272 19.125 7.125 19.125H18.125C18.6773 19.125 19.125 19.5727 19.125 20.125C19.125 20.6773 18.6773 21.125 18.125 21.125H7.125C6.57272 21.125 6.125 20.6773 6.125 20.125Z',
  d9: 'M20.0803 2.375L20.125 2.37501L20.1698 2.375C20.6026 2.37495 20.9994 2.37491 21.3222 2.41831C21.6777 2.4661 22.0534 2.57855 22.3624 2.88757C22.6715 3.19659 22.7839 3.57232 22.8317 3.9278C22.8751 4.25061 22.8751 4.64744 22.875 5.08025V5.08026L22.875 5.12501L22.875 5.16975V5.16976C22.8751 5.60258 22.8751 5.9994 22.8317 6.32221C22.7839 6.67769 22.6715 7.05342 22.3624 7.36244C22.0534 7.67147 21.6777 7.78391 21.3222 7.83171C20.9994 7.87511 20.6026 7.87506 20.1698 7.87501H20.1698L20.125 7.87501L20.0803 7.87501H20.0803C19.6474 7.87506 19.2506 7.87511 18.9278 7.83171C18.5723 7.78391 18.1966 7.67147 17.8876 7.36244C17.5785 7.05342 17.4661 6.67769 17.4183 6.32221C17.3749 5.9994 17.375 5.60257 17.375 5.16976L17.375 5.12501L17.375 5.08026C17.375 4.64744 17.3749 4.25061 17.4183 3.9278C17.4661 3.57232 17.5785 3.19659 17.8876 2.88757C18.1966 2.57855 18.5723 2.4661 18.9278 2.41831C19.2506 2.37491 19.6474 2.37495 20.0803 2.375Z',
  d10: 'M20.0803 17.375L20.125 17.375L20.1698 17.375C20.6026 17.375 20.9994 17.3749 21.3222 17.4183C21.6777 17.4661 22.0534 17.5785 22.3624 17.8876C22.6715 18.1966 22.7839 18.5723 22.8317 18.9278C22.8751 19.2506 22.8751 19.6474 22.875 20.0803V20.0803L22.875 20.125L22.875 20.1698V20.1698C22.8751 20.6026 22.8751 20.9994 22.8317 21.3222C22.7839 21.6777 22.6715 22.0534 22.3624 22.3624C22.0534 22.6715 21.6777 22.7839 21.3222 22.8317C20.9994 22.8751 20.6026 22.8751 20.1698 22.875H20.1698L20.125 22.875L20.0803 22.875H20.0803C19.6474 22.8751 19.2506 22.8751 18.9278 22.8317C18.5723 22.7839 18.1966 22.6715 17.8876 22.3624C17.5785 22.0534 17.4661 21.6777 17.4183 21.3222C17.3749 20.9994 17.375 20.6026 17.375 20.1698L17.375 20.125L17.375 20.0803C17.375 19.6474 17.3749 19.2506 17.4183 18.9278C17.4661 18.5723 17.5785 18.1966 17.8876 17.8876C18.1966 17.5785 18.5723 17.4661 18.9278 17.4183C19.2506 17.3749 19.6474 17.375 20.0803 17.375Z',
  d11: 'M5.08026 17.375L5.12501 17.375L5.16976 17.375C5.60257 17.375 5.9994 17.3749 6.32221 17.4183C6.67769 17.4661 7.05342 17.5785 7.36244 17.8876C7.67147 18.1966 7.78391 18.5723 7.83171 18.9278C7.87511 19.2506 7.87506 19.6474 7.87501 20.0803V20.0803L7.87501 20.125L7.87501 20.1698V20.1698C7.87506 20.6026 7.87511 20.9994 7.83171 21.3222C7.78391 21.6777 7.67147 22.0534 7.36244 22.3624C7.05342 22.6715 6.67769 22.7839 6.32221 22.8317C5.9994 22.8751 5.60258 22.8751 5.16976 22.875H5.16975L5.12501 22.875L5.08026 22.875H5.08025C4.64744 22.8751 4.25061 22.8751 3.9278 22.8317C3.57232 22.7839 3.19659 22.6715 2.88757 22.3624C2.57855 22.0534 2.4661 21.6777 2.41831 21.3222C2.37491 20.9994 2.37495 20.6026 2.375 20.1698L2.37501 20.125L2.375 20.0803C2.37495 19.6474 2.37491 19.2506 2.41831 18.9278C2.4661 18.5723 2.57855 18.1966 2.88757 17.8876C3.19659 17.5785 3.57232 17.4661 3.9278 17.4183C4.25061 17.3749 4.64744 17.375 5.08026 17.375Z',
  d12: 'M19.125 7.85248C19.4069 7.87509 19.7319 7.87505 20.0803 7.87501H20.1698C20.5181 7.87505 20.8431 7.87509 21.125 7.85248L21.125 17.3975C20.8431 17.3749 20.5181 17.375 20.1698 17.375H20.0803C19.7319 17.375 19.4069 17.3749 19.125 17.3975L19.125 7.85248Z',
  d13: 'M17.3975 4.125C17.3749 4.40689 17.375 4.73192 17.375 5.08026V5.16976C17.375 5.51809 17.3749 5.84311 17.3975 6.125H12.125C11.5727 6.125 11.125 5.67728 11.125 5.125C11.125 4.57272 11.5727 4.125 12.125 4.125H17.3975Z',
  d14: 'M17.3975 19.125H7.85248C7.87509 19.4069 7.87505 19.7319 7.87501 20.0803V20.1698C7.87505 20.5181 7.87509 20.8431 7.85248 21.125H17.3975C17.3749 20.8431 17.375 20.5181 17.375 20.1698V20.0803C17.375 19.7319 17.3749 19.4069 17.3975 19.125Z',
  d15: 'M6.125 17.3975C5.84311 17.3749 5.51809 17.375 5.16976 17.375H5.08026C4.73192 17.375 4.40689 17.3749 4.125 17.3975V12.125C4.125 11.5727 4.57272 11.125 5.125 11.125C5.67728 11.125 6.125 11.5727 6.125 12.125V17.3975Z',
  d16: 'M22 3H18V7H22V3Z',
  d17: 'M22 18H18V22H22V18Z',
  d18: 'M7 18H3V22H7V18Z',
  d19: 'M20 18L20 7M7 20H18M18 5H11M5 11V18',
  d20: 'M17.2197 1.71967C17.3603 1.57902 17.5511 1.5 17.75 1.5H21.75C22.1642 1.5 22.5 1.83579 22.5 2.25V6.25C22.5 6.66421 22.1642 7 21.75 7H17.75C17.3358 7 17 6.66421 17 6.25V2.25C17 2.05109 17.079 1.86032 17.2197 1.71967Z',
  d21: 'M17.2197 17.2197C17.3603 17.079 17.5511 17 17.75 17H21.75C22.1642 17 22.5 17.3358 22.5 17.75V21.75C22.5 22.1642 22.1642 22.5 21.75 22.5H17.75C17.3358 22.5 17 22.1642 17 21.75V17.75C17 17.5511 17.079 17.3603 17.2197 17.2197Z',
  d22: 'M1.71967 17.2197C1.86032 17.079 2.05109 17 2.25 17H6.25C6.66421 17 7 17.3358 7 17.75V21.75C7 22.1642 6.66421 22.5 6.25 22.5H2.25C1.83579 22.5 1.5 22.1642 1.5 21.75V17.75C1.5 17.5511 1.57902 17.3603 1.71967 17.2197Z',
  d23: 'M3.5 3.5V1.5H5.5V3.5H7.5V5.5H5.5V7.5H3.5V5.5H1.5V3.5H3.5Z',
  d24: 'M10.5 3.5H17.5V5.5H10.5V3.5ZM20.5 6.5L20.5 17.5H18.5L18.5 6.5L20.5 6.5ZM3.5 17.5V10.5H5.5V17.5H3.5ZM17.5 20.5H6.5V18.5H17.5V20.5Z',
};

export const IconSelect02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="select-02-stroke-rounded IconSelect02StrokeRounded"
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSelect02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="select-02-duotone-rounded IconSelect02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSelect02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="select-02-twotone-rounded IconSelect02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSelect02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="select-02-solid-rounded IconSelect02SolidRounded"
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
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconSelect02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="select-02-bulk-rounded IconSelect02BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      </g>
    </TheIconWrapper>
  );
};

export const IconSelect02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="select-02-stroke-sharp IconSelect02StrokeSharp"
    >
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSelect02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="select-02-solid-sharp IconSelect02SolidSharp"
    >
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSelect02: TheIconSelfPack = {
  name: 'Select02',
  StrokeRounded: IconSelect02StrokeRounded,
  DuotoneRounded: IconSelect02DuotoneRounded,
  TwotoneRounded: IconSelect02TwotoneRounded,
  SolidRounded: IconSelect02SolidRounded,
  BulkRounded: IconSelect02BulkRounded,
  StrokeSharp: IconSelect02StrokeSharp,
  SolidSharp: IconSelect02SolidSharp,
};