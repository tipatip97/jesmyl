import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M13.1765 18V15.5M13.1765 15.5V14C13.1765 13.5286 13.1765 13.2929 13.3212 13.1464C13.4659 13 13.6988 13 14.1647 13H14.8235C15.5058 13 16.0588 13.5596 16.0588 14.25C16.0588 14.9404 15.5058 15.5 14.8235 15.5H13.1765ZM7 18L7.34169 13.6001C7.37067 13.2268 7.38516 13.0402 7.49203 13.0054C7.59889 12.9706 7.70833 13.1168 7.9272 13.4092L8.79999 14.5754C8.9187 14.734 8.97805 14.8133 9.05722 14.8133C9.13638 14.8133 9.19573 14.734 9.31444 14.5754L10.1877 13.4086C10.4064 13.1164 10.5158 12.9703 10.6226 13.005C10.7294 13.0398 10.744 13.2263 10.7732 13.5992L11.1176 18M21 13V15.5M21 15.5V18M21 15.5H19.7647C18.9883 15.5 18.6001 15.5 18.3589 15.2559C18.1176 15.0118 18.1176 14.619 18.1176 13.8333V13',
  d2: 'M15 22H10.7273C7.46607 22 5.83546 22 4.70307 21.2022C4.37862 20.9736 4.09058 20.7025 3.8477 20.3971C3 19.3313 3 17.7966 3 14.7273V12.1818C3 9.21865 3 7.73706 3.46894 6.55375C4.22281 4.65142 5.81714 3.15088 7.83836 2.44135C9.09563 2 10.6698 2 13.8182 2C15.6173 2 16.5168 2 17.2352 2.2522C18.3902 2.65765 19.3012 3.5151 19.732 4.60214C20 5.27832 20 6.12494 20 7.81818V10',
  d3: 'M3 12C3 10.1591 4.49238 8.66667 6.33333 8.66667C6.99912 8.66667 7.78404 8.78333 8.43137 8.60988C9.00652 8.45576 9.45576 8.00652 9.60988 7.43136C9.78333 6.78404 9.66667 5.99912 9.66667 5.33333C9.66667 3.49238 11.1591 2 13 2',
  d4: 'M3.0014 10.9896C3.34179 10.1536 4.90998 8.49792 8.49805 8.49792C8.79946 8.49792 9.59012 8.19468 9.5492 6.55168C9.53252 5.06667 10.0738 2.12886 12.3445 2.00216C12.7945 2 13.2836 2 13.8182 2C15.6173 2 16.5168 2 17.2352 2.2522C18.3902 2.65765 19.3012 3.5151 19.732 4.60214C20 5.27832 20 6.12494 20 7.81818V17C20 17.9293 20 18.394 19.9231 18.7804C19.6075 20.3671 18.3671 21.6075 16.7804 21.9231C16.394 22 15.9293 22 15 22H10.7273C7.46607 22 5.83546 22 4.70307 21.2022C4.37862 20.9736 4.09058 20.7025 3.8477 20.3971C3 19.3313 3 17.7966 3 14.7273V12.1818C3 11.7548 3 11.3586 3.0014 10.9896Z',
  d5: 'M13.1804 18V15.5M13.1804 15.5V14C13.1804 13.5286 13.1804 13.2929 13.3251 13.1464C13.4698 13 13.7028 13 14.1686 13H14.8274C15.5097 13 16.0627 13.5596 16.0627 14.25C16.0627 14.9404 15.5097 15.5 14.8274 15.5H13.1804ZM7.00391 18L7.3456 13.6001C7.37458 13.2268 7.38907 13.0402 7.49593 13.0054C7.60279 12.9706 7.71223 13.1168 7.93111 13.4092L8.80389 14.5754C8.9226 14.734 8.98196 14.8133 9.06112 14.8133C9.14028 14.8133 9.19964 14.734 9.31835 14.5754L10.1916 13.4086C10.4103 13.1164 10.5197 12.9703 10.6265 13.005C10.7333 13.0398 10.7479 13.2263 10.7771 13.5992L11.1216 18M21.0039 13V15.5M21.0039 15.5V18M21.0039 15.5H19.7686C18.9922 15.5 18.604 15.5 18.3628 15.2559C18.1216 15.0118 18.1216 14.619 18.1216 13.8333V13',
  d6: 'M10.1075 14.7064L9.95315 14.8982L9.93904 14.9157L9.93904 14.9157C9.88129 14.9877 9.79551 15.0946 9.70645 15.1777C9.59502 15.2815 9.3776 15.4461 9.05726 15.4461C8.73691 15.4461 8.51949 15.2816 8.40806 15.1777C8.319 15.0946 8.23321 14.9877 8.17546 14.9157L8.16136 14.8982L8.00811 14.7078L7.74779 18.0599C7.71572 18.4729 7.35494 18.7817 6.94197 18.7496C6.529 18.7175 6.22022 18.3567 6.25229 17.9438L6.59398 13.5438L6.59648 13.5114C6.60855 13.3547 6.62277 13.1701 6.65384 13.0228C6.67612 12.9172 6.77534 12.452 7.25965 12.2941C7.76747 12.1286 8.12231 12.4797 8.20061 12.5587C8.30654 12.6657 8.41704 12.8136 8.50798 12.9353L8.51985 12.9512L9.05724 13.6189L9.59514 12.9505L9.607 12.9347C9.69786 12.8131 9.80831 12.6653 9.9142 12.5583C9.99258 12.4792 10.3472 12.1285 10.8548 12.2937C11.3389 12.4513 11.4384 12.9162 11.4608 13.0219C11.492 13.1691 11.5063 13.3535 11.5184 13.51L11.521 13.5425L11.8654 17.9433C11.8977 18.3563 11.5892 18.7172 11.1762 18.7496C10.7633 18.7819 10.4023 18.4733 10.37 18.0604L10.1075 14.7064Z',
  d7: 'M14.1335 12.25C14.145 12.25 14.1565 12.25 14.1679 12.25H14.8268C15.9316 12.25 16.8121 13.1538 16.8121 14.25C16.8121 15.3462 15.9316 16.25 14.8268 16.25H13.9297V18C13.9297 18.4142 13.5939 18.75 13.1797 18.75C12.7655 18.75 12.4297 18.4142 12.4297 18V14C12.4297 13.9887 12.4297 13.9772 12.4297 13.9658C12.4296 13.7605 12.4295 13.5392 12.4543 13.3526C12.4833 13.1349 12.5576 12.8554 12.791 12.6193C13.0255 12.3819 13.3053 12.305 13.5247 12.2752C13.7109 12.2498 13.9312 12.2499 14.1335 12.25ZM13.9297 14.75H14.8268C15.0864 14.75 15.3121 14.5346 15.3121 14.25C15.3121 13.9655 15.0864 13.75 14.8268 13.75H14.1679C14.074 13.75 13.9973 13.7501 13.9308 13.751C13.9297 13.8206 13.9297 13.901 13.9297 14V14.75Z',
  d8: 'M18.1211 12.25C18.5353 12.25 18.8711 12.5858 18.8711 13V13.8333C18.8711 14.2471 18.8727 14.4829 18.8947 14.6489C18.8985 14.6777 18.9025 14.6997 18.906 14.7164C18.9211 14.7195 18.9407 14.7229 18.9656 14.7263C19.1276 14.7484 19.3585 14.75 19.7682 14.75H20.2535V13C20.2535 12.5858 20.5892 12.25 21.0035 12.25C21.4177 12.25 21.7535 12.5858 21.7535 13V18C21.7535 18.4142 21.4177 18.75 21.0035 18.75C20.5892 18.75 20.2535 18.4142 20.2535 18V16.25H19.7682C19.754 16.25 19.7398 16.25 19.7257 16.25C19.3743 16.2501 19.0389 16.2501 18.7634 16.2126C18.4544 16.1706 18.1117 16.0693 17.8289 15.7831C17.5473 15.4982 17.4488 15.155 17.4078 14.8465C17.371 14.5695 17.371 14.2318 17.3711 13.8753C17.3711 13.8614 17.3711 13.8474 17.3711 13.8333V13C17.3711 12.5858 17.7069 12.25 18.1211 12.25Z',
  d9: 'M7.13841 20.7033C8.00786 20.7942 9.13899 20.7955 10.7476 20.7955H14.9079C15.4456 20.7955 15.8816 21.233 15.8816 21.7727C15.8816 22.3125 15.4456 22.75 14.9079 22.75H10.6927C9.15159 22.75 7.91879 22.75 6.93654 22.6473C5.92712 22.5417 5.0659 22.3186 4.32113 21.7919C3.93077 21.5159 3.58222 21.1871 3.28704 20.8146C2.71721 20.0956 2.47396 19.2577 2.35985 18.2843C2.24996 17.3469 2.24998 16.1743 2.25 14.7262V12.1428V12.1427C2.25 10.7244 2.24999 9.61179 2.30919 8.71107C2.36944 7.79422 2.49398 7.02952 2.77509 6.31755C3.61848 4.1815 5.39221 2.51875 7.61221 1.73658C8.99465 1.2495 10.6813 1.24971 13.5209 1.25007L13.7572 1.25009L13.9605 1.25004L13.9606 1.25004C15.5156 1.2495 16.548 1.24914 17.4068 1.55172C18.7834 2.03673 19.8918 3.071 20.4206 4.41031C20.6039 4.87447 20.6795 5.36014 20.7153 5.90477C20.75 6.43335 20.75 7.08083 20.75 7.87999V7.88006V10.0455C20.75 10.5852 20.3141 11.0228 19.7763 11.0228C19.2386 11.0228 18.8026 10.5852 18.8026 10.0455V7.91329C18.8026 7.07303 18.8021 6.49008 18.7721 6.03341C18.7427 5.58546 18.6879 5.32704 18.6102 5.1304C18.3001 4.34503 17.6344 3.70339 16.7618 3.39593C16.2584 3.21858 15.5913 3.20463 13.7572 3.20463C13.4591 3.20463 13.1023 3.2058 12.7641 3.20732C12.426 3.20885 11.8726 3.21134 11.4104 3.48025C11.1057 3.65756 10.8849 3.85945 10.7582 4.08004C10.5409 4.45845 10.4166 4.89711 10.4166 5.3648C10.4166 5.51193 10.4262 5.70446 10.4344 5.88206L10.4344 5.88212C10.4417 6.03696 10.4496 6.20566 10.4531 6.3737C10.461 6.75379 10.449 7.19733 10.3343 7.62548C10.1108 8.45945 9.4594 9.11086 8.62543 9.33432C8.19728 9.44904 7.75374 9.46105 7.37365 9.45315C7.20551 9.44966 7.03693 9.44174 6.88201 9.43446C6.70441 9.42622 6.48041 9.41667 6.33328 9.41667C5.88661 9.41667 5.46642 9.53003 5.09991 9.72955C4.87246 9.85337 4.65104 10.0965 4.47811 10.3875C4.19749 10.8596 4.19732 11.4982 4.19734 11.7652L4.19737 14.6653C4.19737 16.1888 4.19894 17.2461 4.29387 18.0559C4.38611 18.8427 4.55555 19.2754 4.81111 19.5979C4.9889 19.8223 5.20128 20.0234 5.44274 20.1941C5.80057 20.4472 6.28449 20.6139 7.13841 20.7033Z',
  d10: 'M20.001 10.0157V2.08424C20.001 2.02909 19.9562 1.98438 19.901 1.98438H9.99881L2.99805 8.9798V21.9883H19.9946M9.99881 2.51464V8.9681L3.54571 8.97888',
  d11: 'M7.00209 17.9822L6.95215 13.1186C6.9512 13.0254 7.06734 12.9818 7.12809 13.0526L8.75872 14.9531L10.3428 12.9994C10.4021 12.9262 10.5205 12.9681 10.5205 13.0622V17.982M12.9941 17.9823L12.995 15.488M12.995 15.488L12.9951 12.9968H14.6602C14.9791 12.9968 15.3089 13.0563 15.5448 13.2707C16.1533 13.8234 16.1644 14.6658 15.4954 15.2293C15.2565 15.4305 14.9354 15.488 14.623 15.488H12.995ZM17.9932 12.479V15.3905C17.9932 15.4457 18.0379 15.4904 18.0932 15.4904H20.9971M20.9971 15.4904L20.9971 12.4673M20.9971 15.4904V17.9781',
  d12: 'M10.7638 12.298C11.0563 12.4079 11.25 12.6876 11.25 13V18.75H9.75V14.9961L8.75 16.139L7.75 14.9961V18.75H6.25V13C6.25 12.6876 6.44371 12.4079 6.7362 12.298C7.0287 12.1881 7.35868 12.271 7.56443 12.5062L8.75 13.8611L9.93557 12.5062C10.1413 12.271 10.4713 12.1881 10.7638 12.298ZM13.75 13.75V14.75L14.7647 14.75C15.0244 14.75 15.25 14.5346 15.25 14.25C15.25 13.9655 15.0244 13.75 14.7647 13.75L13.75 13.75ZM13.75 16.25V18.75H12.25V12.2501L14.7647 12.25C15.8695 12.25 16.75 13.1539 16.75 14.25C16.75 15.3462 15.8695 16.25 14.7647 16.25C14.7647 16.25 14.7647 16.25 14.7647 16.25L13.75 16.25ZM21.75 12.25V18.75H20.25V16.25L18 16.25C17.8011 16.25 17.6103 16.171 17.4697 16.0304C17.329 15.8897 17.25 15.699 17.25 15.5V12.25H18.75V14.75L20.25 14.75V12.25H21.75Z',
  d13: 'M20.75 2.22727C20.75 1.68754 20.3141 1.25 19.7763 1.25H9.63616L2.25 8.66338V21.7727C2.25 22.3125 2.68593 22.75 3.22368 22.75H20.75V20.7955H4.19727V10.0455H11.0131L11.0131 3.20459H18.8025V10H20.75V2.22727Z',
};

export const IconMp402StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mp-4-02-stroke-rounded IconMp402StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconMp402DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mp-4-02-duotone-rounded IconMp402DuotoneRounded"
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

export const IconMp402TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mp-4-02-twotone-rounded IconMp402TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconMp402SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mp-4-02-solid-rounded IconMp402SolidRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMp402BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mp-4-02-bulk-rounded IconMp402BulkRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMp402StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mp-4-02-stroke-sharp IconMp402StrokeSharp"
    >
      <path 
        d={d.d10} 
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

export const IconMp402SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mp-4-02-solid-sharp IconMp402SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfMp402: TheIconSelfPack = {
  name: 'Mp402',
  StrokeRounded: IconMp402StrokeRounded,
  DuotoneRounded: IconMp402DuotoneRounded,
  TwotoneRounded: IconMp402TwotoneRounded,
  SolidRounded: IconMp402SolidRounded,
  BulkRounded: IconMp402BulkRounded,
  StrokeSharp: IconMp402StrokeSharp,
  SolidSharp: IconMp402SolidSharp,
};