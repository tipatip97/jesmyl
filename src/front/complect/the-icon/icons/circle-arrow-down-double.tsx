import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M15 12.9154C15 12.9154 12.7905 15.5 12 15.5C11.2094 15.5 9 12.9154 9 12.9154M15 8.50002C15 8.50002 12.7905 11.0846 12 11.0846C11.2094 11.0846 9 8.5 9 8.5',
  d2: 'M22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12ZM15.8081 13.4852C16.0952 13.1519 16.0557 12.6506 15.7198 12.3656C15.384 12.0806 14.8789 12.12 14.5918 12.4533L14.2257 12.8637C13.9974 13.1138 13.6867 13.4449 13.3527 13.7739C13.0153 14.1062 12.6702 14.4205 12.3712 14.6464C12.2211 14.7598 12.1002 14.8375 12.0109 14.8836L12 14.8891L11.9891 14.8836C11.8998 14.8375 11.7789 14.7598 11.6288 14.6464C11.3299 14.4205 10.9847 14.1062 10.6473 13.7739C10.3133 13.4449 10.0026 13.1138 9.77434 12.8637L9.4081 12.4532C9.121 12.1199 8.61602 12.0806 8.28018 12.3656C7.94434 12.6506 7.90483 13.1519 8.19192 13.4853L8.58852 13.93C8.82854 14.193 9.15971 14.5461 9.52031 14.9013C9.87749 15.2531 10.2796 15.6229 10.6597 15.9102C10.8492 16.0533 11.0507 16.1894 11.2517 16.293C11.4353 16.3877 11.7021 16.5 12 16.5C12.298 16.5 12.5647 16.3877 12.7484 16.293C12.9493 16.1894 13.1509 16.0533 13.3403 15.9102C13.7204 15.6229 14.1225 15.2531 14.4797 14.9013C14.8403 14.5461 15.1715 14.193 15.4115 13.93L15.8081 13.4852ZM14.4797 10.7261C14.8403 10.3709 15.1715 10.0179 15.4115 9.75484L15.8081 9.31012C16.011 9.07453 16.0572 8.7433 15.9266 8.46181C15.7959 8.18031 15.5122 8 15.2 8L8.80001 8.00002C8.48778 8.00002 8.20408 8.18034 8.07342 8.46184C7.94277 8.74333 7.98904 9.07456 8.19192 9.31015L8.58852 9.75487C8.82854 10.0179 9.15971 10.371 9.52031 10.7262C9.87749 11.078 10.2796 11.4478 10.6597 11.735C10.8492 11.8782 11.0507 12.0143 11.2517 12.1179C11.4353 12.2126 11.7021 12.3249 12 12.3249C12.298 12.3249 12.5647 12.2126 12.7484 12.1179C12.9493 12.0143 13.1509 11.8782 13.3403 11.735C13.7204 11.4478 14.1225 11.078 14.4797 10.7261Z',
  d3: 'M12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 6.06294 6.06294 1.25 12 1.25Z',
  d4: 'M15.7198 12.3656C16.0557 12.6506 16.0952 13.1519 15.8081 13.4852L15.4115 13.93C15.1715 14.193 14.8403 14.5461 14.4797 14.9013C14.1225 15.2531 13.7204 15.6229 13.3403 15.9102C13.1509 16.0533 12.9493 16.1894 12.7484 16.293C12.5647 16.3877 12.298 16.5 12 16.5C11.7021 16.5 11.4353 16.3877 11.2517 16.293C11.0507 16.1894 10.8492 16.0533 10.6597 15.9102C10.2796 15.6229 9.87749 15.2531 9.52031 14.9013C9.15971 14.5461 8.82854 14.193 8.58852 13.93L8.19192 13.4853C7.90483 13.1519 7.94434 12.6506 8.28018 12.3656C8.61602 12.0806 9.121 12.1199 9.4081 12.4532L9.77434 12.8637C10.0026 13.1138 10.3133 13.4449 10.6473 13.7739C10.9847 14.1062 11.3299 14.4205 11.6288 14.6464C11.7789 14.7598 11.8998 14.8375 11.9891 14.8836L12 14.8891L12.0109 14.8836C12.1002 14.8375 12.2211 14.7598 12.3712 14.6464C12.6702 14.4205 13.0153 14.1062 13.3527 13.7739C13.6867 13.4449 13.9974 13.1138 14.2257 12.8637L14.5918 12.4533C14.8789 12.12 15.384 12.0806 15.7198 12.3656Z',
  d5: 'M15.4115 9.75484C15.1715 10.0179 14.8403 10.3709 14.4797 10.7261C14.1225 11.078 13.7204 11.4478 13.3403 11.735C13.1509 11.8782 12.9493 12.0143 12.7484 12.1179C12.5647 12.2126 12.298 12.3249 12 12.3249C11.7021 12.3249 11.4353 12.2126 11.2517 12.1179C11.0507 12.0143 10.8492 11.8782 10.6597 11.735C10.2796 11.4478 9.87749 11.078 9.52031 10.7262C9.15971 10.371 8.82854 10.0179 8.58852 9.75487L8.19192 9.31015C7.98904 9.07456 7.94277 8.74333 8.07342 8.46184C8.20408 8.18034 8.48778 8.00002 8.80001 8.00002L15.2 8C15.5122 8 15.7959 8.18031 15.9266 8.46181C16.0572 8.7433 16.011 9.07453 15.8081 9.31012L15.4115 9.75484Z',
  d6: 'M8 8L12 11L16 8.00002M8 13L12 16L16 13',
  d7: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM8.45079 7.40002L7.55078 8.60002L12.0008 11.9375L16.4508 8.60004L15.5508 7.40004L12.0008 10.0625L8.45079 7.40002ZM8.45079 12.4L7.55078 13.6L12.0008 16.9375L16.4508 13.6L15.5508 12.4L12.0008 15.0625L8.45079 12.4Z',
};

export const IconCircleArrowDownDoubleStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-down-double-stroke-rounded IconCircleArrowDownDoubleStrokeRounded"
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

export const IconCircleArrowDownDoubleDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-down-double-duotone-rounded IconCircleArrowDownDoubleDuotoneRounded"
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

export const IconCircleArrowDownDoubleTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-down-double-twotone-rounded IconCircleArrowDownDoubleTwotoneRounded"
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

export const IconCircleArrowDownDoubleSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-down-double-solid-rounded IconCircleArrowDownDoubleSolidRounded"
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

export const IconCircleArrowDownDoubleBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-down-double-bulk-rounded IconCircleArrowDownDoubleBulkRounded"
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
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowDownDoubleStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-down-double-stroke-sharp IconCircleArrowDownDoubleStrokeSharp"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowDownDoubleSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-down-double-solid-sharp IconCircleArrowDownDoubleSolidSharp"
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

export const iconPackOfCircleArrowDownDouble: TheIconSelfPack = {
  name: 'CircleArrowDownDouble',
  StrokeRounded: IconCircleArrowDownDoubleStrokeRounded,
  DuotoneRounded: IconCircleArrowDownDoubleDuotoneRounded,
  TwotoneRounded: IconCircleArrowDownDoubleTwotoneRounded,
  SolidRounded: IconCircleArrowDownDoubleSolidRounded,
  BulkRounded: IconCircleArrowDownDoubleBulkRounded,
  StrokeSharp: IconCircleArrowDownDoubleStrokeSharp,
  SolidSharp: IconCircleArrowDownDoubleSolidSharp,
};