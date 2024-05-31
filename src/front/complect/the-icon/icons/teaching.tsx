import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M13 15C10.7083 21 4.29167 15 2 21',
  d2: 'M15.5 15H17.0013C19.3583 15 20.5368 15 21.2691 14.2678C22.0013 13.5355 22.0013 12.357 22.0013 10V8C22.0013 5.64298 22.0013 4.46447 21.2691 3.73223C20.5368 3 19.3583 3 17.0013 3H13.0013C10.6443 3 9.46576 3 8.73353 3.73223C8.11312 4.35264 8.01838 5.29344 8.00391 7',
  d3: 'M12 7H18M18 11H15',
  d4: 'M8.00198 10.0504C9.14211 10.2828 10 11.2912 10 12.5C10 13.3143 9.6107 14.0376 9.00807 14.4941C9.7556 15 10.9183 15 13.002 15H16.9994C19.3564 15 20.5349 15 21.2672 14.2678C21.9994 13.5355 21.9994 12.357 21.9994 10V8C21.9994 5.64298 21.9994 4.46447 21.2672 3.73223C20.5349 3 19.3564 3 16.9994 3H12.9994C10.6424 3 9.46385 3 8.73162 3.73223C8.11121 4.35264 8.01906 5.29344 8.00459 7C7.99857 7.70961 7.99978 8.41932 8.00099 9.129C8.00148 9.41934 8.00198 9.70968 8.00198 10C8.00198 10.0169 8.00198 10.0337 8.00198 10.0504Z',
  d5: 'M13.3571 14.0661C13.873 14.2631 14.1315 14.8411 13.9344 15.3571C13.2736 17.0873 12.2545 18.0668 11.001 18.5567C9.86399 19.001 8.61264 19.0006 7.58137 19.0003C7.55418 19.0003 7.52715 19.0003 7.50027 19.0003C6.36949 19.0003 5.47985 19.0127 4.72752 19.3067C4.06178 19.5668 3.41944 20.0873 2.93445 21.3571C2.73739 21.873 2.1594 22.1315 1.64347 21.9344C1.12753 21.7374 0.869033 21.1594 1.06609 20.6435C1.72693 18.9133 2.74605 17.9337 3.99958 17.4439C5.13655 16.9996 6.3879 16.9999 7.41917 17.0003C7.44636 17.0003 7.47339 17.0003 7.50027 17.0003C8.63105 17.0003 9.52069 16.9878 10.273 16.6939C10.9388 16.4337 11.5811 15.9133 12.0661 14.6435C12.2631 14.1275 12.8411 13.869 13.3571 14.0661Z',
  d6: 'M12.9327 2H17.0699C18.1899 1.99996 19.13 1.99993 19.8777 2.10045C20.6694 2.20689 21.3933 2.44224 21.9762 3.02513C22.5591 3.60802 22.7944 4.3319 22.9009 5.12358C23.0014 5.87126 23.0013 6.81141 23.0013 7.93139V10.0686C23.0013 11.1886 23.0014 12.1287 22.9009 12.8764C22.7944 13.6681 22.5591 14.392 21.9762 14.9749C21.3933 15.5578 20.6694 15.7931 19.8777 15.8996C19.13 16.0001 18.1899 16 17.0699 16L16.5 16C15.9477 16 15.5 15.5523 15.5 15C15.5 14.4477 15.9477 14 16.5 14H17.0013C18.2081 14 19.0126 13.9979 19.6112 13.9174C20.1811 13.8408 20.4126 13.71 20.562 13.5607C20.7113 13.4113 20.8421 13.1798 20.9187 12.6099C20.9992 12.0113 21.0013 11.2068 21.0013 10V8C21.0013 6.79322 20.9992 5.98873 20.9187 5.39007C20.8421 4.82018 20.7113 4.58869 20.562 4.43934C20.4126 4.29 20.1811 4.15924 19.6112 4.08262C19.0126 4.00213 18.2081 4 17.0013 4H13.0013C11.7945 4 10.99 4.00213 10.3914 4.08262C9.82147 4.15924 9.58999 4.29 9.44064 4.43934C9.31168 4.56831 9.20048 4.75467 9.12284 5.15104C9.03973 5.57533 9.01113 6.15174 9.00387 7.00848C8.99919 7.56075 8.54769 8.00465 7.99543 7.99997C7.44316 7.99529 6.99926 7.54379 7.00394 6.99153C7.01115 6.1417 7.03716 5.39444 7.16014 4.76659C7.28859 4.11082 7.53498 3.51658 8.02643 3.02513C8.60931 2.44224 9.3332 2.20689 10.1249 2.10045C10.8726 1.99993 11.8127 1.99996 12.9327 2Z',
  d7: 'M4.25 12.5C4.25 10.7051 5.70507 9.25 7.5 9.25C9.29493 9.25 10.75 10.7051 10.75 12.5C10.75 14.2949 9.29493 15.75 7.5 15.75C5.70507 15.75 4.25 14.2949 4.25 12.5Z',
  d8: 'M11 7C11 6.44772 11.4477 6 12 6H18C18.5523 6 19 6.44772 19 7C19 7.55228 18.5523 8 18 8H12C11.4477 8 11 7.55228 11 7ZM14 11C14 10.4477 14.4477 10 15 10H18C18.5523 10 19 10.4477 19 11C19 11.5523 18.5523 12 18 12H15C14.4477 12 14 11.5523 14 11Z',
  d9: 'M16 15H22.0022V3H8.00391L8.00478 7',
  d10: 'M4.66143 19.4495C3.99569 19.7097 3.35335 20.2301 2.86836 21.4999L1 20.7863C1.66084 19.0561 2.67996 18.0765 3.93349 17.5867C5.07046 17.1424 6.32181 17.1428 7.35308 17.1431C7.38027 17.1431 7.4073 17.1431 7.43418 17.1431C8.56496 17.1431 9.4546 17.1307 10.2069 16.8367C10.8727 16.5765 11.515 16.0561 12 14.7863L13.8684 15.4999C13.2075 17.2301 12.1884 18.2097 10.9349 18.6995C9.7979 19.1438 8.54654 19.1434 7.51528 19.1431C7.48809 19.1431 7.46106 19.1431 7.43418 19.1431C6.3034 19.1431 5.41375 19.1555 4.66143 19.4495Z',
  d11: 'M7.29477 2.79297C7.48231 2.60539 7.7367 2.5 8.00195 2.5H22.0002C22.5525 2.5 23.0002 2.94772 23.0002 3.5V15.5C23.0002 16.0523 22.5525 16.5 22.0002 16.5H15.998V14.5H21.0002V4.5H9.00217L9.00283 7.49978L7.00283 7.50022L7.00195 3.50022C7.0019 3.23496 7.10723 2.98055 7.29477 2.79297Z',
  d12: 'M4.5 12.5C4.5 10.8431 5.84315 9.5 7.5 9.5C9.15685 9.5 10.5 10.8431 10.5 12.5C10.5 14.1569 9.15685 15.5 7.5 15.5C5.84315 15.5 4.5 14.1569 4.5 12.5Z',
  d13: 'M17.998 8.5H11.998V6.5H17.998V8.5ZM14.998 10.5H17.998V12.5H14.998V10.5Z',
} as const;

