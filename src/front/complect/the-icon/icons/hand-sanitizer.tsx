import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M15.6565 16.1618L15.3119 13.9419C15.2092 13.2801 15.1578 12.9492 15.0787 12.666C14.5317 10.7079 12.8437 9.27248 10.8078 9.03444C10.5133 9 10.1755 9 9.5 9C8.82446 9 8.48668 9 8.19218 9.03444C6.15634 9.27248 4.46826 10.7079 3.92131 12.666C3.84219 12.9492 3.79083 13.2801 3.68811 13.9419L3.34352 16.1618C3.00313 18.3547 2.83293 19.4512 3.22851 20.2812C3.4607 20.7685 3.82102 21.1847 4.27159 21.4863C5.03922 22 6.15851 22 8.39711 22H10.6029C12.8415 22 13.9608 22 14.7284 21.4863C15.179 21.1847 15.5393 20.7685 15.7715 20.2812C16.1671 19.4512 15.9969 18.3547 15.6565 16.1618Z',
  d2: 'M9.5 13.5V17.5M11.5 15.5L7.5 15.5',
  d3: 'M12.5 9.5V9C12.5 7.58579 12.5 6.87868 12.0607 6.43934C11.6213 6 10.9142 6 9.5 6V6C8.08579 6 7.37868 6 6.93934 6.43934C6.5 6.87868 6.5 7.58579 6.5 9V9.5',
  d4: 'M11 6V3.5C11 2.67157 10.3284 2 9.5 2V2C8.67157 2 8 2.67157 8 3.5L8 6',
  d5: 'M11 4.21885L13.7173 3.49523C15.2293 3.09261 15.9852 2.8913 16.6861 3.05968C17.3869 3.22807 17.8331 3.71821 18.7255 4.69848L19 5',
  d6: 'M21 10.5C21 11.6046 20.25 12 19.5 12C18.75 12 18 11.6046 18 10.5C18 9.39543 19.5 8 19.5 8C19.5 8 21 9.39543 21 10.5Z',
  d7: 'M11 3.5V6V6.03806C10.6131 6 10.1258 6 9.5 6C8.87425 6 8.38693 6 8 6.03806V6V3.5C8 2.67157 8.67157 2 9.5 2C10.3284 2 11 2.67157 11 3.5Z',
  d8: 'M10.8949 8.41451C10.5565 8.37495 10.1782 8.37497 9.55693 8.375L9.44301 8.375C8.82171 8.37497 8.44346 8.37495 8.10505 8.41451C5.77013 8.68753 3.82866 10.3347 3.19893 12.5892C3.10771 12.9158 3.05005 13.2874 2.95578 13.895L2.59617 16.2117C2.43122 17.2743 2.29881 18.1272 2.26111 18.8166C2.22242 19.5242 2.276 20.1509 2.55143 20.7289C2.84192 21.3385 3.29228 21.8584 3.85442 22.2346C4.38631 22.5905 4.99993 22.7377 5.70959 22.8072C6.40185 22.875 7.27175 22.875 8.35728 22.875H10.6427C11.7282 22.875 12.5981 22.875 13.2903 22.8072C14 22.7377 14.6136 22.5905 15.1455 22.2346C15.7076 21.8584 16.158 21.3385 16.4485 20.7289C16.7239 20.1509 16.7775 19.5242 16.7388 18.8166C16.7011 18.1272 16.5687 17.2743 16.4038 16.2117L16.0442 13.895L16.0442 13.8949L16.0441 13.8949C15.9499 13.2873 15.8922 12.9158 15.801 12.5892C15.1713 10.3347 13.2298 8.68753 10.8949 8.41451ZM10.4999 13.625C10.4999 13.0727 10.0522 12.625 9.49993 12.625C8.94765 12.625 8.49993 13.0727 8.49993 13.625V14.625H7.49993C6.94765 14.625 6.49993 15.0727 6.49993 15.625C6.49993 16.1773 6.94765 16.625 7.49993 16.625H8.49993V17.625C8.49993 18.1773 8.94765 18.625 9.49993 18.625C10.0522 18.625 10.4999 18.1773 10.4999 17.625V16.625H11.4999C12.0522 16.625 12.4999 16.1773 12.4999 15.625C12.4999 15.0727 12.0522 14.625 11.4999 14.625H10.4999V13.625Z',
  d9: 'M9.4384 5.125C9.45887 5.12501 9.47941 5.12501 9.50001 5.12501C9.52061 5.12501 9.54114 5.12501 9.56161 5.125C10.2157 5.12494 10.8035 5.12489 11.2792 5.18884C11.7985 5.25867 12.3313 5.4208 12.7678 5.85724C13.2042 6.29368 13.3663 6.82649 13.4362 7.34585C13.5001 7.82156 13.5001 8.40927 13.5 9.0634C13.5 9.08387 13.5 9.10441 13.5 9.12501V9.62501C13.5 10.1773 13.0523 10.625 12.5 10.625C11.9477 10.625 11.5 10.1773 11.5 9.62501V9.12501C11.5 8.38963 11.4979 7.9387 11.454 7.61235C11.4154 7.3255 11.3606 7.27761 11.3541 7.27192C11.3538 7.27171 11.3537 7.27156 11.3536 7.27145C11.3535 7.27135 11.3533 7.27117 11.3531 7.27093C11.3474 7.26442 11.2995 7.20957 11.0127 7.17101C10.6863 7.12713 10.2354 7.12501 9.50001 7.12501C8.76463 7.12501 8.3137 7.12713 7.98735 7.17101C7.7005 7.20957 7.65261 7.26442 7.64692 7.27093C7.64671 7.27117 7.64656 7.27135 7.64645 7.27145C7.64635 7.27156 7.64617 7.27171 7.64593 7.27192C7.63942 7.27761 7.58457 7.3255 7.54601 7.61235C7.50213 7.9387 7.50001 8.38963 7.50001 9.12501V9.62501C7.50001 10.1773 7.05229 10.625 6.50001 10.625C5.94772 10.625 5.50001 10.1773 5.50001 9.62501V9.12501C5.50001 9.10441 5.50001 9.08387 5.5 9.0634C5.49994 8.40928 5.49989 7.82156 5.56384 7.34585C5.63367 6.82649 5.7958 6.29368 6.23224 5.85724C6.66868 5.4208 7.20149 5.25867 7.72085 5.18884C8.19656 5.12489 8.78428 5.12494 9.4384 5.125Z',
  d10: 'M7 3.625C7 2.24429 8.11929 1.125 9.5 1.125C10.8807 1.125 12 2.24429 12 3.625V6.125C12 6.67728 11.5523 7.125 11 7.125C10.4477 7.125 10 6.67728 10 6.125V3.625C10 3.34886 9.77614 3.125 9.5 3.125C9.22386 3.125 9 3.34886 9 3.625V6.125C9 6.67728 8.55228 7.125 8 7.125C7.44772 7.125 7 6.67728 7 6.125L7 3.625Z',
  d11: 'M15.6746 4.17402C15.2643 4.24418 14.7484 4.38058 13.9749 4.58655L11.2576 5.31018C10.7239 5.4523 10.176 5.13487 10.0339 4.60118C9.8918 4.0675 10.2092 3.51965 10.7429 3.37753L13.5029 2.64255C14.2226 2.45089 14.8268 2.28997 15.3376 2.20263C15.8764 2.1105 16.389 2.08479 16.9199 2.21235C17.9261 2.4541 18.5738 3.16798 19.3333 4.00504C19.3769 4.05308 19.4208 4.10152 19.4652 4.1503L19.7397 4.45182C20.1115 4.86022 20.0818 5.49269 19.6734 5.86448C19.265 6.23626 18.6326 6.20658 18.2608 5.79818L17.9863 5.49666C17.0198 4.43494 16.7905 4.23817 16.4527 4.15701C16.2828 4.11618 16.067 4.10694 15.6746 4.17402Z',
  d12: 'M21 10.625C21 11.7296 20.25 12.125 19.5 12.125C18.75 12.125 18 11.7296 18 10.625C18 9.52043 19.5 8.125 19.5 8.125C19.5 8.125 21 9.52043 21 10.625Z',
  d13: 'M18.9892 7.57587C19.2771 7.30804 19.7229 7.30804 20.0108 7.57587L20.0165 7.58142C20.068 7.63203 20.2042 7.76587 20.2782 7.84383C20.4312 8.00497 20.6368 8.23385 20.8442 8.50317C21.05 8.77033 21.2687 9.0917 21.4387 9.43759C21.6052 9.77641 21.75 10.1889 21.75 10.625C21.75 11.3616 21.4912 11.9612 21.0145 12.3628C20.5599 12.7458 19.9947 12.875 19.5 12.875C19.0053 12.875 18.4401 12.7458 17.9855 12.3628C17.5088 11.9612 17.25 11.3616 17.25 10.625C17.25 10.1889 17.3948 9.77641 17.5613 9.43759C17.7313 9.0917 17.95 8.77033 18.1558 8.50317C18.3632 8.23385 18.5688 8.00497 18.7218 7.84383C18.7964 7.76521 18.9333 7.63075 18.9837 7.5812L18.988 7.57692L18.9892 7.57587Z',
  d14: 'M9.557 8.375C10.1783 8.37497 10.5565 8.37495 10.895 8.41451C13.2299 8.68753 15.1713 10.3347 15.8011 12.5892C15.8923 12.9158 15.9499 13.2874 16.0442 13.8949L16.0442 13.895L16.4038 16.2117C16.5688 17.2743 16.7012 18.1272 16.7389 18.8166C16.7776 19.5242 16.724 20.1509 16.4486 20.7289C16.1581 21.3385 15.7077 21.8584 15.1456 22.2346C14.6137 22.5905 14.0001 22.7377 13.2904 22.8072C12.5982 22.875 11.7283 22.875 10.6427 22.875H8.35735C7.27182 22.875 6.40192 22.875 5.70966 22.8072C4.99999 22.7377 4.38638 22.5905 3.85449 22.2346C3.29235 21.8584 2.84199 21.3385 2.55149 20.7289C2.27606 20.1509 2.22249 19.5242 2.26118 18.8166C2.29888 18.1272 2.43129 17.2743 2.59623 16.2117L2.95585 13.895C3.05012 13.2874 3.10778 12.9158 3.199 12.5892C3.82873 10.3347 5.77019 8.68753 8.10511 8.41451C8.44352 8.37495 8.82177 8.37497 9.44307 8.375H9.557Z',
  d15: 'M9.5 12.625C10.0523 12.625 10.5 13.0727 10.5 13.625V14.625H11.5C12.0523 14.625 12.5 15.0727 12.5 15.625C12.5 16.1773 12.0523 16.625 11.5 16.625H10.5V17.625C10.5 18.1773 10.0523 18.625 9.5 18.625C8.94772 18.625 8.5 18.1773 8.5 17.625V16.625H7.5C6.94772 16.625 6.5 16.1773 6.5 15.625C6.5 15.0727 6.94772 14.625 7.5 14.625H8.5V13.625C8.5 13.0727 8.94772 12.625 9.5 12.625Z',
  d16: 'M9.4384 5.125C8.78428 5.12494 8.19656 5.12489 7.72085 5.18884C7.20149 5.25867 6.66868 5.4208 6.23224 5.85724C5.7958 6.29368 5.63367 6.82649 5.56384 7.34585C5.49989 7.82155 5.49994 8.40927 5.5 9.06338L5.50001 9.38695C6.09792 8.97889 6.77537 8.68048 7.50181 8.51724C7.50536 8.12149 7.51576 7.83732 7.54601 7.61235C7.58457 7.3255 7.63942 7.27761 7.64593 7.27192L7.64692 7.27093C7.65261 7.26442 7.7005 7.20957 7.98735 7.17101C8.3137 7.12713 8.76463 7.12501 9.50001 7.12501C10.2354 7.12501 10.6863 7.12713 11.0127 7.17101C11.2995 7.20957 11.3474 7.26442 11.3531 7.27093L11.3541 7.27192C11.3606 7.27761 11.4154 7.3255 11.454 7.61235C11.4843 7.83732 11.4947 8.12149 11.4982 8.51723C12.2246 8.68046 12.9021 8.97886 13.5 9.38692L13.5 9.0634C13.5001 8.40927 13.5001 7.82156 13.4362 7.34585C13.3663 6.82649 13.2042 6.29368 12.7678 5.85724C12.3313 5.4208 11.7985 5.25867 11.2792 5.18884C10.8035 5.12489 10.2157 5.12494 9.56161 5.125H9.4384Z',
  d17: 'M11.9355 3.05985L13.5026 2.64255C14.2222 2.45089 14.8265 2.28997 15.3373 2.20263C15.8761 2.1105 16.3887 2.08479 16.9196 2.21235C17.9258 2.4541 18.5735 3.16798 19.333 4.00503L19.4649 4.1503L19.7394 4.45182C20.1112 4.86022 20.0815 5.49269 19.6731 5.86448C19.2647 6.23626 18.6322 6.20658 18.2605 5.79818L17.986 5.49666C17.0194 4.43494 16.7902 4.23817 16.4524 4.15701C16.2825 4.11618 16.0667 4.10694 15.6743 4.17402C15.264 4.24418 14.748 4.38058 13.9746 4.58655L11.9997 5.11247V3.625C11.9997 3.43064 11.9775 3.24146 11.9355 3.05985Z',
  d18: 'M11.2959 9H7.70412C5.61398 9 3.87621 10.6092 3.71591 12.6932L3 22H16L15.2841 12.6932C15.1238 10.6092 13.386 9 11.2959 9Z',
  d19: 'M9.5 13V19M12.5 16H6.5',
  d20: 'M12.5 9V6H6.5V9',
  d21: 'M11 4.21874L17 3L19 5.5',
  d22: 'M10.9997 5.99812V3.49717C10.9997 2.67802 10.3279 2.01192 9.50876 2.00494C8.6797 1.99787 7.99219 2.66789 7.99219 3.49697V5.99983',
  d23: 'M5.75 6C5.75 5.58579 6.08579 5.25 6.5 5.25L12.5 5.25C12.9142 5.25 13.25 5.58579 13.25 6V9H11.75V6.75L7.25 6.75V9H5.75L5.75 6Z',
  d24: 'M7.25 3.5C7.25 2.25736 8.25736 1.25 9.5 1.25C10.7426 1.25 11.75 2.25736 11.75 3.5V6H7.25V3.5Z',
  d25: 'M16.8506 2.26503C17.1262 2.20906 17.4099 2.31193 17.5855 2.5315L19.5855 5.0315L18.4142 5.96854L16.7003 3.82618L11.1492 4.95376L10.8506 3.48377L16.8506 2.26503Z',
  d26: 'M19.5 6.97559C19.5 6.97559 20.2013 7.63777 20.2782 7.71877C20.4312 7.87991 20.6368 8.10879 20.8442 8.37811C21.05 8.64528 21.2687 8.96664 21.4387 9.31254C21.6052 9.65136 21.75 10.0638 21.75 10.4999C21.75 11.2365 21.4912 11.8361 21.0145 12.2378C20.5599 12.6207 19.9947 12.7499 19.5 12.7499C19.0053 12.7499 18.4401 12.6207 17.9855 12.2378C17.5088 11.8361 17.25 11.2365 17.25 10.4999C17.25 10.0638 17.3948 9.65136 17.5613 9.31254C17.7313 8.96664 17.95 8.64528 18.1558 8.37811C18.3632 8.10879 18.5688 7.87991 18.7218 7.71877C18.7987 7.63777 19.5 6.97559 19.5 6.97559Z',
  d27: 'M7.70413 8.25C5.22208 8.25 3.15848 10.161 2.96812 12.6357L2.25221 21.9425C2.23619 22.1508 2.30777 22.3563 2.44971 22.5096C2.59165 22.6629 2.79109 22.75 3 22.75H16C16.2089 22.75 16.4084 22.6629 16.5503 22.5096C16.6922 22.3563 16.7638 22.1508 16.7478 21.9425L16.0319 12.6357C15.8415 10.161 13.7779 8.25 11.2959 8.25H7.70413ZM8.5 13V15H6.5V17H8.5V19H10.5V17H12.5V15H10.5V13H8.5Z',
};

export const IconHandSanitizerStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-sanitizer-stroke-rounded IconHandSanitizerStrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHandSanitizerDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-sanitizer-duotone-rounded IconHandSanitizerDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHandSanitizerTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-sanitizer-twotone-rounded IconHandSanitizerTwotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHandSanitizerSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-sanitizer-solid-rounded IconHandSanitizerSolidRounded"
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
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHandSanitizerBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-sanitizer-bulk-rounded IconHandSanitizerBulkRounded"
    >
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
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHandSanitizerStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-sanitizer-stroke-sharp IconHandSanitizerStrokeSharp"
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
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d22} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconHandSanitizerSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-sanitizer-solid-sharp IconHandSanitizerSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d27} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfHandSanitizer: TheIconSelfPack = {
  name: 'HandSanitizer',
  StrokeRounded: IconHandSanitizerStrokeRounded,
  DuotoneRounded: IconHandSanitizerDuotoneRounded,
  TwotoneRounded: IconHandSanitizerTwotoneRounded,
  SolidRounded: IconHandSanitizerSolidRounded,
  BulkRounded: IconHandSanitizerBulkRounded,
  StrokeSharp: IconHandSanitizerStrokeSharp,
  SolidSharp: IconHandSanitizerSolidSharp,
};