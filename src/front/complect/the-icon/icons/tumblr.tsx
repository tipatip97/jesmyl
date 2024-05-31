import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7.90012 11.0183H7.01078C6.17867 11.0183 5.99989 10.8498 6 10.0181L6.00024 8.26617C6.00033 7.61097 5.98766 7.61186 6.65257 7.29099C8.35896 6.46753 9.86003 4.88315 10.2616 2.99294C10.3706 2.48002 10.4251 2.22356 10.5643 2.11178C10.7035 2 10.9282 2 11.3775 2H12.7521C13.2286 2 13.4668 2 13.6148 2.14645C13.7629 2.29289 13.7629 2.5286 13.7629 3V6.56483C13.7629 7.39637 13.9416 7.56483 14.7736 7.56483H16.6332C17.4653 7.56483 17.6441 7.73332 17.644 8.56496L17.6438 10.0184C17.6437 10.8499 17.4649 11.0183 16.633 11.0183H14.7733C13.9412 11.0183 13.7624 11.1868 13.7625 12.0184L13.7629 16.2597C13.7629 18.0202 15.3229 18.6002 16.6945 17.9926C17.1718 17.7811 17.1788 17.7952 17.3247 18.2389L17.9001 19.9882C18.0893 20.5636 18.0369 20.7786 17.5063 21.0836C13.5744 23.3432 8.91128 21.3694 8.91128 15.768L8.91091 12.0182C8.91083 11.1867 8.73205 11.0183 7.90012 11.0183Z',
  d2: 'M11 2H12.7515C13.228 2 13.4662 2 13.6142 2.14645C13.7623 2.29289 13.7623 2.5286 13.7623 3V6.56483C13.7623 7.39637 13.9411 7.56483 14.7731 7.56483H16.6326C17.4647 7.56483 17.6435 7.73332 17.6434 8.56496L17.6432 10.0184C17.6431 10.8499 17.4643 11.0183 16.6324 11.0183H14.7727C13.9406 11.0183 13.7618 11.1868 13.7619 12.0184L13.7623 16.2597C13.7623 18.0202 15.3223 18.6002 16.694 17.9926C17.1712 17.7811 17.1782 17.7952 17.3241 18.2389L17.8995 19.9882C18.071 20.5098 18.044 20.7353 17.6423 21',
  d3: 'M7.38764 10.9447H6.38713C5.45101 10.9447 5.24987 10.7635 5.25 9.86951L5.25027 7.98613C5.25037 7.28179 5.23612 7.28275 5.98415 6.93781C7.90383 6.0526 9.59254 4.34938 10.0444 2.31741C10.167 1.76602 10.2283 1.49033 10.3849 1.37017C10.5415 1.25 10.7942 1.25 11.2997 1.25H12.8461C13.3821 1.25 13.6502 1.25 13.8167 1.40743C13.9832 1.56486 13.9832 1.81824 13.9832 2.325V6.15719C13.9832 7.0511 14.1843 7.23219 15.1203 7.23219H17.2123C18.1485 7.23219 18.3496 7.41331 18.3495 8.30734L18.3493 9.8698C18.3491 10.7636 18.148 10.9447 17.2121 10.9447H15.1199C14.1838 10.9447 13.9827 11.1258 13.9828 12.0198L13.9832 16.5792C13.9832 18.4718 15.7382 19.0952 17.2814 18.442C17.8182 18.2147 17.8261 18.2298 17.9903 18.7068L18.6376 20.5874C18.8504 21.2058 18.7915 21.437 18.1946 21.7649C13.7712 24.1939 8.52519 22.0721 8.52519 16.0506L8.52477 12.0196C8.52468 11.1257 8.32356 10.9447 7.38764 10.9447Z',
  d4: 'M12.8461 1.25H11.2997C10.7942 1.25 10.5415 1.25 10.3849 1.37017C10.2283 1.49033 10.167 1.76602 10.0444 2.31741C9.59254 4.34938 7.90383 6.0526 5.98415 6.93781C5.23612 7.28275 5.25037 7.28179 5.25027 7.98613L5.25 9.86951C5.24987 10.7635 5.45101 10.9447 6.38713 10.9447H17.2121C18.148 10.9447 18.3491 10.7636 18.3493 9.8698L18.3495 8.30734C18.3496 7.41331 18.1485 7.23219 17.2123 7.23219H15.1203C14.1843 7.23219 13.9832 7.0511 13.9832 6.15719V2.325C13.9832 1.81824 13.9832 1.56486 13.8167 1.40743C13.6502 1.25 13.3821 1.25 12.8461 1.25Z',
  d5: 'M13.7543 1.99909L10.5148 1.99902C9.92851 5.86721 7.28486 7.14174 5.99915 7.58232V11.073C5.99915 11.0785 6.00361 11.083 6.00912 11.083H9.04623V16.1079C9.04623 17.8968 9.51431 18.814 9.86981 19.4134C11.9743 22.9618 16.2852 22.1703 17.9964 21.0731C18.0001 21.0707 18.0017 21.0662 18.0004 21.062L17.0061 17.6421C17.0045 17.6367 16.9987 17.6338 16.9934 17.6354C14.7797 18.3 13.9636 17.6309 13.7643 16.6335V11.083H17.6284C17.634 11.083 17.6384 11.0785 17.6384 11.073V7.59232C17.6384 7.5868 17.634 7.58232 17.6284 7.58232H13.7643V2.00909C13.7643 2.00357 13.7598 1.99909 13.7543 1.99909Z',
  d6: 'M9 11.0491H6V7.58386C8.5 6.51539 10 5.01026 10.5 2H13.7625V7.58386H17.644V11.0491H13.7629V16.3085C13.7629 17.8956 15.2687 18.1276 16.5693 17.7162C16.784 17.6482 16.8913 17.6143 16.9658 17.6543C17.0403 17.6944 17.0689 17.795 17.1262 17.9961L18 21.065C14.0681 23.3323 9.00037 21.4357 9.00037 15.8151L9 11.0491Z',
} as const;

export const IconTumblrStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tumblr-stroke-rounded IconTumblrStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTumblrDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tumblr-duotone-rounded IconTumblrDuotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTumblrTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tumblr-twotone-rounded IconTumblrTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconTumblrSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tumblr-solid-rounded IconTumblrSolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTumblrBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tumblr-bulk-rounded IconTumblrBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTumblrStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tumblr-stroke-sharp IconTumblrStrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconTumblrSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tumblr-solid-sharp IconTumblrSolidSharp"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTumblr: TheIconSelfPack = {
  name: 'Tumblr',
  StrokeRounded: IconTumblrStrokeRounded,
  DuotoneRounded: IconTumblrDuotoneRounded,
  TwotoneRounded: IconTumblrTwotoneRounded,
  SolidRounded: IconTumblrSolidRounded,
  BulkRounded: IconTumblrBulkRounded,
  StrokeSharp: IconTumblrStrokeSharp,
  SolidSharp: IconTumblrSolidSharp,
};