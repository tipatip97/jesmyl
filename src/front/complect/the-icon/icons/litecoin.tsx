import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 2C6.47716 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z',
  d2: 'M11.5 6.5L10.1573 11.2953M10.1573 11.2953L9.29733 14.3667C9.02356 15.3444 8.88667 15.8333 9.12667 16.1667C9.36667 16.5 9.85556 16.5 10.8333 16.5H15.5M10.1573 11.2953L7.5 12.3333M10.1573 11.2953L13.9 9.83333',
  d3: 'M12 1.25C6.06294 1.25 1.25 6.06293 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM12.2224 6.70241C12.3341 6.30354 12.1013 5.88965 11.7024 5.77797C11.3036 5.66628 10.8897 5.8991 10.778 6.29797L9.53616 10.733L7.22731 11.6349C6.84149 11.7856 6.6509 12.2206 6.80161 12.6064C6.95232 12.9922 7.38727 13.1828 7.77309 13.0321L9.02988 12.5412L8.5622 14.2114C8.43657 14.6599 8.32174 15.0698 8.27622 15.4086C8.22699 15.775 8.23495 16.2117 8.51822 16.6051C8.80683 17.0059 9.22353 17.1442 9.59096 17.2C9.92233 17.2503 10.3379 17.2503 10.7827 17.2502L15.5002 17.2502C15.9144 17.2502 16.2502 16.9144 16.2502 16.5002C16.2502 16.086 15.9144 15.7502 15.5002 15.7502L9.75354 15.7058L10.7789 11.858L14.1731 10.5321C14.5589 10.3814 14.7495 9.94646 14.5988 9.56064C14.4481 9.17481 14.0131 8.98422 13.6273 9.13493L11.2851 10.0498L12.2224 6.70241Z',
  d4: 'M1.25 12C1.25 6.06293 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z',
  d5: 'M11.7024 5.77797C12.1013 5.88965 12.3341 6.30354 12.2224 6.70241L11.2851 10.0498L13.6273 9.13493C14.0131 8.98422 14.4481 9.17481 14.5988 9.56064C14.7495 9.94646 14.5589 10.3814 14.1731 10.5321L10.7789 11.858L9.75354 15.7058L15.5002 15.7502C15.9144 15.7502 16.2502 16.086 16.2502 16.5002C16.2502 16.9144 15.9144 17.2502 15.5002 17.2502L10.7827 17.2502C10.3379 17.2503 9.92233 17.2503 9.59096 17.2C9.22353 17.1442 8.80683 17.0059 8.51822 16.6051C8.23495 16.2117 8.22699 15.775 8.27621 15.4086C8.32174 15.0698 8.43657 14.6599 8.5622 14.2114L9.02988 12.5412L7.77309 13.0321C7.38727 13.1828 6.95232 12.9922 6.80161 12.6064C6.6509 12.2206 6.84149 11.7856 7.22731 11.6349L9.53616 10.733L10.778 6.29797C10.8897 5.8991 11.3036 5.66628 11.7024 5.77797Z',
  d6: 'M11.5 6.5L10.1573 11.2953M10.1573 11.2953L8.5 16.5H15.5M10.1573 11.2953L7.5 12.3333M10.1573 11.2953L13.9 9.83333',
  d7: 'M12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06293 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06293 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75ZM10.7782 6.29785L9.53638 10.7329L7.22754 11.6348L7.77331 13.032L8.966 12.5661L7.4745 17.2501H15.5004V15.7501H9.52635L10.7638 11.8638L14.1733 10.532L13.6275 9.13481L11.2854 10.0497L12.2226 6.7023L10.7782 6.29785Z',
};

export const IconLitecoinStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="litecoin-stroke-rounded IconLitecoinStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconLitecoinDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="litecoin-duotone-rounded IconLitecoinDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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
    </TheIconWrapper>
  );
};

export const IconLitecoinTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="litecoin-twotone-rounded IconLitecoinTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconLitecoinSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="litecoin-solid-rounded IconLitecoinSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLitecoinBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="litecoin-bulk-rounded IconLitecoinBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLitecoinStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="litecoin-stroke-sharp IconLitecoinStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLitecoinSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="litecoin-solid-sharp IconLitecoinSolidSharp"
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

export const iconPackOfLitecoin: TheIconSelfPack = {
  name: 'Litecoin',
  StrokeRounded: IconLitecoinStrokeRounded,
  DuotoneRounded: IconLitecoinDuotoneRounded,
  TwotoneRounded: IconLitecoinTwotoneRounded,
  SolidRounded: IconLitecoinSolidRounded,
  BulkRounded: IconLitecoinBulkRounded,
  StrokeSharp: IconLitecoinStrokeSharp,
  SolidSharp: IconLitecoinSolidSharp,
};