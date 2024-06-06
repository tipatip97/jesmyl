import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M22 12C19.6 12 17.6667 10.6667 17 10H7C6.33333 10.6667 4.4 12 2 12L2.17082 12.3416C2.679 13.358 3.71779 14 4.8541 14H19.1459C20.2822 14 21.321 13.358 21.8292 12.3416L22 12Z',
  d2: 'M19 4C17.547 4 16.265 3.51128 15.3316 2.97766C14.3479 2.41529 13.8561 2.13411 13.6037 2.06705C13.3513 2 13.0153 2 12.3431 2H11.6569C10.9847 2 10.6487 2 10.3963 2.06705C10.1439 2.13411 9.65207 2.41529 8.66839 2.97766C7.735 3.51128 6.45303 4 5 4L5.17082 4.34164C5.679 5.35799 6.71779 6 7.8541 6H16.1459C17.2822 6 18.321 5.35799 18.8292 4.34164L19 4Z',
  d3: 'M17 10V6',
  d4: 'M7 10V6',
  d5: 'M19 22V14',
  d6: 'M5 22V14',
  d7: 'M3 22H21',
  d8: 'M10 22V19C10 17.8954 10.8954 17 12 17C13.1046 17 14 17.8954 14 19V22',
  d9: 'M19 4C17.547 4 16.265 3.51128 15.3316 2.97766C14.3479 2.41529 13.8561 2.13411 13.6037 2.06705C13.3513 2 13.0153 2 12.3431 2H11.6569C10.9847 2 10.6487 2 10.3963 2.06705C10.1439 2.13411 9.65207 2.41529 8.66839 2.97766L8.66839 2.97766C7.735 3.51128 6.45303 4 5 4L5.17082 4.34164C5.679 5.35799 6.71779 6 7.8541 6H16.1459C17.2822 6 18.321 5.35799 18.8292 4.34164L19 4Z',
  d10: 'M5 22V14H19V22H14V19C14 17.8954 13.1046 17 12 17C10.8954 17 10 17.8954 10 19V22H5Z',
  d11: 'M10 22V19C10 17.8954 10.8954 17 12 17V17C13.1046 17 14 17.8954 14 19V22',
  d12: 'M17 10V6M7 10V6',
  d13: 'M6.46967 10.1997C6.61032 10.0718 6.80109 10 7 10H17C17.1989 10 17.3897 10.0718 17.5303 10.1997C18.1016 10.719 19.8549 11.8182 22 11.8182C22.2599 11.8182 22.5013 11.9405 22.638 12.1415C22.7746 12.3426 22.7871 12.5936 22.6708 12.8049L22.5 13.1155C21.8648 14.2704 20.5663 15 19.1459 15H4.8541C3.43371 15 2.13522 14.2704 1.5 13.1155L1.32918 12.8049C1.21293 12.5936 1.22536 12.3426 1.36201 12.1415C1.49867 11.9405 1.74007 11.8182 2 11.8182C4.14512 11.8182 5.8984 10.719 6.46967 10.1997Z',
  d14: 'M11.5472 1.00004H12.4528C13.0171 0.999736 13.4466 0.999507 13.7963 1.07551C14.0196 1.12405 14.2791 1.23029 14.5482 1.34848C14.8345 1.47424 15.2103 1.65004 15.6931 1.87584L15.7039 1.88088C16.559 2.28087 17.7128 2.63641 19 2.63641C19.2599 2.63641 19.5013 2.74653 19.638 2.92744C19.7746 3.10834 19.7871 3.33424 19.6708 3.52446L19.5 3.80398C18.8648 4.84341 17.5663 5.5 16.1459 5.5H7.8541C6.43371 5.5 5.13522 4.84341 4.5 3.80398L4.32918 3.52446C4.21293 3.33424 4.22536 3.10834 4.36201 2.92744C4.49867 2.74653 4.74007 2.63641 5 2.63641C6.28721 2.63641 7.441 2.28087 8.29615 1.88088L8.30691 1.87585C8.78964 1.65005 9.16551 1.47424 9.4518 1.34848C9.72085 1.23029 9.9804 1.12405 10.2037 1.07551C10.5534 0.999507 10.9829 0.999736 11.5472 1.00004Z',
  d15: 'M6.99998 8.75007H17C17.0607 8.75007 17.1215 8.75275 17.182 8.7581C17.4741 8.78389 17.6201 8.79678 17.685 8.73732C17.75 8.67786 17.75 8.55377 17.75 8.30557V7.05541C17.75 6.8156 17.75 6.6957 17.6774 6.63571C17.6049 6.57572 17.4806 6.59949 17.2321 6.64705C16.8759 6.71523 16.5114 6.75 16.1459 6.75H7.85408C7.48857 6.75 7.12408 6.71523 6.76782 6.64705C6.51934 6.59949 6.3951 6.57572 6.32254 6.63571C6.24998 6.6957 6.24998 6.8156 6.24998 7.05541V8.30557C6.24998 8.55377 6.24998 8.67786 6.31492 8.73732C6.37986 8.79678 6.52589 8.78389 6.81794 8.7581C6.87849 8.75275 6.93924 8.75007 6.99998 8.75007Z',
  d16: 'M2.25 22.25C2.25 21.8358 2.58579 21.5 3 21.5H21C21.4142 21.5 21.75 21.8358 21.75 22.25C21.75 22.6642 21.4142 23 21 23H3C2.58579 23 2.25 22.6642 2.25 22.25Z',
  d17: 'M10.75 20.25C10.75 19.5596 11.3096 19 12 19C12.6904 19 13.25 19.5596 13.25 20.25V21.5H10.75V20.25ZM9.25 21.5V20.25C9.25 18.7312 10.4812 17.5 12 17.5C13.5188 17.5 14.75 18.7312 14.75 20.25V21.5L19.75 21.5V16.8212C19.75 16.7631 19.75 16.7341 19.749 16.7182C19.7317 16.4472 19.5528 16.2683 19.2818 16.251C19.2659 16.25 19.2259 16.25 19.1459 16.25H4.85412C4.77409 16.25 4.73407 16.25 4.71817 16.251C4.44716 16.2683 4.2683 16.4472 4.25101 16.7182C4.25 16.7341 4.25 16.7631 4.25 16.8212L4.25 21.5H9.25Z',
  d18: 'M7 8.75163H17C17.0607 8.75163 17.1215 8.75431 17.182 8.75966C17.4741 8.78545 17.6201 8.79834 17.6851 8.73888C17.75 8.67942 17.75 8.55532 17.75 8.30713V7.05697C17.75 6.81716 17.75 6.69726 17.6774 6.63727C17.6049 6.57727 17.4806 6.60105 17.2322 6.64861C16.8759 6.71679 16.5114 6.75156 16.1459 6.75156H7.8541C7.48859 6.75156 7.1241 6.71679 6.76784 6.64861C6.51936 6.60105 6.39512 6.57727 6.32256 6.63727C6.25 6.69726 6.25 6.81716 6.25 7.05697V8.30713C6.25 8.55533 6.25 8.67942 6.31494 8.73888C6.37988 8.79834 6.52591 8.78545 6.81796 8.75966C6.87851 8.75431 6.93926 8.75163 7 8.75163Z',
  d19: 'M19.1459 16.25H4.85412C4.77409 16.25 4.73407 16.25 4.71817 16.251C4.44716 16.2683 4.2683 16.4472 4.25101 16.7182C4.25 16.7341 4.25 16.7631 4.25 16.8212V21.5H19.75V16.8212C19.75 16.7631 19.75 16.7341 19.749 16.7182C19.7317 16.4472 19.5528 16.2683 19.2818 16.251C19.2659 16.25 19.2259 16.25 19.1459 16.25Z',
  d20: 'M12 19C11.3096 19 10.75 19.5596 10.75 20.25V22.25C10.75 22.6642 10.4142 23 10 23C9.58579 23 9.25 22.6642 9.25 22.25V20.25C9.25 18.7312 10.4812 17.5 12 17.5C13.5188 17.5 14.75 18.7312 14.75 20.25V22.25C14.75 22.6642 14.4142 23 14 23C13.5858 23 13.25 22.6642 13.25 22.25V20.25C13.25 19.5596 12.6904 19 12 19Z',
  d21: 'M22 12C19.6 12 17.6667 10.6667 17 10H7C6.33333 10.6667 4.4 12 2 12C2 14 3.71779 14 4.8541 14H19.1459C20.2822 14 22 14 22 12Z',
  d22: 'M19 4C16.6 4 14.6667 2.66667 14 2H10C9.33333 2.66667 7.4 4 5 4C5 6 6.71779 6 7.8541 6H16.1459C17.2822 6 19 6 19 4Z',
  d23: 'M17.3107 9.99707L17.5303 10.1768C18.1016 10.6442 19.8549 11.6334 22 11.6334H22.75V12.247C22.75 12.7444 22.6187 13.1723 22.3468 13.5223C22.073 13.8746 21.6941 14.0999 21.2997 14.241C20.5822 14.4978 19.7344 14.4974 19.1989 14.497L19.1459 14.497H4.8541L4.80114 14.497C4.26558 14.4974 3.41779 14.4978 2.70034 14.241C2.30591 14.0999 1.92696 13.8746 1.65323 13.5223C1.38128 13.1723 1.25 12.7444 1.25 12.247V11.6334H2C4.14512 11.6334 5.8984 10.6442 6.46967 10.1768L6.68934 9.99707H17.3107Z',
  d24: 'M14.3107 1L14.5303 1.18498C15.1016 1.66605 16.8549 2.68419 19 2.68419H19.75C19.75 3.19606 19.6187 3.63647 19.3468 3.9967C19.073 4.35929 18.6941 4.59119 18.2997 4.73649C17.5822 5.00078 16.7344 5.00029 16.1989 4.99998L16.1459 4.99996H7.8541L7.80114 4.99998H7.80114C7.26557 5.00029 6.41779 5.00078 5.70034 4.73649C5.30591 4.59119 4.92696 4.35929 4.65323 3.9967C4.38128 3.63647 4.25 3.19606 4.25 2.68419H5C7.14512 2.68419 8.8984 1.66605 9.46967 1.18498L9.68934 1H14.3107Z',
  d25: 'M6.5 6.5H17.5V8.5H6.5V6.5Z',
  d26: 'M21 23.0005H3V21.5005H21V23.0005Z',
  d27: 'M10.75 20.001C10.75 19.3108 11.3096 18.7514 12 18.7514C12.6904 18.7514 13.25 19.3108 13.25 20.001V22.0004H10.75V20.001Z',
  d28: 'M9.25 22.0004V20.001C9.25 18.4827 10.4812 17.2518 12 17.2518C13.5188 17.2518 14.75 18.4827 14.75 20.001V22.0004L19.75 22.0004V15.9956C19.5535 16.0027 19.3808 16.0025 19.2432 16.0023L19.1982 16.0022H4.80183L4.75679 16.0023C4.61926 16.0025 4.44652 16.0027 4.25 15.9956V22.0004L9.25 22.0004Z',
};

