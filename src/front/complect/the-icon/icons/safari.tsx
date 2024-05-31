import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M13.7214 13.7214C14.1043 13.3385 14.3231 12.828 14.7607 11.807L16.3172 8.17504C16.4736 7.81011 16.5518 7.62764 16.4621 7.53789C16.3724 7.44815 16.1899 7.52635 15.825 7.68275L12.193 9.23929C11.172 9.67688 10.6615 9.89567 10.2786 10.2786M13.7214 13.7214C13.3385 14.1043 12.828 14.3231 11.807 14.7607L8.17504 16.3172C7.81011 16.4736 7.62764 16.5518 7.53789 16.4621C7.44815 16.3724 7.52635 16.1899 7.68275 15.825L9.23929 12.193C9.67688 11.172 9.89567 10.6615 10.2786 10.2786M13.7214 13.7214L10.2786 10.2786',
  d2: 'M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z',
  d3: 'M12 2L12 3.5M12 22L12 20.5',
  d4: 'M22 12L20.5 12M2 12L3.5 12',
  d5: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM7.53789 16.4621C7.62764 16.5518 7.81011 16.4736 8.17504 16.3172L11.807 14.7607C12.828 14.3231 13.3385 14.1043 13.7214 13.7214C14.1043 13.3385 14.3231 12.828 14.7607 11.807L16.3172 8.17504C16.4736 7.8101 16.5518 7.62764 16.4621 7.53789C16.3724 7.44815 16.1899 7.52635 15.825 7.68275L12.193 9.23929C11.172 9.67688 10.6615 9.89567 10.2786 10.2786C9.89567 10.6615 9.67688 11.172 9.23929 12.193L7.68275 15.825C7.52635 16.1899 7.44815 16.3724 7.53789 16.4621Z',
  d6: 'M12.7498 2.24787C12.7498 2.66208 12.414 2.99787 11.9998 2.99787C11.5856 2.99787 11.2498 2.66208 11.2498 2.24787V1.80927C11.2498 1.5196 11.004 1.28947 10.7164 1.32369C5.8052 1.90797 1.90992 5.80325 1.32565 10.7144C1.29143 11.0021 1.52155 11.2479 1.81122 11.2479H2.25019C2.6644 11.2479 3.00019 11.5837 3.00019 11.9979C3.00019 12.4121 2.6644 12.7479 2.25019 12.7479H1.81122C1.52155 12.7479 1.29142 12.9937 1.32565 13.2813C1.90992 18.1925 5.8052 22.0878 10.7164 22.6721C11.004 22.7063 11.2498 22.4762 11.2498 22.1865V21.7479C11.2498 21.3337 11.5856 20.9979 11.9998 20.9979C12.414 20.9979 12.7498 21.3337 12.7498 21.7479V22.1865C12.7498 22.4762 12.9956 22.7063 13.2833 22.6721C18.1945 22.0878 22.0897 18.1925 22.674 13.2813C22.7082 12.9937 22.4781 12.7479 22.1884 12.7479H21.7502C21.336 12.7479 21.0002 12.4121 21.0002 11.9979C21.0002 11.5837 21.336 11.2479 21.7502 11.2479H22.1884C22.4781 11.2479 22.7082 11.0021 22.674 10.7144C22.0897 5.80325 18.1945 1.90797 13.2833 1.32369C12.9956 1.28947 12.7498 1.5196 12.7498 1.80927V2.24787ZM8.43841 17.0178C8.28525 17.0836 8.10459 17.1611 7.94988 17.2032C7.81822 17.2391 7.36572 17.3485 7.00722 16.99C6.64873 16.6315 6.75817 16.179 6.794 16.0474C6.8361 15.8927 6.91367 15.712 6.97943 15.5589L8.60253 11.7715L8.60254 11.7715L8.60255 11.7715L8.60259 11.7714C8.73996 11.4504 8.86304 11.1628 8.98657 10.9036C9.12574 10.6115 9.50511 10.5638 9.73386 10.7926L13.2047 14.2634C13.4334 14.4921 13.3857 14.8715 13.0937 15.0107C12.8344 15.1342 12.5468 15.2573 12.2257 15.3947L12.2257 15.3947L8.43841 17.0178ZM16.9918 7.00722C16.6333 6.64873 16.1808 6.75817 16.0492 6.794C15.8945 6.83611 15.7138 6.91367 15.5607 6.97943L11.7734 8.60253L11.7733 8.60254C11.4524 8.7399 11.1648 8.86297 10.9056 8.98649C10.6135 9.12566 10.5658 9.50503 10.7945 9.7338L14.2653 13.2045C14.494 13.4333 14.8734 13.3856 15.0126 13.0935C15.1361 12.8343 15.2592 12.5467 15.3965 12.2257L17.0196 8.43841C17.0854 8.28526 17.163 8.10458 17.2051 7.94988C17.2409 7.81822 17.3503 7.36572 16.9918 7.00722Z',
  d7: 'M12.7498 2.25178C12.7498 2.66599 12.414 3.00178 11.9998 3.00178C11.5856 3.00178 11.2498 2.66599 11.2498 2.25178V1.81318C11.2498 1.5235 11.004 1.29338 10.7164 1.3276C5.8052 1.91188 1.90992 5.80715 1.32565 10.7183C1.29143 11.006 1.52155 11.2518 1.81122 11.2518H2.25019C2.6644 11.2518 3.00019 11.5876 3.00019 12.0018C3.00019 12.416 2.6644 12.7518 2.25019 12.7518H1.81122C1.52155 12.7518 1.29142 12.9976 1.32565 13.2852C1.90992 18.1964 5.8052 22.0917 10.7164 22.676C11.004 22.7102 11.2498 22.4801 11.2498 22.1904V21.7518C11.2498 21.3376 11.5856 21.0018 11.9998 21.0018C12.414 21.0018 12.7498 21.3376 12.7498 21.7518V22.1904C12.7498 22.4801 12.9956 22.7102 13.2833 22.676C18.1945 22.0917 22.0897 18.1964 22.674 13.2852C22.7082 12.9976 22.4781 12.7518 22.1884 12.7518H21.7502C21.336 12.7518 21.0002 12.416 21.0002 12.0018C21.0002 11.5876 21.336 11.2518 21.7502 11.2518H22.1884C22.4781 11.2518 22.7082 11.006 22.674 10.7183C22.0897 5.80715 18.1945 1.91188 13.2833 1.3276C12.9956 1.29338 12.7498 1.5235 12.7498 1.81318V2.25178Z',
  d8: 'M8.43841 17.0199C8.28525 17.0856 8.10459 17.1632 7.94988 17.2053C7.81822 17.2411 7.36572 17.3506 7.00722 16.9921C6.64873 16.6336 6.75817 16.1811 6.794 16.0494C6.83611 15.8947 6.91367 15.7141 6.97943 15.5609L8.60253 11.7736C8.73993 11.4526 8.86302 11.1649 8.98657 10.9057C9.12574 10.6136 9.50511 10.5659 9.73386 10.7946L13.2047 14.2655C13.4334 14.4942 13.3857 14.8736 13.0937 15.0127C12.8344 15.1363 12.5468 15.2594 12.2257 15.3968L8.43841 17.0199Z',
  d9: 'M16.0492 6.794C16.1808 6.75817 16.6333 6.64873 16.9918 7.00722C17.3503 7.36572 17.2409 7.81822 17.2051 7.94988C17.163 8.10458 17.0854 8.28526 17.0196 8.43841L15.3965 12.2257C15.2592 12.5467 15.1361 12.8343 15.0126 13.0935C14.8734 13.3856 14.494 13.4333 14.2653 13.2045L10.7945 9.73379C10.5658 9.50503 10.6135 9.12566 10.9056 8.98649C11.1648 8.86297 11.4524 8.7399 11.7733 8.60254L15.5607 6.97943C15.7138 6.91367 15.8945 6.83611 16.0492 6.794Z',
  d10: 'M12 2V4.5M12 22V19.5',
  d11: 'M22 12H19.5M2 12H4.5',
  d12: 'M10.5154 10.5504L13.4483 13.463M10.1912 10.2284L15.9921 7.99874C16.0002 7.99563 16.0082 8.00357 16.0051 8.01166L13.7829 13.7953L8.00629 16.0192C7.99822 16.0223 7.99028 16.0144 7.99335 16.0063L10.1912 10.2284Z',
  d13: 'M11.2492 1.25V3.47959H12.7528V1.25C18.105 1.61885 22.3821 5.89601 22.751 11.2482H20.5214V12.7518H22.751C22.3821 18.104 18.105 22.3812 12.7528 22.75V20.5204H11.2492V22.75C5.89699 22.3812 1.61982 18.104 1.25098 12.7518H3.48056V11.2482H1.25098C1.61983 5.89601 5.89699 1.61885 11.2492 1.25ZM16.7492 7.25L14.4219 13.3603L10.6389 9.57811L16.7492 7.25ZM7.24902 16.75L9.57768 10.6382L13.3616 14.4214L7.24902 16.75Z',
} as const;

export const IconSafariStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="safari-stroke-rounded IconSafariStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconSafariDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="safari-duotone-rounded IconSafariDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
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
    </TheIconWrapper>
  );
};

export const IconSafariTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="safari-twotone-rounded IconSafariTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconSafariSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="safari-solid-rounded IconSafariSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSafariBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="safari-bulk-rounded IconSafariBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSafariStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="safari-stroke-sharp IconSafariStrokeSharp"
    >
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSafariSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="safari-solid-sharp IconSafariSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSafari: TheIconSelfPack = {
  name: 'Safari',
  StrokeRounded: IconSafariStrokeRounded,
  DuotoneRounded: IconSafariDuotoneRounded,
  TwotoneRounded: IconSafariTwotoneRounded,
  SolidRounded: IconSafariSolidRounded,
  BulkRounded: IconSafariBulkRounded,
  StrokeSharp: IconSafariStrokeSharp,
  SolidSharp: IconSafariSolidSharp,
};