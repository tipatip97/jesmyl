import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M19 13L18.3417 12.3417C17.5896 11.5896 16.3803 11.5578 15.5896 12.2694L12.9931 14.6062C12.361 15.1751 12 15.9856 12 16.8361V21H14.6865C15.5238 21 16.323 20.6501 16.8909 20.0348L21.2044 15.3619C21.7159 14.8077 22 14.0812 22 13.327V6H21C19.8954 6 19 6.89543 19 8V13ZM19 13L16 16',
  d2: 'M5 13L5.65826 12.3417C6.41042 11.5896 7.61975 11.5578 8.41041 12.2694L11.0069 14.6062C11.639 15.1751 12 15.9856 12 16.8361V21H9.31349C8.4762 21 7.677 20.6501 7.10908 20.0348L2.79559 15.3619C2.28405 14.8077 2 14.0812 2 13.327V6H3C4.10457 6 5 6.89543 5 8V13ZM5 13L8 16',
  d3: 'M15 7.43427C14.4347 8.3725 13.406 9 12.2308 9C10.4465 9 9 7.55354 9 5.76923C9 4.594 9.6275 3.56534 10.5657 3',
  d4: 'M14 4H14.009',
  d5: 'M12 16.8361V21H14.6865C15.5238 21 16.323 20.6501 16.8909 20.0348L21.2044 15.3619C21.7159 14.8077 22 14.0812 22 13.327V6H21C19.8954 6 19 6.89543 19 8V13L18.3417 12.3417C17.5896 11.5896 16.3803 11.5578 15.5896 12.2694L12.9931 14.6062C12.361 15.1751 12 15.9856 12 16.8361Z',
  d6: 'M12 16.8361V21H9.31349C8.4762 21 7.677 20.6501 7.10908 20.0348L2.79559 15.3619C2.28405 14.8077 2 14.0812 2 13.327V6H3C4.10457 6 5 6.89543 5 8V13L5.65826 12.3417C6.41042 11.5896 7.61975 11.5578 8.41041 12.2694L11.0069 14.6062C11.639 15.1751 12 15.9856 12 16.8361Z',
  d7: 'M15.0879 11.7119C15.9486 10.9372 17.1703 10.8033 18.1551 11.2945C18.2187 11.3262 18.2761 11.369 18.3276 11.418C18.663 11.737 18.6696 12.2697 18.3423 12.5971L15.4697 15.4697C15.1768 15.7626 15.1768 16.2374 15.4697 16.5303C15.7626 16.8232 16.2374 16.8232 16.5303 16.5303L19.5303 13.5303C19.671 13.3897 19.75 13.1989 19.75 13V7.5C19.75 6.25736 20.7574 5.25 22 5.25C22.4142 5.25 22.75 5.58579 22.75 6V13.327C22.75 14.2698 22.3949 15.1779 21.7555 15.8706L17.442 20.5436C16.7321 21.3126 15.7331 21.75 14.6865 21.75C13.8053 21.75 13.3647 21.75 13.079 21.4915C13.0544 21.4692 13.0308 21.4456 13.0085 21.421C12.75 21.1353 12.75 20.6947 12.75 19.8135V14.7067C12.75 14.2681 12.75 14.0487 12.8365 13.8545C12.923 13.6603 13.086 13.5136 13.4121 13.2201L15.0879 11.7119Z',
  d8: 'M8.91213 11.7119C8.05135 10.9372 6.82969 10.8033 5.84489 11.2945C5.78126 11.3262 5.72392 11.369 5.6724 11.418C5.33704 11.737 5.33041 12.2697 5.65773 12.5971L8.53033 15.4697C8.82322 15.7626 8.82322 16.2374 8.53033 16.5303C8.23744 16.8232 7.76256 16.8232 7.46967 16.5303L4.46967 13.5303C4.32902 13.3897 4.25 13.1989 4.25 13V7.5C4.25 6.25736 3.24264 5.25 2 5.25C1.58579 5.25 1.25 5.58579 1.25 6V13.327C1.25 14.2698 1.60506 15.1779 2.24449 15.8706L6.55798 20.5436C7.26788 21.3126 8.26688 21.75 9.31349 21.75C10.1947 21.75 10.6353 21.75 10.921 21.4915C10.9456 21.4692 10.9692 21.4456 10.9915 21.421C11.25 21.1353 11.25 20.6947 11.25 19.8135V14.7067C11.25 14.2681 11.25 14.0487 11.1635 13.8545C11.077 13.6603 10.914 13.5136 10.5879 13.2201L8.91213 11.7119Z',
  d9: 'M11.4223 2.4838C11.7073 2.95685 11.5549 3.57139 11.0818 3.85643C10.4314 4.24836 10 4.95885 10 5.76914C10 7.00116 10.9987 7.99991 12.2308 7.99991C13.0411 7.99991 13.7515 7.56851 14.1435 6.91807C14.4285 6.44503 15.0431 6.29261 15.5161 6.57765C15.9892 6.86269 16.1416 7.47724 15.8565 7.95028C15.1178 9.1763 13.7709 9.99991 12.2308 9.99991C9.89418 9.99991 8 8.10573 8 5.76914C8 4.22896 8.8236 2.88213 10.0496 2.14338C10.5227 1.85834 11.1372 2.01075 11.4223 2.4838Z',
  d10: 'M13 4C13 3.44772 13.4457 3 13.9955 3H14.0045C14.5543 3 15 3.44772 15 4C15 4.55228 14.5543 5 14.0045 5H13.9955C13.4457 5 13 4.55228 13 4Z',
  d11: 'M14.9925 7.43158C14.4275 8.36924 13.3994 8.99636 12.225 8.99636C10.4417 8.99636 8.99609 7.55077 8.99609 5.76755C8.99609 4.59303 9.62322 3.565 10.5609 3',
  d12: 'M13.9932 3.99902H14.0022',
  d13: 'M8.50314 16.5202L4.9899 12.9656V7.86389C4.98058 7.5145 4.79226 7.12963 4.71382 6.97504C4.25148 6.19778 3.46936 6.01314 3.14196 6.00122H2.09213C2.03693 6.00122 1.99219 6.04597 1.99219 6.10116V14.453C1.99219 14.4783 2.00174 14.5026 2.01892 14.521L8.04066 21.0011H11.9904V15.4936L8.23841 12.1308C8.02 11.9937 7.56381 11.7157 6.95315 11.7581C6.17719 11.8121 5.75008 12.193 5.41486 12.5422',
  d14: 'M15.4775 16.5121L18.9907 12.9576V7.85583C19 7.50645 19.1884 7.12157 19.2668 6.96698C19.7291 6.18973 20.5112 6.00508 20.8387 5.99316H21.8885C21.9437 5.99316 21.9884 6.03791 21.9884 6.0931V14.445C21.9884 14.4702 21.9789 14.4945 21.9617 14.513L15.94 20.993H11.9902V15.4855L15.7422 12.1228C15.9606 11.9857 16.4168 11.7076 17.0275 11.7501C17.8861 11.8098 18.3176 12.2699 18.6701 12.6443',
  d15: 'M12.5 16V21.5H16.5L22.5 15V6.5H21.5C20.3954 6.5 19.5 7.39543 19.5 8.5V13.4551L17.2498 15.7053L16.5 14.9556L18.5955 12.86C17.7541 12.0578 16.4263 12.0737 15.6043 12.8957L12.5 16Z',
  d16: 'M11.5 16V21.5H7.5L1.5 15V6.5H2.5C3.60457 6.5 4.5 7.39543 4.5 8.5V13.4551L6.75023 15.7053L7.5 14.9556L5.40448 12.86C6.24587 12.0578 7.57367 12.0737 8.3957 12.8957L11.5 16Z',
  d17: 'M10 6.12576C10 5.31547 10.4314 4.60498 11.0818 4.21305L10.0496 2.5C8.8236 3.23875 8 4.58558 8 6.12576C8 8.46235 9.89418 10.3565 12.2308 10.3565C13.7709 10.3565 15.1178 9.53292 15.8565 8.3069L14.1435 7.27469C13.7515 7.92513 13.0411 8.35652 12.2308 8.35652C10.9987 8.35652 10 7.35778 10 6.12576Z',
  d18: 'M14 3.35645C13.4477 3.35645 13 3.80416 13 4.35645C13 4.90873 13.4477 5.35645 14 5.35645H14.009C14.5613 5.35645 15.009 4.90873 15.009 4.35645C15.009 3.80416 14.5613 3.35645 14.009 3.35645H14Z',
} as const;

export const IconDuaStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dua-stroke-rounded IconDuaStrokeRounded"
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

export const IconDuaDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dua-duotone-rounded IconDuaDuotoneRounded"
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

export const IconDuaTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dua-twotone-rounded IconDuaTwotoneRounded"
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

export const IconDuaSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dua-solid-rounded IconDuaSolidRounded"
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

export const IconDuaBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dua-bulk-rounded IconDuaBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconDuaStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dua-stroke-sharp IconDuaStrokeSharp"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconDuaSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dua-solid-sharp IconDuaSolidSharp"
    >
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
    </TheIconWrapper>
  );
};

export const iconPackOfDua: TheIconSelfPack = {
  name: 'Dua',
  StrokeRounded: IconDuaStrokeRounded,
  DuotoneRounded: IconDuaDuotoneRounded,
  TwotoneRounded: IconDuaTwotoneRounded,
  SolidRounded: IconDuaSolidRounded,
  BulkRounded: IconDuaBulkRounded,
  StrokeSharp: IconDuaStrokeSharp,
  SolidSharp: IconDuaSolidSharp,
};