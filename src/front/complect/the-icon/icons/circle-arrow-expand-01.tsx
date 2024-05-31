import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7.93668 16.0634C7.41936 15.5461 7.50535 13.3483 7.50535 13.3483M7.93668 16.0634C8.45401 16.5808 10.6517 16.4946 10.6517 16.4946M7.93668 16.0634L11 13M16.0634 7.93661C15.5461 7.41928 13.3484 7.50537 13.3484 7.50537M16.0634 7.93661C16.5808 8.45394 16.4946 10.6516 16.4946 10.6516M16.0634 7.93661L13 11',
  d2: 'M12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 6.06294 6.06294 1.25 12 1.25ZM13.9101 6.55196C13.4964 6.53024 13.1435 6.84796 13.1218 7.2616C13.1102 7.48255 13.1954 7.68618 13.3404 7.83126L14.0475 8.53836L12.5 10.0858C12.1095 10.4764 12.1095 11.1095 12.5 11.5001C12.8906 11.8906 13.5237 11.8906 13.9142 11.5001L15.4617 9.95258L16.1691 10.66C16.3142 10.8048 16.5177 10.8899 16.7385 10.8783C17.1521 10.8566 17.4698 10.5037 17.4481 10.09C17.4438 10.0073 17.4505 9.84737 17.4644 9.58823L17.4675 9.53159C17.4798 9.30472 17.4945 9.0342 17.4988 8.76598C17.5034 8.47871 17.497 8.16199 17.4553 7.8765C17.4201 7.635 17.3379 7.23254 17.0527 6.94738C16.7676 6.66221 16.3651 6.58 16.1236 6.54474C15.8381 6.50307 15.5214 6.49667 15.2341 6.50128C14.9659 6.50558 14.6954 6.52026 14.4686 6.53257L14.4119 6.53564C14.1527 6.54962 13.9928 6.55631 13.9101 6.55196ZM10.09 17.448C10.5037 17.4698 10.8566 17.152 10.8783 16.7384C10.8899 16.5176 10.8048 16.3141 10.66 16.169L9.95258 15.4616L11.5 13.9142C11.8906 13.5237 11.8906 12.8905 11.5 12.5C11.1095 12.1094 10.4763 12.1094 10.0858 12.5L8.53836 14.0474L7.83126 13.3403C7.68618 13.1953 7.48255 13.1101 7.26161 13.1217C6.84796 13.1434 6.53024 13.4963 6.55196 13.91C6.55631 13.9927 6.54962 14.1526 6.53564 14.4118L6.53257 14.4684C6.52026 14.6953 6.50559 14.9658 6.50128 15.234C6.49667 15.5213 6.50307 15.838 6.54474 16.1235C6.58 16.365 6.66222 16.7675 6.94738 17.0526C7.23254 17.3378 7.635 17.42 7.8765 17.4553C8.16199 17.4969 8.47872 17.5033 8.76598 17.4987C9.03417 17.4944 9.30465 17.4797 9.5315 17.4674L9.53156 17.4674L9.58823 17.4644C9.84737 17.4504 10.0073 17.4437 10.09 17.448Z',
  d3: 'M22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12Z',
  d4: 'M10.8783 16.7384C10.8566 17.152 10.5037 17.4698 10.09 17.448C10.0073 17.4437 9.84737 17.4504 9.58823 17.4644L9.53156 17.4674C9.3047 17.4797 9.03419 17.4944 8.76598 17.4987C8.47872 17.5033 8.16199 17.4969 7.8765 17.4553C7.635 17.42 7.23254 17.3378 6.94738 17.0526C6.66222 16.7675 6.58 16.365 6.54474 16.1235C6.50307 15.838 6.49667 15.5213 6.50128 15.234C6.50559 14.9658 6.52026 14.6953 6.53257 14.4684L6.53564 14.4118C6.54962 14.1526 6.55631 13.9927 6.55196 13.91C6.53024 13.4963 6.84796 13.1434 7.26161 13.1217C7.48256 13.1101 7.68618 13.1953 7.83126 13.3403L8.53836 14.0474L10.0858 12.5C10.4763 12.1094 11.1095 12.1094 11.5 12.5C11.8906 12.8905 11.8906 13.5237 11.5 13.9142L9.95258 15.4616L10.66 16.169C10.8048 16.3141 10.8899 16.5176 10.8783 16.7384Z',
  d5: 'M13.1218 7.2616C13.1435 6.84796 13.4964 6.53024 13.9101 6.55196C13.9928 6.55631 14.1527 6.54962 14.4119 6.53564L14.4686 6.53257C14.6954 6.52026 14.9659 6.50558 15.2341 6.50128C15.5214 6.49667 15.8381 6.50307 16.1236 6.54474C16.3651 6.58 16.7676 6.66221 17.0527 6.94738C17.3379 7.23254 17.4201 7.635 17.4553 7.8765C17.497 8.16199 17.5034 8.47871 17.4988 8.76598C17.4945 9.0342 17.4798 9.30472 17.4675 9.53159L17.4644 9.58823C17.4505 9.84737 17.4438 10.0073 17.4481 10.09C17.4698 10.5037 17.1521 10.8566 16.7385 10.8783C16.5177 10.8899 16.3142 10.8048 16.1691 10.66L15.4617 9.95258L13.9142 11.5001C13.5237 11.8906 12.8906 11.8906 12.5 11.5001C12.1095 11.1095 12.1095 10.4764 12.5 10.0858L14.0475 8.53836L13.3404 7.83126C13.1954 7.68618 13.1102 7.48255 13.1218 7.2616Z',
  d6: 'M12.5 7.5L16.5 7.50002V11.5M11.5 16.5L7.49998 16.5V12.5M13.0002 10.9998L16.2999 7.70011M11.0453 12.9547L7.70722 16.2928',
  d7: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM12 8.75L14.1893 8.75001L11.9697 10.9697L13.0303 12.0303L15.25 9.81067V12H16.75V7.25002L12 7.25L12 8.75ZM10.9697 11.9697L8.75 14.1893V12H7.25V16.75L12 16.75L12 15.25L9.81066 15.25L12.0303 13.0303L10.9697 11.9697Z',
} as const;

export const IconCircleArrowExpand01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-expand-01-stroke-rounded IconCircleArrowExpand01StrokeRounded"
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

export const IconCircleArrowExpand01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-expand-01-duotone-rounded IconCircleArrowExpand01DuotoneRounded"
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

export const IconCircleArrowExpand01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-expand-01-twotone-rounded IconCircleArrowExpand01TwotoneRounded"
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

export const IconCircleArrowExpand01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-expand-01-solid-rounded IconCircleArrowExpand01SolidRounded"
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

export const IconCircleArrowExpand01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-expand-01-bulk-rounded IconCircleArrowExpand01BulkRounded"
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

export const IconCircleArrowExpand01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-expand-01-stroke-sharp IconCircleArrowExpand01StrokeSharp"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowExpand01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-expand-01-solid-sharp IconCircleArrowExpand01SolidSharp"
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

export const iconPackOfCircleArrowExpand01: TheIconSelfPack = {
  name: 'CircleArrowExpand01',
  StrokeRounded: IconCircleArrowExpand01StrokeRounded,
  DuotoneRounded: IconCircleArrowExpand01DuotoneRounded,
  TwotoneRounded: IconCircleArrowExpand01TwotoneRounded,
  SolidRounded: IconCircleArrowExpand01SolidRounded,
  BulkRounded: IconCircleArrowExpand01BulkRounded,
  StrokeSharp: IconCircleArrowExpand01StrokeSharp,
  SolidSharp: IconCircleArrowExpand01SolidSharp,
};