export const IconChinaTempleStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="china-temple-stroke-rounded IconChinaTempleStrokeRounded"
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconChinaTempleDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="china-temple-duotone-rounded IconChinaTempleDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconChinaTempleTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="china-temple-twotone-rounded IconChinaTempleTwotoneRounded"
    >
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconChinaTempleSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="china-temple-solid-rounded IconChinaTempleSolidRounded"
    >
      <path 
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

export const IconChinaTempleBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="china-temple-bulk-rounded IconChinaTempleBulkRounded"
    >
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconChinaTempleStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="china-temple-stroke-sharp IconChinaTempleStrokeSharp"
    >
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d22} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
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
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconChinaTempleSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="china-temple-solid-sharp IconChinaTempleSolidSharp"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d27} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d28} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfChinaTemple: TheIconSelfPack = {
  name: 'ChinaTemple',
  StrokeRounded: IconChinaTempleStrokeRounded,
  DuotoneRounded: IconChinaTempleDuotoneRounded,
  TwotoneRounded: IconChinaTempleTwotoneRounded,
  SolidRounded: IconChinaTempleSolidRounded,
  BulkRounded: IconChinaTempleBulkRounded,
  StrokeSharp: IconChinaTempleStrokeSharp,
  SolidSharp: IconChinaTempleSolidSharp,
};