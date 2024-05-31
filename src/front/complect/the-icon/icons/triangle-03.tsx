import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M3 17.3362V7.10375C3 5.22156 3 4.28046 3.56858 4.04626C4.13717 3.81205 4.80633 4.47751 6.14468 5.80841L18.2764 17.8728C19.6148 19.2037 20.2839 19.8692 20.0484 20.4346C19.8129 21 18.8665 21 16.9739 21H6.68422C4.94747 21 4.07908 21 3.53955 20.4635C3 19.9269 3 19.0634 3 17.3362Z',
  d2: 'M20.9159 12.8369L17.4805 9.41992M20.9159 12.8369C21.078 12.6771 20.9581 11.3526 20.9461 10.5133M20.9159 12.8369C20.7539 12.9966 19.9987 12.8893 18.6077 12.8184',
  d3: 'M11.129 3.08307L14.5645 6.5M11.129 3.08307C10.967 3.24282 11.0868 4.56733 11.0988 5.40659M11.129 3.08307C11.2911 2.92332 12.0462 3.03064 13.4372 3.10157',
  d4: 'M20.9096 3.08363L17.4736 6.5M20.9096 3.08363C20.749 2.92247 19.4171 3.04169 18.5731 3.05362M20.9096 3.08363C21.0703 3.24479 20.9624 3.99571 20.891 5.37903',
  d5: 'M3 17.3278V7.07258C3 5.1862 3 4.243 3.56613 4.00828C4.13226 3.77354 4.79855 4.44049 6.13112 5.77435L18.2106 17.8656C19.5432 19.1995 20.2095 19.8665 19.9749 20.4332C19.7404 20.9998 18.7981 20.9998 16.9136 20.9998H6.66834C4.93907 20.9998 4.07443 20.9998 3.53722 20.4621C3 19.9243 3 19.0589 3 17.3278Z',
  d6: 'M3 17.3278V7.07258C3 5.1862 3 4.243 3.56613 4.00828C4.13226 3.77354 4.79855 4.44049 6.13112 5.77435L18.2106 17.8656C19.5432 19.1995 20.2094 19.8665 19.9749 20.4332C19.7404 20.9998 18.7981 20.9998 16.9137 20.9998H6.66834C4.93907 20.9998 4.07443 20.9998 3.53722 20.4621C3 19.9243 3 19.0589 3 17.3278Z',
  d7: 'M20.9158 12.8587L17.4761 9.43408M20.9158 12.8587C21.0781 12.6985 20.958 11.3711 20.946 10.5299M20.9158 12.8587C20.7536 13.0187 19.9974 12.9112 18.6047 12.8401',
  d8: 'M11.1169 3.08326L14.5567 6.50781M11.1169 3.08326C10.9547 3.24336 11.0746 4.57083 11.0867 5.41196M11.1169 3.08326C11.2792 2.92315 12.0352 3.03071 13.428 3.1018',
  d9: 'M20.9095 3.08381L17.4692 6.5078M20.9095 3.08381C20.7487 2.9223 19.4152 3.04178 18.5701 3.05374M20.9095 3.08381C21.0704 3.24533 20.9624 3.99793 20.8909 5.38433',
  d10: 'M16.0817 9.40506C16.8463 9.40506 17.4661 8.78808 17.4661 8.02699C17.4661 7.26591 16.8463 6.64893 16.0817 6.64893C15.3171 6.64893 14.6973 7.26591 14.6973 8.02699C14.6973 8.78808 15.3171 9.40506 16.0817 9.40506Z',
  d11: 'M2.99902 17.3362V7.10375C2.99902 5.22156 2.99902 4.28046 3.56521 4.04626C4.13141 3.81205 4.79776 4.47751 6.13048 5.80841L18.2112 17.8728C19.5439 19.2037 20.2102 19.8692 19.9757 20.4346C19.7412 21 18.7988 21 16.9142 21H6.66776C4.9383 21 4.07357 21 3.5363 20.4635C2.99902 19.9269 2.99902 19.0634 2.99902 17.3362Z',
  d12: 'M20.9166 12.8369L17.4765 9.41992M20.9166 12.8369C21.0789 12.6771 20.9589 11.3526 20.9468 10.5133M20.9166 12.8369C20.7544 12.9966 19.9982 12.8893 18.6053 12.8184M11.1164 3.08307L14.5566 6.5M11.1164 3.08307C10.9542 3.24282 11.0742 4.56733 11.0862 5.40659M11.1164 3.08307C11.2787 2.92332 12.0349 3.03064 13.4277 3.10157M20.9103 3.08363L17.4696 6.5M20.9103 3.08363C20.7495 2.92247 19.4158 3.04169 18.5706 3.05362M20.9103 3.08363C21.0712 3.24479 20.9632 3.99571 20.8917 5.37903M17.4665 8.01514C17.4665 8.77453 16.8466 9.39014 16.0819 9.39014C15.3173 9.39014 14.6974 8.77453 14.6974 8.01514C14.6974 7.25575 15.3173 6.64014 16.0819 6.64014C16.8466 6.64014 17.4665 7.25575 17.4665 8.01514Z',
  d13: 'M21.613 5.52804C21.5804 5.94096 21.2192 6.24926 20.8063 6.21663C20.5777 6.19858 20.3812 6.07986 20.2569 5.90744L19.7002 5.35079L17.9219 7.11925C18.0449 7.38734 18.1135 7.6856 18.1135 7.99988C18.1135 8.31417 18.0449 8.61243 17.9219 8.88052L19.6933 10.6421L20.3355 10C20.4572 9.87834 20.6213 9.79775 20.8063 9.78313C21.2192 9.7505 21.5804 10.0588 21.613 10.4717L21.7163 11.7785L21.7163 11.7785C21.7372 12.0427 21.7585 12.3113 21.7461 12.5337C21.7322 12.7815 21.6714 13.12 21.3957 13.3957C21.12 13.6714 20.7815 13.7322 20.5337 13.7461C20.3112 13.7585 20.0426 13.7372 19.7784 13.7163H19.7784L18.4717 13.613C18.0588 13.5804 17.7505 13.2192 17.7831 12.8063C17.7978 12.621 17.8785 12.4568 18.0005 12.335L18.6327 11.7028L16.8539 9.93389C16.5927 10.0494 16.3038 10.1135 15.9999 10.1135C14.8326 10.1135 13.8862 9.16721 13.8862 7.99988C13.8862 7.70233 13.9477 7.41915 14.0587 7.16233L12.2829 5.36441L11.562 6.08531C11.4565 6.15862 11.3308 6.20579 11.1935 6.21663C10.7805 6.24926 10.4194 5.94096 10.3867 5.52804L10.2835 4.22133L10.2835 4.22133C10.2625 3.95714 10.2412 3.68853 10.2537 3.46607C10.2676 3.21827 10.3283 2.8798 10.6041 2.60407C10.8798 2.32835 11.2183 2.26759 11.4661 2.2537C11.6885 2.24124 11.9571 2.26254 12.2213 2.28348L13.528 2.38673C13.941 2.41936 14.2493 2.78055 14.2166 3.19348C14.1982 3.42664 14.075 3.62645 13.8969 3.75035L13.3435 4.30373L15.1032 6.08531C15.3754 5.95761 15.6793 5.88625 15.9999 5.88625C16.3038 5.88625 16.5927 5.95039 16.8539 6.06588L18.6396 4.29013L17.9219 3.57246C17.8443 3.46487 17.7943 3.33535 17.7831 3.19348C17.7505 2.78055 18.0588 2.41936 18.4717 2.38673L19.7784 2.28348C19.7784 2.28348 20.3112 2.24124 20.5337 2.2537C20.7815 2.26759 21.12 2.32835 21.3957 2.60407C21.6714 2.8798 21.7322 3.21827 21.7461 3.46607C21.7585 3.68852 21.7163 4.2213 21.7163 4.2213L21.613 5.52804Z',
  d14: 'M18.7649 17.3868C19.3937 18.0156 19.9234 18.5453 20.2589 18.9913C20.5843 19.4238 20.9298 20.0395 20.6467 20.723C20.3635 21.4065 19.6839 21.5976 19.148 21.6733C18.5954 21.7515 17.8463 21.7514 16.9571 21.7514H16.957H6.61251C5.79269 21.7514 5.10279 21.7515 4.55376 21.6777C3.97174 21.5994 3.43707 21.426 3.00622 20.9952C2.57537 20.5643 2.40201 20.0297 2.32376 19.4477C2.24994 18.8986 2.24997 18.2087 2.25 17.3889L2.25 7.04439V7.04434C2.24996 6.15509 2.24993 5.406 2.32807 4.85341C2.40385 4.31753 2.59488 3.63789 3.27842 3.35476C3.96195 3.07163 4.57761 3.41713 5.01012 3.74247C5.45612 4.07796 5.98579 4.60768 6.61458 5.23652L18.7649 17.3868Z',
  d15: 'M3 21.0002V3L21 21.0002H3Z',
  d16: 'M17.0244 9.06818L20.5672 12.5696M20.9933 10.0045L20.9933 12.9908L17.9927 12.9908M14.9168 6.98687L11.429 3.42989M13.9961 3.01424L11.0099 3.00244L10.998 6.00304M17.0438 6.97149L20.5672 3.42989M21.0047 6.00159L20.9795 3.01545L17.979 3.04084',
  d17: 'M17.3682 8C17.3682 8.75614 16.7552 9.36914 15.999 9.36914C15.2429 9.36914 14.6299 8.75614 14.6299 8C14.6299 7.24386 15.2429 6.63086 15.999 6.63086C16.7552 6.63086 17.3682 7.24386 17.3682 8Z',
  d18: 'M2.71299 2.30711C2.99325 2.19103 3.31584 2.25519 3.53033 2.46969L21.5303 20.4699C21.7448 20.6844 21.809 21.007 21.6929 21.2872C21.5768 21.5675 21.3033 21.7502 21 21.7502H3C2.58579 21.7502 2.25 21.4144 2.25 21.0002V3.00002C2.25 2.69667 2.43273 2.4232 2.71299 2.30711Z',
  d19: 'M14.749 2.25H9.74902V7.25H11.749V5.68442L13.7153 7.67394C13.6635 7.85718 13.6357 8.05053 13.6357 8.25035C13.6357 9.41768 14.582 10.364 15.7494 10.364C15.9561 10.364 16.1558 10.3343 16.3447 10.279L18.3259 12.25H16.749V14.25H21.7488L21.7498 9.25019L19.7498 9.24981L19.7495 10.8451L17.7692 8.87503C17.8302 8.6776 17.863 8.46781 17.863 8.25035C17.863 8.0327 17.8301 7.82272 17.769 7.62513L19.7495 5.65492L19.7498 7.25019L21.7498 7.24981L21.7488 2.25H16.7498V4.25H18.3259L16.3441 6.22154C16.1555 6.16633 15.9559 6.13672 15.7494 6.13672C15.5252 6.13672 15.3091 6.17162 15.1064 6.2363L13.1433 4.25H14.749V2.25Z',
} as const;

