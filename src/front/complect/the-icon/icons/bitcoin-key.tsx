import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M8.5 2C5.73858 2 3.5 4.23858 3.5 7C3.5 8.85071 4.5055 10.4666 6 11.3311V17.8431C6 18.6606 6 19.0694 6.15224 19.4369C6.30448 19.8045 6.59351 20.0935 7.17157 20.6716L8.5 22L10.6082 19.8918C10.7054 19.7946 10.7541 19.7459 10.7944 19.6932C10.9003 19.5547 10.9682 19.3909 10.9912 19.218C11 19.1522 11 19.0834 11 18.9459C11 18.8346 11 18.779 10.9941 18.7249C10.9786 18.5831 10.933 18.4463 10.8603 18.3236C10.8326 18.2768 10.7992 18.2323 10.7325 18.1433L9.5 16.5L10.2 15.5667C10.5965 15.038 10.7947 14.7737 10.8974 14.4658C11 14.1579 11 13.8275 11 13.1667V11.3311C12.4945 10.4666 13.5 8.85071 13.5 7C13.5 4.23858 11.2614 2 8.5 2Z',
  d2: 'M8.5 7H8.50898',
  d3: 'M15.625 19.5L15.625 13.5M17.5 13.5V12M17.5 21V19.5M15.625 16.5H19.375M19.375 16.5C19.9963 16.5 20.5 17.0037 20.5 17.625V18.375C20.5 18.9963 19.9963 19.5 19.375 19.5H14.5M19.375 16.5C19.9963 16.5 20.5 15.9963 20.5 15.375V14.625C20.5 14.0037 19.9963 13.5 19.375 13.5H14.5',
  d4: 'M8.5 1.25C5.32436 1.25 2.75 3.82436 2.75 7C2.75 8.97049 3.74152 10.7086 5.25 11.744L5.24992 17.964C5.24925 18.6626 5.24872 19.2155 5.45933 19.724C5.66994 20.2324 6.06127 20.623 6.55573 21.1165L7.96967 22.5303C8.26256 22.8232 8.73744 22.8232 9.03033 22.5303L11.1577 20.403C11.2355 20.3254 11.3185 20.2425 11.3902 20.1487C11.5755 19.9063 11.6943 19.6197 11.7346 19.3172C11.7502 19.2002 11.7501 19.0829 11.75 18.973C11.7501 18.8838 11.7502 18.7396 11.7397 18.6436C11.7126 18.3955 11.6328 18.1561 11.5056 17.9413C11.4563 17.8582 11.3991 17.782 11.3456 17.7107L11.3455 17.7107L10.4375 16.5L10.8583 15.939C11.1982 15.4865 11.4669 15.1289 11.6089 14.703C11.7508 14.2771 11.7505 13.8297 11.7501 13.2638L11.75 11.744C13.2585 10.7086 14.25 8.97049 14.25 7C14.25 3.82436 11.6756 1.25 8.5 1.25ZM8.49329 5.5C7.66857 5.5 7 6.17157 7 7C7 7.82843 7.66857 8.5 8.49329 8.5H8.50671C9.33143 8.5 10 7.82843 10 7C10 6.17157 9.33143 5.5 8.50671 5.5H8.49329Z',
  d5: 'M17.5 11.25C17.9142 11.25 18.25 11.5858 18.25 12V12.75H19.375C20.4105 12.75 21.25 13.5895 21.25 14.625V15.375C21.25 15.7971 21.1105 16.1866 20.8751 16.5C21.1105 16.8134 21.25 17.2029 21.25 17.625V18.375C21.25 19.4105 20.4105 20.25 19.375 20.25H18.25V21C18.25 21.4142 17.9142 21.75 17.5 21.75C17.0858 21.75 16.75 21.4142 16.75 21V20.25H14.5C14.0858 20.25 13.75 19.9142 13.75 19.5C13.75 19.0858 14.0858 18.75 14.5 18.75H14.875V16.5002C14.875 16.5001 14.875 16.5002 14.875 16.5002L14.875 14.25H14.5C14.0858 14.25 13.75 13.9142 13.75 13.5C13.75 13.0858 14.0858 12.75 14.5 12.75H16.75V12C16.75 11.5858 17.0858 11.25 17.5 11.25ZM16.375 14.25V15.75H19.375C19.5821 15.75 19.75 15.5821 19.75 15.375V14.625C19.75 14.4179 19.5821 14.25 19.375 14.25H16.375ZM19.375 17.25H16.375L16.375 18.75H19.375C19.5821 18.75 19.75 18.5821 19.75 18.375V17.625C19.75 17.4179 19.5821 17.25 19.375 17.25Z',
  d6: 'M2.75 7C2.75 3.82436 5.32436 1.25 8.5 1.25C11.6756 1.25 14.25 3.82436 14.25 7C14.25 8.97049 13.2585 10.7086 11.75 11.744L11.7501 13.2638C11.7505 13.8297 11.7508 14.2771 11.6089 14.703C11.4669 15.1289 11.1982 15.4865 10.8583 15.939L10.4375 16.5L11.3455 17.7107L11.3456 17.7107C11.3991 17.782 11.4563 17.8582 11.5056 17.9413C11.6328 18.1561 11.7126 18.3955 11.7397 18.6436C11.7502 18.7396 11.7501 18.8838 11.75 18.973C11.7501 19.0829 11.7502 19.2002 11.7346 19.3172C11.6943 19.6197 11.5755 19.9063 11.3902 20.1487C11.3185 20.2425 11.2355 20.3254 11.1577 20.403L9.03033 22.5303C8.73744 22.8232 8.26256 22.8232 7.96967 22.5303L6.55573 21.1165C6.06127 20.623 5.66994 20.2324 5.45933 19.724C5.24872 19.2155 5.24925 18.6626 5.24992 17.964L5.25 11.744C3.74152 10.7086 2.75 8.97049 2.75 7Z',
  d7: 'M7 7C7 6.17157 7.66857 5.5 8.49329 5.5H8.50671C9.33143 5.5 10 6.17157 10 7C10 7.82843 9.33143 8.5 8.50671 8.5H8.49329C7.66857 8.5 7 7.82843 7 7Z',
  d8: 'M8.5 6.99658H8.50898',
  d9: 'M15.625 19.4888V13.4927M17.5 13.4927V11.9937M17.5 20.9878V19.4888M15.625 16.4907H19.375M19.375 16.4907C19.9963 16.4907 20.5 16.9941 20.5 17.615V18.3645C20.5 18.9854 19.9963 19.4888 19.375 19.4888H14.5M19.375 16.4907C19.9963 16.4907 20.5 15.9874 20.5 15.3665V14.6169C20.5 13.996 19.9963 13.4927 19.375 13.4927H14.5',
  d10: 'M8.50896 2.00195C5.74475 2.00195 3.50391 4.25939 3.50391 7.04408C3.50391 8.89073 4.53085 10.4526 6.00086 11.3309V19.4887L8.40106 21.9705C8.43986 22.0106 8.504 22.0112 8.54354 21.9718L11.0496 19.4769V17.9971L9.4877 16.4964L11.0496 14.9851L10.9789 11.3224C12.3614 10.5653 13.514 9.00659 13.514 7.04408C13.514 4.25939 11.2732 2.00195 8.50896 2.00195Z',
  d11: 'M8.5 1.25C5.32436 1.25 2.75 3.82436 2.75 7C2.75 8.97049 3.74152 10.7086 5.25 11.744V19.8107L7.96967 22.5303C8.26256 22.8232 8.73744 22.8232 9.03033 22.5303L11.75 19.8107V17.6893L10.5607 16.5L11.75 15.3107V11.744C13.2585 10.7086 14.25 8.97049 14.25 7C14.25 3.82436 11.6756 1.25 8.5 1.25ZM8.49329 5.5C7.66857 5.5 7 6.17157 7 7C7 7.82843 7.66857 8.5 8.49329 8.5H8.50671C9.33143 8.5 10 7.82843 10 7C10 6.17157 9.33143 5.5 8.50671 5.5H8.49329Z',
  d12: 'M18.25 11.25V12.75H19.375C20.4105 12.75 21.25 13.5895 21.25 14.625V15.375C21.25 15.7971 21.1105 16.1866 20.8751 16.5C21.1105 16.8134 21.25 17.2029 21.25 17.625V18.375C21.25 19.4105 20.4105 20.25 19.375 20.25H18.25V21.75H16.75V20.25H13.75V18.75H14.875L14.875 14.25H13.75V12.75H16.75V11.25H18.25ZM16.375 14.25V15.75H19.375C19.5821 15.75 19.75 15.5821 19.75 15.375V14.625C19.75 14.4179 19.5821 14.25 19.375 14.25H16.375ZM19.375 17.25H16.375L16.375 18.75H19.375C19.5821 18.75 19.75 18.5821 19.75 18.375V17.625C19.75 17.4179 19.5821 17.25 19.375 17.25Z',
} as const;

export const IconBitcoinKeyStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-key-stroke-rounded IconBitcoinKeyStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconBitcoinKeyDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-key-duotone-rounded IconBitcoinKeyDuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconBitcoinKeyTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-key-twotone-rounded IconBitcoinKeyTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinKeySolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-key-solid-rounded IconBitcoinKeySolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinKeyBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-key-bulk-rounded IconBitcoinKeyBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinKeyStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-key-stroke-sharp IconBitcoinKeyStrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinKeySolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-key-solid-sharp IconBitcoinKeySolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfBitcoinKey: TheIconSelfPack = {
  name: 'BitcoinKey',
  StrokeRounded: IconBitcoinKeyStrokeRounded,
  DuotoneRounded: IconBitcoinKeyDuotoneRounded,
  TwotoneRounded: IconBitcoinKeyTwotoneRounded,
  SolidRounded: IconBitcoinKeySolidRounded,
  BulkRounded: IconBitcoinKeyBulkRounded,
  StrokeSharp: IconBitcoinKeyStrokeSharp,
  SolidSharp: IconBitcoinKeySolidSharp,
};