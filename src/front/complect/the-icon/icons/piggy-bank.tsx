import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M13 5C17.9706 5 22 8.35786 22 12.5C22 14.5586 21.0047 16.4235 19.3933 17.7787C19.1517 17.9819 19 18.2762 19 18.5919V21H17L16.2062 19.8674C16.083 19.6916 15.8616 19.6153 15.6537 19.6687C13.9248 20.1132 12.0752 20.1132 10.3463 19.6687C10.1384 19.6153 9.91703 19.6916 9.79384 19.8674L9 21H7V18.6154C7 18.2866 6.83835 17.9788 6.56764 17.7922C5.49285 17.0511 2 15.6014 2 14.0582V12.5C2 11.9083 2.44771 11.4286 3 11.4286C3.60665 11.4286 4.10188 11.1929 4.30205 10.5661C5.32552 7.36121 8.83187 5 13 5Z',
  d2: 'M14.5 8C13.868 7.67502 13.1963 7.5 12.5 7.5C11.8037 7.5 11.132 7.67502 10.5 8',
  d3: 'M7.49981 11H7.50879',
  d4: 'M21 8.5C21.5 8 22 7.06296 22 5.83053C22 4.26727 20.6569 3 19 3C18.6494 3 18.3128 3.05676 18 3.16106',
  d5: 'M3.4626 10.4629C4.6052 6.88503 8.4509 4.375 12.875 4.375C18.1259 4.375 22.625 7.94642 22.625 12.625C22.625 14.9383 21.5046 17.0029 19.751 18.4777C19.6603 18.5541 19.625 18.6458 19.625 18.7169V21.125C19.625 21.5392 19.2892 21.875 18.875 21.875H16.875C16.6304 21.875 16.4012 21.7557 16.2608 21.5555L15.562 20.5584C13.8062 20.9833 11.9438 20.9833 10.188 20.5584L9.48917 21.5555C9.34879 21.7557 9.11958 21.875 8.875 21.875H6.875C6.46079 21.875 6.125 21.5392 6.125 21.125V18.7404C6.125 18.6582 6.08459 18.5813 6.01691 18.5346C5.79463 18.3814 5.43467 18.1827 4.96174 17.9216L4.91302 17.8947C4.43579 17.6312 3.87777 17.3211 3.3501 16.9818C2.82727 16.6456 2.29806 16.2581 1.89229 15.8284C1.49849 15.4115 1.125 14.8535 1.125 14.1832V12.625C1.125 11.6686 1.8606 10.8036 2.875 10.8036C3.08727 10.8036 3.21497 10.7616 3.2874 10.7174C3.34554 10.6819 3.41261 10.6194 3.4626 10.4629ZM10.0322 7.45802C10.7609 7.08328 11.5495 6.875 12.3752 6.875C13.2009 6.875 13.9894 7.08328 14.7181 7.45802C15.0865 7.64744 15.2316 8.09962 15.0421 8.46798C14.8527 8.83634 14.4005 8.9814 14.0322 8.79198C13.497 8.51676 12.9421 8.375 12.3752 8.375C11.8082 8.375 11.2534 8.51676 10.7181 8.79198C10.3498 8.9814 9.8976 8.83634 9.70818 8.46798C9.51875 8.09962 9.66381 7.64744 10.0322 7.45802ZM7.375 10.125C6.82272 10.125 6.375 10.5727 6.375 11.125C6.375 11.6773 6.82272 12.125 7.375 12.125H7.38398C7.93627 12.125 8.38398 11.6773 8.38398 11.125C8.38398 10.5727 7.93627 10.125 7.38398 10.125H7.375Z',
  d6: 'M20.1682 9.33211C20.5587 9.72263 21.1919 9.72263 21.5824 9.33211C22.2684 8.64605 22.8753 7.45527 22.8753 5.95553C22.8753 3.786 21.0288 2.125 18.8753 2.125C18.4163 2.125 17.9729 2.19936 17.5589 2.33742C17.035 2.51214 16.7519 3.0785 16.9266 3.60242C17.1013 4.12634 17.6677 4.40942 18.1916 4.2347C18.4032 4.16416 18.633 4.125 18.8753 4.125C20.0354 4.125 20.8753 4.99854 20.8753 5.95553C20.8753 6.92066 20.4821 7.60395 20.1682 7.91789C19.7776 8.30842 19.7776 8.94158 20.1682 9.33211Z',
  d7: 'M20.4974 7.47277C18.6882 5.56572 15.9069 4.375 12.875 4.375C8.4509 4.375 4.6052 6.88503 3.4626 10.4629C3.41261 10.6194 3.34554 10.6819 3.2874 10.7174C3.21497 10.7616 3.08727 10.8036 2.875 10.8036C1.8606 10.8036 1.125 11.6686 1.125 12.625V14.1832C1.125 14.8535 1.49849 15.4115 1.89229 15.8284C2.29806 16.2581 2.82727 16.6456 3.3501 16.9818C3.87777 17.3211 4.43579 17.6312 4.91302 17.8947L4.96174 17.9216C5.43467 18.1827 5.79463 18.3814 6.01691 18.5346C6.08459 18.5813 6.125 18.6582 6.125 18.7404V21.125C6.125 21.5392 6.46079 21.875 6.875 21.875H8.875C9.11958 21.875 9.34879 21.7557 9.48917 21.5555L10.188 20.5584C11.9438 20.9833 13.8062 20.9833 15.562 20.5584L16.2608 21.5555C16.4012 21.7557 16.6304 21.875 16.875 21.875H18.875C19.2892 21.875 19.625 21.5392 19.625 21.125V18.7169C19.625 18.6458 19.6603 18.5541 19.751 18.4777C21.5046 17.0029 22.625 14.9383 22.625 12.625C22.625 11.3781 22.3054 10.2099 21.7373 9.16693C22.3572 8.46317 22.8753 7.34123 22.8753 5.95553C22.8753 3.786 21.0288 2.125 18.8753 2.125C18.4163 2.125 17.9729 2.19936 17.5589 2.33742C17.035 2.51214 16.7519 3.0785 16.9266 3.60242C17.1013 4.12634 17.6677 4.40942 18.1916 4.2347C18.4032 4.16416 18.633 4.125 18.8753 4.125C20.0354 4.125 20.8753 4.99854 20.8753 5.95553C20.8753 6.59237 20.7041 7.1065 20.4974 7.47277Z',
  d8: 'M10.0322 7.45802C10.7609 7.08328 11.5495 6.875 12.3752 6.875C13.2009 6.875 13.9894 7.08328 14.7181 7.45802C15.0865 7.64744 15.2316 8.09962 15.0421 8.46798C14.8527 8.83634 14.4005 8.9814 14.0322 8.79198C13.497 8.51676 12.9421 8.375 12.3752 8.375C11.8082 8.375 11.2534 8.51676 10.7181 8.79198C10.3498 8.9814 9.8976 8.83634 9.70818 8.46798C9.51875 8.09962 9.66381 7.64744 10.0322 7.45802Z',
  d9: 'M6.375 11.125C6.375 10.5727 6.82272 10.125 7.375 10.125H7.38398C7.93627 10.125 8.38398 10.5727 8.38398 11.125C8.38398 11.6773 7.93627 12.125 7.38398 12.125H7.375C6.82272 12.125 6.375 11.6773 6.375 11.125Z',
  d10: 'M14.5065 8.00205C13.875 7.67653 13.2039 7.50122 12.5082 7.50122C11.8126 7.50122 11.1414 7.67653 10.51 8.00205',
  d11: 'M7.51221 11.0022H7.52119',
  d12: 'M21.001 8.50125C21.5006 8.00107 22.0001 7.06369 22.0001 5.83082C22.0001 4.26699 20.6582 2.99927 19.0028 2.99927C18.6525 2.99927 18.3162 3.05605 18.0037 3.16039',
  d13: 'M4.01135 11.5073H2.01003C2.0045 11.5073 2.00003 11.5118 2.00003 11.5173L2 14.4847C2 14.488 2.00159 14.4911 2.00426 14.4929L7.01487 18.0094V20.9903H9.01777L10.0132 19.4996C12.2591 20.0658 14.5501 19.8689 16.0093 19.5049L17.0069 21.0005H19.0448L18.9956 18C23.1604 14.4851 22.1438 10.8024 20.8709 8.86261C19.8226 7.26509 16.9088 4.50636 11.7555 5.07921C6.47508 5.66619 4.53648 8.9683 4.01135 11.5073Z',
  d14: 'M3.41665 10.75C4.71107 6.21739 8.78141 4.25 13 4.25C18.2509 4.25 22.75 7.82142 22.75 12.5C22.75 14.7436 21.3426 16.9049 19.75 18.3412V21.75H16.5986L15.6617 20.3446C14.0366 20.663 11.9634 20.663 10.3383 20.3446L9.40139 21.75H6.25V18.3905L1.5699 15.1144C1.36941 14.9741 1.25 14.7447 1.25 14.5V11.5C1.25 11.0858 1.58579 10.75 2 10.75H3.41665ZM10.1562 7.33302C10.885 6.95828 11.6735 6.75 12.4992 6.75C13.3249 6.75 14.1135 6.95828 14.8422 7.33302L14.1562 8.66698C13.621 8.39176 13.0662 8.25 12.4992 8.25C11.9323 8.25 11.3774 8.39176 10.8422 8.66698L10.1562 7.33302ZM8.50898 10H6.5V12H8.50898V10Z',
  d15: 'M20.7499 6.08046C20.7499 7.04558 20.3568 7.72887 20.0428 8.04282L21.4571 9.45703C22.1431 8.77098 22.7499 7.58019 22.7499 6.08046C22.7499 3.91092 20.9035 2.24992 18.7499 2.24992C18.291 2.24992 17.8476 2.32428 17.4336 2.46235L18.0663 4.35963C18.2779 4.28908 18.5077 4.24992 18.7499 4.24992C19.9101 4.24992 20.7499 5.12347 20.7499 6.08046Z',
} as const;

