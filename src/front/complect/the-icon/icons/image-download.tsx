import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M5 21C9.20998 16.2487 13.9412 9.9475 21 14.6734',
  d2: 'M14 3.00231C13.5299 3 12.0307 3 11.5 3C7.02166 3 4.78249 3 3.39124 4.39124C2 5.78249 2 8.02166 2 12.5C2 16.9783 2 19.2175 3.39124 20.6088C4.78249 22 7.02166 22 11.5 22C15.9783 22 18.2175 22 19.6088 20.6088C20.9472 19.2703 20.998 17.147 20.9999 13',
  d3: 'M17 7.5C17.4915 8.0057 18.7998 10 19.5 10M22 7.5C21.5085 8.0057 20.2002 10 19.5 10M19.5 10V2',
  d4: 'M3.39124 4.39124C2 5.78249 2 8.02166 2 12.5C2 16.9783 2 19.2175 3.39124 20.6088L4.58365 21.3991C4.84455 21.0865 5.10737 20.7684 5.37249 20.4476L5.37254 20.4475C9.52909 15.4169 14.2504 9.7027 20.9974 14.0538C21 13.568 21 13.051 21 12.5C21 8.02166 21 5.78249 19.6088 4.39124C18.2175 3 15.9783 3 11.5 3C7.02166 3 4.78249 3 3.39124 4.39124Z',
  d5: 'M11.5 4C9.23256 4 7.63258 4.00212 6.42121 4.16499C5.2386 4.32399 4.5772 4.6195 4.09835 5.09835C3.6195 5.5772 3.32399 6.2386 3.16499 7.42121C3.00212 8.63258 3 10.2326 3 12.5C3 14.7674 3.00212 16.3674 3.16499 17.5788C3.32399 18.7614 3.6195 19.4228 4.09835 19.9017C4.5772 20.3805 5.2386 20.676 6.42121 20.835C7.63258 20.9979 9.23256 21 11.5 21C13.7674 21 15.3674 20.9979 16.5788 20.835C17.7614 20.676 18.4228 20.3805 18.9017 19.9017C19.3628 19.4405 19.6534 18.8106 19.8163 17.711C19.9836 16.5822 19.999 15.0952 19.9999 12.9995C20.0002 12.4473 20.4481 11.9997 21.0004 12C21.5527 12.0003 22.0002 12.4482 21.9999 13.0005C21.999 15.0517 21.988 16.6999 21.7947 18.0041C21.5972 19.3376 21.1932 20.4386 20.3159 21.3159C19.4035 22.2283 18.2497 22.6284 16.8453 22.8172C15.4851 23 13.7504 23 11.5744 23H11.4256C9.24959 23 7.51485 23 6.15471 22.8172C4.75033 22.6284 3.59653 22.2283 2.68414 21.3159C1.77175 20.4035 1.37164 19.2497 1.18282 17.8453C0.999959 16.4852 0.999977 14.7504 1 12.5745V12.5745V12.4255V12.4255C0.999977 10.2496 0.999959 8.51484 1.18282 7.15471C1.37164 5.75033 1.77175 4.59653 2.68414 3.68414C3.59653 2.77175 4.75033 2.37164 6.15471 2.18282C7.51484 1.99996 9.24957 1.99998 11.4255 2H11.4255L13.9996 2.00008C14.5519 2.00009 15 2.44782 15 3.00011C15 3.55239 14.5522 4.00009 13.9999 4.00008L11.5 4Z',
  d6: 'M21.5571 13.8424C19.6598 12.5721 17.8501 11.9996 16.1146 12C14.3837 12.0004 12.8205 12.5709 11.4123 13.4286C9.01532 14.8887 6.91677 17.291 5.06611 19.4095C4.79754 19.7169 4.53419 20.0184 4.27591 20.3101L3 21.5L4.20331 22.3244C5.0691 22.6871 6.08223 22.8458 7.2469 22.923C8.40696 23 9.80532 23 11.4693 22.9999H11.5752C13.7512 23 15.4859 23 16.8461 22.8171C18.2504 22.6283 19.4043 22.2282 20.3166 21.3158C21.9094 19.723 21.9998 16.7703 22.0008 14.6739L22.001 14.1396L21.5571 13.8424Z',
  d7: 'M20.7559 2C20.7559 1.44772 20.3081 1 19.7559 1C19.2036 1 18.7559 1.44772 18.7559 2L18.7559 6.50004L18.1616 6.50002C17.986 6.49989 17.7703 6.49974 17.5939 6.52181L17.5905 6.52223C17.4641 6.538 16.888 6.60983 16.6137 7.17543C16.3387 7.74225 16.6407 8.24239 16.706 8.3506L17.0451 8.81908C17.3397 9.19491 17.7454 9.70937 18.1259 10.1004C18.3157 10.2955 18.533 10.4967 18.7639 10.6556C18.9691 10.7968 19.3193 11 19.75 11C20.1807 11 20.5309 10.7968 20.7361 10.6556C20.967 10.4967 21.1843 10.2955 21.3741 10.1004C21.7546 9.70937 22.1602 9.19492 22.4549 8.81909L22.794 8.35059C22.8593 8.24239 23.1613 7.74225 22.8863 7.17543C22.612 6.60983 22.0359 6.53799 21.9095 6.52223L21.9061 6.52181C21.7297 6.49974 21.514 6.49989 21.3384 6.50002L20.7559 6.50004L20.7559 2Z',
  d8: 'M21 11V22H3V4H12',
  d9: 'M5 22L15 13L21 17',
  d10: 'M14 7L17 10L20 7M17 2V9.5',
  d11: 'M3 2.50037C2.44772 2.50037 2 2.94808 2 3.50037V21.5004C2 22.0527 2.44772 22.5004 3 22.5004H21C21.5523 22.5004 22 22.0527 22 21.5004V10.5004H20V14.6317L14.9397 11.2582L4 20.2088V4.50037H12V2.50037H3Z',
  d12: 'M17.293 10.9139L21.0002 7.20683L19.5859 5.79262L18.293 7.08551V1.49973H16.293V7.08551L15.0002 5.79262L13.5859 7.20683L17.293 10.9139Z',
} as const;

export const IconImageDownloadStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="image-download-stroke-rounded IconImageDownloadStrokeRounded"
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
        strokeLinecap="round" 
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

export const IconImageDownloadDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="image-download-duotone-rounded IconImageDownloadDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconImageDownloadTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="image-download-twotone-rounded IconImageDownloadTwotoneRounded"
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
        strokeLinecap="round" 
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

export const IconImageDownloadSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="image-download-solid-rounded IconImageDownloadSolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconImageDownloadBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="image-download-bulk-rounded IconImageDownloadBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconImageDownloadStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="image-download-stroke-sharp IconImageDownloadStrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconImageDownloadSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="image-download-solid-sharp IconImageDownloadSolidSharp"
    >
      <path 
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

export const iconPackOfImageDownload: TheIconSelfPack = {
  name: 'ImageDownload',
  StrokeRounded: IconImageDownloadStrokeRounded,
  DuotoneRounded: IconImageDownloadDuotoneRounded,
  TwotoneRounded: IconImageDownloadTwotoneRounded,
  SolidRounded: IconImageDownloadSolidRounded,
  BulkRounded: IconImageDownloadBulkRounded,
  StrokeSharp: IconImageDownloadStrokeSharp,
  SolidSharp: IconImageDownloadSolidSharp,
};