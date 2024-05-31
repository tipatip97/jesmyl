import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M4.4235 10.2502L9.61532 19.0797L9.61533 19.0797C10.1023 19.9079 10.3458 20.322 10.6054 20.5488C11.296 21.1523 12.2368 21.1502 12.9255 20.5437C13.1844 20.3157 13.4266 19.9006 13.911 19.0703L10.2334 12.955L12.0899 9.74998H8.30599L6.6712 7.03158L13.6646 7.03158L16 3L7.60332 3.00004C4.33248 3.00004 2.69707 3.00004 2.15323 4.24003C1.60939 5.48002 2.54743 7.07009 4.4235 10.2502Z',
  d2: 'M21.8349 4.22015C22.4209 5.50363 21.4101 7.14947 19.3883 10.4412L15.3729 17L13 13.2101L19.1577 3C20.621 3.10933 21.4638 3.40743 21.8349 4.22015Z',
  d3: 'M9.43626 19.6697L3.85505 10.1044C1.83828 6.65927 0.829888 4.93669 1.41451 3.59337C1.99914 2.25005 3.75721 2.25005 7.27336 2.25005L14.5715 2.25001C15.3399 2.25001 15.724 2.25 15.8684 2.49959C16.0129 2.74918 15.8214 3.08224 15.4385 3.74836L14.0776 6.11589L14.0776 6.11591C13.9369 6.3607 13.8666 6.48309 13.7504 6.55032C13.6342 6.61754 13.493 6.61754 13.2106 6.61754L8.03261 6.61754C7.25146 6.61754 6.86088 6.61754 6.71716 6.87067C6.57344 7.1238 6.77359 7.4592 7.17389 8.12999L7.73778 9.07493C7.87988 9.31304 7.95092 9.43209 8.06575 9.49729C8.18058 9.56248 8.31922 9.56248 8.5965 9.56248H10.3682C11.1366 9.56248 11.5207 9.56248 11.6651 9.81207C11.8095 10.0617 11.6181 10.3947 11.2352 11.0608L10.3926 12.5267C10.2502 12.7744 10.179 12.8982 10.1801 13.0339C10.1813 13.1695 10.2545 13.2922 10.4008 13.5375L10.4008 13.5375L13.7529 19.1547C13.9004 19.4018 13.9741 19.5253 13.9746 19.6622C13.9751 19.7991 13.9029 19.922 13.7586 20.1679C13.4235 20.7385 13.2147 21.0605 12.9947 21.2557C12.2544 21.9127 11.243 21.915 10.5006 21.2612C10.2215 21.0155 9.95979 20.5669 9.43633 19.6698L9.43626 19.6697ZM19.9419 10.3106C22.1153 6.7446 23.202 4.9616 22.572 3.57117C22.2283 2.81252 21.508 2.4678 20.309 2.31117C20.024 2.27394 19.8815 2.25533 19.747 2.32042C19.6126 2.38551 19.534 2.5168 19.3769 2.77938L13.3877 12.787C13.2352 13.0418 13.159 13.1692 13.1602 13.3096C13.1613 13.45 13.2397 13.5761 13.3964 13.8283L13.3964 13.8283L14.7664 16.0335C15.1512 16.6527 15.3435 16.9623 15.6231 16.9609C15.9028 16.9595 16.092 16.6479 16.4705 16.0249L19.9419 10.3106Z',
  d4: 'M3.85505 10.1044L9.43626 19.6697C9.95976 20.5668 10.2215 21.0155 10.5006 21.2612C11.243 21.915 12.2544 21.9127 12.9947 21.2557C13.2147 21.0604 13.4235 20.7385 13.7586 20.1678C13.9029 19.922 13.9751 19.7991 13.9746 19.6622C13.9741 19.5253 13.9004 19.4018 13.7529 19.1547L10.4008 13.5375C10.2545 13.2922 10.1813 13.1695 10.1801 13.0339C10.179 12.8982 10.2502 12.7744 10.3926 12.5267L11.2352 11.0608C11.6181 10.3947 11.8095 10.0616 11.6651 9.81206C11.5207 9.56247 11.1366 9.56247 10.3682 9.56247H8.5965C8.31922 9.56247 8.18058 9.56247 8.06575 9.49728C7.95092 9.43208 7.87988 9.31303 7.73778 9.07492L7.17389 8.12998C6.77359 7.45919 6.57344 7.12379 6.71716 6.87066C6.86088 6.61753 7.25146 6.61753 8.03261 6.61753L13.2106 6.61753C13.493 6.61753 13.6342 6.61753 13.7504 6.55031C13.8666 6.48308 13.9369 6.36068 14.0776 6.11588L15.4385 3.74835C15.8214 3.08223 16.0129 2.74917 15.8684 2.49958C15.724 2.24999 15.3399 2.25 14.5715 2.25L7.27336 2.25004C3.75721 2.25004 1.99914 2.25004 1.41451 3.59336C0.829888 4.93668 1.83828 6.65926 3.85505 10.1044Z',
  d5: 'M22.572 3.57117C23.202 4.9616 22.1153 6.7446 19.9419 10.3106L16.4705 16.0249C16.092 16.6479 15.9028 16.9595 15.6231 16.9609C15.3435 16.9623 15.1512 16.6527 14.7664 16.0335L13.3964 13.8283C13.2397 13.5761 13.1613 13.45 13.1602 13.3096C13.159 13.1692 13.2352 13.0418 13.3877 12.787L19.3769 2.77938C19.534 2.5168 19.6126 2.38551 19.747 2.32042C19.8815 2.25533 20.024 2.27394 20.309 2.31117C21.508 2.4678 22.2283 2.81252 22.572 3.57117Z',
  d6: 'M11.0331 20.9976L1.99846 6.03646L5.02155 2.99756L15.998 3.03587C16.0058 3.0359 16.0105 3.04426 16.0066 3.05089L13.6597 7.02631H6.64409L8.31885 9.76131H12.0425C12.0502 9.76131 12.055 9.76957 12.0512 9.77621L10.226 12.9624L13.9038 19.016C13.9066 19.0205 13.9053 19.0264 13.901 19.0294L11.0474 21.0007C11.0426 21.0039 11.0361 21.0025 11.0331 20.9976Z',
  d7: 'M13.37 12.6072L19.1397 3.04828C19.1431 3.04264 19.151 3.04179 19.1556 3.04657L21.9988 6.03753C22.0019 6.04079 22.0024 6.04569 22.0001 6.04953L15.7348 16.4055C15.7309 16.4119 15.7216 16.412 15.7177 16.4056L13.37 12.6072Z',
  d8: 'M2 6L11 21L13.911 19.0703L10.2334 12.955L12.0899 9.74998H8.30599L6.6712 7.03158L13.6646 7.03158L16 3H5L2 6Z',
  d9: 'M22 6L19.1577 3L13.3556 12.6204L15.7356 16.398L22 6Z',
} as const;

export const IconFlaticonStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="flaticon-stroke-rounded IconFlaticonStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconFlaticonDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="flaticon-duotone-rounded IconFlaticonDuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconFlaticonTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="flaticon-twotone-rounded IconFlaticonTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconFlaticonSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="flaticon-solid-rounded IconFlaticonSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFlaticonBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="flaticon-bulk-rounded IconFlaticonBulkRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFlaticonStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="flaticon-stroke-sharp IconFlaticonStrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconFlaticonSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="flaticon-solid-sharp IconFlaticonSolidSharp"
    >
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

export const iconPackOfFlaticon: TheIconSelfPack = {
  name: 'Flaticon',
  StrokeRounded: IconFlaticonStrokeRounded,
  DuotoneRounded: IconFlaticonDuotoneRounded,
  TwotoneRounded: IconFlaticonTwotoneRounded,
  SolidRounded: IconFlaticonSolidRounded,
  BulkRounded: IconFlaticonBulkRounded,
  StrokeSharp: IconFlaticonStrokeSharp,
  SolidSharp: IconFlaticonSolidSharp,
};