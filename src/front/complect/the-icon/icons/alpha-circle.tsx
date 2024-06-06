import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M15.0011 8C15.1077 8.8641 15.0011 10.2323 14.6013 11.8284C14.2548 12.9686 13.1621 16.2569 10.3236 15.9809C7.87156 15.6569 6.84544 13.2566 7.01868 11.6844C7.08531 10.3643 8.07145 8.036 10.6967 8C13.0554 8.20402 13.6551 10.2082 13.9883 11.9004C14.3481 13.4606 14.3081 14.2287 14.9078 15.2968C15.2676 15.8849 15.9472 16.1009 16.4936 15.9569C16.9334 15.7769 17 15.3928 17 15.1048',
  d2: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z',
  d3: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM15.9956 7.90673C15.9441 7.35685 15.4565 6.95288 14.9067 7.00443C14.3568 7.05598 13.9528 7.54353 14.0044 8.09341C14.0294 8.36097 14.037 8.66344 14.0262 8.98901C14.0079 8.95882 13.9892 8.92883 13.9701 8.89904C13.3204 7.88248 12.3041 7.14531 10.7761 7.0043C10.7456 7.00148 10.7149 7.00007 10.6842 7.00007C8.02136 7.00007 6 9.31766 6 12.0001C6 14.6825 8.02136 17.0001 10.6842 17.0001C12.0388 17.0001 13.0782 16.3542 13.8541 15.4607C14.0249 15.8122 14.2577 16.1599 14.5889 16.4391C15.0288 16.81 15.5715 17.0001 16.1876 17.0001C16.7651 17.0001 17.2712 16.7668 17.606 16.3349C17.9107 15.9417 18 15.4802 18 15.1112C18 14.5589 17.5523 14.1112 17 14.1112C16.4925 14.1112 16.0733 14.4893 16.0086 14.9792C15.9466 14.9616 15.9082 14.9355 15.878 14.91C15.803 14.8468 15.6986 14.7134 15.5873 14.4378C15.4361 14.0639 15.3355 13.6097 15.231 13.0612C15.8915 11.3161 16.1278 9.31613 15.9956 7.90673ZM13.0646 12.3563C13.0949 12.5132 13.1249 12.6775 13.1557 12.8462C12.5124 14.2609 11.6577 15.0001 10.6842 15.0001C9.2776 15.0001 8 13.7359 8 12.0001C8 10.2827 9.25055 9.02702 10.6394 9.0005C11.4893 9.09053 11.9553 9.46043 12.2849 9.97609C12.6643 10.5697 12.8768 11.3837 13.0646 12.3563Z',
  d4: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z',
  d5: 'M14.9067 7.00443C15.4565 6.95288 15.9441 7.35685 15.9956 7.90673C16.1278 9.31613 15.8915 11.3161 15.231 13.0612C15.3355 13.6097 15.4361 14.0639 15.5873 14.4378C15.6986 14.7134 15.803 14.8468 15.878 14.91C15.9082 14.9355 15.9466 14.9616 16.0086 14.9792C16.0733 14.4893 16.4925 14.1112 17 14.1112C17.5523 14.1112 18 14.5589 18 15.1112C18 15.4802 17.9107 15.9417 17.606 16.3349C17.2712 16.7668 16.7651 17.0001 16.1876 17.0001C15.5715 17.0001 15.0288 16.81 14.5889 16.4391C14.2577 16.1599 14.0249 15.8122 13.8541 15.4607C13.0782 16.3542 12.0388 17.0001 10.6842 17.0001C8.02136 17.0001 6 14.6825 6 12.0001C6 9.31766 8.02136 7.00007 10.6842 7.00007C10.7149 7.00007 10.7456 7.00148 10.7761 7.0043C12.3041 7.14531 13.3204 7.88248 13.9701 8.89904C13.9892 8.92883 14.0079 8.95882 14.0262 8.98901C14.037 8.66344 14.0294 8.36097 14.0044 8.09341C13.9528 7.54353 14.3568 7.05598 14.9067 7.00443ZM13.1557 12.8462C13.1249 12.6775 13.0949 12.5132 13.0646 12.3563C12.8768 11.3837 12.6643 10.5697 12.2849 9.97609C11.9553 9.46043 11.4893 9.09053 10.6394 9.0005C9.25055 9.02702 8 10.2827 8 12.0001C8 13.7359 9.2776 15.0001 10.6842 15.0001C11.6577 15.0001 12.5124 14.2609 13.1557 12.8462Z',
  d6: 'M16.9946 14.1114C16.9946 14.6957 16.8237 15.2743 16.6987 15.5316C16.2844 16.5547 14.9146 15.7937 14.6101 14.6944C14.5295 14.4035 14.3707 13.721 14.2015 12.9755M14.2015 12.9755C13.9954 12.0675 13.774 11.066 13.6599 10.5648C13.1496 8.82213 11.773 7.95414 10.424 8.01793C9.22865 8.07444 7.97676 8.84371 7.33713 10.3155C6.97991 11.1376 6.94806 11.95 7.05776 12.6679C7.20593 13.6375 7.64617 14.4461 8.20986 14.9822C9.27658 15.9967 10.7102 16.1955 11.7811 15.7747C12.6275 15.4421 13.2223 14.7775 13.6599 14.0493C13.868 13.7029 14.0475 13.3423 14.2015 12.9755ZM14.2015 12.9755C14.9773 11.1278 15.1073 9.12496 15.0035 8.01793',
  d7: 'M8 12C8 10.2826 9.25055 9.02696 10.6394 9.00043C11.4893 9.09046 11.9553 9.46036 12.2849 9.97602C12.6643 10.5697 12.8768 11.3836 13.0646 12.3562C13.0949 12.5131 13.1249 12.6774 13.1557 12.8462C12.5124 14.2609 11.6577 15 10.6842 15C9.2776 15 8 13.7359 8 12Z',
  d8: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM13.9701 8.89898C13.9892 8.92876 14.0079 8.95875 14.0262 8.98894C14.037 8.66337 14.0294 8.3609 14.0044 8.09334L15.9956 7.90666C16.1278 9.31606 15.8915 11.3161 15.231 13.0612C15.3355 13.6096 15.4361 14.0639 15.5873 14.4377C15.6938 14.7013 15.7939 14.8348 15.868 14.9012C15.9107 14.758 15.9444 14.5966 15.9675 14.4441C15.9926 14.278 16 14.1569 16 14.1111H18C18 14.4336 17.9297 15.0057 17.7707 15.5183C17.6918 15.7731 17.5691 16.0865 17.3718 16.3569C17.1786 16.6215 16.792 17 16.1876 17C15.5715 17 15.0288 16.8099 14.5889 16.4391C14.2577 16.1598 14.0249 15.8121 13.8541 15.4606C13.0782 16.3541 12.0388 17 10.6842 17C8.02136 17 6 14.6824 6 12C6 9.31759 8.02136 7 10.6842 7C10.7149 7 10.7456 7.00141 10.7761 7.00423C12.3041 7.14525 13.3204 7.88241 13.9701 8.89898Z',
};

