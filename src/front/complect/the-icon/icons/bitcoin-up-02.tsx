import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 9C8.41015 9 5.5 11.9101 5.5 15.5C5.5 19.0898 8.41015 22 12 22C15.5898 22 18.5 19.0899 18.5 15.5C18.5 11.9101 15.5898 9 12 9Z',
  d2: 'M20 2L16.0237 5.6148C15.3073 6.26613 14.949 6.5918 14.527 6.56553C14.1051 6.53926 13.79 6.17167 13.1599 5.4365L12.6533 4.84557C12.1043 4.20505 11.8298 3.88479 11.4541 3.83296C11.0783 3.78112 10.7274 4.0151 10.0254 4.48305L4 8.5M20 2H16.5M20 2V5',
  d3: 'M10.4375 18.1667L10.4375 12.8333M12 12.8333V11.5M12 19.5V18.1667M10.4375 15.5H13.5625M13.5625 15.5C14.0803 15.5 14.5 15.9477 14.5 16.5V17.1667C14.5 17.719 14.0803 18.1667 13.5625 18.1667H9.5M13.5625 15.5C14.0803 15.5 14.5 15.0523 14.5 14.5V13.8333C14.5 13.281 14.0803 12.8333 13.5625 12.8333H9.5',
  d4: 'M15.4028 2.19116C15.4028 1.67137 15.8381 1.25 16.375 1.25H19.7778C20.3147 1.25 20.75 1.67137 20.75 2.19116V5.01466C20.75 5.53445 20.3147 5.95582 19.7778 5.95582C19.2408 5.95582 18.8056 5.53445 18.8056 5.01466V4.31872L16.5261 6.32482L16.526 6.32484C16.2125 6.60084 15.9088 6.86822 15.6282 7.05517C15.3124 7.26553 14.9061 7.45814 14.3965 7.42742C13.8869 7.39671 13.5084 7.1568 13.222 6.91015C12.9675 6.69095 12.7004 6.38917 12.4246 6.07766L12.4246 6.07764C12.141 5.75736 11.4594 4.99026 11.337 4.88306L11.3321 4.87884L11.3263 4.88163C11.1784 4.95274 10.9822 5.07723 10.6196 5.31122L4.76161 9.09183C4.31485 9.38016 3.71123 9.26329 3.41339 8.8308C3.11555 8.39831 3.23627 7.81397 3.68303 7.52564L9.58145 3.71894L9.58146 3.71894C9.88745 3.52138 10.1885 3.32701 10.4612 3.19586C10.7706 3.04707 11.1519 2.92382 11.6021 2.98394C12.0524 3.04407 12.385 3.26266 12.6412 3.48699C12.8671 3.68471 13.1025 3.95072 13.3418 4.22111C13.6663 4.58757 14.3763 5.38486 14.5199 5.50851C14.6782 5.40305 14.8891 5.22156 15.258 4.89688L17.263 3.13233H16.375C15.8381 3.13233 15.4028 2.71096 15.4028 2.19116Z',
  d5: 'M12 8.25C7.99594 8.25 4.75 11.4959 4.75 15.5C4.75 19.5041 7.99594 22.75 12 22.75C16.0041 22.75 19.25 19.5041 19.25 15.5C19.25 11.4959 16.0041 8.25 12 8.25ZM12.75 11.5C12.75 11.0858 12.4142 10.75 12 10.75C11.5858 10.75 11.25 11.0858 11.25 11.5V12.0833H9.5C9.08579 12.0833 8.75 12.4191 8.75 12.8333C8.75 13.2475 9.08579 13.5833 9.5 13.5833H9.6875V17.4167H9.5C9.08579 17.4167 8.75 17.7525 8.75 18.1667C8.75 18.5809 9.08579 18.9167 9.5 18.9167H11.25V19.5C11.25 19.9142 11.5858 20.25 12 20.25C12.4142 20.25 12.75 19.9142 12.75 19.5V18.9167H13.5625C14.5393 18.9167 15.25 18.0868 15.25 17.1667V16.5C15.25 16.1376 15.1398 15.7892 14.9465 15.5C15.1398 15.2108 15.25 14.8624 15.25 14.5V13.8333C15.25 12.9132 14.5393 12.0833 13.5625 12.0833H12.75V11.5ZM11.1875 14.75V13.5833H13.5625C13.6212 13.5833 13.75 13.6489 13.75 13.8333V14.5C13.75 14.6844 13.6212 14.75 13.5625 14.75H11.1875ZM11.1875 16.25H13.5625C13.6212 16.25 13.75 16.3156 13.75 16.5V17.1667C13.75 17.3511 13.6212 17.4167 13.5625 17.4167H11.1875V16.25Z',
  d6: 'M4.75 15.5C4.75 11.4959 7.99594 8.25 12 8.25C16.0041 8.25 19.25 11.4959 19.25 15.5C19.25 19.5041 16.0041 22.75 12 22.75C7.99594 22.75 4.75 19.5041 4.75 15.5Z',
  d7: 'M12 10.75C12.4142 10.75 12.75 11.0858 12.75 11.5V12.0833H13.5625C14.5393 12.0833 15.25 12.9132 15.25 13.8333V14.5C15.25 14.8624 15.1398 15.2108 14.9465 15.5C15.1398 15.7892 15.25 16.1376 15.25 16.5V17.1667C15.25 18.0868 14.5393 18.9167 13.5625 18.9167H12.75V19.5C12.75 19.9142 12.4142 20.25 12 20.25C11.5858 20.25 11.25 19.9142 11.25 19.5V18.9167H9.5C9.08579 18.9167 8.75 18.5809 8.75 18.1667C8.75 17.7525 9.08579 17.4167 9.5 17.4167H9.6875L9.6875 13.5833H9.5C9.08579 13.5833 8.75 13.2475 8.75 12.8333C8.75 12.4191 9.08579 12.0833 9.5 12.0833H11.25V11.5C11.25 11.0858 11.5858 10.75 12 10.75ZM11.1875 13.5833V14.75H13.5625C13.6212 14.75 13.75 14.6844 13.75 14.5V13.8333C13.75 13.6489 13.6212 13.5833 13.5625 13.5833H11.1875ZM13.5625 16.25H11.1875L11.1875 17.4167H13.5625C13.6212 17.4167 13.75 17.3511 13.75 17.1667V16.5C13.75 16.3156 13.6212 16.25 13.5625 16.25Z',
  d8: 'M11.9779 9C8.39676 9 5.49365 11.9101 5.49365 15.5C5.49365 19.0898 8.39676 22 11.9779 22C15.559 22 18.4622 19.0899 18.4622 15.5C18.4622 11.9101 15.559 9 11.9779 9Z',
  d9: 'M10.4191 18.1667V12.8333M11.9778 12.8333V11.5M11.9778 19.5V18.1667M10.4191 15.5H13.5366M13.5366 15.5C14.0531 15.5 14.4718 15.9477 14.4718 16.5V17.1667C14.4718 17.719 14.0531 18.1667 13.5366 18.1667H9.48389M13.5366 15.5C14.0531 15.5 14.4718 15.0523 14.4718 14.5V13.8333C14.4718 13.281 14.0531 12.8333 13.5366 12.8333H9.48389',
  d10: 'M19.9313 2L14.5138 6.98345C14.4953 7.00038 14.4723 7.00437 14.454 6.98728C14.3008 6.84374 13.6811 6.06069 13.6471 6.02578L11.5423 3.5503C11.5094 3.51159 11.4527 3.50382 11.4106 3.53224L3.99902 8.53809M19.9313 2H15.7112M19.9313 2H20.0015L19.9592 5.75493',
  d11: 'M15.4341 1.25H20.917V6.75H18.9232V4.51055L15.1078 7.98994C14.9085 8.17175 14.6442 8.26486 14.3753 8.24807C14.1064 8.23127 13.8557 8.106 13.6804 7.90079L11.2646 5.07357L4.52294 9.58205L3.41699 7.91795L10.8936 2.91795C11.3131 2.63741 11.8754 2.71522 12.2035 3.09921L14.5262 5.81746L17.3416 3.25H15.4341V1.25Z',
  d12: 'M12 22.75C16.0041 22.75 19.25 19.5041 19.25 15.5C19.25 11.4959 16.0041 8.25 12 8.25C7.99594 8.25 4.75 11.4959 4.75 15.5C4.75 19.5041 7.99594 22.75 12 22.75ZM12.75 12.0833V10.75H11.25V12.0833H8.75V13.5833H9.6875L9.6875 17.4167H8.75V18.9167H11.25V20.25H12.75V18.9167H13.5625C14.5393 18.9167 15.25 18.0868 15.25 17.1667V16.5C15.25 16.1376 15.1398 15.7892 14.9465 15.5C15.1398 15.2108 15.25 14.8624 15.25 14.5V13.8333C15.25 12.9132 14.5393 12.0833 13.5625 12.0833H12.75ZM11.1875 14.75V13.5833H13.5625C13.6212 13.5833 13.75 13.6489 13.75 13.8333V14.5C13.75 14.6844 13.6212 14.75 13.5625 14.75H11.1875ZM11.1875 16.25H13.5625C13.6212 16.25 13.75 16.3156 13.75 16.5V17.1667C13.75 17.3511 13.6212 17.4167 13.5625 17.4167H11.1875L11.1875 16.25Z',
} as const;

