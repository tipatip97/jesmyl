import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M3.5 13V12.1963C3.5 9.22889 3.5 7.7452 3.96894 6.56021C4.72281 4.65518 6.31714 3.15252 8.33836 2.44198C9.59563 2 11.1698 2 14.3182 2C16.1173 2 17.0168 2 17.7352 2.25256C18.8902 2.65858 19.8012 3.51725 20.232 4.60584C20.5 5.28297 20.5 6.13079 20.5 7.82643V12.0142V13',
  d2: 'M3.5 12C3.5 10.1591 4.99238 8.66667 6.83333 8.66667C7.49912 8.66667 8.28404 8.78333 8.93137 8.60988C9.50652 8.45576 9.95576 8.00652 10.1099 7.43136C10.2833 6.78404 10.1667 5.99912 10.1667 5.33333C10.1667 3.49238 11.6591 2 13.5 2',
  d3: 'M3.5 16H6.9C7.14721 16 7.28833 16.2822 7.14 16.48L3.72 21.04C3.42334 21.4355 3.70557 22 4.2 22H7.5M10.5 16H12.25M12.25 16H14M12.25 16V21.6787M10.5 22H14M17 22V16H18.8618C19.5675 16 20.2977 16.3516 20.4492 17.0408C20.5128 17.33 20.5109 17.6038 20.4488 17.8923C20.2936 18.6138 19.5392 19 18.8012 19H18',
  d4: 'M9.49977 8.49792C5.89977 8.49792 3.50098 9.5 3.50098 12.1963V13H20.501V7.82643C20.501 6.13079 20.501 5.28297 20.233 4.60583C19.8022 3.51725 18.8912 2.65858 17.7362 2.25256C17.0178 2 16.1182 2 14.3192 2C13.9891 2 13.6763 2 13.3793 2.00051C9.49977 2.00051 10.5342 5.05948 10.5509 6.55167C10.5919 8.19467 9.80118 8.49792 9.49977 8.49792Z',
  d5: 'M3.50098 13V12.1963C3.50098 9.22889 3.50098 7.7452 3.96992 6.56021C4.72379 4.65518 6.31812 3.15252 8.33934 2.44198C9.59661 2 11.1708 2 14.3192 2C16.1183 2 17.0178 2 17.7362 2.25256C18.8912 2.65858 19.8022 3.51725 20.233 4.60584C20.501 5.28297 20.501 6.13079 20.501 7.82643V12.0142V13',
  d6: 'M3.50098 12C3.50098 10.1591 4.99336 8.66667 6.83431 8.66667C7.5001 8.66667 8.28502 8.78333 8.93235 8.60988C9.5075 8.45576 9.95674 8.00652 10.1109 7.43136C10.2843 6.78404 10.1677 5.99912 10.1677 5.33333C10.1677 3.49238 11.6601 2 13.501 2',
  d7: 'M3.50098 16H6.90098C7.14819 16 7.28931 16.2822 7.14098 16.48L3.72098 21.04C3.42432 21.4355 3.70655 22 4.20098 22H7.50098M10.501 16H12.251M12.251 16H14.001M12.251 16V21.6787M10.501 22H14.001M17.001 22V16H18.8628C19.5685 16 20.2987 16.3516 20.4502 17.0408C20.5138 17.33 20.5119 17.6038 20.4498 17.8923C20.2946 18.6138 19.5402 19 18.8022 19H18.001',
  d8: 'M3.5 13.0403V12.2334C3.5 9.25452 3.5 7.76507 3.96894 6.57548C4.72281 4.66305 6.31714 3.15455 8.33836 2.44126C9.59563 1.99756 11.1698 1.99756 14.3182 1.99756C16.1173 1.99756 17.0168 1.99756 17.7352 2.2511C18.8902 2.6587 19.8012 3.5207 20.232 4.61352C20.5 5.29328 20.5 6.14439 20.5 7.84662V12.0506V13.0403',
  d9: 'M3.5 12.0364C3.5 10.1883 4.99238 8.69012 6.83333 8.69012C7.49912 8.69012 8.28404 8.80723 8.93137 8.63311C9.50652 8.47839 9.95576 8.02741 10.1099 7.45001C10.2833 6.80018 10.1667 6.01221 10.1667 5.34383C10.1667 3.49573 11.6591 1.99756 13.5 1.99756',
  d10: 'M3.5 16.0808H6.6092C6.91476 16.0808 7.63773 16.6162 7.44684 16.8488L3.91856 20.8841C3.60042 21.2718 3.76465 22.0022 4.27393 22.0022H7.59915M10.7883 16.0808H12.3067M12.3067 16.0808H13.8251M12.3067 16.0808V21.7766M10.7883 22.0022H13.8251M16.8619 22.0022V16.8488C16.8619 16.8488 16.8214 16.3551 17.1687 16.2051C17.4871 16.0676 18.4592 16.0777 18.6184 16.0804C18.6336 16.0806 18.6482 16.0807 18.6634 16.0809C19.4459 16.0874 20.2806 16.43 20.4551 17.1726C20.5149 17.4271 20.515 17.6747 20.4551 17.9318C20.2781 18.6903 19.4224 19.0415 18.6245 19.0415H16.8619',
  d11: 'M3.72368 13.75C4.26144 13.75 4.69737 13.3195 4.69737 12.7885L4.69738 11.7652C4.69737 11.4982 4.69754 10.8596 4.97816 10.3875C5.15109 10.0965 5.37251 9.85337 5.59996 9.72955C5.96647 9.53003 6.38666 9.41667 6.83333 9.41667C6.98046 9.41667 7.13864 9.42314 7.31624 9.43138L7.38206 9.43446C7.53697 9.44174 7.70556 9.44966 7.8737 9.45315C8.25379 9.46105 8.69733 9.44904 9.12548 9.33432C9.95945 9.11086 10.6109 8.45945 10.8343 7.62548C10.949 7.19733 10.961 6.75379 10.9532 6.3737C10.9497 6.20562 10.9417 6.03692 10.9345 5.88206L10.9314 5.81624C10.9231 5.63864 10.9167 5.48046 10.9167 5.33333C10.9167 4.86564 11.0409 4.42698 11.2583 4.04857C11.385 3.82798 11.6057 3.62609 11.9105 3.44878C12.3726 3.17987 12.926 3.17738 13.2642 3.17585C13.6023 3.17433 13.9591 3.17316 14.2572 3.17316C16.0914 3.17316 16.7582 3.18692 17.2614 3.36158C18.1337 3.66441 18.7997 4.29659 19.11 5.07103C19.1878 5.26511 19.2427 5.52002 19.2721 5.96153C19.3021 6.41159 19.3026 6.98607 19.3026 7.81394V12.7885C19.3026 13.3195 19.7386 13.75 20.2763 13.75C20.8141 13.75 21.25 13.3195 21.25 12.7885V7.78121C21.25 6.99374 21.25 6.35586 21.2153 5.83514C21.1795 5.29867 21.1039 4.82043 20.9208 4.36341C20.3922 3.04443 19.2841 2.02533 17.9072 1.54735C17.0482 1.24915 16.0155 1.24951 14.4607 1.25005L13.5134 1.25012L13.5 1.25L13.4649 1.25015C10.9565 1.25185 9.40174 1.28168 8.1118 1.72949C5.8915 2.50027 4.11806 4.13859 3.27491 6.24261C2.99393 6.94378 2.86942 7.69695 2.80918 8.60017C2.74999 9.48756 2.75 10.5838 2.75 11.9814V12.7885C2.75 13.3195 3.18593 13.75 3.72368 13.75Z',
  d12: 'M6.26476 16.7914C5.91355 16.7512 5.40729 16.75 4.64305 16.75H3.5C3.08579 16.75 2.75 16.4142 2.75 16C2.75 15.5858 3.08579 15.25 3.5 15.25H4.64305C4.65904 15.25 4.67497 15.25 4.69085 15.25C5.3945 15.25 5.98809 15.25 6.43516 15.3011C6.85451 15.349 7.41733 15.4638 7.74886 15.9429C7.92426 16.1964 7.98599 16.4865 7.94535 16.7771C7.90917 17.0359 7.79661 17.2628 7.68635 17.4434C7.47936 17.7823 7.13584 18.1807 6.75848 18.6184C6.74478 18.6343 6.73102 18.6502 6.71723 18.6662L5.29773 20.3131C4.94788 20.719 4.71202 20.9951 4.5635 21.2024C4.57943 21.2045 4.59625 21.2066 4.61402 21.2086C4.96523 21.2488 5.4715 21.25 6.23574 21.25H7.37879C7.793 21.25 8.12879 21.5858 8.12879 22C8.12879 22.4142 7.793 22.75 7.37879 22.75L6.18794 22.75C5.48429 22.75 4.8907 22.7501 4.44363 22.6989C4.02428 22.651 3.46146 22.5362 3.12993 22.0571C2.95453 21.8036 2.8928 21.5135 2.93343 21.2229C2.96962 20.9641 3.08218 20.7372 3.19244 20.5567C3.39943 20.2177 3.74294 19.8193 4.1203 19.3816C4.13401 19.3657 4.14776 19.3498 4.16155 19.3338L5.58105 17.6869C5.93091 17.281 6.16677 17.0049 6.31529 16.7976C6.29936 16.7955 6.28253 16.7934 6.26476 16.7914Z',
  d13: 'M10.0391 16C10.0391 15.5858 10.3748 15.25 10.7891 15.25H13.6982C14.1124 15.25 14.4482 15.5858 14.4482 16C14.4482 16.4142 14.1124 16.75 13.6982 16.75H12.9936V21.25H13.6982C14.1124 21.25 14.4482 21.5858 14.4482 22C14.4482 22.4142 14.1124 22.75 13.6982 22.75H10.7891C10.3748 22.75 10.0391 22.4142 10.0391 22C10.0391 21.5858 10.3748 21.25 10.7891 21.25H11.4936V16.75H10.7891C10.3748 16.75 10.0391 16.4142 10.0391 16Z',
  d14: 'M18.2316 15.25C18.2441 15.25 18.2566 15.25 18.2691 15.25H19.0449C20.284 15.25 21.2494 16.2793 21.2494 17.5C21.2494 18.7207 20.284 19.75 19.0449 19.75H17.8555V22C17.8555 22.4142 17.5197 22.75 17.1055 22.75C16.6913 22.75 16.3555 22.4142 16.3555 22V17.2C16.3555 17.1878 16.3555 17.1755 16.3555 17.1633C16.3554 16.9127 16.3553 16.6574 16.3831 16.4447C16.4147 16.2023 16.4938 15.9049 16.7375 15.6536C16.9842 15.3992 17.2818 15.3132 17.5277 15.2791C17.7386 15.2498 17.9904 15.2499 18.2316 15.25ZM17.8555 18.25H19.0449C19.4124 18.25 19.7494 17.9362 19.7494 17.5C19.7494 17.0639 19.4124 16.75 19.0449 16.75H18.2691C18.1291 16.75 18.0197 16.7501 17.926 16.7525C17.9022 16.7531 17.8807 16.7539 17.8611 16.7547C17.8598 16.781 17.8587 16.8107 17.8579 16.8444C17.8555 16.9421 17.8555 17.0559 17.8555 17.2V18.25Z',
  d15: 'M20.4646 12.9683V2.08708C20.4646 2.03198 20.4201 1.9873 20.3652 1.9873H10.4997L3.52637 8.98131V12.9905M10.4996 2.54592L10.499 8.98131H4.11366',
  d16: 'M3.49805 15.991L7.34323 15.9908C7.42243 15.9908 7.47021 16.0784 7.42725 16.1449L4.0821 21.322C4.03915 21.3885 4.08692 21.4761 4.16612 21.4761H8.01245M12.0009 15.9894V21.4838M12.0009 15.9894L9.99315 15.9892M12.0009 15.9894L13.9933 15.9892M12.0009 21.4838L9.95926 21.4838M12.0009 21.4838H14.0036M17.0028 18.9968L17.0035 15.987L18.9924 15.9865C19.8244 15.9865 20.4989 16.6604 20.4989 17.4916C20.4989 18.3229 19.8244 18.9968 18.9924 18.9968H17.0028ZM17.0028 18.9968V21.9902',
  d17: 'M20.2763 1.25C20.8141 1.25 21.25 1.68754 21.25 2.22727V13.0682H19.3026V3.20455L11.5132 3.20455L11.5132 10.0455H4.69737L4.69737 13.0682H2.75V8.66338L10.1362 1.25H20.2763Z',
  d18: 'M2.75001 15.25L7.50001 15.25C7.77661 15.25 8.03075 15.4023 8.16126 15.6462C8.29178 15.89 8.27747 16.1859 8.12404 16.4161L4.9014 21.25H8.25001V22.75H3.50001C3.22341 22.75 2.96926 22.5978 2.83875 22.3539C2.70824 22.11 2.72254 21.8141 2.87597 21.584L6.09862 16.75L2.75 16.75L2.75001 15.25ZM11.25 16.75H10V15.25H14V16.75H12.75V21.25H14V22.75H10V21.25H11.25V16.75ZM16.25 15.25H19.0455C20.2846 15.25 21.25 16.2793 21.25 17.5C21.25 18.7207 20.2846 19.75 19.0455 19.75H17.75V22.75H16.25V15.25ZM17.75 18.25H19.0455C19.413 18.25 19.75 17.9361 19.75 17.5C19.75 17.0639 19.413 16.75 19.0455 16.75H17.75V18.25Z',
};

export const IconZip01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="zip-01-stroke-rounded IconZip01StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconZip01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="zip-01-duotone-rounded IconZip01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
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

export const IconZip01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="zip-01-twotone-rounded IconZip01TwotoneRounded"
    >
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
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconZip01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="zip-01-solid-rounded IconZip01SolidRounded"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconZip01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="zip-01-bulk-rounded IconZip01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconZip01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="zip-01-stroke-sharp IconZip01StrokeSharp"
    >
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

export const IconZip01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="zip-01-solid-sharp IconZip01SolidSharp"
    >
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfZip01: TheIconSelfPack = {
  name: 'Zip01',
  StrokeRounded: IconZip01StrokeRounded,
  DuotoneRounded: IconZip01DuotoneRounded,
  TwotoneRounded: IconZip01TwotoneRounded,
  SolidRounded: IconZip01SolidRounded,
  BulkRounded: IconZip01BulkRounded,
  StrokeSharp: IconZip01StrokeSharp,
  SolidSharp: IconZip01SolidSharp,
};