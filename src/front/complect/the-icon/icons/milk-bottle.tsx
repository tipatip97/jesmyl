import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M14.7273 5C15.631 5 16.3636 4.32843 16.3636 3.5C16.3636 2.67157 15.631 2 14.7273 2H9.27273C8.36899 2 7.63636 2.67157 7.63636 3.5C7.63636 4.32843 8.36899 5 9.27273 5M15.2459 4.92311C16.8664 7.89408 18 10.3773 18 13.7771V18C18 21.3093 17.2465 22 13.6364 22H10.3636C6.75345 22 6 21.3093 6 18V13.7771C6 10.3773 7.10674 7.88562 8.72727 4.91465',
  d2: 'M6 12C6.57143 12.5 8.09206 12.4761 8.98433 12.2789C9.60646 12.1415 10.2768 12.3027 10.6984 12.7639L11.523 13.6658C11.9973 14.1846 12.7163 14.4309 13.4245 14.3173L14.4681 14.1499C15.0422 14.0578 15.6132 14.2904 16.004 14.7055C17.2226 16 18 16 18 16',
  d3: 'M10.3636 22H13.6364C17.2465 22 18 21.3093 18 18V15.8885L15 14L12.5 14.5L9.5 12L8 12.5L6.10674 12C6.03678 12.5678 6 13.1574 6 13.7771V18C6 21.3093 6.75345 22 10.3636 22Z',
  d4: 'M6.51463 11.4507C6.2976 11.3056 6.02072 11.2838 5.78365 11.3932C5.54657 11.5025 5.38341 11.7273 5.3529 11.9866C5.28527 12.5612 5.25 13.1555 5.25 13.7768V17.9997C5.25 19.6301 5.41237 20.9604 6.32121 21.7935C6.77629 22.2107 7.35333 22.4429 8.01071 22.5753C8.66304 22.7066 9.44635 22.7497 10.3636 22.7497H13.6364C14.5536 22.7497 15.337 22.7066 15.9893 22.5753C16.6467 22.4429 17.2237 22.2107 17.6788 21.7935C18.5876 20.9604 18.75 19.6301 18.75 17.9997L18.75 15.9997C18.75 15.8007 18.671 15.61 18.5303 15.4693C18.3808 15.3198 18.2164 15.29 18.0207 15.247C17.9834 15.2388 17.9004 15.2162 17.7762 15.1582C17.5284 15.0426 17.1047 14.7802 16.5501 14.1911C16.0126 13.6201 15.2011 13.2724 14.3493 13.409L13.3057 13.5764C12.8407 13.6511 12.3763 13.4873 12.0765 13.1594L11.252 12.2575C10.6181 11.5642 9.65774 11.3617 8.82252 11.5462C8.46496 11.6252 7.96589 11.6746 7.49114 11.6555C6.98396 11.635 6.65048 11.5416 6.51463 11.4507Z',
  d5: 'M14.7273 3C15.1624 3 15.3636 3.30398 15.3636 3.5C15.3636 3.64937 15.2468 3.86143 14.9986 3.9539C14.9147 3.97537 14.8299 4 14.7273 4C14.175 4 13.7273 4.44772 13.7273 5C13.7273 5.46078 14.0389 5.84878 14.4629 5.96469C14.5971 6.00137 14.6642 6.0197 14.6966 6.0457C14.7289 6.07169 14.752 6.1155 14.7982 6.20313C16.152 8.77212 17 10.9289 17 13.7771V18C17 19.687 16.777 20.2465 16.4963 20.5038C16.3568 20.6317 16.1167 20.7648 15.6438 20.8601C15.1642 20.9566 14.5193 21 13.6364 21H10.3636C9.48074 21 8.83583 20.9566 8.35618 20.8601C7.88328 20.7648 7.64319 20.6317 7.50372 20.5038C7.22303 20.2465 7 19.687 7 18V13.7771C7 10.9317 7.82529 8.76871 9.16683 6.21152C9.21441 6.12084 9.23819 6.0755 9.27187 6.04905C9.30554 6.0226 9.3754 6.00521 9.51511 5.97042C9.95028 5.86208 10.2727 5.4687 10.2727 5C10.2727 4.44772 9.82501 4 9.27273 4C9.16503 4 9.07681 3.97325 8.98994 3.94953C8.74962 3.85488 8.63636 3.64706 8.63636 3.5C8.63636 3.30398 8.83759 3 9.27273 3H14.7273ZM7.19464 5.66988C7.28902 5.48558 7.33621 5.39343 7.32934 5.30842C7.32247 5.22341 7.24918 5.12387 7.10261 4.92478C6.81168 4.5296 6.63636 4.04404 6.63636 3.5C6.63636 2.03916 7.90039 1 9.27273 1H14.7273C16.0996 1 17.3636 2.03916 17.3636 3.5C17.3636 4.05228 17.183 4.54429 16.8841 4.94266C16.734 5.14269 16.659 5.2427 16.6517 5.32854C16.6445 5.41439 16.6923 5.50749 16.7881 5.69371C18.0859 8.21792 19 10.6306 19 13.7771V18C19 19.6223 18.8463 21.0628 17.8477 21.9782C17.3476 22.4366 16.7224 22.683 16.0386 22.8207C15.3616 22.957 14.5586 23 13.6364 23H10.3636C9.44144 23 8.63835 22.957 7.96136 22.8207C7.27763 22.683 6.65245 22.4366 6.15228 21.9782C5.1537 21.0628 5 19.6223 5 18V13.7771C5 10.6268 5.89559 8.20653 7.19464 5.66988Z',
  d6: 'M10.5 5C10.5 5 8.89788 4.96992 8.72727 4.91465M8.72727 4.91465C8.09171 4.70873 7.63636 4.15311 7.63636 3.5C7.63636 2.67157 8.36899 2 9.27273 2H14.7273C15.631 2 16.3636 2.67157 16.3636 3.5C16.3636 4.16227 15.8954 4.7243 15.2459 4.92311M8.72727 4.91465C7.10674 7.88562 6 10.3773 6 13.7771V22H18V13.7771C18 10.3773 16.8664 7.89408 15.2459 4.92311M15.2459 4.92311C15.0829 4.97298 13.5 5 13.5 5',
  d7: 'M6 12L18 15',
  d8: 'M16.2601 5.22406C16.7714 4.82019 17.1136 4.21062 17.1136 3.5C17.1136 2.19726 15.9825 1.25 14.7273 1.25H9.27273C8.01754 1.25 6.88636 2.19726 6.88636 3.5C6.88636 4.20038 7.21908 4.8029 7.7182 5.20678C6.26533 7.94595 5.25 10.4471 5.25 13.7771V22C5.25 22.4142 5.58579 22.75 6 22.75H18C18.4142 22.75 18.75 22.4142 18.75 22V13.7771C18.75 10.4481 17.7115 7.95412 16.2601 5.22406ZM8.38555 3.5C8.38555 3.14588 8.71963 2.75 9.27192 2.75H14.7265C15.2788 2.75 15.6128 3.14588 15.6128 3.5C15.6128 3.77726 15.4198 4.0682 15.0655 4.19281L13.4864 4.25011L13.5121 5.74989L14.819 5.71147C16.2943 8.45974 17.2492 10.73 17.2492 13.7771V14.0394L6.94336 11.463C7.28884 9.47052 8.07623 7.71251 9.15076 5.70671L10.4851 5.74987L10.5123 4.25011L8.91657 4.18689C8.57231 4.0588 8.38555 3.77311 8.38555 3.5Z',
} as const;

export const IconMilkBottleStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="milk-bottle-stroke-rounded IconMilkBottleStrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMilkBottleDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="milk-bottle-duotone-rounded IconMilkBottleDuotoneRounded"
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
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMilkBottleTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="milk-bottle-twotone-rounded IconMilkBottleTwotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMilkBottleSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="milk-bottle-solid-rounded IconMilkBottleSolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMilkBottleBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="milk-bottle-bulk-rounded IconMilkBottleBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMilkBottleStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="milk-bottle-stroke-sharp IconMilkBottleStrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMilkBottleSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="milk-bottle-solid-sharp IconMilkBottleSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMilkBottle: TheIconSelfPack = {
  name: 'MilkBottle',
  StrokeRounded: IconMilkBottleStrokeRounded,
  DuotoneRounded: IconMilkBottleDuotoneRounded,
  TwotoneRounded: IconMilkBottleTwotoneRounded,
  SolidRounded: IconMilkBottleSolidRounded,
  BulkRounded: IconMilkBottleBulkRounded,
  StrokeSharp: IconMilkBottleStrokeSharp,
  SolidSharp: IconMilkBottleSolidSharp,
};