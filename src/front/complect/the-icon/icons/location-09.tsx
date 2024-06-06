import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M18 18C19.2447 18.4244 20 18.9819 20 19.5925C20 20.9221 16.4183 22 12 22C7.58172 22 4 20.9221 4 19.5925C4 18.9819 4.75527 18.4244 6 18',
  d2: 'M15 9.5C15 11.1569 13.6569 12.5 12 12.5C10.3431 12.5 9 11.1569 9 9.5C9 7.84315 10.3431 6.5 12 6.5C13.6569 6.5 15 7.84315 15 9.5Z',
  d3: 'M12 2C16.0588 2 19.5 5.42803 19.5 9.5869C19.5 13.812 16.0028 16.777 12.7725 18.7932C12.5371 18.9287 12.2709 19 12 19C11.7291 19 11.4629 18.9287 11.2275 18.7932C8.00325 16.7573 4.5 13.8266 4.5 9.5869C4.5 5.42803 7.9412 2 12 2Z',
  d4: 'M19.5 9.5869C19.5 5.42803 16.0588 2 12 2C7.9412 2 4.5 5.42803 4.5 9.5869C4.5 13.8266 8.00325 16.7573 11.2275 18.7932C11.4629 18.9287 11.7291 19 12 19C12.2709 19 12.5371 18.9287 12.7725 18.7932C16.0028 16.777 19.5 13.812 19.5 9.5869ZM12 12.5C13.6569 12.5 15 11.1569 15 9.5C15 7.84315 13.6569 6.5 12 6.5C10.3431 6.5 9 7.84315 9 9.5C9 11.1569 10.3431 12.5 12 12.5Z',
  d5: 'M12 1.25C7.52225 1.25 3.75 5.01857 3.75 9.5869C3.75 14.2671 7.60753 17.3945 10.8271 19.4273L10.84 19.4355L10.8533 19.4431C11.2022 19.644 11.5974 19.75 12 19.75C12.4026 19.75 12.7978 19.644 13.1467 19.4431L13.1583 19.4365L13.1696 19.4294C16.4018 17.4121 20.25 14.2513 20.25 9.5869C20.25 5.01857 16.4778 1.25 12 1.25ZM12 6C10.067 6 8.5 7.567 8.5 9.5C8.5 11.433 10.067 13 12 13C13.933 13 15.5 11.433 15.5 9.5C15.5 7.567 13.933 6 12 6Z',
  d6: 'M5.73044 17.742C6.01107 18.2177 5.85295 18.8308 5.37728 19.1114C5.22047 19.204 5.11929 19.2836 5.0574 19.3431C5.0911 19.3751 5.13953 19.4159 5.20842 19.4649C5.48893 19.6645 5.95964 19.8853 6.63132 20.0874C7.96201 20.4879 9.86037 20.7502 12 20.7502C14.1396 20.7502 16.038 20.4879 17.3687 20.0874C18.0404 19.8853 18.5111 19.6645 18.7916 19.4649C18.8605 19.4159 18.9089 19.3751 18.9426 19.3431C18.8807 19.2836 18.7795 19.204 18.6227 19.1114C18.147 18.8308 17.9889 18.2177 18.2696 17.742C18.5502 17.2664 19.1633 17.1082 19.639 17.3889C20.2582 17.7542 21 18.3844 21 19.3426C21 20.1584 20.4547 20.7362 19.9511 21.0946C19.4219 21.471 18.7211 21.769 17.945 22.0026C16.3803 22.4735 14.2787 22.7502 12 22.7502C9.72135 22.7502 7.61972 22.4735 6.05497 22.0026C5.27894 21.769 4.57807 21.471 4.04894 21.0946C3.54526 20.7362 3 20.1584 3 19.3426C3 18.3844 3.7418 17.7542 4.36103 17.3889C4.8367 17.1082 5.44981 17.2664 5.73044 17.742Z',
  d7: 'M3.75 9.5869C3.75 5.01857 7.52225 1.25 12 1.25C16.4778 1.25 20.25 5.01857 20.25 9.5869C20.25 14.2513 16.4018 17.4121 13.1696 19.4294L13.1583 19.4365L13.1467 19.4431C12.7978 19.644 12.4026 19.75 12 19.75C11.5974 19.75 11.2022 19.644 10.8533 19.4431L10.84 19.4355L10.8271 19.4273C7.60753 17.3945 3.75 14.2671 3.75 9.5869Z',
  d8: 'M8.5 9.5C8.5 7.567 10.067 6 12 6C13.933 6 15.5 7.567 15.5 9.5C15.5 11.433 13.933 13 12 13C10.067 13 8.5 11.433 8.5 9.5Z',
  d9: 'M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z',
  d10: 'M12 2C8.13401 2 5 5.07516 5 8.86856C5 11.0376 5.875 12.7242 7.625 14.2306C8.8585 15.2925 11.1028 17.5702 12 18.9999C12.9426 17.5987 15.1415 15.2925 16.375 14.2306C18.125 12.7242 19 11.0376 19 8.86856C19 5.07516 15.866 2 12 2Z',
  d11: 'M5.14841 19.265C5.10999 19.295 5.08016 19.321 5.05714 19.3429C5.09085 19.375 5.13935 19.4159 5.20842 19.465C5.48893 19.6646 5.95964 19.8853 6.63132 20.0875C7.96201 20.4879 9.86037 20.7502 12 20.7502C14.1396 20.7502 16.038 20.4879 17.3687 20.0875C18.0404 19.8853 18.5111 19.6646 18.7916 19.465C18.8606 19.4159 18.9091 19.375 18.9429 19.3429C18.9198 19.321 18.89 19.295 18.8516 19.265C18.63 19.0921 18.246 18.8906 17.6773 18.6967L18.3227 16.8037C18.9987 17.0342 19.6148 17.3237 20.082 17.6882C20.5356 18.0423 21 18.5924 21 19.3427C21 20.1585 20.4547 20.7362 19.9511 21.0946C19.4219 21.4711 18.7211 21.7691 17.945 22.0026C16.3803 22.4735 14.2787 22.7502 12 22.7502C9.72135 22.7502 7.61972 22.4735 6.05497 22.0026C5.27894 21.7691 4.57807 21.4711 4.04894 21.0946C3.54526 20.7362 3 20.1585 3 19.3427C3 18.5924 3.46435 18.0423 3.91804 17.6882C4.38525 17.3237 5.00128 17.0342 5.67728 16.8037L6.32272 18.6967C5.754 18.8906 5.37003 19.0921 5.14841 19.265Z',
  d12: 'M12 1.25C7.73326 1.25 4.25 4.6476 4.25 8.86856C4.25 11.2888 5.24678 13.173 7.1357 14.799C8.35082 15.8451 10.5276 18.0646 11.3647 19.3986C11.4997 19.6136 11.7343 19.7458 11.9881 19.7498C12.2419 19.7538 12.4806 19.6292 12.6223 19.4185C13.5158 18.0902 15.6629 15.8332 16.8643 14.799C18.7532 13.173 19.75 11.2888 19.75 8.86856C19.75 4.6476 16.2667 1.25 12 1.25ZM15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9Z',
};

export const IconLocation09StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-09-stroke-rounded IconLocation09StrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLocation09DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-09-duotone-rounded IconLocation09DuotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLocation09TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-09-twotone-rounded IconLocation09TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      />
    </TheIconWrapper>
  );
};

export const IconLocation09SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-09-solid-rounded IconLocation09SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconLocation09BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-09-bulk-rounded IconLocation09BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLocation09StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-09-stroke-sharp IconLocation09StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLocation09SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-09-solid-sharp IconLocation09SolidSharp"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfLocation09: TheIconSelfPack = {
  name: 'Location09',
  StrokeRounded: IconLocation09StrokeRounded,
  DuotoneRounded: IconLocation09DuotoneRounded,
  TwotoneRounded: IconLocation09TwotoneRounded,
  SolidRounded: IconLocation09SolidRounded,
  BulkRounded: IconLocation09BulkRounded,
  StrokeSharp: IconLocation09StrokeSharp,
  SolidSharp: IconLocation09SolidSharp,
};