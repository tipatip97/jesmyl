import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M6 20V22M18 20V22',
  d2: 'M3 14V8C3 5.17157 3 3.75736 3.93037 2.87868C4.86073 2 6.35814 2 9.35294 2H14.6471C17.6419 2 19.1393 2 20.0696 2.87868C21 3.75736 21 5.17157 21 8V14C21 16.8284 21 18.2426 20.0696 19.1213C19.1393 20 17.6419 20 14.6471 20H9.35294C6.35814 20 4.86073 20 3.93037 19.1213C3 18.2426 3 16.8284 3 14Z',
  d3: 'M12 20V2',
  d4: 'M9 10V11',
  d5: 'M15 10V11',
  d6: 'M21 8V14V14C21 16.8284 21 18.2426 20.0696 19.1213C19.1393 20 17.6419 20 14.6471 20H12V2H14.6471C17.6419 2 19.1393 2 20.0696 2.87868C21 3.75736 21 5.17157 21 7.99998V8Z',
  d7: 'M6 18.875C6.55228 18.875 7 19.3227 7 19.875V21.875C7 22.4273 6.55228 22.875 6 22.875C5.44772 22.875 5 22.4273 5 21.875V19.875C5 19.3227 5.44772 18.875 6 18.875ZM18 18.875C18.5523 18.875 19 19.3227 19 19.875V21.875C19 22.4273 18.5523 22.875 18 22.875C17.4477 22.875 17 22.4273 17 21.875V19.875C17 19.3227 17.4477 18.875 18 18.875Z',
  d8: 'M10.65 1.125C10.9328 1.125 11.0743 1.125 11.1621 1.21287C11.25 1.30074 11.25 1.44216 11.25 1.725L11.25 20.025C11.25 20.3078 11.25 20.4493 11.1621 20.5371C11.0743 20.625 10.9328 20.625 10.65 20.625H9.35302C7.94928 20.625 6.80294 20.6251 5.89799 20.5101C4.95628 20.3906 4.12925 20.1317 3.46266 19.5021C2.78819 18.8651 2.50341 18.0621 2.37313 17.1469C2.24993 16.2815 2.24996 15.1896 2.25 13.8722L2.25 7.8779C2.24996 6.56052 2.24993 5.46846 2.37313 4.60307C2.50341 3.68789 2.78819 2.88487 3.46266 2.24788C4.12925 1.61831 4.95628 1.35943 5.89799 1.23986C6.80292 1.12495 7.94924 1.12497 9.35294 1.125H10.65ZM12.75 1.725C12.75 1.44216 12.75 1.30074 12.8379 1.21287C12.9257 1.125 13.0672 1.125 13.35 1.125H14.647C16.0507 1.12497 17.1971 1.12495 18.102 1.23986C19.0437 1.35943 19.8708 1.61831 20.5374 2.24788C21.2118 2.88487 21.4966 3.68789 21.6269 4.60307C21.7501 5.46845 21.75 6.56041 21.75 7.87777V13.8721C21.75 15.1895 21.7501 16.2815 21.6269 17.1469C21.4966 18.0621 21.2118 18.8651 20.5374 19.5021C19.8708 20.1317 19.0437 20.3906 18.102 20.5101C17.1971 20.6251 16.0507 20.625 14.647 20.625H13.35C13.0672 20.625 12.9257 20.625 12.8379 20.5371C12.75 20.4493 12.75 20.3078 12.75 20.025L12.75 1.725ZM9 11.625C9.41422 11.625 9.75 11.2892 9.75 10.875V9.875C9.75 9.46078 9.41422 9.125 9 9.125C8.58579 9.125 8.25 9.46078 8.25 9.875V10.875C8.25 11.2892 8.58579 11.625 9 11.625ZM15.75 10.875C15.75 11.2892 15.4142 11.625 15 11.625C14.5858 11.625 14.25 11.2892 14.25 10.875V9.875C14.25 9.46078 14.5858 9.125 15 9.125C15.4142 9.125 15.75 9.46078 15.75 9.875V10.875Z',
  d9: 'M12.75 1.725C12.75 1.44216 12.75 1.30074 12.8379 1.21287C12.9257 1.125 13.0672 1.125 13.35 1.125H14.647C16.0507 1.12497 17.1971 1.12495 18.102 1.23986C19.0437 1.35943 19.8708 1.61831 20.5374 2.24788C21.2118 2.88488 21.4966 3.68789 21.6269 4.60307C21.7501 5.46845 21.75 6.56041 21.75 7.87777V13.8721C21.75 15.1895 21.7501 16.2815 21.6269 17.1469C21.4966 18.0621 21.2118 18.8651 20.5374 19.5021C19.8708 20.1317 19.0437 20.3906 18.102 20.5101C17.1971 20.6251 16.0507 20.625 14.647 20.625H13.35C13.0672 20.625 12.9257 20.625 12.8379 20.5371C12.75 20.4493 12.75 20.3078 12.75 20.025L12.75 1.725Z',
  d10: 'M10.65 1.125C10.9328 1.125 11.0743 1.125 11.1621 1.21287C11.25 1.30074 11.25 1.44216 11.25 1.725L11.25 20.025C11.25 20.3078 11.25 20.4493 11.1621 20.5371C11.0743 20.625 10.9328 20.625 10.65 20.625H9.35301C7.94928 20.625 6.80294 20.6251 5.89799 20.5101C4.95628 20.3906 4.12925 20.1317 3.46266 19.5021C2.78819 18.8651 2.50341 18.0621 2.37313 17.1469C2.24993 16.2815 2.24996 15.1896 2.25 13.8722V7.8779C2.24996 6.56052 2.24993 5.46846 2.37313 4.60307C2.50341 3.68789 2.78819 2.88488 3.46266 2.24788C4.12925 1.61831 4.95628 1.35943 5.89799 1.23986C6.80292 1.12495 7.94924 1.12497 9.35294 1.125H10.65Z',
  d11: 'M9 11.625C9.41421 11.625 9.75 11.2892 9.75 10.875V9.875C9.75 9.46079 9.41421 9.125 9 9.125C8.58579 9.125 8.25 9.46079 8.25 9.875V10.875C8.25 11.2892 8.58579 11.625 9 11.625Z',
  d12: 'M15 11.625C15.4142 11.625 15.75 11.2892 15.75 10.875V9.875C15.75 9.46079 15.4142 9.125 15 9.125C14.5858 9.125 14.25 9.46079 14.25 9.875V10.875C14.25 11.2892 14.5858 11.625 15 11.625Z',
  d13: 'M5 20.3359C5.28559 20.4148 5.58547 20.4698 5.89799 20.5095C6.23214 20.5519 6.59921 20.5787 7 20.5955V21.8743C7 22.4266 6.55228 22.8743 6 22.8743C5.44772 22.8743 5 22.4266 5 21.8743V20.3359Z',
  d14: 'M19 20.3359V21.8743C19 22.4266 18.5523 22.8743 18 22.8743C17.4477 22.8743 17 22.4266 17 21.8743V20.5955C17.4008 20.5787 17.7679 20.5519 18.102 20.5095C18.4145 20.4698 18.7144 20.4148 19 20.3359Z',
  d15: 'M6 19V22M18 19V22',
  d16: 'M21 2H3V19H21V2Z',
  d17: 'M12 19V2',
  d18: 'M9 9V12',
  d19: 'M15 9V12',
  d20: 'M5 22.25V19.25H7V22.25H5ZM17 22.25V19.25H19V22.25H17Z',
  d21: 'M11.25 20.25L11.25 1.75H3C2.58579 1.75 2.25 2.08579 2.25 2.5L2.25 19.5C2.25 19.9142 2.58579 20.25 3 20.25H11.25ZM12.75 1.75L21 1.75C21.4142 1.75 21.75 2.08579 21.75 2.5L21.75 19.5C21.75 19.9142 21.4142 20.25 21 20.25L12.75 20.25L12.75 1.75ZM8.25 12.5V9.5L9.75 9.5V12.5H8.25ZM14.25 9.5V12.5H15.75V9.5H14.25Z',
};

