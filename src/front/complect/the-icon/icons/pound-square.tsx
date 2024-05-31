import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.5 12C2.5 7.77027 2.5 5.6554 3.69797 4.25276C3.86808 4.05358 4.05358 3.86808 4.25276 3.69797C5.6554 2.5 7.77027 2.5 12 2.5C16.2297 2.5 18.3446 2.5 19.7472 3.69797C19.9464 3.86808 20.1319 4.05358 20.302 4.25276C21.5 5.6554 21.5 7.77027 21.5 12C21.5 16.2297 21.5 18.3446 20.302 19.7472C20.1319 19.9464 19.9464 20.1319 19.7472 20.302C18.3446 21.5 16.2297 21.5 12 21.5C7.77027 21.5 5.6554 21.5 4.25276 20.302C4.05358 20.1319 3.86808 19.9464 3.69797 19.7472C2.5 18.3446 2.5 16.2297 2.5 12Z',
  d2: 'M15.0221 10.2342C14.979 9.65426 14.6508 8.24919 13.3893 7.73006C11.8126 7.08115 9.73629 7.89773 9.54202 10.0011C9.45087 10.988 9.96203 12.0228 10.7048 12.534C11.3873 13.0037 12.4229 12.98 13.3893 12.98H8.02637M11.266 12.98C11.0842 13.6694 10.0866 15.6514 8.49675 16.4785H14.2823C14.5061 16.4785 15.1376 16.5331 16.0318 15.9331',
  d3: 'M16.5 2.5H7.5C4.73858 2.5 2.5 4.73858 2.5 7.5V16.5C2.5 19.2614 4.73858 21.5 7.5 21.5H16.5C19.2614 21.5 21.5 19.2614 21.5 16.5V7.5C21.5 4.73858 19.2614 2.5 16.5 2.5Z',
  d4: 'M14.7996 10.2382C14.7593 9.65828 14.4524 8.25321 13.2726 7.73408C11.7979 7.08517 9.85607 7.90176 9.67436 10.0051C9.58911 10.992 10.0672 12.0268 10.7619 12.538C11.4002 13.0078 12.3687 12.984 13.2726 12.984H8.25684M11.2868 12.984C11.1168 13.6735 10.1837 15.6554 8.69676 16.4825H14.1077C14.3171 16.4825 14.9077 16.5371 15.744 15.9371',
  d5: 'M14.9928 10.238C14.9497 9.65805 14.6215 8.25297 13.36 7.73384C11.7833 7.08493 9.70699 7.90152 9.51273 10.0049C9.42158 10.9918 9.93273 12.0266 10.6755 12.5378C11.358 13.0075 12.3936 12.9838 13.36 12.9838H7.99707M11.2367 12.9838C11.0549 13.6732 10.0573 15.6552 8.46745 16.4823H14.253C14.4768 16.4823 15.1083 16.5368 16.0025 15.9369',
  d6: 'M12.0513 1.75H12.0513C14.1227 1.74999 15.7462 1.74998 17.0242 1.90522C18.3302 2.06386 19.3754 2.39411 20.2343 3.12767C20.4634 3.3233 20.6767 3.53662 20.8723 3.76567C21.6059 4.62456 21.9361 5.66982 22.0948 6.97578C22.25 8.25376 22.25 9.87731 22.25 11.9487V12.0513C22.25 14.1227 22.25 15.7462 22.0948 17.0242C21.9361 18.3302 21.6059 19.3754 20.8723 20.2343C20.6767 20.4634 20.4634 20.6767 20.2343 20.8723C19.3754 21.6059 18.3302 21.9361 17.0242 22.0948C15.7462 22.25 14.1227 22.25 12.0513 22.25H11.9487C9.87731 22.25 8.25376 22.25 6.97578 22.0948C5.66982 21.9361 4.62456 21.6059 3.76567 20.8723C3.53662 20.6767 3.3233 20.4634 3.12767 20.2343C2.39411 19.3754 2.06386 18.3302 1.90522 17.0242C1.74998 15.7462 1.74999 14.1227 1.75 12.0513V12.0513V11.9487V11.9487C1.74999 9.8773 1.74998 8.25375 1.90522 6.97578C2.06386 5.66982 2.39411 4.62456 3.12767 3.76567C3.3233 3.53662 3.53662 3.3233 3.76567 3.12767C4.62456 2.39411 5.66982 2.06386 6.97578 1.90522C8.25375 1.74998 9.8773 1.74999 11.9487 1.75H11.9487H12.0513ZM12.2353 8.25C11.122 8.25 10.2245 9.1482 10.2245 10.25C10.2245 11.3518 11.122 12.25 12.2353 12.25H13.3333C13.7475 12.25 14.0833 12.5858 14.0833 13C14.0833 13.4142 13.7475 13.75 13.3333 13.75H11.778C11.4517 14.4368 11.0428 15.1399 10.5428 15.75H14.4273L14.4414 15.7495C14.4569 15.7489 14.4835 15.7474 14.5188 15.7441C14.5902 15.7375 14.6931 15.7239 14.8106 15.6966C15.0562 15.6395 15.308 15.536 15.4893 15.3674C15.7927 15.0853 16.2673 15.1026 16.5493 15.406C16.8313 15.7094 16.814 16.1839 16.5107 16.466C16.0646 16.8807 15.532 17.0689 15.1502 17.1576C14.954 17.2032 14.7823 17.2261 14.6577 17.2377C14.595 17.2435 14.5431 17.2466 14.5047 17.2482C14.4855 17.249 14.4696 17.2495 14.4573 17.2497L14.4415 17.2499L14.4357 17.25L14.4334 17.25L14.4323 17.25L8.47059 17.25C8.11875 17.25 7.81421 17.0054 7.73827 16.6619C7.66232 16.3183 7.83539 15.9682 8.15444 15.8199C8.89038 15.4778 9.5483 14.7092 10.0898 13.75H8C7.58579 13.75 7.25 13.4142 7.25 13C7.25 12.5858 7.58579 12.25 8 12.25H9.3537C8.95721 11.6834 8.72451 10.9942 8.72451 10.25C8.72451 8.31424 10.2991 6.75 12.2353 6.75C14.1715 6.75 15.7461 8.31424 15.7461 10.25C15.7461 10.6642 15.4103 11 14.9961 11C14.5819 11 14.2461 10.6642 14.2461 10.25C14.2461 9.1482 13.3486 8.25 12.2353 8.25Z',
  d7: 'M12.0513 1.75H12.0513H11.9487H11.9487C9.8773 1.74999 8.25375 1.74998 6.97578 1.90522C5.66982 2.06386 4.62456 2.39411 3.76567 3.12767C3.53662 3.3233 3.3233 3.53662 3.12767 3.76567C2.39411 4.62456 2.06386 5.66982 1.90522 6.97578C1.74998 8.25375 1.74999 9.8773 1.75 11.9487V11.9487V12.0513V12.0513C1.74999 14.1227 1.74998 15.7462 1.90522 17.0242C2.06386 18.3302 2.39411 19.3754 3.12767 20.2343C3.3233 20.4634 3.53662 20.6767 3.76567 20.8723C4.62456 21.6059 5.66982 21.9361 6.97578 22.0948C8.25376 22.25 9.87731 22.25 11.9487 22.25H12.0513C14.1227 22.25 15.7462 22.25 17.0242 22.0948C18.3302 21.9361 19.3754 21.6059 20.2343 20.8723C20.4634 20.6767 20.6767 20.4634 20.8723 20.2343C21.6059 19.3754 21.9361 18.3302 22.0948 17.0242C22.25 15.7462 22.25 14.1227 22.25 12.0513V11.9487C22.25 9.87731 22.25 8.25376 22.0948 6.97578C21.9361 5.66982 21.6059 4.62456 20.8723 3.76567C20.6767 3.53662 20.4634 3.3233 20.2343 3.12767C19.3754 2.39411 18.3302 2.06386 17.0242 1.90522C15.7462 1.74998 14.1227 1.74999 12.0513 1.75Z',
  d8: 'M10.2245 10.25C10.2245 9.1482 11.122 8.25 12.2353 8.25C13.3486 8.25 14.2461 9.1482 14.2461 10.25C14.2461 10.6642 14.5819 11 14.9961 11C15.4103 11 15.7461 10.6642 15.7461 10.25C15.7461 8.31424 14.1715 6.75 12.2353 6.75C10.2991 6.75 8.72451 8.31424 8.72451 10.25C8.72451 10.9942 8.95721 11.6834 9.3537 12.25H8C7.58579 12.25 7.25 12.5858 7.25 13C7.25 13.4142 7.58579 13.75 8 13.75H10.0898C9.5483 14.7092 8.89038 15.4778 8.15444 15.8199C7.83539 15.9682 7.66232 16.3183 7.73827 16.6619C7.81421 17.0054 8.11875 17.25 8.47059 17.25L14.4323 17.25L14.4334 17.25L14.4357 17.25L14.4415 17.2499L14.4573 17.2497C14.4696 17.2495 14.4855 17.249 14.5047 17.2482C14.5431 17.2466 14.595 17.2435 14.6577 17.2377C14.7823 17.2261 14.954 17.2032 15.1502 17.1576C15.532 17.0689 16.0646 16.8807 16.5107 16.466C16.814 16.1839 16.8313 15.7094 16.5493 15.406C16.2673 15.1026 15.7927 15.0853 15.4893 15.3674C15.308 15.536 15.0562 15.6395 14.8106 15.6966C14.6931 15.7239 14.5902 15.7375 14.5188 15.7441C14.4835 15.7474 14.4569 15.7489 14.4414 15.7495L14.4273 15.75H10.5428C11.0428 15.1399 11.4517 14.4368 11.778 13.75H13.3333C13.7475 13.75 14.0833 13.4142 14.0833 13C14.0833 12.5858 13.7475 12.25 13.3333 12.25H12.2353C11.122 12.25 10.2245 11.3518 10.2245 10.25Z',
  d9: 'M21 3V21H3V3H21Z',
  d10: 'M14.9883 10.2372C14.9883 8.35482 13.2643 7.20412 11.4956 7.6034C9.29599 8.19463 9.2415 10.4833 9.67755 11.4058C10.3451 12.6927 11.3483 12.9198 12.0068 12.9836C10.5468 12.7846 11.0455 15.0667 8.45576 16.4571C8.44617 16.4622 8.44941 16.4762 8.46048 16.4762H14.4454C15.0653 16.4762 15.8261 16.0988 16.0164 15.9176M7.93164 12.9836H13.3509',
  d11: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM10.2247 10.25C10.2247 9.1482 11.1222 8.25 12.2355 8.25C13.3488 8.25 14.2463 9.1482 14.2463 10.25H15.7463C15.7463 8.31424 14.1717 6.75 12.2355 6.75C10.2993 6.75 8.7247 8.31424 8.7247 10.25C8.7247 10.9942 8.9574 11.6834 9.35389 12.25H8.00019V13.75H10.09C9.54849 14.7092 8.89057 15.4778 8.15463 15.8199C7.83558 15.9682 7.66251 16.3183 7.73846 16.6619C7.8144 17.0054 8.11894 17.25 8.47078 17.25L14.4325 17.25L14.4336 17.25L14.4359 17.25L14.4417 17.2499L14.4574 17.2497C14.4697 17.2495 14.4857 17.249 14.5049 17.2482C14.5433 17.2466 14.5951 17.2435 14.6579 17.2377C14.7825 17.2261 14.9541 17.2032 15.1504 17.1576C15.5322 17.0689 16.0648 16.8807 16.5109 16.466L15.4895 15.3674C15.3081 15.536 15.0564 15.6395 14.8108 15.6966C14.6933 15.7239 14.5904 15.7375 14.519 15.7441C14.4837 15.7474 14.4571 15.7489 14.4416 15.7495L14.4274 15.75H10.543C11.043 15.1399 11.4519 14.4368 11.7781 13.75H13.3335V12.25H12.2355C11.1222 12.25 10.2247 11.3518 10.2247 10.25ZM14.4316 16.5046L14.4325 17.25C14.4323 17.25 14.4316 17.25 14.4316 16.5046Z',
} as const;

export const IconPoundSquareStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pound-square-stroke-rounded IconPoundSquareStrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPoundSquareDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pound-square-duotone-rounded IconPoundSquareDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconPoundSquareTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pound-square-twotone-rounded IconPoundSquareTwotoneRounded"
    >
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconPoundSquareSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pound-square-solid-rounded IconPoundSquareSolidRounded"
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

export const IconPoundSquareBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pound-square-bulk-rounded IconPoundSquareBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconPoundSquareStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pound-square-stroke-sharp IconPoundSquareStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPoundSquareSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pound-square-solid-sharp IconPoundSquareSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPoundSquare: TheIconSelfPack = {
  name: 'PoundSquare',
  StrokeRounded: IconPoundSquareStrokeRounded,
  DuotoneRounded: IconPoundSquareDuotoneRounded,
  TwotoneRounded: IconPoundSquareTwotoneRounded,
  SolidRounded: IconPoundSquareSolidRounded,
  BulkRounded: IconPoundSquareBulkRounded,
  StrokeSharp: IconPoundSquareStrokeSharp,
  SolidSharp: IconPoundSquareSolidSharp,
};