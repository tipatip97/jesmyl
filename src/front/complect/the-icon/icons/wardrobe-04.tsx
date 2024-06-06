import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M6 20V22M18 20V22',
  d2: 'M3 16L12 16',
  d3: 'M12 20V2',
  d4: 'M3 14V8C3 5.17157 3 3.75736 3.93037 2.87868C4.86073 2 6.35814 2 9.35294 2H14.6471C17.6419 2 19.1393 2 20.0696 2.87868C21 3.75736 21 5.17157 21 8V14C21 16.8284 21 18.2426 20.0696 19.1213C19.1393 20 17.6419 20 14.6471 20H9.35294C6.35814 20 4.86073 20 3.93037 19.1213C3 18.2426 3 16.8284 3 14Z',
  d5: 'M9 10V8',
  d6: 'M15 12V10',
  d7: 'M21 8V14V14C21 16.8284 21 18.2426 20.0696 19.1213C19.1393 20 17.6419 20 14.6471 20H12V2H14.6471C17.6419 2 19.1393 2 20.0696 2.87868C21 3.75736 21 5.17157 21 7.99998V8Z',
  d8: 'M6 18.875C6.55228 18.875 7 19.3227 7 19.875V21.875C7 22.4273 6.55228 22.875 6 22.875C5.44772 22.875 5 22.4273 5 21.875V19.875C5 19.3227 5.44772 18.875 6 18.875ZM18 18.875C18.5523 18.875 19 19.3227 19 19.875V21.875C19 22.4273 18.5523 22.875 18 22.875C17.4477 22.875 17 22.4273 17 21.875V19.875C17 19.3227 17.4477 18.875 18 18.875Z',
  d9: 'M9 7.125C9.41421 7.125 9.75 7.46079 9.75 7.875V9.875C9.75 10.2892 9.41421 10.625 9 10.625C8.58579 10.625 8.25 10.2892 8.25 9.875V7.875C8.25 7.46079 8.58579 7.125 9 7.125Z',
  d10: 'M14.647 1.125C16.0507 1.12497 17.1971 1.12495 18.102 1.23986C19.0437 1.35943 19.8708 1.61831 20.5374 2.24788C21.2118 2.88487 21.4966 3.68789 21.6269 4.60307C21.7501 5.46846 21.75 6.56042 21.75 7.87777V13.8721C21.75 15.1895 21.7501 16.2815 21.6269 17.1469C21.4966 18.0621 21.2118 18.8651 20.5374 19.5021C19.8708 20.1317 19.0437 20.3906 18.102 20.5101C17.1971 20.6251 16.0508 20.625 14.647 20.625H9.35301C7.9493 20.625 6.80292 20.6251 5.89799 20.5101C4.95628 20.3906 4.12925 20.1317 3.46265 19.5021C2.78819 18.8651 2.50341 18.0621 2.37312 17.1469C2.3273 16.825 2.29853 16.4718 2.28046 16.0873C2.26064 16.02 2.25 15.9487 2.25 15.875C2.25 15.8211 2.25568 15.7686 2.26648 15.7179C2.24996 15.1618 2.24998 14.5465 2.25 13.8721L2.25 7.8779C2.24996 6.56048 2.24993 5.46848 2.37312 4.60307C2.50341 3.68789 2.78819 2.88487 3.46265 2.24788C4.12925 1.61831 4.95628 1.35943 5.89799 1.23986C6.80292 1.12495 7.94925 1.12497 9.35297 1.125H14.647ZM11.2502 15.125L11.2502 3.07495H9.41931C7.93328 3.07495 6.91145 3.0768 6.14381 3.17427C5.39878 3.26888 5.04227 3.43835 4.80176 3.6655C4.56912 3.88522 4.40035 4.19999 4.30385 4.87784C4.20251 5.58973 4.2002 6.54196 4.2002 7.94995L4.2002 13.8C4.2002 14.2948 4.20048 14.7333 4.20525 15.125H11.2502ZM11.2502 16.625V18.675H9.41931C7.93328 18.675 6.91145 18.6731 6.14381 18.5756C5.39878 18.481 5.04227 18.3116 4.80176 18.0844C4.56912 17.8647 4.40035 17.5499 4.30385 16.8721C4.29257 16.7928 4.28251 16.7105 4.27354 16.625H11.2502ZM15.75 9.875C15.75 9.46079 15.4142 9.125 15 9.125C14.5858 9.125 14.25 9.46079 14.25 9.875V11.875C14.25 12.2892 14.5858 12.625 15 12.625C15.4142 12.625 15.75 12.2892 15.75 11.875V9.875Z',
  d11: 'M18.102 1.23986C17.1971 1.12495 16.0507 1.12497 14.647 1.125H9.35297C7.94925 1.12497 6.80292 1.12495 5.89799 1.23986C4.95628 1.35943 4.12925 1.61831 3.46265 2.24788C2.78819 2.88488 2.50341 3.68789 2.37312 4.60307C2.24993 5.46848 2.24996 6.56048 2.25 7.8779V13.8721C2.24998 14.5465 2.24996 15.1618 2.26648 15.7179C2.25568 15.7686 2.25 15.8211 2.25 15.875C2.25 15.9487 2.26064 16.02 2.28046 16.0873C2.29853 16.4718 2.3273 16.825 2.37312 17.1469C2.50341 18.0621 2.78819 18.8651 3.46265 19.5021C4.12925 20.1317 4.95628 20.3906 5.89799 20.5101C6.80292 20.6251 7.9493 20.625 9.35301 20.625H14.647C16.0508 20.625 17.1971 20.6251 18.102 20.5101C19.0437 20.3906 19.8708 20.1317 20.5374 19.5021C21.2118 18.8651 21.4966 18.0621 21.6269 17.1469C21.7501 16.2815 21.75 15.1895 21.75 13.8721V7.87777C21.75 6.56042 21.7501 5.46846 21.6269 4.60307C21.4966 3.68789 21.2118 2.88488 20.5374 2.24788C19.8708 1.61831 19.0437 1.35943 18.102 1.23986ZM11.2502 3.07495V15.125H4.20525C4.20048 14.7333 4.2002 14.2948 4.2002 13.8V7.94995C4.2002 6.54196 4.20251 5.58973 4.30385 4.87784C4.40035 4.19999 4.56912 3.88522 4.80176 3.6655C5.04227 3.43836 5.39878 3.26888 6.14381 3.17428C6.91145 3.0768 7.93328 3.07495 9.41931 3.07495H11.2502ZM11.2502 18.675V16.625H4.27354C4.28251 16.7105 4.29257 16.7928 4.30385 16.8721C4.40035 17.5499 4.56912 17.8647 4.80176 18.0844C5.04227 18.3116 5.39878 18.481 6.14381 18.5756C6.91145 18.6731 7.93328 18.675 9.41931 18.675H11.2502Z',
  d12: 'M9.35297 1.125C7.94925 1.12497 6.80292 1.12495 5.89799 1.23986C4.95628 1.35943 4.12925 1.61831 3.46265 2.24788C2.78819 2.88488 2.50341 3.68789 2.37312 4.60307C2.24993 5.46848 2.24996 6.56048 2.25 7.8779V13.8721C2.24998 14.5465 2.24996 15.1618 2.26648 15.7179C2.25568 15.7686 2.25 15.8211 2.25 15.875C2.25 15.9487 2.26064 16.02 2.28046 16.0873C2.29853 16.4718 2.3273 16.825 2.37312 17.1469C2.50341 18.0621 2.78819 18.8651 3.46265 19.5021C4.12925 20.1317 4.95628 20.3906 5.89799 20.5101C6.80292 20.6251 7.9493 20.625 9.35301 20.625H11.2502V18.675H9.41931C7.93328 18.675 6.91145 18.6731 6.14381 18.5756C5.39878 18.481 5.04227 18.3116 4.80176 18.0844C4.56912 17.8647 4.40035 17.5499 4.30385 16.8721C4.29257 16.7928 4.28251 16.7105 4.27354 16.625H11.2502V15.125H4.20525C4.20048 14.7333 4.2002 14.2948 4.2002 13.8V7.94995C4.2002 6.54196 4.20251 5.58973 4.30385 4.87784C4.40035 4.19999 4.56912 3.88522 4.80176 3.6655C5.04227 3.43836 5.39878 3.26888 6.14381 3.17428C6.91145 3.0768 7.93328 3.07495 9.41931 3.07495H11.2502V1.125H9.35297Z',
  d13: 'M15 9.125C15.4142 9.125 15.75 9.46079 15.75 9.875V11.875C15.75 12.2892 15.4142 12.625 15 12.625C14.5858 12.625 14.25 12.2892 14.25 11.875V9.875C14.25 9.46079 14.5858 9.125 15 9.125Z',
  d14: 'M5 20.3359C5.28558 20.4148 5.58547 20.4698 5.89799 20.5095C6.23214 20.5519 6.59921 20.5787 7 20.5955V21.8743C7 22.4266 6.55228 22.8743 6 22.8743C5.44772 22.8743 5 22.4266 5 21.8743V20.3359Z',
  d15: 'M19 20.3359V21.8743C19 22.4266 18.5523 22.8743 18 22.8743C17.4477 22.8743 17 22.4266 17 21.8743V20.5955C17.4008 20.5787 17.7679 20.5519 18.102 20.5095C18.4145 20.4698 18.7144 20.4148 19 20.3359Z',
  d16: 'M6 19V22M18 19V22',
  d17: 'M3 15L12 15',
  d18: 'M12 19V2',
  d19: 'M21 2H3V19H21V2Z',
  d20: 'M9 10V7',
  d21: 'M15 12V9',
  d22: 'M5 22.25V19.25H7V22.25H5ZM17 22.25V19.25H19V22.25H17Z',
  d23: 'M3 20.25H11.25V16.25H2.25L2.25 19.5C2.25 19.9142 2.58579 20.25 3 20.25ZM21 1.75L12.75 1.75L12.75 20.25L21 20.25C21.4142 20.25 21.75 19.9142 21.75 19.5L21.75 2.5C21.75 2.08579 21.4142 1.75 21 1.75ZM2.25 14.75H11.25L11.25 1.75H3C2.58579 1.75 2.25 2.08579 2.25 2.5L2.25 14.75ZM9.75 7.5L9.75 10.5L8.25 10.5L8.25 7.5L9.75 7.5ZM15.75 12.5V9.5H14.25V12.5H15.75Z',
};

