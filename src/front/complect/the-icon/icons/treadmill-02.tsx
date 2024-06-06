import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M18.8679 19H3.31956C2.59079 19 2 18.3967 2 17.6526C2 17.0969 2.33409 16.5982 2.84129 16.3968L15.5991 11.3307C18.6789 10.1078 22 12.4276 22 15.8018C22 17.5681 20.5977 19 18.8679 19Z',
  d2: 'M18 15H18.009',
  d3: 'M6 15L4 9',
  d4: 'M5 9H2',
  d5: 'M17 11L19 5C20.5924 5 21.6057 4.57709 22 3',
  d6: 'M6 19L5 21',
  d7: 'M18 19L18 21',
  d8: 'M6 15L4 9M5 9H2',
  d9: 'M22.7499 15.8035C22.7499 11.9233 18.9163 9.20818 15.3221 10.6354L2.56437 15.7015C1.76464 16.019 1.24988 16.7987 1.24988 17.6543C1.24988 18.7978 2.16176 19.7517 3.31943 19.7517H18.8678C21.0265 19.7517 22.7499 17.9692 22.7499 15.8035ZM17.9999 13.7498C17.3095 13.7498 16.7499 14.3094 16.7499 14.9998C16.7499 15.6901 17.3095 16.2498 17.9999 16.2498H18.0088C18.6992 16.2498 19.2588 15.6901 19.2588 14.9998C19.2588 14.3094 18.6992 13.7498 18.0088 13.7498H17.9999Z',
  d10: 'M5.36446 9.93149C5.73645 9.78578 5.99988 9.42367 5.99988 9.00003C5.99988 8.44774 5.55216 8.00003 4.99988 8.00003H4.02322C4.00779 7.99967 3.99232 7.99966 3.97682 8.00003H1.99988C1.44759 8.00003 0.999878 8.44774 0.999878 9.00003C0.999878 9.55231 1.44759 10 1.99988 10H3.27912L5.05119 15.3163C5.22584 15.8402 5.79216 16.1234 6.31611 15.9487C6.84005 15.7741 7.12321 15.2077 6.94856 14.6838L5.36446 9.93149Z',
  d11: 'M22.2427 2.02985C22.7785 2.1638 23.1042 2.70673 22.9703 3.24253C22.7259 4.22022 22.2473 4.97597 21.4663 5.44749C20.9396 5.76545 20.3429 5.91133 19.7314 5.96855L17.9488 11.3162C17.7742 11.8402 17.2079 12.1233 16.6839 11.9487C16.16 11.774 15.8768 11.2077 16.0515 10.6838L18.0515 4.68376C18.1876 4.27542 18.5697 3.99999 19.0001 3.99999C19.7342 3.99999 20.1648 3.89696 20.4326 3.73531C20.6549 3.6011 20.8802 3.35686 21.03 2.75746C21.164 2.22166 21.7069 1.8959 22.2427 2.02985Z',
  d12: 'M6.4471 18.1055C6.94108 18.3525 7.1413 18.9532 6.89431 19.4472L5.89431 21.4472C5.64732 21.9412 5.04665 22.1414 4.55267 21.8944C4.05869 21.6474 3.85847 21.0467 4.10546 20.5528L5.10546 18.5528C5.35245 18.0588 5.95312 17.8586 6.4471 18.1055ZM17.9999 18C18.5522 18 18.9999 18.4477 18.9999 19V21C18.9999 21.5523 18.5522 22 17.9999 22C17.4476 22 16.9999 21.5523 16.9999 21V19C16.9999 18.4477 17.4476 18 17.9999 18Z',
  d13: 'M15.3221 10.6354C18.9163 9.20818 22.7499 11.9233 22.7499 15.8035C22.7499 17.9692 21.0265 19.7517 18.8678 19.7517H3.31943C2.16176 19.7517 1.24988 18.7978 1.24988 17.6543C1.24988 16.7987 1.76464 16.019 2.56437 15.7015L15.3221 10.6354Z',
  d14: 'M16.7499 14.9998C16.7499 14.3094 17.3095 13.7498 17.9999 13.7498H18.0088C18.6992 13.7498 19.2588 14.3094 19.2588 14.9998C19.2588 15.6901 18.6992 16.2498 18.0088 16.2498H17.9999C17.3095 16.2498 16.7499 15.6901 16.7499 14.9998Z',
  d15: 'M22.9703 3.24253C23.1042 2.70673 22.7785 2.1638 22.2427 2.02985C21.7069 1.8959 21.164 2.22166 21.03 2.75746C20.8802 3.35686 20.6549 3.6011 20.4326 3.73531C20.1648 3.89696 19.7342 3.99999 19.0001 3.99999C18.5697 3.99999 18.1876 4.27542 18.0515 4.68376L16.1533 10.3784C16.8741 10.2169 17.5921 10.2117 18.2745 10.3391L19.7314 5.96855C20.3429 5.91133 20.9396 5.76545 21.4663 5.44749C22.2473 4.97597 22.7259 4.22022 22.9703 3.24253ZM17.0001 19.7517H18.8678C18.9121 19.7517 18.9562 19.7509 19.0001 19.7495V21C19.0001 21.5523 18.5524 22 18.0001 22C17.4478 22 17.0001 21.5523 17.0001 21V19.7517ZM4.5062 19.7517H6.74227L5.89452 21.4472C5.64753 21.9412 5.04686 22.1414 4.55288 21.8944C4.0589 21.6474 3.85868 21.0467 4.10567 20.5528L4.5062 19.7517ZM6.73565 14.0451L4.87389 14.7844L3.27912 10H1.99988C1.44759 10 0.999878 9.55231 0.999878 9.00003C0.999878 8.44774 1.44759 8.00003 1.99988 8.00003H3.97682C3.99232 7.99966 4.00779 7.99967 4.02322 8.00003H4.99988C5.55216 8.00003 5.99988 8.44774 5.99988 9.00003C5.99988 9.42367 5.73645 9.78578 5.36446 9.93149L6.73565 14.0451Z',
  d16: 'M6 15L4.5 9',
  d17: 'M7 9H2',
  d18: 'M22.75 15.3028C22.75 11.4226 18.9164 8.70745 15.3223 10.1347L2.56449 15.2007C1.76476 15.5183 1.25 16.298 1.25 17.1536C1.25 18.2971 2.16188 19.251 3.31956 19.251H18.8679C21.0266 19.251 22.75 17.4685 22.75 15.3028ZM18 13.251C17.3096 13.251 16.75 13.8106 16.75 14.501C16.75 15.1913 17.3096 15.751 18 15.751H18.009C18.6993 15.751 19.259 15.1913 19.259 14.501C19.259 13.8106 18.6993 13.251 18.009 13.251H18Z',
  d19: 'M20.9734 5.1644C20.4439 5.48406 19.8288 5.61964 19.1828 5.66356L17.348 11.1681L15.925 10.6938L18.0959 4.18093H18.6365C19.386 4.18093 19.8719 4.07722 20.1981 3.88027C20.4903 3.7039 20.7472 3.39571 20.9089 2.74902L22.3641 3.11283C22.1315 4.04323 21.6846 4.73505 20.9734 5.1644Z',
  d20: 'M1.63589 8.18115H6.63589V9.68115H5.09563L6.36259 14.749L4.90738 15.1128L3.54946 9.68115H1.63589V8.18115Z',
  d21: 'M5.33008 18.5801L4.33008 20.5801L5.67172 21.2509L6.67172 19.2509L5.33008 18.5801Z',
  d22: 'M17.25 19.251V21.251H18.75V19.251L17.25 19.251Z',
};

export const IconTreadmill02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="treadmill-02-stroke-rounded IconTreadmill02StrokeRounded"
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

export const IconTreadmill02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="treadmill-02-duotone-rounded IconTreadmill02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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

export const IconTreadmill02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="treadmill-02-twotone-rounded IconTreadmill02TwotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
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
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTreadmill02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="treadmill-02-solid-rounded IconTreadmill02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTreadmill02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="treadmill-02-bulk-rounded IconTreadmill02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTreadmill02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="treadmill-02-stroke-sharp IconTreadmill02StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
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

export const IconTreadmill02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="treadmill-02-solid-sharp IconTreadmill02SolidSharp"
    >
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

export const iconPackOfTreadmill02: TheIconSelfPack = {
  name: 'Treadmill02',
  StrokeRounded: IconTreadmill02StrokeRounded,
  DuotoneRounded: IconTreadmill02DuotoneRounded,
  TwotoneRounded: IconTreadmill02TwotoneRounded,
  SolidRounded: IconTreadmill02SolidRounded,
  BulkRounded: IconTreadmill02BulkRounded,
  StrokeSharp: IconTreadmill02StrokeSharp,
  SolidSharp: IconTreadmill02SolidSharp,
};