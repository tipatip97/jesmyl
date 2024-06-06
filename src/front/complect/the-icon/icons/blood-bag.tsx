import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M5 7.37225C13 3.24278 11.5 10.0046 19 7.37228',
  d2: 'M5 9C5 6.19108 5 4.78661 5.67412 3.77772C5.96596 3.34096 6.34096 2.96596 6.77772 2.67412C7.78661 2 9.19108 2 12 2C14.8089 2 16.2134 2 17.2223 2.67412C17.659 2.96596 18.034 3.34096 18.3259 3.77772C19 4.78661 19 6.19108 19 9V11C19 13.8089 19 15.2134 18.3259 16.2223C18.034 16.659 17.659 17.034 17.2223 17.3259C16.2134 18 14.8089 18 12 18C9.19108 18 7.78661 18 6.77772 17.3259C6.34096 17.034 5.96596 16.659 5.67412 16.2223C5 15.2134 5 13.8089 5 11V9Z',
  d3: 'M12.0142 10L10.5736 11.4876C9.79996 12.3003 9.81331 13.6088 10.587 14.4077C11.3739 15.2066 12.6411 15.1928 13.4148 14.3939C14.2017 13.5812 14.1884 12.2727 13.4148 11.4738L12.0142 10Z',
  d4: 'M8 22C10.2091 22 12 20.2091 12 18',
  d5: 'M5 11L5.00781 7.31359C5.00781 7.31359 7.67241 6.00786 9.50025 6.00004C10.6798 5.99499 11.4995 6.48682 12.33 6.98518C13.1087 7.4524 13.8969 7.92537 15.0003 8.00004C16.5597 8.10558 18.9667 7.50712 18.9949 7.5001C19 7.95101 19 8.44845 19 9.00004V11C19 13.809 19 15.2134 18.3259 16.2223C18.034 16.6591 17.659 17.0341 17.2223 17.3259C16.2134 18 14.8089 18 12 18C9.19108 18 7.78661 18 6.77772 17.3259C6.34096 17.0341 5.96596 16.6591 5.67412 16.2223C5 15.2134 5 13.809 5 11ZM10.5736 11.4876L12.0142 10L13.4148 11.4738C14.1884 12.2727 14.2017 13.5812 13.4148 14.3939C12.6411 15.1928 11.3739 15.2066 10.587 14.4077C9.81331 13.6088 9.79996 12.3003 10.5736 11.4876Z',
  d6: 'M12.0523 1.125H11.9477H11.9477C10.6315 1.12499 9.57011 1.12498 8.7185 1.21192C7.83944 1.30166 7.0771 1.49202 6.40271 1.94425C5.87382 2.29891 5.41971 2.75464 5.06632 3.28542C4.61571 3.96223 4.42603 4.72731 4.33661 5.60952C4.2913 6.05648 4.26969 6.56103 4.25939 7.12963L4.25 10.8997V10.8997C4.24999 12.2206 4.24998 13.2858 4.33661 14.1405C4.42603 15.0227 4.61571 15.7878 5.06632 16.4646C5.41971 16.9954 5.87382 17.4511 6.40271 17.8058C7.0771 18.258 7.83944 18.4483 8.7185 18.5381C9.57011 18.625 10.6315 18.625 11.9477 18.625H12.0523C13.3685 18.625 14.4299 18.625 15.2815 18.5381C16.1606 18.4483 16.9229 18.258 17.5973 17.8058C18.1262 17.4511 18.5803 16.9954 18.9337 16.4646C19.3843 15.7878 19.574 15.0227 19.6634 14.1405C19.75 13.2858 19.75 12.2206 19.75 10.8997L19.7406 7.12693C19.7302 6.55944 19.7086 6.05578 19.6634 5.60952C19.574 4.72731 19.3843 3.96223 18.9337 3.28542C18.5803 2.75464 18.1262 2.29891 17.5973 1.94425C16.9229 1.49202 16.1606 1.30166 15.2815 1.21192C14.4299 1.12498 13.3685 1.12499 12.0523 1.125H12.0523ZM17.7358 5.80619C17.7664 6.10868 17.7848 6.44769 17.7959 6.83651C16.5296 7.17458 15.6243 7.17644 14.9147 7.04038C14.1194 6.8879 13.5193 6.55927 12.8229 6.17789C12.7319 6.12809 12.6393 6.07738 12.5444 6.02605C11.7347 5.58805 10.8053 5.13938 9.51611 5.12524C8.59961 5.11518 7.54769 5.32416 6.26074 5.83972L6.26408 5.80619C6.33792 5.07773 6.47477 4.66965 6.67721 4.36559C6.88925 4.04712 7.16171 3.77368 7.47904 3.56088C7.78202 3.35772 8.18864 3.22037 8.9145 3.14627C9.65655 3.07051 10.6192 3.06934 11.9999 3.06934C13.3807 3.06934 14.3433 3.07051 15.0853 3.14627C15.8112 3.22037 16.2178 3.35772 16.5208 3.56088C16.8381 3.77368 17.1106 4.04712 17.3226 4.36559C17.5251 4.66965 17.6619 5.07773 17.7358 5.80619ZM12.5579 9.35835C12.4171 9.21025 12.222 9.12597 12.0177 9.12501C11.8134 9.12405 11.6176 9.20648 11.4754 9.35325L10.0304 10.8455C8.97737 11.9516 8.99658 13.7185 10.0482 14.8044L10.0527 14.809C11.1376 15.9104 12.8894 15.8895 13.9535 14.7907C15.0243 13.6849 15.0058 11.9166 13.9562 10.8298L12.5579 9.35835Z',
  d7: 'M12 16.875C12.5523 16.875 13 17.3227 13 17.875C13 20.6364 10.7614 22.875 8 22.875C7.44772 22.875 7 22.4273 7 21.875C7 21.3227 7.44772 20.875 8 20.875C9.65685 20.875 11 19.5319 11 17.875C11 17.3227 11.4477 16.875 12 16.875Z',
  d8: 'M11.9477 1.125H12.0523C13.3685 1.12499 14.4299 1.12497 15.2815 1.21192C16.1606 1.30166 16.9229 1.49202 17.5973 1.94425C18.1262 2.29891 18.5803 2.75464 18.9337 3.28542C19.3843 3.96223 19.574 4.72731 19.6634 5.60952C19.7086 6.05578 19.7302 6.55944 19.7406 7.12693L19.75 10.8997C19.75 12.2206 19.75 13.2858 19.6634 14.1405C19.574 15.0227 19.3843 15.7878 18.9337 16.4646C18.5803 16.9954 18.1262 17.4511 17.5973 17.8058C16.9229 18.258 16.1606 18.4483 15.2815 18.5381C14.4299 18.625 13.3685 18.625 12.0523 18.625H11.9477C10.6315 18.625 9.57011 18.625 8.7185 18.5381C7.83944 18.4483 7.0771 18.258 6.40271 17.8058C5.87382 17.4511 5.41971 16.9954 5.06632 16.4646C4.61571 15.7878 4.42603 15.0227 4.33661 14.1405C4.24997 13.2858 4.24999 12.2206 4.25 10.8997L4.25939 7.12963C4.26969 6.56103 4.2913 6.05648 4.33661 5.60952C4.42603 4.72731 4.61571 3.96223 5.06632 3.28542C5.41971 2.75464 5.87382 2.29891 6.40271 1.94425C7.0771 1.49202 7.83944 1.30166 8.7185 1.21192C9.57012 1.12497 10.6315 1.12499 11.9477 1.125ZM17.7959 6.83651C17.7848 6.44769 17.7664 6.10868 17.7358 5.80619C17.6619 5.07773 17.5251 4.66965 17.3226 4.36559C17.1106 4.04712 16.8381 3.77368 16.5208 3.56088C16.2178 3.35772 15.8112 3.22037 15.0853 3.14627C14.3433 3.07051 13.3807 3.06934 11.9999 3.06934C10.6192 3.06934 9.65655 3.07051 8.9145 3.14627C8.18864 3.22037 7.78202 3.35772 7.47904 3.56088C7.16171 3.77368 6.88925 4.04712 6.67721 4.36559C6.47477 4.66965 6.33792 5.07773 6.26408 5.80619L6.26074 5.83972C7.54769 5.32416 8.59961 5.11518 9.51611 5.12524C10.8053 5.13938 11.7347 5.58805 12.5444 6.02605C12.6393 6.07738 12.7319 6.12809 12.8229 6.17789C13.5193 6.55927 14.1194 6.8879 14.9147 7.04038C15.6243 7.17644 16.5296 7.17458 17.7959 6.83651Z',
  d9: 'M12.0177 9.12501C12.222 9.12597 12.4171 9.21025 12.5579 9.35835L13.9562 10.8298C15.0058 11.9166 15.0243 13.6849 13.9535 14.7907C12.8894 15.8895 11.1376 15.9104 10.0527 14.809L10.0482 14.8044C8.99658 13.7185 8.97737 11.9516 10.0304 10.8455L11.4754 9.35325C11.6176 9.20648 11.8134 9.12405 12.0177 9.12501Z',
  d10: 'M10.906 18.625C10.5736 19.9199 9.39855 20.8769 8 20.8769C7.44772 20.8769 7 21.3246 7 21.8769C7 22.4292 7.44772 22.8769 8 22.8769C10.5069 22.8769 12.5829 21.0319 12.9443 18.6257C12.6608 18.6269 12.3637 18.6269 12.0523 18.6269H11.9477C11.581 18.6269 11.2341 18.6269 10.906 18.625Z',
  d11: 'M5 18H19V2.00041L5 2V18Z',
  d12: 'M13 17.75C13 20.5114 10.7614 22.75 8 22.75V20.75C9.65685 20.75 11 19.4069 11 17.75H13Z',
  d13: 'M4.53375 1.53475C4.71543 1.35242 4.96185 1.24999 5.21878 1.25L18.7813 1.2504C19.3163 1.25042 19.75 1.68569 19.75 2.22262V17.7778C19.75 18.3147 19.3163 18.75 18.7812 18.75H5.21875C4.68372 18.75 4.25 18.3147 4.25 17.7778V2.22222C4.25 1.96437 4.35207 1.71708 4.53375 1.53475ZM17.8125 3.19468L6.1875 3.19434V6.80738C9.54675 5.35966 10.9707 6.14169 12.4601 6.95966C13.7557 7.67121 15.1009 8.40995 17.8125 7.73179V3.19468ZM10.217 11.2851L12.0177 9.5L13.7684 11.2686C14.7355 12.2272 14.7522 13.7975 13.7684 14.7727C12.8014 15.7314 11.2174 15.7479 10.2337 14.7892C9.26663 13.8305 9.24995 12.2603 10.217 11.2851Z',
} as const;

export const IconBloodBagStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="blood-bag-stroke-rounded IconBloodBagStrokeRounded"
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
        strokeLinejoin="round" 
      />
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBloodBagDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="blood-bag-duotone-rounded IconBloodBagDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBloodBagTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="blood-bag-twotone-rounded IconBloodBagTwotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconBloodBagSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="blood-bag-solid-rounded IconBloodBagSolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconBloodBagBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="blood-bag-bulk-rounded IconBloodBagBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
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

export const IconBloodBagStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="blood-bag-stroke-sharp IconBloodBagStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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

export const IconBloodBagSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="blood-bag-solid-sharp IconBloodBagSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfBloodBag: TheIconSelfPack = {
  name: 'BloodBag',
  StrokeRounded: IconBloodBagStrokeRounded,
  DuotoneRounded: IconBloodBagDuotoneRounded,
  TwotoneRounded: IconBloodBagTwotoneRounded,
  SolidRounded: IconBloodBagSolidRounded,
  BulkRounded: IconBloodBagBulkRounded,
  StrokeSharp: IconBloodBagStrokeSharp,
  SolidSharp: IconBloodBagSolidSharp,
};