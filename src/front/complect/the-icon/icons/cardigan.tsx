import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M6.5 16L5 21H2L2.88566 7.71504C2.95649 6.65269 3.58507 5.70746 4.53738 5.23131L9 3C10.4175 4.59466 13.5825 4.59466 15 3L19.4626 5.23131C20.4149 5.70746 21.0435 6.65269 21.1143 7.71504L22 21H19L17.5 16',
  d2: 'M6 9L7 19L8 21H16L17 19L18 9',
  d3: 'M8.5 3.5C8.5 3.5 8.5 7.37324 11.2949 8.73146C11.6964 8.92661 12 9.30782 12 9.7543V21',
  d4: 'M15.5 3.5C15.5 3.5 15.5 8 12 9',
  d5: 'M8 3.5L4.53738 5.23131C3.58507 5.70746 2.95649 6.65269 2.88566 7.71503L2 21H5L6.5 16L7 19L8 21H16L17 19L17.5 16L19 21H22L21.1143 7.71503C21.0435 6.65269 20.4149 5.70746 19.4626 5.23131L16 3.5C14.8 7.9 12.8333 9 12 9C9.6 8.6 8.33333 5.16667 8 3.5Z',
  d6: 'M8.5 3.5C8.5 3.5 8.5 7.37324 11.2949 8.73146C11.6964 8.92661 12 9.30782 12 9.7543V21M15.5 3.5C15.5 3.5 15.5 8 12 9',
  d7: 'M7.79205 3.12746C7.77808 2.9118 7.54914 2.77896 7.35606 2.87604L4.20197 4.46201C3.01159 5.06056 2.22586 6.24878 2.13733 7.58422L1.25166 20.9443C1.23786 21.1526 1.3105 21.3573 1.45232 21.5098C1.59413 21.6622 1.79242 21.7487 2 21.7487H5C5.33121 21.7487 5.6232 21.5303 5.71837 21.2112L6.2815 19.3235C6.28795 19.3019 6.31914 19.3003 6.32918 19.3205L7.32918 21.3318C7.45623 21.5873 7.71592 21.7487 8 21.7487H10.95C11.1157 21.7487 11.25 21.6144 11.25 21.4487V9.65325C11.25 9.53381 11.1786 9.42656 11.0713 9.37401C9.42933 8.56954 8.61988 6.87954 8.2175 5.49213C7.9824 4.68152 7.8664 3.91122 7.80863 3.34687C7.80441 3.30795 7.79855 3.2277 7.79205 3.12746Z',
  d8: 'M12.75 21.4487C12.75 21.6144 12.8843 21.7487 13.05 21.7487H16C16.2841 21.7487 16.5438 21.5873 16.6708 21.3318L17.6708 19.3205C17.6809 19.3003 17.7121 19.3019 17.7185 19.3235L18.2816 21.2112C18.3768 21.5303 18.6688 21.7487 19 21.7487H22C22.2076 21.7487 22.4059 21.6622 22.5477 21.5098C22.6895 21.3573 22.7621 21.1526 22.7483 20.9443L21.8627 7.58422C21.7741 6.24878 20.9884 5.06056 19.798 4.46201L16.6464 2.87726C16.453 2.78001 16.2239 2.91348 16.2091 3.12946C16.203 3.22029 16.1969 3.2974 16.1914 3.34687C16.1336 3.91122 16.0176 4.68152 15.7825 5.49213C15.3801 6.87954 14.5707 8.56954 12.9287 9.37401C12.8214 9.42656 12.75 9.53381 12.75 9.65325V21.4487Z',
  d9: 'M14.75 2.38984C14.7501 2.29542 14.6616 2.2139 14.5832 2.26658C14.531 2.30165 14.4826 2.34376 14.4394 2.39262C13.9105 2.99101 12.9952 3.34222 12 3.34222C11.0048 3.34222 10.0895 2.99101 9.56056 2.39262C9.51738 2.34377 9.46898 2.30166 9.41682 2.26659C9.33845 2.2139 9.2499 2.29544 9.25 2.38987C9.26542 2.64336 9.29715 3.15895 9.30075 3.19342C9.35235 3.69757 9.4551 4.3729 9.6575 5.07077C10.0423 6.39762 10.7235 7.60575 11.8964 8.09383C11.9627 8.12141 12.0373 8.12141 12.1036 8.09383C13.2765 7.60575 13.9577 6.39762 14.3425 5.07077C14.5449 4.3729 14.6476 3.69757 14.6993 3.19342C14.7127 3.06984 14.7387 2.60621 14.75 2.38984Z',
  d10: 'M6.00586 9.00049L7.00586 18.9943L8.00586 20.993H16.0059L17.0059 18.9943L18.0059 9.00049',
  d11: 'M8.50586 3.50488C8.50586 3.50488 8.50586 8.00403 12.0059 9.00384M12.0059 9.00384V21.0016M12.0059 9.00384C15.5059 8.00403 15.5059 3.50488 15.5059 3.50488',
  d12: 'M17.3087 16.3266L19.0081 20.9873H21.99C21.9958 20.9873 22.0004 20.9824 22 20.9767L21.0165 6.00334L15.0271 2.99915C14.3863 3.75905 13.0047 4.22447 11.943 4.21203C11.0321 4.20136 9.76684 3.85198 9.01918 2.99854L3.01125 6.01194L2.00002 20.9767C1.99963 20.9824 2.00421 20.9873 2.01 20.9873H5.01393L6.80768 16.0564',
  d13: 'M7.80906 2.59088L2.28025 5.41584L1.25166 21.1826C1.23786 21.3942 1.3105 21.6023 1.45232 21.7572C1.59413 21.9121 1.79242 22 2 22H5.52532L6.37212 19.6203L7.53648 22H11.25V9.64218C10.4368 9.42838 9.8163 8.87567 9.36214 8.21266C8.79008 7.37753 8.43481 6.30988 8.20712 5.3127C7.97963 4.3164 7.86617 3.32914 7.80906 2.59088Z',
  d14: 'M12.75 22H16.4635L17.6279 19.6203L18.4747 22H22C22.2076 22 22.4059 21.9121 22.5477 21.7572C22.6895 21.6023 22.7621 21.3942 22.7483 21.1826L21.7198 5.41584L16.1909 2.59088C16.1338 3.32913 16.0204 4.3164 15.7929 5.3127C15.5652 6.30988 15.2099 7.37753 14.6379 8.21266C14.1837 8.87567 13.5632 9.42838 12.75 9.64218V22Z',
  d15: 'M14.7265 2L14.4394 2.33007C13.9105 2.93813 12.9952 3.29502 12 3.29502C11.0048 3.29502 10.0895 2.93813 9.56056 2.33007L9.27346 2C9.28067 2.13339 9.2901 2.28257 9.30243 2.44451C9.3554 3.14042 9.4607 4.05704 9.66788 4.96439C9.87769 5.88328 10.1787 6.7317 10.591 7.33363C10.9906 7.91702 11.4426 8.20426 12 8.20426C12.5574 8.20426 13.0094 7.91702 13.409 7.33363C13.8213 6.7317 14.1223 5.88328 14.3321 4.96439C14.5393 4.05704 14.6446 3.14042 14.6976 2.44451C14.7099 2.28257 14.7193 2.1334 14.7265 2Z',
} as const;

export const IconCardiganStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cardigan-stroke-rounded IconCardiganStrokeRounded"
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

export const IconCardiganDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cardigan-duotone-rounded IconCardiganDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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

export const IconCardiganTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cardigan-twotone-rounded IconCardiganTwotoneRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCardiganSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cardigan-solid-rounded IconCardiganSolidRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCardiganBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cardigan-bulk-rounded IconCardiganBulkRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCardiganStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cardigan-stroke-sharp IconCardiganStrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCardiganSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cardigan-solid-sharp IconCardiganSolidSharp"
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
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCardigan: TheIconSelfPack = {
  name: 'Cardigan',
  StrokeRounded: IconCardiganStrokeRounded,
  DuotoneRounded: IconCardiganDuotoneRounded,
  TwotoneRounded: IconCardiganTwotoneRounded,
  SolidRounded: IconCardiganSolidRounded,
  BulkRounded: IconCardiganBulkRounded,
  StrokeSharp: IconCardiganStrokeSharp,
  SolidSharp: IconCardiganSolidSharp,
};