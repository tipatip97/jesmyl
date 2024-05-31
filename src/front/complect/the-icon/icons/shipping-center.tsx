import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M6 9C6 6.17157 6 4.75736 6.87868 3.87868C7.75736 3 9.17157 3 12 3C14.8284 3 16.2426 3 17.1213 3.87868C18 4.75736 18 6.17157 18 9C18 11.8284 18 13.2426 17.1213 14.1213C16.2426 15 14.8284 15 12 15C9.17157 15 7.75736 15 6.87868 14.1213C6 13.2426 6 11.8284 6 9Z',
  d2: 'M11.9955 18H12.0045M7 18H7.00897M16.991 18H17',
  d3: 'M10.5 6H13.5',
  d4: 'M1 17.875C1 15.6659 2.79086 13.875 5 13.875H19C21.2091 13.875 23 15.6659 23 17.875C23 20.0841 21.2091 21.875 19 21.875H5C2.79086 21.875 1 20.0841 1 17.875ZM5 15.875C3.89543 15.875 3 16.7704 3 17.875C3 18.9796 3.89543 19.875 5 19.875H19C20.1046 19.875 21 18.9796 21 17.875C21 16.7704 20.1046 15.875 19 15.875H5Z',
  d5: 'M6 17.875C6 17.3227 6.44772 16.875 7 16.875H7.00897C7.56126 16.875 8.00897 17.3227 8.00897 17.875C8.00897 18.4273 7.56126 18.875 7.00897 18.875H7C6.44772 18.875 6 18.4273 6 17.875ZM10.9955 17.875C10.9955 17.3227 11.4432 16.875 11.9955 16.875H12.0045C12.5568 16.875 13.0045 17.3227 13.0045 17.875C13.0045 18.4273 12.5568 18.875 12.0045 18.875H11.9955C11.4432 18.875 10.9955 18.4273 10.9955 17.875ZM15.991 17.875C15.991 17.3227 16.4387 16.875 16.991 16.875H17C17.5523 16.875 18 17.3227 18 17.875C18 18.4273 17.5523 18.875 17 18.875H16.991C16.4387 18.875 15.991 18.4273 15.991 17.875Z',
  d6: 'M12.0549 2.125H12.0549H12.0549H11.9451H11.9451H11.9451C10.5775 2.12498 9.47521 2.12496 8.60825 2.24152C7.70814 2.36254 6.95027 2.62143 6.34835 3.22335C5.74643 3.82527 5.48754 4.58314 5.36652 5.48325C5.24996 6.35021 5.24998 7.45252 5.25 8.8201V8.82011V8.82013V8.92988V8.92989V8.92991C5.24998 10.2975 5.24996 11.3998 5.36652 12.2668C5.48754 13.1669 5.74643 13.9247 6.34835 14.5267C6.95027 15.1286 7.70814 15.3875 8.60825 15.5085C9.47521 15.625 10.5775 15.625 11.9451 15.625H11.9451H11.9451H12.0549H12.0549H12.0549C13.4225 15.625 14.5248 15.625 15.3918 15.5085C16.2919 15.3875 17.0497 15.1286 17.6517 14.5267C18.2536 13.9247 18.5125 13.1669 18.6335 12.2668C18.75 11.3998 18.75 10.2975 18.75 8.92989V8.92988V8.92987V8.82013V8.82012V8.82012C18.75 7.45253 18.75 6.35022 18.6335 5.48325C18.5125 4.58314 18.2536 3.82527 17.6517 3.22335C17.0497 2.62143 16.2919 2.36254 15.3918 2.24152C14.5248 2.12496 13.4225 2.12498 12.0549 2.125ZM10.5 4.875C9.94772 4.875 9.5 5.32272 9.5 5.875C9.5 6.42729 9.94772 6.875 10.5 6.875H13.5C14.0523 6.875 14.5 6.42729 14.5 5.875C14.5 5.32272 14.0523 4.875 13.5 4.875H10.5Z',
  d7: 'M12.0549 2.125C13.4225 2.12498 14.5248 2.12496 15.3918 2.24152C16.2919 2.36254 17.0497 2.62143 17.6517 3.22335C18.2536 3.82527 18.5125 4.58314 18.6335 5.48325C18.75 6.35022 18.75 7.45254 18.75 8.82012V8.82013V8.92987V8.92988C18.75 10.2975 18.75 11.3998 18.6335 12.2668C18.5125 13.1669 18.2536 13.9247 17.6517 14.5267C17.0497 15.1286 16.2919 15.3875 15.3918 15.5085C14.5248 15.625 13.4225 15.625 12.0549 15.625H12.0549H11.9451H11.9451C10.5775 15.625 9.47522 15.625 8.60825 15.5085C7.70814 15.3875 6.95027 15.1286 6.34835 14.5267C5.74643 13.9247 5.48754 13.1669 5.36652 12.2668C5.24996 11.3998 5.24998 10.2975 5.25 8.92989V8.92988V8.82013V8.82011C5.24998 7.45253 5.24996 6.35021 5.36652 5.48325C5.48754 4.58314 5.74643 3.82527 6.34835 3.22335C6.95027 2.62143 7.70814 2.36254 8.60825 2.24152C9.47521 2.12496 10.5775 2.12498 11.9451 2.125H11.9451H12.0549H12.0549Z',
  d8: 'M9.5 5.875C9.5 5.32272 9.94772 4.875 10.5 4.875H13.5C14.0523 4.875 14.5 5.32272 14.5 5.875C14.5 6.42728 14.0523 6.875 13.5 6.875H10.5C9.94772 6.875 9.5 6.42728 9.5 5.875Z',
  d9: 'M2 18C2 16.3431 3.34315 15 5 15H19C20.6569 15 22 16.3431 22 18C22 19.6569 20.6569 21 19 21H5C3.34315 21 2 19.6569 2 18Z',
  d10: 'M18 15V3H6V15H18Z',
  d11: 'M10 6H14',
  d12: 'M1.25 18C1.25 15.9289 3.00016 14.25 5.15909 14.25H18.8409C20.9998 14.25 22.75 15.9289 22.75 18C22.75 20.0711 20.9998 21.75 18.8409 21.75H5.15909C3.00016 21.75 1.25 20.0711 1.25 18ZM5.15909 16.125C4.07963 16.125 3.20455 16.9645 3.20455 18C3.20455 19.0355 4.07963 19.875 5.15909 19.875H18.8409C19.9204 19.875 20.7955 19.0355 20.7955 18C20.7955 16.9645 19.9204 16.125 18.8409 16.125H5.15909Z',
  d13: 'M6 18C6 17.4477 6.44772 17 7 17H7.00897C7.56126 17 8.00897 17.4477 8.00897 18C8.00897 18.5523 7.56126 19 7.00897 19H7C6.44772 19 6 18.5523 6 18ZM10.9955 18C10.9955 17.4477 11.4432 17 11.9955 17H12.0045C12.5568 17 13.0045 17.4477 13.0045 18C13.0045 18.5523 12.5568 19 12.0045 19H11.9955C11.4432 19 10.9955 18.5523 10.9955 18ZM15.991 18C15.991 17.4477 16.4387 17 16.991 17H17C17.5523 17 18 17.4477 18 18C18 18.5523 17.5523 19 17 19H16.991C16.4387 19 15.991 18.5523 15.991 18Z',
  d14: 'M6 2.25C5.58579 2.25 5.25 2.58579 5.25 3V15C5.25 15.4142 5.58579 15.75 6 15.75H18C18.4142 15.75 18.75 15.4142 18.75 15V3C18.75 2.58579 18.4142 2.25 18 2.25H6ZM10 7H14V5H10V7Z',
} as const;

