import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M8 22H18C19.8856 22 20.8284 22 21.4142 21.4142C22 20.8284 22 19.8856 22 18V17C22 15.1144 22 14.1716 21.4142 13.5858C20.8284 13 19.8856 13 18 13L15 13C13.1144 13 12.1716 13 11.5858 12.4142C11 11.8284 11 10.8856 11 9V6C11 4.11438 11 3.17157 10.4142 2.58579C9.82843 2 8.88562 2 7 2L6 2C4.11438 2 3.17157 2 2.58579 2.58579C2 3.17157 2 4.11438 2 6L2 16C2 18.8284 2 20.2426 2.87868 21.1213C3.75736 22 5.17157 22 8 22Z',
  d2: 'M10 16.5C10 17.8807 8.88071 19 7.5 19C6.11929 19 5 17.8807 5 16.5C5 15.1193 6.11929 14 7.5 14C8.88071 14 10 15.1193 10 16.5Z',
  d3: 'M6.5 10V2',
  d4: 'M14 17.5H22',
  d5: 'M18 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16V6C2 4.11438 2 3.17157 2.58579 2.58579C3.17157 2 4.11438 2 6 2H7C8.88562 2 9.82843 2 10.4142 2.58579C11 3.17157 11 4.11438 11 6V9C11 10.8856 11 11.8284 11.5858 12.4142C12.1716 13 13.1144 13 15 13L18 13C19.8856 13 20.8284 13 21.4142 13.5858C22 14.1716 22 15.1144 22 17V18C22 19.8856 22 20.8284 21.4142 21.4142C20.8284 22 19.8856 22 18 22ZM7.5 19C8.88071 19 10 17.8807 10 16.5C10 15.1193 8.88071 14 7.5 14C6.11929 14 5 15.1193 5 16.5C5 17.8807 6.11929 19 7.5 19Z',
  d6: 'M3.70748 1.32613C4.05323 1.27965 4.45116 1.2602 4.90027 1.25206C5.18166 1.24696 5.32236 1.24441 5.41216 1.3326C5.50196 1.42078 5.50196 1.56327 5.50196 1.84825V9.99622C5.50196 10.5485 5.94967 10.9962 6.50196 10.9962C7.05424 10.9962 7.50196 10.5485 7.50196 9.99622V1.84825C7.50196 1.56327 7.50196 1.42078 7.59175 1.3326C7.68155 1.24441 7.82225 1.24696 8.10364 1.25206C8.55275 1.2602 8.95069 1.27965 9.29644 1.32613C9.92423 1.41054 10.491 1.59621 10.9465 2.05168C11.402 2.50715 11.5876 3.07395 11.672 3.70174C11.752 4.29652 11.752 5.04573 11.752 5.9442L11.752 8.99622C11.752 9.96024 11.7536 10.6078 11.8185 11.0908C11.8805 11.5523 11.9878 11.7498 12.1181 11.8801C12.2484 12.0104 12.4459 12.1176 12.9073 12.1797C13.3904 12.2446 14.0379 12.2462 15.002 12.2462L18.054 12.2462C18.9524 12.2462 19.7017 12.2462 20.2964 12.3261C20.9242 12.4105 21.491 12.5962 21.9465 13.0517C22.402 13.5071 22.5876 14.0739 22.672 14.7017C22.7185 15.0475 22.738 15.4454 22.7461 15.8945C22.7512 16.1759 22.7538 16.3166 22.6656 16.4064C22.5774 16.4962 22.4349 16.4962 22.1499 16.4962H14.002C13.4497 16.4962 13.002 16.9439 13.002 17.4962C13.002 18.0485 13.4497 18.4962 14.002 18.4962H22.1499C22.4349 18.4962 22.5774 18.4962 22.6656 18.586C22.7538 18.6758 22.7512 18.8165 22.7461 19.0979C22.738 19.547 22.7185 19.945 22.672 20.2907C22.5876 20.9185 22.402 21.4853 21.9465 21.9408C21.491 22.3962 20.9242 22.5819 20.2964 22.6663C19.7017 22.7463 18.9525 22.7463 18.054 22.7462H7.94709C6.5795 22.7462 5.47718 22.7463 4.61021 22.6297C3.7101 22.5087 2.95223 22.2498 2.35031 21.6479C1.74839 21.046 1.4895 20.2881 1.36848 19.388C1.25192 18.521 1.25194 17.4187 1.25196 16.0511L1.25195 5.9442V5.94417C1.25193 5.04574 1.25191 4.2965 1.33187 3.70174C1.41627 3.07395 1.60194 2.50715 2.05741 2.05168C2.51288 1.59621 3.07968 1.41054 3.70748 1.32613ZM10.002 16.4961C10.002 17.8768 8.88266 18.9961 7.50195 18.9961C6.12124 18.9961 5.00195 17.8768 5.00195 16.4961C5.00195 15.1154 6.12124 13.9961 7.50195 13.9961C8.88266 13.9961 10.002 15.1154 10.002 16.4961Z',
  d7: 'M4.89832 1.25596C4.44921 1.2641 4.05127 1.28356 3.70553 1.33004C3.07773 1.41445 2.51093 1.60012 2.05546 2.05559C1.59999 2.51106 1.41432 3.07786 1.32992 3.70565C1.24995 4.30041 1.24997 5.04965 1.25 5.94808V5.9481L1.25001 16.055C1.24998 17.4226 1.24997 18.5249 1.36653 19.3919C1.48755 20.292 1.74644 21.0499 2.34836 21.6518C2.95027 22.2537 3.70815 22.5126 4.60825 22.6336C5.47522 22.7502 6.57754 22.7502 7.94514 22.7501H18.052C18.9505 22.7502 19.6997 22.7502 20.2945 22.6702C20.9223 22.5858 21.4891 22.4001 21.9445 21.9447C22.4 21.4892 22.5857 20.9224 22.6701 20.2946C22.7166 19.9489 22.736 19.5509 22.7442 19.1018C22.7493 18.8204 22.7518 18.6797 22.6636 18.5899C22.5754 18.5001 22.433 18.5001 22.148 18.5001H14C13.4477 18.5001 13 18.0524 13 17.5001C13 16.9478 13.4477 16.5001 14 16.5001H22.148C22.433 16.5001 22.5754 16.5001 22.6636 16.4103C22.7518 16.3205 22.7493 16.1798 22.7442 15.8984C22.736 15.4493 22.7166 15.0514 22.6701 14.7056C22.5857 14.0779 22.4 13.5111 21.9445 13.0556C21.4891 12.6001 20.9223 12.4144 20.2945 12.33C19.6997 12.2501 18.9505 12.2501 18.052 12.2501L15 12.2501C14.036 12.2501 13.3884 12.2485 12.9054 12.1836C12.4439 12.1216 12.2464 12.0143 12.1161 11.884C11.9858 11.7537 11.8786 11.5562 11.8165 11.0947C11.7516 10.6117 11.75 9.96414 11.75 9.00013L11.75 5.9481C11.75 5.04964 11.7501 4.30043 11.6701 3.70565C11.5857 3.07786 11.4 2.51106 10.9445 2.05559C10.4891 1.60012 9.92228 1.41445 9.29448 1.33004C8.94873 1.28356 8.5508 1.2641 8.10169 1.25596C7.8203 1.25087 7.6796 1.24832 7.5898 1.3365C7.5 1.42469 7.5 1.56718 7.5 1.85216V10.0001C7.5 10.5524 7.05229 11.0001 6.5 11.0001C5.94772 11.0001 5.5 10.5524 5.5 10.0001V1.85215C5.5 1.56718 5.5 1.42469 5.4102 1.3365C5.32041 1.24832 5.17971 1.25087 4.89832 1.25596Z',
  d8: 'M7.5 19C8.88071 19 10 17.8807 10 16.5C10 15.1193 8.88071 14 7.5 14C6.11929 14 5 15.1193 5 16.5C5 17.8807 6.11929 19 7.5 19Z',
  d9: 'M2 22H22V13L11 13V2H2V22Z',
  d10: 'M9 17C9 18.1046 8.10457 19 7 19C5.89543 19 5 18.1046 5 17C5 15.8954 5.89543 15 7 15C8.10457 15 9 15.8954 9 17Z',
  d11: 'M6.5 12V2',
  d12: 'M12 17.5H22',
  d13: 'M2 1.25H5.75V12H7.25V1.25H11C11.4142 1.25 11.75 1.58579 11.75 2V12.25L22 12.25C22.1989 12.25 22.3897 12.329 22.5303 12.4697C22.671 12.6103 22.75 12.8011 22.75 13V16.75H12V18.25H22.75V22C22.75 22.4142 22.4142 22.75 22 22.75H2C1.58579 22.75 1.25 22.4142 1.25 22V2C1.25 1.80109 1.32902 1.61032 1.46967 1.46967C1.61032 1.32902 1.80109 1.25 2 1.25ZM7 14.25C5.48122 14.25 4.25 15.4812 4.25 17C4.25 18.5188 5.48122 19.75 7 19.75C8.51878 19.75 9.75 18.5188 9.75 17C9.75 15.4812 8.51878 14.25 7 14.25Z',
};

export const IconStrokeCenterStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="stroke-center-stroke-rounded IconStrokeCenterStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconStrokeCenterDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="stroke-center-duotone-rounded IconStrokeCenterDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
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
    </TheIconWrapper>
  );
};

export const IconStrokeCenterTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="stroke-center-twotone-rounded IconStrokeCenterTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconStrokeCenterSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="stroke-center-solid-rounded IconStrokeCenterSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconStrokeCenterBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="stroke-center-bulk-rounded IconStrokeCenterBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconStrokeCenterStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="stroke-center-stroke-sharp IconStrokeCenterStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
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

export const IconStrokeCenterSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="stroke-center-solid-sharp IconStrokeCenterSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfStrokeCenter: TheIconSelfPack = {
  name: 'StrokeCenter',
  StrokeRounded: IconStrokeCenterStrokeRounded,
  DuotoneRounded: IconStrokeCenterDuotoneRounded,
  TwotoneRounded: IconStrokeCenterTwotoneRounded,
  SolidRounded: IconStrokeCenterSolidRounded,
  BulkRounded: IconStrokeCenterBulkRounded,
  StrokeSharp: IconStrokeCenterStrokeSharp,
  SolidSharp: IconStrokeCenterSolidSharp,
};