export const IconTriangle03StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="triangle-03-stroke-rounded IconTriangle03StrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <ellipse 
        cx="16.0878" 
        cy="8.01514" 
        rx="1.38268" 
        ry="1.375" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></ellipse>
    </TheIconWrapper>
  );
};

export const IconTriangle03DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="triangle-03-duotone-rounded IconTriangle03DuotoneRounded"
    >
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
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
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
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconTriangle03TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="triangle-03-twotone-rounded IconTriangle03TwotoneRounded"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTriangle03SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="triangle-03-solid-rounded IconTriangle03SolidRounded"
    >
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTriangle03BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="triangle-03-bulk-rounded IconTriangle03BulkRounded"
    >
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTriangle03StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="triangle-03-stroke-sharp IconTriangle03StrokeSharp"
    >
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
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTriangle03SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="triangle-03-solid-sharp IconTriangle03SolidSharp"
    >
      <path 
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

export const iconPackOfTriangle03: TheIconSelfPack = {
  name: 'Triangle03',
  StrokeRounded: IconTriangle03StrokeRounded,
  DuotoneRounded: IconTriangle03DuotoneRounded,
  TwotoneRounded: IconTriangle03TwotoneRounded,
  SolidRounded: IconTriangle03SolidRounded,
  BulkRounded: IconTriangle03BulkRounded,
  StrokeSharp: IconTriangle03StrokeSharp,
  SolidSharp: IconTriangle03SolidSharp,
};