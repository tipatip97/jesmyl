import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 14L12 22',
  d2: 'M18 22H6',
  d3: 'M17.2624 17.9508C15.8454 17.1373 15.1388 15.7164 15.6842 14.7771C16.2297 13.8377 17.8205 13.7357 19.2376 14.5492C20.6546 15.3627 21.3612 16.7836 20.8158 17.7229C20.2703 18.6623 18.6795 18.7643 17.2624 17.9508Z',
  d4: 'M6.73756 17.9508C8.1546 17.1373 8.86118 15.7164 8.31576 14.7771C7.77035 13.8377 6.17947 13.7357 4.76244 14.5492C3.3454 15.3627 2.63882 16.7836 3.18424 17.7229C3.72965 18.6623 5.32053 18.7643 6.73756 17.9508Z',
  d5: 'M12 8V11',
  d6: 'M13 13L16 15',
  d7: 'M11 13L8 15',
  d8: 'M7.5 3C4.80989 4.5066 3 7.32255 3 10.5478C3 11.0426 3.0426 11.5277 3.12444 12M16.5 3C19.1901 4.5066 21 7.32255 21 10.5478C21 11.0426 20.9574 11.5277 20.8756 12',
  d9: 'M14 5C14 6.65685 13.1046 8 12 8C10.8954 8 10 6.65685 10 5C10 3.34315 10.8954 2 12 2C13.1046 2 14 3.34315 14 5Z',
  d10: 'M5 22C5 21.4477 5.44772 21 6 21H18C18.5523 21 19 21.4477 19 22C19 22.5523 18.5523 23 18 23H6C5.44772 23 5 22.5523 5 22Z',
  d11: 'M12.0002 10C10.6195 10 9.50021 11.1193 9.50021 12.5C9.50021 13.8807 10.6195 15 12.0002 15C13.3809 15 14.5002 13.8807 14.5002 12.5C14.5002 11.1193 13.3809 10 12.0002 10Z',
  d12: 'M12.0002 1C11.0095 1 10.2351 1.6023 9.75395 2.32398C9.26817 3.05265 9.00021 4.00168 9.00021 5C9.00021 5.99832 9.26817 6.94735 9.75395 7.67602C10.2351 8.3977 11.0095 9 12.0002 9C12.9909 9 13.7654 8.3977 14.2465 7.67602C14.7323 6.94735 15.0002 5.99832 15.0002 5C15.0002 4.00168 14.7323 3.05265 14.2465 2.32398C13.7654 1.6023 12.9909 1 12.0002 1Z',
  d13: 'M19.7357 13.682C18.8803 13.1909 17.9348 12.9524 17.0703 13.0079C16.2151 13.0627 15.3127 13.4258 14.8197 14.2749C14.3257 15.1257 14.4605 16.0888 14.8423 16.8564C15.2276 17.6313 15.9095 18.3271 16.7648 18.8181C17.6202 19.3092 18.5657 19.5476 19.4302 19.4922C20.2854 19.4373 21.1878 19.0742 21.6808 18.2251C22.1748 17.3743 22.0399 16.4113 21.6582 15.6436C21.2729 14.8688 20.591 14.173 19.7357 13.682Z',
  d14: 'M9.1808 14.2749C8.68778 13.4258 7.78539 13.0627 6.9302 13.0079C6.06573 12.9524 5.12023 13.1909 4.26481 13.682C3.40952 14.173 2.72758 14.8688 2.34226 15.6436C1.96055 16.4113 1.8257 17.3743 2.31969 18.2251C2.81271 19.0742 3.7151 19.4373 4.57029 19.4922C5.43476 19.5476 6.38026 19.3092 7.23568 18.8181C8.09097 18.3271 8.77291 17.6313 9.15823 16.8564C9.53994 16.0888 9.67478 15.1257 9.1808 14.2749Z',
  d15: 'M7.98864 3.87267C8.4705 3.6028 8.64235 2.9934 8.37249 2.51154C8.10262 2.02968 7.49322 1.85783 7.01136 2.12769C4.0284 3.79831 2 6.93525 2 10.5479C2 11.1002 2.04756 11.6425 2.13912 12.1709C2.23342 12.7151 2.751 13.0798 3.29518 12.9855C3.83935 12.8912 4.20405 12.3736 4.10975 11.8294C4.03764 11.4133 4 10.9852 4 10.5479C4 7.7102 5.59139 5.21525 7.98864 3.87267ZM16.9886 2.12769C16.5068 1.85783 15.8974 2.02968 15.6275 2.51154C15.3576 2.9934 15.5295 3.6028 16.0114 3.87267C18.4086 5.21525 20 7.7102 20 10.5479C20 10.9852 19.9624 11.4133 19.8902 11.8294C19.7959 12.3736 20.1606 12.8912 20.7048 12.9855C21.249 13.0798 21.7666 12.7151 21.8609 12.1709C21.9524 11.6425 22 11.1002 22 10.5479C22 6.93525 19.9716 3.79831 16.9886 2.12769ZM10.9987 8V11.9458L7.46875 14.152L8.52875 15.848L10.9987 14.3043V22C10.9987 22.5523 11.4464 23 11.9987 23C12.551 23 12.9987 22.5523 12.9987 22V14.3042L15.4688 15.848L16.5287 14.152L12.9987 11.9457V8H10.9987Z',
  d16: 'M12.0002 10C10.6195 10 9.50024 11.1193 9.50024 12.5C9.50024 13.8807 10.6195 15 12.0002 15C13.381 15 14.5002 13.8807 14.5002 12.5C14.5002 11.1193 13.381 10 12.0002 10Z',
  d17: 'M12.0002 1C11.0096 1 10.2351 1.6023 9.75398 2.32398C9.2682 3.05265 9.00024 4.00168 9.00024 5C9.00024 5.99832 9.2682 6.94735 9.75398 7.67602C10.2351 8.3977 11.0096 9 12.0002 9C12.9909 9 13.7654 8.3977 14.2465 7.67602C14.7323 6.94735 15.0002 5.99832 15.0002 5C15.0002 4.00168 14.7323 3.05265 14.2465 2.32398C13.7654 1.6023 12.9909 1 12.0002 1Z',
  d18: 'M19.7357 13.682C18.8803 13.1909 17.9348 12.9524 17.0703 13.0079C16.2151 13.0627 15.3127 13.4258 14.8197 14.2749C14.3257 15.1257 14.4606 16.0888 14.8423 16.8564C15.2276 17.6313 15.9096 18.3271 16.7648 18.8181C17.6203 19.3092 18.5658 19.5476 19.4302 19.4922C20.2854 19.4373 21.1878 19.0742 21.6808 18.2251C22.1748 17.3743 22.04 16.4113 21.6583 15.6436C21.2729 14.8688 20.591 14.173 19.7357 13.682Z',
  d19: 'M9.18083 14.2749C8.68781 13.4258 7.78542 13.0627 6.93023 13.0079C6.06576 12.9524 5.12026 13.1909 4.26484 13.682C3.40955 14.173 2.72761 14.8688 2.34229 15.6436C1.96058 16.4113 1.82573 17.3743 2.31972 18.2251C2.81274 19.0742 3.71513 19.4373 4.57032 19.4922C5.43479 19.5476 6.38029 19.3092 7.23571 18.8181C8.091 18.3271 8.77294 17.6313 9.15826 16.8564C9.53997 16.0888 9.67482 15.1257 9.18083 14.2749Z',
  d20: 'M12 1C11.1189 1 10.4131 1.53567 9.96175 2.21265C9.50693 2.89488 9.25 3.79416 9.25 4.75C9.25 5.70584 9.50693 6.60512 9.96175 7.28735C10.2259 7.68361 10.5773 8.03146 11 8.2518V10.4839C10.2591 10.8521 9.75 11.6166 9.75 12.5C9.75 12.5433 9.75122 12.5864 9.75364 12.6291L8.2241 13.6488C7.83187 13.4091 7.37169 13.2867 6.91416 13.2574C6.10505 13.2055 5.20793 13.4288 4.38924 13.8988C3.57064 14.3687 2.92646 15.0302 2.56607 15.7549C2.20839 16.4742 2.09718 17.3441 2.53585 18.0996C2.97379 18.8538 3.7841 19.1912 4.58625 19.2427C5.39536 19.2945 6.29248 19.0713 7.11117 18.6013C7.92977 18.1313 8.57395 17.4698 8.93434 16.7451C9.14524 16.321 9.27045 15.8445 9.24778 15.37L10.7481 14.3698C10.8285 14.4238 10.9127 14.4727 11 14.5161V21H6V23H18V21H13V14.5161C13.0874 14.4727 13.1715 14.4238 13.2519 14.3698L14.7526 15.3703C14.73 15.8447 14.8552 16.321 15.0661 16.7451C15.4265 17.4698 16.0706 18.1313 16.8892 18.6013C17.7079 19.0713 18.6051 19.2945 19.4142 19.2427C20.2163 19.1912 21.0266 18.8538 21.4646 18.0996C21.9032 17.3441 21.792 16.4742 21.4343 15.7549C21.0739 15.0302 20.4298 14.3687 19.6112 13.8988C18.7925 13.4288 17.8954 13.2055 17.0863 13.2574C16.6286 13.2867 16.1684 13.4091 15.7761 13.6489L14.2464 12.6291C14.2488 12.5864 14.25 12.5433 14.25 12.5C14.25 11.6166 13.7409 10.8521 13 10.4839V8.2518C13.4227 8.03146 13.7741 7.68361 14.0383 7.28735C14.4931 6.60512 14.75 5.70584 14.75 4.75C14.75 3.79416 14.4931 2.89488 14.0383 2.21265C13.5869 1.53567 12.8811 1 12 1Z',
  d21: 'M7.98864 3.87248C5.59139 5.21506 4 7.71001 4 10.5477C4 10.985 4.03764 11.4131 4.10975 11.8292L2.13912 12.1707C2.04756 11.6423 2 11.1001 2 10.5477C2 6.93506 4.0284 3.79812 7.01136 2.1275L7.98864 3.87248ZM20 10.5477C20 7.71001 18.4086 5.21506 16.0114 3.87248L16.9886 2.1275C19.9716 3.79812 22 6.93506 22 10.5477C22 11.1001 21.9524 11.6423 21.8609 12.1707L19.8902 11.8292C19.9624 11.4131 20 10.985 20 10.5477Z',
} as const;

