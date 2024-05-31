import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7 6.67011C5.93408 6.67011 4.91969 6.5508 4 6.33552C3.04003 6.11081 2 6.8021 2 7.80858V18.8175C2 19.6259 2 20.0301 2.19412 20.4469C2.30483 20.6846 2.55696 21.008 2.75898 21.1714C3.11319 21.4578 3.4088 21.527 4 21.6654C4.91969 21.8807 5.93408 22 7 22C8.91707 22 10.6675 21.6141 12 20.978C13.3325 20.342 15.0829 19.956 17 19.956C18.0659 19.956 19.0803 20.0753 20 20.2906C20.96 20.5153 22 19.824 22 18.8175V7.80858C22 7.00021 22 6.59603 21.8059 6.17921C21.6952 5.94149 21.443 5.61811 21.241 5.45475C20 4.43872 18 5.44223 18 5.44223',
  d2: 'M14.5 13.5C14.5 14.8807 13.3807 16 12 16C10.6193 16 9.5 14.8807 9.5 13.5C9.5 12.1193 10.6193 11 12 11C13.3807 11 14.5 12.1193 14.5 13.5Z',
  d3: 'M5.5 14.5L5.5 14.509',
  d4: 'M18.5 12.4922L18.5 12.5012',
  d5: 'M9.5 4.5C9.99153 3.9943 11.2998 2 12 2M14.5 4.5C14.0085 3.9943 12.7002 2 12 2M12 2V8',
  d6: 'M7 22C8.91707 22 10.6675 21.6224 12 21C13.3325 20.3776 15.0829 20 17 20C18.0659 20 19.0803 20.1167 20 20.3274C20.96 20.5473 22 19.8709 22 18.886V8.11397C22 6.62036 21.5817 5.68968 20 5.3274C19.0803 5.11675 18.0659 5 17 5C15.0829 5 13.3325 5.37764 12 6C10.6675 6.62236 8.91707 7 7 7C5.93408 7 4.91969 6.88325 4 6.6726C3.04003 6.45273 2 7.12914 2 8.11397V18.886C2 20.4264 2.49957 21.3289 4 21.6726C4.91969 21.8833 5.93408 22 7 22ZM12 16C13.3807 16 14.5 14.8807 14.5 13.5C14.5 12.1193 13.3807 11 12 11C10.6193 11 9.5 12.1193 9.5 13.5C9.5 14.8807 10.6193 16 12 16Z',
  d7: 'M9.50566 8.125C9.50566 9.50571 10.6249 10.625 12.0057 10.625C13.3864 10.625 14.5057 9.50571 14.5057 8.125V7.5722C14.5057 7.34388 14.5057 7.22972 14.5601 7.15214C14.6146 7.07457 14.7403 7.02912 14.9919 6.93823C15.4716 6.76489 16.1019 6.39555 16.4857 5.60424C16.5099 5.55448 16.5219 5.5296 16.5315 5.51467C16.5825 5.43507 16.6516 5.3912 16.7454 5.37899C16.763 5.37671 16.784 5.37647 16.8259 5.37599C16.8838 5.37533 16.9419 5.375 17 5.375C18.1198 5.375 19.1905 5.49757 20.1674 5.72133C21.0845 5.93137 21.7825 6.33717 22.2218 7.01245C22.6428 7.65953 22.75 8.44212 22.75 9.23897V19.011C22.75 20.5782 21.159 21.4873 19.8326 21.1835C18.9701 20.9859 18.012 20.875 17 20.875C15.1744 20.875 13.5352 21.2357 12.3174 21.8045C10.8702 22.4805 9.00849 22.875 7 22.875C5.88016 22.875 4.80949 22.7524 3.83255 22.5287C2.95689 22.3281 2.26524 21.9361 1.81644 21.2738C1.38242 20.6332 1.25 19.8466 1.25 19.011V9.23897C1.25 7.67178 2.841 6.76272 4.16745 7.06653C5.02989 7.26407 5.988 7.375 7 7.375C7.61957 7.375 8.21766 7.33345 8.7851 7.25633C9.12858 7.20964 9.30032 7.1863 9.40299 7.27595C9.50566 7.36561 9.50566 7.53272 9.50566 7.86694V7.86695V8.125ZM12 17.125C13.6569 17.125 15 15.7819 15 14.125C15 12.4681 13.6569 11.125 12 11.125C10.3431 11.125 9 12.4681 9 14.125C9 15.7819 10.3431 17.125 12 17.125ZM5.5 14.125C6.05228 14.125 6.5 14.5727 6.5 15.125V15.134C6.5 15.6863 6.05228 16.134 5.5 16.134C4.94772 16.134 4.5 15.6863 4.5 15.134V15.125C4.5 14.5727 4.94772 14.125 5.5 14.125ZM18.5 12.1172C19.0523 12.1172 19.5 12.5649 19.5 13.1172V13.1262C19.5 13.6785 19.0523 14.1262 18.5 14.1262C17.9477 14.1262 17.5 13.6785 17.5 13.1262V13.1172C17.5 12.5649 17.9477 12.1172 18.5 12.1172Z',
  d8: 'M13.0059 8.125C13.0059 8.67728 12.5581 9.125 12.0059 9.125C11.4536 9.125 11.0059 8.67728 11.0059 8.125L11.0059 5.62496L10.4116 5.62498C10.236 5.62511 10.0203 5.62526 9.84387 5.60319L9.84053 5.60277C9.71408 5.587 9.13804 5.51517 8.86368 4.94957C8.58872 4.38275 8.89065 3.88261 8.95597 3.7744L8.95841 3.77037C9.05062 3.61735 9.18477 3.44647 9.29511 3.30592L9.31885 3.27567C9.61348 2.89985 9.99545 2.41563 10.3759 2.02462C10.5657 1.82951 10.783 1.62828 11.0139 1.46943C11.2191 1.32823 11.5693 1.12496 12 1.12496C12.4307 1.12496 12.7809 1.32823 12.9861 1.46943C13.217 1.62828 13.4343 1.82951 13.6241 2.02462C14.0046 2.41563 14.3865 2.89985 14.6812 3.27567L14.7049 3.30591C14.8152 3.44647 14.9494 3.61735 15.0416 3.77037L15.044 3.77441C15.1093 3.88261 15.4113 4.38275 15.1363 4.94957C14.862 5.51517 14.2859 5.58701 14.1595 5.60277L14.1561 5.60319C13.9797 5.62526 13.764 5.62511 13.5884 5.62498L13.0059 5.62496L13.0059 8.125Z',
  d9: 'M12.0057 10.625C10.6249 10.625 9.50566 9.50571 9.50566 8.125V7.86695C9.50566 7.53273 9.50566 7.36561 9.40299 7.27595C9.30032 7.1863 9.12858 7.20964 8.7851 7.25633C8.21766 7.33345 7.61957 7.375 7 7.375C5.988 7.375 5.02989 7.26407 4.16745 7.06653C2.841 6.76272 1.25 7.67178 1.25 9.23897V19.011C1.25 19.8466 1.38242 20.6332 1.81644 21.2738C2.26524 21.9361 2.95689 22.3281 3.83255 22.5287C4.80949 22.7524 5.88016 22.875 7 22.875C9.00849 22.875 10.8702 22.4805 12.3174 21.8045C13.5352 21.2357 15.1744 20.875 17 20.875C18.012 20.875 18.9701 20.9859 19.8326 21.1835C21.159 21.4873 22.75 20.5782 22.75 19.011V9.23897C22.75 8.44212 22.6428 7.65953 22.2218 7.01245C21.7825 6.33717 21.0845 5.93137 20.1674 5.72133C19.1905 5.49757 18.1198 5.375 17 5.375C16.9419 5.375 16.8838 5.37533 16.8259 5.37599C16.784 5.37647 16.763 5.37671 16.7454 5.37899C16.6516 5.3912 16.5825 5.43507 16.5315 5.51467C16.5219 5.5296 16.5099 5.55448 16.4857 5.60424C16.1019 6.39555 15.4716 6.76489 14.9919 6.93823C14.7403 7.02912 14.6146 7.07457 14.5601 7.15214C14.5057 7.22972 14.5057 7.34388 14.5057 7.5722V8.125C14.5057 9.50571 13.3864 10.625 12.0057 10.625Z',
  d10: 'M12 17.125C13.6569 17.125 15 15.7819 15 14.125C15 12.4681 13.6569 11.125 12 11.125C10.3431 11.125 9 12.4681 9 14.125C9 15.7819 10.3431 17.125 12 17.125Z',
  d11: 'M5.5 14.125C6.05228 14.125 6.5 14.5727 6.5 15.125V15.134C6.5 15.6863 6.05228 16.134 5.5 16.134C4.94772 16.134 4.5 15.6863 4.5 15.134V15.125C4.5 14.5727 4.94772 14.125 5.5 14.125Z',
  d12: 'M19.5 13.1172C19.5 12.5649 19.0523 12.1172 18.5 12.1172C17.9477 12.1172 17.5 12.5649 17.5 13.1172V13.1262C17.5 13.6785 17.9477 14.1262 18.5 14.1262C19.0523 14.1262 19.5 13.6785 19.5 13.1262V13.1172Z',
  d13: 'M18 5.03711C20.4362 5.21812 22 6.00002 22 6.00002V21C22 21 20 20 17 20C15.0829 20 13.3325 20.3777 12 21C10.6675 21.6224 8.91707 22 7 22C5.93408 22 4.5 22 2 21V6.00002C3.79829 6.71933 5.04506 6.92123 6 6.9779',
  d14: 'M9.5 4.5L12 2L14.5 4.5M12 8V2.36329',
  d15: 'M7 6.75C7.91207 6.75 8.77758 6.65997 9.56727 6.49893L9.75027 6.68193V9.41416H14.2503V6.68192L16.1589 4.77327C16.4359 4.75786 16.7165 4.75 17 4.75C18.5827 4.75 19.9028 5.01364 20.831 5.27886C21.2956 5.41159 21.6636 5.54516 21.9192 5.64739C22.047 5.69853 22.1469 5.7419 22.2169 5.7735L22.75 6.03647V22.7135L21.3621 22.0401C21.1489 21.9548 20.8294 21.8384 20.419 21.7211C19.5972 21.4864 18.4173 21.25 17 21.25C15.1744 21.25 13.5352 21.6107 12.3174 22.1795C10.8702 22.8555 9.00849 23.25 7 23.25C5.87882 23.25 4.34095 23.2442 1.72146 22.1964L1.25 22.0078V5.39223L2.27854 5.80364C4.64464 6.75008 5.97319 6.75004 6.98161 6.75L7 6.75ZM12 10.7501C10.2051 10.7501 8.75 12.2051 8.75 14.0001C8.75 15.795 10.2051 17.2501 12 17.2501C13.7949 17.2501 15.25 15.795 15.25 14.0001C15.25 12.2051 13.7949 10.7501 12 10.7501ZM6.5 14.0001V16.009H4.5V14.0001H6.5ZM19.5 14.0012V11.9922H17.5V14.0012H19.5Z',
  d16: 'M12.0001 0.75L15.2072 3.95711L13.793 5.37132L13.0001 4.57843V8.16421H11.0001V4.57843L10.2072 5.37132L8.79297 3.95711L12.0001 0.75Z',
} as const;

export const IconMoneySend02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="money-send-02-stroke-rounded IconMoneySend02StrokeRounded"
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

export const IconMoneySend02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="money-send-02-duotone-rounded IconMoneySend02DuotoneRounded"
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

export const IconMoneySend02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="money-send-02-twotone-rounded IconMoneySend02TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMoneySend02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="money-send-02-solid-rounded IconMoneySend02SolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconMoneySend02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="money-send-02-bulk-rounded IconMoneySend02BulkRounded"
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
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoneySend02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="money-send-02-stroke-sharp IconMoneySend02StrokeSharp"
    >
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoneySend02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="money-send-02-solid-sharp IconMoneySend02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfMoneySend02: TheIconSelfPack = {
  name: 'MoneySend02',
  StrokeRounded: IconMoneySend02StrokeRounded,
  DuotoneRounded: IconMoneySend02DuotoneRounded,
  TwotoneRounded: IconMoneySend02TwotoneRounded,
  SolidRounded: IconMoneySend02SolidRounded,
  BulkRounded: IconMoneySend02BulkRounded,
  StrokeSharp: IconMoneySend02StrokeSharp,
  SolidSharp: IconMoneySend02SolidSharp,
};