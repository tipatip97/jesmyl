import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M10.2857 7.5L10.2857 15.4338C10.2857 16.0804 10.2857 16.4037 10.1093 16.4841C9.93296 16.5646 9.72538 16.336 9.31022 15.8788L8 14.4358M13.7143 16.5L13.7143 8.56622C13.7143 7.91964 13.7143 7.59635 13.8907 7.51589C14.067 7.43543 14.2746 7.66404 14.6898 8.12124L16 9.56415',
  d2: 'M1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12ZM10.2857 6.49708C9.73344 6.49708 9.28572 6.9448 9.28572 7.49708L9.28572 13.4329L8 13.4329C7.76008 13.4329 7.51937 13.5186 7.32776 13.6926C6.91889 14.0639 6.88841 14.6963 7.25968 15.1052L8.60429 16.586C8.78047 16.7802 8.97907 16.9992 9.16139 17.1502C9.30954 17.273 9.85242 17.6975 10.5244 17.391C11.1428 17.1089 11.2319 16.4793 11.2555 16.2957C11.286 16.0587 11.2858 15.7593 11.2857 15.4802L11.2857 7.49708C11.2857 6.9448 10.838 6.49708 10.2857 6.49708ZM16.6723 10.3016C17.0811 9.93029 17.1116 9.29786 16.7403 8.88899L15.3957 7.40817L15.3957 7.40814L15.3957 7.40812C15.2195 7.2139 15.0209 6.99496 14.8386 6.84394C14.6905 6.72121 14.1476 6.29664 13.4756 6.60316C12.8572 6.88526 12.7681 7.51481 12.7445 7.69848C12.7141 7.93545 12.7142 8.23484 12.7143 8.51393L12.7143 16.4971C12.7143 17.0494 13.162 17.4971 13.7143 17.4971C14.2666 17.4971 14.7143 17.0494 14.7143 16.4971L14.7143 10.5612L16 10.5612C16.2399 10.5613 16.4806 10.4756 16.6723 10.3016Z',
  d3: 'M12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75Z',
  d4: 'M9.28572 7.49708C9.28572 6.9448 9.73344 6.49708 10.2857 6.49708C10.838 6.49708 11.2857 6.9448 11.2857 7.49708L11.2857 15.4802C11.2858 15.7593 11.286 16.0587 11.2555 16.2957C11.2319 16.4793 11.1428 17.1089 10.5244 17.391C9.85242 17.6975 9.30954 17.273 9.16139 17.1502C8.97907 16.9992 8.78047 16.7802 8.6043 16.586L7.25968 15.1052C6.88841 14.6963 6.91889 14.0639 7.32776 13.6926C7.51937 13.5186 7.76008 13.4329 8 13.4329L9.28572 13.4329L9.28572 7.49708Z',
  d5: 'M16.7403 8.88899C17.1116 9.29786 17.0811 9.93029 16.6723 10.3016C16.4806 10.4756 16.2399 10.5613 16 10.5612L14.7143 10.5612L14.7143 16.4971C14.7143 17.0494 14.2666 17.4971 13.7143 17.4971C13.162 17.4971 12.7143 17.0494 12.7143 16.4971L12.7143 8.51393C12.7142 8.23484 12.7141 7.93545 12.7445 7.69848C12.7681 7.51481 12.8572 6.88525 13.4756 6.60316C14.1476 6.29664 14.6905 6.72121 14.8386 6.84394C15.0209 6.99496 15.2195 7.21392 15.3957 7.40814L15.3957 7.40817L16.7403 8.88899Z',
  d6: 'M16.5 9.50009L14 7.50009L14 16.5002M7.5 14.5001L10 16.5001L10 7.5',
  d7: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM14.4683 6.91436C14.2432 6.73425 13.9347 6.69914 13.6749 6.82403C13.415 6.94892 13.2498 7.2117 13.2498 7.50001V16.5001H14.7498V9.06048L16.0312 10.0857L16.9683 8.91436L14.4683 6.91436ZM10.7498 16.5V7.49992H9.24977L9.24977 14.9395L7.96829 13.9144L7.03125 15.0857L9.53125 17.0857C9.75638 17.2658 10.0648 17.3009 10.3247 17.176C10.5845 17.0511 10.7498 16.7883 10.7498 16.5Z',
};

export const IconCircleArrowDataTransferVerticalStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-data-transfer-vertical-stroke-rounded IconCircleArrowDataTransferVerticalStrokeRounded"
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

export const IconCircleArrowDataTransferVerticalDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-data-transfer-vertical-duotone-rounded IconCircleArrowDataTransferVerticalDuotoneRounded"
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

export const IconCircleArrowDataTransferVerticalTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-data-transfer-vertical-twotone-rounded IconCircleArrowDataTransferVerticalTwotoneRounded"
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

export const IconCircleArrowDataTransferVerticalSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-data-transfer-vertical-solid-rounded IconCircleArrowDataTransferVerticalSolidRounded"
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

export const IconCircleArrowDataTransferVerticalBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-data-transfer-vertical-bulk-rounded IconCircleArrowDataTransferVerticalBulkRounded"
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

export const IconCircleArrowDataTransferVerticalStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-data-transfer-vertical-stroke-sharp IconCircleArrowDataTransferVerticalStrokeSharp"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowDataTransferVerticalSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-data-transfer-vertical-solid-sharp IconCircleArrowDataTransferVerticalSolidSharp"
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

export const iconPackOfCircleArrowDataTransferVertical: TheIconSelfPack = {
  name: 'CircleArrowDataTransferVertical',
  StrokeRounded: IconCircleArrowDataTransferVerticalStrokeRounded,
  DuotoneRounded: IconCircleArrowDataTransferVerticalDuotoneRounded,
  TwotoneRounded: IconCircleArrowDataTransferVerticalTwotoneRounded,
  SolidRounded: IconCircleArrowDataTransferVerticalSolidRounded,
  BulkRounded: IconCircleArrowDataTransferVerticalBulkRounded,
  StrokeSharp: IconCircleArrowDataTransferVerticalStrokeSharp,
  SolidSharp: IconCircleArrowDataTransferVerticalSolidSharp,
};