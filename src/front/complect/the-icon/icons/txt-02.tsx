import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12.3529 13L14 15.5M14 15.5L15.6471 18M14 15.5L15.6471 13M14 15.5L12.3529 18M17.7059 13H19.3529M19.3529 13H21M19.3529 13V18M7 13H8.64706M8.64706 13H10.2941M8.64706 13V18',
  d2: 'M15 22H10.7273C7.46607 22 5.83546 22 4.70307 21.2022C4.37862 20.9736 4.09058 20.7025 3.8477 20.3971C3 19.3313 3 17.7966 3 14.7273V12.1818C3 9.21865 3 7.73706 3.46894 6.55375C4.22281 4.65142 5.81714 3.15088 7.83836 2.44135C9.09563 2 10.6698 2 13.8182 2C15.6173 2 16.5168 2 17.2352 2.2522C18.3902 2.65765 19.3012 3.5151 19.732 4.60214C20 5.27832 20 6.12494 20 7.81818V10',
  d3: 'M3 12C3 10.1591 4.49238 8.66667 6.33333 8.66667C6.99912 8.66667 7.78404 8.78333 8.43137 8.60988C9.00652 8.45576 9.45576 8.00652 9.60988 7.43136C9.78333 6.78404 9.66667 5.99912 9.66667 5.33333C9.66667 3.49238 11.1591 2 13 2',
  d4: 'M3.0014 10.9896C3.34179 10.1536 4.90998 8.49792 8.49805 8.49792C8.79946 8.49792 9.59012 8.19468 9.5492 6.55168C9.53252 5.06667 10.0738 2.12886 12.3445 2.00216C12.7945 2 13.2836 2 13.8182 2C15.6173 2 16.5168 2 17.2352 2.2522C18.3902 2.65765 19.3012 3.5151 19.732 4.60214C20 5.27832 20 6.12494 20 7.81818V17C20 17.9293 20 18.394 19.9231 18.7804C19.6075 20.3671 18.3671 21.6075 16.7804 21.9231C16.394 22 15.9293 22 15 22H10.7273C7.46607 22 5.83546 22 4.70307 21.2022C4.37862 20.9736 4.09058 20.7025 3.8477 20.3971C3 19.3313 3 17.7966 3 14.7273V12.1818C3 11.7548 3 11.3586 3.0014 10.9896Z',
  d5: 'M12.3568 13L14.0039 15.5M14.0039 15.5L15.651 18M14.0039 15.5L15.651 13M14.0039 15.5L12.3568 18M17.7098 13H19.3568M19.3568 13H21.0039M19.3568 13V18M7.00391 13H8.65097M8.65097 13H10.298M8.65097 13V18',
  d6: 'M6.25391 13C6.25391 12.5858 6.58969 12.25 7.00391 12.25H10.298C10.7122 12.25 11.048 12.5858 11.048 13C11.048 13.4142 10.7122 13.75 10.298 13.75H9.40097V18C9.40097 18.4142 9.06518 18.75 8.65097 18.75C8.23675 18.75 7.90097 18.4142 7.90097 18V13.75H7.00391C6.58969 13.75 6.25391 13.4142 6.25391 13Z',
  d7: 'M11.9429 12.3738C12.2888 12.1459 12.754 12.2416 12.9818 12.5875L14.0026 14.1368L15.0234 12.5875C15.2513 12.2416 15.7164 12.1459 16.0623 12.3738C16.4082 12.6017 16.5038 13.0668 16.276 13.4127L14.9007 15.5001L16.276 17.5875C16.5038 17.9334 16.4082 18.3985 16.0623 18.6264C15.7164 18.8543 15.2513 18.7586 15.0234 18.4127L14.0026 16.8633L12.9818 18.4127C12.754 18.7586 12.2888 18.8543 11.9429 18.6264C11.597 18.3985 11.5014 17.9334 11.7293 17.5875L13.1045 15.5001L11.7293 13.4127C11.5014 13.0668 11.597 12.6017 11.9429 12.3738Z',
  d8: 'M16.957 13C16.957 12.5858 17.2928 12.25 17.707 12.25H21.0011C21.4154 12.25 21.7511 12.5858 21.7511 13C21.7511 13.4142 21.4154 13.75 21.0011 13.75H20.1041V18C20.1041 18.4142 19.7683 18.75 19.3541 18.75C18.9399 18.75 18.6041 18.4142 18.6041 18V13.75H17.707C17.2928 13.75 16.957 13.4142 16.957 13Z',
  d9: 'M7.13841 20.7033C8.00786 20.7942 9.13899 20.7955 10.7476 20.7955H14.9079C15.4456 20.7955 15.8816 21.233 15.8816 21.7727C15.8816 22.3125 15.4456 22.75 14.9079 22.75H10.6927C9.15159 22.75 7.91879 22.75 6.93654 22.6473C5.92712 22.5417 5.0659 22.3186 4.32113 21.7919C3.93077 21.5159 3.58222 21.1871 3.28704 20.8146C2.71721 20.0956 2.47396 19.2577 2.35985 18.2843C2.24996 17.3469 2.24998 16.1743 2.25 14.7262V12.1428V12.1427C2.25 10.7244 2.24999 9.61179 2.30919 8.71107C2.36944 7.79422 2.49398 7.02952 2.77509 6.31755C3.61848 4.1815 5.39221 2.51875 7.61221 1.73658C8.99465 1.2495 10.6813 1.24971 13.5209 1.25007L13.7572 1.25009L13.9605 1.25004L13.9606 1.25004C15.5156 1.2495 16.548 1.24914 17.4068 1.55172C18.7834 2.03673 19.8918 3.071 20.4206 4.41031C20.6039 4.87447 20.6795 5.36014 20.7153 5.90477C20.75 6.43335 20.75 7.08083 20.75 7.87999V7.88006V10.0455C20.75 10.5852 20.3141 11.0228 19.7763 11.0228C19.2386 11.0228 18.8026 10.5852 18.8026 10.0455V7.91329C18.8026 7.07303 18.8021 6.49008 18.7721 6.03341C18.7427 5.58546 18.6879 5.32704 18.6102 5.1304C18.3001 4.34503 17.6344 3.70339 16.7618 3.39593C16.2584 3.21858 15.5913 3.20463 13.7572 3.20463C13.4591 3.20463 13.1023 3.2058 12.7641 3.20732C12.426 3.20885 11.8726 3.21134 11.4104 3.48025C11.1057 3.65756 10.8849 3.85945 10.7582 4.08004C10.5409 4.45845 10.4166 4.89711 10.4166 5.3648C10.4166 5.51193 10.4262 5.70446 10.4344 5.88206L10.4344 5.88212C10.4417 6.03696 10.4496 6.20566 10.4531 6.3737C10.461 6.75379 10.449 7.19733 10.3343 7.62548C10.1108 8.45945 9.4594 9.11086 8.62543 9.33432C8.19728 9.44904 7.75374 9.46105 7.37365 9.45315C7.20551 9.44966 7.03693 9.44174 6.88201 9.43446C6.70441 9.42622 6.48041 9.41667 6.33328 9.41667C5.88661 9.41667 5.46642 9.53003 5.09991 9.72955C4.87246 9.85337 4.65104 10.0965 4.47811 10.3875C4.19749 10.8596 4.19732 11.4982 4.19734 11.7652L4.19737 14.6653C4.19737 16.1888 4.19894 17.2461 4.29387 18.0559C4.38611 18.8427 4.55555 19.2754 4.81111 19.5979C4.9889 19.8223 5.20128 20.0234 5.44274 20.1941C5.80057 20.4472 6.28449 20.6139 7.13841 20.7033Z',
  d10: 'M12.4447 13L13.9941 15.5M13.9941 15.5L15.5435 18M13.9941 15.5L15.5435 13M13.9941 15.5L12.4447 18M17.8922 13H19.4415M19.4415 13H20.9909M19.4415 13V18M6.99805 13H8.54742M8.54742 13H10.0968M8.54742 13V18',
  d11: 'M20.0197 22.0088H3.08623C3.03106 22.0088 2.98633 21.964 2.98633 21.9088V8.99642L9.96006 2.00879H19.8612C19.9163 2.00879 19.9611 2.05356 19.9611 2.10879V10.013M9.96631 2.6191L10.0316 8.99642H3.5608',
  d12: 'M12.6916 11.9673L13.9996 14.0767L15.3076 11.9673L16.5824 12.7578L14.8821 15.4999L16.5824 18.2421L15.3076 19.0326L13.9996 16.9231L12.6916 19.0326L11.4168 18.2421L13.1171 15.4999L11.4168 12.7578L12.6916 11.9673ZM6.25 12.2499H10.8503V13.7499H9.30017V18.7499H7.80017V13.7499H6.25V12.2499ZM17.1497 12.2499H21.75V13.7499H20.1998V18.7499H18.6998V13.7499H17.1497V12.2499Z',
  d13: 'M20.75 2.22727C20.75 1.68754 20.3141 1.25 19.7763 1.25H9.63616L2.25 8.66338V21.7727C2.25 22.3125 2.68593 22.75 3.22368 22.75H20.75V20.7955H4.19727V10.0455H11.0131L11.0131 3.20459H18.8025V10H20.75V2.22727Z',
} as const;

export const IconTxt02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="txt-02-stroke-rounded IconTxt02StrokeRounded"
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

export const IconTxt02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="txt-02-duotone-rounded IconTxt02DuotoneRounded"
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

export const IconTxt02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="txt-02-twotone-rounded IconTxt02TwotoneRounded"
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

export const IconTxt02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="txt-02-solid-rounded IconTxt02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconTxt02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="txt-02-bulk-rounded IconTxt02BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconTxt02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="txt-02-stroke-sharp IconTxt02StrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconTxt02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="txt-02-solid-sharp IconTxt02SolidSharp"
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

export const iconPackOfTxt02: TheIconSelfPack = {
  name: 'Txt02',
  StrokeRounded: IconTxt02StrokeRounded,
  DuotoneRounded: IconTxt02DuotoneRounded,
  TwotoneRounded: IconTxt02TwotoneRounded,
  SolidRounded: IconTxt02SolidRounded,
  BulkRounded: IconTxt02BulkRounded,
  StrokeSharp: IconTxt02StrokeSharp,
  SolidSharp: IconTxt02SolidSharp,
};