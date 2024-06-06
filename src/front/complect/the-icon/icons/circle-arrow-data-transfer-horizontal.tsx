import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M16.5 10.2857H8.56622C7.91964 10.2857 7.59635 10.2857 7.51589 10.1093C7.43543 9.93296 7.66404 9.72538 8.12124 9.31022L9.56415 8M7.5 13.7143H15.4338C16.0804 13.7143 16.4037 13.7143 16.4841 13.8907C16.5646 14.067 16.336 14.2746 15.8788 14.6898L14.4358 16',
  d2: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM17.5029 10.2857C17.5029 9.73344 17.0552 9.28572 16.5029 9.28572H10.5671V8C10.5671 7.76008 10.4814 7.51937 10.3074 7.32776C9.93613 6.91889 9.3037 6.88841 8.89483 7.25968L7.41401 8.6043C7.21978 8.78047 7.00081 8.97907 6.84978 9.16139C6.72705 9.30954 6.30248 9.85242 6.609 10.5244C6.89109 11.1428 7.52065 11.2319 7.70432 11.2555C7.94129 11.286 8.24068 11.2858 8.51977 11.2857L16.5029 11.2857C17.0552 11.2857 17.5029 10.838 17.5029 10.2857ZM13.6984 16.6723C14.0697 17.0811 14.7021 17.1116 15.111 16.7403L16.5918 15.3957L16.5919 15.3957C16.7861 15.2195 17.005 15.0209 17.1561 14.8386C17.2788 14.6905 17.7034 14.1476 17.3968 13.4756C17.1147 12.8572 16.4852 12.7681 16.3015 12.7445C16.0646 12.7141 15.7652 12.7142 15.4861 12.7143L7.50292 12.7143C6.95063 12.7143 6.50292 13.162 6.50292 13.7143C6.50292 14.2666 6.95063 14.7143 7.50292 14.7143H13.4388V16C13.4387 16.2399 13.5244 16.4806 13.6984 16.6723Z',
  d3: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z',
  d4: 'M16.5029 9.28572C17.0552 9.28572 17.5029 9.73344 17.5029 10.2857C17.5029 10.838 17.0552 11.2857 16.5029 11.2857L8.51977 11.2857C8.24068 11.2858 7.94129 11.286 7.70432 11.2555C7.52065 11.2319 6.89109 11.1428 6.609 10.5244C6.30248 9.85242 6.72705 9.30954 6.84978 9.16139C7.00081 8.97907 7.21978 8.78047 7.41401 8.6043L8.89483 7.25968C9.3037 6.88841 9.93613 6.91889 10.3074 7.32776C10.4814 7.51937 10.5671 7.76008 10.5671 8V9.28572H16.5029Z',
  d5: 'M15.111 16.7403C14.7021 17.1116 14.0697 17.0811 13.6984 16.6723C13.5244 16.4806 13.4387 16.2399 13.4388 16V14.7143H7.50292C6.95063 14.7143 6.50292 14.2666 6.50292 13.7143C6.50292 13.162 6.95063 12.7143 7.50292 12.7143L15.4861 12.7143C15.7652 12.7142 16.0646 12.7141 16.3015 12.7445C16.4852 12.7681 17.1147 12.8572 17.3968 13.4756C17.7034 14.1476 17.2788 14.6905 17.1561 14.8386C17.005 15.0209 16.7861 15.2195 16.5919 15.3957L16.5918 15.3957L15.111 16.7403Z',
  d6: 'M14.5001 16.5L16.5001 14L7.5 14M9.50009 7.5L7.50009 10L16.5002 10',
  d7: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM8.91436 7.03125L6.91436 9.53125C6.73425 9.75638 6.69914 10.0648 6.82403 10.3247C6.94892 10.5845 7.2117 10.7498 7.50001 10.7498L16.5001 10.7498V9.24977L9.06048 9.24977L10.0857 7.96829L8.91436 7.03125ZM16.5 13.2498L7.49992 13.2498V14.7498L14.9395 14.7498L13.9144 16.0312L15.0857 16.9683L17.0857 14.4683C17.2658 14.2432 17.3009 13.9347 17.176 13.6749C17.0511 13.415 16.7883 13.2498 16.5 13.2498Z',
};

export const IconCircleArrowDataTransferHorizontalStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-data-transfer-horizontal-stroke-rounded IconCircleArrowDataTransferHorizontalStrokeRounded"
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

export const IconCircleArrowDataTransferHorizontalDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-data-transfer-horizontal-duotone-rounded IconCircleArrowDataTransferHorizontalDuotoneRounded"
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

export const IconCircleArrowDataTransferHorizontalTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-data-transfer-horizontal-twotone-rounded IconCircleArrowDataTransferHorizontalTwotoneRounded"
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

export const IconCircleArrowDataTransferHorizontalSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-data-transfer-horizontal-solid-rounded IconCircleArrowDataTransferHorizontalSolidRounded"
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

export const IconCircleArrowDataTransferHorizontalBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-data-transfer-horizontal-bulk-rounded IconCircleArrowDataTransferHorizontalBulkRounded"
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

export const IconCircleArrowDataTransferHorizontalStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-data-transfer-horizontal-stroke-sharp IconCircleArrowDataTransferHorizontalStrokeSharp"
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

export const IconCircleArrowDataTransferHorizontalSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-data-transfer-horizontal-solid-sharp IconCircleArrowDataTransferHorizontalSolidSharp"
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

export const iconPackOfCircleArrowDataTransferHorizontal: TheIconSelfPack = {
  name: 'CircleArrowDataTransferHorizontal',
  StrokeRounded: IconCircleArrowDataTransferHorizontalStrokeRounded,
  DuotoneRounded: IconCircleArrowDataTransferHorizontalDuotoneRounded,
  TwotoneRounded: IconCircleArrowDataTransferHorizontalTwotoneRounded,
  SolidRounded: IconCircleArrowDataTransferHorizontalSolidRounded,
  BulkRounded: IconCircleArrowDataTransferHorizontalBulkRounded,
  StrokeSharp: IconCircleArrowDataTransferHorizontalStrokeSharp,
  SolidSharp: IconCircleArrowDataTransferHorizontalSolidSharp,
};