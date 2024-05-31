import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M10.8654 9.68476L11.7434 4.76072C11.8889 3.94488 11.338 3.16689 10.513 3.02304C9.68807 2.87918 8.90138 3.42394 8.75591 4.23978L7 14.0879L6.85439 14.8511L4.88875 12.8372C4.17559 12.124 3.00086 12.1891 2.37081 12.9766C1.88873 13.5792 1.87541 14.4317 2.33844 15.049L5.35188 19.067C6.03575 19.9788 6.3777 20.4347 6.7892 20.7891C7.41699 21.3297 8.16928 21.7058 8.97845 21.8837C9.50883 22.0003 10.0787 22.0003 11.2185 22.0003H13.6206C15.9993 22.0003 18.0487 20.3245 18.521 17.9932L19.3889 13.7096L19.4767 13.2172C19.6222 12.4014 19.0713 11.6234 18.2463 11.4795C17.4214 11.3357 16.6347 11.8804 16.4892 12.6963L16.4014 13.1887M10.8654 9.68476L10.6021 11.162M10.8654 9.68476C11.0109 8.86892 11.7976 8.32417 12.6226 8.46802C13.4475 8.61188 13.9984 9.38986 13.8529 10.2057L13.6773 11.1905M13.6773 11.1905L13.5895 11.6829M13.6773 11.1905C13.8228 10.3747 14.6095 9.82992 15.4345 9.97377C16.2594 10.1176 16.8103 10.8956 16.6648 11.7115L16.577 12.2039',
  d2: 'M22 4.5H15.5M22 4.5C22 3.79977 20.0057 2.49153 19.5 2M22 4.5C22 5.20023 20.0057 6.50847 19.5 7',
  d3: 'M5.35188 19.067L2.33844 15.049C1.87541 14.4317 1.88873 13.5792 2.37081 12.9766C3.00086 12.1891 4.17559 12.124 4.88875 12.8372L6.85439 14.8511L7 14.0879L8.75591 4.23978C8.90138 3.42394 9.68807 2.87918 10.513 3.02304C11.338 3.16689 11.8889 3.94488 11.7434 4.76072L10.8654 9.68476C11.0109 8.86892 11.7976 8.32417 12.6226 8.46802C13.4475 8.61188 13.9984 9.38986 13.8529 10.2057L13.6773 11.1905C13.8228 10.3747 14.6095 9.82992 15.4345 9.97377C16.2594 10.1176 16.8103 10.8956 16.6648 11.7115L16.4892 12.6963C16.6347 11.8804 17.4214 11.3357 18.2463 11.4795C19.0713 11.6234 19.6222 12.4014 19.4767 13.2172L19.3889 13.7096L18.521 17.9932C18.0487 20.3245 15.9993 22.0003 13.6206 22.0003H11.2185C10.0787 22.0003 9.50883 22.0003 8.97845 21.8837C8.16928 21.7058 7.41699 21.3297 6.7892 20.7891C6.3777 20.4347 6.03575 19.9788 5.35188 19.067Z',
  d4: 'M10.4082 2.26961C9.6991 2.14716 9.03002 2.61136 8.90687 3.29531L6.74897 15.2197C6.71927 15.3738 6.60549 15.4989 6.45374 15.5441C6.30198 15.5893 6.13741 15.5473 6.02672 15.435L3.79895 13.1747C3.16909 12.553 2.13322 12.6104 1.57741 13.2983C1.15175 13.8252 1.13999 14.5706 1.54883 15.1104L4.96708 19.6236C5.75424 20.6629 6.11122 21.1304 6.53476 21.4915C7.19348 22.0532 7.98283 22.4441 8.83186 22.6289C9.37776 22.7477 9.96961 22.75 11.2816 22.75H14.0063C16.5022 22.75 18.6525 21.0088 19.1481 18.5865L20.2303 13.2315C20.3532 12.5488 19.8883 11.8908 19.1804 11.7685C18.4713 11.6461 17.8022 12.1103 17.679 12.7942L17.5795 13.3473C17.5382 13.5764 17.3173 13.7289 17.086 13.6881C16.8547 13.6472 16.7007 13.4285 16.7419 13.1995L16.8415 12.6464L17.0407 11.5401C17.1636 10.8575 16.6986 10.1994 15.9907 10.0772C15.2816 9.95472 14.6126 10.4189 14.4894 11.1029L14.3898 11.656C14.3486 11.885 14.1277 12.0375 13.8964 11.9967C13.6651 11.9559 13.511 11.7371 13.5523 11.5081L13.8511 9.84878C13.974 9.16611 13.509 8.50803 12.8011 8.38579C12.0922 8.26338 11.4232 8.72733 11.2999 9.41101L11.001 11.0708C10.9598 11.2998 10.7389 11.4524 10.5076 11.4116C10.2763 11.3707 10.1222 11.1519 10.1635 10.9229L11.4581 3.73259C11.5811 3.04992 11.1161 2.39184 10.4082 2.26961Z',
  d5: 'M15.75 3.49414C15.1977 3.49414 14.75 3.94186 14.75 4.49414C14.75 5.04643 15.1977 5.49414 15.75 5.49414L18.25 5.49414L18.25 6.0884C18.2499 6.26404 18.2497 6.47969 18.2718 6.65613L18.2722 6.65947C18.288 6.78592 18.3598 7.36196 18.9254 7.63632C19.4922 7.91128 19.9924 7.60935 20.1006 7.54403L20.569 7.20489C20.9449 6.91025 21.4593 6.50455 21.8503 6.12412C22.0454 5.93429 22.2467 5.71703 22.4055 5.48612C22.5467 5.28086 22.75 4.93067 22.75 4.5C22.75 4.06933 22.5467 3.71914 22.4055 3.51388C22.2467 3.28297 22.0454 3.06571 21.8503 2.87588C21.4593 2.49545 20.9449 2.08975 20.5691 1.79512L20.1006 1.45597C19.9924 1.39065 19.4922 1.08872 18.9254 1.36368C18.3598 1.63804 18.288 2.21408 18.2722 2.34053L18.2718 2.34387C18.2497 2.52031 18.2499 2.73597 18.25 2.9116L18.25 3.49414L15.75 3.49414Z',
  d6: 'M10.6121 9.68466L11.465 4.7607C11.6063 3.94487 11.0712 3.16689 10.2698 3.02304C9.46841 2.87919 8.70419 3.42393 8.56289 4.23976L6.85714 14.0877L6.71569 14.8509L4.80622 12.837C4.11343 12.1239 2.97226 12.1889 2.36022 12.9765C1.8919 13.5791 1.87897 14.4315 2.32877 15.0489L6.30042 20.3875C7.05519 21.4021 8.24523 22 9.50973 22H14.1166C16.0697 22 17.7373 20.5895 18.0612 18.6635L18.9774 13.2171C19.1187 12.4012 18.5836 11.6232 17.7822 11.4794C16.9808 11.3355 16.2166 11.8803 16.0752 12.6961M10.6121 9.68466L10.3563 11.1618M10.6121 9.68466C10.7534 8.86883 11.5177 8.32408 12.3191 8.46794C13.1205 8.61179 13.6556 9.38977 13.5143 10.2056L13.3437 11.1904M13.3437 11.1904L13.2584 11.6828M13.3437 11.1904C13.485 10.3746 14.2492 9.82981 15.0506 9.97367C15.852 10.1175 16.3871 10.8955 16.2458 11.7113L16.0752 12.6961M16.0752 12.6961L15.99 13.1885',
  d7: 'M15.5 4.5H21.3698M19.5 2L22 4.5L19.5 7',
  d8: 'M10.1685 1.76948C9.48207 1.64786 8.8167 2.10767 8.69284 2.81349L6.75608 13.8499L6.45336 15.462L3.75122 12.6491C3.13395 12.0237 2.12226 12.0795 1.57525 12.7743C1.15288 13.3107 1.1406 14.0724 1.54587 14.6229L1.54696 14.6243L6.05232 20.6017C6.834 21.6388 8.06647 22.25 9.37607 22.25H14.6048C16.6275 22.25 18.3545 20.8082 18.69 18.8394L19.7298 12.7381L19.7301 12.7363C19.8543 12.0287 19.3833 11.3645 18.6948 11.2425C18.0084 11.1209 17.343 11.5807 17.2191 12.2865L17.1223 12.8381L16.3395 12.7043L16.6299 11.0495C16.7541 10.342 16.2831 9.67774 15.5946 9.55576C14.9081 9.43414 14.2428 9.89395 14.1189 10.5998L14.0221 11.1514L13.2393 11.0175L13.5297 9.36275C13.6538 8.6552 13.1828 7.99098 12.4944 7.86901C11.8079 7.74738 11.1425 8.20719 11.0187 8.91301L10.7283 10.5678L9.94546 10.434L11.2038 3.26323C11.328 2.55568 10.857 1.89146 10.1685 1.76948Z',
  d9: 'M19.543 1.75L22.7502 4.95711L19.543 8.16421L18.1288 6.75L18.9217 5.95711H14.8359V3.95711H18.9217L18.1288 3.16421L19.543 1.75Z',
} as const;