export const IconBitcoinUp02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-up-02-stroke-rounded IconBitcoinUp02StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconBitcoinUp02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-up-02-duotone-rounded IconBitcoinUp02DuotoneRounded"
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

export const IconBitcoinUp02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-up-02-twotone-rounded IconBitcoinUp02TwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconBitcoinUp02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-up-02-solid-rounded IconBitcoinUp02SolidRounded"
    >
      <path 
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

export const IconBitcoinUp02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-up-02-bulk-rounded IconBitcoinUp02BulkRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
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

export const IconBitcoinUp02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-up-02-stroke-sharp IconBitcoinUp02StrokeSharp"
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

export const IconBitcoinUp02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-up-02-solid-sharp IconBitcoinUp02SolidSharp"
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

export const iconPackOfBitcoinUp02: TheIconSelfPack = {
  name: 'BitcoinUp02',
  StrokeRounded: IconBitcoinUp02StrokeRounded,
  DuotoneRounded: IconBitcoinUp02DuotoneRounded,
  TwotoneRounded: IconBitcoinUp02TwotoneRounded,
  SolidRounded: IconBitcoinUp02SolidRounded,
  BulkRounded: IconBitcoinUp02BulkRounded,
  StrokeSharp: IconBitcoinUp02StrokeSharp,
  SolidSharp: IconBitcoinUp02SolidSharp,
};