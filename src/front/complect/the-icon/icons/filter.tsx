import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M8.85746 12.5061C6.36901 10.6456 4.59564 8.59915 3.62734 7.44867C3.3276 7.09253 3.22938 6.8319 3.17033 6.3728C2.96811 4.8008 2.86701 4.0148 3.32795 3.5074C3.7889 3 4.60404 3 6.23433 3H17.7657C19.396 3 20.2111 3 20.672 3.5074C21.133 4.0148 21.0319 4.8008 20.8297 6.37281C20.7706 6.83191 20.6724 7.09254 20.3726 7.44867C19.403 8.60062 17.6261 10.6507 15.1326 12.5135C14.907 12.6821 14.7583 12.9567 14.7307 13.2614C14.4837 15.992 14.2559 17.4876 14.1141 18.2442C13.8853 19.4657 12.1532 20.2006 11.226 20.8563C10.6741 21.2466 10.0043 20.782 9.93278 20.1778C9.79643 19.0261 9.53961 16.6864 9.25927 13.2614C9.23409 12.9539 9.08486 12.6761 8.85746 12.5061Z',
  d2: 'M11.226 20.8563C10.6741 21.2466 10.0043 20.782 9.93278 20.1778C9.79643 19.0261 9.53961 16.6864 9.25927 13.2614C9.23409 12.9539 9.08486 12.6761 8.85746 12.5061C6.36901 10.6456 4.59564 8.59915 3.62734 7.44867C3.3276 7.09253 3.22938 6.8319 3.17033 6.3728C2.96811 4.8008 2.86701 4.0148 3.32795 3.5074C3.7889 3 4.60404 3 6.23433 3H12',
  d3: 'M6.18213 2.25C6.19946 2.25 6.21686 2.25 6.23431 2.25L17.8178 2.25C18.5884 2.24997 19.2426 2.24994 19.7587 2.32026C20.3049 2.3947 20.8273 2.56273 21.2272 3.00266C21.6306 3.44644 21.741 3.98125 21.7494 4.52794C21.7573 5.0385 21.6757 5.67272 21.5805 6.41218L21.5735 6.46603C21.5399 6.72771 21.4893 6.9808 21.384 7.23419C21.2771 7.49146 21.1298 7.71058 20.9464 7.92833C19.9667 9.09153 18.1454 11.1937 15.5814 13.108C15.54 13.139 15.4876 13.2124 15.4776 13.3225C15.2294 16.0654 15.0167 17.4903 14.8513 18.3729C14.68 19.2866 13.9733 19.9238 13.3719 20.3592C13.0559 20.588 12.7217 20.7934 12.4259 20.9732C12.3991 20.9895 12.3726 21.0055 12.3466 21.0213C12.0744 21.1866 11.8463 21.3251 11.6591 21.4574C11.1464 21.8198 10.5353 21.8337 10.0428 21.5646C9.56871 21.3055 9.25434 20.8158 9.18796 20.2555C9.0506 19.0959 8.79286 16.7485 8.51176 13.3161C8.50273 13.206 8.45034 13.1318 8.40839 13.1005C5.84956 11.1885 4.03182 9.09 3.05351 7.92829C2.87013 7.71054 2.72289 7.49143 2.61595 7.23416C2.51062 6.98078 2.46012 6.7277 2.42644 6.46603C2.42412 6.44801 2.42181 6.43006 2.41951 6.41217C2.32429 5.67272 2.24262 5.0385 2.25053 4.52794C2.259 3.98125 2.36942 3.44644 2.7728 3.00266C3.17269 2.56273 3.69502 2.3947 4.2413 2.32026C4.75741 2.24994 5.41157 2.24997 6.18213 2.25Z',
  d4: 'M6.18213 2.25C5.41157 2.24997 4.75741 2.24994 4.2413 2.3203C3.69502 2.39478 3.17269 2.56291 2.7728 3.0031C2.36942 3.44714 2.259 3.98226 2.25053 4.52927C2.24262 5.04013 2.32429 5.67472 2.41951 6.4146C2.45567 6.69563 2.50669 6.97407 2.61595 7.23708C2.72289 7.49449 2.87013 7.71373 3.05351 7.93162C4.79297 9.99837 6.5433 11.9258 8.67601 13.4721C9.67714 14.1986 10.7027 15.0001 12 15C13.2973 14.9999 14.3228 14.1983 15.3238 13.4717C17.4561 11.9253 19.2073 9.99775 20.9464 7.93165C21.1298 7.71377 21.2771 7.49453 21.384 7.23711C21.4893 6.98357 21.5399 6.73033 21.5735 6.4685C21.656 5.82721 21.7595 5.17764 21.7494 4.52927C21.741 3.98226 21.6306 3.44714 21.2272 3.0031C20.8273 2.56291 20.3049 2.39478 19.7587 2.3203C19.2426 2.24994 18.5884 2.24997 17.8178 2.25H6.18213Z',
  d5: 'M3.00098 3.10253V6.98276L9.00826 11.9828L9.96295 20.908C9.97042 20.9779 10.0456 21.0185 10.108 20.9864L13.9734 18.996L15.0153 11.9828L20.9995 6.9692V3.10252C20.9995 3.04725 20.9548 3.00244 20.8996 3.00244L3.10093 3.00245C3.04573 3.00245 3.00098 3.04726 3.00098 3.10253Z',
  d6: 'M2.46961 2.46973C2.61027 2.32904 2.80106 2.25 3 2.25H21C21.4142 2.25 21.75 2.58579 21.75 3V7.35128L15.7017 12.3915L14.6869 19.4951L10.3354 21.6708C10.1161 21.7805 9.85699 21.776 9.64159 21.6588C9.42618 21.5416 9.28167 21.3265 9.25459 21.0828L8.28792 12.3829L2.25094 7.35131L2.25 3.00016C2.24996 2.80122 2.32896 2.61041 2.46961 2.46973Z',
} as const;

export const IconFilterStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="filter-stroke-rounded IconFilterStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFilterDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="filter-duotone-rounded IconFilterDuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconFilterTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="filter-twotone-rounded IconFilterTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconFilterSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="filter-solid-rounded IconFilterSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFilterBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="filter-bulk-rounded IconFilterBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFilterStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="filter-stroke-sharp IconFilterStrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconFilterSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="filter-solid-sharp IconFilterSolidSharp"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFilter: TheIconSelfPack = {
  name: 'Filter',
  StrokeRounded: IconFilterStrokeRounded,
  DuotoneRounded: IconFilterDuotoneRounded,
  TwotoneRounded: IconFilterTwotoneRounded,
  SolidRounded: IconFilterSolidRounded,
  BulkRounded: IconFilterBulkRounded,
  StrokeSharp: IconFilterStrokeSharp,
  SolidSharp: IconFilterSolidSharp,
};