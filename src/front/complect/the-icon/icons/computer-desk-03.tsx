import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M22 12H2',
  d2: 'M19.7646 12L20.3746 10.3263C20.835 9.0632 21.0652 8.43163 20.9839 7.86936C20.9248 7.45999 20.7548 7.07962 20.4961 6.77767C20.1407 6.36296 19.5448 6.17609 18.3529 5.80235M18.3529 5.80235C18.3529 6.12316 18.3529 6.28357 18.3152 6.42528C18.2601 6.63271 18.1471 6.81594 17.9921 6.94917C17.8862 7.04019 17.7505 7.09976 17.4791 7.21891L17.2275 7.32933C16.7023 7.55994 16.4396 7.67524 16.2451 7.55871C16.2188 7.54295 16.1939 7.52447 16.1708 7.50351C16 7.34859 16 7.03812 16 6.41719V5.1875C16 4.56657 16 4.2561 16.1708 4.10118C16.1939 4.08023 16.2188 4.06174 16.2451 4.04598C16.4396 3.92945 16.7023 4.04476 17.2275 4.27536L17.4791 4.38578C17.7505 4.50493 17.8862 4.5645 17.9921 4.65552C18.1471 4.78876 18.2601 4.97198 18.3152 5.17941C18.3529 5.32112 18.3529 5.48153 18.3529 5.80235Z',
  d3: 'M20 17H16C14.1144 17 13.1716 17 12.5858 16.4142C12 15.8284 12 14.8856 12 13V12',
  d4: 'M4 12V22M20 12V22',
  d5: 'M3 6V5C3 3.58579 3 2.87868 3.43934 2.43934C3.87868 2 4.58579 2 6 2H10C11.4142 2 12.1213 2 12.5607 2.43934C13 2.87868 13 3.58579 13 5V6C13 7.41421 13 8.12132 12.5607 8.56066C12.1213 9 11.4142 9 10 9H6C4.58579 9 3.87868 9 3.43934 8.56066C3 8.12132 3 7.41421 3 6Z',
  d6: 'M9.5 9L10 12M6.5 9L6 12',
  d7: 'M16 17H20V12H12V13C12 14.8856 12 15.8284 12.5858 16.4142C13.1716 17 14.1144 17 16 17Z',
  d8: 'M17.4791 4.38578L17.2275 4.27536C16.7023 4.04476 16.4396 3.92945 16.2451 4.04598C16.2188 4.06174 16.1939 4.08023 16.1708 4.10118C16 4.2561 16 4.56657 16 5.1875V6.41719C16 7.03812 16 7.34859 16.1708 7.50351C16.1939 7.52447 16.2188 7.54295 16.2451 7.55871C16.4396 7.67524 16.7023 7.55994 17.2276 7.32933L17.4791 7.21891C17.7505 7.09976 17.8862 7.04019 17.9921 6.94917C18.1471 6.81594 18.2601 6.63271 18.3152 6.42529C18.3529 6.28357 18.3529 6.12316 18.3529 5.80235C18.3529 5.48153 18.3529 5.32112 18.3152 5.17941C18.2601 4.97198 18.1471 4.78876 17.9921 4.65552C17.8862 4.5645 17.7505 4.50493 17.4791 4.38578Z',
  d9: 'M19.7646 12L20.3746 10.3263C20.835 9.0632 21.0652 8.43163 20.9839 7.86936C20.9248 7.45999 20.7548 7.07962 20.4961 6.77767C20.1407 6.36296 19.5448 6.17609 18.3529 5.80235M18.3529 5.80235C18.3529 6.12316 18.3529 6.28357 18.3152 6.42529C18.2601 6.63271 18.1471 6.81594 17.9921 6.94917C17.8862 7.04019 17.7505 7.09976 17.4791 7.21891L17.2276 7.32933C16.7023 7.55994 16.4396 7.67524 16.2451 7.55871C16.2188 7.54295 16.1939 7.52447 16.1708 7.50351C16 7.34859 16 7.03812 16 6.41719V5.1875C16 4.56657 16 4.2561 16.1708 4.10118C16.1939 4.08023 16.2188 4.06174 16.2451 4.04598C16.4396 3.92945 16.7023 4.04476 17.2275 4.27536L17.4791 4.38578C17.7505 4.50493 17.8862 4.5645 17.9921 4.65552C18.1471 4.78876 18.2601 4.97198 18.3152 5.17941C18.3529 5.32112 18.3529 5.48153 18.3529 5.80235Z',
  d10: 'M17.8354 3.59797C18.0497 3.69141 18.2868 3.79479 18.481 3.9617C18.7567 4.19871 18.9481 4.51568 19.0401 4.86164C19.0627 4.94669 19.0772 5.03384 19.0865 5.12236C19.4491 5.23856 19.7651 5.34629 20.0311 5.45916C20.4266 5.62695 20.7822 5.83386 21.0656 6.16461C21.4207 6.579 21.6476 7.09289 21.7262 7.63703C21.7878 8.06289 21.7235 8.47486 21.6061 8.90667C21.4929 9.3234 21.3111 9.82196 21.0904 10.4277L21.0904 10.4277L20.4693 12.1318C20.3275 12.5209 19.897 12.7214 19.5078 12.5796C19.1187 12.4378 18.9182 12.0073 19.06 11.6181L19.67 9.94445C19.9046 9.3008 20.0639 8.8617 20.1586 8.51324C20.2511 8.17292 20.2613 7.98797 20.2416 7.85156C20.202 7.57696 20.0889 7.3301 19.9265 7.14061C19.8546 7.05664 19.7345 6.96275 19.4452 6.84C19.3142 6.7844 19.1632 6.72871 18.9842 6.66775C18.8801 6.94504 18.7095 7.19642 18.481 7.39286C18.2868 7.55977 18.0497 7.66315 17.8355 7.75659C17.6058 7.8575 17.0214 8.1141 16.8124 8.17194C16.5785 8.2367 16.2168 8.29096 15.8597 8.07702C15.7904 8.03551 15.7259 7.98747 15.667 7.93399C15.3796 7.67339 15.3054 7.33375 15.2769 7.10108C15.2499 6.88018 15.2499 6.60738 15.25 6.33L15.25 6.32999L15.25 5.02457L15.25 5.02457C15.2499 4.74719 15.2499 4.47438 15.2769 4.25348C15.3054 4.02082 15.3796 3.68117 15.667 3.42057C15.7259 3.36709 15.7904 3.31905 15.8597 3.27754C16.2168 3.0636 16.5785 3.11786 16.8124 3.18262C17.0214 3.24047 17.6058 3.49707 17.8354 3.59797Z',
  d11: 'M2 10.875C1.44772 10.875 1 11.3227 1 11.875C1 12.4273 1.44772 12.875 2 12.875H3V21.875C3 22.4273 3.44772 22.875 4 22.875C4.55228 22.875 5 22.4273 5 21.875V12.875H11.25L11.25 12.927C11.25 13.8255 11.2499 14.5747 11.3299 15.1695C11.4143 15.7973 11.6 16.3641 12.0555 16.8195C12.5109 17.275 13.0777 17.4607 13.7055 17.5451C14.3003 17.6251 15.0495 17.625 15.948 17.625L19 17.625V21.875C19 22.4273 19.4477 22.875 20 22.875C20.5523 22.875 21 22.4273 21 21.875V12.875H22C22.5523 12.875 23 12.4273 23 11.875C23 11.3227 22.5523 10.875 22 10.875H2Z',
  d12: 'M5.95063 1.125L6 1.125L10.0494 1.125H10.0494C10.7143 1.12496 11.2871 1.12493 11.7458 1.18661C12.2375 1.25271 12.7087 1.40177 13.091 1.78401C13.4732 2.16626 13.6223 2.63752 13.6884 3.12916C13.7501 3.5879 13.75 4.16076 13.75 4.82562V4.82563V5.92437V5.92438C13.75 6.58925 13.7501 7.1621 13.6884 7.62085C13.6223 8.11248 13.4732 8.58375 13.091 8.96599C12.7087 9.34824 12.2375 9.4973 11.7458 9.5634C11.2871 9.62507 10.7142 9.62504 10.0494 9.62501H5.95064C5.28577 9.62504 4.71291 9.62507 4.25416 9.5634C3.76252 9.4973 3.29126 9.34824 2.90901 8.96599C2.52677 8.58375 2.37771 8.11248 2.31161 7.62085C2.24993 7.16211 2.24996 6.58927 2.25 5.92443V5.92438L2.25 5.875V4.875L2.25 4.82563V4.82558C2.24996 4.16074 2.24993 3.58789 2.31161 3.12916C2.37771 2.63752 2.52677 2.16626 2.90901 1.78401C3.29126 1.40177 3.76252 1.25271 4.25416 1.18661C4.71289 1.12493 5.28574 1.12496 5.95058 1.125H5.95063Z',
  d13: 'M6.66456 7.88852C7.20933 7.97931 7.57735 8.49454 7.48655 9.03931L6.98655 12.0393C6.89575 12.5841 6.38053 12.9521 5.83576 12.8613C5.29099 12.7705 4.92297 12.2553 5.01376 11.7105L5.51376 8.71051C5.60456 8.16574 6.11978 7.79772 6.66456 7.88852ZM9.33576 7.88852C9.88053 7.79772 10.3958 8.16574 10.4865 8.71051L10.9865 11.7105C11.0773 12.2553 10.7093 12.7705 10.1646 12.8613C9.61978 12.9521 9.10456 12.5841 9.01376 12.0393L8.51376 9.03931C8.42297 8.49454 8.79099 7.97931 9.33576 7.88852Z',
  d14: 'M11.25 12.875L11.25 12.927V12.927C11.25 13.8255 11.2499 14.5747 11.3299 15.1695C11.4143 15.7973 11.6 16.3641 12.0555 16.8195C12.5109 17.275 13.0777 17.4607 13.7055 17.5451C14.3003 17.6251 15.0495 17.625 15.948 17.625L19 17.625V12.875H11.25Z',
  d15: 'M2 10.875C1.44772 10.875 1 11.3227 1 11.875C1 12.4273 1.44772 12.875 2 12.875H3V21.875C3 22.4273 3.44772 22.875 4 22.875C4.55228 22.875 5 22.4273 5 21.875V12.875H19V21.875C19 22.4273 19.4477 22.875 20 22.875C20.5523 22.875 21 22.4273 21 21.875V12.875H22C22.5523 12.875 23 12.4273 23 11.875C23 11.3227 22.5523 10.875 22 10.875H2Z',
  d16: 'M5.36169 9.62315C4.94286 9.61911 4.57125 9.60596 4.25416 9.56333C3.76252 9.49723 3.29126 9.34817 2.90902 8.96593C2.52677 8.58368 2.37771 8.11242 2.31161 7.62078C2.24994 7.16206 2.24997 6.58923 2.25 5.92441V5.92436V5.92431L2.25001 5.87494V4.87494L2.25 4.82556V4.82551V4.82546C2.24997 4.16064 2.24994 3.58782 2.31161 3.12909C2.37771 2.63745 2.52677 2.16619 2.90901 1.78395C3.29126 1.4017 3.76252 1.25264 4.25416 1.18654C4.71289 1.12487 5.28574 1.1249 5.95058 1.12493H5.95063L6.00001 1.12494L10.0494 1.12493H10.0494C10.7143 1.1249 11.2871 1.12487 11.7458 1.18654C12.2375 1.25264 12.7087 1.4017 13.091 1.78395C13.4732 2.16619 13.6223 2.63745 13.6884 3.12909C13.7501 3.58783 13.75 4.16069 13.75 4.82554V4.82555V4.82557L13.75 5.9243V5.92432V5.92433C13.75 6.58918 13.7501 7.16204 13.6884 7.62078C13.6223 8.11242 13.4732 8.58368 13.091 8.96593C12.7087 9.34817 12.2375 9.49723 11.7458 9.56333C11.4288 9.60595 11.0573 9.6191 10.6386 9.62315L10.9866 11.7107C11.0773 12.2555 10.7093 12.7707 10.1646 12.8615C9.61979 12.9523 9.10456 12.5843 9.01376 12.0395L8.61134 9.62494H7.38898L6.98655 12.0395C6.89576 12.5843 6.38053 12.9523 5.83576 12.8615C5.29099 12.7707 4.92297 12.2555 5.01376 11.7107L5.36169 9.62315Z',
  d17: 'M19.4692 12L20.9692 7.00003L18.4692 6M18.4692 6C18.4692 4.89543 17.5738 4 16.4692 4H15.9692V8H16.4692C17.5738 8 18.4692 7.10457 18.4692 6Z',
  d18: 'M12.9692 9H2.96924L2.97052 2H12.9692V9Z',
  d19: 'M9.46924 9V12M6.46924 9V12',
  d20: 'M3.99175 21.976V16.9957V12.0154M11.9528 12.0154V16.8758C11.9528 16.931 11.9976 16.9757 12.0528 16.9757L19.9602 17.0029M19.9602 22V12.0059M1.99854 12.0154H22.0015',
  d21: 'M11.25 12.25H20V18H12C11.5858 18 11.25 17.6642 11.25 17.25V12.25Z',
  d22: 'M2 11.25H22V13.25H21V22.25H19V13.25H5V22.25H3V13.25H2V11.25Z',
  d23: 'M2.25128 2.49986C2.25136 2.0857 2.58712 1.75 3.00128 1.75H13C13.4142 1.75 13.75 2.08579 13.75 2.5V9.5C13.75 9.91421 13.4142 10.25 13 10.25H3C2.80106 10.25 2.61028 10.171 2.46962 10.0303C2.32897 9.8896 2.24996 9.6988 2.25 9.49986L2.25128 2.49986Z',
  d24: 'M9.5 12.25V9.25H6.5V12.25H9.5Z',
  d25: 'M16.5 3.5C17.8382 3.5 18.9531 4.45581 19.1994 5.72197L21.2785 6.55367C21.6391 6.69791 21.83 7.09355 21.7184 7.46554L20.2184 12.4655L18.7816 12.0345L20.0845 7.6916L19.0513 7.2783C18.6441 8.28768 17.6552 9 16.5 9V3.5Z',
};

