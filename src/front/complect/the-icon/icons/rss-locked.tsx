import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12.9915 22C13.7121 22 13.9925 21.9956 13.9925 21.9956C17.4088 21.971 19.2922 21.8099 20.5342 20.7552C22 19.5104 22 17.5069 22 13.5M11.9906 5C7.27213 5 4.91289 5 3.44705 6.2448C2.32426 7.19827 2.0615 8.59687 2 11',
  d2: 'M16.0803 10.8573L15.7761 11.5428L15.7761 11.5428L16.0803 10.8573ZM15.1332 9.84253L14.4337 10.113H14.4337L15.1332 9.84253ZM21.8668 9.84253L22.5663 10.113L22.5663 10.113L21.8668 9.84253ZM20.9197 10.8573L21.2239 11.5428L21.2239 11.5428L20.9197 10.8573ZM20.9197 5.51773L21.2239 4.8322L20.9197 5.51773ZM21.8668 6.53247L22.5663 6.26203L22.5663 6.26203L21.8668 6.53247ZM16.0803 5.51773L15.7761 4.8322L16.0803 5.51773ZM15.1332 6.53247L14.4337 6.26203L15.1332 6.53247ZM16 5.375C16 5.78921 16.3358 6.125 16.75 6.125C17.1642 6.125 17.5 5.78921 17.5 5.375H16ZM19.5 5.375C19.5 5.78921 19.8358 6.125 20.25 6.125C20.6642 6.125 21 5.78921 21 5.375L19.5 5.375ZM17.625 6.125L19.375 6.125V4.625H17.625V6.125ZM19.375 10.25H17.625V11.75H19.375V10.25ZM17.625 10.25C17.2063 10.25 16.9325 10.2495 16.7222 10.2342C16.5196 10.2193 16.4338 10.1936 16.3845 10.1718L15.7761 11.5428C16.0484 11.6637 16.3272 11.7093 16.6128 11.7302C16.8905 11.7505 17.2283 11.75 17.625 11.75V10.25ZM14.25 8.1875C14.25 8.61474 14.2496 8.97023 14.2682 9.26108C14.2871 9.55774 14.3278 9.83905 14.4337 10.113L15.8328 9.57209C15.8054 9.50144 15.7795 9.39206 15.7651 9.16575C15.7504 8.93364 15.75 8.6339 15.75 8.1875H14.25ZM16.3845 10.1718C16.1471 10.0664 15.9427 9.85657 15.8328 9.57209L14.4337 10.113C14.6789 10.7474 15.1559 11.2676 15.7761 11.5428L16.3845 10.1718ZM21.25 8.1875C21.25 8.6339 21.2496 8.93364 21.2349 9.16575C21.2205 9.39206 21.1946 9.50144 21.1672 9.57209L22.5663 10.113C22.6722 9.83905 22.7129 9.55774 22.7318 9.26108C22.7504 8.97023 22.75 8.61474 22.75 8.1875H21.25ZM19.375 11.75C19.7717 11.75 20.1095 11.7505 20.3872 11.7302C20.6728 11.7093 20.9516 11.6637 21.2239 11.5428L20.6155 10.1718C20.5662 10.1936 20.4804 10.2193 20.2778 10.2342C20.0675 10.2495 19.7937 10.25 19.375 10.25V11.75ZM21.1672 9.57209C21.0573 9.85657 20.8529 10.0664 20.6155 10.1718L21.2239 11.5428C21.8441 11.2676 22.3211 10.7474 22.5663 10.113L21.1672 9.57209ZM19.375 6.125C19.7937 6.125 20.0675 6.12547 20.2778 6.14084C20.4804 6.15565 20.5662 6.18138 20.6155 6.20325L21.2239 4.8322C20.9516 4.71134 20.6728 4.66571 20.3872 4.64484C20.1095 4.62453 19.7717 4.625 19.375 4.625V6.125ZM22.75 8.1875C22.75 7.76026 22.7504 7.40477 22.7318 7.11392C22.7129 6.81726 22.6722 6.53595 22.5663 6.26203L21.1672 6.80291C21.1946 6.87356 21.2205 6.98294 21.2349 7.20925C21.2496 7.44136 21.25 7.7411 21.25 8.1875H22.75ZM20.6155 6.20325C20.8529 6.30862 21.0573 6.51843 21.1672 6.80291L22.5663 6.26203C22.3211 5.62765 21.8441 5.10744 21.2239 4.8322L20.6155 6.20325ZM17.625 4.625C17.2283 4.625 16.8905 4.62453 16.6128 4.64484C16.3272 4.66571 16.0484 4.71134 15.7761 4.8322L16.3845 6.20325C16.4338 6.18138 16.5196 6.15565 16.7222 6.14084C16.9325 6.12547 17.2063 6.125 17.625 6.125V4.625ZM15.75 8.1875C15.75 7.7411 15.7504 7.44136 15.7651 7.20925C15.7795 6.98294 15.8054 6.87356 15.8328 6.80291L14.4337 6.26203C14.3278 6.53595 14.2871 6.81726 14.2682 7.11392C14.2496 7.40477 14.25 7.76026 14.25 8.1875H15.75ZM15.7761 4.8322C15.1559 5.10744 14.6789 5.62765 14.4337 6.26203L15.8328 6.80291C15.9427 6.51843 16.1471 6.30862 16.3845 6.20325L15.7761 4.8322ZM17.5 5.375V3.6875H16V5.375H17.5ZM19.5 3.6875V5.375L21 5.375V3.6875L19.5 3.6875ZM18.5 2.75C19.0782 2.75 19.5 3.19521 19.5 3.6875L21 3.6875C21 2.31583 19.8548 1.25 18.5 1.25V2.75ZM17.5 3.6875C17.5 3.19521 17.9218 2.75 18.5 2.75V1.25C17.1452 1.25 16 2.31583 16 3.6875H17.5Z',
  d3: 'M2.98242 21H2.9914',
  d4: 'M2 17.2349C4.49328 17.2349 6.77053 19.5 6.77053 21.9996M10 21.9996C10 17.5 5.99511 14 2.04522 14',
  d5: 'M22.0006 13.5C22.0006 17.5069 22.0006 19.5104 20.5348 20.7552C19.2928 21.8099 17.4094 21.971 13.9931 21.9956L10.0013 21.997C6.22612 21.9984 4.33854 21.9991 3.16625 20.8264C1.99397 19.6536 1.99542 17.7661 1.99833 13.9909L2.00062 11C2.06212 8.59687 2.32489 7.19827 3.44768 6.2448C4.91352 5 7.27276 5 11.9912 5C15.1543 5 17.2572 5 18.7415 5.375H17.625C16.8096 5.375 16.4019 5.375 16.0803 5.51773C15.6515 5.70803 15.3108 6.07304 15.1332 6.53247C15 6.87704 15 7.31386 15 8.1875C15 9.06114 15 9.49796 15.1332 9.84253C15.3108 10.302 15.6515 10.667 16.0803 10.8573C16.4019 11 16.8096 11 17.625 11H19.375C20.1904 11 20.5981 11 20.9197 10.8573C21.3485 10.667 21.6892 10.302 21.8668 9.84253C21.886 9.79281 21.9025 9.74116 21.9165 9.68656C22.0006 10.7073 22.0006 11.9547 22.0006 13.5Z',
  d6: 'M11.0163 6.19739C9.18623 6.2003 7.81437 6.21925 6.73454 6.34208C5.48503 6.48422 4.77578 6.7525 4.27359 7.1774C3.54072 7.79747 3.20423 8.61737 3.20423 10.5855C3.19042 11.1231 2.74183 11.5477 2.20228 11.534C1.66272 11.5202 1.23652 11.0733 1.25033 10.5357C1.25033 8.70945 1.54676 6.92973 3.00843 5.69304C3.93877 4.90589 5.09859 4.56816 6.51283 4.40728C7.69455 4.27286 9.20339 4.25294 11.0165 4.25C11.5542 4.24913 11.9904 4.68542 11.9904 5.22317C11.9904 5.76093 11.554 6.19653 11.0163 6.19739Z',
  d7: 'M22.7485 14.4769C22.7436 15.94 22.7156 17.2035 22.5585 18.1924C22.3571 19.4594 21.9258 20.4993 20.9723 21.306C20.1841 21.9728 19.2317 22.3168 18.1005 22.5042C16.9868 22.6888 15.6221 22.7331 13.9575 22.7451C13.7985 22.7462 13.759 22.7495 13.4049 22.7495C12.8652 22.7495 12.4276 22.3136 12.4276 21.7758C12.4276 21.2381 12.8652 20.8021 13.4049 20.8021C13.755 20.8021 13.7857 20.7989 13.9397 20.7978C15.6122 20.7858 16.8358 20.7397 17.7798 20.5833C18.7069 20.4296 19.2816 20.1816 19.7072 19.8216C20.1863 19.4162 20.4712 18.8747 20.628 17.8879C20.7637 17.0338 20.7892 15.9481 20.7939 14.4772C20.7957 13.9374 21.2326 13.4995 21.7723 13.4995C22.312 13.4995 22.7503 13.9372 22.7485 14.4769Z',
  d8: 'M1.25 21.7991C1.25 21.2744 1.67493 20.8491 2.19912 20.8491H2.20764C2.73182 20.8491 3.15676 21.2744 3.15676 21.7991C3.15676 22.3238 2.73182 22.7491 2.20764 22.7491H2.19912C1.67493 22.7491 1.25 22.3238 1.25 21.7991Z',
  d9: 'M1.30175 14.2C1.30175 13.6753 1.72668 13.25 2.25087 13.25C6.48852 13.25 10.75 16.9657 10.75 21.7999C10.75 22.3246 10.3251 22.7499 9.80088 22.7499C9.2767 22.7499 8.85177 22.3246 8.85177 21.7999C8.85177 18.0846 5.51103 15.1501 2.25087 15.1501C1.72668 15.1501 1.30175 14.7247 1.30175 14.2ZM1.31934 17.6418C1.41978 17.1269 1.91826 16.7909 2.43273 16.8914C4.71641 17.3377 6.6405 19.3429 6.92317 21.686C6.98601 22.2069 6.61509 22.6802 6.09468 22.7431C5.57428 22.806 5.10147 22.4347 5.03863 21.9138C4.85742 20.4117 3.56772 19.0492 2.069 18.7563C1.55453 18.6557 1.2189 18.1568 1.31934 17.6418Z',
  d10: 'M21 4.74918V3.6875C21 2.31583 19.8548 1.25 18.5 1.25C17.1452 1.25 16 2.31583 16 3.6875V4.74918C15.9249 4.77196 15.8502 4.79929 15.7761 4.8322C15.1559 5.10744 14.6789 5.62765 14.4337 6.26203C14.3278 6.53595 14.2871 6.81726 14.2682 7.11392C14.25 7.3994 14.25 7.79435 14.25 8.2111C14.25 8.62784 14.25 8.97561 14.2682 9.26108C14.2871 9.55774 14.3278 9.83905 14.4337 10.113C14.6789 10.7474 15.1559 11.2676 15.7761 11.5428C16.0484 11.6637 16.3272 11.7093 16.6128 11.7302C16.8844 11.75 17.2134 11.75 17.5989 11.75H19.4011C19.7866 11.75 20.1156 11.75 20.3872 11.7302C20.6728 11.7093 20.9516 11.6637 21.2239 11.5428C21.8441 11.2676 22.3211 10.7474 22.5663 10.113C22.6722 9.83905 22.7129 9.55774 22.7318 9.26108C22.75 8.97561 22.75 8.62785 22.75 8.2111C22.75 7.79435 22.75 7.3994 22.7318 7.11392C22.7129 6.81726 22.6722 6.53595 22.5663 6.26203C22.3211 5.62765 21.8441 5.10744 21.2239 4.8322C21.1498 4.79929 21.0751 4.77196 21 4.74918ZM17.5 3.6875C17.5 3.19521 17.9218 2.75 18.5 2.75C19.0782 2.75 19.5 3.19521 19.5 3.6875V4.62501H17.5V3.6875Z',
  d11: 'M15 5.375V4.625H14.25V5.375H15ZM22 5.375H22.75V4.625H22V5.375ZM22 11V11.75L22.75 11.75V11L22 11ZM15 11H14.25V11.75H15V11ZM15 6.125L22 6.125V4.625L15 4.625V6.125ZM22 10.25H15V11.75H22V10.25ZM17.5 5.375V3.6875H16V5.375H17.5ZM19.5 3.6875V5.375L21 5.375V3.6875L19.5 3.6875ZM18.5 2.75C19.0782 2.75 19.5 3.19521 19.5 3.6875L21 3.6875C21 2.31583 19.8548 1.25 18.5 1.25V2.75ZM17.5 3.6875C17.5 3.19521 17.9218 2.75 18.5 2.75V1.25C17.1452 1.25 16 2.31583 16 3.6875H17.5ZM22.75 11V5.375H21.25V11L22.75 11ZM14.25 5.375L14.25 11H15.75L15.75 5.375H14.25Z',
  d12: 'M12.5 21H22V13.5M3 11.5V6H12.5',
  d13: 'M20.75 4.875V4.1875C20.75 2.66927 19.4842 1.5 18 1.5C16.5158 1.5 15.25 2.66927 15.25 4.1875V4.875H13.5V12.5H22.5V4.875H20.75ZM17.25 4.1875C17.25 3.84177 17.5512 3.5 18 3.5C18.4488 3.5 18.75 3.84177 18.75 4.1875V4.875H17.25V4.1875Z',
  d14: 'M1.5 6.5C1.5 5.94772 1.94772 5.5 2.5 5.5H11.4943V7.5H3.5V12H1.5V6.5Z',
  d15: 'M22.5 21.5C22.5 22.0523 22.0523 22.5 21.5 22.5H12V20.5H20.5V14.5H22.5V21.5Z',
  d16: 'M1.54522 15.5C4.98016 15.5 8.5 18.5889 8.5 22.4996H10.5C10.5 17.4111 6.01006 13.5 1.54522 13.5V15.5Z',
  d17: 'M1.5 18.7349C3.4434 18.7349 5.27053 20.5547 5.27053 22.4996H7.27053C7.27053 19.4453 4.54316 16.7349 1.5 16.7349V18.7349Z',
  d18: 'M2.49553 20.5C1.94571 20.5 1.5 20.9477 1.5 21.5C1.5 22.0523 1.94571 22.5 2.49553 22.5H2.50447C3.05429 22.5 3.5 22.0523 3.5 21.5C3.5 20.9477 3.05429 20.5 2.50447 20.5H2.49553Z',
};

