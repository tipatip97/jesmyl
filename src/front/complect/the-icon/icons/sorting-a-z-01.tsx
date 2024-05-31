import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M15.9367 2L16.417 2.45852C16.8461 2.8682 17.0606 3.07305 16.9851 3.2471C16.9096 3.42115 16.6062 3.42115 15.9993 3.42115H8.56617C5.49108 3.42115 2.88649 5.34451 2 8',
  d2: 'M8.02139 22L7.58291 21.5792C7.15391 21.1674 6.93942 20.9616 7.01491 20.7866C7.0904 20.6117 7.39375 20.6117 8.00043 20.6117H15.432C18.5102 20.6117 21.1169 18.6739 22 16',
  d3: 'M15 9.5H17.9474C18.5675 9.5 18.8775 9.5 18.9601 9.70009C19.0427 9.90019 18.8317 10.1402 18.4098 10.6203L15.9846 13.3797C15.5627 13.8598 15.3517 14.0998 15.4343 14.2999C15.5169 14.5 15.8269 14.5 16.447 14.5H19',
  d4: 'M3 14.5L4.75464 10.5877C5.07987 9.86258 5.24249 9.5 5.5 9.5C5.75751 9.5 5.92013 9.86258 6.24536 10.5877L8 14.5',
  d5: 'M11 12H12',
  d6: 'M15.2137 1.30943C15.5951 0.909983 16.2281 0.895345 16.6276 1.27674L17.1078 1.73525C17.1197 1.74657 17.1316 1.758 17.1438 1.76954C17.3256 1.94299 17.5329 2.14071 17.676 2.32232C17.7986 2.47795 18.1824 3.00041 17.9027 3.64509C17.6337 4.26534 17.017 4.36456 16.8255 4.39041C16.5957 4.42144 16.3077 4.4213 16.0485 4.42117C16.0321 4.42116 16.0158 4.42116 15.9996 4.42116H8.56644C5.90915 4.42116 3.69515 6.08099 2.94881 8.31665C2.77393 8.84052 2.20748 9.12343 1.68362 8.94854C1.15975 8.77366 0.876847 8.20721 1.05173 7.68335C2.07837 4.60803 5.07356 2.42116 8.56644 2.42116H15.0297C14.8617 2.05903 14.9214 1.61562 15.2137 1.30943Z',
  d7: 'M22.3159 15.0507C22.8403 15.2239 23.125 15.7895 22.9518 16.3139C21.9304 19.4067 18.9341 21.612 15.4343 21.612H8.94549C9.09552 21.9686 9.03011 22.3958 8.74514 22.6927C8.36272 23.0912 7.72969 23.1042 7.33123 22.7217L6.89275 22.3009C6.88092 22.2895 6.86896 22.2781 6.85689 22.2665C6.67498 22.0921 6.46784 21.8935 6.32495 21.7112C6.2018 21.5541 5.82178 21.0331 6.09906 20.3907C6.36702 19.7698 6.98291 19.6692 7.17628 19.6429C7.40645 19.6117 7.69471 19.6118 7.9537 19.612C7.97017 19.612 7.98652 19.612 8.00272 19.612H15.4343C18.0909 19.612 20.308 17.9417 21.0527 15.6867C21.2259 15.1622 21.7915 14.8775 22.3159 15.0507Z',
  d8: 'M17.1842 10.5H15C14.4477 10.5 14 10.0523 14 9.50004C14 8.94776 14.4477 8.50004 15 8.50004H17.9474C17.9645 8.50004 17.9817 8.50003 17.9992 8.50002C18.262 8.49986 18.5627 8.49967 18.8049 8.53631C19.0506 8.57349 19.6314 8.70541 19.8844 9.31862C20.1272 9.90677 19.8414 10.404 19.7102 10.6038C19.5753 10.8094 19.3753 11.0368 19.1944 11.2424C19.1832 11.2552 19.172 11.2679 19.1609 11.2805L17.2102 13.5H19C19.5523 13.5 20 13.9478 20 14.5C20 15.0523 19.5523 15.5 19 15.5H16.447C16.4299 15.5 16.4126 15.5001 16.3952 15.5001C16.1324 15.5002 15.8317 15.5004 15.5895 15.4638C15.3437 15.4266 14.763 15.2947 14.5099 14.6815C14.2672 14.0933 14.553 13.5961 14.6842 13.3963C14.8191 13.1906 15.0191 12.9633 15.1999 12.7577C15.2112 12.7449 15.2224 12.7322 15.2335 12.7196L17.1842 10.5Z',
  d9: 'M5.50025 11.3695L7.08781 14.9092C7.31382 15.4131 7.90555 15.6384 8.40947 15.4124C8.91339 15.1864 9.13869 14.5947 8.91268 14.0908L7.15804 10.1785C7.15037 10.1614 7.14268 10.1442 7.13498 10.1271C6.99292 9.81004 6.84619 9.48258 6.69513 9.24129C6.55669 9.02016 6.1917 8.5 5.50025 8.5C4.8088 8.5 4.44381 9.02016 4.30537 9.24129C4.15431 9.48258 4.00757 9.81004 3.86552 10.1271C3.85782 10.1442 3.85013 10.1614 3.84246 10.1785L2.08781 14.0908C1.86181 14.5947 2.0871 15.1864 2.59102 15.4124C3.09495 15.6384 3.68667 15.4131 3.91268 14.9092L5.50025 11.3695Z',
  d10: 'M10 12C10 11.4477 10.4477 11 11 11H12C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13H11C10.4477 13 10 12.5523 10 12Z',
  d11: 'M14.4971 9.50391H18.494V10.0032L14.9948 13.9973V14.4966H18.9958',
  d12: 'M3.00195 14.9951L5.00093 9.00391H6.00042L7.99939 14.9951',
  d13: 'M10.001 12H12.9994',
  d14: 'M2.00195 8.03071V5.10264C2.00195 5.04749 2.0467 5.00278 2.1019 5.00278H18.7484M15.9293 1.99902L18.1644 4.72194',
  d15: 'M21.998 15.9693V18.8974C21.998 18.9525 21.9533 18.9972 21.8981 18.9972H5.25162M8.07072 22.001L5.83561 19.2781',
  d16: 'M16.7092 1.00037L18.9992 3.77657L19.0031 5.6367H3.00035L3.00105 7.63635L1.00105 7.63704L1 4.63704C0.999908 4.37177 1.10522 4.11732 1.29277 3.92971C1.48032 3.7421 1.73472 3.6367 2 3.6367H16.2912L15.1664 2.27303L16.7092 1.00037Z',
  d17: 'M21.0007 18.3642L21 16.3646L23 16.3639L23.001 19.3639C23.0011 19.6292 22.8958 19.8836 22.7083 20.0712C22.5207 20.2588 22.2663 20.3642 22.001 20.3642H7.70923L8.83452 21.7277L7.292 23.0008L5 20.2236V18.3642H21.0007Z',
  d18: 'M4.77773 8H7.21925L9.44717 14.6838L7.5498 15.3162L5.99849 10.6623L4.44717 15.3162L2.5498 14.6838L4.77773 8Z',
  d19: 'M13.501 13.0004H10.501V11.0004H13.501V13.0004Z',
  d20: 'M17.7198 10.5004H15.4873V8.50037H20.4863V10.3762L17.7519 13.5004H19.9883V15.5004H14.9854V13.6246L17.7198 10.5004Z',
} as const;

export const IconSortingAZ01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sorting-a-z-01-stroke-rounded IconSortingAZ01StrokeRounded"
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSortingAZ01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sorting-a-z-01-duotone-rounded IconSortingAZ01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSortingAZ01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sorting-a-z-01-twotone-rounded IconSortingAZ01TwotoneRounded"
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSortingAZ01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sorting-a-z-01-solid-rounded IconSortingAZ01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSortingAZ01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sorting-a-z-01-bulk-rounded IconSortingAZ01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSortingAZ01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sorting-a-z-01-stroke-sharp IconSortingAZ01StrokeSharp"
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
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSortingAZ01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sorting-a-z-01-solid-sharp IconSortingAZ01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSortingAZ01: TheIconSelfPack = {
  name: 'SortingAZ01',
  StrokeRounded: IconSortingAZ01StrokeRounded,
  DuotoneRounded: IconSortingAZ01DuotoneRounded,
  TwotoneRounded: IconSortingAZ01TwotoneRounded,
  SolidRounded: IconSortingAZ01SolidRounded,
  BulkRounded: IconSortingAZ01BulkRounded,
  StrokeSharp: IconSortingAZ01StrokeSharp,
  SolidSharp: IconSortingAZ01SolidSharp,
};