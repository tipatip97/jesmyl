import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M4 2V5.13219C4 5.42605 4.36724 5.55908 4.55527 5.33333C6.3854 3.2875 9.04499 2 12.0051 2C17.5251 2 22 6.47715 22 12C22 15.9582 19.7015 19.3793 16.367 21',
  d2: 'M11.7347 22C12.2016 22 12.6611 21.9687 13.1111 21.9083M2.26537 8.66663C2.15297 9.06381 2.06477 9.46524 2 9.86888M2.03457 13.538C2.10487 13.938 2.19644 14.3341 2.30852 14.7244M3.83292 17.9962C4.07124 18.3496 4.3296 18.6898 4.6071 19.0146M7.42857 21.3606C7.78228 21.5631 8.15042 21.7463 8.53228 21.9083',
  d3: 'M12 22C17.5228 22 22 17.5228 22 12C22 8.4 20.3025 6.05556 19.4537 5.33333C17.6226 3.2875 14.9617 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z',
  d4: 'M11.7347 21.9993C12.2016 21.9993 12.6611 21.9681 13.1111 21.9076M2.26537 8.66602C2.15297 9.0632 2.06477 9.46463 2 9.86827M2.03457 13.5374C2.10487 13.9374 2.19644 14.3335 2.30852 14.7238M3.83292 17.9956C4.07124 18.349 4.3296 18.6892 4.6071 19.014M7.42857 21.36C7.78228 21.5625 8.15042 21.7456 8.53228 21.9076',
  d5: 'M11.7347 22.0003C12.2016 22.0003 12.6611 21.9691 13.1111 21.9086M2.26537 8.66699C2.15297 9.06418 2.06477 9.4656 2 9.86925M2.03457 13.5383C2.10487 13.9384 2.19644 14.3345 2.30852 14.7247M3.83292 17.9966C4.07124 18.35 4.3296 18.6902 4.6071 19.0149M7.42857 21.361C7.78228 21.5634 8.15042 21.7466 8.53228 21.9086',
  d6: 'M12.0051 3C16.9724 3 21 7.02895 21 12C21 15.5612 18.933 18.6409 15.9299 20.1006C15.4332 20.342 15.2262 20.9404 15.4676 21.4371C15.7091 21.9339 16.3075 22.1408 16.8042 21.8994C20.47 20.1176 23 16.3552 23 12C23 5.92535 18.0779 1 12.0051 1C9.82695 1 7.79628 1.63426 6.08829 2.72723L4.87303 1.51197C4.65968 1.2797 4.37506 1 4 1C3.44772 1 3 1.44772 3 2V5.13219C3 6.35267 4.51712 6.91172 5.30883 5.99084C6.95707 4.15339 9.34588 3 12.0051 3Z',
  d7: 'M2.53776 7.70601C2.00634 7.55563 1.45364 7.86452 1.30325 8.39593C1.18011 8.83111 1.08357 9.27057 1.01273 9.71205C0.925231 10.2574 1.29636 10.7704 1.84167 10.8579C2.38698 10.9454 2.89997 10.5742 2.98747 10.0289C3.04617 9.6631 3.12604 9.29971 3.22768 8.94052C3.37807 8.4091 3.06918 7.85639 2.53776 7.70601ZM1.86159 12.5547C1.31764 12.6503 0.954171 13.1687 1.04976 13.7127C1.1262 14.1476 1.22573 14.5781 1.34748 15.002C1.49994 15.5328 2.05385 15.8396 2.58468 15.6871C3.1155 15.5346 3.42222 14.9807 3.26976 14.4499C3.16735 14.0934 3.08374 13.7316 3.01958 13.3665C2.92399 12.8225 2.40554 12.4591 1.86159 12.5547ZM3.27389 17.1687C2.816 17.4775 2.69514 18.099 3.00393 18.5569C3.2632 18.9414 3.54451 19.3119 3.84697 19.6658C4.20576 20.0857 4.83699 20.1352 5.25685 19.7764C5.67672 19.4176 5.72622 18.7864 5.36742 18.3665C5.11488 18.071 4.87947 17.761 4.6621 17.4387C4.35331 16.9808 3.73178 16.8599 3.27389 17.1687ZM6.56077 20.8655C6.28643 21.3448 6.45259 21.9558 6.93192 22.2301C7.31958 22.452 7.72316 22.6528 8.14182 22.8304C8.65024 23.0461 9.23725 22.8088 9.45295 22.3004C9.66865 21.792 9.43136 21.205 8.92294 20.9893C8.57788 20.8429 8.24517 20.6773 7.92542 20.4943C7.44609 20.22 6.83512 20.3862 6.56077 20.8655ZM14.1023 21.7767C14.0288 21.2293 13.5254 20.8452 12.9781 20.9188C12.5721 20.9733 12.1571 21.0016 11.7348 21.0016C11.1826 21.0016 10.7348 21.4493 10.7348 22.0016C10.7348 22.5538 11.1826 23.0016 11.7348 23.0016C12.2464 23.0016 12.7503 22.9673 13.2444 22.901C13.7917 22.8274 14.1758 22.3241 14.1023 21.7767Z',
  d8: 'M3.99707 2V6C5.82148 3.57111 8.72617 2 11.9978 2C17.5207 2 21.9978 6.47715 21.9978 12C21.9978 15.9582 19.6981 19.3793 16.3619 21',
  d9: 'M11.7308 22.0001C12.1977 22.0001 12.6572 21.9688 13.1072 21.9084M2.26146 8.66675C2.14906 9.06394 2.06086 9.46536 1.99609 9.86901M2.03066 13.5381C2.10096 13.9381 2.19254 14.3343 2.30461 14.7245M3.82901 17.9963C4.06733 18.3497 4.32569 18.69 4.60319 19.0147M7.42466 21.3607C7.77837 21.5632 8.14651 21.7464 8.52837 21.9084',
  d10: 'M12.0125 3.20455C16.8644 3.20455 20.7977 7.1424 20.7977 12C20.7977 15.48 18.7791 18.4898 15.8459 19.9164L16.699 21.6745C20.2789 19.9333 22.7499 16.2565 22.7499 12C22.7499 6.06294 17.9426 1.25 12.0125 1.25C9.41606 1.25 7.03488 2.17319 5.17883 3.70792V2.22727H3.22656V6.13636C3.22656 6.55688 3.49526 6.93025 3.89368 7.06337C4.29211 7.1965 4.73092 7.05952 4.98318 6.72329C6.58761 4.58476 9.1389 3.20455 12.0125 3.20455Z',
  d11: 'M1.95501 7.32153L1.68922 8.26188C1.56901 8.68717 1.47478 9.11664 1.40563 9.54808L1.25098 10.513L3.17858 10.8227L3.33324 9.85775C3.39053 9.50025 3.46849 9.14512 3.56771 8.79408L3.83351 7.85374L1.95501 7.32153ZM1.27282 12.4952L1.44178 13.4578C1.51639 13.8828 1.61354 14.3036 1.73239 14.7178L2.00185 15.6571L3.87826 15.1176L3.60879 14.1783C3.50882 13.8298 3.4272 13.4763 3.36458 13.1195L3.19562 12.1569L1.27282 12.4952ZM2.80352 17.3817L3.3493 18.1919C3.60239 18.5677 3.87698 18.9297 4.17222 19.2756L4.80637 20.0186L6.29054 18.7488L5.65638 18.0059C5.40987 17.717 5.18008 17.4141 4.9679 17.0991L4.42212 16.2889L2.80352 17.3817ZM6.33636 21.2962L7.18354 21.7816C7.56195 21.9985 7.9559 22.1947 8.36456 22.3683L9.26317 22.75L10.0256 20.9507L9.12704 20.569C8.79021 20.4259 8.46545 20.2642 8.15332 20.0853L7.30614 19.5999L6.33636 21.2962ZM14.0528 20.37L13.0854 20.5001C12.6891 20.5534 12.284 20.581 11.8718 20.581H10.8957V22.5356H11.8718C12.3711 22.5356 12.8631 22.5021 13.3453 22.4372L14.3128 22.3071L14.0528 20.37Z',
} as const;

