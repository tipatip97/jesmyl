import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M20.9987 4.5C20.9869 4.06504 20.8956 3.75346 20.672 3.5074C20.2111 3 19.396 3 17.7657 3H6.23433C4.60404 3 3.7889 3 3.32795 3.5074C2.86701 4.0148 2.96811 4.8008 3.17033 6.3728C3.22938 6.8319 3.3276 7.09253 3.62734 7.44867C4.59564 8.59915 6.36901 10.6456 8.85746 12.5061C9.08486 12.6761 9.23409 12.9539 9.25927 13.2614C9.53961 16.6864 9.79643 19.0261 9.93278 20.1778C10.0043 20.782 10.6741 21.2466 11.226 20.8563C12.1532 20.2006 13.8853 19.4657 14.1141 18.2442C14.1986 17.7934 14.3136 17.0803 14.445 16',
  d2: 'M21 7L15 13M21 13L15 7',
  d3: 'M8.85746 12.5061C6.36901 10.6456 4.59564 8.59915 3.62734 7.44867C3.3276 7.09253 3.22938 6.8319 3.17033 6.3728C2.96811 4.8008 2.86701 4.0148 3.32795 3.5074C3.7889 3 4.60404 3 6.23433 3H17.7657C19.396 3 20.2111 3 20.672 3.5074C21.133 4.0148 21.0319 4.8008 20.8297 6.37281C20.7706 6.83191 20.6724 7.09254 20.3726 7.44867C19.403 8.60062 17.6261 10.6507 15.1326 12.5135C14.907 12.6821 14.7583 12.9567 14.7307 13.2614C14.4837 15.992 14.2559 17.4876 14.1141 18.2442C13.8853 19.4657 12.1532 20.2006 11.226 20.8563C10.6741 21.2466 10.0043 20.782 9.93278 20.1778C9.79643 19.0261 9.53961 16.6864 9.25927 13.2614C9.23409 12.9539 9.08486 12.6761 8.85746 12.5061Z',
  d4: 'M6.18378 2.25C5.41291 2.24997 4.75845 2.24994 4.24214 2.32026C3.69563 2.3947 3.17307 2.56273 2.77302 3.00266C2.36947 3.44644 2.259 3.98125 2.25053 4.52794C2.24262 5.0385 2.32432 5.67272 2.41958 6.41217L2.42651 6.46603C2.46021 6.7277 2.51073 6.98078 2.6161 7.23417C2.72308 7.49143 2.87039 7.71054 3.05384 7.9283C4.03257 9.09 5.85107 11.1885 8.41097 13.1005C8.45294 13.1318 8.50535 13.206 8.51438 13.3161C8.7956 16.7485 9.05345 19.0959 9.19087 20.2555C9.25728 20.8158 9.57178 21.3055 10.0461 21.5646C10.5388 21.8337 11.1502 21.8198 11.663 21.4574C11.8503 21.3251 12.0784 21.1867 12.3507 21.0214L12.4302 20.9732C12.7261 20.7934 13.0604 20.588 13.3766 20.3592C13.9782 19.9238 14.6852 19.2866 14.8566 18.3729C14.9498 17.8758 15.058 17.2067 15.1791 16.227C15.2178 15.9136 15.2372 15.7569 15.1678 15.6613C15.0984 15.5656 14.9068 15.5282 14.5238 15.4535C14.0522 15.3614 13.6021 15.1329 13.2368 14.7678C12.2601 13.7915 12.2601 12.2085 13.2368 11.2322L13.7622 10.7071C14.0957 10.3738 14.2624 10.2071 14.2624 10C14.2624 9.79289 14.0957 9.62623 13.7622 9.29289L13.2368 8.76777C12.2601 7.79146 12.2601 6.20854 13.2368 5.23223C14.2136 4.25592 15.7971 4.25592 16.7739 5.23223L17.4407 5.89878C17.7075 6.16545 17.8408 6.29878 18.0066 6.29878C18.1724 6.29878 18.3057 6.16545 18.5725 5.89878L19.2394 5.23224C19.7834 4.68841 20.5158 4.4475 21.2266 4.50953C21.501 4.53347 21.6382 4.54544 21.7048 4.47411C21.7713 4.40278 21.754 4.29319 21.7193 4.07399C21.657 3.68095 21.5128 3.30798 21.2351 3.00266C20.8351 2.56273 20.3125 2.3947 19.766 2.32026C19.2497 2.24994 18.5953 2.24997 17.8244 2.25H6.18378Z',
  d5: 'M14.2929 6.29289C14.6834 5.90237 15.3166 5.90237 15.7071 6.29289L18 8.58579L20.2929 6.29289C20.6834 5.90237 21.3166 5.90237 21.7071 6.29289C22.0976 6.68342 22.0976 7.31658 21.7071 7.70711L19.4142 10L21.7071 12.2929C22.0976 12.6834 22.0976 13.3166 21.7071 13.7071C21.3166 14.0976 20.6834 14.0976 20.2929 13.7071L18 11.4142L15.7071 13.7071C15.3166 14.0976 14.6834 14.0976 14.2929 13.7071C13.9024 13.3166 13.9024 12.6834 14.2929 12.2929L16.5858 10L14.2929 7.70711C13.9024 7.31658 13.9024 6.68342 14.2929 6.29289Z',
  d6: 'M20.9889 8.00049L13.9971 15.0005M20.9889 15.0005L13.9971 8.00049',
  d7: 'M14.2936 17.0068L13.9933 19.018L10.1069 20.9864C10.0444 21.0185 9.9692 20.9779 9.96172 20.908L9.0068 11.9828L2.99805 6.98276V3.10253C2.99805 3.04726 3.04281 3.00245 3.09802 3.00245L20.901 3.00244C20.9562 3.00244 21.001 3.04725 21.001 3.10252V6.0298',
  d8: 'M18.9573 11.5001L21.7502 14.293L20.3359 15.7072L17.543 12.9143L14.7502 15.7072L13.3359 14.293L16.1288 11.5001L13.3359 8.70718L14.7502 7.29297L17.543 10.0859L20.3359 7.29297L21.7502 8.70718L18.9573 11.5001Z',
  d9: 'M3 2.25C2.80106 2.25 2.61027 2.32904 2.46961 2.46973C2.32896 2.61041 2.24996 2.80122 2.25 3.00016L2.25094 7.35131L8.28792 12.3829L9.25459 21.0828C9.28167 21.3265 9.42618 21.5416 9.64159 21.6588C9.85699 21.776 10.1161 21.7805 10.3354 21.6708L14.6869 19.4951L14.7504 17.8287L11.2148 14.2932L14.0077 11.5003L11.2148 8.70741L14.7504 5.17188L17.5433 7.96477L20.3362 5.17188L21.75 6.58571V3C21.75 2.58579 21.4142 2.25 21 2.25H3Z',
};