export const IconShippingCenterStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shipping-center-stroke-rounded IconShippingCenterStrokeRounded"
    >
      <rect 
        x="2" 
        y="15" 
        width="20" 
        height="6" 
        rx="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></rect>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconShippingCenterDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shipping-center-duotone-rounded IconShippingCenterDuotoneRounded"
    >
      <rect 
        opacity="var(--icon-opacity)" 
        x="2" 
        y="15" 
        width="20" 
        height="6" 
        rx="3" 
        fill="var(--icon-fill)"></rect>
      <rect 
        x="2" 
        y="15" 
        width="20" 
        height="6" 
        rx="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></rect>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconShippingCenterTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shipping-center-twotone-rounded IconShippingCenterTwotoneRounded"
    >
      <rect 
        x="2" 
        y="15" 
        width="20" 
        height="6" 
        rx="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></rect>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconShippingCenterSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shipping-center-solid-rounded IconShippingCenterSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconShippingCenterBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shipping-center-bulk-rounded IconShippingCenterBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconShippingCenterStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shipping-center-stroke-sharp IconShippingCenterStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
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
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconShippingCenterSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shipping-center-solid-sharp IconShippingCenterSolidSharp"
    >
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

export const iconPackOfShippingCenter: TheIconSelfPack = {
  name: 'ShippingCenter',
  StrokeRounded: IconShippingCenterStrokeRounded,
  DuotoneRounded: IconShippingCenterDuotoneRounded,
  TwotoneRounded: IconShippingCenterTwotoneRounded,
  SolidRounded: IconShippingCenterSolidRounded,
  BulkRounded: IconShippingCenterBulkRounded,
  StrokeSharp: IconShippingCenterStrokeSharp,
  SolidSharp: IconShippingCenterSolidSharp,
};