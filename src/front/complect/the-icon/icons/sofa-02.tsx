import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M6 17V20M18 17V20',
  d2: 'M12 4L12 14',
  d3: 'M20 9C20 7.13077 20 6.19615 19.5981 5.5C19.3348 5.04394 18.9561 4.66523 18.5 4.40192C17.8038 4 16.8692 4 15 4H9C7.13077 4 6.19615 4 5.5 4.40192C5.04394 4.66523 4.66523 5.04394 4.40192 5.5C4 6.19615 4 7.13077 4 9',
  d4: 'M20 9C18.8954 9 18 9.89543 18 11V13C18 13.8273 17.8273 14 17 14H7C6.17267 14 6 13.8273 6 13V11C6 9.89543 5.10457 9 4 9C2.89543 9 2 9.89543 2 11C2 11.7403 2.4022 12.3866 3 12.7324V13C3 14.8856 3 15.8284 3.58579 16.4142C4.17157 17 5.11438 17 7 17H17C18.8856 17 19.8284 17 20.4142 16.4142C21 15.8284 21 14.8856 21 13V12.7324C21.5978 12.3866 22 11.7403 22 11C22 9.89543 21.1046 9 20 9Z',
  d5: 'M20 9C20 7.13077 20 6.19615 19.5981 5.5C19.3348 5.04394 18.9561 4.66523 18.5 4.40192C17.8038 4 16.8692 4 15 4H9C7.13077 4 6.19615 4 5.5 4.40192C5.04394 4.66523 4.66523 5.04394 4.40192 5.5C4 6.19615 4 7.13077 4 9M20 9C19.9896 9 19.9792 9.00008 19.9688 9.00024M20 9L19.9688 9.00024M4 9C4.01302 9 4.02602 9.00012 4.03898 9.00037M4 9L4.03898 9.00037M4.03898 9.00037C5.12556 9.02114 6 9.90845 6 11V13C6 13.8273 6.17267 14 7 14H17C17.8273 14 18 13.8273 18 13V11C18 9.90586 18.8786 9.01694 19.9688 9.00024',
  d6: 'M12 4V14M20 9C20 7.13077 20 6.19615 19.5981 5.5C19.3348 5.04394 18.9561 4.66523 18.5 4.40192C17.8038 4 16.8692 4 15 4H9C7.13077 4 6.19615 4 5.5 4.40192C5.04394 4.66523 4.66523 5.04394 4.40192 5.5C4 6.19615 4 7.13077 4 9',
  d7: 'M6 16C6.55228 16 7 16.4477 7 17V20C7 20.5523 6.55228 21 6 21C5.44772 21 5 20.5523 5 20V17C5 16.4477 5.44772 16 6 16ZM18 16C18.5523 16 19 16.4477 19 17V20C19 20.5523 18.5523 21 18 21C17.4477 21 17 20.5523 17 20V17C17 16.4477 17.4477 16 18 16Z',
  d8: 'M8.95396 3H15.046C15.9415 2.99998 16.6805 2.99997 17.2802 3.05432C17.9039 3.11085 18.4744 3.23242 19 3.5359C19.6081 3.88697 20.113 4.39192 20.4641 5C20.7676 5.52564 20.8892 6.09615 20.9457 6.71983C21 7.31953 21 8.05851 21 8.95399V9C21 9.55229 20.5523 10 20 10C19.4477 10 19 9.55229 19 9C19 8.04698 18.999 7.39908 18.9538 6.90036C18.9099 6.41539 18.8305 6.17051 18.7321 6C18.5565 5.69596 18.304 5.44349 18 5.26795C17.8295 5.16951 17.5846 5.09011 17.0996 5.04616C16.6009 5.00096 15.953 5 15 5H9C8.04698 5 7.39908 5.00096 6.90036 5.04616C6.41539 5.09011 6.17051 5.16951 6 5.26795C5.69596 5.44349 5.44349 5.69596 5.26795 6C5.16951 6.17051 5.09011 6.41539 5.04616 6.90036C5.00096 7.39908 5 8.04698 5 9C5 9.55229 4.55229 10 4 10C3.44772 10 3 9.55229 3 9L3 8.95396C2.99998 8.05849 2.99997 7.31952 3.05432 6.71983C3.11085 6.09615 3.23242 5.52564 3.5359 5C3.88697 4.39192 4.39192 3.88697 5 3.5359C5.52564 3.23242 6.09615 3.11085 6.71983 3.05432C7.31952 2.99997 8.05849 2.99998 8.95396 3Z',
  d9: 'M12 3C12.5523 3 13 3.44772 13 4L13 14C13 14.5523 12.5523 15 12 15C11.4477 15 11 14.5523 11 14L11 4C11 3.44772 11.4477 3 12 3Z',
  d10: 'M1.25 11C1.25 9.48122 2.48122 8.25 4 8.25C5.51878 8.25 6.75 9.48122 6.75 11V13C6.75 13.1057 6.75336 13.184 6.75832 13.2417C6.81601 13.2466 6.89428 13.25 7 13.25H17C17.1057 13.25 17.184 13.2466 17.2417 13.2417C17.2466 13.184 17.25 13.1057 17.25 13V11C17.25 9.48122 18.4812 8.25 20 8.25C21.5188 8.25 22.75 9.48122 22.75 11C22.75 11.8547 22.3598 12.6176 21.75 13.1213C21.75 13.9891 21.748 14.7151 21.6701 15.2945C21.5857 15.9223 21.4 16.4891 20.9445 16.9445C20.4891 17.4 19.9223 17.5857 19.2945 17.6701C18.6997 17.7501 17.9505 17.75 17.052 17.75H17.052H6.94801H6.94797C6.04951 17.75 5.3003 17.7501 4.70552 17.6701C4.07773 17.5857 3.51093 17.4 3.05546 16.9445C2.59999 16.4891 2.41432 15.9223 2.32991 15.2945C2.25201 14.7151 2.25002 13.9891 2.25 13.1213C1.64017 12.6176 1.25 11.8547 1.25 11Z',
  d11: 'M5 17.7031C5.54158 17.7508 6.19193 17.7507 6.94797 17.7507H7V20.0007C7 20.553 6.55228 21.0007 6 21.0007C5.44772 21.0007 5 20.553 5 20.0007V17.7031Z',
  d12: 'M19 17.7031V20.0007C19 20.553 18.5523 21.0007 18 21.0007C17.4477 21.0007 17 20.553 17 20.0007V17.7507H17.052C17.808 17.7507 18.4584 17.7508 19 17.7031Z',
  d13: 'M18.9991 8.43768C19.3091 8.31651 19.6466 8.25 19.9996 8.25C20.3522 8.25 20.6893 8.31637 20.9992 8.43731C20.9974 7.76961 20.9888 7.20005 20.9453 6.71983C20.8887 6.09615 20.7672 5.52564 20.4637 5C20.1126 4.39192 19.6077 3.88697 18.9996 3.5359C18.4739 3.23242 17.9034 3.11085 17.2797 3.05432C16.6801 2.99997 15.9411 2.99998 15.0456 3L11.9996 3L8.95354 3C8.05807 2.99998 7.3191 2.99997 6.71941 3.05432C6.09573 3.11085 5.52522 3.23242 4.99958 3.5359C4.3915 3.88697 3.88655 4.39192 3.53548 5C3.232 5.52564 3.11043 6.09615 3.0539 6.71983C3.01038 7.20006 3.00172 7.7696 3 8.43731C3.30982 8.31637 3.64695 8.25 3.99958 8.25C4.35257 8.25 4.69003 8.31651 5.00011 8.43768C5.00194 7.78102 5.01005 7.29418 5.04574 6.90036C5.08969 6.41539 5.16909 6.17051 5.26753 6C5.44307 5.69596 5.69554 5.44349 5.99958 5.26795C6.17009 5.16951 6.41497 5.09011 6.89994 5.04616C7.39865 5.00096 8.04656 5 8.99958 5H10.9996L10.9996 13.25H12.9996L12.9996 5H14.9996C15.9526 5 16.6005 5.00096 17.0992 5.04616C17.5842 5.09011 17.8291 5.16951 17.9996 5.26795C18.3036 5.44349 18.5561 5.69596 18.7316 6C18.8301 6.17051 18.9095 6.41539 18.9534 6.90036C18.9891 7.29418 18.9972 7.78102 18.9991 8.43768Z',
  d14: 'M5.0166 17V20M19.0166 17V20',
  d15: 'M20.0166 8.99185V5.99674C20.0166 4.89397 19.1212 4 18.0166 4H6.0166C4.91203 4 4.0166 4.89397 4.0166 5.99674V8.99185',
  d16: 'M12.0166 4V13.9837',
  d17: 'M5.99789 10.8453L5.99789 10.9733M5.99789 10.9733L5.99783 14.0114L11.9413 14.0018H18.0027L18.0026 10.9636M5.99789 10.9733C5.99731 10.9049 5.99331 10.8373 5.98603 10.7707C5.87669 9.7703 5.02921 8.99185 3.99996 8.99185C2.89649 8.99185 2.00195 9.88661 2.00195 10.9904C2.00195 11.6414 2.31314 12.2197 2.79483 12.5845C2.85189 12.6278 2.93586 12.6832 3.02923 12.7398L3.02924 16.8983C3.02924 16.9534 3.07393 16.9981 3.12906 16.9981L11.9132 16.9885H20.8714C20.9266 16.9885 20.9712 16.9438 20.9712 16.8886L20.9713 12.7301C21.0646 12.6735 21.1486 12.6181 21.2057 12.5749C21.6874 12.21 21.9985 11.6317 21.9985 10.9807C21.9985 9.87694 21.104 8.98218 20.0005 8.98218C18.9713 8.98218 18.1238 9.76063 18.0145 10.761C18.0072 10.8276 18.0032 10.8952 18.0026 10.9636M5.99789 10.9733C5.99793 10.979 5.99796 10.9847 5.99796 10.9904M18.0026 10.8356L18.0026 10.9636M18.0026 10.9636C18.0026 10.9693 18.0025 10.975 18.0025 10.9807',
  d18: 'M4 20.25V17.25H6V20.25H4ZM18 20.25V17.25H20V20.25H18Z',
  d19: 'M20.75 9.5C19.6454 9.5 18.75 10.3954 18.75 11.5V14.5H5.25V11.5C5.25 10.3954 4.35457 9.5 3.25 9.5C2.14543 9.5 1.25 10.3954 1.25 11.5C1.25 12.2403 1.6522 12.8866 2.25 13.2324V17.5H21.75V13.2324C22.3478 12.8866 22.75 12.2403 22.75 11.5C22.75 10.3954 21.8546 9.5 20.75 9.5Z',
  d20: 'M11.2495 13.5H6.24951V11.5C6.24951 9.84315 4.90637 8.5 3.24951 8.5V6.5C3.24951 4.98122 4.48073 3.75 5.99951 3.75H11.2495L11.2495 13.5Z',
  d21: 'M12.7495 3.75L12.7495 13.5H17.7495V11.5C17.7495 9.84315 19.0927 8.5 20.7495 8.5V6.5C20.7495 4.98122 19.5183 3.75 17.9995 3.75H12.7495Z',
} as const;

export const IconSofa02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sofa-02-stroke-rounded IconSofa02StrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSofa02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sofa-02-duotone-rounded IconSofa02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconSofa02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sofa-02-twotone-rounded IconSofa02TwotoneRounded"
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
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconSofa02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sofa-02-solid-rounded IconSofa02SolidRounded"
    >
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
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSofa02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sofa-02-bulk-rounded IconSofa02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconSofa02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sofa-02-stroke-sharp IconSofa02StrokeSharp"
    >
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSofa02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sofa-02-solid-sharp IconSofa02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSofa02: TheIconSelfPack = {
  name: 'Sofa02',
  StrokeRounded: IconSofa02StrokeRounded,
  DuotoneRounded: IconSofa02DuotoneRounded,
  TwotoneRounded: IconSofa02TwotoneRounded,
  SolidRounded: IconSofa02SolidRounded,
  BulkRounded: IconSofa02BulkRounded,
  StrokeSharp: IconSofa02StrokeSharp,
  SolidSharp: IconSofa02SolidSharp,
};