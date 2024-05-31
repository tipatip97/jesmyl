import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M16.2006 14.6886L9.31135 7.79939C8.84911 7.33715 8.61799 7.10603 8.33269 7.03327C8.22784 7.00653 8.11954 6.99581 8.01149 7.00147C7.71745 7.01686 7.44549 7.19817 6.90157 7.56078L6.76211 7.65376C5.65941 8.38889 5.10805 8.75646 5.02086 9.19212C4.97402 9.42615 5.00656 9.66912 5.11333 9.88258C5.31208 10.28 5.94072 10.4895 7.19799 10.9086C7.60207 11.0433 7.80411 11.1106 7.95873 11.2387C8.04473 11.3099 8.11907 11.3942 8.17908 11.4883C8.287 11.6576 8.32876 11.8665 8.4123 12.2841L8.68235 13.6344C8.81834 14.3143 8.88633 14.6543 9.11602 14.884C9.34571 15.1137 9.68566 15.1817 10.3656 15.3176L11.7159 15.5877C12.1335 15.6712 12.3424 15.713 12.5117 15.8209C12.6058 15.8809 12.6901 15.9553 12.7613 16.0413C12.8894 16.1959 12.9567 16.3979 13.0914 16.802C13.5105 18.0593 13.72 18.6879 14.1174 18.8867C14.3309 18.9934 14.5738 19.026 14.8079 18.9791C15.2435 18.8919 15.6111 18.3406 16.3462 17.2379L16.4392 17.0984C16.8018 16.5545 16.9831 16.2825 16.9985 15.9885C17.0042 15.8805 16.9935 15.7722 16.9667 15.6673C16.894 15.382 16.6628 15.1509 16.2006 14.6886Z',
  d2: 'M13.5 18L11.7256 19.8557C10.2961 21.2852 9.5813 22 8.69309 22C7.80489 22 7.09012 21.2852 5.66057 19.8557L4.14431 18.3394C2.71477 16.9099 2 16.1951 2 15.3069C2 14.4187 2.71477 13.7039 4.14431 12.2744L6 10.5',
  d3: 'M9 7.70827L12.6459 4.06241C14.0208 2.68747 14.7083 2 15.5626 2C16.4168 2 17.1043 2.68747 18.4792 4.06241L19.9376 5.52076C21.3125 6.8957 22 7.58317 22 8.43745C22 9.29173 21.3125 9.9792 19.9376 11.3541L16.2917 15',
  d4: 'M19.6003 4.39996L12.4003 11.6M12 4L20 12',
  d5: 'M8.4123 12.2808L8.68235 13.6311C8.81834 14.311 8.88633 14.651 9.11602 14.8807C9.34571 15.1104 9.68567 15.1784 10.3656 15.3143L11.7159 15.5844C12.1335 15.6679 12.3424 15.7097 12.5117 15.8176C12.6058 15.8776 12.6901 15.952 12.7613 16.038C12.8894 16.1926 12.9567 16.3946 13.0914 16.7987C13.2549 17.2893 13.3865 17.6841 13.5099 17.9951L13.4766 18.024L11.7256 19.8524L11.7256 19.8524C10.2961 21.2819 9.5813 21.9967 8.69309 21.9967C7.80489 21.9967 7.09012 21.2819 5.66057 19.8524L4.14431 18.3361C2.71477 16.9066 2 16.1918 2 15.3036C2 14.4154 2.71477 13.7006 4.14431 12.2711L4.14431 12.2711L5.98438 10.5201L6.01515 10.4922C6.32401 10.614 6.71452 10.7441 7.19798 10.9053L7.19799 10.9053C7.60207 11.04 7.80411 11.1073 7.95873 11.2354C8.04473 11.3066 8.11907 11.3909 8.17908 11.485C8.287 11.6543 8.32876 11.8632 8.4123 12.2808Z',
  d6: 'M15.7054 14.1702L9.83443 8.28607C9.44465 7.89542 9.44501 7.26287 9.83522 6.87265L12.6455 4.06241C14.0204 2.68747 14.7079 2 15.5622 2C16.4164 2 17.1039 2.68747 18.4788 4.06241L19.9372 5.52076C21.3121 6.8957 21.9996 7.58317 21.9996 8.43745C21.9996 9.29173 21.3121 9.9792 19.9372 11.3541L17.1204 14.171C16.7295 14.5618 16.0957 14.5614 15.7054 14.1702Z',
  d7: 'M12.2378 5.96053L9.62689 8.57145C9.24131 8.95703 8.61617 8.95703 8.23059 8.57145C7.84501 8.18587 7.84501 7.56073 8.23059 7.17515L11.8765 3.52922C12.5157 2.88997 13.0643 2.34133 13.5622 1.96145C14.0948 1.55506 14.6838 1.25 15.4082 1.25C16.1326 1.25 16.7215 1.55506 17.2542 1.96145C17.7521 2.34133 18.3006 2.88998 18.9398 3.52923L20.4722 5.06159C21.1114 5.70077 21.6601 6.24936 22.04 6.74724C22.4463 7.27988 22.7514 7.86884 22.7514 8.59324C22.7514 9.31764 22.4463 9.9066 22.04 10.4392C21.6601 10.9371 21.1114 11.4857 20.4722 12.1249L16.8263 15.7708C16.4407 16.1564 15.8155 16.1564 15.43 15.7708C15.0444 15.3852 15.0444 14.7601 15.43 14.3745L18.0409 11.7636L15.9418 9.66439L13.0491 12.5571C12.6586 12.9476 12.0254 12.9476 11.6349 12.5571C11.2443 12.1666 11.2443 11.5334 11.6349 11.1429L14.5276 8.25017L12.2378 5.96053ZM13.6527 4.54697C14.121 4.08281 14.4635 3.75758 14.76 3.53136C15.117 3.25898 15.2891 3.22467 15.4082 3.22467C15.5272 3.22467 15.6994 3.25898 16.0564 3.53136C16.4361 3.82111 16.8913 4.27327 17.5898 4.97177L17.6979 5.07989L15.9418 6.83596L13.6527 4.54697ZM19.4545 10.3487C19.9186 9.88037 20.2438 9.53794 20.4701 9.24144C20.7424 8.88445 20.7767 8.7123 20.7767 8.59324C20.7767 8.47419 20.7424 8.30203 20.47 7.94504C20.1919 7.58042 19.764 7.14634 19.1121 6.49411L17.356 8.25017L19.4545 10.3487Z',
  d8: 'M7.97228 6.25249C8.15588 6.24288 8.33987 6.2611 8.51802 6.30653C8.80871 6.38066 9.0366 6.52989 9.23272 6.69155C9.41215 6.83946 9.60755 7.03489 9.82001 7.24738L9.84168 7.26906L16.7526 14.18C16.9651 14.3925 17.1605 14.5879 17.3084 14.7673C17.4701 14.9634 17.6193 15.1913 17.6935 15.482C17.7389 15.6601 17.7571 15.8441 17.7475 16.0277C17.7318 16.3273 17.6302 16.58 17.5101 16.8041C17.4003 17.009 17.247 17.2389 17.0803 17.4889C16.7327 18.0103 16.3053 18.6515 16.0415 18.9688C15.7802 19.2831 15.438 19.6179 14.9551 19.7146C14.5574 19.7941 14.1446 19.7388 13.7819 19.5574C13.3414 19.3371 13.0994 18.9241 12.93 18.5521C12.759 18.1765 12.5914 17.6737 12.3933 17.0793C12.2395 16.6181 12.201 16.5406 12.1837 16.5197C12.1623 16.4938 12.1369 16.4714 12.1086 16.4534C12.0857 16.4388 12.0455 16.4185 11.5688 16.3231L10.1853 16.0464C9.87391 15.9842 9.58429 15.9263 9.34624 15.8512C9.08224 15.7679 8.81618 15.6448 8.58569 15.4143C8.3552 15.1838 8.23214 14.9178 8.14882 14.6538C8.07369 14.4157 8.0158 14.1261 7.95356 13.8147L7.94692 13.7815L7.67686 12.4312C7.58151 11.9545 7.56118 11.9143 7.54662 11.8914C7.52856 11.8631 7.50618 11.8377 7.48031 11.8163C7.45945 11.799 7.38195 11.7605 6.92069 11.6067C6.3263 11.4086 5.82347 11.241 5.44789 11.07C5.07594 10.9006 4.66289 10.6586 4.44255 10.2181C4.26115 9.8554 4.20587 9.44258 4.28545 9.04494C4.38211 8.56196 4.71693 8.21978 5.03121 7.95851C5.34855 7.69469 5.98974 7.26725 6.51106 6.91973L6.51107 6.91973C6.76107 6.75303 6.99099 6.59972 7.19595 6.48987C7.41997 6.36981 7.67269 6.26818 7.97228 6.25249Z',
  d9: 'M12.3201 20.3203L12.256 20.3862L12.2188 20.4233C11.5357 21.1064 10.9699 21.6722 10.4613 22.0603C9.92616 22.4686 9.36711 22.7501 8.69309 22.7501C8.01907 22.7501 7.46002 22.4686 6.9249 22.0603C6.41628 21.6722 5.85051 21.1064 5.16743 20.4233L3.57684 18.8327C2.8937 18.1496 2.32788 17.5838 1.93981 17.0752C1.53153 16.5401 1.25 15.981 1.25 15.307C1.25 14.633 1.53153 14.074 1.93981 13.5388C2.32788 13.0302 2.89369 12.4644 3.57682 11.7813L3.62096 11.7372L3.67975 11.6799C4.08724 12.0787 4.53896 12.3046 4.82584 12.4353C5.23771 12.6228 5.74897 12.7973 6.25363 12.9658L6.48991 14.1473C6.5461 14.4288 6.61781 14.788 6.71796 15.1053C6.84246 15.4998 7.06279 16.0133 7.52462 16.4751C7.98645 16.9369 8.49988 17.1573 8.89437 17.2818C9.21169 17.3819 9.57094 17.4536 9.85244 17.5098L11.0339 17.7461C11.2024 18.2507 11.3769 18.762 11.5645 19.1739C11.6951 19.4608 11.9211 19.9127 12.3201 20.3203Z',
  d10: 'M17 16L8 7L4 10L8 12L8.5 15.5L12 16L14 20L17 16Z',
  d11: 'M16 15L21.9998 9.00016L14.9997 2L9 7.99967',
  d12: 'M5.99984 10.9998L2 14.9998L9.00016 21.9999L12.9998 18.0001',
  d13: 'M18.4995 5.50029L12.4995 11.5009M12 5.00073L19 12.0005',
  d14: 'M17.5 16.1923L7.80769 6.5L3.5 9.73077L7.80769 11.8846L8.34615 15.6538L12.1154 16.1923L14.2692 20.5L17.5 16.1923Z',
  d15: 'M14.4709 1.46967C14.7638 1.17678 15.2387 1.17678 15.5316 1.46967L18.4994 4.43749L16.1277 6.8092L12.6295 3.31105L14.4709 1.46967Z',
  d16: 'M11.5689 4.37171L9.50879 6.43178L13.0069 9.92993L15.067 7.86985L11.5689 4.37171Z',
  d17: 'M14.0676 10.9906L17.5696 14.4926L19.6297 12.4325L16.1277 8.93051L14.0676 10.9906Z',
  d18: 'M20.6903 11.3719L22.5317 9.53049C22.6724 9.38984 22.7514 9.19908 22.7514 9.00016C22.7514 8.80125 22.6724 8.61049 22.5317 8.46983L19.56 5.49815L17.1883 7.86985L20.6903 11.3719Z',
  d19: 'M4.37319 11.5649L1.46868 14.4696C1.1758 14.7625 1.1758 15.2373 1.46869 15.5302L8.46886 22.5304C8.60951 22.671 8.80028 22.7501 8.99919 22.75C9.19811 22.75 9.38888 22.671 9.52953 22.5304L12.4343 19.6255L11.2901 17.3371L7.24117 16.7587L6.66275 12.7097L4.37319 11.5649Z',
} as const;

export const IconChocolateStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chocolate-stroke-rounded IconChocolateStrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconChocolateDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chocolate-duotone-rounded IconChocolateDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconChocolateTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chocolate-twotone-rounded IconChocolateTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconChocolateSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chocolate-solid-rounded IconChocolateSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconChocolateBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chocolate-bulk-rounded IconChocolateBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconChocolateStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chocolate-stroke-sharp IconChocolateStrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
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
    </TheIconWrapper>
  );
};

export const IconChocolateSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chocolate-solid-sharp IconChocolateSolidSharp"
    >
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
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
    </TheIconWrapper>
  );
};

export const iconPackOfChocolate: TheIconSelfPack = {
  name: 'Chocolate',
  StrokeRounded: IconChocolateStrokeRounded,
  DuotoneRounded: IconChocolateDuotoneRounded,
  TwotoneRounded: IconChocolateTwotoneRounded,
  SolidRounded: IconChocolateSolidRounded,
  BulkRounded: IconChocolateBulkRounded,
  StrokeSharp: IconChocolateStrokeSharp,
  SolidSharp: IconChocolateSolidSharp,
};