export const IconSwipeRight09StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-right-09-stroke-rounded IconSwipeRight09StrokeRounded"
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

export const IconSwipeRight09DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-right-09-duotone-rounded IconSwipeRight09DuotoneRounded"
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

export const IconSwipeRight09TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-right-09-twotone-rounded IconSwipeRight09TwotoneRounded"
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

export const IconSwipeRight09SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-right-09-solid-rounded IconSwipeRight09SolidRounded"
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

export const IconSwipeRight09BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-right-09-bulk-rounded IconSwipeRight09BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconSwipeRight09StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-right-09-stroke-sharp IconSwipeRight09StrokeSharp"
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

export const IconSwipeRight09SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-right-09-solid-sharp IconSwipeRight09SolidSharp"
    >
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

export const iconPackOfSwipeRight09: TheIconSelfPack = {
  name: 'SwipeRight09',
  StrokeRounded: IconSwipeRight09StrokeRounded,
  DuotoneRounded: IconSwipeRight09DuotoneRounded,
  TwotoneRounded: IconSwipeRight09TwotoneRounded,
  SolidRounded: IconSwipeRight09SolidRounded,
  BulkRounded: IconSwipeRight09BulkRounded,
  StrokeSharp: IconSwipeRight09StrokeSharp,
  SolidSharp: IconSwipeRight09SolidSharp,
};