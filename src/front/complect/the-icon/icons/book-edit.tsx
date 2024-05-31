import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M11.0215 6.78662V19.7866',
  d2: 'M11 19.5C10.7777 19.5 10.3235 19.2579 9.41526 18.7738C8.4921 18.2818 7.2167 17.7922 5.5825 17.4849C3.74929 17.1401 2.83268 16.9678 2.41634 16.4588C2 15.9499 2 15.1347 2 13.5044V7.09655C2 5.31353 2 4.42202 2.6487 3.87302C3.29741 3.32401 4.05911 3.46725 5.5825 3.75372C8.58958 4.3192 10.3818 5.50205 11 6.18114C11.6182 5.50205 13.4104 4.3192 16.4175 3.75372C17.9409 3.46725 18.7026 3.32401 19.3513 3.87302C20 4.42202 20 5.31353 20 7.09655V10',
  d3: 'M20.8638 12.9393L21.5589 13.6317C22.147 14.2174 22.147 15.1672 21.5589 15.7529L17.9171 19.4485C17.6306 19.7338 17.2642 19.9262 16.8659 20.0003L14.6088 20.4883C14.2524 20.5653 13.9351 20.2502 14.0114 19.895L14.4919 17.6598C14.5663 17.2631 14.7594 16.8981 15.0459 16.6128L18.734 12.9393C19.3222 12.3536 20.2757 12.3536 20.8638 12.9393Z',
  d4: 'M14.4454 17.9921C13.7202 18.2319 13.1034 18.5025 12.5939 18.7739C11.6852 19.2579 11.2307 19.5 11.0082 19.5C10.7858 19.5 10.3313 19.2579 9.42258 18.7739C8.49878 18.2819 7.22228 17.7922 5.58695 17.4849L5.58566 17.4847C3.75203 17.14 2.83512 16.9677 2.41858 16.4588C2.00195 15.9499 2.00195 15.1347 2.00195 13.5044V7.09655C2.00195 5.31353 2.00195 4.42202 2.6511 3.87302C3.30026 3.32401 4.06249 3.46725 5.58692 3.75371C8.59609 4.31919 10.3896 5.50205 11.0082 6.18114C11.6268 5.50205 13.4203 4.31919 16.4295 3.75371C17.9539 3.46725 18.7162 3.32401 19.3653 3.87302C20.0145 4.42202 20.0145 5.31353 20.0145 7.09655V12.5143C19.5643 12.4516 19.091 12.5933 18.7449 12.9392L15.0688 16.6128C14.7832 16.8981 14.5907 17.2631 14.5166 17.6598L14.4454 17.9921Z',
  d5: 'M11.0078 6.5V19.5',
  d6: 'M11.0082 19.5C10.7858 19.5 10.3312 19.2579 9.42237 18.7738C8.49857 18.2818 7.22228 17.7922 5.58695 17.4849C3.75246 17.1401 2.83521 16.9678 2.41858 16.4588C2.00195 15.9499 2.00195 15.1347 2.00195 13.5044V7.09655C2.00195 5.31353 2.00195 4.42202 2.6511 3.87302C3.30027 3.32401 4.0625 3.46725 5.58695 3.75372C8.59612 4.3192 10.3896 5.50205 11.0082 6.18114C11.6268 5.50205 13.4203 4.3192 16.4295 3.75372C17.9539 3.46725 18.7162 3.32401 19.3653 3.87302C20.0145 4.42202 20.0145 5.31353 20.0145 7.09655V10',
  d7: 'M20.8687 12.9393L21.5615 13.6317C22.1477 14.2175 22.1477 15.1672 21.5615 15.753L17.9316 19.4487C17.6461 19.734 17.2808 19.9264 16.8839 20.0005L14.6342 20.4885C14.2789 20.5656 13.9626 20.2504 14.0388 19.8953L14.5176 17.6599C14.5918 17.2632 14.7842 16.8982 15.0698 16.6129L18.7459 12.9393C19.3321 12.3536 20.2825 12.3536 20.8687 12.9393Z',
  d8: 'M11 6.5V19.5',
  d9: 'M6.22111 3.01664L6.16062 3.00526C5.45089 2.87172 4.82267 2.75351 4.29246 2.75008C3.69637 2.74622 3.15603 2.88428 2.6642 3.30052C2.15627 3.73039 1.9382 4.28384 1.84024 4.90524C1.74991 5.47823 1.74995 6.19657 1.75 7.03807L1.75 13.5477C1.74998 14.326 1.74997 14.9719 1.80658 15.4845C1.86525 16.0157 1.99403 16.5159 2.33584 16.9337C2.6914 17.3683 3.20741 17.5918 3.75686 17.753C4.30333 17.9135 5.02115 18.0484 5.90302 18.2142L5.9439 18.2219C7.50603 18.5157 8.7089 18.9807 9.5625 19.4357L9.58075 19.4454C10.0192 19.6791 10.3725 19.8674 10.6432 19.9959C10.7812 20.0615 10.9161 20.1204 11.0425 20.1639C11.1606 20.2045 11.3223 20.25 11.5 20.25C11.9142 20.25 12.25 19.9142 12.25 19.5V7.19996C12.25 7.14648 12.25 7.11974 12.2525 7.10041C12.2608 7.03729 12.2683 7.01793 12.3051 6.96597C12.3164 6.95005 12.3477 6.9161 12.4104 6.84818C12.823 6.40126 14.3226 5.36104 17.0522 4.85494C17.8138 4.71372 18.2604 4.63453 18.5953 4.63239C18.8655 4.63067 18.9631 4.68019 19.0596 4.76068C19.1355 4.82406 19.2192 4.92041 19.2751 5.27023C19.3381 5.6642 19.3409 6.206 19.3409 7.07616V9.80882C19.3409 10.3286 19.7683 10.75 20.2954 10.75C20.8226 10.75 21.25 10.3286 21.25 9.80882L21.25 7.00719C21.2501 6.22739 21.2501 5.535 21.1609 4.97711C21.0621 4.35869 20.8361 3.77715 20.2929 3.32382C19.7701 2.8876 19.1946 2.74617 18.5829 2.75008C18.0548 2.75345 17.4361 2.86827 16.7707 2.99178L16.6994 3.00501C14.4855 3.41549 12.8604 4.16544 11.85 4.8642C11.6574 4.99742 11.5611 5.06404 11.4684 5.06459C11.3758 5.06515 11.2792 5.00006 11.086 4.86986C10.0557 4.17558 8.42927 3.43188 6.22111 3.01664Z',
  d10: 'M18.5785 13.0539C18.9119 12.7205 19.0785 12.5539 19.2519 12.4537C19.7225 12.1821 20.3022 12.1821 20.7727 12.4537C20.9461 12.5539 21.1128 12.7205 21.4461 13.0539C21.7795 13.3872 21.9461 13.5539 22.0463 13.7273C22.3179 14.1978 22.3179 14.7775 22.0463 15.2481C21.9461 15.4215 21.7795 15.5881 21.4461 15.9215L17.1383 20.2293C16.4774 20.8902 15.4801 20.9171 14.5977 21.1057C13.9078 21.2532 13.5628 21.327 13.3679 21.1321C13.173 20.9372 13.2468 20.5922 13.3943 19.9023C13.5829 19.0199 13.6098 18.0226 14.2707 17.3617L18.5785 13.0539Z',
  d11: 'M19.9907 9.78932L20.0114 3.22288C20.0114 3.21646 20.0047 3.21193 19.9983 3.21398L10.9916 6.05074M10.9916 6.05074L2.01318 3.20606C2.0067 3.20402 2 3.20855 2 3.21496V15.4381L10.9916 18.2281V6.05074ZM19.4769 12.597L14.0027 17.7704V20.1165H16.4937L21.9961 14.9478C22 14.9441 22 14.9382 21.9961 14.9345L19.491 12.5969C19.4871 12.5933 19.4808 12.5933 19.4769 12.597Z',
  d12: 'M1.56196 2.39122C1.75783 2.25029 2.00954 2.2122 2.23833 2.28888L11 5.22531L19.7617 2.28888C19.9905 2.2122 20.2422 2.25029 20.438 2.39122C20.6339 2.53215 20.75 2.75871 20.75 3.00001V10H19.25V4.04236L11.75 6.55595L11.75 20.0406L1.25 16.5406V3.00001C1.25 2.75871 1.3661 2.53215 1.56196 2.39122Z',
  d13: 'M18.9697 12.4697C19.2626 12.1768 19.7374 12.1768 20.0303 12.4697L22.5303 14.9697C22.8232 15.2626 22.8232 15.7374 22.5303 16.0303L16.8107 21.75H13.25V18.1893L18.9697 12.4697Z',
} as const;

export const IconBookEditStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="book-edit-stroke-rounded IconBookEditStrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBookEditDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="book-edit-duotone-rounded IconBookEditDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBookEditTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="book-edit-twotone-rounded IconBookEditTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBookEditSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="book-edit-solid-rounded IconBookEditSolidRounded"
    >
      <path 
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

export const IconBookEditBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="book-edit-bulk-rounded IconBookEditBulkRounded"
    >
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

export const IconBookEditStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="book-edit-stroke-sharp IconBookEditStrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBookEditSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="book-edit-solid-sharp IconBookEditSolidSharp"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBookEdit: TheIconSelfPack = {
  name: 'BookEdit',
  StrokeRounded: IconBookEditStrokeRounded,
  DuotoneRounded: IconBookEditDuotoneRounded,
  TwotoneRounded: IconBookEditTwotoneRounded,
  SolidRounded: IconBookEditSolidRounded,
  BulkRounded: IconBookEditBulkRounded,
  StrokeSharp: IconBookEditStrokeSharp,
  SolidSharp: IconBookEditSolidSharp,
};