import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2 14.1669C2 17.3886 4.68629 20.0002 8 20.0002C11.3137 20.0002 14 17.3886 14 14.1669C14 12.1875 12.986 10.4384 11.4354 9.3838C11.1261 9.17343 11 8.99824 11 8.61186C11 7.80902 11 7.40761 10.8671 7.09027C10.4148 6.01029 9.33985 6.00024 8.31377 6.00024H7.68623C6.66015 6.00024 5.58523 6.01029 5.13291 7.09027C5 7.40761 5 7.80902 5 8.61186C5 8.97963 4.88397 9.16656 4.56458 9.3838C3.01403 10.4384 2 12.1875 2 14.1669Z',
  d2: 'M14.5101 8.06642C14.8836 8.00151 15.289 8 15.6871 8H16.3146C17.3407 8 18.4156 8.01005 18.868 9.09003C19.0009 9.40737 19.0009 9.80878 19.0009 10.6116C19.0009 10.998 19.127 11.1732 19.4363 11.3836C20.9868 12.4382 22.0009 14.1873 22.0009 16.1667C22.0009 19.3883 19.3146 22 16.0009 22C15.0054 22 14.0666 21.7643 13.2402 21.3472',
  d3: 'M16.1152 17.9971C17.166 17.9372 17.9997 17.0661 17.9997 16.0003C17.9997 15.2598 17.5973 14.6133 16.9992 14.2676',
  d4: 'M16 9V6.93331C16 5.28173 16 4.45594 15.5764 3.85855C15.1528 3.26117 14.4253 3.06089 12.9701 2.66032L12.8507 2.62744C10.677 2.02907 9.59021 1.72989 8.83911 2.31943C8.79173 2.35662 8.74584 2.39607 8.70159 2.43766C8 3.09705 8 4.33061 8 6.79775',
  d5: 'M8 20C4.68629 20 2 17.3883 2 14.1667C2 12.1873 3.01403 10.4382 4.56458 9.38356C4.88397 9.16632 5 8.97939 5 8.61161C5 7.80878 5 7.40737 5.13291 7.09003C5.58523 6.01005 6.66015 6 7.68623 6H8.31377C9.33985 6 10.4148 6.01005 10.8671 7.09003C11 7.40737 11 7.80878 11 8.61161C11 8.998 11.1261 9.17319 11.4354 9.38356C12.986 10.4382 14 12.1873 14 14.1667C14 17.3883 11.3137 20 8 20ZM8 16C9.10457 16 10 15.1046 10 14C10 12.8954 9.10457 12 8 12C6.89543 12 6 12.8954 6 14C6 15.1046 6.89543 16 8 16Z',
  d6: 'M14.5101 8.06642C14.8836 8.00151 15.289 8 15.6871 8H16.3146C17.3407 8 18.4156 8.01005 18.868 9.09003C19.0009 9.40736 19.0009 9.80879 19.0009 10.6116C19.0009 10.998 19.127 11.1732 19.4363 11.3836C20.9868 12.4382 22.0009 14.1873 22.0009 16.1667C22.0009 19.3883 19.3146 22 16.0009 22C15.0054 22 14.0666 21.7643 13.2402 21.3472M16 9V6.93331C16 5.28173 16 4.45594 15.5764 3.85855C15.1528 3.26117 14.4253 3.06089 12.9701 2.66032L12.8507 2.62744C10.677 2.02907 9.59021 1.72989 8.83911 2.31943C8.79173 2.35662 8.74584 2.39607 8.70159 2.43766C8 3.09705 8 4.33061 8 6.79775',
  d7: 'M10.0232 5.42217C9.45453 5.24975 8.82598 5.24982 8.34013 5.24988L7.65988 5.24988C7.17402 5.24982 6.54547 5.24975 5.9768 5.42217C5.34377 5.6141 4.76666 6.02293 4.44113 6.80018C4.32975 7.06612 4.2877 7.3377 4.2684 7.61693C4.24998 7.88336 4.24999 8.20639 4.25 8.58661V8.58662V8.58663C4.24998 8.68864 4.17851 8.74691 4.14278 8.76329C2.4006 9.94825 1.25 11.9228 1.25 14.1665C1.25 17.8222 4.29213 20.7499 8 20.7499C11.7079 20.7499 14.75 17.8222 14.75 14.1665C14.75 11.9228 13.5994 9.94825 11.8572 8.76329C11.8215 8.73936 11.75 8.67053 11.75 8.58661V8.58659V8.58657C11.75 8.20637 11.75 7.88335 11.7316 7.61693C11.7123 7.3377 11.6702 7.06612 11.5589 6.80018C11.2333 6.02293 10.6562 5.6141 10.0232 5.42217ZM8 16.4999C9.38071 16.4999 10.5 15.3806 10.5 13.9999C10.5 12.6192 9.38071 11.4999 8 11.4999C6.61929 11.4999 5.5 12.6192 5.5 13.9999C5.5 15.3806 6.61929 16.4999 8 16.4999Z',
  d8: 'M18.0238 7.42217C17.4552 7.24975 16.8266 7.24982 16.3408 7.24988H15.6605C15.1747 7.24982 14.5461 7.24975 13.9774 7.42217C13.7436 7.49308 13.5173 7.5936 13.3086 7.73138C13.2665 7.75913 13.2431 7.80689 13.2445 7.85727C13.2457 7.90142 13.2661 7.94328 13.3002 7.97133C14.8081 9.21122 15.8696 10.9826 16.1664 13.0073C16.2006 13.24 16.2176 13.3563 16.2747 13.4225C16.3319 13.4886 16.4611 13.5274 16.7197 13.6049C17.7498 13.9138 18.5004 14.8692 18.5004 15.9999C18.5004 17.3806 17.3811 18.4999 16.0004 18.4999C15.8514 18.4999 15.7055 18.4868 15.5636 18.4618C15.2984 18.4151 15.1658 18.3918 15.0852 18.425C15.0046 18.4583 14.9371 18.5542 14.8022 18.7459C14.1582 19.6609 13.3273 20.4368 12.3672 21.0241C12.1164 21.1775 11.991 21.2542 11.9902 21.3653C11.9894 21.4765 12.1043 21.549 12.3339 21.6942C13.3919 22.3627 14.6523 22.7499 16.0006 22.7499C19.7085 22.7499 22.7506 19.8222 22.7506 16.1665C22.7506 13.9228 21.6 11.9482 19.8579 10.7633C19.8221 10.7394 19.7507 10.6705 19.7506 10.5866C19.7506 10.2064 19.7507 9.88335 19.7322 9.61693C19.7129 9.3377 19.6709 9.06612 19.5595 8.80018C19.234 8.02293 18.6569 7.6141 18.0238 7.42217Z',
  d9: 'M13.2177 1.92202C13.8629 2.09855 14.4319 2.25422 14.8848 2.44312C15.3803 2.64975 15.825 2.92976 16.1628 3.40332C16.4945 3.86847 16.6251 4.38352 16.6844 4.92628C16.7403 5.43809 16.7403 6.06639 16.7402 6.80387V6.80388L16.7402 8.80553C16.7402 9.32715 16.3149 9.75 15.7902 9.75C15.2656 9.75 14.8402 9.32715 14.8402 8.80553V6.85361C14.8402 6.05276 14.8389 5.52791 14.7955 5.13021C14.7542 4.75199 14.6835 4.59497 14.6129 4.49591C14.5482 4.40526 14.4462 4.30858 14.1498 4.185C13.8235 4.04891 13.3747 3.9242 12.6597 3.72852C12.6597 3.72852 10.7911 3.21979 10.2738 3.15853C9.78702 3.1009 9.6489 3.18042 9.57394 3.23891C9.55127 3.2566 9.52904 3.27558 9.50735 3.29585C9.41279 3.3842 9.28898 3.56669 9.21616 4.14389C9.14202 4.7316 9.14024 5.53483 9.14024 6.72559C9.14024 7.2472 8.71491 7.67005 8.19024 7.67005C7.66557 7.67005 7.24024 7.2472 7.24024 6.72559C7.2402 5.61454 7.24018 4.62821 7.33094 3.90881C7.42474 3.16525 7.63419 2.45383 8.20614 1.91942C8.26853 1.86111 8.33348 1.80558 8.40083 1.75302C9.03943 1.25471 9.77433 1.19712 10.4985 1.28285C11.1756 1.36302 12.2459 1.65599 13.2177 1.92202L13.2177 1.92202Z',
  d10: 'M8.34013 5.24988C8.82598 5.24982 9.45453 5.24975 10.0232 5.42217C10.6562 5.6141 11.2333 6.02293 11.5589 6.80018C11.6702 7.06612 11.7123 7.3377 11.7316 7.61693C11.75 7.88336 11.75 8.20638 11.75 8.58659V8.58661C11.75 8.67053 11.8215 8.73936 11.8572 8.76329C13.5994 9.94825 14.75 11.9228 14.75 14.1665C14.75 17.8222 11.7079 20.7499 8 20.7499C4.29213 20.7499 1.25 17.8222 1.25 14.1665C1.25 11.9228 2.4006 9.94825 4.14278 8.76329C4.17851 8.74691 4.24998 8.68864 4.25 8.58663V8.58662C4.24999 8.2064 4.24998 7.88337 4.2684 7.61693C4.2877 7.3377 4.32975 7.06612 4.44113 6.80018C4.76666 6.02293 5.34377 5.6141 5.9768 5.42217C6.54547 5.24975 7.17402 5.24982 7.65988 5.24988L8.34013 5.24988Z',
  d11: 'M18.0238 7.42229C17.4552 7.24987 16.8266 7.24994 16.3408 7.25H15.6605C15.1747 7.24994 14.5461 7.24987 13.9774 7.42229C13.7436 7.4932 13.5173 7.59373 13.3086 7.7315C13.2665 7.75926 13.2431 7.80701 13.2445 7.85739C13.2457 7.90154 13.2661 7.9434 13.3002 7.97145C14.8081 9.21134 15.8696 10.9827 16.1664 13.0074C16.2006 13.2401 16.2176 13.3564 16.2747 13.4226C16.3319 13.4887 16.4611 13.5275 16.7197 13.605C17.7498 13.9139 18.5004 14.8693 18.5004 16C18.5004 17.3807 17.3811 18.5 16.0004 18.5C15.8514 18.5 15.7055 18.487 15.5636 18.462C15.2984 18.4152 15.1658 18.3919 15.0852 18.4252C15.0046 18.4585 14.9371 18.5543 14.8022 18.746C14.1582 19.661 13.3273 20.4369 12.3672 21.0242C12.1164 21.1776 11.991 21.2543 11.9902 21.3655C11.9894 21.4766 12.1043 21.5492 12.3339 21.6943C13.3919 22.3628 14.6523 22.75 16.0006 22.75C19.7085 22.75 22.7506 19.8223 22.7506 16.1667C22.7506 13.9229 21.6 11.9484 19.8579 10.7634C19.8221 10.7395 19.7507 10.6707 19.7506 10.5867C19.7506 10.2065 19.7507 9.88348 19.7322 9.61705C19.7129 9.33782 19.6709 9.06624 19.5595 8.8003C19.234 8.02306 18.6569 7.61422 18.0238 7.42229Z',
  d12: 'M7.984 15.9835C9.08566 15.9835 9.97873 15.0891 9.97873 13.9859C9.97873 12.8826 9.08566 11.9883 7.984 11.9883C6.88233 11.9883 5.98926 12.8826 5.98926 13.9859C5.98926 15.0891 6.88233 15.9835 7.984 15.9835Z',
  d13: 'M15.9629 17.9805C17.0646 17.9805 17.9576 17.0862 17.9576 15.9829C17.9576 14.8797 17.0646 13.9854 15.9629 13.9854',
  d14: 'M15.9634 9.99019V3.99759L7.98633 2L7.98815 7.99276',
  d15: 'M7.98563 19.9976C11.3011 19.9976 13.9888 17.306 13.9888 13.9858C13.9888 11.7136 12.8482 9.8426 10.9909 8.82042V6.06875C10.9909 6.01359 10.9463 5.96887 10.8912 5.96887H5.08437C5.02929 5.96887 4.98464 6.01359 4.98464 6.06875V8.82042C3.12735 9.8426 1.98242 11.7136 1.98242 13.9858C1.98242 17.306 4.67015 19.9976 7.98563 19.9976Z',
  d16: 'M13.9702 7.9707H18.8874C18.9425 7.9707 18.9872 8.01542 18.9872 8.07058V10.8223C20.8444 11.8444 21.9851 13.7154 21.9851 15.9876C21.9851 19.3078 19.2974 21.9994 15.9819 21.9994C14.8925 21.9994 13.871 21.7088 12.9902 21.2009',
  d17: 'M7.61338 1.44999C7.84403 1.27094 8.14481 1.20753 8.42872 1.2781L16.0284 3.16702C16.4513 3.27215 16.748 3.6499 16.748 4.08327V8.74988H14.8477V4.82064L9.14876 3.40415L9.15013 7.86082L7.24978 7.8614L7.24805 2.19463C7.24796 1.90374 7.38273 1.62904 7.61338 1.44999Z',
  d18: 'M4.99902 5.24988C4.58481 5.24988 4.24902 5.58566 4.24902 5.99988V8.38665C2.44138 9.59657 1.24902 11.6586 1.24902 13.9999C1.24902 17.7278 4.2711 20.7499 7.99902 20.7499C11.7269 20.7499 14.749 17.7278 14.749 13.9999C14.749 11.6586 13.5567 9.59657 11.749 8.38665V5.99988C11.749 5.58566 11.4132 5.24988 10.999 5.24988H4.99902ZM7.99902 11.2499C6.48024 11.2499 5.24902 12.4811 5.24902 13.9999C5.24902 15.5187 6.48024 16.7499 7.99902 16.7499C9.51781 16.7499 10.749 15.5187 10.749 13.9999C10.749 12.4811 9.51781 11.2499 7.99902 11.2499Z',
  d19: 'M11.8311 21.3087C12.9789 22.2115 14.4268 22.75 16.0005 22.75C19.7284 22.75 22.7505 19.7279 22.7505 16C22.7505 13.6587 21.5581 11.5967 19.7505 10.3868V8C19.7505 7.58579 19.4147 7.25 19.0005 7.25H13.2505V7.63599C14.9011 8.99931 16.0159 10.9969 16.2176 13.2584C17.6349 13.3691 18.7505 14.5543 18.7505 16C18.7505 17.5188 17.5193 18.75 16.0005 18.75C15.61 18.75 15.2385 18.6686 14.902 18.5218C14.1339 19.6918 13.0763 20.6547 11.8311 21.3087Z',
};

