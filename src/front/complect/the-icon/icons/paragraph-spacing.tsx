import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M3 2H21',
  d2: 'M3 22H21',
  d3: 'M9.47266 8.5089L11.2737 6.37457C11.6424 5.93304 12.2676 5.92923 12.6732 6.37457L14.4529 8.5089M11.9734 7.08454V11.408L11.9719 16.9994M14.4727 15.5751L12.6716 17.7094C12.3029 18.1509 11.6777 18.1548 11.2721 17.7094L9.4924 15.5751',
  d4: 'M3.35059 2H21.3506',
  d5: 'M3.35059 22H21.3506',
  d6: 'M9.85059 8.46691L11.6516 6.33258C12.0203 5.89105 12.6455 5.88724 13.0511 6.33258L14.8308 8.46691M12.3513 7.04255V11.366L12.3498 16.9574M14.8506 15.5331L13.0495 17.6674C12.6808 18.1089 12.0556 18.1128 11.65 17.6674L9.87033 15.5331',
  d7: 'M9.5 8.4669L11.3011 6.33258C11.6698 5.89105 12.295 5.88724 12.7005 6.33258L14.4803 8.4669M12.0008 6.00009V11.366V17.9999M14.5 15.5331L12.6989 17.6674C12.3302 18.109 11.705 18.1128 11.2995 17.6674L9.51974 15.5331',
  d8: 'M2 2C2 1.44772 2.44772 1 3 1H21C21.5523 1 22 1.44772 22 2C22 2.55228 21.5523 3 21 3H3C2.44772 3 2 2.55228 2 2Z',
  d9: 'M2 22C2 21.4477 2.44772 21 3 21H21C21.5523 21 22 21.4477 22 22C22 22.5523 21.5523 23 21 23H3C2.44772 23 2 22.5523 2 22Z',
  d10: 'M10.4116 14.5C10.236 14.4999 10.0203 14.4997 9.84387 14.5218L9.84053 14.5222C9.71408 14.538 9.13804 14.6098 8.86368 15.1754C8.58872 15.7422 8.89065 16.2424 8.95597 16.3506L8.95841 16.3546C9.05062 16.5076 9.18477 16.6785 9.29511 16.819L9.31885 16.8493C9.61348 17.2251 9.99545 17.7093 10.3759 18.1003C10.5657 18.2954 10.783 18.4967 11.0139 18.6555C11.2191 18.7967 11.5693 19 12 19C12.4307 19 12.7809 18.7967 12.9861 18.6555C13.217 18.4967 13.4343 18.2954 13.6241 18.1003C14.0046 17.7093 14.3865 17.2251 14.6812 16.8493L14.7049 16.8191C14.8152 16.6785 14.9494 16.5076 15.0416 16.3546L15.044 16.3506C15.1093 16.2424 15.4113 15.7422 15.1363 15.1754C14.862 14.6098 14.2859 14.538 14.1595 14.5222L14.1561 14.5218C13.9797 14.4997 13.764 14.4999 13.5884 14.5L13.0059 14.5V9.5L13.5884 9.50002C13.764 9.50014 13.9797 9.5003 14.1561 9.47823L14.1595 9.47781C14.2859 9.46204 14.862 9.39021 15.1363 8.82461C15.4113 8.25779 15.1093 7.75765 15.044 7.64944L15.0416 7.64541C14.9494 7.49239 14.8152 7.3215 14.7049 7.18095L14.6812 7.15071C14.3865 6.77488 14.0046 6.29067 13.6241 5.89966C13.4343 5.70455 13.217 5.50331 12.9861 5.34447C12.7809 5.20326 12.4307 5 12 5C11.5693 5 11.2191 5.20326 11.0139 5.34447C10.783 5.50331 10.5657 5.70455 10.3759 5.89966C9.99545 6.29067 9.61348 6.77488 9.31885 7.15071L9.29511 7.18095C9.18477 7.32151 9.05062 7.49239 8.95841 7.64541L8.95597 7.64944C8.89065 7.75765 8.58872 8.25779 8.86368 8.82461C9.13804 9.39021 9.71408 9.46204 9.84053 9.47781L9.84387 9.47823C10.0203 9.5003 10.236 9.50014 10.4116 9.50002L11.0059 9.5V14.5L10.4116 14.5Z',
  d11: 'M12.0169 6.00049V17.9778M12.0169 6.00049L14.4825 8.51804M12.0169 6.00049L9.49219 8.51812M12.0169 17.9778L14.5123 15.5333M12.0169 17.9778L9.49226 15.5333',
  d12: 'M21 3H3V1H21V3Z',
  d13: 'M21 23H3V21H21V23Z',
  d14: 'M12.0005 4.58594L15.2075 7.79298L13.7933 9.2072L13.0004 8.41431V15.5856L13.7928 14.793L15.2072 16.2071L12.0006 19.4143L8.79297 16.2073L10.2071 14.7929L11.0004 15.5862V8.41402L10.2071 9.20726L8.79297 7.79293L12.0005 4.58594Z',
};

export const IconParagraphSpacingStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="paragraph-spacing-stroke-rounded IconParagraphSpacingStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconParagraphSpacingDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="paragraph-spacing-duotone-rounded IconParagraphSpacingDuotoneRounded"
    >
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

export const IconParagraphSpacingTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="paragraph-spacing-twotone-rounded IconParagraphSpacingTwotoneRounded"
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
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconParagraphSpacingSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="paragraph-spacing-solid-rounded IconParagraphSpacingSolidRounded"
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
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconParagraphSpacingBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="paragraph-spacing-bulk-rounded IconParagraphSpacingBulkRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconParagraphSpacingStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="paragraph-spacing-stroke-sharp IconParagraphSpacingStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
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

export const IconParagraphSpacingSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="paragraph-spacing-solid-sharp IconParagraphSpacingSolidSharp"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfParagraphSpacing: TheIconSelfPack = {
  name: 'ParagraphSpacing',
  StrokeRounded: IconParagraphSpacingStrokeRounded,
  DuotoneRounded: IconParagraphSpacingDuotoneRounded,
  TwotoneRounded: IconParagraphSpacingTwotoneRounded,
  SolidRounded: IconParagraphSpacingSolidRounded,
  BulkRounded: IconParagraphSpacingBulkRounded,
  StrokeSharp: IconParagraphSpacingStrokeSharp,
  SolidSharp: IconParagraphSpacingSolidSharp,
};