import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 18C14.2091 18 16 16.2091 16 14C16 11.9 14.6758 10.5691 12.5661 10.1461C11.713 9.97507 11 9.29474 11 8.42476C11 7.11978 12.0676 6.03085 13.3523 6.26034C17.4783 6.99743 20 9.75593 20 14C20 18.4183 16.4183 22 12 22C7.58172 22 4 18.4183 4 14V4C4 2.89543 4.89543 2 6 2C7.10457 2 8 2.89543 8 4V14C8 16.2091 9.79086 18 12 18Z',
  d2: 'M11 8.42476C11 9.29474 11.713 9.97507 12.5661 10.1461C14.6758 10.5691 16 11.9 16 14C16 16.2091 14.2091 18 12 18C9.79086 18 8 16.2091 8 14V4C8 2.89543 7.10457 2 6 2',
  d3: 'M3.25 4C3.25 2.48122 4.48122 1.25 6 1.25C7.51878 1.25 8.75 2.48122 8.75 4V14C8.75 15.7949 10.2051 17.25 12 17.25C13.7949 17.25 15.25 15.7949 15.25 14C15.25 13.1175 14.9763 12.4468 14.5216 11.9513C14.059 11.4472 13.3578 11.0698 12.4186 10.8815C11.3115 10.6595 10.25 9.74192 10.25 8.42476C10.25 6.75418 11.6452 5.1935 13.4841 5.52203C15.6808 5.91444 17.5088 6.85685 18.7883 8.32168C20.0707 9.78998 20.75 11.724 20.75 14C20.75 18.8325 16.8325 22.75 12 22.75C7.16751 22.75 3.25 18.8325 3.25 14V4Z',
  d4: 'M9.25239 15.7364C9.8286 16.6453 10.8435 17.2486 11.9993 17.2486C13.7942 17.2486 15.2493 15.7936 15.2493 13.9986C15.2493 13.1161 14.9756 12.4454 14.5209 11.9499C14.0583 11.4458 13.3571 11.0684 12.4179 10.8801C11.3107 10.6581 10.2493 9.74055 10.2493 8.42339C10.2493 6.75281 11.6444 5.19213 13.4834 5.52066C15.6801 5.91307 17.5081 6.85548 18.7875 8.32031C20.07 9.78861 20.7493 11.7227 20.7493 13.9986C20.7493 18.8311 16.8318 22.7486 11.9993 22.7486C8.43492 22.7486 5.36834 20.6174 4.00433 17.5598C3.17933 15.7104 4.99902 13.9986 6.99918 13.999C8.0117 13.999 8.71025 14.8813 9.25239 15.7364Z',
  d5: 'M12 22.002C16.417 22.002 19.9977 18.41 19.9977 13.9791C19.9977 9.54821 16.462 6.01501 12.045 6.01501V10.0147C14.2503 10.0147 15.9898 11.7975 15.9898 14.0098C15.9898 16.2222 14.202 18.0156 11.9966 18.0156C9.79122 18.0156 8.00341 16.2222 8.00341 14.0098L7.98567 2.04801C7.98567 2.02042 7.96337 1.99805 7.93586 1.99805H4.05213C4.02462 1.99805 4.00232 2.02042 4.00232 2.04801V13.9791C4.00232 18.41 7.583 22.002 12 22.002Z',
  d6: 'M8.75 14C8.75 15.7949 10.2051 17.25 12 17.25C13.7949 17.25 15.25 15.7949 15.25 14C15.25 12.2051 13.7949 10.75 12 10.75H11.25V5.25H12C16.8325 5.25 20.75 9.16751 20.75 14C20.75 18.8325 16.8325 22.75 12 22.75C7.16751 22.75 3.25 18.8325 3.25 14V1.25H8.75V14Z',
};

export const IconBeboStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bebo-stroke-rounded IconBeboStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBeboDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bebo-duotone-rounded IconBeboDuotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBeboTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bebo-twotone-rounded IconBeboTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconBeboSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bebo-solid-rounded IconBeboSolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBeboBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bebo-bulk-rounded IconBeboBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBeboStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bebo-stroke-sharp IconBeboStrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBeboSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bebo-solid-sharp IconBeboSolidSharp"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBebo: TheIconSelfPack = {
  name: 'Bebo',
  StrokeRounded: IconBeboStrokeRounded,
  DuotoneRounded: IconBeboDuotoneRounded,
  TwotoneRounded: IconBeboTwotoneRounded,
  SolidRounded: IconBeboSolidRounded,
  BulkRounded: IconBeboBulkRounded,
  StrokeSharp: IconBeboStrokeSharp,
  SolidSharp: IconBeboSolidSharp,
};