export const IconComputerDesk03StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-desk-03-stroke-rounded IconComputerDesk03StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconComputerDesk03DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-desk-03-duotone-rounded IconComputerDesk03DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
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
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d7} 
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
    </TheIconWrapper>
  );
};

export const IconComputerDesk03TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-desk-03-twotone-rounded IconComputerDesk03TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconComputerDesk03SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-desk-03-solid-rounded IconComputerDesk03SolidRounded"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconComputerDesk03BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-desk-03-bulk-rounded IconComputerDesk03BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconComputerDesk03StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-desk-03-stroke-sharp IconComputerDesk03StrokeSharp"
    >
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconComputerDesk03SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-desk-03-solid-sharp IconComputerDesk03SolidSharp"
    >
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfComputerDesk03: TheIconSelfPack = {
  name: 'ComputerDesk03',
  StrokeRounded: IconComputerDesk03StrokeRounded,
  DuotoneRounded: IconComputerDesk03DuotoneRounded,
  TwotoneRounded: IconComputerDesk03TwotoneRounded,
  SolidRounded: IconComputerDesk03SolidRounded,
  BulkRounded: IconComputerDesk03BulkRounded,
  StrokeSharp: IconComputerDesk03StrokeSharp,
  SolidSharp: IconComputerDesk03SolidSharp,
};