export const IconTeachingStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="teaching-stroke-rounded IconTeachingStrokeRounded"
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
      <circle 
        cx="7.5" 
        cy="12.5" 
        r="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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

export const IconTeachingDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="teaching-duotone-rounded IconTeachingDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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
      <circle 
        cx="7.5" 
        cy="12.5" 
        r="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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

export const IconTeachingTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="teaching-twotone-rounded IconTeachingTwotoneRounded"
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
      <circle 
        cx="7.5" 
        cy="12.5" 
        r="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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

export const IconTeachingSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="teaching-solid-rounded IconTeachingSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTeachingBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="teaching-bulk-rounded IconTeachingBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconTeachingStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="teaching-stroke-sharp IconTeachingStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="7.5" 
        cy="12.5" 
        r="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTeachingSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="teaching-solid-sharp IconTeachingSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfTeaching: TheIconSelfPack = {
  name: 'Teaching',
  StrokeRounded: IconTeachingStrokeRounded,
  DuotoneRounded: IconTeachingDuotoneRounded,
  TwotoneRounded: IconTeachingTwotoneRounded,
  SolidRounded: IconTeachingSolidRounded,
  BulkRounded: IconTeachingBulkRounded,
  StrokeSharp: IconTeachingStrokeSharp,
  SolidSharp: IconTeachingSolidSharp,
};