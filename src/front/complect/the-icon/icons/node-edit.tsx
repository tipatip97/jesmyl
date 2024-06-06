import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M13 19.5H12C9.17157 19.5 7.75736 19.5 6.87868 18.6213C6 17.7426 6 16.3284 6 13.5V11.5M6 11.5V8M6 11.5H11.5',
  d2: 'M13 19.5C13 18.3215 13 17.7322 13.3515 17.3661C13.7029 17 14.2686 17 15.4 17H16.6C17.7314 17 18.2971 17 18.6485 17.3661C19 17.7322 19 18.3215 19 19.5C19 20.6785 19 21.2678 18.6485 21.6339C18.2971 22 17.7314 22 16.6 22H15.4C14.2686 22 13.7029 22 13.3515 21.6339C13 21.2678 13 20.6785 13 19.5Z',
  d3: 'M4.28571 2H7.71429C9.7888 2 10 3.10993 10 5C10 6.89007 9.7888 8 7.71429 8H4.28571C2.2112 8 2 6.89007 2 5C2 3.10993 2.2112 2 4.28571 2Z',
  d4: 'M21.0058 5.38441L21.614 5.99021C22.1286 6.50276 22.1286 7.33376 21.6141 7.84631L18.4275 11.0799C18.1768 11.3296 17.8561 11.4979 17.5077 11.5627L15.5327 11.9898C15.2209 12.0572 14.9432 11.7814 15.01 11.4706L15.4304 9.5148C15.4955 9.1677 15.6645 8.84834 15.9151 8.59867L19.1423 5.38441C19.6569 4.87186 20.4912 4.87186 21.0058 5.38441Z',
  d5: 'M4.28571 2H7.71429C9.78881 2 10 3.10993 10 5C10 6.89007 9.78881 8 7.71429 8H4.28571C2.2112 8 2 6.89007 2 5C2 3.10993 2.2112 2 4.28571 2Z',
  d6: 'M13 19.5H12C9.17157 19.5 7.75736 19.5 6.87868 18.6213C6 17.7426 6 16.3284 6 13.5V11.5M6 8V11.5M6 11.5H11.5',
  d7: 'M16.1793 11.8738L16.0224 11.1403H16.0224L16.1793 11.8738ZM15.1262 10.8207L15.8597 10.9776L15.1262 10.8207ZM15.8931 8.59775L15.3628 8.06742H15.3628L15.8931 8.59775ZM21.8217 6.29263L22.4712 5.91763L21.8217 6.29263ZM21.8217 7.62331L22.4712 7.99831L21.8217 7.62331ZM20.7074 5.17828L21.0824 4.52876V4.52876L20.7074 5.17828ZM18.7874 5.70339L19.3178 6.23372L18.7874 5.70339ZM19.3767 5.17828L19.0017 4.52876V4.52876L19.3767 5.17828ZM20.7663 7.68222L17.8719 10.5766L18.9326 11.6372L21.8269 8.74288L20.7663 7.68222ZM16.4234 9.12808L19.3178 6.23372L18.2571 5.17306L15.3628 8.06742L16.4234 9.12808ZM16.0224 11.1403C15.8685 11.1732 15.7472 11.1991 15.6433 11.2184C15.5383 11.238 15.4729 11.2465 15.4312 11.2492C15.388 11.2519 15.4022 11.2459 15.4456 11.2571C15.5015 11.2715 15.5728 11.3058 15.6335 11.3665L14.5728 12.4272C14.8844 12.7388 15.272 12.7623 15.5264 12.7461C15.7673 12.7308 16.0586 12.6665 16.3361 12.6072L16.0224 11.1403ZM14.3928 10.6639C14.3335 10.9414 14.2692 11.2327 14.2539 11.4736C14.2377 11.728 14.2612 12.1156 14.5728 12.4272L15.6335 11.3665C15.6942 11.4272 15.7285 11.4985 15.7429 11.5544C15.7541 11.5978 15.7481 11.612 15.7508 11.5688C15.7535 11.5271 15.762 11.4617 15.7816 11.3567C15.8009 11.2528 15.8268 11.1315 15.8597 10.9776L14.3928 10.6639ZM20.7663 6.23372C21.0921 6.55955 21.1464 6.62298 21.1722 6.66763L22.4712 5.91763C22.3218 5.65885 22.0845 5.4306 21.8269 5.17306L20.7663 6.23372ZM21.8269 8.74288C22.0845 8.48535 22.3218 8.2571 22.4712 7.99831L21.1722 7.24831C21.1464 7.29297 21.0921 7.3564 20.7663 7.68222L21.8269 8.74288ZM21.1722 6.66763C21.2759 6.8473 21.2759 7.06865 21.1722 7.24831L22.4712 7.99831C22.8429 7.35455 22.8429 6.5614 22.4712 5.91763L21.1722 6.66763ZM21.8269 5.17306C21.5694 4.91553 21.3412 4.67817 21.0824 4.52876L20.3324 5.8278C20.377 5.85358 20.4405 5.9079 20.7663 6.23372L21.8269 5.17306ZM19.3178 6.23372C19.6436 5.9079 19.707 5.85358 19.7517 5.8278L19.0017 4.52876C18.7429 4.67817 18.5147 4.91553 18.2571 5.17306L19.3178 6.23372ZM21.0824 4.52876C20.4386 4.15708 19.6455 4.15708 19.0017 4.52876L19.7517 5.8278C19.9313 5.72407 20.1527 5.72407 20.3324 5.8278L21.0824 4.52876ZM17.8719 10.5766C17.7177 10.7308 17.5023 10.8357 17.1779 10.9186C17.0153 10.9601 16.8409 10.9924 16.6433 11.0266C16.4545 11.0592 16.2342 11.095 16.0224 11.1403L16.3361 12.6072C16.5103 12.5699 16.6886 12.5409 16.8987 12.5047C17.0999 12.4699 17.3246 12.4292 17.549 12.372C17.9985 12.2572 18.5086 12.0613 18.9326 11.6372L17.8719 10.5766ZM15.8597 10.9776C15.905 10.7658 15.9408 10.5455 15.9734 10.3567C16.0076 10.1591 16.0399 9.98467 16.0814 9.8221C16.1643 9.49768 16.2692 9.28231 16.4234 9.12808L15.3628 8.06742C14.9387 8.49143 14.7428 9.00154 14.628 9.45104C14.5708 9.67544 14.5301 9.90012 14.4953 10.1013C14.4591 10.3114 14.4301 10.4897 14.3928 10.6639L15.8597 10.9776Z',
  d8: 'M6 7C6.55229 7 7 7.44772 7 8V10.5H11.5C12.0523 10.5 12.5 10.9477 12.5 11.5C12.5 12.0523 12.0523 12.5 11.5 12.5H7V13.5C7 14.9425 7.00213 15.9237 7.10092 16.6586C7.19585 17.3646 7.36322 17.6916 7.58579 17.9142C7.80836 18.1368 8.13538 18.3042 8.84143 18.3991C9.57625 18.4979 10.5575 18.5 12 18.5H13C13.5523 18.5 14 18.9477 14 19.5C14 20.0523 13.5523 20.5 13 20.5L11.9294 20.5C10.5753 20.5 9.4587 20.5001 8.57494 20.3812C7.64711 20.2565 6.82768 19.9845 6.17158 19.3284C5.51547 18.6723 5.2435 17.8529 5.11875 16.9251C4.99994 16.0413 4.99997 14.9247 5 13.5706L5 8C5 7.44772 5.44772 7 6 7Z',
  d9: 'M15.3516 16.25L15.4 16.25H16.6L16.6484 16.25C17.1725 16.25 17.6415 16.2499 18.0208 16.303C18.4364 16.3612 18.8527 16.4958 19.1896 16.8467C19.5224 17.1934 19.6459 17.6143 19.6999 18.0324C19.7501 18.4212 19.75 18.9042 19.75 19.454V19.546C19.75 20.0958 19.7501 20.5788 19.6999 20.9676C19.6459 21.3857 19.5224 21.8066 19.1896 22.1533C18.8527 22.5042 18.4364 22.6388 18.0208 22.697C17.6415 22.7501 17.1725 22.7501 16.6484 22.75L16.6 22.75H15.4L15.3516 22.75C14.8275 22.7501 14.3585 22.7501 13.9793 22.697C13.5636 22.6388 13.1473 22.5042 12.8104 22.1533C12.4777 21.8066 12.3541 21.3857 12.3001 20.9676C12.2499 20.5788 12.25 20.0958 12.25 19.546L12.25 19.5L12.25 19.454C12.25 18.9042 12.2499 18.4212 12.3001 18.0324C12.3541 17.6143 12.4777 17.1934 12.8104 16.8467C13.1473 16.4958 13.5636 16.3612 13.9793 16.303C14.3585 16.2499 14.8275 16.25 15.3516 16.25L15.3516 16.25Z',
  d10: 'M1.72393 2.40181C2.22979 1.56916 3.12113 1.25 4.28571 1.25H7.71429C8.87887 1.25 9.77021 1.56916 10.2761 2.40181C10.7139 3.12249 10.75 4.08766 10.75 5C10.75 5.91234 10.7139 6.87751 10.2761 7.59819C9.77021 8.43084 8.87887 8.75 7.71429 8.75H4.28571C3.12113 8.75 2.22979 8.43084 1.72393 7.59819C1.2861 6.87751 1.25 5.91234 1.25 5C1.25 4.08766 1.2861 3.12249 1.72393 2.40181Z',
  d11: 'M19.0016 4.52876C19.6454 4.15708 20.4385 4.15708 21.0823 4.52876C21.3225 4.66742 21.5915 4.93706 21.8269 5.17306C22.0629 5.40846 22.3325 5.67746 22.4712 5.91763C22.8428 6.5614 22.8428 7.35455 22.4712 7.99831C22.3325 8.23849 22.1181 8.45236 21.8821 8.68775L21.8821 8.68776L18.9325 11.6372C18.5085 12.0613 17.9984 12.2572 17.5489 12.372C17.3245 12.4292 17.0998 12.4699 16.8986 12.5047C16.6339 12.5614 15.7551 12.7316 15.5263 12.7461C15.2719 12.7623 14.8844 12.7388 14.5728 12.4272C14.2611 12.1156 14.2376 11.728 14.2538 11.4736C14.2683 11.2448 14.4386 10.3661 14.4953 10.1013C14.53 9.90012 14.5707 9.67544 14.628 9.45104C14.7427 9.00154 14.9387 8.49143 15.3627 8.06742L18.3122 5.11785C18.5476 4.88185 18.7614 4.66742 19.0016 4.52876Z',
  d12: 'M5 8.75L5 13.5706C4.99997 14.9247 4.99994 16.0413 5.11876 16.9251C5.2435 17.8529 5.51547 18.6723 6.17158 19.3284C6.82769 19.9845 7.64711 20.2565 8.57494 20.3812C9.4587 20.5001 10.5753 20.5 11.9294 20.5L12.2625 20.5C12.25 20.2132 12.25 19.8929 12.25 19.546V19.454C12.25 19.1071 12.25 18.7868 12.2625 18.5H12C10.5575 18.5 9.57626 18.4979 8.84144 18.3991C8.13538 18.3042 7.80836 18.1368 7.58579 17.9142C7.36322 17.6916 7.19585 17.3646 7.10092 16.6586C7.00213 15.9237 7 14.9425 7 13.5V12.5H11.5C12.0523 12.5 12.5 12.0523 12.5 11.5C12.5 10.9477 12.0523 10.5 11.5 10.5H7V8.75H5Z',
  d13: 'M18.9897 22V17H12.9932V22H18.9897Z',
  d14: 'M12.994 19.5H5.99805V11.5M5.99805 11.5V8M5.99805 11.5H12.4943',
  d15: 'M9.99538 8V2H2V8H9.99538Z',
  d16: 'M19.7647 5.02559L14.9855 9.78428L14.9854 12H17.1563L21.9695 7.21884C22.0039 7.18468 22.0039 7.1292 21.9695 7.09502L19.8888 5.02556C19.8545 4.99147 19.799 4.99148 19.7647 5.02559Z',
  d17: 'M12.25 17C12.25 16.5858 12.5858 16.25 13 16.25H19C19.4142 16.25 19.75 16.5858 19.75 17V22C19.75 22.4142 19.4142 22.75 19 22.75H13C12.5858 22.75 12.25 22.4142 12.25 22V17Z',
  d18: 'M19.2822 4.46967C19.5751 4.17678 20.0499 4.17678 20.3428 4.46967L22.5303 6.65717C22.8232 6.95006 22.8232 7.42494 22.5303 7.71783L17.4982 12.75H14.25V9.50184L19.2822 4.46967Z',
  d19: 'M5 8H7V10.5H12.5V12.5H7V18.5H13V20.5H6C5.44772 20.5 5 20.0523 5 19.5V8Z',
  d20: 'M1.25 2C1.25 1.58579 1.58579 1.25 2 1.25H10C10.4142 1.25 10.75 1.58579 10.75 2V8C10.75 8.41421 10.4142 8.75 10 8.75H2C1.58579 8.75 1.25 8.41421 1.25 8V2Z',
};

export const IconNodeEditStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="node-edit-stroke-rounded IconNodeEditStrokeRounded"
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

export const IconNodeEditDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="node-edit-duotone-rounded IconNodeEditDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
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
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconNodeEditTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="node-edit-twotone-rounded IconNodeEditTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconNodeEditSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="node-edit-solid-rounded IconNodeEditSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconNodeEditBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="node-edit-bulk-rounded IconNodeEditBulkRounded"
    >
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
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconNodeEditStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="node-edit-stroke-sharp IconNodeEditStrokeSharp"
    >
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconNodeEditSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="node-edit-solid-sharp IconNodeEditSolidSharp"
    >
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfNodeEdit: TheIconSelfPack = {
  name: 'NodeEdit',
  StrokeRounded: IconNodeEditStrokeRounded,
  DuotoneRounded: IconNodeEditDuotoneRounded,
  TwotoneRounded: IconNodeEditTwotoneRounded,
  SolidRounded: IconNodeEditSolidRounded,
  BulkRounded: IconNodeEditBulkRounded,
  StrokeSharp: IconNodeEditStrokeSharp,
  SolidSharp: IconNodeEditSolidSharp,
};