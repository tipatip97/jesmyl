import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z',
  d2: 'M18 8C18 8 22 10.946 22 12C22 13.0541 18 16 18 16',
  d3: 'M5.99997 16C5.99997 16 2.00001 13.054 2 12C1.99999 10.9459 6 8 6 8',
  d4: 'M9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12Z',
  d5: 'M23.1683 10.9825C23.317 11.229 23.5 11.594 23.5 12C23.5 12.406 23.317 12.7711 23.1683 13.0175C23.0032 13.2913 22.7859 13.5692 22.5568 13.8321C22.0969 14.36 21.5101 14.9175 20.9735 15.3966L20.9251 15.4399C20.6221 15.7106 20.3104 15.9891 20.0279 16.1726C19.7278 16.3675 19.1463 16.661 18.4655 16.3913C17.777 16.1185 17.6072 15.5129 17.5525 15.1811C17.4997 14.8611 17.4999 14.4531 17.5 14.0521L17.5 9.94792C17.4999 9.54688 17.4997 9.13885 17.5525 8.81885C17.6072 8.48708 17.777 7.88151 18.4655 7.60872C19.1464 7.33896 19.7278 7.63248 20.0279 7.82745C20.3104 8.01094 20.6221 8.28947 20.9251 8.56016L20.9735 8.60341C21.5102 9.08252 22.0969 9.64002 22.5568 10.168C22.7859 10.4309 23.0032 10.7088 23.1683 10.9825Z',
  d6: 'M0.831676 13.0175C0.68304 12.771 0.500003 12.406 0.5 12C0.499997 11.594 0.683038 11.2289 0.831677 10.9825C0.996789 10.7087 1.21412 10.4308 1.44318 10.1679C1.90312 9.63997 2.48986 9.08247 3.02651 8.60337L3.07491 8.56013C3.37788 8.28945 3.68964 8.01092 3.9721 7.82744C4.27224 7.63247 4.85369 7.33896 5.53453 7.60873C6.22301 7.88152 6.39284 8.48709 6.44753 8.81885C6.50028 9.13886 6.50013 9.54688 6.49999 9.94793L6.49997 14.0521C6.50011 14.4531 6.50026 14.8611 6.4475 15.1812C6.39282 15.5129 6.22298 16.1185 5.53449 16.3913C4.85364 16.661 4.27219 16.3675 3.97206 16.1725C3.6896 15.9891 3.37785 15.7105 3.07488 15.4398L3.02647 15.3966C2.48983 14.9175 1.9031 14.36 1.44316 13.832C1.21411 13.5691 0.996785 13.2912 0.831676 13.0175Z',
  d7: 'M14.8287 11.9998L12.0003 14.8282L9.17188 11.9998L12.0003 9.17139L14.8287 11.9998Z',
  d8: 'M18 8L22 12L18 16',
  d9: 'M5.99997 8L2 12L6 16',
  d10: 'M12 8.5L15.5 12L12 15.5L8.5 12L12 8.5Z',
  d11: 'M6 7L7.41422 8.4142L3.82842 12.0001L7.41421 15.5858L6 17L1 12.0001L6 7Z',
  d12: 'M18 7L16.5858 8.4142L20.1716 12.0001L16.5858 15.5858L18 17L23 12.0001L18 7Z',
};

export const IconHorizonalScrollPointStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="horizonal-scroll-point-stroke-rounded IconHorizonalScrollPointStrokeRounded"
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

export const IconHorizonalScrollPointDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="horizonal-scroll-point-duotone-rounded IconHorizonalScrollPointDuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconHorizonalScrollPointTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="horizonal-scroll-point-twotone-rounded IconHorizonalScrollPointTwotoneRounded"
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

export const IconHorizonalScrollPointSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="horizonal-scroll-point-solid-rounded IconHorizonalScrollPointSolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHorizonalScrollPointBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="horizonal-scroll-point-bulk-rounded IconHorizonalScrollPointBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHorizonalScrollPointStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="horizonal-scroll-point-stroke-sharp IconHorizonalScrollPointStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconHorizonalScrollPointSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="horizonal-scroll-point-solid-sharp IconHorizonalScrollPointSolidSharp"
    >
      <path 
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

export const iconPackOfHorizonalScrollPoint: TheIconSelfPack = {
  name: 'HorizonalScrollPoint',
  StrokeRounded: IconHorizonalScrollPointStrokeRounded,
  DuotoneRounded: IconHorizonalScrollPointDuotoneRounded,
  TwotoneRounded: IconHorizonalScrollPointTwotoneRounded,
  SolidRounded: IconHorizonalScrollPointSolidRounded,
  BulkRounded: IconHorizonalScrollPointBulkRounded,
  StrokeSharp: IconHorizonalScrollPointStrokeSharp,
  SolidSharp: IconHorizonalScrollPointSolidSharp,
};