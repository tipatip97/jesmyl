import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M5 16C3.7492 16.6327 3 17.4385 3 18.3158C3 20.3505 7.02944 22 12 22C16.9706 22 21 20.3505 21 18.3158C21 17.4385 20.2508 16.6327 19 16',
  d2: 'M12 10L12 18',
  d3: 'M12 10C14.2091 10 16 8.20914 16 6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6C8 8.20914 9.79086 10 12 10ZM12 10L12 18',
  d4: 'M5.89232 15.2988C6.14162 15.7916 5.94422 16.3932 5.4514 16.6425C4.2666 17.2419 4 17.7948 4 18.0661C4 18.2198 4.07194 18.4614 4.40271 18.7815C4.73646 19.1045 5.27174 19.4415 6.01488 19.7457C7.49628 20.3521 9.61182 20.7502 12 20.7502C14.3882 20.7502 16.5037 20.3521 17.9851 19.7457C18.7283 19.4415 19.2635 19.1045 19.5973 18.7815C19.9281 18.4614 20 18.2198 20 18.0661C20 17.7948 19.7334 17.2419 18.5486 16.6425C18.0558 16.3932 17.8584 15.7916 18.1077 15.2988C18.357 14.806 18.9586 14.6086 19.4514 14.8579C20.7682 15.524 22 16.5826 22 18.0661C22 18.9296 21.5683 19.6573 20.9882 20.2187C20.4111 20.7772 19.6283 21.2341 18.7428 21.5966C16.9668 22.3236 14.5824 22.7502 12 22.7502C9.41762 22.7502 7.03316 22.3236 5.2572 21.5966C4.37166 21.2341 3.58892 20.7772 3.01182 20.2187C2.43174 19.6573 2 18.9296 2 18.0661C2 16.5826 3.2318 15.524 4.5486 14.8579C5.04141 14.6086 5.64302 14.806 5.89232 15.2988Z',
  d5: 'M12 1.25C9.37665 1.25 7.25 3.37665 7.25 6C7.25 8.19587 8.74003 10.0437 10.7642 10.5876C10.9008 10.6244 11 10.7456 11 10.8871L11 17.75C11 18.3023 11.4477 18.75 12 18.75C12.5523 18.75 13 18.3023 13 17.75L13 10.8871C13 10.7456 13.0992 10.6244 13.2358 10.5876C15.26 10.0437 16.75 8.19587 16.75 6C16.75 3.37665 14.6234 1.25 12 1.25Z',
  d6: 'M5.4514 16.6421C4.2666 17.2414 4 17.7943 4 18.0656C4 18.2194 4.07194 18.4609 4.40271 18.781C4.73646 19.104 5.27174 19.441 6.01488 19.7452C7.49628 20.3516 9.61182 20.7497 12 20.7497C14.3882 20.7497 16.5037 20.3516 17.9851 19.7452C18.7283 19.441 19.2635 19.104 19.5973 18.781C19.9281 18.4609 20 18.2194 20 18.0656C20 17.7943 19.7334 17.2414 18.5486 16.6421L19.4514 14.8574C20.7682 15.5236 22 16.5821 22 18.0656C22 18.9291 21.5683 19.6568 20.9882 20.2182C20.4111 20.7767 19.6283 21.2336 18.7428 21.5961C16.9668 22.3231 14.5824 22.7497 12 22.7497C9.41762 22.7497 7.03316 22.3231 5.2572 21.5961C4.37166 21.2336 3.58892 20.7767 3.01182 20.2182C2.43174 19.6568 2 18.9291 2 18.0656C2 16.5821 3.2318 15.5236 4.5486 14.8574L5.4514 16.6421Z',
  d7: 'M12 1.25C9.37665 1.25 7.25 3.37665 7.25 6C7.25 8.28031 8.85683 10.1853 11 10.6446L11 18H13L13 10.6446C15.1432 10.1853 16.75 8.28031 16.75 6C16.75 3.37665 14.6234 1.25 12 1.25Z',
} as const;

export const IconPinLocation03StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pin-location-03-stroke-rounded IconPinLocation03StrokeRounded"
    >
      <circle 
        cx="12" 
        cy="6" 
        r="4" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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
      />
    </TheIconWrapper>
  );
};

export const IconPinLocation03DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pin-location-03-duotone-rounded IconPinLocation03DuotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="12" 
        cy="6" 
        r="4" 
        fill="var(--icon-fill)"></circle>
      <circle 
        cx="12" 
        cy="6" 
        r="4" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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
      />
    </TheIconWrapper>
  );
};

export const IconPinLocation03TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pin-location-03-twotone-rounded IconPinLocation03TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPinLocation03SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pin-location-03-solid-rounded IconPinLocation03SolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconPinLocation03BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pin-location-03-bulk-rounded IconPinLocation03BulkRounded"
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
    </TheIconWrapper>
  );
};

export const IconPinLocation03StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pin-location-03-stroke-sharp IconPinLocation03StrokeSharp"
    >
      <circle 
        cx="12" 
        cy="6" 
        r="4" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPinLocation03SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pin-location-03-solid-sharp IconPinLocation03SolidSharp"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPinLocation03: TheIconSelfPack = {
  name: 'PinLocation03',
  StrokeRounded: IconPinLocation03StrokeRounded,
  DuotoneRounded: IconPinLocation03DuotoneRounded,
  TwotoneRounded: IconPinLocation03TwotoneRounded,
  SolidRounded: IconPinLocation03SolidRounded,
  BulkRounded: IconPinLocation03BulkRounded,
  StrokeSharp: IconPinLocation03StrokeSharp,
  SolidSharp: IconPinLocation03SolidSharp,
};