import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M22 13.5V8H2V13.4286C2 17.4692 2 19.4895 3.30175 20.7447C4.508 21.9079 6.3955 21.9932 10 21.9995',
  d2: 'M17 18.5H17.009',
  d3: 'M21.772 18.0225C21.924 18.2357 22 18.3422 22 18.5C22 18.6578 21.924 18.7643 21.772 18.9775C21.089 19.9353 19.3446 22 17 22C14.6554 22 12.911 19.9353 12.228 18.9775C12.076 18.7643 12 18.6578 12 18.5C12 18.3422 12.076 18.2357 12.228 18.0225C12.911 17.0647 14.6554 15 17 15C19.3446 15 21.089 17.0647 21.772 18.0225Z',
  d4: 'M2 8L2.96154 5.69231C3.70726 3.90257 4.08013 3.0077 4.8359 2.50385C5.59167 2 6.56112 2 8.5 2H15.5C17.4389 2 18.4083 2 19.1641 2.50385C19.9199 3.0077 20.2927 3.90257 21.0385 5.69231L22 8',
  d5: 'M12 8V2',
  d6: 'M10 12H14',
  d7: 'M2 8V13.4286C2 17.4692 2 19.4895 3.30175 20.7447C4.6035 22 6.69863 22 10.8889 22H13.1111C14.414 22 15.5143 22 16.4511 21.9623C14.3841 21.678 12.8566 19.859 12.228 18.9775C12.076 18.7643 12 18.6578 12 18.5C12 18.3422 12.076 18.2357 12.228 18.0225C12.911 17.0647 14.6554 15 17 15C19.3446 15 21.089 17.0647 21.772 18.0225C21.7963 18.0566 21.8187 18.0881 21.8392 18.1174C22 16.9522 22 15.4409 22 13.4286V8H2Z',
  d8: 'M21.6121 19.1951C20.9942 20.0123 19.8063 21.319 18.2386 21.8075C19.3169 21.6404 20.0933 21.3281 20.6983 20.7447C21.1305 20.3279 21.4193 19.8267 21.6121 19.1951Z',
  d9: 'M15.4724 1.25H8.52755C7.62451 1.24998 6.86914 1.24996 6.25004 1.31454C5.59532 1.38284 5.0034 1.53023 4.45681 1.87979C3.91021 2.22936 3.54072 2.69681 3.22319 3.2503C2.92293 3.77368 2.63242 4.44256 2.28512 5.24222L1.32543 7.45172C1.11784 7.92965 1.35344 8.47851 1.85164 8.67764C2.34984 8.87678 2.922 8.65078 3.12958 8.17285L4.06924 6.00946C4.4418 5.15172 4.69249 4.57789 4.9355 4.1543C5.16699 3.75079 5.34898 3.56262 5.54097 3.43984C5.73295 3.31706 5.98402 3.22828 6.46133 3.17849C6.96239 3.12622 7.61098 3.12494 8.57963 3.12494H11V8H13V3.12494H15.4204C16.389 3.12494 17.0376 3.12622 17.5387 3.17849C18.016 3.22828 18.2671 3.31706 18.459 3.43984C18.651 3.56262 18.833 3.75079 19.0645 4.1543C19.3075 4.57789 19.5582 5.15172 19.9308 6.00946L20.8704 8.17285C21.078 8.65078 21.6502 8.87678 22.1484 8.67764C22.6466 8.47851 22.8822 7.92965 22.6746 7.45172L21.7149 5.24222C21.3676 4.44256 21.0771 3.77368 20.7768 3.2503C20.4593 2.69681 20.0898 2.22936 19.5432 1.87979C18.9966 1.53023 18.4047 1.38284 17.75 1.31454C17.1309 1.24996 16.3755 1.24998 15.4724 1.25Z',
  d10: 'M17 14.25C15.6017 14.25 14.4205 14.8652 13.5294 15.5609C12.6368 16.2578 11.9522 17.1169 11.5879 17.6278C11.4661 17.7948 11.25 18.0914 11.25 18.5C11.25 18.9086 11.4661 19.2052 11.5879 19.3722C11.9522 19.8831 12.6368 20.7422 13.5294 21.4391C14.4205 22.1348 15.6017 22.75 17 22.75C18.3983 22.75 19.5795 22.1348 20.4706 21.4391C21.3632 20.7422 22.0478 19.8831 22.4121 19.3722C22.5339 19.2052 22.75 18.9086 22.75 18.5C22.75 18.0914 22.5339 17.7948 22.4121 17.6278C22.0478 17.1169 21.3632 16.2578 20.4706 15.5609C19.5795 14.8652 18.3983 14.25 17 14.25ZM16.9933 17C16.1686 17 15.5 17.6716 15.5 18.5C15.5 19.3284 16.1686 20 16.9933 20H17.0067C17.8314 20 18.5 19.3284 18.5 18.5C18.5 17.6716 17.8314 17 17.0067 17H16.9933Z',
  d11: 'M1.25 8C1.25 7.58579 1.58579 7.25 2 7.25L22 7.25C22.4142 7.25 22.75 7.58579 22.75 8V13.4872L22.75 14.0907C22.75 14.7327 22.75 15.0536 22.5771 15.1345C22.4043 15.2154 22.1454 14.9994 21.6275 14.5674C21.5512 14.5037 21.4732 14.4406 21.3937 14.3785C20.3498 13.5636 18.8505 12.75 17 12.75C15.1495 12.75 13.6502 13.5636 12.6063 14.3785C11.5585 15.1966 10.7793 16.1791 10.3718 16.7497L10.3601 16.7655C10.2174 16.9595 9.75 17.5948 9.75 18.5C9.75 19.4052 10.2174 20.0405 10.3601 20.2345L10.3718 20.2504C10.6004 20.5704 10.999 21.0606 11.4899 21.5737L11.4899 21.5737C12.0079 22.115 12.2669 22.3857 12.1891 22.5679C12.1113 22.75 11.7513 22.75 11.0313 22.75H10.8338C8.78537 22.75 7.17418 22.75 5.9157 22.5869C4.6271 22.4198 3.59552 22.0699 2.78115 21.2846C1.96296 20.4957 1.59493 19.4901 1.41991 18.2347C1.24997 17.0159 1.24999 15.4578 1.25 13.4872V13.4872L1.25 8ZM10 10.25C9.58579 10.25 9.25 10.5858 9.25 11C9.25 11.4142 9.58579 11.75 10 11.75L14 11.75C14.4142 11.75 14.75 11.4142 14.75 11C14.75 10.5858 14.4142 10.25 14 10.25L10 10.25Z',
  d12: 'M2 7.25C1.58579 7.25 1.25 7.58579 1.25 8V13.4872C1.24999 15.4577 1.24997 17.0159 1.41991 18.2347C1.59493 19.4901 1.96296 20.4957 2.78115 21.2846C3.59552 22.0699 4.6271 22.4198 5.9157 22.5869C7.17418 22.75 8.78537 22.75 10.8338 22.75H11.0313C11.7513 22.75 12.1113 22.75 12.1891 22.5679C12.2669 22.3857 12.0079 22.115 11.4899 21.5737C10.999 21.0606 10.6004 20.5704 10.3718 20.2504L10.3601 20.2345C10.2174 20.0405 9.75 19.4052 9.75 18.5C9.75 17.5948 10.2174 16.9595 10.3601 16.7655L10.3718 16.7497C10.7793 16.1791 11.5585 15.1966 12.6063 14.3785C13.6502 13.5636 15.1495 12.75 17 12.75C18.8505 12.75 20.3498 13.5636 21.3937 14.3785C21.4732 14.4406 21.5512 14.5037 21.6275 14.5674C22.1454 14.9994 22.4043 15.2154 22.5771 15.1345C22.75 15.0536 22.75 14.7327 22.75 14.0907C22.75 13.7899 22.75 13.5683 22.75 13.4872V8C22.75 7.58579 22.4142 7.25 22 7.25H2Z',
  d13: 'M9.25 11C9.25 10.5858 9.58579 10.25 10 10.25H14C14.4142 10.25 14.75 10.5858 14.75 11C14.75 11.4142 14.4142 11.75 14 11.75H10C9.58579 11.75 9.25 11.4142 9.25 11Z',
  d14: 'M8.52755 1.25H15.4724C16.3755 1.24998 17.1309 1.24996 17.75 1.31454C18.4047 1.38284 18.9966 1.53023 19.5432 1.87979C20.0898 2.22936 20.4593 2.69681 20.7768 3.2503C21.0771 3.77368 21.3676 4.44256 21.7149 5.24222L22.6746 7.45172C22.7397 7.60176 22.7612 7.75879 22.7446 7.9098C22.7001 7.53812 22.3837 7.25 22 7.25H20.4696L19.9308 6.00946C19.5582 5.15173 19.3075 4.57789 19.0645 4.1543C18.833 3.75079 18.651 3.56262 18.459 3.43984C18.2671 3.31706 18.016 3.22828 17.5387 3.17849C17.0376 3.12622 16.389 3.12494 15.4204 3.12494H13V7.25H11V3.12494H8.57963C7.61098 3.12494 6.96239 3.12622 6.46133 3.17849C5.98402 3.22828 5.73295 3.31706 5.54097 3.43984C5.34898 3.56262 5.16699 3.75079 4.9355 4.1543C4.69249 4.57789 4.4418 5.15173 4.06924 6.00946L3.53042 7.25H2C1.61632 7.25 1.29992 7.53811 1.25537 7.90979C1.23877 7.75879 1.26026 7.60176 1.32543 7.45172L2.28512 5.24223C2.63242 4.44256 2.92293 3.77368 3.22319 3.2503C3.54072 2.69681 3.91021 2.22936 4.45681 1.87979C5.0034 1.53023 5.59532 1.38284 6.25004 1.31454C6.86913 1.24996 7.62453 1.24998 8.52755 1.25Z',
  d15: 'M22 14V8H2V22H11',
  d16: 'M2 8L5 2L19 2.00001L22 8',
  d17: 'M9 12H15',
  d18: 'M17 22C19.7614 22 22 18.5 22 18.5C22 18.5 19.7614 15 17 15C14.2386 15 12 18.5 12 18.5C12 18.5 14.2386 22 17 22Z',
  d19: 'M19.5131 1.25001L4.47905 1.25L1.25 7.80279V22C1.25 22.4142 1.58579 22.75 2 22.75H12.7891C12.3886 22.4493 12.0432 22.1417 11.7596 21.8674C11.2088 21.3348 10.7704 20.8099 10.4704 20.4208C10.3189 20.2244 9.18359 18.5 9.18359 18.5C9.18359 18.5 10.3189 16.7756 10.4704 16.5792C10.7704 16.1901 11.2088 15.6652 11.7596 15.1326C12.7718 14.1538 14.5708 12.75 16.8593 12.75C19.1477 12.75 20.9467 14.1538 21.9589 15.1326C22.2569 15.4207 22.5219 15.7066 22.75 15.9699V7.80279L19.5131 1.25001ZM20.2683 7.25L18.2948 3.25L12.9842 3.25V7.25H20.2683ZM11.0107 7.25V3.25L5.70005 3.25L3.72656 7.25H11.0107Z',
  d20: 'M22.7493 18.5C22.7493 18.5 22.4094 17.9735 22.373 17.9212C22.3003 17.8167 22.1949 17.67 22.06 17.4951C21.7913 17.1467 21.4012 16.6801 20.9159 16.2109C19.9753 15.3012 18.5423 14.25 16.859 14.25C15.1758 14.25 13.7428 15.3012 12.8021 16.2109C12.3169 16.6801 11.9267 17.1467 11.658 17.4951C11.5232 17.67 11.4178 17.8167 11.345 17.9212C11.3086 17.9735 10.9688 18.5 10.9688 18.5C10.9688 18.5 11.3086 19.0265 11.345 19.0788C11.4178 19.1833 11.5232 19.33 11.658 19.5049C11.9267 19.8533 12.3169 20.3199 12.8021 20.7891C13.7428 21.6988 15.1758 22.75 16.859 22.75C18.5423 22.75 19.9753 21.6988 20.9159 20.7891C21.4012 20.3199 21.7913 19.8533 22.06 19.5049C22.1949 19.33 22.3003 19.1833 22.373 19.0788C22.4094 19.0265 22.7493 18.5 22.7493 18.5ZM16.8504 16.5C15.7508 16.5 14.8594 17.3954 14.8594 18.5C14.8594 19.6046 15.7508 20.5 16.8504 20.5H16.8683C17.9679 20.5 18.8594 19.6046 18.8594 18.5C18.8594 17.3954 17.9679 16.5 16.8683 16.5H16.8504Z',
} as const;

