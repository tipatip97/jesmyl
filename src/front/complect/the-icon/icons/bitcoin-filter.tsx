import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M6.23433 7C4.60404 7 3.7889 7 3.32795 7.49503C2.86701 7.99006 2.96811 8.7569 3.17033 10.2906C3.22938 10.7385 3.3276 10.9928 3.62734 11.3402C4.59564 12.4627 6.36901 14.4592 8.85746 16.2744C9.08486 16.4402 9.23409 16.7113 9.25927 17.0112C9.34268 18.0054 9.42401 18.9059 9.5007 19.71C9.62524 21.0158 9.68751 21.6687 10.1633 21.9159C10.639 22.163 11.2333 21.8467 12.4219 21.2141L13.4884 20.6465C13.9287 20.4122 14.1489 20.295 14.2852 20.0974C14.4216 19.8998 14.4494 19.6615 14.5051 19.1851C14.577 18.5699 14.6529 17.8503 14.7307 17.0112C14.7583 16.714 14.907 16.446 15.1326 16.2816C17.6261 14.4642 19.403 12.4641 20.3726 11.3402C20.6724 10.9928 20.7706 10.7385 20.8297 10.2906C21.0319 8.7569 21.133 7.99006 20.672 7.49503C20.2111 7 19.396 7 17.7657 7',
  d2: 'M9.625 9.5L9.625 3.5M11.5 3.5V2M11.5 11V9.5M9.625 6.5H13.375M13.375 6.5C13.9963 6.5 14.5 7.00368 14.5 7.625V8.375C14.5 8.99632 13.9963 9.5 13.375 9.5H8.5M13.375 6.5C13.9963 6.5 14.5 5.99632 14.5 5.375V4.625C14.5 4.00368 13.9963 3.5 13.375 3.5H8.5',
  d3: 'M8.85746 16.2744C6.36901 14.4592 4.59564 12.4627 3.62734 11.3402C3.3276 10.9928 3.22938 10.7385 3.17033 10.2906C2.96811 8.7569 2.86701 7.99006 3.32795 7.49503C3.7889 7 4.60404 7 6.23433 7H17.7657C19.396 7 20.2111 7 20.672 7.49503C21.133 7.99006 21.0319 8.7569 20.8297 10.2906C20.7706 10.7385 20.6724 10.9928 20.3726 11.3402C19.403 12.4641 17.6261 14.4642 15.1326 16.2816C14.907 16.446 14.7583 16.714 14.7307 17.0112C14.6529 17.8503 14.577 18.5699 14.5051 19.1851C14.4494 19.6615 14.4216 19.8998 14.2852 20.0974C14.1489 20.295 13.9287 20.4122 13.4884 20.6465L13.4884 20.6465L12.4219 21.2141C11.2333 21.8467 10.639 22.163 10.1633 21.9159C9.68751 21.6687 9.62524 21.0158 9.5007 19.71C9.42401 18.9059 9.34268 18.0054 9.25927 17.0112C9.23409 16.7113 9.08486 16.4402 8.85746 16.2744Z',
  d4: 'M11.5 1.25C11.9142 1.25 12.25 1.58579 12.25 2V2.75H13.375C14.4105 2.75 15.25 3.58947 15.25 4.625V5.375C15.25 5.7971 15.1105 6.18663 14.8751 6.5C15.1105 6.81337 15.25 7.2029 15.25 7.625V8.375C15.25 9.41053 14.4105 10.25 13.375 10.25H12.25V11C12.25 11.4142 11.9142 11.75 11.5 11.75C11.0858 11.75 10.75 11.4142 10.75 11V10.25H8.5C8.08579 10.25 7.75 9.91421 7.75 9.5C7.75 9.08579 8.08579 8.75 8.5 8.75H8.875L8.875 4.25H8.5C8.08579 4.25 7.75 3.91421 7.75 3.5C7.75 3.08579 8.08579 2.75 8.5 2.75H10.75V2C10.75 1.58579 11.0858 1.25 11.5 1.25ZM10.375 4.25V5.75H13.375C13.5821 5.75 13.75 5.58211 13.75 5.375V4.625C13.75 4.41789 13.5821 4.25 13.375 4.25H10.375ZM13.375 7.25H10.375L10.375 8.75H13.375C13.5821 8.75 13.75 8.58211 13.75 8.375V7.625C13.75 7.41789 13.5821 7.25 13.375 7.25Z',
  d5: 'M7.375 6.25H6.18313C5.41173 6.24997 4.7586 6.24995 4.24373 6.31843C3.70108 6.39062 3.18005 6.55329 2.77905 6.98394C2.3714 7.42173 2.2591 7.95166 2.25053 8.49142C2.24258 8.99253 2.32455 9.61393 2.41953 10.3339C2.45344 10.5911 2.5117 10.8961 2.61851 11.1469C2.72684 11.4013 2.87559 11.617 3.05943 11.8301C4.03812 12.9646 5.85635 15.0136 8.41551 16.8803C8.45666 16.9103 8.50377 16.9776 8.51188 17.074C8.59553 18.071 8.68248 19.0307 8.75944 19.8376C8.81702 20.442 8.86831 20.9803 8.97326 21.3942C9.08677 21.8419 9.30387 22.3146 9.81748 22.5814C10.3273 22.8463 10.8413 22.7569 11.2773 22.6013C11.6864 22.4553 13.3117 21.5902 13.8642 21.2961C14.0641 21.1897 14.2557 21.0878 14.4118 20.9855C14.5868 20.8709 14.7605 20.7292 14.9025 20.5233C15.1487 20.1665 15.1965 19.7443 15.2394 19.365C15.3121 18.7434 15.3992 17.925 15.4775 17.0805C15.4864 16.984 15.5336 16.9174 15.5743 16.8877C18.1386 15.0187 19.9604 12.9661 20.9405 11.8302C21.1243 11.617 21.2731 11.4013 21.3814 11.1469C21.4883 10.8961 21.5465 10.5912 21.5804 10.334C21.6754 9.61398 21.7574 8.99255 21.7494 8.49142C21.7409 7.95166 21.6286 7.42173 21.2209 6.98394C20.8199 6.55329 20.2989 6.39062 19.7562 6.31843C19.2414 6.24995 18.5883 6.24997 17.8169 6.25H16.6351C16.6124 6.33467 16.5865 6.41806 16.5575 6.5C16.6821 6.85239 16.75 7.23135 16.75 7.625V8.375C16.75 10.1548 15.3723 11.6129 13.6252 11.7409C13.3189 12.6195 12.4831 13.25 11.5 13.25C10.5203 13.25 9.68691 12.6239 9.37803 11.75H8.5C7.25736 11.75 6.25 10.7426 6.25 9.5C6.25 8.66718 6.70247 7.94005 7.375 7.55101V6.25Z',
  d6: 'M9.62148 9.48478V3.49696M11.4955 3.49696V2M11.4955 10.9817V9.48478M9.62148 6.49087H13.3695M13.3695 6.49087C13.9905 6.49087 14.4939 6.99353 14.4939 7.61359V8.36207C14.4939 8.98213 13.9905 9.48478 13.3695 9.48478H8.49707M13.3695 6.49087C13.9905 6.49087 14.4939 5.98821 14.4939 5.36815V4.61967C14.4939 3.99961 13.9905 3.49696 13.3695 3.49696H8.49707',
  d7: 'M6.97768 7.07151L3.09996 7.07112C3.04475 7.07112 3 7.1158 3 7.17092V10.9881L9.0051 15.983L9.95289 21.9191C9.96363 21.9864 10.0372 22.0233 10.0978 21.9919L13.9869 19.9696L14.984 15.983L20.998 10.9954V7.05683C20.998 7.00134 20.9527 6.95651 20.8972 6.95704L16.9907 6.99408',
  d8: 'M13.25 1.25V2.75H14.375C15.4105 2.75 16.25 3.58947 16.25 4.625V5.375C16.25 5.7971 16.1105 6.18663 15.8751 6.5C16.1105 6.81337 16.25 7.2029 16.25 7.625V8.375C16.25 9.41053 15.4105 10.25 14.375 10.25H13.25V11.75H11.75V10.25H8.75V8.75H9.875L9.875 4.25H8.75V2.75H11.75V1.25H13.25ZM11.375 4.25V5.75H14.375C14.5821 5.75 14.75 5.58211 14.75 5.375V4.625C14.75 4.41789 14.5821 4.25 14.375 4.25H11.375ZM14.375 7.25H11.375L11.375 8.75H14.375C14.5821 8.75 14.75 8.58211 14.75 8.375V7.625C14.75 7.41789 14.5821 7.25 14.375 7.25Z',
  d9: 'M7.25 6.25H3C2.80106 6.25 2.61027 6.32904 2.46961 6.46973C2.32896 6.61041 2.24996 6.80122 2.25 7.00016L2.25094 11.3513L8.30597 16.3979L9.2602 22.1233C9.29933 22.3581 9.44757 22.5603 9.65967 22.6683C9.87176 22.7763 10.1225 22.7773 10.3354 22.6708L14.6439 20.5166L15.6682 16.4194L21.75 11.3513V7C21.75 6.58579 21.4142 6.25 21 6.25H17.6351C17.6124 6.33467 17.5865 6.41806 17.5575 6.5C17.6821 6.85239 17.75 7.23135 17.75 7.625V8.375C17.75 10.1122 16.4375 11.5429 14.75 11.7294V13.25H10.25V11.75H7.25V6.25Z',
} as const;

export const IconBitcoinFilterStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-filter-stroke-rounded IconBitcoinFilterStrokeRounded"
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

export const IconBitcoinFilterDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-filter-duotone-rounded IconBitcoinFilterDuotoneRounded"
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

export const IconBitcoinFilterTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-filter-twotone-rounded IconBitcoinFilterTwotoneRounded"
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

export const IconBitcoinFilterSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-filter-solid-rounded IconBitcoinFilterSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconBitcoinFilterBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-filter-bulk-rounded IconBitcoinFilterBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconBitcoinFilterStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-filter-stroke-sharp IconBitcoinFilterStrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinFilterSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-filter-solid-sharp IconBitcoinFilterSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfBitcoinFilter: TheIconSelfPack = {
  name: 'BitcoinFilter',
  StrokeRounded: IconBitcoinFilterStrokeRounded,
  DuotoneRounded: IconBitcoinFilterDuotoneRounded,
  TwotoneRounded: IconBitcoinFilterTwotoneRounded,
  SolidRounded: IconBitcoinFilterSolidRounded,
  BulkRounded: IconBitcoinFilterBulkRounded,
  StrokeSharp: IconBitcoinFilterStrokeSharp,
  SolidSharp: IconBitcoinFilterSolidSharp,
};