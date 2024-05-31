import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M22 11.5V6.11397C22 5.32299 22 4.92751 21.8059 4.51966C21.6952 4.28705 21.443 3.97064 21.241 3.81079C20.8868 3.53051 20.5912 3.46281 20 3.3274C19.0803 3.11675 18.0659 3 17 3C15.0829 3 13.3325 3.37764 12 4C10.6675 4.62236 8.91707 5 7 5C5.93408 5 4.91969 4.88325 4 4.6726C3.04003 4.45273 2 5.12914 2 6.11397V16.886C2 17.677 2 18.0725 2.19412 18.4803C2.30483 18.7129 2.55696 19.0294 2.75898 19.1892C3.11319 19.4695 3.4088 19.5372 4 19.6726C4.91969 19.8833 5.93408 20 7 20C8.46884 20 9.83983 19.7783 11 19.3947',
  d2: 'M14 19C14 19 15 19 16 21C16 21 19.1765 16 22 15',
  d3: 'M14.5 11.5C14.5 12.8807 13.3807 14 12 14C10.6193 14 9.5 12.8807 9.5 11.5C9.5 10.1193 10.6193 9 12 9C13.3807 9 14.5 10.1193 14.5 11.5Z',
  d4: 'M5.5 12.5L5.5 12.509',
  d5: 'M18.5 10.4922L18.5 10.5012',
  d6: 'M7 20C8.91707 20 10.6675 19.6224 12 19C13.3325 18.3776 15.0829 18 17 18C18.0659 18 19.0803 18.1167 20 18.3274C20.96 18.5473 22 17.8709 22 16.886V6.11397C22 4.62036 21.5817 3.68968 20 3.3274C19.0803 3.11675 18.0659 3 17 3C15.0829 3 13.3325 3.37764 12 4C10.6675 4.62236 8.91707 5 7 5C5.93408 5 4.91969 4.88325 4 4.6726C3.04003 4.45273 2 5.12914 2 6.11397V16.886C2 18.4264 2.49957 19.3289 4 19.6726C4.91969 19.8833 5.93408 20 7 20ZM12 14C13.3807 14 14.5 12.8807 14.5 11.5C14.5 10.1193 13.3807 9 12 9C10.6193 9 9.5 10.1193 9.5 11.5C9.5 12.8807 10.6193 14 12 14Z',
  d7: 'M11.5576 3.19546C13.0048 2.51954 14.8665 2.125 16.875 2.125C17.9948 2.125 19.0655 2.24757 20.0424 2.47133C20.9595 2.68137 21.6575 3.08717 22.0968 3.76245C22.5178 4.40953 22.625 5.19212 22.625 5.98897V11.6717C22.625 12.0143 22.625 12.1857 22.5395 12.2731C22.4541 12.3605 22.2422 12.3653 21.8185 12.375C21.5598 12.3809 21.2976 12.4274 21.0404 12.5185C19.904 12.9209 18.8975 13.6536 18.0979 14.3548C17.2727 15.0785 16.5194 15.9018 15.8965 16.6486C15.842 16.7138 15.8148 16.7465 15.7886 16.7666C15.7116 16.8259 15.63 16.8433 15.5356 16.8207C15.5035 16.813 15.4609 16.7922 15.376 16.7506L15.3759 16.7506L15.3758 16.7505L15.3758 16.7505C15.1635 16.6467 14.958 16.5685 14.7633 16.5111C14.4016 16.3959 14.0384 16.3765 13.8896 16.3751L13.875 16.375C12.4943 16.375 11.375 17.4943 11.375 18.875C11.375 18.9956 11.3835 19.1142 11.4 19.2302C11.4464 19.5566 11.4696 19.7198 11.4111 19.8129C11.3526 19.906 11.2285 19.9453 10.9803 20.0239C9.76418 20.4094 8.35971 20.625 6.875 20.625C5.75516 20.625 4.68449 20.5024 3.70755 20.2787C2.83189 20.0781 2.14024 19.6861 1.69144 19.0238C1.25742 18.3832 1.125 17.5966 1.125 16.761V5.98897C1.125 4.42178 2.716 3.51272 4.04245 3.81653C4.90489 4.01407 5.863 4.125 6.875 4.125C8.70065 4.125 10.3398 3.76427 11.5576 3.19546ZM11.875 8.125C10.0801 8.125 8.625 9.58007 8.625 11.375C8.625 13.1699 10.0801 14.625 11.875 14.625C13.6699 14.625 15.125 13.1699 15.125 11.375C15.125 9.58007 13.6699 8.125 11.875 8.125ZM5.375 11.375C5.92728 11.375 6.375 11.8227 6.375 12.375V12.384C6.375 12.9363 5.92728 13.384 5.375 13.384C4.82272 13.384 4.375 12.9363 4.375 12.384V12.375C4.375 11.8227 4.82272 11.375 5.375 11.375ZM19.375 10.3672C19.375 9.8149 18.9273 9.36719 18.375 9.36719C17.8227 9.36719 17.375 9.8149 17.375 10.3672V10.3762C17.375 10.9285 17.8227 11.3762 18.375 11.3762C18.9273 11.3762 19.375 10.9285 19.375 10.3762V10.3672Z',
  d8: 'M22.8176 14.5412C23.002 15.0618 22.7294 15.6333 22.2088 15.8177C21.6752 16.0067 21.0587 16.4135 20.4057 16.9862C19.763 17.5499 19.1378 18.2268 18.5841 18.8906C18.0322 19.5521 17.5635 20.1859 17.2324 20.6548C17.0672 20.8888 16.9372 21.0805 16.8493 21.2126L16.7191 21.4113C16.5258 21.7153 16.1837 21.8921 15.8239 21.8737C15.4639 21.8553 15.1418 21.6446 14.9806 21.3222C14.5399 20.4409 14.1446 20.0899 13.9453 19.9571C13.861 19.9009 13.804 19.8783 13.7814 19.8707C13.273 19.8235 12.875 19.3957 12.875 18.875C12.875 18.3227 13.3227 17.875 13.875 17.875C13.9574 17.8758 14.1621 17.8909 14.3216 17.9448C14.5295 18.0041 14.7803 18.11 15.0547 18.293C15.329 18.4758 15.6166 18.7286 15.9054 19.0745C16.2206 18.6437 16.609 18.136 17.0483 17.6094C17.6416 16.8982 18.34 16.1377 19.087 15.4826C19.8236 14.8365 20.663 14.2434 21.5412 13.9324C22.0618 13.748 22.6332 14.0206 22.8176 14.5412Z',
  d9: 'M16.875 2.125C14.8665 2.125 13.0048 2.51954 11.5576 3.19546C10.3398 3.76427 8.70065 4.125 6.875 4.125C5.863 4.125 4.90489 4.01407 4.04245 3.81653C2.716 3.51272 1.125 4.42178 1.125 5.98897V16.761C1.125 17.5966 1.25742 18.3832 1.69144 19.0238C2.14024 19.6861 2.83189 20.0781 3.70755 20.2787C4.68449 20.5024 5.75516 20.625 6.875 20.625C8.35971 20.625 9.76418 20.4094 10.9803 20.0239C11.2285 19.9453 11.3526 19.906 11.4111 19.8129C11.4696 19.7198 11.4464 19.5566 11.4 19.2302C11.3835 19.1142 11.375 18.9956 11.375 18.875C11.375 17.4943 12.4943 16.375 13.875 16.375L13.8896 16.3751C14.0384 16.3765 14.4016 16.3959 14.7633 16.5111C14.958 16.5685 15.1635 16.6467 15.3758 16.7505C15.4609 16.7921 15.5034 16.8129 15.5356 16.8207C15.63 16.8433 15.7116 16.8259 15.7886 16.7666C15.8148 16.7465 15.842 16.7138 15.8965 16.6486C16.5194 15.9018 17.2727 15.0785 18.0979 14.3548C18.8975 13.6536 19.904 12.9209 21.0404 12.5185C21.2976 12.4274 21.5598 12.3809 21.8185 12.375C22.2422 12.3653 22.4541 12.3605 22.5395 12.2731C22.625 12.1857 22.625 12.0143 22.625 11.6717V5.98897C22.625 5.19212 22.5178 4.40953 22.0968 3.76245C21.6575 3.08717 20.9595 2.68137 20.0424 2.47133C19.0655 2.24757 17.9948 2.125 16.875 2.125Z',
  d10: 'M8.625 11.375C8.625 9.58007 10.0801 8.125 11.875 8.125C13.6699 8.125 15.125 9.58007 15.125 11.375C15.125 13.1699 13.6699 14.625 11.875 14.625C10.0801 14.625 8.625 13.1699 8.625 11.375Z',
  d11: 'M5.375 11.375C5.92728 11.375 6.375 11.8227 6.375 12.375L6.375 12.384C6.375 12.9363 5.92728 13.384 5.375 13.384C4.82272 13.384 4.375 12.9363 4.375 12.384L4.375 12.375C4.375 11.8227 4.82272 11.375 5.375 11.375Z',
  d12: 'M18.375 9.36719C18.9273 9.36719 19.375 9.8149 19.375 10.3672L19.375 10.3762C19.375 10.9285 18.9273 11.3762 18.375 11.3762C17.8227 11.3762 17.375 10.9285 17.375 10.3762L17.375 10.3672C17.375 9.8149 17.8227 9.36719 18.375 9.36719Z',
  d13: 'M13.9961 19.0004L15.9967 21.0016L21.9984 14.998',
  d14: 'M14.4961 11.4961C14.4961 12.8776 13.3765 13.9976 11.9954 13.9976C10.6143 13.9976 9.49463 12.8776 9.49463 11.4961C9.49463 10.1146 10.6143 8.99463 11.9954 8.99463C13.3765 8.99463 14.4961 10.1146 14.4961 11.4961Z',
  d15: 'M5.49365 12.4966V12.5056',
  d16: 'M18.4976 10.4878V10.4968',
  d17: 'M12 18.9943C10.6677 19.6166 8.91751 19.9941 7.00072 19.9941C5.93496 19.9941 4.50109 19.9941 2.00146 18.9943V3.99781C4.50109 4.99758 5.93496 4.99758 7.00072 4.99758C8.91751 4.99758 10.6677 4.62003 12 3.99781C13.3323 3.3756 15.0824 2.99805 16.9992 2.99805C19.9988 2.99805 21.9985 3.99781 21.9985 3.99781V11.996',
  d18: 'M22.2169 2.2735L22.75 2.53647V13.9212L21.3362 12.5074L16.0613 17.7822L16.0276 17.7846L14.7504 16.5074L12.7738 18.484C12.6158 18.546 12.4636 18.6113 12.3174 18.6795C10.8702 19.3555 9.00849 19.75 7 19.75C5.87882 19.75 4.34095 19.7442 1.72146 18.6964L1.25 18.5078V1.89223L2.27854 2.30364C4.64464 3.25008 5.97319 3.25004 6.98161 3.25L7 3.25C8.82565 3.25 10.4648 2.88927 11.6826 2.32046C13.1298 1.64454 14.9915 1.25 17 1.25C18.5827 1.25 19.9028 1.51364 20.831 1.77886C21.2956 1.91159 21.6636 2.04516 21.9192 2.14739C22.047 2.19853 22.1469 2.2419 22.2169 2.2735ZM12 7.25C10.2051 7.25 8.75 8.70507 8.75 10.5C8.75 12.2949 10.2051 13.75 12 13.75C13.7949 13.75 15.25 12.2949 15.25 10.5C15.25 8.70507 13.7949 7.25 12 7.25ZM6.5 10.5V12.509H4.5V10.5H6.5ZM19.5 10.5012V8.49219H17.5V10.5012H19.5Z',
  d19: 'M16.043 19.9216L21.3359 14.6287L22.7502 16.0429L16.043 22.75L13.3359 20.0429L14.7502 18.6287L16.043 19.9216Z',
} as const;