export const IconRotateClockwiseStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rotate-clockwise-stroke-rounded IconRotateClockwiseStrokeRounded"
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

export const IconRotateClockwiseDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rotate-clockwise-duotone-rounded IconRotateClockwiseDuotoneRounded"
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
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRotateClockwiseTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rotate-clockwise-twotone-rounded IconRotateClockwiseTwotoneRounded"
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
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRotateClockwiseSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rotate-clockwise-solid-rounded IconRotateClockwiseSolidRounded"
    >
      <path 
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

export const IconRotateClockwiseBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rotate-clockwise-bulk-rounded IconRotateClockwiseBulkRounded"
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

export const IconRotateClockwiseStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rotate-clockwise-stroke-sharp IconRotateClockwiseStrokeSharp"
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
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRotateClockwiseSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rotate-clockwise-solid-sharp IconRotateClockwiseSolidSharp"
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

export const iconPackOfRotateClockwise: TheIconSelfPack = {
  name: 'RotateClockwise',
  StrokeRounded: IconRotateClockwiseStrokeRounded,
  DuotoneRounded: IconRotateClockwiseDuotoneRounded,
  TwotoneRounded: IconRotateClockwiseTwotoneRounded,
  SolidRounded: IconRotateClockwiseSolidRounded,
  BulkRounded: IconRotateClockwiseBulkRounded,
  StrokeSharp: IconRotateClockwiseStrokeSharp,
  SolidSharp: IconRotateClockwiseSolidSharp,
};