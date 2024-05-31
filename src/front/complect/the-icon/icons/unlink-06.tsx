import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M13.5 13V11.5C13.5 10.0955 13.5 9.39331 13.1629 8.88886C13.017 8.67048 12.8295 8.48298 12.6111 8.33706C12.1705 8.04261 11.5789 8.00539 10.5 8.00068C10.3439 8 10.1775 8 10 8C8.59554 8 7.89331 8 7.38886 8.33706C7.17048 8.48298 6.98298 8.67048 6.83706 8.88886C6.5 9.39331 6.5 10.0955 6.5 11.5V17.5C6.5 18.9045 6.5 19.6067 6.83706 20.1111C6.98298 20.3295 7.17048 20.517 7.38886 20.6629C7.89331 21 8.59554 21 10 21C11.4045 21 12.1067 21 12.6111 20.6629C12.8295 20.517 13.017 20.3295 13.1629 20.1111C13.3503 19.8307 13.4335 19.4892 13.4705 19',
  d2: 'M10.5 11V12.5C10.5 13.9045 10.5 14.6067 10.8371 15.1111C10.983 15.3295 11.1705 15.517 11.3889 15.6629C11.8295 15.9574 12.4211 15.9946 13.5 15.9993C13.6561 16 13.8225 16 14 16C15.4045 16 16.1067 16 16.6111 15.6629C16.8295 15.517 17.017 15.3295 17.1629 15.1111C17.5 14.6067 17.5 13.9045 17.5 12.5V6.5C17.5 5.09554 17.5 4.39331 17.1629 3.88886C17.017 3.67048 16.8295 3.48298 16.6111 3.33706C16.1067 3 15.4045 3 14 3C12.5955 3 11.8933 3 11.3889 3.33706C11.1705 3.48298 10.983 3.67048 10.8371 3.88886C10.6497 4.16925 10.5665 4.51076 10.5295 5',
  d3: 'M20 10.5L22 9M20 14.5L22 16',
  d4: 'M4 10.5L2 9M4 14.5L2 16',
  d5: 'M10.5148 8.00075L10.5 11V12.5C10.5 13.9045 10.5 14.6067 10.8371 15.1111C10.983 15.3295 11.1705 15.517 11.3889 15.6629C11.8275 15.956 12.4157 15.9943 13.4852 15.9993L13.4705 19C13.4335 19.4892 13.3503 19.8307 13.1629 20.1111C13.017 20.3295 12.8295 20.517 12.6111 20.6629C12.1067 21 11.4045 21 10 21C8.59554 21 7.89331 21 7.38886 20.6629C7.17048 20.517 6.98298 20.3295 6.83706 20.1111C6.5 19.6067 6.5 18.9045 6.5 17.5V11.5C6.5 10.0955 6.5 9.39331 6.83706 8.88886C6.98298 8.67048 7.17048 8.48298 7.38886 8.33706C7.89331 8 8.59554 8 10 8C10.1775 8 10.3439 8 10.5 8.00068C10.5049 8.0007 10.5099 8.00072 10.5148 8.00075Z',
  d6: 'M10.5044 7.00689C11.039 7.00923 11.5193 7.01881 11.9318 7.07581C12.3604 7.13503 12.7791 7.25267 13.1667 7.51159C13.4943 7.73037 13.7755 8.01151 13.9944 8.33894C14.291 8.78268 14.4026 9.26775 14.4527 9.76078C14.5001 10.2258 14.5 10.7953 14.5 11.4558L14.5 12.5039C14.5 13.056 14.0523 13.5035 13.5 13.5035C12.9477 13.5035 12.5 13.056 12.5 12.5039V11.5043C12.5 10.7816 12.4988 10.3148 12.463 9.96311C12.4117 9.4585 12.1581 9.12526 11.658 9.05615C11.3948 9.01979 11.0398 9.00842 10.4956 9.00605C10.3421 9.00538 10.1781 9.00538 10 9.00538C9.27696 9.00538 8.80995 9.00659 8.45813 9.04236C7.8793 9.10122 7.59336 9.40933 7.537 9.96311C7.50121 10.3148 7.5 10.7816 7.5 11.5043V17.5019C7.5 18.2246 7.50121 18.6914 7.537 19.0431C7.57104 19.3776 7.65624 19.6399 7.94443 19.8324C8.00496 19.8728 8.12303 19.9298 8.45813 19.9638C8.80995 19.9996 9.27696 20.0008 10 20.0008C10.723 20.0008 11.1901 19.9996 11.5419 19.9638C11.877 19.9298 11.995 19.8728 12.0556 19.8324C12.2509 19.7019 12.3782 19.5268 12.4256 19.2982C12.5377 18.7576 13.0669 18.4102 13.6077 18.5222C14.1485 18.6343 14.4961 19.1633 14.384 19.7039C14.3144 20.0398 14.1973 20.3637 13.9944 20.6673C13.7755 20.9947 13.4943 21.2758 13.1667 21.4946C12.7228 21.7911 12.2375 21.9026 11.7443 21.9528C11.2791 22.0001 10.7093 22 10.0486 22H9.95143C9.29069 22 8.72089 22.0001 8.25572 21.9528C7.76248 21.9026 7.27721 21.7911 6.83329 21.4946C6.50572 21.2758 6.22447 20.9947 6.00559 20.6673C5.70898 20.2235 5.59745 19.7385 5.54727 19.2454C5.49995 18.7804 5.49997 18.2109 5.5 17.5504L5.5 11.5043C5.5 10.8232 5.49879 10.2371 5.54727 9.76078C5.59745 9.26775 5.70898 8.78268 6.00559 8.33894C6.22447 8.01151 6.50572 7.73037 6.83329 7.51159C7.27721 7.21509 7.76248 7.10361 8.25572 7.05345C9.0006 6.97771 9.75631 7.00363 10.5044 7.00689Z',
  d7: 'M13.4956 16.9931C12.961 16.9908 12.4807 16.9812 12.0682 16.9242C11.6396 16.865 11.2209 16.7473 10.8333 16.4885C10.5057 16.2697 10.2245 15.9886 10.0056 15.6612C9.70897 15.2175 9.59744 14.7324 9.54726 14.2394C9.49994 13.7745 9.49997 13.205 9.5 12.5446L9.5 11.4965C9.5 10.9445 9.94771 10.497 10.5 10.497C11.0523 10.497 11.5 10.9445 11.5 11.4965V12.496C11.5 13.2187 11.5012 13.6855 11.537 14.0371C11.5883 14.5417 11.8419 14.8749 12.342 14.944C12.6052 14.9804 12.9602 14.9917 13.5044 14.9941C13.6579 14.9948 13.8219 14.9948 14 14.9948C14.723 14.9948 15.1901 14.9936 15.5419 14.9578C15.877 14.9237 15.995 14.8668 16.0556 14.8263C16.3438 14.6339 16.429 14.3716 16.463 14.0371C16.4988 13.6855 16.5 13.2187 16.5 12.496V6.499C16.5 5.77631 16.4988 5.30953 16.463 4.95789C16.4041 4.37934 16.0959 4.09354 15.5419 4.03721C15.1901 4.00144 14.723 4.00023 14 4.00023C13.277 4.00023 12.8099 4.00144 12.4581 4.03721C12.0386 4.07986 11.6691 4.24588 11.5744 4.7028C11.4623 5.24333 10.9331 5.59071 10.3923 5.4787C9.85148 5.36668 9.50393 4.8377 9.616 4.29717C9.68564 3.96127 9.80265 3.63742 10.0056 3.33385C10.2245 3.00644 10.5057 2.72533 10.8333 2.50657C11.2772 2.21009 11.7625 2.09862 12.2557 2.04847C12.7209 2.00117 13.2907 2.00119 13.9514 2.00122C14.5483 2.00122 15.1497 1.98801 15.7443 2.04847C16.2375 2.09862 16.7228 2.21009 17.1667 2.50657C17.4943 2.72533 17.7755 3.00644 17.9944 3.33385C18.291 3.77755 18.4026 4.26258 18.4527 4.75558C18.5001 5.22052 18.5 5.79004 18.5 6.45046L18.5 12.496C18.5 12.5123 18.5 12.5284 18.5 12.5446C18.5 13.205 18.5001 13.7745 18.4527 14.2394C18.4026 14.7324 18.291 15.2175 17.9944 15.6612C17.7755 15.9886 17.4943 16.2697 17.1667 16.4885C16.7228 16.7849 16.2375 16.8964 15.7443 16.9466C14.9994 17.0223 14.2437 16.9964 13.4956 16.9931Z',
  d8: 'M22.8001 8.40006C23.1314 8.84189 23.0419 9.46869 22.6001 9.80006L20.6001 11.3001C20.1582 11.6314 19.5314 11.5419 19.2001 11.1001C18.8687 10.6582 18.9582 10.0314 19.4001 9.70006L21.4001 8.20006C21.8419 7.86869 22.4687 7.95823 22.8001 8.40006ZM19.2001 13.9001C19.5314 13.4582 20.1582 13.3687 20.6001 13.7001L22.6001 15.2001C23.0419 15.5314 23.1314 16.1582 22.8001 16.6001C22.4687 17.0419 21.8419 17.1314 21.4001 16.8001L19.4001 15.3001C18.9582 14.9687 18.8687 14.3419 19.2001 13.9001Z',
  d9: 'M1.19994 8.40006C0.86857 8.84189 0.958113 9.46869 1.39994 9.80006L3.39994 11.3001C3.84177 11.6314 4.46857 11.5419 4.79994 11.1001C5.13131 10.6582 5.04177 10.0314 4.59994 9.70006L2.59994 8.20006C2.15811 7.86869 1.53131 7.95823 1.19994 8.40006ZM4.79994 13.9001C4.46857 13.4582 3.84177 13.3687 3.39994 13.7001L1.39994 15.2001C0.958113 15.5314 0.86857 16.1582 1.19994 16.6001C1.53131 17.0419 2.15811 17.1314 2.59994 16.8001L4.59994 15.3001C5.04177 14.9687 5.13131 14.3419 4.79994 13.9001Z',
  d10: 'M13.5 14V8H6.5V21H13.5V18M10.5 10V16H17.5V3H10.5V6',
  d11: 'M9.5 3C9.5 2.44772 9.94772 2 10.5 2H17.5C18.0523 2 18.5 2.44772 18.5 3V16C18.5 16.5523 18.0523 17 17.5 17H10.5C9.94772 17 9.5 16.5523 9.5 16V10H11.5V15H16.5V4H11.5V6H9.5V3ZM5.5 8C5.5 7.44772 5.94772 7 6.5 7H13.5C14.0523 7 14.5 7.44772 14.5 8V14H12.5V9H7.5V20H12.5V18H14.5V21C14.5 21.5523 14.0523 22 13.5 22H6.5C5.94772 22 5.5 21.5523 5.5 21V8Z',
  d12: 'M22.5027 9.8002L20.5027 11.3002L19.3027 9.7002L21.3027 8.2002L22.5027 9.8002ZM21.3027 16.8002L19.3027 15.3002L20.5027 13.7002L22.5027 15.2002L21.3027 16.8002Z',
  d13: 'M1.49727 9.8002L3.49727 11.3002L4.69727 9.7002L2.69727 8.2002L1.49727 9.8002ZM2.69727 16.8002L4.69727 15.3002L3.49727 13.7002L1.49727 15.2002L2.69727 16.8002Z',
} as const;