export const IconWardrobe04StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wardrobe-04-stroke-rounded IconWardrobe04StrokeRounded"
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

export const IconWardrobe04DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wardrobe-04-duotone-rounded IconWardrobe04DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconWardrobe04TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wardrobe-04-twotone-rounded IconWardrobe04TwotoneRounded"
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

export const IconWardrobe04SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wardrobe-04-solid-rounded IconWardrobe04SolidRounded"
    >
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
    </TheIconWrapper>
  );
};

export const IconWardrobe04BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wardrobe-04-bulk-rounded IconWardrobe04BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
    </TheIconWrapper>
  );
};

export const IconWardrobe04StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wardrobe-04-stroke-sharp IconWardrobe04StrokeSharp"
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
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWardrobe04SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wardrobe-04-solid-sharp IconWardrobe04SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfWardrobe04: TheIconSelfPack = {
  name: 'Wardrobe04',
  StrokeRounded: IconWardrobe04StrokeRounded,
  DuotoneRounded: IconWardrobe04DuotoneRounded,
  TwotoneRounded: IconWardrobe04TwotoneRounded,
  SolidRounded: IconWardrobe04SolidRounded,
  BulkRounded: IconWardrobe04BulkRounded,
  StrokeSharp: IconWardrobe04StrokeSharp,
  SolidSharp: IconWardrobe04SolidSharp,
};