import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M6 9L6.73072 7.88715C8.5751 5.07821 9.4973 3.67374 10.684 3.23546C11.5341 2.92151 12.4659 2.92151 13.316 3.23546C14.5027 3.67374 15.4249 5.07821 17.2693 7.88714L18 8.99999',
  d2: 'M18.7256 20.3049C17.6228 21 15.7485 21 12 21C8.25145 21 6.37718 21 5.27439 20.3049C3.97149 19.4837 3.14038 18.0526 3.01914 16.4815C2.99794 16.2067 2.98734 16.0693 2.98478 15.9194C2.98223 15.7694 2.99053 15.5762 3.00713 15.1899C3.04542 14.2991 3.26441 12.6191 4.2748 11C5.11593 12.6336 7.91891 15.1596 10.5006 17.1682M18.7256 20.3049C20.0285 19.4837 20.8596 18.0526 20.9809 16.4815C21.0021 16.2067 21.0127 16.0693 21.0152 15.9194C21.0178 15.7694 21.0095 15.5762 20.9929 15.1899C20.9546 14.2991 20.7356 12.6191 19.7252 11C18.3163 13.0751 13.6993 17.214 10.5006 17.1682M18.7256 20.3049C15.4906 20.2278 12.7105 18.8875 10.5006 17.1682',
  d3: 'M14.5 11.5L14.491 11.5',
  d4: 'M11.5 7C11.6667 7.33333 12.3 8 13.5 8',
  d5: 'M10 11L9.5 11.5',
  d6: 'M12 21H12H12C8.25145 21 6.37718 21 5.27439 20.3049C3.97149 19.4837 3.14038 18.0526 3.01914 16.4815C2.99794 16.2067 2.98734 16.0693 2.98478 15.9194C2.98223 15.7694 2.99053 15.5762 3.00713 15.1899C3.04542 14.2991 3.26442 12.6191 4.2748 11C5.11593 12.6336 7.91891 15.1596 10.5006 17.1682C13.6993 17.214 18.3163 13.0751 19.7252 11C20.7356 12.6191 20.9546 14.2991 20.9929 15.1899C21.0095 15.5762 21.0178 15.7694 21.0152 15.9194C21.0127 16.0693 21.0021 16.2067 20.9809 16.4813L20.9809 16.4815C20.8596 18.0526 20.0285 19.4837 18.7256 20.3049C17.6228 21 15.7486 21 12 21Z',
  d7: 'M12.9349 4.28766C12.3308 4.07075 11.6692 4.07075 11.0651 4.28766C10.7381 4.40506 10.3641 4.6787 9.81394 5.34314C9.26258 6.009 8.6252 6.95082 7.72503 8.28368L7.02042 9.32697C6.72812 9.75977 6.13028 9.88024 5.68512 9.59606C5.23996 9.31188 5.11604 8.73065 5.40834 8.29785L6.14188 7.21172L6.14189 7.2117C7.00658 5.93136 7.69462 4.9126 8.31171 4.16737C8.93684 3.41242 9.57962 2.82228 10.397 2.5288C11.4323 2.15707 12.5677 2.15707 13.603 2.5288C14.4204 2.82228 15.0632 3.41242 15.6883 4.16736C16.3054 4.91259 16.9934 5.93135 17.8581 7.21167L17.8581 7.21171L18.5917 8.29784C18.884 8.73064 18.76 9.31187 18.3149 9.59605C17.8697 9.88024 17.2719 9.75976 16.9796 9.32696L16.275 8.28367C15.3748 6.95082 14.7374 6.009 14.1861 5.34314C13.6359 4.6787 13.2619 4.40506 12.9349 4.28766Z',
  d8: 'M4.30537 10.2506C4.57494 10.2618 4.81776 10.4168 4.94127 10.6567C5.30061 11.3546 6.13145 12.3214 7.25488 13.4032C8.35927 14.4667 9.6841 15.5829 10.9608 16.5763C13.0827 18.2271 15.7119 19.4829 18.7431 19.5551C19.0738 19.563 19.3602 19.7865 19.4482 20.1054C19.5362 20.4242 19.405 20.763 19.1252 20.9394C18.4158 21.3865 17.5213 21.5713 16.415 21.6607C15.3098 21.75 13.8795 21.75 12.0356 21.75H11.9638C10.1198 21.75 8.6895 21.75 7.58427 21.6607C6.47807 21.5713 5.58355 21.3865 4.87413 20.9394C3.16684 19.8632 2.16877 17.4584 2.25098 15.4003C2.25524 15.1036 2.27715 14.687 2.34886 14.1928C2.49178 13.2077 2.83383 11.8919 3.63819 10.6029C3.78103 10.3741 4.0358 10.2395 4.30537 10.2506Z',
  d9: 'M15.5 11.5C15.5 12.0523 15.0523 12.5 14.5 12.5L14.491 12.5C13.9387 12.5 13.491 12.0523 13.491 11.5C13.491 10.9477 13.9387 10.5 14.491 10.5L14.5 10.5C15.0523 10.5 15.5 10.9477 15.5 11.5Z',
  d10: 'M11.053 6.10579C11.547 5.8588 12.1477 6.05903 12.3946 6.55301C12.3938 6.55134 12.3943 6.55209 12.3964 6.55492C12.4092 6.57294 12.4822 6.67563 12.6475 6.78024C12.8206 6.88978 13.0941 7.00022 13.5002 7.00022C14.0525 7.00022 14.5002 7.44793 14.5002 8.00022C14.5002 8.5525 14.0525 9.00022 13.5002 9.00022C11.9048 9.00022 10.9343 8.10443 10.6058 7.44743C10.3588 6.95345 10.559 6.35278 11.053 6.10579Z',
  d11: 'M10.7071 10.2929C10.3166 9.90237 9.68342 9.90237 9.29289 10.2929L8.79289 10.7929C8.40237 11.1834 8.40237 11.8166 8.79289 12.2071C9.18342 12.5976 9.81658 12.5976 10.2071 12.2071L10.7071 11.7071C11.0976 11.3166 11.0976 10.6834 10.7071 10.2929Z',
  d12: 'M20.0332 18.4736C20.476 18.7897 20.6974 18.9478 20.8364 18.9081C20.9754 18.8685 21.0512 18.6866 21.2027 18.3228C21.5931 17.3856 21.7878 16.3556 21.7496 15.4003C21.7453 15.1036 21.7229 14.687 21.6512 14.1928C21.5083 13.2077 21.1662 11.8919 20.3619 10.6029C20.2276 10.3878 19.9937 10.255 19.7401 10.2501C19.4865 10.2453 19.2476 10.3689 19.1051 10.5787C18.46 11.5289 17.0197 13.0246 15.3366 14.2779C14.5006 14.9004 13.6253 15.4475 12.7816 15.8336C12.7015 15.8702 12.6908 15.9807 12.7641 16.0297C14.5182 17.2033 16.5409 18.0022 18.7796 18.0555C19.2419 18.0666 19.6753 18.2181 20.0332 18.4736Z',
  d13: 'M10.5 10.5L9 12',
  d14: 'M16.4088 21.6606C17.5132 21.5712 18.4063 21.3865 19.1147 20.9393C19.6217 20.6192 20.0654 20.2207 20.4365 19.7648C16.4639 19.8455 13.9887 18.5606 12.4155 17.5887C8.45444 15.5596 5.38786 11.3395 4.34971 9.48303L3.65198 10.6029C2.54898 12.3732 2.31467 14.197 2.27344 15.1577L2.27194 15.1926C2.25678 15.5458 2.24761 15.7593 2.25055 15.9321C2.25348 16.1047 2.26569 16.2631 2.28539 16.5187L2.28696 16.5391C2.42522 18.3335 3.37398 19.9848 4.88597 20.9393C5.59429 21.3865 6.48739 21.5712 7.59186 21.6606C8.69536 21.7499 10.1951 21.7499 12.0362 21.7499C13.8772 21.7499 15.3053 21.7499 16.4088 21.6606Z',
  d15: 'M21.713 16.539C21.6675 17.1304 21.5339 17.7062 21.3211 18.2467L20.4054 18.2653C16.8192 18.3381 13.9586 16.8253 12.5307 15.9431C12.6129 15.9084 12.6959 15.8718 12.7796 15.8334C13.622 15.4473 14.4959 14.9002 15.3306 14.2777C17.0111 13.0244 18.4491 11.5287 19.0932 10.5785L19.7392 9.62561L20.348 10.6028C21.451 12.3731 21.6853 14.1969 21.7266 15.1576L21.7281 15.1925C21.7432 15.5457 21.7524 15.7592 21.7495 15.932C21.7465 16.1046 21.7343 16.263 21.7146 16.5186L21.713 16.539Z',
  d16: 'M16.2542 4.54343C15.4904 3.59555 14.7503 2.91429 13.8445 2.58005C12.6522 2.14015 11.3449 2.14015 10.1526 2.58005C9.24676 2.91429 8.5067 3.59555 7.74288 4.54344C7.04104 5.41441 6.25976 6.58869 5.28027 8.07795L5.6566 8.7509C6.43506 10.1429 8.43954 12.9391 11.0476 14.9408L12.1523 14.4698C12.8727 14.1396 13.655 13.6544 14.4315 13.0753C16.0179 11.8922 17.3237 10.5123 17.8493 9.73689L18.8434 8.27043C17.8042 6.68953 16.986 5.45159 16.2542 4.54343ZM14.499 10.5001C15.0513 10.5001 15.499 10.0524 15.499 9.50012C15.499 8.94784 15.0513 8.50012 14.499 8.50012H14.49C13.9378 8.50012 13.49 8.94784 13.49 9.50012C13.49 10.0524 13.9378 10.5001 14.49 10.5001H14.499ZM13.4999 6.75008C12.0034 6.75008 11.1171 5.91157 10.8291 5.33549L12.1707 4.66467C12.216 4.75526 12.5965 5.25008 13.4999 5.25008V6.75008ZM11.0303 9.03051L9.53027 10.5305L8.46961 9.46985L9.96961 7.96985L11.0303 9.03051Z',
};

