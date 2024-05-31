import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M17 2C17 2.50986 17 2.76479 17.0677 3.00236C17.1049 3.13286 17.157 3.25864 17.223 3.37723C17.3431 3.59309 17.5234 3.77336 17.8839 4.13388L19.8661 6.11612C20.2266 6.47664 20.4069 6.65691 20.6228 6.77701C20.7414 6.84298 20.8671 6.89509 20.9976 6.93228C21.2352 7 21.4901 7 22 7',
  d2: 'M11.6931 7L6.76525 11.9278C5.70048 12.9926 5.1681 13.525 5.0412 14.163C4.98627 14.4391 4.98627 14.7234 5.0412 14.9996C5.1681 15.6376 5.70049 16.17 6.76525 17.2348C7.83001 18.2995 8.3624 18.8319 9.00037 18.9588C9.27655 19.0137 9.56085 19.0137 9.83704 18.9588C10.475 18.8319 11.0074 18.2995 12.0722 17.2348L17 12.3069',
  d3: 'M11 6L18 13',
  d4: 'M8 18.6372L6.83054 19.4725C6.35987 19.8087 6.12454 19.9768 5.86646 19.9971C5.76637 20.005 5.66567 19.9967 5.56824 19.9724C5.31702 19.91 5.11252 19.7055 4.70352 19.2965C4.29453 18.8875 4.09003 18.683 4.02756 18.4318C4.00333 18.3343 3.995 18.2336 4.00288 18.1335C4.0232 17.8755 4.1913 17.6401 4.52749 17.1695L5.36282 16',
  d5: 'M13.5 8L18.5 4M16 10.5L20 5.5',
  d6: 'M4.5 19.5L2 22',
  d7: 'M12.0722 17.2348L17 12.3069L11.6931 7L6.76525 11.9278C5.70048 12.9926 5.1681 13.525 5.0412 14.163C4.98627 14.4391 4.98627 14.7234 5.0412 14.9996C5.1681 15.6376 5.70049 16.17 6.76525 17.2348C7.83001 18.2995 8.3624 18.8319 9.00037 18.9588C9.27655 19.0137 9.56085 19.0137 9.83704 18.9588C10.475 18.8319 11.0074 18.2995 12.0722 17.2348Z',
  d8: 'M17.8906 1.85938C17.8906 1.44516 17.5548 1.10938 17.1406 1.10938C16.7264 1.10938 16.3906 1.44516 16.3906 1.85938H17.8906ZM17.2083 2.86174L16.487 3.06728L16.4871 3.06734L17.2083 2.86174ZM17.3636 3.2366L18.019 2.87196L18.019 2.87188L17.3636 3.2366ZM18.0245 3.99326L17.4942 4.52357L17.4942 4.52358L18.0245 3.99326ZM20.0067 5.97549L20.5371 5.44518L20.5371 5.44517L20.0067 5.97549ZM20.7634 6.63638L20.3988 7.2918L20.3989 7.29181L20.7634 6.63638ZM21.1382 6.79166L21.3438 6.07038L21.3438 6.07037L21.1382 6.79166ZM22.1406 7.60938C22.5548 7.60938 22.8906 7.27359 22.8906 6.85938C22.8906 6.44516 22.5548 6.10938 22.1406 6.10938V7.60938ZM16.3906 1.85938C16.3906 2.32691 16.3839 2.70551 16.487 3.06728L17.9296 2.65619C17.8973 2.54282 17.8906 2.41156 17.8906 1.85938H16.3906ZM16.4871 3.06734C16.54 3.2532 16.6143 3.43238 16.7083 3.60133L18.019 2.87188C17.981 2.80365 17.951 2.73127 17.9296 2.65613L16.4871 3.06734ZM16.7082 3.60125C16.8911 3.92999 17.1637 4.19303 17.4942 4.52357L18.5549 3.46294C18.1644 3.07244 18.0763 2.97494 18.019 2.87196L16.7082 3.60125ZM17.4942 4.52358L19.4764 6.50582L20.5371 5.44517L18.5549 3.46293L17.4942 4.52358ZM19.4764 6.50581C19.807 6.83644 20.07 7.10889 20.3988 7.2918L21.128 5.98097C21.025 5.92368 20.9275 5.83559 20.5371 5.44518L19.4764 6.50581ZM20.3989 7.29181C20.5676 7.38567 20.7466 7.45992 20.9327 7.51294L21.3438 6.07037C21.2688 6.04901 21.1965 6.01904 21.128 5.98096L20.3989 7.29181ZM20.9326 7.51293C21.2945 7.61606 21.673 7.60938 22.1406 7.60938V6.10938C21.5884 6.10938 21.4572 6.10269 21.3438 6.07038L20.9326 7.51293ZM14.1091 8.44503L19.1091 4.44503L18.1721 3.27372L13.1721 7.27372L14.1091 8.44503ZM16.7263 10.8279L20.7263 5.8279L19.555 4.89085L15.555 9.89085L16.7263 10.8279Z',
  d9: 'M11.7071 5.29289C11.3166 4.90237 10.6834 4.90237 10.2929 5.29289C9.90237 5.68342 9.90237 6.31658 10.2929 6.70711L10.6091 7.02332L6.20751 11.4249C5.69844 11.934 5.27653 12.3559 4.97025 12.7315C4.65053 13.1237 4.4028 13.5281 4.30561 14.0166C4.23146 14.3894 4.23146 14.7732 4.30561 15.146C4.4028 15.6345 4.65053 16.0389 4.97025 16.4311C5.27653 16.8067 5.75324 17.2834 6.26231 17.7925C6.77137 18.3016 7.19327 18.7235 7.56892 19.0298C7.96106 19.3495 8.36547 19.5972 8.85405 19.6944C9.22683 19.7685 9.61057 19.7685 9.98336 19.6944C10.4719 19.5972 10.8764 19.3495 11.2685 19.0298C11.6441 18.7235 12.066 18.3016 12.5751 17.7925L16.9767 13.3909L17.2929 13.7071C17.6834 14.0976 18.3166 14.0976 18.7071 13.7071C19.0976 13.3166 19.0976 12.6834 18.7071 12.2929L11.7071 5.29289Z',
  d10: 'M5.94455 15.1863C6.39396 15.5074 6.49805 16.1319 6.17704 16.5813L5.34171 17.7508C5.21267 17.9314 5.12711 18.0517 5.06453 18.1483C5.12627 18.2573 5.23321 18.4115 5.41112 18.5894C5.58951 18.7678 5.74181 18.8755 5.84974 18.9378C5.93995 18.8794 6.06093 18.7938 6.24979 18.6589L7.41925 17.8235C7.86866 17.5025 8.49321 17.6066 8.81422 18.056C9.13523 18.5054 9.03114 19.13 8.58173 19.451L7.38314 20.3071L7.38311 20.3071C7.17319 20.4572 6.96199 20.6081 6.76939 20.7193C6.55223 20.8447 6.28072 20.9677 5.94545 20.9941C5.9025 20.9975 5.85936 20.9981 5.81633 20.9959C5.32106 20.9708 4.64098 20.6477 3.99691 20.0037C3.48478 19.4915 3.2058 18.9818 3.08298 18.5884C3.03426 18.4305 2.96549 18.0271 3.08013 17.6775C3.19484 17.3122 3.44742 16.96 3.66013 16.6638L4.54957 15.4188C4.87058 14.9694 5.49513 14.8653 5.94455 15.1863Z',
  d11: 'M17.0357 1.25C17.5617 1.25 17.9881 1.67639 17.9881 2.20238C17.9881 2.74171 17.9966 2.82743 18.0161 2.89593C18.0315 2.94991 18.0531 3.00194 18.0803 3.05099C18.115 3.11323 18.1696 3.17984 18.551 3.56121L20.4388 5.44904C20.8202 5.83041 20.8868 5.88502 20.949 5.91965C20.9981 5.94694 21.0501 5.96849 21.1041 5.98388C21.1726 6.0034 21.2583 6.01189 21.7976 6.01189C22.3236 6.01189 22.75 6.43828 22.75 6.96427C22.75 7.49025 22.3236 7.91664 21.7976 7.91664C21.3989 7.91717 20.94 7.91775 20.5819 7.81567C20.3873 7.7602 20.1998 7.68251 20.023 7.58413C19.897 7.51406 19.7805 7.43166 19.6686 7.3406L16.827 10.8925C16.4985 11.3033 15.8991 11.3698 15.4884 11.0413C15.0777 10.7127 15.0111 10.1134 15.3397 9.70264L18.2992 6.0032L17.9968 5.70078L14.2974 8.66033C13.8866 8.9889 13.2873 8.92231 12.9587 8.51159C12.6302 8.10086 12.6967 7.50154 13.1075 7.17296L16.6594 4.33142C16.5683 4.21954 16.4859 4.103 16.4159 3.97705C16.3175 3.80023 16.2398 3.61267 16.1843 3.41807C16.0823 3.05996 16.0828 2.60113 16.0834 2.20238C16.0834 1.67639 16.5098 1.25 17.0357 1.25Z',
  d12: 'M5.45711 19.9572L2.95711 22.4572C2.56658 22.8477 1.93342 22.8477 1.54289 22.4572C1.15237 22.0667 1.15237 21.4335 1.54289 21.043L4.04289 18.543L5.45711 19.9572Z',
  d13: 'M8.42372 19.5649L7.38314 20.3082C7.17323 20.4582 6.96199 20.6091 6.76939 20.7204C6.55223 20.8458 6.28072 20.9688 5.94545 20.9952C5.9025 20.9986 5.85936 20.9992 5.81633 20.997C5.32106 20.9719 4.64098 20.6488 3.99691 20.0047C3.48478 19.4926 3.2058 18.9828 3.08298 18.5895C3.03426 18.4315 2.96549 18.0282 3.08013 17.6785C3.19484 17.3133 3.44742 16.9611 3.66013 16.6649L4.43653 15.5781C4.56279 15.8845 4.74934 16.1613 4.97025 16.4323C5.16142 16.6667 5.419 16.9406 5.7094 17.2371L5.34171 17.7518C5.21267 17.9325 5.12711 18.0528 5.06453 18.1494C5.12627 18.2583 5.23321 18.4126 5.41112 18.5905C5.58951 18.7689 5.74181 18.8766 5.84974 18.9388C5.93995 18.8805 6.06093 18.7948 6.24979 18.6599L6.76411 18.2925C7.05958 18.5825 7.32407 18.8313 7.56892 19.0309C7.84006 19.252 8.11707 19.4387 8.42372 19.5649Z',
  d14: 'M17.9872 2.20238C17.9872 1.67639 17.5608 1.25 17.0348 1.25C16.5088 1.25 16.0824 1.67639 16.0824 2.20238C16.0819 2.60113 16.0813 3.05996 16.1834 3.41807C16.2389 3.61267 16.3166 3.80023 16.4149 3.97705C16.485 4.103 16.5674 4.21954 16.6585 4.33142L13.373 6.95976L14.7282 8.31491L17.9959 5.70078L18.2983 6.0032L15.6842 9.27087L17.0393 10.626L19.6677 7.3406C19.7795 7.43166 19.8961 7.51406 20.022 7.58413C20.1988 7.68251 20.3864 7.7602 20.581 7.81567C20.9391 7.91775 21.398 7.91717 21.7967 7.91664C22.3227 7.91664 22.7491 7.49025 22.7491 6.96427C22.7491 6.43828 22.3227 6.01189 21.7967 6.01189C21.2574 6.01189 21.1716 6.0034 21.1031 5.98388C21.0492 5.96849 20.9971 5.94694 20.9481 5.91965C20.8858 5.88502 20.8192 5.83041 20.4379 5.44904L18.55 3.56121C18.1687 3.17984 18.1141 3.11323 18.0794 3.05099C18.0521 3.00194 18.0306 2.94991 18.0152 2.89593C17.9957 2.82743 17.9872 2.74171 17.9872 2.20238Z',
  d15: 'M17.001 2C17.001 2.41538 17.001 2.62307 17.0409 2.81988C17.0921 3.07226 17.1916 3.31238 17.3338 3.52705C17.4448 3.69445 17.5916 3.84131 17.8853 4.13502L19.8664 6.11612C20.1597 6.40937 20.3063 6.55599 20.4734 6.66681C20.6884 6.80936 20.9289 6.90899 21.1817 6.9602C21.3782 7 21.5856 7 22.0003 7',
  d16: 'M17 12L9.5 19.5L4.5 14.5L12 7',
  d17: 'M10.5 5.5L18.5 13.5',
  d18: 'M7.99986 18.6372L6 20L4 18L5.36268 16',
  d19: 'M5 19L2 22',
  d20: 'M4.21967 13.7197L11.0126 6.9268L10.043 5.95718L11.4572 4.54297L19.4572 12.543L18.043 13.9572L17.0733 12.9875L10.2803 19.7804C9.98744 20.0733 9.51256 20.0733 9.21967 19.7804L4.21967 14.7804C3.92678 14.4875 3.92678 14.0126 4.21967 13.7197Z',
  d21: 'M18.2584 5.42325L14.3744 8.53049L13.125 6.96875L16.8589 3.98163C16.8205 3.93213 16.7839 3.8816 16.7493 3.82945C16.536 3.50745 16.3868 3.14727 16.31 2.7687C16.2495 2.47076 16.2498 2.16637 16.25 1.82077L16.2501 1.75H18.2501C18.2501 2.20563 18.2547 2.29554 18.27 2.37106C18.2956 2.49725 18.3454 2.61731 18.4165 2.72464C18.4591 2.78887 18.5194 2.85573 18.8415 3.17792L20.8226 5.15901C21.1443 5.48068 21.2111 5.54088 21.2752 5.5834C21.3827 5.65468 21.5029 5.7045 21.6293 5.7301C21.7047 5.74537 21.7945 5.75 22.2494 5.75V7.75L22.1788 7.75004C21.8337 7.75031 21.5298 7.75055 21.2323 7.6903C20.8531 7.61349 20.4923 7.46405 20.1698 7.25021C20.1177 7.21561 20.0671 7.17899 20.0176 7.14053L17.0306 10.8743L15.4688 9.62492L18.5761 5.74087L18.2584 5.42325Z',
  d22: 'M3.83608 18.7499L1.75 20.8359L3.16421 22.2502L5.25029 20.1641L5.54291 20.4567C5.88268 20.7965 6.41607 20.8465 6.81315 20.576L8.81301 19.2131L7.68674 17.5604L6.3714 18.4568L5.5428 17.6282L6.4391 16.3127L4.78628 15.1865L3.4236 17.1865C3.15306 17.5836 3.20316 18.1169 3.54291 18.4567L3.83608 18.7499Z',
} as const;

export const IconInjectionStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="injection-stroke-rounded IconInjectionStrokeRounded"
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

export const IconInjectionDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="injection-duotone-rounded IconInjectionDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
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
        d={d.d7} 
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

export const IconInjectionTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="injection-twotone-rounded IconInjectionTwotoneRounded"
    >
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
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconInjectionSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="injection-solid-rounded IconInjectionSolidRounded"
    >
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
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconInjectionBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="injection-bulk-rounded IconInjectionBulkRounded"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
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

export const IconInjectionStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="injection-stroke-sharp IconInjectionStrokeSharp"
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
        strokeLinejoin="round" 
      />
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconInjectionSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="injection-solid-sharp IconInjectionSolidSharp"
    >
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfInjection: TheIconSelfPack = {
  name: 'Injection',
  StrokeRounded: IconInjectionStrokeRounded,
  DuotoneRounded: IconInjectionDuotoneRounded,
  TwotoneRounded: IconInjectionTwotoneRounded,
  SolidRounded: IconInjectionSolidRounded,
  BulkRounded: IconInjectionBulkRounded,
  StrokeSharp: IconInjectionStrokeSharp,
  SolidSharp: IconInjectionSolidSharp,
};