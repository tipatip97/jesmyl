import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12.0352 12.0885L9.11997 15.0192C7.70666 16.44 7 17.1504 7 18.0354C7 18.9204 7.70666 19.6308 9.11997 21.0516L9.45083 21.3842C9.75311 21.6881 9.90425 21.84 10.0959 21.92C10.2875 22 10.5003 22 10.9261 22H13.1444C13.5701 22 13.7829 22 13.9746 21.92C14.1662 21.84 14.3173 21.6881 14.6196 21.3842L17.9507 18.0354M12.0352 12.0885L14.0318 10.0813C15.4067 8.69915 16.0941 8.00807 16.9454 8.00009C16.9583 7.99997 16.9712 7.99997 16.9842 8.00009C17.8355 8.00807 18.5229 8.69915 19.8978 10.0813C21.2938 11.4848 21.9919 12.1865 21.9999 13.0598C22 13.073 22 13.0863 21.9999 13.0995C21.9919 13.9728 21.2938 14.6745 19.8978 16.078L17.9507 18.0354M12.0352 12.0885L17.9507 18.0354',
  d2: 'M9 9L7.5 5.5M7.5 5.5L6.18393 2.42917C6.1474 2.34393 6.12913 2.30131 6.10602 2.26511C6.01746 2.12637 5.86628 2.0315 5.69393 2.00652C5.64897 2 5.59931 2 5.5 2C5.40069 2 5.35103 2 5.30607 2.00652C5.13372 2.0315 4.98254 2.12637 4.89398 2.26511C4.87087 2.30131 4.8526 2.34393 4.81607 2.42917L3.5 5.5M7.5 5.5L3.5 5.5M3.5 5.5L2 9',
  d3: 'M14.0317 10.0813L12.0352 12.0885L17.9506 18.0354L19.8977 16.078C21.2938 14.6745 21.9918 13.9728 21.9999 13.0995C22 13.0863 22 13.073 21.9999 13.0598C21.9918 12.1865 21.2938 11.4848 19.8977 10.0813L19.8977 10.0813C18.5229 8.69915 17.8354 8.00807 16.9841 8.00009C16.9712 7.99997 16.9583 7.99997 16.9454 8.00009C16.094 8.00807 15.4066 8.69915 14.0317 10.0813Z',
  d4: 'M6.18393 2.42917L7.5 5.5L3.5 5.5L4.81607 2.42917C4.8526 2.34393 4.87087 2.30131 4.89397 2.26511C4.98254 2.12637 5.13372 2.0315 5.30607 2.00652C5.35103 2 5.40069 2 5.5 2C5.59931 2 5.64897 2 5.69393 2.00652C5.86628 2.0315 6.01746 2.12637 6.10602 2.26511C6.12913 2.30131 6.1474 2.34393 6.18393 2.42917Z',
  d5: 'M5.62522 1.125C6.00399 1.125 6.35025 1.339 6.51965 1.67779L10.0196 8.67779C10.2666 9.17176 10.0664 9.77244 9.57243 10.0194C9.07845 10.2664 8.47778 10.0662 8.23079 9.57221L7.25217 7.61498H3.99826L3.01965 9.57221C2.77266 10.0662 2.17198 10.2664 1.67801 10.0194C1.18403 9.77244 0.983803 9.17176 1.23079 8.67779L4.73079 1.67779C4.90018 1.339 5.24645 1.125 5.62522 1.125ZM4.99827 5.61498H6.25217L5.62522 4.36107L4.99827 5.61498Z',
  d6: 'M17.1162 7.37512C17.0986 7.37496 17.081 7.37496 17.0634 7.37512C16.4089 7.38126 15.8676 7.65944 15.3524 8.0561C14.8627 8.4331 14.3179 8.98086 13.6615 9.64071L12.5811 10.7269C12.3826 10.9265 12.2833 11.0263 12.2833 11.1501C12.2833 11.2739 12.3826 11.3736 12.5811 11.5732L18.7082 17.7328C18.9086 17.9343 19.0088 18.0351 19.1335 18.0351C19.2583 18.0351 19.3585 17.9343 19.5589 17.7328L20.591 16.6952C21.258 16.0248 21.8109 15.4689 22.1912 14.9691C22.5916 14.4428 22.8688 13.8937 22.8749 13.2314C22.875 13.2136 22.875 13.1957 22.8749 13.1779C22.8688 12.5156 22.5916 11.9665 22.1912 11.4402C21.8109 10.9404 21.258 10.3846 20.5911 9.71414L20.518 9.6407C19.8617 8.98086 19.3169 8.43309 18.8272 8.0561C18.3119 7.65944 17.7707 7.38126 17.1162 7.37512Z',
  d7: 'M17.6548 19.6471C17.8533 19.4476 17.9526 19.3478 17.9526 19.224C17.9526 19.1002 17.8533 19.0004 17.6548 18.8008L11.5277 12.6412C11.3272 12.4397 11.227 12.3389 11.1023 12.3389C10.9776 12.3389 10.8773 12.4397 10.6769 12.6412L8.67623 14.6525C8.00108 15.3312 7.44138 15.8938 7.05744 16.4C6.65309 16.9331 6.375 17.4896 6.375 18.1604C6.375 18.8312 6.65309 19.3877 7.05744 19.9208C7.44138 20.427 8.42745 21.4185 9.1026 22.0972C9.34365 22.3408 9.59774 22.5976 9.93196 22.7371C10.2672 22.8771 10.6281 22.8761 10.9686 22.8752H13.3518C13.6924 22.8761 14.0532 22.8771 14.3885 22.7371C14.7227 22.5976 14.9768 22.3408 15.2178 22.0972L17.6548 19.6471Z',
  d8: 'M5.62522 1.12451C6.00399 1.12451 6.35025 1.33851 6.51965 1.6773L10.0196 8.6773C10.2666 9.17128 10.0664 9.77195 9.57243 10.0189C9.07845 10.2659 8.47778 10.0657 8.23079 9.57173L7.25217 7.61449H3.99826L3.01965 9.57172C2.77266 10.0657 2.17198 10.2659 1.67801 10.0189C1.18403 9.77195 0.983803 9.17128 1.23079 8.6773L4.73079 1.6773C4.90018 1.33851 5.24645 1.12451 5.62522 1.12451ZM4.99827 5.61449H6.25217L5.62522 4.36058L4.99827 5.61449Z',
  d9: 'M17.6548 19.6475C17.8533 19.448 17.9526 19.3482 17.9526 19.2244C17.9526 19.1006 17.8533 19.0008 17.6548 18.8013L11.5277 12.6416C11.3272 12.4401 11.227 12.3394 11.1023 12.3394C10.9776 12.3394 10.8773 12.4401 10.6769 12.6416L8.67623 14.6529C8.00108 15.3316 7.44138 15.8942 7.05744 16.4004C6.65309 16.9335 6.375 17.49 6.375 18.1608C6.375 18.8316 6.65309 19.3881 7.05744 19.9212C7.44138 20.4274 8.42745 21.4189 9.1026 22.0976C9.34365 22.3412 9.59774 22.598 9.93196 22.7375C10.2672 22.8775 10.6281 22.8765 10.9686 22.8756H13.3518C13.6924 22.8765 14.0532 22.8775 14.3885 22.7375C14.7227 22.598 14.9768 22.3412 15.2178 22.0976L17.6548 19.6475Z',
  d10: 'M17.1161 7.37464C17.0985 7.37447 17.0809 7.37447 17.0633 7.37464C16.4088 7.38077 15.8675 7.65895 15.3523 8.05561C14.8626 8.43261 14.3178 8.98037 13.6614 9.64022L12.581 10.7264C12.3825 10.926 12.2832 11.0258 12.2832 11.1496C12.2832 11.2734 12.3825 11.3732 12.581 11.5727L18.7081 17.7323C18.9085 17.9338 19.0087 18.0346 19.1334 18.0346C19.2582 18.0346 19.3584 17.9338 19.5588 17.7323L20.5909 16.6947C21.2579 16.0243 21.8108 15.4685 22.1911 14.9686C22.5915 14.4424 22.8687 13.8932 22.8748 13.2309C22.8749 13.2131 22.8749 13.1952 22.8748 13.1774C22.8687 12.5151 22.5915 11.966 22.1911 11.4397C21.8108 10.9399 21.2579 10.3841 20.591 9.71365L20.5179 9.64022C19.8616 8.98037 19.3168 8.43261 18.8271 8.05561C18.3118 7.65895 17.7706 7.38077 17.1161 7.37464Z',
  d11: 'M9.5 9.50513L6.5 2.50146H5.5L2.5 9.50513M4 7.00382H8',
  d12: 'M11.7349 11.7462L5.98925 17.5036C5.98534 17.5075 5.98535 17.5139 5.98927 17.5178L9.98791 21.4985H12.9945L17.2904 17.2162M11.7349 11.7462L15.9971 7.50828C16.001 7.50439 16.0073 7.5044 16.0112 7.50831L21.4978 13.0129C21.5017 13.0168 21.5017 13.0231 21.4978 13.027L17.2904 17.2162M11.7349 11.7462L17.2904 17.2162',
  d13: 'M16.5313 6.96967C16.2384 6.67678 15.7635 6.67678 15.4706 6.96967L11.7502 10.6901L18.3112 17.2504L22.0313 13.5303C22.3242 13.2374 22.3242 12.7626 22.0313 12.4697L16.5313 6.96967Z',
  d14: 'M17.2505 18.3111L10.6895 11.7508L5.47065 16.9697C5.17775 17.2626 5.17775 17.7374 5.47065 18.0303L9.69032 22.25H13.3116L17.2505 18.3111Z',
  d15: 'M4.94481 1.75H6.93391L10.1287 9.20456L8.75 9.79544L7.87338 7.75H4.00533L3.12872 9.79544L1.75 9.20456L4.94481 1.75ZM4.64819 6.25H7.23053L5.94481 3.25H5.93391L4.64819 6.25Z',
};

export const IconEraserAutoStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="eraser-auto-stroke-rounded IconEraserAutoStrokeRounded"
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

export const IconEraserAutoDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="eraser-auto-duotone-rounded IconEraserAutoDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
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

export const IconEraserAutoTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="eraser-auto-twotone-rounded IconEraserAutoTwotoneRounded"
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

export const IconEraserAutoSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="eraser-auto-solid-rounded IconEraserAutoSolidRounded"
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
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconEraserAutoBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="eraser-auto-bulk-rounded IconEraserAutoBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconEraserAutoStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="eraser-auto-stroke-sharp IconEraserAutoStrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconEraserAutoSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="eraser-auto-solid-sharp IconEraserAutoSolidSharp"
    >
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfEraserAuto: TheIconSelfPack = {
  name: 'EraserAuto',
  StrokeRounded: IconEraserAutoStrokeRounded,
  DuotoneRounded: IconEraserAutoDuotoneRounded,
  TwotoneRounded: IconEraserAutoTwotoneRounded,
  SolidRounded: IconEraserAutoSolidRounded,
  BulkRounded: IconEraserAutoBulkRounded,
  StrokeSharp: IconEraserAutoStrokeSharp,
  SolidSharp: IconEraserAutoSolidSharp,
};