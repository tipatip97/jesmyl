import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M14.5 9C14.5 10.3807 13.3807 11.5 12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9Z',
  d2: 'M13.2574 17.4936C12.9201 17.8184 12.4693 18 12.0002 18C11.531 18 11.0802 17.8184 10.7429 17.4936C7.6543 14.5008 3.51519 11.1575 5.53371 6.30373C6.6251 3.67932 9.24494 2 12.0002 2C14.7554 2 17.3752 3.67933 18.4666 6.30373C20.4826 11.1514 16.3536 14.5111 13.2574 17.4936Z',
  d3: 'M18 20C18 21.1046 15.3137 22 12 22C8.68629 22 6 21.1046 6 20',
  d4: 'M12.0002 18C12.4693 18 12.9201 17.8184 13.2574 17.4936C13.4929 17.2667 13.7344 17.0377 13.9787 16.806C16.9462 13.9914 20.3292 10.7827 18.4666 6.30373C17.3752 3.67933 14.7554 2 12.0002 2C9.24494 2 6.6251 3.67932 5.53371 6.30373C3.67864 10.7645 7.02435 13.9494 9.97577 16.759C10.2358 17.0066 10.4928 17.2512 10.7429 17.4936C11.0802 17.8184 11.531 18 12.0002 18ZM12 11.5C13.3807 11.5 14.5 10.3807 14.5 9C14.5 7.61929 13.3807 6.5 12 6.5C10.6193 6.5 9.5 7.61929 9.5 9C9.5 10.3807 10.6193 11.5 12 11.5Z',
  d5: 'M12.0005 1.25C8.94965 1.25 6.05208 3.10493 4.84158 6.01574C3.71464 8.72562 4.32729 11.035 5.59274 13.0023C6.62554 14.6079 8.13245 16.0411 9.47688 17.3198C9.73237 17.5628 9.98199 17.8002 10.2214 18.0322L10.223 18.0338C10.7003 18.4935 11.3377 18.75 12.0005 18.75C12.6633 18.75 13.3008 18.4935 13.7781 18.0337C14.0042 17.8159 14.2392 17.5932 14.4795 17.3655L14.4802 17.3648L14.4806 17.3645C15.8394 16.0769 17.367 14.6292 18.4106 13.0032C19.6745 11.034 20.285 8.72228 19.1595 6.01574C17.949 3.10493 15.0514 1.25 12.0005 1.25ZM12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6Z',
  d6: 'M6 18.75C6.5212 18.75 6.94927 19.1487 6.99581 19.6578C7.01311 19.6768 7.04258 19.7053 7.09048 19.7431C7.26885 19.8836 7.58893 20.054 8.07359 20.2155C9.03245 20.5352 10.4207 20.75 12 20.75C13.5793 20.75 14.9675 20.5352 15.9264 20.2155C16.4111 20.054 16.7311 19.8836 16.9095 19.7431C16.9574 19.7053 16.9869 19.6768 17.0042 19.6578C17.0507 19.1487 17.4788 18.75 18 18.75C18.5523 18.75 19 19.1977 19 19.75C19 20.4639 18.5651 20.9848 18.1475 21.3139C17.7186 21.6519 17.16 21.9125 16.5589 22.1129C15.3462 22.5171 13.7344 22.75 12 22.75C10.2656 22.75 8.65384 22.5171 7.44113 22.1129C6.84 21.9125 6.2814 21.6519 5.85254 21.3139C5.43495 20.9848 5 20.4639 5 19.75C5 19.1977 5.44772 18.75 6 18.75Z',
  d7: 'M4.84158 6.01574C6.05208 3.10493 8.94965 1.25 12.0005 1.25C15.0514 1.25 17.949 3.10493 19.1595 6.01574C20.285 8.72228 19.6745 11.034 18.4106 13.0032C17.367 14.6292 15.8394 16.0769 14.4806 17.3645L14.4802 17.3648C14.2397 17.5928 14.0044 17.8157 13.7781 18.0337C13.3008 18.4935 12.6633 18.75 12.0005 18.75C11.3377 18.75 10.7003 18.4935 10.223 18.0338L10.2214 18.0322C9.98199 17.8002 9.73237 17.5628 9.47688 17.3198C8.13245 16.0411 6.62554 14.6079 5.59274 13.0023C4.32729 11.035 3.71464 8.72562 4.84158 6.01574Z',
  d8: 'M9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9Z',
  d9: 'M19 9.2C19 14.8 12 18 12 18C12 18 5 14.8 5 9.2C5 5.22355 8.13401 2 12 2C15.866 2 19 5.22355 19 9.2Z',
  d10: 'M18 19C18 20.6569 15.3137 22 12 22C8.68629 22 6 20.6569 6 19',
  d11: 'M11.3562 18.5185C11.4576 18.5707 12 18.8247 12 18.8247C12 18.8247 12.5424 18.5707 12.6438 18.5185C12.8465 18.4143 13.1329 18.2604 13.4751 18.0583C14.1578 17.6552 15.0712 17.0554 15.9881 16.2694C17.7997 14.7167 19.75 12.3269 19.75 9.2C19.75 4.82939 16.3 1.25 12 1.25C7.70002 1.25 4.25 4.82939 4.25 9.2C4.25 12.3269 6.20032 14.7167 8.01191 16.2694C8.92884 17.0554 9.84219 17.6552 10.5249 18.0583C10.8671 18.2604 11.1535 18.4143 11.3562 18.5185ZM12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z',
  d12: 'M8.20457 19.9769C9.12424 20.4367 10.4647 20.75 12 20.75C13.5353 20.75 14.8758 20.4367 15.7954 19.9769C16.7749 19.4872 17 18.9956 17 18.75H19C19 20.1613 17.8819 21.1697 16.6899 21.7657C15.4379 22.3917 13.7784 22.75 12 22.75C10.2216 22.75 8.56205 22.3917 7.31015 21.7657C6.11805 21.1697 5 20.1613 5 18.75H7C7 18.9956 7.22509 19.4872 8.20457 19.9769Z',
};

export const IconLocation05StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-05-stroke-rounded IconLocation05StrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLocation05DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-05-duotone-rounded IconLocation05DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
    </TheIconWrapper>
  );
};

export const IconLocation05TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-05-twotone-rounded IconLocation05TwotoneRounded"
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLocation05SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-05-solid-rounded IconLocation05SolidRounded"
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

export const IconLocation05BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-05-bulk-rounded IconLocation05BulkRounded"
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

export const IconLocation05StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-05-stroke-sharp IconLocation05StrokeSharp"
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
      />
    </TheIconWrapper>
  );
};

export const IconLocation05SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-05-solid-sharp IconLocation05SolidSharp"
    >
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
    </TheIconWrapper>
  );
};

export const iconPackOfLocation05: TheIconSelfPack = {
  name: 'Location05',
  StrokeRounded: IconLocation05StrokeRounded,
  DuotoneRounded: IconLocation05DuotoneRounded,
  TwotoneRounded: IconLocation05TwotoneRounded,
  SolidRounded: IconLocation05SolidRounded,
  BulkRounded: IconLocation05BulkRounded,
  StrokeSharp: IconLocation05StrokeSharp,
  SolidSharp: IconLocation05SolidSharp,
};