export const IconRiceBowl02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rice-bowl-02-stroke-rounded IconRiceBowl02StrokeRounded"
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

export const IconRiceBowl02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rice-bowl-02-duotone-rounded IconRiceBowl02DuotoneRounded"
    >
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
        strokeLinejoin="round" 
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

export const IconRiceBowl02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rice-bowl-02-twotone-rounded IconRiceBowl02TwotoneRounded"
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

export const IconRiceBowl02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rice-bowl-02-solid-rounded IconRiceBowl02SolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconRiceBowl02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rice-bowl-02-bulk-rounded IconRiceBowl02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRiceBowl02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rice-bowl-02-stroke-sharp IconRiceBowl02StrokeSharp"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconRiceBowl02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rice-bowl-02-solid-sharp IconRiceBowl02SolidSharp"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfRiceBowl02: TheIconSelfPack = {
  name: 'RiceBowl02',
  StrokeRounded: IconRiceBowl02StrokeRounded,
  DuotoneRounded: IconRiceBowl02DuotoneRounded,
  TwotoneRounded: IconRiceBowl02TwotoneRounded,
  SolidRounded: IconRiceBowl02SolidRounded,
  BulkRounded: IconRiceBowl02BulkRounded,
  StrokeSharp: IconRiceBowl02StrokeSharp,
  SolidSharp: IconRiceBowl02SolidSharp,
};