export const IconPaymentSuccess02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="payment-success-02-stroke-rounded IconPaymentSuccess02StrokeRounded"
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

export const IconPaymentSuccess02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="payment-success-02-duotone-rounded IconPaymentSuccess02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
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

export const IconPaymentSuccess02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="payment-success-02-twotone-rounded IconPaymentSuccess02TwotoneRounded"
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

export const IconPaymentSuccess02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="payment-success-02-solid-rounded IconPaymentSuccess02SolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconPaymentSuccess02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="payment-success-02-bulk-rounded IconPaymentSuccess02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPaymentSuccess02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="payment-success-02-stroke-sharp IconPaymentSuccess02StrokeSharp"
    >
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
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
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
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

export const IconPaymentSuccess02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="payment-success-02-solid-sharp IconPaymentSuccess02SolidSharp"
    >
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
    </TheIconWrapper>
  );
};

export const iconPackOfPaymentSuccess02: TheIconSelfPack = {
  name: 'PaymentSuccess02',
  StrokeRounded: IconPaymentSuccess02StrokeRounded,
  DuotoneRounded: IconPaymentSuccess02DuotoneRounded,
  TwotoneRounded: IconPaymentSuccess02TwotoneRounded,
  SolidRounded: IconPaymentSuccess02SolidRounded,
  BulkRounded: IconPaymentSuccess02BulkRounded,
  StrokeSharp: IconPaymentSuccess02StrokeSharp,
  SolidSharp: IconPaymentSuccess02SolidSharp,
};