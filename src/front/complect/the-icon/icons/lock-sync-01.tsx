import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M19.5433 10.5L22 11C21.497 5.94668 17.2229 2 12.0247 2C6.48822 2 1.99998 6.47715 1.99998 12C1.99998 17.5228 6.48822 22 12.0247 22C16.1355 22 19.6684 19.5318 21.2153 16',
  d2: 'M10.3371 10.8799C9.25712 10.8799 8.71712 11.6599 8.59712 12.1399C8.47712 12.6199 8.47712 14.3599 8.54912 15.0799C8.78912 15.9799 9.38912 16.3519 9.97712 16.4719C10.5171 16.5199 12.7971 16.5019 13.4571 16.5019C14.4171 16.5199 15.1371 16.1599 15.4371 15.0799C15.4971 14.7199 15.5571 12.7399 15.4071 12.1399C15.0891 11.1799 14.2971 10.8799 13.6971 10.8799H10.3371Z',
  d3: 'M10.25 10.4585C10.25 10.3985 10.2582 10.0531 10.2596 9.61854C10.2608 9.22145 10.226 8.83854 10.4156 8.48814C11.126 7.07454 13.166 7.21854 13.67 8.65854C13.7573 8.89562 13.7625 9.27146 13.76 9.61854C13.7567 10.062 13.766 10.4585 13.766 10.4585',
  d4: 'M12.251 21.7529C17.7738 21.7529 22.251 17.2757 22.251 11.7529C22.251 6.23008 17.7738 1.75293 12.251 1.75293C6.72813 1.75293 2.25098 6.23008 2.25098 11.7529C2.25098 17.2757 6.72813 21.7529 12.251 21.7529ZM9.83128 10.8956C10.1529 10.7529 10.5606 10.7529 11.376 10.7529H13.126C13.9414 10.7529 14.3491 10.7529 14.6707 10.8956C15.0995 11.0859 15.4402 11.4509 15.6178 11.9104C15.751 12.2549 15.751 12.6918 15.751 13.5654C15.751 14.439 15.751 14.8759 15.6178 15.2204C15.4402 15.6799 15.0995 16.0449 14.6707 16.2352C14.3491 16.3779 13.9414 16.3779 13.126 16.3779H11.376C10.5606 16.3779 10.1529 16.3779 9.83128 16.2352C9.40248 16.0449 9.06181 15.6799 8.88419 15.2204C8.75098 14.8759 8.75098 14.439 8.75098 13.5654C8.75098 12.6918 8.75098 12.2549 8.88419 11.9104C9.06181 11.4509 9.40248 11.0859 9.83128 10.8956Z',
  d5: 'M19.7943 10.2529L22.251 10.7529C21.748 5.69961 17.4739 1.75293 12.2757 1.75293C6.73921 1.75293 2.25098 6.23008 2.25098 11.7529C2.25098 17.2757 6.73921 21.7529 12.2757 21.7529C16.3865 21.7529 19.9194 19.2847 21.4664 15.7529',
  d6: 'M10.5871 10.6299C9.50714 10.6299 8.96714 11.4099 8.84714 11.8899C8.72714 12.3699 8.72714 14.1099 8.79914 14.8299C9.03914 15.7299 9.63914 16.1019 10.2271 16.2219C10.7671 16.2699 13.0471 16.2519 13.7071 16.2519C14.6671 16.2699 15.3871 15.9099 15.6871 14.8299C15.7471 14.4699 15.8071 12.4899 15.6571 11.8899C15.3391 10.9299 14.5471 10.6299 13.9471 10.6299H10.5871Z',
  d7: 'M10.5 10.2085C10.5 10.1485 10.5082 9.8031 10.5096 9.36854C10.5108 8.97145 10.476 8.58854 10.6656 8.23814C11.376 6.82454 13.416 6.96854 13.92 8.40854C14.0073 8.64562 14.0125 9.02146 14.01 9.36854C14.0067 9.812 14.016 10.2085 14.016 10.2085',
  d8: 'M19.5433 10.5L22 11C21.497 5.94668 17.2229 2 12.0247 2C6.48823 2 2 6.47715 2 12C2 17.5228 6.48823 22 12.0247 22C16.1355 22 19.6684 19.5318 21.2154 16',
  d9: 'M10.249 10.4585C10.249 10.3985 10.2572 10.0531 10.2586 9.61854C10.2598 9.22145 10.225 8.83854 10.4146 8.48814C11.125 7.07454 13.165 7.21854 13.669 8.65854C13.7563 8.89562 13.7615 9.27146 13.759 9.61854C13.7557 10.062 13.765 10.4585 13.765 10.4585M10.3361 10.8799C9.25616 10.8799 8.71616 11.6599 8.59616 12.1399C8.47616 12.6199 8.47616 14.3599 8.54816 15.0799C8.78816 15.9799 9.38816 16.3519 9.97616 16.4719C10.5161 16.5199 12.7961 16.5019 13.4561 16.5019C14.4161 16.5199 15.1361 16.1599 15.4361 15.0799C15.4961 14.7199 15.5561 12.7399 15.4061 12.1399C15.0881 11.1799 14.2961 10.8799 13.6961 10.8799H10.3361Z',
  d10: 'M12.0242 3.20455C7.15095 3.20455 3.20455 7.14468 3.20455 12C3.20455 16.8553 7.15095 20.7955 12.0242 20.7955C15.6407 20.7955 18.7495 18.6249 20.1107 15.517C20.3273 15.0226 20.9036 14.7974 21.398 15.0139C21.8924 15.2305 22.1176 15.8068 21.9011 16.3012C20.2388 20.0964 16.4424 22.75 12.0242 22.75C6.07605 22.75 1.25 17.9393 1.25 12C1.25 6.06066 6.07605 1.25 12.0242 1.25C16.7393 1.25 20.7464 4.27188 22.2073 8.48024C22.4777 9.25909 22.6608 10.0783 22.7452 10.9259C22.7759 11.2348 22.6581 11.5399 22.4278 11.748C22.1975 11.956 21.882 12.0423 21.5778 11.9804L19.177 11.4917C18.8159 11.4183 18.5269 11.148 18.4294 10.7927C18.3319 10.4374 18.4426 10.0575 18.7155 9.81002L19.8123 8.81587C19.9676 8.67506 20.0453 8.60466 20.0641 8.50614C20.083 8.40761 20.0388 8.31772 19.9506 8.13793C18.5165 5.21632 15.5056 3.20455 12.0242 3.20455Z',
  d11: 'M9.5 10.2492V9.1875C9.5 7.81583 10.6452 6.75 12 6.75C13.3548 6.75 14.5 7.81583 14.5 9.1875V10.2492C14.5751 10.272 14.6498 10.2993 14.7239 10.3322C15.3441 10.6074 15.8211 11.1277 16.0663 11.762C16.1722 12.036 16.2129 12.3173 16.2318 12.6139C16.25 12.8994 16.25 13.2472 16.25 13.6639V13.7111C16.25 14.1278 16.25 14.4756 16.2318 14.7611C16.2129 15.0577 16.1722 15.3391 16.0663 15.613C15.8211 16.2474 15.3441 16.7676 14.7239 17.0428C14.4516 17.1637 14.1728 17.2093 13.8872 17.2302C13.6156 17.25 13.2866 17.25 12.9011 17.25H11.0989C10.7135 17.25 10.3844 17.25 10.1128 17.2302C9.82724 17.2093 9.5484 17.1637 9.27607 17.0428C8.6559 16.7676 8.17892 16.2474 7.93367 15.613C7.82777 15.3391 7.78706 15.0577 7.76817 14.7611C7.74999 14.4756 7.74999 14.1279 7.75 13.7111V13.6639C7.74999 13.2472 7.74999 12.8994 7.76817 12.6139C7.78706 12.3173 7.82777 12.036 7.93367 11.762C8.17892 11.1277 8.6559 10.6074 9.27607 10.3322C9.35023 10.2993 9.42487 10.272 9.5 10.2492ZM11 9.1875C11 8.69521 11.4218 8.25 12 8.25C12.5782 8.25 13 8.69521 13 9.1875V10.125C12.9675 10.125 12.9345 10.125 12.9011 10.125H11.0989C11.0655 10.125 11.0325 10.125 11 10.125V9.1875Z',
  d12: 'M19 10L22 11C21.497 5.94668 17.2229 2 12.0247 2C6.48823 2 2 6.47715 2 12C2 17.5228 6.48823 22 12.0247 22C16.1355 22 19.6684 19.5318 21.2154 16',
  d13: 'M14 11V9.5C14 8.39543 13.1046 7.5 12 7.5C10.8954 7.5 10 8.39543 10 9.5V11M8.5 11H15.5V16.5H8.5V11Z',
  d14: 'M12.0242 3.20455C7.15095 3.20455 3.20455 7.14468 3.20455 12C3.20455 16.8553 7.15095 20.7955 12.0242 20.7955C15.6407 20.7955 18.7495 18.6249 20.1107 15.517L21.9011 16.3012C20.2388 20.0964 16.4424 22.75 12.0242 22.75C6.07605 22.75 1.25 17.9393 1.25 12C1.25 6.06066 6.07605 1.25 12.0242 1.25C17.6095 1.25 22.2042 5.49073 22.7452 10.9259C22.778 11.2556 22.6416 11.5794 22.3828 11.7862C22.1239 11.993 21.778 12.0546 21.4637 11.9499L18.5319 10.9726L19.15 9.11833L20.5029 9.56931C19.4458 5.89551 16.0509 3.20455 12.0242 3.20455Z',
  d15: 'M12 6.75C10.4812 6.75 9.25 7.98122 9.25 9.5V10.25H7.75V17.25H16.25V10.25H14.75V9.5C14.75 7.98122 13.5188 6.75 12 6.75ZM10.75 9.5V10.25H13.25V9.5C13.25 8.80964 12.6904 8.25 12 8.25C11.3096 8.25 10.75 8.80964 10.75 9.5Z',
} as const;

export const IconLockSync01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="lock-sync-01-stroke-rounded IconLockSync01StrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLockSync01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="lock-sync-01-duotone-rounded IconLockSync01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLockSync01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="lock-sync-01-twotone-rounded IconLockSync01TwotoneRounded"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLockSync01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="lock-sync-01-solid-rounded IconLockSync01SolidRounded"
    >
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

export const IconLockSync01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="lock-sync-01-bulk-rounded IconLockSync01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconLockSync01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="lock-sync-01-stroke-sharp IconLockSync01StrokeSharp"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLockSync01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="lock-sync-01-solid-sharp IconLockSync01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfLockSync01: TheIconSelfPack = {
  name: 'LockSync01',
  StrokeRounded: IconLockSync01StrokeRounded,
  DuotoneRounded: IconLockSync01DuotoneRounded,
  TwotoneRounded: IconLockSync01TwotoneRounded,
  SolidRounded: IconLockSync01SolidRounded,
  BulkRounded: IconLockSync01BulkRounded,
  StrokeSharp: IconLockSync01StrokeSharp,
  SolidSharp: IconLockSync01SolidSharp,
};