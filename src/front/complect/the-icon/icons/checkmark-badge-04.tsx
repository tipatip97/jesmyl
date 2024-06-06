import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M14.2618 3.59937C13.1956 2.53312 12.6625 2 12 2C11.3375 2 10.8044 2.53312 9.73815 3.59937C9.09832 4.2392 8.46427 4.53626 7.55208 4.53626C6.7556 4.53626 5.62243 4.38178 5 5.00944C4.38249 5.63214 4.53628 6.76065 4.53628 7.55206C4.53628 8.46428 4.2392 9.09832 3.59935 9.73817C2.53312 10.8044 2.00001 11.3375 2 12C2.00002 12.6624 2.53314 13.1956 3.59938 14.2618C4.31616 14.9786 4.53628 15.4414 4.53628 16.4479C4.53628 17.2444 4.38181 18.3776 5.00949 19C5.63218 19.6175 6.76068 19.4637 7.55206 19.4637C8.52349 19.4637 8.99128 19.6537 9.68457 20.347C10.2749 20.9374 11.0663 22 12 22C12.9337 22 13.7251 20.9374 14.3154 20.347C15.0087 19.6537 15.4765 19.4637 16.4479 19.4637C17.2393 19.4637 18.3678 19.6175 18.9905 19M20.4006 9.73817C21.4669 10.8044 22 11.3375 22 12C22 12.6624 21.4669 13.1956 20.4006 14.2618C19.6838 14.9786 19.4637 15.4414 19.4637 16.4479C19.4637 17.2444 19.6182 18.3776 18.9905 19M18.9905 19H19',
  d2: 'M8.5 9.5L12 13L21.0002 3',
  d3: 'M9.73815 3.59937C9.09832 4.2392 8.46427 4.53626 7.55208 4.53626C6.7556 4.53626 5.62243 4.38178 5 5.00944C4.38249 5.63214 4.53628 6.76065 4.53628 7.55206C4.53628 8.46428 4.2392 9.09832 3.59935 9.73817C2.53312 10.8044 2.00001 11.3375 2 12C2.00002 12.6624 2.53314 13.1956 3.59938 14.2618C4.31616 14.9786 4.53628 15.4414 4.53628 16.4479C4.53628 17.2444 4.38181 18.3776 5.00949 19C5.63218 19.6175 6.76068 19.4637 7.55206 19.4637C8.52349 19.4637 8.99128 19.6537 9.68457 20.347C10.2749 20.9374 11.0663 22 12 22C12.9337 22 13.7251 20.9374 14.3154 20.347C15.0087 19.6537 15.4765 19.4637 16.4479 19.4637C17.2393 19.4637 18.3678 19.6175 18.9905 19C19.6182 18.3776 19.4637 17.2444 19.4637 16.4479C19.4637 15.4414 19.6838 14.9786 20.4006 14.2618C21.4669 13.1956 22 12.6624 22 12C22 11.3375 21.4669 10.8044 20.4006 9.73817C19.6839 9.02137 19.4637 8.55858 19.4637 7.55206C19.4637 6.75559 19.6182 5.62243 18.9906 5C18.3679 4.38247 17.2393 4.53626 16.4479 4.53626C15.5355 4.53626 14.9015 4.23907 14.2618 3.59937C13.1956 2.53312 12.6625 2 12 2C11.3375 2 10.8044 2.53312 9.73815 3.59937Z',
  d4: 'M12 1.25C11.4388 1.25 10.9816 1.48611 10.5656 1.80358C10.1759 2.10089 9.74606 2.53075 9.24319 3.03367L9.20782 3.06904C8.69316 3.5837 8.24449 3.78626 7.55208 3.78626C7.4653 3.78626 7.35579 3.78318 7.23212 3.7797C6.91508 3.77078 6.50497 3.75924 6.14615 3.79027C5.62128 3.83566 4.96532 3.97929 4.46745 4.48134C3.9734 4.97955 3.83327 5.63282 3.78923 6.15439C3.75922 6.50995 3.77075 6.91701 3.77966 7.23178C3.78317 7.3557 3.78628 7.46554 3.78628 7.55206C3.78628 8.24448 3.58371 8.69315 3.06902 9.20784L3.03367 9.24319C2.53076 9.74604 2.10088 10.1759 1.80358 10.5655C1.48612 10.9816 1.25001 11.4388 1.25 12C1.25001 12.5611 1.48613 13.0183 1.80359 13.4344C2.10095 13.8242 2.53091 14.2541 3.03395 14.7571L3.06906 14.7922C3.40272 15.1258 3.56011 15.3422 3.64932 15.5464C3.73619 15.7453 3.78628 15.9971 3.78628 16.4479C3.78628 16.5347 3.7832 16.6442 3.77972 16.7679C3.7708 17.0849 3.75926 17.495 3.79029 17.8539C3.83569 18.3787 3.97933 19.0347 4.48139 19.5326C4.97961 20.0266 5.63287 20.1667 6.15443 20.2107C6.50997 20.2408 6.91703 20.2292 7.23179 20.2203C7.35581 20.2168 7.4655 20.2137 7.55206 20.2137C7.99328 20.2137 8.24126 20.2581 8.43645 20.3386C8.63147 20.4191 8.84006 20.5632 9.15424 20.8774C9.22132 20.9444 9.3097 21.0392 9.41166 21.1484C9.64161 21.3949 9.94071 21.7155 10.22 21.9596C10.6437 22.33 11.2516 22.75 12 22.75C12.7485 22.75 13.3563 22.33 13.7801 21.9596C14.0593 21.7155 14.3583 21.3951 14.5882 21.1486C14.6902 21.0392 14.7787 20.9445 14.8458 20.8773C15.1599 20.5632 15.3685 20.4191 15.5635 20.3386C15.7587 20.2581 16.0067 20.2137 16.4479 20.2137C16.5345 20.2137 16.6442 20.2168 16.7682 20.2203C17.083 20.2292 17.49 20.2408 17.8456 20.2107C18.3671 20.1667 19.0204 20.0266 19.5186 19.5326C20.0207 19.0347 20.1643 18.3787 20.2097 17.8539C20.2407 17.495 20.2292 17.0849 20.2203 16.7679C20.2168 16.6443 20.2137 16.5346 20.2137 16.4479C20.2137 15.9971 20.2638 15.7453 20.3507 15.5464C20.4399 15.3422 20.5973 15.1258 20.9309 14.7922L20.9661 14.7571C21.4691 14.2541 21.8991 13.8242 22.1964 13.4344C22.5139 13.0183 22.75 12.5611 22.75 12C22.75 11.4388 22.5139 10.9816 22.1964 10.5655C21.8991 10.1759 21.4693 9.74607 20.9664 9.24322L20.931 9.20784C20.5973 8.87416 20.4399 8.65779 20.3507 8.45354C20.2638 8.25468 20.2137 8.00288 20.2137 7.55206C20.2137 7.46534 20.2168 7.35593 20.2203 7.23236C20.2292 6.91533 20.2407 6.50496 20.2097 6.14615C20.1922 5.94375 20.1601 5.72185 20.0985 5.49704L12.7434 13.6691C12.5599 13.873 12.3007 13.9925 12.0264 13.9997C11.7522 14.0069 11.487 13.9012 11.293 13.7072L7.79304 10.2072C7.40252 9.81667 7.40252 9.1835 7.79304 8.79298C8.18357 8.40245 8.81673 8.40245 9.20726 8.79298L11.962 11.5477L18.7664 3.98744C18.4512 3.86543 18.129 3.81314 17.8456 3.78921C17.49 3.75919 17.083 3.77072 16.7682 3.77964C16.6442 3.78315 16.5345 3.78626 16.4479 3.78626C15.7553 3.78626 15.3067 3.58361 14.7922 3.06904L14.7568 3.03368C14.2539 2.53075 13.8241 2.10089 13.4344 1.80358C13.0184 1.48611 12.5612 1.25 12 1.25Z',
  d5: 'M20.0977 5.49696L21.7429 3.66898C22.1124 3.25848 22.0791 2.62619 21.6686 2.25672C21.2581 1.88726 20.6258 1.92053 20.2564 2.33103L18.7656 3.98737C19.0305 4.08993 19.2904 4.24175 19.5179 4.46739C19.8264 4.77326 19.9995 5.13881 20.0977 5.49696Z',
  d6: 'M10.5656 1.80358C10.9816 1.48611 11.4388 1.25 12 1.25C12.5612 1.25 13.0184 1.48611 13.4344 1.80358C13.8241 2.10089 14.2539 2.53075 14.7568 3.03368L14.7922 3.06904C15.3067 3.58361 15.7553 3.78626 16.4479 3.78626C16.5345 3.78626 16.6442 3.78315 16.7682 3.77964C17.083 3.77072 17.49 3.75919 17.8456 3.78921C18.3672 3.83325 19.0205 3.97339 19.5187 4.46747C20.0207 4.96533 20.1643 5.62129 20.2097 6.14615C20.2407 6.50496 20.2292 6.91507 20.2203 7.2321L20.2203 7.23236C20.2168 7.35593 20.2137 7.46534 20.2137 7.55206C20.2137 8.00288 20.2638 8.25468 20.3507 8.45354C20.4399 8.65779 20.5973 8.87416 20.931 9.20784L20.9664 9.24322C21.4693 9.74607 21.8991 10.1759 22.1964 10.5655C22.5139 10.9816 22.75 11.4388 22.75 12C22.75 12.5611 22.5139 13.0183 22.1964 13.4344C21.8991 13.8242 21.4691 14.2541 20.9661 14.7571L20.9309 14.7922C20.5973 15.1258 20.4399 15.3422 20.3507 15.5464C20.2638 15.7453 20.2137 15.9971 20.2137 16.4479C20.2137 16.5346 20.2168 16.644 20.2203 16.7676L20.2203 16.7679C20.2292 17.0849 20.2407 17.495 20.2097 17.8539C20.1643 18.3787 20.0207 19.0347 19.5186 19.5326C19.0204 20.0266 18.3671 20.1667 17.8456 20.2107C17.49 20.2408 17.083 20.2292 16.7682 20.2203C16.6442 20.2168 16.5345 20.2137 16.4479 20.2137C16.0067 20.2137 15.7587 20.2581 15.5635 20.3386C15.3685 20.4191 15.1599 20.5632 14.8458 20.8773C14.7787 20.9445 14.6902 21.0392 14.5882 21.1486C14.3583 21.3951 14.0593 21.7155 13.7801 21.9596C13.3563 22.33 12.7485 22.75 12 22.75C11.2516 22.75 10.6437 22.33 10.22 21.9596C9.94071 21.7155 9.64176 21.3951 9.4118 21.1486L9.41179 21.1486L9.41176 21.1486C9.30976 21.0392 9.22134 20.9445 9.15424 20.8774C8.84006 20.5632 8.63147 20.4191 8.43645 20.3386C8.24126 20.2581 7.99328 20.2137 7.55206 20.2137C7.4655 20.2137 7.35581 20.2168 7.23179 20.2203C6.91703 20.2292 6.50997 20.2408 6.15443 20.2107C5.63287 20.1667 4.97961 20.0266 4.48139 19.5326C3.97933 19.0347 3.83569 18.3787 3.79029 17.8539C3.75926 17.495 3.7708 17.0849 3.77972 16.7679C3.7832 16.6442 3.78628 16.5347 3.78628 16.4479C3.78628 15.9971 3.73619 15.7453 3.64932 15.5464C3.56011 15.3422 3.40272 15.1258 3.06906 14.7922L3.03395 14.7571C2.53091 14.2541 2.10095 13.8242 1.80358 13.4344C1.48613 13.0183 1.25001 12.5611 1.25 12C1.25001 11.4388 1.48612 10.9816 1.80358 10.5655C2.10089 10.1759 2.53075 9.74606 3.03367 9.24319L3.06902 9.20784C3.58371 8.69315 3.78628 8.24448 3.78628 7.55206C3.78628 7.46549 3.78317 7.35581 3.77966 7.23181L3.77966 7.23178C3.77075 6.91701 3.75922 6.50995 3.78923 6.15439C3.83327 5.63282 3.9734 4.97955 4.46745 4.48134C4.96532 3.97929 5.62128 3.83566 6.14615 3.79027C6.50497 3.75924 6.91509 3.77078 7.23212 3.7797C7.35579 3.78318 7.4653 3.78626 7.55208 3.78626C8.24449 3.78626 8.69316 3.5837 9.20782 3.06904L9.24319 3.03367C9.74606 2.53075 10.1759 2.10089 10.5656 1.80358Z',
  d7: 'M21.6692 2.25672C22.0797 2.62619 22.113 3.25848 21.7435 3.66898L12.7433 13.669C12.5598 13.8729 12.3005 13.9925 12.0263 13.9997C11.752 14.0069 11.4869 13.9011 11.2929 13.7071L7.79289 10.2071C7.40237 9.81659 7.40237 9.18343 7.79289 8.7929C8.18342 8.40238 8.81658 8.40238 9.20711 8.7929L11.9618 11.5476L20.257 2.33103C20.6264 1.92053 21.2587 1.88726 21.6692 2.25672Z',
  d8: 'M19.0029 8.99876L21.9971 11.9929C22.001 11.9968 22.001 12.0032 21.9971 12.0071L19.0029 15.0012V18.9929C19.0029 18.9984 18.9984 19.0029 18.9929 19.0029H15.0012L12.0071 21.9971C12.0032 22.001 11.9968 22.001 11.9929 21.9971L9.00169 19.0058C8.99981 19.004 8.99727 19.0029 8.99461 19.0029H5.0071C5.00158 19.0029 4.9971 18.9984 4.9971 18.9929V15.0012L2.00293 12.0071C1.99902 12.0032 1.99902 11.9968 2.00293 11.9929L4.9971 8.99876V5.0071C4.9971 5.00158 5.00158 4.9971 5.0071 4.9971H8.99876L11.9929 2.00293C11.9968 1.99902 12.0032 1.99902 12.0071 2.00293L15.0012 4.9971',
  d9: 'M12.5303 1.46967C12.2374 1.17678 11.7626 1.17678 11.4697 1.46967L8.68934 4.25H5C4.58579 4.25 4.25 4.58579 4.25 5V8.68934L1.46967 11.4697C1.17678 11.7626 1.17678 12.2374 1.46967 12.5303L4.25 15.3107V19C4.25 19.4142 4.58579 19.75 5 19.75H8.68934L11.4697 22.5303C11.7626 22.8232 12.2374 22.8232 12.5303 22.5303L15.3107 19.75H19C19.4142 19.75 19.75 19.4142 19.75 19V15.3107L22.5303 12.5303C22.8232 12.2374 22.8232 11.7626 22.5303 11.4697L19.75 8.68934V5.88407L12.0383 14.4524L7.79297 10.2071L9.20718 8.79292L11.9619 11.5476L18.5299 4.25H15.3107L12.5303 1.46967Z',
} as const;

