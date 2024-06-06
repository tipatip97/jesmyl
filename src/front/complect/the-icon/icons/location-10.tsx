import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M15 9.5C15 11.1569 13.6569 12.5 12 12.5C10.3431 12.5 9 11.1569 9 9.5C9 7.84315 10.3431 6.5 12 6.5C13.6569 6.5 15 7.84315 15 9.5Z',
  d2: 'M12 2C16.0588 2 19.5 5.42803 19.5 9.5869C19.5 13.812 16.0028 16.777 12.7725 18.7932C12.5371 18.9287 12.2709 19 12 19C11.7291 19 11.4629 18.9287 11.2275 18.7932C8.00325 16.7573 4.5 13.8266 4.5 9.5869C4.5 5.42803 7.9412 2 12 2Z',
  d3: 'M18 20C18 21.1046 15.3137 22 12 22C8.68629 22 6 21.1046 6 20',
  d4: 'M19.5 9.5869C19.5 5.42803 16.0588 2 12 2C7.9412 2 4.5 5.42803 4.5 9.5869C4.5 13.8266 8.00325 16.7573 11.2275 18.7932C11.4629 18.9287 11.7291 19 12 19C12.2709 19 12.5371 18.9287 12.7725 18.7932C16.0028 16.777 19.5 13.812 19.5 9.5869ZM12 12.5C13.6569 12.5 15 11.1569 15 9.5C15 7.84315 13.6569 6.5 12 6.5C10.3431 6.5 9 7.84315 9 9.5C9 11.1569 10.3431 12.5 12 12.5Z',
  d5: 'M12 1.25C7.52225 1.25 3.75 5.01857 3.75 9.5869C3.75 14.2671 7.60753 17.3945 10.8271 19.4273L10.84 19.4355L10.8533 19.4431C11.2022 19.644 11.5974 19.75 12 19.75C12.4026 19.75 12.7978 19.644 13.1467 19.4431L13.1583 19.4365L13.1696 19.4294C16.4018 17.4121 20.25 14.2513 20.25 9.5869C20.25 5.01857 16.4778 1.25 12 1.25ZM12 6C10.067 6 8.5 7.567 8.5 9.5C8.5 11.433 10.067 13 12 13C13.933 13 15.5 11.433 15.5 9.5C15.5 7.567 13.933 6 12 6Z',
  d6: 'M6 18.75C6.5212 18.75 6.94927 19.1487 6.99581 19.6578C7.01311 19.6768 7.04258 19.7053 7.09048 19.7431C7.26885 19.8836 7.58893 20.054 8.07359 20.2155C9.03245 20.5352 10.4207 20.75 12 20.75C13.5793 20.75 14.9675 20.5352 15.9264 20.2155C16.4111 20.054 16.7311 19.8836 16.9095 19.7431C16.9574 19.7053 16.9869 19.6768 17.0042 19.6578C17.0507 19.1487 17.4788 18.75 18 18.75C18.5523 18.75 19 19.1977 19 19.75C19 20.4639 18.5651 20.9848 18.1475 21.3139C17.7186 21.6519 17.16 21.9125 16.5589 22.1129C15.3462 22.5171 13.7344 22.75 12 22.75C10.2656 22.75 8.65384 22.5171 7.44113 22.1129C6.84 21.9125 6.2814 21.6519 5.85254 21.3139C5.43495 20.9848 5 20.4639 5 19.75C5 19.1977 5.44772 18.75 6 18.75Z',
  d7: 'M3.75 9.5869C3.75 5.01857 7.52225 1.25 12 1.25C16.4778 1.25 20.25 5.01857 20.25 9.5869C20.25 14.2513 16.4018 17.4121 13.1696 19.4294L13.1583 19.4365L13.1467 19.4431C12.7978 19.644 12.4026 19.75 12 19.75C11.5974 19.75 11.2022 19.644 10.8533 19.4431L10.84 19.4355L10.8271 19.4273C7.60753 17.3945 3.75 14.2671 3.75 9.5869Z',
  d8: 'M8.5 9.5C8.5 7.567 10.067 6 12 6C13.933 6 15.5 7.567 15.5 9.5C15.5 11.433 13.933 13 12 13C10.067 13 8.5 11.433 8.5 9.5Z',
  d9: 'M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z',
  d10: 'M12 2C8.13401 2 5 5.07516 5 8.86856C5 11.0376 5.875 12.7242 7.625 14.2306C8.8585 15.2925 11.1028 17.5702 12 18.9999C12.9426 17.5987 15.1415 15.2925 16.375 14.2306C18.125 12.7242 19 11.0376 19 8.86856C19 5.07516 15.866 2 12 2Z',
  d11: 'M18 19C18 20.6569 15.3137 22 12 22C8.68629 22 6 20.6569 6 19',
  d12: 'M12 1.25C7.73326 1.25 4.25 4.6476 4.25 8.86856C4.25 11.2888 5.24678 13.173 7.1357 14.799C8.35082 15.8451 10.5276 18.0646 11.3647 19.3986C11.4997 19.6136 11.7343 19.7458 11.9881 19.7498C12.2419 19.7538 12.4806 19.6292 12.6223 19.4185C13.5158 18.0902 15.6629 15.8332 16.8643 14.799C18.7532 13.173 19.75 11.2888 19.75 8.86856C19.75 4.6476 16.2667 1.25 12 1.25ZM15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9Z',
  d13: 'M8.20457 19.9769C9.12424 20.4367 10.4647 20.75 12 20.75C13.5353 20.75 14.8758 20.4367 15.7954 19.9769C16.7749 19.4872 17 18.9956 17 18.75H19C19 20.1613 17.8819 21.1697 16.6899 21.7657C15.4379 22.3917 13.7784 22.75 12 22.75C10.2216 22.75 8.56205 22.3917 7.31015 21.7657C6.11805 21.1697 5 20.1613 5 18.75H7C7 18.9956 7.22509 19.4872 8.20457 19.9769Z',
};

export const IconLocation10StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-10-stroke-rounded IconLocation10StrokeRounded"
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

export const IconLocation10DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-10-duotone-rounded IconLocation10DuotoneRounded"
    >
      <path 
        d={d.d3} 
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
    </TheIconWrapper>
  );
};

export const IconLocation10TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-10-twotone-rounded IconLocation10TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
    </TheIconWrapper>
  );
};

export const IconLocation10SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-10-solid-rounded IconLocation10SolidRounded"
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

export const IconLocation10BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-10-bulk-rounded IconLocation10BulkRounded"
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

export const IconLocation10StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-10-stroke-sharp IconLocation10StrokeSharp"
    >
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
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLocation10SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-10-solid-sharp IconLocation10SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfLocation10: TheIconSelfPack = {
  name: 'Location10',
  StrokeRounded: IconLocation10StrokeRounded,
  DuotoneRounded: IconLocation10DuotoneRounded,
  TwotoneRounded: IconLocation10TwotoneRounded,
  SolidRounded: IconLocation10SolidRounded,
  BulkRounded: IconLocation10BulkRounded,
  StrokeSharp: IconLocation10StrokeSharp,
  SolidSharp: IconLocation10SolidSharp,
};