export const IconPiggyBankStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="piggy-bank-stroke-rounded IconPiggyBankStrokeRounded"
    >
      <path 
        d={d.d1} 
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
      />
    </TheIconWrapper>
  );
};

export const IconPiggyBankDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="piggy-bank-duotone-rounded IconPiggyBankDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
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
      />
    </TheIconWrapper>
  );
};

export const IconPiggyBankTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="piggy-bank-twotone-rounded IconPiggyBankTwotoneRounded"
    >
      <path 
        d={d.d1} 
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
      />
    </TheIconWrapper>
  );
};

export const IconPiggyBankSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="piggy-bank-solid-rounded IconPiggyBankSolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconPiggyBankBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="piggy-bank-bulk-rounded IconPiggyBankBulkRounded"
    >
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

export const IconPiggyBankStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="piggy-bank-stroke-sharp IconPiggyBankStrokeSharp"
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
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPiggyBankSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="piggy-bank-solid-sharp IconPiggyBankSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPiggyBank: TheIconSelfPack = {
  name: 'PiggyBank',
  StrokeRounded: IconPiggyBankStrokeRounded,
  DuotoneRounded: IconPiggyBankDuotoneRounded,
  TwotoneRounded: IconPiggyBankTwotoneRounded,
  SolidRounded: IconPiggyBankSolidRounded,
  BulkRounded: IconPiggyBankBulkRounded,
  StrokeSharp: IconPiggyBankStrokeSharp,
  SolidSharp: IconPiggyBankSolidSharp,
};