export const IconCheckmarkBadge04StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="checkmark-badge-04-stroke-rounded IconCheckmarkBadge04StrokeRounded"
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

export const IconCheckmarkBadge04DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="checkmark-badge-04-duotone-rounded IconCheckmarkBadge04DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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

export const IconCheckmarkBadge04TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="checkmark-badge-04-twotone-rounded IconCheckmarkBadge04TwotoneRounded"
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

export const IconCheckmarkBadge04SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="checkmark-badge-04-solid-rounded IconCheckmarkBadge04SolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCheckmarkBadge04BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="checkmark-badge-04-bulk-rounded IconCheckmarkBadge04BulkRounded"
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
    </TheIconWrapper>
  );
};

export const IconCheckmarkBadge04StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="checkmark-badge-04-stroke-sharp IconCheckmarkBadge04StrokeSharp"
    >
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCheckmarkBadge04SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="checkmark-badge-04-solid-sharp IconCheckmarkBadge04SolidSharp"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCheckmarkBadge04: TheIconSelfPack = {
  name: 'CheckmarkBadge04',
  StrokeRounded: IconCheckmarkBadge04StrokeRounded,
  DuotoneRounded: IconCheckmarkBadge04DuotoneRounded,
  TwotoneRounded: IconCheckmarkBadge04TwotoneRounded,
  SolidRounded: IconCheckmarkBadge04SolidRounded,
  BulkRounded: IconCheckmarkBadge04BulkRounded,
  StrokeSharp: IconCheckmarkBadge04StrokeSharp,
  SolidSharp: IconCheckmarkBadge04SolidSharp,
};