export const IconRssLockedStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rss-locked-stroke-rounded IconRssLockedStrokeRounded"
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
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d3} 
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
      />
    </TheIconWrapper>
  );
};

export const IconRssLockedDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rss-locked-duotone-rounded IconRssLockedDuotoneRounded"
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
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d3} 
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
      />
    </TheIconWrapper>
  );
};

export const IconRssLockedTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rss-locked-twotone-rounded IconRssLockedTwotoneRounded"
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
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRssLockedSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rss-locked-solid-rounded IconRssLockedSolidRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRssLockedBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rss-locked-bulk-rounded IconRssLockedBulkRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
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
      </g>
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRssLockedStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rss-locked-stroke-sharp IconRssLockedStrokeSharp"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconRssLockedSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rss-locked-solid-sharp IconRssLockedSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfRssLocked: TheIconSelfPack = {
  name: 'RssLocked',
  StrokeRounded: IconRssLockedStrokeRounded,
  DuotoneRounded: IconRssLockedDuotoneRounded,
  TwotoneRounded: IconRssLockedTwotoneRounded,
  SolidRounded: IconRssLockedSolidRounded,
  BulkRounded: IconRssLockedBulkRounded,
  StrokeSharp: IconRssLockedStrokeSharp,
  SolidSharp: IconRssLockedSolidSharp,
};