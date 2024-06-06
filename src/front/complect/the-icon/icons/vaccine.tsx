import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M17 2C17 2.50986 17 2.76479 17.0677 3.00236C17.1049 3.13286 17.157 3.25864 17.223 3.37723C17.3431 3.59309 17.5234 3.77336 17.8839 4.13388L19.8661 6.11612C20.2266 6.47664 20.4069 6.65691 20.6228 6.77701C20.7414 6.84298 20.8671 6.89509 20.9976 6.93228C21.2352 7 21.4901 7 22 7',
  d2: 'M11.6931 7L6.76525 11.9278C5.70048 12.9926 5.1681 13.525 5.0412 14.163C4.98627 14.4391 4.98627 14.7234 5.0412 14.9996C5.1681 15.6376 5.70049 16.17 6.76525 17.2348C7.83001 18.2995 8.3624 18.8319 9.00037 18.9588',
  d3: 'M11 6L17 12',
  d4: 'M8 18.6372L6.83054 19.4725C6.35987 19.8087 6.12454 19.9768 5.86646 19.9971C5.76637 20.005 5.66567 19.9967 5.56824 19.9724C5.31702 19.91 5.11252 19.7055 4.70352 19.2965C4.29453 18.8875 4.09003 18.683 4.02756 18.4318C4.00333 18.3343 3.995 18.2336 4.00288 18.1335C4.0232 17.8755 4.1913 17.6401 4.52749 17.1695L5.36282 16',
  d5: 'M13.5 8L18.5 4M16 10.5L20 5.5',
  d6: 'M4.5 19.5L2 22',
  d7: 'M13.4 18L13.9806 18.5806C14.2702 18.8702 14.415 19.015 14.5912 19.007C14.7675 18.999 14.8986 18.8417 15.1608 18.527L16.6 16.8M19 18C19 20.2091 17.2091 22 15 22C12.7909 22 11 20.2091 11 18C11 15.7909 12.7909 14 15 14C17.2091 14 19 15.7909 19 18Z',
  d8: 'M6.76525 11.9301L11.8493 6.85156L17 12.0023L15.0023 14H15C12.7909 14 11 15.7909 11 18V18.0023L10.2559 18.7464C9.78359 19.2187 9.10251 19.3905 8.58399 18.9694C8.10606 18.5813 7.55597 18.0297 6.9892 17.4614C6.9148 17.3868 6.84011 17.3119 6.76525 17.237C5.70049 16.1723 5.1681 15.6399 5.0412 15.0019C4.98627 14.7257 4.98627 14.4414 5.0412 14.1652C5.1681 13.5273 5.70049 12.9949 6.76525 11.9301Z',
  d9: 'M6.17704 16.5804L5.34171 17.7499C5.21267 17.9306 5.12711 18.0508 5.06453 18.1475C5.12627 18.2564 5.23321 18.4107 5.41112 18.5886C5.58951 18.767 5.74181 18.8747 5.84974 18.9369C5.93995 18.8785 6.06093 18.7929 6.24979 18.658L7.41925 17.8227L8.58173 19.4501L7.38314 20.3063L7.38311 20.3063C7.17319 20.4563 6.96199 20.6072 6.76939 20.7184C6.55223 20.8438 6.28072 20.9668 5.94545 20.9932C5.9025 20.9966 5.85936 20.9972 5.81633 20.995C5.32106 20.9699 4.64098 20.6469 3.99691 20.0028C3.48478 19.4907 3.2058 18.9809 3.08298 18.5876C3.03426 18.4296 2.96549 18.0262 3.08013 17.6766C3.19484 17.3113 3.44742 16.9591 3.66013 16.6629L4.54957 15.418L6.17704 16.5804Z',
  d10: 'M17.0357 1.25C17.5617 1.25 17.9881 1.67639 17.9881 2.20238C17.9881 2.74171 17.9966 2.82743 18.0161 2.89593C18.0315 2.94991 18.0531 3.00194 18.0803 3.05099C18.115 3.11323 18.1696 3.17984 18.551 3.56121L20.4388 5.44904C20.8202 5.83041 20.8868 5.88502 20.949 5.91965C20.9981 5.94694 21.0501 5.96849 21.1041 5.98388C21.1726 6.0034 21.2583 6.01189 21.7976 6.01189C22.3236 6.01189 22.75 6.43828 22.75 6.96427C22.75 7.49025 22.3236 7.91664 21.7976 7.91664C21.3989 7.91717 20.94 7.91775 20.5819 7.81567C20.3873 7.7602 20.1998 7.68251 20.023 7.58413C19.897 7.51406 19.7805 7.43166 19.6686 7.3406L16.827 10.8925C16.4985 11.3033 15.8991 11.3698 15.4884 11.0413C15.0777 10.7127 15.0111 10.1134 15.3397 9.70264L18.2992 6.0032L17.9968 5.70078L14.2974 8.66033C13.8866 8.9889 13.2873 8.92231 12.9587 8.51159C12.6302 8.10086 12.6967 7.50154 13.1075 7.17296L16.6594 4.33142C16.5683 4.21954 16.4859 4.103 16.4159 3.97705C16.3175 3.80023 16.2398 3.61267 16.1843 3.41807C16.0823 3.05996 16.0828 2.60113 16.0834 2.20238C16.0834 1.67639 16.5098 1.25 17.0357 1.25Z',
  d11: 'M5.45711 19.9572L2.95711 22.4572C2.56658 22.8477 1.93342 22.8477 1.54289 22.4572C1.15237 22.0667 1.15237 21.4335 1.54289 21.043L4.04289 18.543L5.45711 19.9572Z',
  d12: 'M10.2929 5.29289C10.6834 4.90237 11.3166 4.90237 11.7071 5.29289L18.7071 12.2929C18.8628 12.4486 18.9564 12.6428 18.988 12.8448C19.0087 12.9777 19.0191 13.0442 18.9617 13.0789C18.9043 13.1136 18.8413 13.067 18.7153 12.9737C17.6767 12.2047 16.3915 11.75 15 11.75C11.5482 11.75 8.75 14.5482 8.75 18C8.75 18.5479 8.8205 19.0793 8.95293 19.5857C8.96917 19.6478 8.917 19.7069 8.85405 19.6944C8.36547 19.5972 7.96106 19.3495 7.56892 19.0298C7.19327 18.7235 6.77137 18.3016 6.26231 17.7925C5.75324 17.2834 5.27653 16.8067 4.97025 16.4311C4.65053 16.0389 4.4028 15.6345 4.30561 15.146C4.23146 14.7732 4.23146 14.3894 4.30561 14.0166C4.4028 13.5281 4.65053 13.1237 4.97025 12.7315C5.27653 12.3559 5.69844 11.934 6.20751 11.4249L10.2929 7.33954C10.3899 7.24256 10.4384 7.19407 10.4612 7.14016C10.4927 7.06547 10.4927 6.98118 10.4612 6.90649C10.4384 6.85258 10.3899 6.80409 10.2929 6.70711C9.90237 6.31658 9.90237 5.68342 10.2929 5.29289Z',
  d13: 'M15 13.25C12.3766 13.25 10.25 15.3766 10.25 18C10.25 20.6234 12.3766 22.75 15 22.75C17.6234 22.75 19.75 20.6234 19.75 18C19.75 15.3766 17.6234 13.25 15 13.25ZM17.1766 17.2809C17.4417 16.9627 17.3987 16.4898 17.0805 16.2246C16.7623 15.9595 16.2894 16.0025 16.0242 16.3207L14.55 18.0897L13.9307 17.4705C13.6378 17.1776 13.163 17.1776 12.8701 17.4705C12.5772 17.7634 12.5772 18.2382 12.8701 18.5311L13.4738 19.1349C13.5976 19.2589 13.7394 19.4008 13.8765 19.5044C14.0394 19.6276 14.2907 19.7722 14.6256 19.7571C14.9606 19.7419 15.1978 19.5751 15.3488 19.4376C15.4759 19.322 15.6043 19.1678 15.7164 19.0332L17.1766 17.2809Z',
  d14: 'M17.9872 2.20238C17.9872 1.67639 17.5608 1.25 17.0348 1.25C16.5088 1.25 16.0824 1.67639 16.0824 2.20238C16.0819 2.60113 16.0813 3.05996 16.1834 3.41807C16.2389 3.61267 16.3166 3.80023 16.4149 3.97705C16.485 4.103 16.5674 4.21954 16.6585 4.33142L13.373 6.95976L14.7282 8.31491L17.9959 5.70078L18.2983 6.0032L15.6842 9.27087L17.0393 10.626L19.6677 7.3406C19.7795 7.43166 19.8961 7.51406 20.022 7.58413C20.1988 7.68251 20.3864 7.7602 20.581 7.81567C20.9391 7.91775 21.398 7.91717 21.7967 7.91664C22.3227 7.91664 22.7491 7.49025 22.7491 6.96427C22.7491 6.43828 22.3227 6.01189 21.7967 6.01189C21.2574 6.01189 21.1716 6.0034 21.1031 5.98388C21.0492 5.96849 20.9971 5.94694 20.9481 5.91965C20.8858 5.88502 20.8192 5.83041 20.4379 5.44904L18.55 3.56121C18.1687 3.17984 18.1141 3.11323 18.0794 3.05099C18.0521 3.00194 18.0306 2.94991 18.0152 2.89593C17.9957 2.82743 17.9872 2.74171 17.9872 2.20238Z',
  d15: 'M5.70944 17.2371C5.41902 16.9405 5.16143 16.6667 4.97025 16.4322C4.74935 16.1613 4.56282 15.8845 4.43656 15.5781L3.66013 16.6649C3.44742 16.9611 3.19484 17.3133 3.08013 17.6786C2.96549 18.0282 3.03426 18.4316 3.08298 18.5895C3.2058 18.9829 3.48478 19.4926 3.99691 20.0048C4.64098 20.6488 5.32106 20.9719 5.81633 20.997C5.85936 20.9992 5.9025 20.9986 5.94545 20.9952C6.28072 20.9688 6.55223 20.8458 6.76939 20.7204C6.96199 20.6092 7.17317 20.4583 7.38309 20.3083L8.42381 19.5649C8.11713 19.4386 7.84009 19.252 7.56892 19.0309C7.32409 18.8313 7.05962 18.5825 6.76417 18.2925L6.24979 18.66C6.06093 18.7949 5.93995 18.8805 5.84974 18.9389C5.74181 18.8766 5.58951 18.7689 5.41112 18.5905C5.23321 18.4126 5.12627 18.2584 5.06453 18.1494C5.12711 18.0528 5.21267 17.9325 5.34171 17.7519L5.70944 17.2371Z',
  d16: 'M13.2134 17.7293L14.5066 19.0223L16.8241 16.6712M19.001 18C19.001 20.2091 17.2101 22 15.001 22C12.7918 22 11.001 20.2091 11.001 18C11.001 15.7909 12.7918 14 15.001 14C17.2101 14 19.001 15.7909 19.001 18Z',
  d17: 'M2.01758 22.0155L5.00917 19.006M5.00917 19.006L6.03015 19.9965L8.49018 18.4827C8.49573 18.4793 8.49659 18.4716 8.49192 18.4671L5.63772 15.6893M5.00917 19.006L3.98764 17.9982C3.98413 17.9947 3.98367 17.9892 3.98654 17.9852L5.63772 15.6893M5.63772 15.6893L4.5193 14.5181C4.51555 14.5142 4.51562 14.508 4.51944 14.5041L11.9819 7.00308M11.9819 7.00308L10.5129 5.49191M11.9819 7.00308L13.2167 8.23806M17.0274 12.006L15.7552 10.7445M15.7552 10.7445L19.6673 5.93883M15.7552 10.7445L13.2167 8.23806M19.6673 5.93883C20.3485 6.62036 20.4976 7.00308 21.9665 7.00308M19.6673 5.93883L18.1132 4.34215M13.2167 8.23806L18.1132 4.34215M18.1132 4.34215C17.5171 3.66102 17.0274 3.78863 17.0274 2.02148',
  d18: 'M18.2584 5.17325L14.3744 8.28049L13.125 6.71875L16.8589 3.73163C16.8205 3.68213 16.7839 3.6316 16.7493 3.57945C16.536 3.25745 16.3868 2.89727 16.31 2.5187C16.2495 2.22076 16.2498 1.91637 16.25 1.57077L16.2501 1.5H18.2501C18.2501 1.95563 18.2547 2.04554 18.27 2.12106C18.2956 2.24725 18.3454 2.36731 18.4165 2.47464C18.4591 2.53887 18.5194 2.60573 18.8415 2.92792L20.8226 4.90901C21.1443 5.23068 21.2111 5.29088 21.2752 5.3334C21.3827 5.40468 21.5029 5.4545 21.6293 5.4801C21.7047 5.49537 21.7945 5.5 22.2494 5.5V7.5L22.1788 7.50004C21.8337 7.50031 21.5298 7.50055 21.2323 7.4403C20.8531 7.36349 20.4923 7.21405 20.1698 7.00021C20.1177 6.96561 20.0671 6.92899 20.0176 6.89053L17.0306 10.6243L15.4688 9.37492L18.5761 5.49087L18.2584 5.17325Z',
  d19: 'M3.83608 18.4999L1.75 20.5859L3.16421 22.0002L5.25029 19.9141L5.54291 20.2067C5.88268 20.5465 6.41607 20.5965 6.81315 20.326L8.81301 18.9631L7.68674 17.3104L6.3714 18.2068L5.5428 17.3782L6.4391 16.0627L4.78628 14.9365L3.4236 16.9365C3.15306 17.3336 3.20316 17.8669 3.54291 18.2067L3.83608 18.4999Z',
  d20: 'M15.001 13C12.3776 13 10.251 15.1266 10.251 17.75C10.251 20.3734 12.3776 22.5 15.001 22.5C17.6243 22.5 19.751 20.3734 19.751 17.75C19.751 15.1266 17.6243 13 15.001 13ZM14.5 19.8101L17.3549 16.9552L16.2942 15.8945L14.5 17.6888L13.7589 16.9477L12.6982 18.0084L14.5 19.8101Z',
  d21: 'M15.001 11.5C11.5492 11.5 8.75098 14.2982 8.75098 17.75C8.75098 18.2632 8.81283 18.762 8.9295 19.2392L4.22065 14.5304C3.92775 14.2375 3.92775 13.7626 4.22065 13.4697L11.0136 6.6768L10.0439 5.70718L11.4582 4.29297L19.4582 12.293L18.8923 12.8589C17.8246 12.0083 16.4721 11.5 15.001 11.5Z',
};

export const IconVaccineStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="vaccine-stroke-rounded IconVaccineStrokeRounded"
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

export const IconVaccineDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="vaccine-duotone-rounded IconVaccineDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconVaccineTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="vaccine-twotone-rounded IconVaccineTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconVaccineSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="vaccine-solid-rounded IconVaccineSolidRounded"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconVaccineBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="vaccine-bulk-rounded IconVaccineBulkRounded"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
    </TheIconWrapper>
  );
};

export const IconVaccineStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="vaccine-stroke-sharp IconVaccineStrokeSharp"
    >
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconVaccineSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="vaccine-solid-sharp IconVaccineSolidSharp"
    >
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfVaccine: TheIconSelfPack = {
  name: 'Vaccine',
  StrokeRounded: IconVaccineStrokeRounded,
  DuotoneRounded: IconVaccineDuotoneRounded,
  TwotoneRounded: IconVaccineTwotoneRounded,
  SolidRounded: IconVaccineSolidRounded,
  BulkRounded: IconVaccineBulkRounded,
  StrokeSharp: IconVaccineStrokeSharp,
  SolidSharp: IconVaccineSolidSharp,
};