export const IconHandcuffsStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="handcuffs-stroke-rounded IconHandcuffsStrokeRounded"
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
      <circle 
        cx="8" 
        cy="14.0002" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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
    </TheIconWrapper>
  );
};

export const IconHandcuffsDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="handcuffs-duotone-rounded IconHandcuffsDuotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="16" 
        cy="16" 
        r="2" 
        fill="var(--icon-fill)"></circle>
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
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <circle 
        cx="8" 
        cy="14" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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
    </TheIconWrapper>
  );
};

export const IconHandcuffsTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="handcuffs-twotone-rounded IconHandcuffsTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="8" 
        cy="14.0002" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHandcuffsSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="handcuffs-solid-rounded IconHandcuffsSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHandcuffsBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="handcuffs-bulk-rounded IconHandcuffsBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <circle 
        cx="8" 
        cy="13.9999" 
        r="2.5" 
        fill="var(--icon-fill)"></circle>
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHandcuffsStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="handcuffs-stroke-sharp IconHandcuffsStrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconHandcuffsSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="handcuffs-solid-sharp IconHandcuffsSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfHandcuffs: TheIconSelfPack = {
  name: 'Handcuffs',
  StrokeRounded: IconHandcuffsStrokeRounded,
  DuotoneRounded: IconHandcuffsDuotoneRounded,
  TwotoneRounded: IconHandcuffsTwotoneRounded,
  SolidRounded: IconHandcuffsSolidRounded,
  BulkRounded: IconHandcuffsBulkRounded,
  StrokeSharp: IconHandcuffsStrokeSharp,
  SolidSharp: IconHandcuffsSolidSharp,
};