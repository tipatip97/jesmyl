import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z',
  d2: 'M19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12Z',
  d3: 'M12 2V5M19 12H22M19 19L17 17',
  d4: 'M10.4375 14.6667L10.4375 9.33333M12 9.33333V8M12 16V14.6667M10.4375 12H13.5625M13.5625 12C14.0803 12 14.5 12.4477 14.5 13V13.6667C14.5 14.219 14.0803 14.6667 13.5625 14.6667H9.5M13.5625 12C14.0803 12 14.5 11.5523 14.5 11V10.3333C14.5 9.78105 14.0803 9.33333 13.5625 9.33333H9.5',
  d5: 'M12 7.25C12.4142 7.25 12.75 7.58579 12.75 8V8.58333H13.5625C14.5393 8.58333 15.25 9.41317 15.25 10.3333V11C15.25 11.3624 15.1398 11.7108 14.9465 12C15.1398 12.2892 15.25 12.6376 15.25 13V13.6667C15.25 14.5868 14.5393 15.4167 13.5625 15.4167H12.75V16C12.75 16.4142 12.4142 16.75 12 16.75C11.5858 16.75 11.25 16.4142 11.25 16V15.4167H9.5C9.08579 15.4167 8.75 15.0809 8.75 14.6667C8.75 14.2525 9.08579 13.9167 9.5 13.9167H9.6875L9.6875 10.0833H9.5C9.08579 10.0833 8.75 9.74755 8.75 9.33333C8.75 8.91912 9.08579 8.58333 9.5 8.58333H11.25V8C11.25 7.58579 11.5858 7.25 12 7.25ZM11.1875 10.0833V11.25H13.5625C13.6212 11.25 13.75 11.1844 13.75 11V10.3333C13.75 10.1489 13.6212 10.0833 13.5625 10.0833H11.1875ZM13.5625 12.75H11.1875L11.1875 13.9167H13.5625C13.6212 13.9167 13.75 13.8511 13.75 13.6667V13C13.75 12.8156 13.6212 12.75 13.5625 12.75Z',
  d6: 'M11.262 1.24951C5.66814 1.63501 1.25 6.29486 1.25 11.9866C1.25 17.9308 6.06871 22.7495 12.0129 22.7495C14.7147 22.7495 17.184 21.754 19.074 20.1097L15.8749 16.9105C14.8113 17.7459 13.4703 18.2441 12.0129 18.2441C8.55697 18.2441 5.7554 15.4425 5.7554 11.9866C5.7554 8.78482 8.16011 6.14467 11.262 5.77371V1.24951Z',
  d7: 'M12.7638 5.77371C15.6195 6.11523 17.8843 8.38003 18.2258 11.2357H22.75C22.3816 5.88995 18.1096 1.61792 12.7638 1.24951V5.77371Z',
  d8: 'M22.75 12.7375H18.2258C18.0864 13.9032 17.6265 14.9704 16.9368 15.8486L20.1359 19.0477C21.6266 17.3343 22.5841 15.1448 22.75 12.7375Z',
  d9: 'M12.7637 5.77371C15.6194 6.11523 17.8842 8.38003 18.2257 11.2357H22.7499C22.3815 5.88995 18.1094 1.61792 12.7637 1.24951V5.77371Z',
  d10: 'M12.7633 4.26417C16.4492 4.61812 19.3819 7.55078 19.7358 11.2367H22.7495C22.3811 5.89092 18.1091 1.61889 12.7633 1.25049V4.26417Z',
  d11: 'M11.2615 1.25049C5.66765 1.63599 1.24951 6.29584 1.24951 11.9876C1.24951 17.9318 6.06822 22.7505 12.0124 22.7505C14.7142 22.7505 17.1836 21.7549 19.0735 20.1106L16.9425 17.9796C15.602 19.0838 13.8847 19.7469 12.0124 19.7469C7.72706 19.7469 4.25311 16.2729 4.25311 11.9876C4.25311 7.95557 7.32849 4.64185 11.2615 4.26417V1.25049Z',
  d12: 'M18.0044 16.9177L20.1355 19.0487C21.6261 17.3353 22.5836 15.1458 22.7495 12.7385H19.7358C19.5842 14.3177 18.9592 15.7586 18.0044 16.9177Z',
  d13: 'M5.74951 12.0005C5.74951 15.4523 8.54773 18.2505 11.9995 18.2505C15.4513 18.2505 18.2495 15.4523 18.2495 12.0005C18.2495 8.54871 15.4513 5.75049 11.9995 5.75049C8.54773 5.75049 5.74951 8.54871 5.74951 12.0005ZM12.7495 8.58382V7.25049H11.2495V8.58382L8.74951 8.58382V10.0838H9.68701L9.68701 13.9172L8.74951 13.9172V15.4172L11.2495 15.4172V16.7505H12.7495V15.4172H13.562C14.5389 15.4172 15.2495 14.5873 15.2495 13.6672V13.0005C15.2495 12.6381 15.1393 12.2897 14.946 12.0005C15.1393 11.7113 15.2495 11.3629 15.2495 11.0005V10.3338C15.2495 9.41365 14.5389 8.58382 13.562 8.58382H12.7495ZM11.187 11.2505L11.187 10.0838L13.562 10.0838C13.6207 10.0838 13.7495 10.1494 13.7495 10.3338V11.0005C13.7495 11.1849 13.6207 11.2505 13.562 11.2505L11.187 11.2505ZM11.187 12.7505L13.562 12.7505C13.6207 12.7505 13.7495 12.8161 13.7495 13.0005V13.6672C13.7495 13.8516 13.6207 13.9172 13.562 13.9172H11.187V12.7505Z',
} as const;

export const IconBitcoinPieChartStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-pie-chart-stroke-rounded IconBitcoinPieChartStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinPieChartDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-pie-chart-duotone-rounded IconBitcoinPieChartDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinPieChartTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-pie-chart-twotone-rounded IconBitcoinPieChartTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinPieChartSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-pie-chart-solid-rounded IconBitcoinPieChartSolidRounded"
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
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinPieChartBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-pie-chart-bulk-rounded IconBitcoinPieChartBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinPieChartStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-pie-chart-stroke-sharp IconBitcoinPieChartStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinPieChartSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-pie-chart-solid-sharp IconBitcoinPieChartSolidSharp"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBitcoinPieChart: TheIconSelfPack = {
  name: 'BitcoinPieChart',
  StrokeRounded: IconBitcoinPieChartStrokeRounded,
  DuotoneRounded: IconBitcoinPieChartDuotoneRounded,
  TwotoneRounded: IconBitcoinPieChartTwotoneRounded,
  SolidRounded: IconBitcoinPieChartSolidRounded,
  BulkRounded: IconBitcoinPieChartBulkRounded,
  StrokeSharp: IconBitcoinPieChartStrokeSharp,
  SolidSharp: IconBitcoinPieChartSolidSharp,
};