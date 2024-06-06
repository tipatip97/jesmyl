import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M8 9L8.26176 7.62577C8.51935 6.27341 8.84975 6 10.2264 6H13.7736C15.1502 6 15.4806 6.27341 15.7382 7.62578L16 9',
  d2: 'M17.8377 19H6.16228C4.855 19 4.20136 19 3.66635 19.2728C2.62687 19.8028 2.34358 20.9693 2 22H22C21.6564 20.9693 21.3731 19.8028 20.3337 19.2728C19.7986 19 19.145 19 17.8377 19Z',
  d3: 'M9 12.5V13.5',
  d4: 'M15 12.5V13.5',
  d5: 'M12 15V16',
  d6: 'M10 6L10.8106 2.75746C10.9682 2.12724 11.1312 2 11.7808 2H12.2192C12.8688 2 13.0318 2.12724 13.1894 2.75746L14 6',
  d7: 'M4 19C4.58059 18.2259 4.93646 16.8525 5.1479 15.3437C5.60299 12.0963 5.83053 10.4725 6.67717 9.73626C7.5238 9 8.92945 9 11.7407 9H12.2593C15.0706 9 16.4762 9 17.3228 9.73626C18.1695 10.4725 18.397 12.0963 18.8521 15.3437C19.0635 16.8525 19.4194 18.2259 20 19',
  d8: 'M10.8106 2.75746L10 6H14L13.1894 2.75746C13.0318 2.12724 12.8688 2 12.2192 2H11.7808C11.1312 2 10.9682 2.12724 10.8106 2.75746Z',
  d9: 'M4 19C4.58059 18.2259 4.93646 16.8525 5.1479 15.3437C5.60299 12.0963 5.83053 10.4725 6.67717 9.73626C7.5238 9 8.92945 9 11.7407 9H12.2593C15.0706 9 16.4762 9 17.3228 9.73626C18.1695 10.4725 18.397 12.0963 18.8521 15.3437C19.0635 16.8525 19.4194 18.2259 20 19H4Z',
  d10: 'M19.44 19.2787C19.0138 19.25 18.4962 19.25 17.8699 19.25L6.13013 19.25H6.13012C5.50381 19.25 4.98622 19.25 4.56001 19.2787C4.11391 19.3087 3.71125 19.3729 3.32569 19.5258C2.6167 19.807 2.18935 20.2519 1.90159 20.6989C1.67722 21.0474 1.51528 21.4377 1.37823 21.7681L1.37822 21.7681L1.3782 21.7682C1.34717 21.843 1.31741 21.9147 1.28849 21.9822C1.21226 22.1601 1.25061 22.3556 1.39157 22.5077C1.53254 22.6599 1.75892 22.75 2.00001 22.75L22 22.75C22.2411 22.75 22.4675 22.6599 22.6084 22.5077C22.7494 22.3556 22.7878 22.1601 22.7115 21.9822C22.6826 21.9147 22.6528 21.843 22.6218 21.7681C22.4847 21.4377 22.3228 21.0474 22.0984 20.6989C21.8107 20.2519 21.3833 19.807 20.6743 19.5258C20.2888 19.3729 19.8861 19.3087 19.44 19.2787ZM10.2258 5.25C9.54574 5.25 8.8609 5.30154 8.34563 5.72793C7.90995 6.08845 7.71485 6.61818 7.58805 7.17704C7.55843 7.30762 7.54361 7.3729 7.58022 7.41168C7.61683 7.45045 7.6855 7.43897 7.82283 7.41601C7.97347 7.39082 8.12417 7.37033 8.27415 7.35326C9.18198 7.24994 10.3183 7.24997 11.6371 7.25H12.3626C13.6814 7.24997 14.8177 7.24994 15.7255 7.35326C15.8752 7.37029 16.0255 7.39073 16.1758 7.41584C16.3132 7.43878 16.3818 7.45025 16.4184 7.41148C16.455 7.3727 16.4402 7.30742 16.4106 7.17687C16.2838 6.61808 16.0887 6.08842 15.653 5.72793C15.1378 5.30154 14.4529 5.25 13.7729 5.25H10.2258ZM10.6492 1.55124C11.0126 1.26756 11.4578 1.25 11.7804 1.25H12.2188C12.5414 1.25 12.9866 1.26756 13.35 1.55125C13.7133 1.83494 13.8383 2.26259 13.9166 2.57556L14.2725 3.99927C14.3028 4.12025 14.3179 4.18074 14.2869 4.21943C14.2558 4.25812 14.1922 4.25648 14.0649 4.2532C13.962 4.25055 13.8642 4.25 13.7729 4.25H10.2258C10.1347 4.25 10.0371 4.25055 9.93433 4.25319C9.80704 4.25646 9.74339 4.2581 9.71237 4.21941C9.68135 4.18072 9.69648 4.12023 9.72672 3.99926L10.0826 2.57556C10.1609 2.26259 10.2859 1.83494 10.6492 1.55124ZM17.8985 18.25C18.5016 18.25 19.0473 18.25 19.5073 18.281C19.9588 18.3114 20.1845 18.3266 20.2497 18.2416C20.3149 18.1567 20.2417 17.9417 20.0953 17.5117C19.8863 16.8981 19.7186 16.1217 19.595 15.2396L19.5888 15.196C19.3665 13.6092 19.1916 12.3614 18.9632 11.4212C18.7349 10.4817 18.4213 9.69751 17.8151 9.17033C17.2242 8.65643 16.4825 8.44584 15.6127 8.34684C14.7616 8.24998 13.6723 8.24999 12.3071 8.25H11.6931C10.328 8.24999 9.23864 8.24998 8.38752 8.34684C7.51772 8.44584 6.77607 8.65643 6.18513 9.17033C5.57891 9.69751 5.26529 10.4817 5.03702 11.4212C4.80861 12.3614 4.63375 13.6092 4.4114 15.1959L4.4114 15.1959L4.4114 15.1959L4.40527 15.2396C4.28166 16.1217 4.11397 16.8981 3.90498 17.5117C3.75854 17.9417 3.68532 18.1567 3.75054 18.2416C3.81576 18.3266 4.04148 18.3114 4.49291 18.281C4.95292 18.25 5.49872 18.25 6.10179 18.25H17.8985ZM12 13.25C12.4142 13.25 12.75 13.5858 12.75 14V15C12.75 15.4142 12.4142 15.75 12 15.75C11.5858 15.75 11.25 15.4142 11.25 15V14C11.25 13.5858 11.5858 13.25 12 13.25ZM9.75 11.5C9.75 11.0858 9.41421 10.75 9 10.75C8.58579 10.75 8.25 11.0858 8.25 11.5L8.25 12.5C8.25 12.9142 8.58579 13.25 9 13.25C9.41421 13.25 9.75 12.9142 9.75 12.5V11.5ZM15.75 11.5C15.75 11.0858 15.4142 10.75 15 10.75C14.5858 10.75 14.25 11.0858 14.25 11.5V12.5C14.25 12.9142 14.5858 13.25 15 13.25C15.4142 13.25 15.75 12.9142 15.75 12.5V11.5Z',
  d11: 'M17.8699 19.25C18.4962 19.25 19.0138 19.25 19.44 19.2787C19.8861 19.3087 20.2888 19.3729 20.6743 19.5258C21.3833 19.807 21.8107 20.2519 22.0984 20.6989C22.3228 21.0474 22.4847 21.4377 22.6218 21.7681C22.6528 21.843 22.6826 21.9147 22.7115 21.9822C22.7878 22.1601 22.7494 22.3556 22.6084 22.5077C22.4675 22.6599 22.2411 22.75 22 22.75H2.00001C1.75892 22.75 1.53254 22.6599 1.39157 22.5077C1.25061 22.3556 1.21226 22.1601 1.28849 21.9822C1.31742 21.9147 1.34718 21.843 1.37822 21.7681L1.37823 21.7681C1.51528 21.4377 1.67722 21.0474 1.90159 20.6989C2.18935 20.2519 2.6167 19.807 3.32569 19.5258C3.71125 19.3729 4.11391 19.3087 4.56001 19.2787C4.98622 19.25 5.50381 19.25 6.13012 19.25H6.13013H17.8699Z',
  d12: 'M8.34563 5.72793C8.8609 5.30154 9.54574 5.25 10.2258 5.25H13.7729C14.4529 5.25 15.1378 5.30154 15.653 5.72793C16.0887 6.08841 16.2838 6.61808 16.4106 7.17687C16.4402 7.30742 16.455 7.3727 16.4184 7.41148C16.3818 7.45025 16.3132 7.43878 16.1758 7.41584C16.0255 7.39073 15.8752 7.37029 15.7255 7.35326C14.8177 7.24994 13.6814 7.24997 12.3626 7.25H11.6371C10.3183 7.24997 9.18198 7.24994 8.27415 7.35326C8.12416 7.37033 7.97347 7.39082 7.82283 7.41601C7.6855 7.43897 7.61683 7.45045 7.58022 7.41168C7.54361 7.3729 7.55843 7.30762 7.58805 7.17704C7.71485 6.61818 7.90995 6.08845 8.34563 5.72793Z',
  d13: 'M10.6493 1.55125C11.0126 1.26756 11.4578 1.25 11.7804 1.25H12.2189C12.5415 1.25 12.9867 1.26756 13.35 1.55125C13.7134 1.83494 13.8384 2.26259 13.9166 2.57556L14.2725 3.99927C14.3028 4.12025 14.3179 4.18074 14.2869 4.21943C14.2559 4.25812 14.1922 4.25648 14.0649 4.2532C13.962 4.25055 13.8642 4.25 13.773 4.25H10.2258C10.1347 4.25 10.0371 4.25055 9.93435 4.25319C9.80706 4.25646 9.74341 4.2581 9.71239 4.21941C9.68137 4.18072 9.69649 4.12023 9.72674 3.99926L10.0827 2.57556C10.1609 2.26259 10.2859 1.83494 10.6493 1.55125Z',
  d14: 'M17.8985 18.25C18.5016 18.25 19.0473 18.25 19.5073 18.281C19.9588 18.3114 20.1845 18.3266 20.2497 18.2416C20.3149 18.1567 20.2417 17.9417 20.0953 17.5117C19.8863 16.8981 19.7186 16.1217 19.595 15.2396L19.5888 15.196C19.3665 13.6092 19.1916 12.3614 18.9632 11.4212C18.7349 10.4817 18.4213 9.69751 17.8151 9.17033C17.2242 8.65643 16.4825 8.44584 15.6127 8.34684C14.7616 8.24998 13.6723 8.24999 12.3071 8.25H11.6931C10.328 8.24999 9.23864 8.24998 8.38752 8.34684C7.51772 8.44584 6.77607 8.65643 6.18513 9.17033C5.57891 9.69751 5.26529 10.4817 5.03702 11.4212C4.80861 12.3614 4.63375 13.6092 4.4114 15.1959L4.40527 15.2396C4.28166 16.1217 4.11397 16.8981 3.90498 17.5117C3.75854 17.9417 3.68532 18.1567 3.75054 18.2416C3.81576 18.3266 4.04148 18.3114 4.49291 18.281C4.95292 18.25 5.49872 18.25 6.10179 18.25H17.8985Z',
  d15: 'M9 10.75C9.41421 10.75 9.75 11.0858 9.75 11.5V12.5C9.75 12.9142 9.41421 13.25 9 13.25C8.58579 13.25 8.25 12.9142 8.25 12.5V11.5C8.25 11.0858 8.58579 10.75 9 10.75Z',
  d16: 'M15 10.75C15.4142 10.75 15.75 11.0858 15.75 11.5V12.5C15.75 12.9142 15.4142 13.25 15 13.25C14.5858 13.25 14.25 12.9142 14.25 12.5V11.5C14.25 11.0858 14.5858 10.75 15 10.75Z',
  d17: 'M12 13.25C12.4142 13.25 12.75 13.5858 12.75 14V15C12.75 15.4142 12.4142 15.75 12 15.75C11.5858 15.75 11.25 15.4142 11.25 15V14C11.25 13.5858 11.5858 13.25 12 13.25Z',
  d18: 'M8 9L9 6H15L16 9',
  d19: 'M22 19H2V22H22V19Z',
  d20: 'M9 12V14M15 12V14M12 14.5V16.5',
  d21: 'M10 6L11 2H13L14 6',
  d22: 'M4 19L6.5 9H17.5L20 19',
  d23: 'M1.25 19C1.25 18.5858 1.58579 18.25 2 18.25H22C22.4142 18.25 22.75 18.5858 22.75 19V22C22.75 22.4142 22.4142 22.75 22 22.75H2C1.58579 22.75 1.25 22.4142 1.25 22V19Z',
  d24: 'M20.3352 17.25L3.66406 17.25L5.77204 8.8181C5.85551 8.48422 6.15549 8.25 6.49964 8.25L17.4996 8.25C17.8438 8.25 18.1438 8.48422 18.2273 8.8181L20.3352 17.25ZM8.25 10.5V12.5H9.75V10.5H8.25ZM14.25 10.5V12.5L15.75 12.5V10.5L14.25 10.5ZM11.25 13V15L12.75 15V13H11.25Z',
  d25: 'M16.2072 7.25L15.7115 5.76283C15.6094 5.45657 15.3228 5.25 15 5.25H8.99996C8.67714 5.25 8.39053 5.45657 8.28845 5.76283L7.79272 7.25H16.2072Z',
  d26: 'M9.66443 4.25H14.3356L13.7276 1.8181C13.6441 1.48422 13.3442 1.25 13 1.25H11C10.6559 1.25 10.3559 1.48422 10.2724 1.8181L9.66443 4.25Z',
};

export const IconBorobudurStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="borobudur-stroke-rounded IconBorobudurStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBorobudurDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="borobudur-duotone-rounded IconBorobudurDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBorobudurTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="borobudur-twotone-rounded IconBorobudurTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBorobudurSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="borobudur-solid-rounded IconBorobudurSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBorobudurBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="borobudur-bulk-rounded IconBorobudurBulkRounded"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBorobudurStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="borobudur-stroke-sharp IconBorobudurStrokeSharp"
    >
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d22} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBorobudurSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="borobudur-solid-sharp IconBorobudurSolidSharp"
    >
      <path 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBorobudur: TheIconSelfPack = {
  name: 'Borobudur',
  StrokeRounded: IconBorobudurStrokeRounded,
  DuotoneRounded: IconBorobudurDuotoneRounded,
  TwotoneRounded: IconBorobudurTwotoneRounded,
  SolidRounded: IconBorobudurSolidRounded,
  BulkRounded: IconBorobudurBulkRounded,
  StrokeSharp: IconBorobudurStrokeSharp,
  SolidSharp: IconBorobudurSolidSharp,
};