export const IconWardrobe02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wardrobe-02-stroke-rounded IconWardrobe02StrokeRounded"
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

export const IconWardrobe02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wardrobe-02-duotone-rounded IconWardrobe02DuotoneRounded"
    >
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

export const IconWardrobe02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wardrobe-02-twotone-rounded IconWardrobe02TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconWardrobe02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wardrobe-02-solid-rounded IconWardrobe02SolidRounded"
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

export const IconWardrobe02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wardrobe-02-bulk-rounded IconWardrobe02BulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
    </TheIconWrapper>
  );
};

export const IconWardrobe02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wardrobe-02-stroke-sharp IconWardrobe02StrokeSharp"
    >
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
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
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWardrobe02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wardrobe-02-solid-sharp IconWardrobe02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfWardrobe02: TheIconSelfPack = {
  name: 'Wardrobe02',
  StrokeRounded: IconWardrobe02StrokeRounded,
  DuotoneRounded: IconWardrobe02DuotoneRounded,
  TwotoneRounded: IconWardrobe02TwotoneRounded,
  SolidRounded: IconWardrobe02SolidRounded,
  BulkRounded: IconWardrobe02BulkRounded,
  StrokeSharp: IconWardrobe02StrokeSharp,
  SolidSharp: IconWardrobe02SolidSharp,
};