export const IconDeliveryView01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="delivery-view-01-stroke-rounded IconDeliveryView01StrokeRounded"
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
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDeliveryView01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="delivery-view-01-duotone-rounded IconDeliveryView01DuotoneRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      </g>
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
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDeliveryView01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="delivery-view-01-twotone-rounded IconDeliveryView01TwotoneRounded"
    >
      <path 
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDeliveryView01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="delivery-view-01-solid-rounded IconDeliveryView01SolidRounded"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconDeliveryView01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="delivery-view-01-bulk-rounded IconDeliveryView01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDeliveryView01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="delivery-view-01-stroke-sharp IconDeliveryView01StrokeSharp"
    >
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
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconDeliveryView01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="delivery-view-01-solid-sharp IconDeliveryView01SolidSharp"
    >
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

export const iconPackOfDeliveryView01: TheIconSelfPack = {
  name: 'DeliveryView01',
  StrokeRounded: IconDeliveryView01StrokeRounded,
  DuotoneRounded: IconDeliveryView01DuotoneRounded,
  TwotoneRounded: IconDeliveryView01TwotoneRounded,
  SolidRounded: IconDeliveryView01SolidRounded,
  BulkRounded: IconDeliveryView01BulkRounded,
  StrokeSharp: IconDeliveryView01StrokeSharp,
  SolidSharp: IconDeliveryView01SolidSharp,
};