export const IconFilterRemoveStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="filter-remove-stroke-rounded IconFilterRemoveStrokeRounded"
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

export const IconFilterRemoveDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="filter-remove-duotone-rounded IconFilterRemoveDuotoneRounded"
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

export const IconFilterRemoveTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="filter-remove-twotone-rounded IconFilterRemoveTwotoneRounded"
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

export const IconFilterRemoveSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="filter-remove-solid-rounded IconFilterRemoveSolidRounded"
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

export const IconFilterRemoveBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="filter-remove-bulk-rounded IconFilterRemoveBulkRounded"
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

export const IconFilterRemoveStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="filter-remove-stroke-sharp IconFilterRemoveStrokeSharp"
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

export const IconFilterRemoveSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="filter-remove-solid-sharp IconFilterRemoveSolidSharp"
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

export const iconPackOfFilterRemove: TheIconSelfPack = {
  name: 'FilterRemove',
  StrokeRounded: IconFilterRemoveStrokeRounded,
  DuotoneRounded: IconFilterRemoveDuotoneRounded,
  TwotoneRounded: IconFilterRemoveTwotoneRounded,
  SolidRounded: IconFilterRemoveSolidRounded,
  BulkRounded: IconFilterRemoveBulkRounded,
  StrokeSharp: IconFilterRemoveStrokeSharp,
  SolidSharp: IconFilterRemoveSolidSharp,
};