export const IconWindPower01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wind-power-01-stroke-rounded IconWindPower01StrokeRounded"
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
        strokeLinecap="round" 
      />
      <circle 
        cx="12" 
        cy="12.5" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round"></circle>
      <ellipse 
        cx="12" 
        cy="5" 
        rx="2" 
        ry="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round"></ellipse>
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWindPower01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wind-power-01-duotone-rounded IconWindPower01DuotoneRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      </g>
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
        strokeLinecap="round" 
      />
      <circle 
        cx="12" 
        cy="12.5" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round"></circle>
      <ellipse 
        cx="12" 
        cy="5" 
        rx="2" 
        ry="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round"></ellipse>
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWindPower01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wind-power-01-twotone-rounded IconWindPower01TwotoneRounded"
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
        strokeLinecap="round" 
      />
      <circle 
        cx="12" 
        cy="12.5" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round"></circle>
      <ellipse 
        cx="12" 
        cy="5" 
        rx="2" 
        ry="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round"></ellipse>
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWindPower01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wind-power-01-solid-rounded IconWindPower01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconWindPower01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wind-power-01-bulk-rounded IconWindPower01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWindPower01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wind-power-01-stroke-sharp IconWindPower01StrokeSharp"
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
      <circle 
        cx="12" 
        cy="12.5" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <ellipse 
        cx="12" 
        cy="5" 
        rx="2" 
        ry="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></ellipse>
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWindPower01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wind-power-01-solid-sharp IconWindPower01SolidSharp"
    >
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfWindPower01: TheIconSelfPack = {
  name: 'WindPower01',
  StrokeRounded: IconWindPower01StrokeRounded,
  DuotoneRounded: IconWindPower01DuotoneRounded,
  TwotoneRounded: IconWindPower01TwotoneRounded,
  SolidRounded: IconWindPower01SolidRounded,
  BulkRounded: IconWindPower01BulkRounded,
  StrokeSharp: IconWindPower01StrokeSharp,
  SolidSharp: IconWindPower01SolidSharp,
};