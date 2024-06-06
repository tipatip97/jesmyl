import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M20.6693 7C20.7527 6.8184 20.7971 6.62572 20.8297 6.37281C21.0319 4.8008 21.133 4.0148 20.672 3.5074C20.2111 3 19.396 3 17.7657 3H6.23433C4.60404 3 3.7889 3 3.32795 3.5074C2.86701 4.0148 2.96811 4.8008 3.17033 6.3728C3.22938 6.8319 3.3276 7.09253 3.62734 7.44867C4.59564 8.59915 6.36901 10.6456 8.85746 12.5061C9.08486 12.6761 9.23409 12.9539 9.25927 13.2614C9.53961 16.6864 9.79643 19.0261 9.93278 20.1778C10.0043 20.782 10.6741 21.2466 11.226 20.8563C12.1532 20.2006 13.8853 19.4657 14.1141 18.2442C14.2223 17.6668 14.3806 16.6588 14.5593 15',
  d2: 'M17.5 8V15M21 11.5L14 11.5',
  d3: 'M8.85746 12.5061C6.36901 10.6456 4.59564 8.59915 3.62734 7.44867C3.3276 7.09253 3.22938 6.8319 3.17033 6.3728C2.96811 4.8008 2.86701 4.0148 3.32795 3.5074C3.7889 3 4.60404 3 6.23433 3H17.7657C19.396 3 20.2111 3 20.672 3.5074C21.133 4.0148 21.0319 4.8008 20.8297 6.37281C20.7706 6.83191 20.6724 7.09254 20.3726 7.44867C19.403 8.60062 17.6261 10.6507 15.1326 12.5135C14.907 12.6821 14.7583 12.9567 14.7307 13.2614C14.4837 15.992 14.2559 17.4876 14.1141 18.2442C13.8853 19.4657 12.1532 20.2006 11.226 20.8563C10.6741 21.2466 10.0043 20.782 9.93278 20.1778C9.79643 19.0261 9.53961 16.6864 9.25927 13.2614C9.23409 12.9539 9.08486 12.6761 8.85746 12.5061Z',
  d4: 'M6.18213 2.25C5.41159 2.24997 4.7574 2.24994 4.2413 2.32026C3.69502 2.3947 3.17269 2.56273 2.7728 3.00266C2.36942 3.44644 2.259 3.98125 2.25053 4.52794C2.24262 5.0385 2.32429 5.67272 2.41951 6.41217L2.42644 6.46603C2.46012 6.7277 2.51062 6.98078 2.61595 7.23417C2.72289 7.49143 2.87013 7.71054 3.05351 7.9283C4.03182 9.09 5.84956 11.1885 8.40839 13.1005C8.45034 13.1318 8.50273 13.206 8.51176 13.3161C8.79286 16.7485 9.0506 19.0959 9.18796 20.2555C9.25434 20.8158 9.56871 21.3055 10.0428 21.5646C10.5353 21.8337 11.1464 21.8198 11.6591 21.4574C11.8463 21.3251 12.0743 21.1867 12.3465 21.0214L12.4259 20.9732C12.7217 20.7934 13.0559 20.588 13.3719 20.3592C13.9733 19.9238 14.68 19.2866 14.8513 18.3729C14.9875 17.6463 15.1557 16.5521 15.3494 14.6576C15.3807 14.3511 15.3964 14.1979 15.3071 14.0989C15.2177 14 15.0632 14 14.7542 14H14C12.6193 14 11.5 12.8807 11.5 11.5C11.5 10.1193 12.6193 9 14 9C14.4714 9 14.7071 9 14.8536 8.85355C15 8.70711 15 8.47141 15 8C15 6.61929 16.1193 5.5 17.5 5.5C18.8807 5.5 20 6.61929 20 8C20 8.17701 20 8.26552 20.0163 8.31298C20.0773 8.48999 20.286 8.56867 20.4486 8.47592C20.4922 8.45105 20.55 8.38526 20.6656 8.25369C20.7668 8.13858 20.8609 8.02988 20.9464 7.92833C21.1298 7.71058 21.2771 7.49147 21.384 7.23419C21.4893 6.9808 21.5399 6.72771 21.5735 6.46603L21.5805 6.41218C21.6757 5.67274 21.7573 5.03849 21.7494 4.52794C21.741 3.98125 21.6306 3.44644 21.2272 3.00266C20.8273 2.56273 20.3049 2.3947 19.7587 2.32026C19.2426 2.24994 18.5884 2.24997 17.8179 2.25H6.18213Z',
  d5: 'M17.5 7C18.0523 7 18.5 7.44772 18.5 8V10.5H21C21.5523 10.5 22 10.9477 22 11.5C22 12.0523 21.5523 12.5 21 12.5H18.5V15C18.5 15.5523 18.0523 16 17.5 16C16.9477 16 16.5 15.5523 16.5 15V12.5L14 12.5C13.4477 12.5 13 12.0523 13 11.5C13 10.9477 13.4477 10.5 14 10.5H16.5V8C16.5 7.44772 16.9477 7 17.5 7Z',
  d6: 'M16.9854 7.99268V15.9927M20.9854 11.9927H12.9854',
  d7: 'M20.9995 6.9692V3.10252C20.9995 3.04725 20.9548 3.00244 20.8996 3.00244L3.10093 3.00245C3.04573 3.00245 3.00098 3.04726 3.00098 3.10253V6.98276L9.00826 11.9828L9.96295 20.908C9.97042 20.9779 10.0456 21.0185 10.108 20.9864L13.9734 18.996L14.2626 17.0494',
  d8: 'M16 11V8H18V11H21V13H18V16H16V13H13V11H16Z',
  d9: 'M3 2.25C2.80106 2.25 2.61027 2.32904 2.46961 2.46973C2.32896 2.61041 2.24996 2.80122 2.25 3.00016L2.25094 7.35131L8.28792 12.3829L9.25459 21.0828C9.28167 21.3265 9.42618 21.5416 9.64159 21.6588C9.85699 21.776 10.1161 21.7805 10.3354 21.6708L14.5 19.5885V14.5H11.5V9.5H14.5V6.5H19.5V9.22628L21.75 7.35128V3C21.75 2.58579 21.4142 2.25 21 2.25H3Z',
};

export const IconFilterAddStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="filter-add-stroke-rounded IconFilterAddStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconFilterAddDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="filter-add-duotone-rounded IconFilterAddDuotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFilterAddTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="filter-add-twotone-rounded IconFilterAddTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconFilterAddSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="filter-add-solid-rounded IconFilterAddSolidRounded"
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

export const IconFilterAddBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="filter-add-bulk-rounded IconFilterAddBulkRounded"
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

export const IconFilterAddStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="filter-add-stroke-sharp IconFilterAddStrokeSharp"
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
      />
    </TheIconWrapper>
  );
};

export const IconFilterAddSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="filter-add-solid-sharp IconFilterAddSolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfFilterAdd: TheIconSelfPack = {
  name: 'FilterAdd',
  StrokeRounded: IconFilterAddStrokeRounded,
  DuotoneRounded: IconFilterAddDuotoneRounded,
  TwotoneRounded: IconFilterAddTwotoneRounded,
  SolidRounded: IconFilterAddSolidRounded,
  BulkRounded: IconFilterAddBulkRounded,
  StrokeSharp: IconFilterAddStrokeSharp,
  SolidSharp: IconFilterAddSolidSharp,
};