export const IconAlphaCircleStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="alpha-circle-stroke-rounded IconAlphaCircleStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconAlphaCircleDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="alpha-circle-duotone-rounded IconAlphaCircleDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAlphaCircleTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="alpha-circle-twotone-rounded IconAlphaCircleTwotoneRounded"
    >
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAlphaCircleSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="alpha-circle-solid-rounded IconAlphaCircleSolidRounded"
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

export const IconAlphaCircleBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="alpha-circle-bulk-rounded IconAlphaCircleBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAlphaCircleStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="alpha-circle-stroke-sharp IconAlphaCircleStrokeSharp"
    >
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconAlphaCircleSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="alpha-circle-solid-sharp IconAlphaCircleSolidSharp"
    >
      <path 
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

export const iconPackOfAlphaCircle: TheIconSelfPack = {
  name: 'AlphaCircle',
  StrokeRounded: IconAlphaCircleStrokeRounded,
  DuotoneRounded: IconAlphaCircleDuotoneRounded,
  TwotoneRounded: IconAlphaCircleTwotoneRounded,
  SolidRounded: IconAlphaCircleSolidRounded,
  BulkRounded: IconAlphaCircleBulkRounded,
  StrokeSharp: IconAlphaCircleStrokeSharp,
  SolidSharp: IconAlphaCircleSolidSharp,
};