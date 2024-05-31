import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M14.9984 14C13.9731 14.8764 14.1962 16.4482 14.7712 17.487C15.3711 18.5704 15.7228 19.7991 15.3411 20.9591C15.138 21.5763 14.5053 22 13.7869 22H10.2247C9.52108 22 8.89821 21.5925 8.68423 20.9921C8.26479 19.8152 8.61255 18.555 9.21486 17.4437C9.76585 16.427 9.9953 14.8804 9.04299 14',
  d2: 'M8.5 14H15.5',
  d3: 'M14.5936 10H9.40637C7.51043 10 6.56247 10 6.16052 9.45157C5.75858 8.90313 6.14759 8.14046 6.92562 6.61512L8.31723 3.88683C8.78446 2.97081 9.01808 2.5128 9.46755 2.2564C9.91703 2 10.4863 2 11.6249 2H12.3751C13.5137 2 14.083 2 14.5324 2.2564C14.9819 2.5128 15.2155 2.97081 15.6828 3.88683L17.0744 6.61512C17.8524 8.14046 18.2414 8.90313 17.8395 9.45157C17.4375 10 16.4896 10 14.5936 10Z',
  d4: 'M12 10L12 14',
  d5: 'M9 19H15',
  d6: 'M10.2247 22H13.7869C14.5053 22 15.138 21.5763 15.3411 20.9591C15.7228 19.7991 15.3711 18.5704 14.7712 17.487C14.1962 16.4482 13.9731 14.8764 14.9984 14H9.04299C9.9953 14.8804 9.76585 16.427 9.21486 17.4437C8.61255 18.555 8.26479 19.8152 8.68423 20.9921C8.89821 21.5925 9.52108 22 10.2247 22Z',
  d7: 'M12.4089 1.25C12.9492 1.24999 13.4061 1.24997 13.7822 1.28535C14.1799 1.32274 14.5515 1.40395 14.9039 1.60494C15.2619 1.80918 15.5116 2.08651 15.7259 2.40997C15.9228 2.70695 16.1146 3.08309 16.3334 3.51207L16.3334 3.5121L17.7715 6.33156C18.1355 7.04515 18.4504 7.66235 18.6134 8.17067C18.7871 8.71234 18.8549 9.33462 18.4442 9.89492C18.0564 10.4241 17.4552 10.5991 16.8739 10.6751C16.3008 10.7501 15.5494 10.75 14.6476 10.75H9.35205C8.45021 10.75 7.69883 10.7501 7.12576 10.6751C6.54443 10.5991 5.94323 10.4241 5.5554 9.89492C5.14477 9.33462 5.21252 8.71234 5.38621 8.17067C5.54921 7.66235 5.86408 7.04516 6.22813 6.33157L6.25732 6.27434L7.64893 3.54605L7.66626 3.51207L7.66627 3.51206C7.88504 3.08308 8.07687 2.70695 8.27367 2.40996C8.48801 2.08651 8.7377 1.80918 9.09574 1.60494C9.44808 1.40395 9.81975 1.32274 10.2174 1.28535C10.5936 1.24997 11.0504 1.24999 11.5907 1.25H11.5907H12.4089H12.4089Z',
  d8: 'M12 9C12.5523 9 13 9.44772 13 10L13 14C13 14.5523 12.5523 15 12 15C11.4477 15 11 14.5523 11 14L11 10C11 9.44772 11.4477 9 12 9Z',
  d9: 'M8.50049 13.25C8.08627 13.25 7.75049 13.5858 7.75049 14C7.75049 14.4142 8.08627 14.75 8.50049 14.75C8.53799 14.75 8.55674 14.75 8.58149 14.7542C8.65017 14.7657 8.74101 14.8241 8.78006 14.8818C8.79413 14.9026 8.79813 14.9113 8.80613 14.9289C8.90065 15.1359 8.94644 15.3816 8.9432 15.6621C8.93761 16.1464 8.78243 16.6685 8.55597 17.0863C8.48749 17.2127 8.42111 17.3425 8.35779 17.4755C8.20069 17.8054 8.12214 17.9703 8.21043 18.1102C8.29872 18.25 8.49198 18.25 8.8785 18.25H15.092C15.4829 18.25 15.6784 18.25 15.7664 18.1084C15.8545 17.9667 15.7727 17.8011 15.6091 17.4697C15.5509 17.3518 15.4902 17.2363 15.4279 17.1237C15.1917 16.697 15.0348 16.1685 15.0352 15.6832C15.0354 15.3835 15.0938 15.1224 15.2132 14.9052C15.2198 14.8932 15.2231 14.8872 15.2356 14.8705C15.2765 14.8158 15.3669 14.7623 15.4346 14.7529C15.4552 14.75 15.4703 14.75 15.5005 14.75C15.9147 14.75 16.2505 14.4142 16.2505 14C16.2505 13.5858 15.9147 13.25 15.5005 13.25L8.50049 13.25ZM15.6731 19.75C15.951 19.75 16.0899 19.75 16.1791 19.8477C16.2683 19.9454 16.2569 20.0712 16.234 20.3227C16.2076 20.6117 16.1497 20.9029 16.054 21.1936C15.736 22.1599 14.7838 22.75 13.7874 22.75H10.2252C9.24811 22.75 8.31265 22.1822 7.97825 21.2439C7.86956 20.939 7.80309 20.6329 7.77174 20.3286C7.74559 20.0749 7.73252 19.9481 7.82187 19.849C7.91122 19.75 8.05152 19.75 8.33212 19.75H15.6731Z',
  d10: 'M7.75043 14C7.75043 13.5858 8.08622 13.25 8.50043 13.25H15.5004C15.9146 13.25 16.2504 13.5858 16.2504 14C16.2504 14.4142 15.9146 14.75 15.5004 14.75H15.3148C15.1267 14.9938 15.0354 15.3083 15.0351 15.6832C15.0347 16.1685 15.1916 16.697 15.4278 17.1237C16.0702 18.2839 16.5311 19.7438 16.0539 21.1936C15.7359 22.1599 14.7837 22.75 13.7874 22.75H10.2252C9.24805 22.75 8.3126 22.1822 7.97819 21.2439C7.4537 19.7723 7.91234 18.2738 8.55591 17.0863C8.78237 16.6685 8.93756 16.1464 8.94314 15.6621C8.94737 15.2958 8.86803 14.9889 8.70576 14.75H8.50043C8.08622 14.75 7.75043 14.4142 7.75043 14Z',
  d11: 'M7.75391 19.75C7.77195 19.2338 7.88014 18.7288 8.04255 18.25H15.9411C16.1097 18.7277 16.224 19.2327 16.2476 19.75H7.75391Z',
  d12: 'M11 13.25H13L13 10C13 9.44772 12.5523 9 12 9C11.4477 9 11 9.44772 11 10V13.25Z',
  d13: 'M13.9902 13.9934L14.9902 21.9981H8.99023L9.99023 13.9934',
  d14: 'M7.99023 13.9934H15.9902',
  d15: 'M11.9902 9.99097V13.9933',
  d16: 'M9.4082 18.9961H14.5532',
  d17: 'M16.8914 9.99538L7.08315 9.9962C7.01613 9.9962 5.98188 10.0685 6.00024 9.99538L8.98253 2.00195H14.9551L17.9993 9.99591C18.0177 10.0691 16.9585 9.99538 16.8914 9.99538Z',
  d18: 'M18.7023 9.73666C18.7886 9.96698 18.7566 10.225 18.6164 10.4272C18.4763 10.6294 18.246 10.75 18 10.75H6C5.75402 10.75 5.52367 10.6294 5.38356 10.4272C5.24345 10.225 5.21139 9.96698 5.29776 9.73666L8.48025 1.25H15.5198L18.7023 9.73666Z',
  d19: 'M11 14L11 10L13 10L13 14L11 14Z',
  d20: 'M8.52539 19.75L8.2558 21.9067C8.22911 22.1202 8.29538 22.3348 8.43775 22.4961C8.58011 22.6574 8.78488 22.7498 9 22.7498H15C15.2151 22.7498 15.4199 22.6574 15.5623 22.4961C15.7046 22.3348 15.7709 22.1202 15.7442 21.9067L15.4746 19.75H8.52539Z',
  d21: 'M8.71289 18.25L9.11914 15H8V13H16V15H14.8809L15.2871 18.25H8.71289Z',
} as const;

export const IconLamp05StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="lamp-05-stroke-rounded IconLamp05StrokeRounded"
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLamp05DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="lamp-05-duotone-rounded IconLamp05DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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
    </TheIconWrapper>
  );
};

export const IconLamp05TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="lamp-05-twotone-rounded IconLamp05TwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconLamp05SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="lamp-05-solid-rounded IconLamp05SolidRounded"
    >
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
    </TheIconWrapper>
  );
};

export const IconLamp05BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="lamp-05-bulk-rounded IconLamp05BulkRounded"
    >
      <path 
        d={d.d7} 
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

export const IconLamp05StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="lamp-05-stroke-sharp IconLamp05StrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLamp05SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="lamp-05-solid-sharp IconLamp05SolidSharp"
    >
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
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfLamp05: TheIconSelfPack = {
  name: 'Lamp05',
  StrokeRounded: IconLamp05StrokeRounded,
  DuotoneRounded: IconLamp05DuotoneRounded,
  TwotoneRounded: IconLamp05TwotoneRounded,
  SolidRounded: IconLamp05SolidRounded,
  BulkRounded: IconLamp05BulkRounded,
  StrokeSharp: IconLamp05StrokeSharp,
  SolidSharp: IconLamp05SolidSharp,
};