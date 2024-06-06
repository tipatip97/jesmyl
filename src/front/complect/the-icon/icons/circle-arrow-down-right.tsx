import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M14.7731 14.7731L9 9M14.7731 14.7731C14.2678 15.2784 11.8846 14.7834 11.1649 14.7731M14.7731 14.7731C15.2784 14.2678 14.7834 11.8846 14.7731 11.1649',
  d2: 'M12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75ZM8.29289 8.29289C8.68342 7.90237 9.31658 7.90237 9.70711 8.29289L12.9764 11.5622L13.091 11.4477C13.2963 11.2422 13.5135 11.0249 13.7055 10.874C13.8454 10.7639 14.3618 10.3603 15.0046 10.5787C15.648 10.7972 15.7878 11.4249 15.8252 11.5947C15.8767 11.8286 15.9048 12.1296 15.9313 12.4143L15.9313 12.4143L15.9358 12.4632C15.9778 12.9117 16.0148 13.4329 15.9941 13.8976C15.9837 14.1298 15.9577 14.3842 15.8958 14.6267C15.8383 14.8515 15.7218 15.1808 15.4513 15.4513C15.1808 15.7218 14.8515 15.8383 14.6267 15.8958C14.3842 15.9577 14.1298 15.9837 13.8976 15.9941C13.4329 16.0148 12.9117 15.9778 12.4632 15.9358L12.4143 15.9313L12.4143 15.9313C12.1296 15.9048 11.8286 15.8767 11.5947 15.8252C11.4249 15.7878 10.7972 15.648 10.5787 15.0046C10.3603 14.3618 10.7639 13.8454 10.874 13.7055C11.0249 13.5135 11.2423 13.2963 11.4477 13.091L11.5622 12.9764L8.29289 9.70711C7.90237 9.31658 7.90237 8.68342 8.29289 8.29289Z',
  d3: 'M1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12Z',
  d4: 'M9.70711 8.29289C9.31658 7.90237 8.68342 7.90237 8.29289 8.29289C7.90237 8.68342 7.90237 9.31658 8.29289 9.70711L11.5622 12.9764L11.4477 13.091C11.2423 13.2963 11.0249 13.5135 10.874 13.7055C10.7639 13.8454 10.3603 14.3618 10.5787 15.0046C10.7972 15.648 11.4249 15.7878 11.5947 15.8252C11.8286 15.8767 12.1296 15.9048 12.4143 15.9313L12.4632 15.9358C12.9117 15.9778 13.4329 16.0148 13.8976 15.9941C14.1298 15.9837 14.3842 15.9577 14.6267 15.8958C14.8515 15.8383 15.1808 15.7218 15.4513 15.4513C15.7218 15.1808 15.8383 14.8515 15.8958 14.6267C15.9577 14.3842 15.9837 14.1298 15.9941 13.8977C16.0148 13.4329 15.9778 12.9117 15.9358 12.4632L15.9313 12.4143C15.9048 12.1296 15.8767 11.8286 15.8252 11.5947C15.7878 11.4249 15.648 10.7972 15.0046 10.5787C14.3618 10.3603 13.8454 10.7639 13.7055 10.874C13.5135 11.0249 13.2963 11.2422 13.091 11.4477L12.9764 11.5622L9.70711 8.29289Z',
  d5: 'M9 9L14.7828 14.7828M10 15H15V10',
  d6: 'M1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12ZM9.88971 14.1406H13.079L8.35938 9.42096L9.42004 8.36029L14.1397 13.08V9.89062H15.6397V15.6406H9.88971V14.1406Z',
};

export const IconCircleArrowDownRightStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-down-right-stroke-rounded IconCircleArrowDownRightStrokeRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowDownRightDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-down-right-duotone-rounded IconCircleArrowDownRightDuotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="12" 
        cy="12" 
        r="10" 
        fill="var(--icon-fill)"></circle>
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowDownRightTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-down-right-twotone-rounded IconCircleArrowDownRightTwotoneRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowDownRightSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-down-right-solid-rounded IconCircleArrowDownRightSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowDownRightBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-down-right-bulk-rounded IconCircleArrowDownRightBulkRounded"
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

export const IconCircleArrowDownRightStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-down-right-stroke-sharp IconCircleArrowDownRightStrokeSharp"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowDownRightSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-down-right-solid-sharp IconCircleArrowDownRightSolidSharp"
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

export const iconPackOfCircleArrowDownRight: TheIconSelfPack = {
  name: 'CircleArrowDownRight',
  StrokeRounded: IconCircleArrowDownRightStrokeRounded,
  DuotoneRounded: IconCircleArrowDownRightDuotoneRounded,
  TwotoneRounded: IconCircleArrowDownRightTwotoneRounded,
  SolidRounded: IconCircleArrowDownRightSolidRounded,
  BulkRounded: IconCircleArrowDownRightBulkRounded,
  StrokeSharp: IconCircleArrowDownRightStrokeSharp,
  SolidSharp: IconCircleArrowDownRightSolidSharp,
};