export const IconUnlink06StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="unlink-06-stroke-rounded IconUnlink06StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconUnlink06DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="unlink-06-duotone-rounded IconUnlink06DuotoneRounded"
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
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      />
    </TheIconWrapper>
  );
};

export const IconUnlink06TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="unlink-06-twotone-rounded IconUnlink06TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      />
    </TheIconWrapper>
  );
};

export const IconUnlink06SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="unlink-06-solid-rounded IconUnlink06SolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconUnlink06BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="unlink-06-bulk-rounded IconUnlink06BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconUnlink06StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="unlink-06-stroke-sharp IconUnlink06StrokeSharp"
    >
      <path 
        d={d.d10} 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUnlink06SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="unlink-06-solid-sharp IconUnlink06SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
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

export const iconPackOfUnlink06: TheIconSelfPack = {
  name: 'Unlink06',
  StrokeRounded: IconUnlink06StrokeRounded,
  DuotoneRounded: IconUnlink06DuotoneRounded,
  TwotoneRounded: IconUnlink06TwotoneRounded,
  SolidRounded: IconUnlink06SolidRounded,
  BulkRounded: IconUnlink06BulkRounded,
  StrokeSharp: IconUnlink06StrokeSharp,
  SolidSharp: IconUnlink06SolidSharp,
};