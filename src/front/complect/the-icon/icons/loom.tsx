import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12Z',
  d2: 'M12 9V4M12 15V20',
  d3: 'M15 12L20 12M9 12L4 12',
  d4: 'M14.5976 10.5L18.9277 8M9.40145 13.5L5.07133 16',
  d5: 'M13.5 14.5976L16 18.9277M10.5 9.40145L8 5.07133',
  d6: 'M13.5 9.40239L16 5.07227M10.5 14.5985L8 18.9287',
  d7: 'M14.5976 13.5L18.9277 16M9.40146 10.5L5.07133 8',
  d8: 'M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14ZM16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z',
  d9: 'M12 3C12.5523 3 13 3.44772 13 4V9C13 9.55228 12.5523 10 12 10C11.4477 10 11 9.55228 11 9V4C11 3.44772 11.4477 3 12 3ZM12 14C12.5523 14 13 14.4477 13 15V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V15C11 14.4477 11.4477 14 12 14Z',
  d10: 'M21 12C21 12.5523 20.5523 13 20 13L15 13C14.4477 13 14 12.5523 14 12C14 11.4477 14.4477 11 15 11L20 11C20.5523 11 21 11.4477 21 12ZM10 12C10 12.5523 9.55229 13 9 13L4 13C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11L9 11C9.55229 11 10 11.4477 10 12Z',
  d11: 'M19.7938 7.49981C20.0699 7.97811 19.906 8.5897 19.4277 8.86584L15.0976 11.3658C14.6193 11.642 14.0077 11.4781 13.7316 10.9998C13.4554 10.5215 13.6193 9.90993 14.0976 9.63379L18.4277 7.13379C18.906 6.85765 19.5176 7.02152 19.7938 7.49981ZM10.2675 12.9998C10.5436 13.4781 10.3797 14.0897 9.90146 14.3658L5.57133 16.8658C5.09304 17.142 4.48145 16.9781 4.2053 16.4998C3.92916 16.0215 4.09304 15.4099 4.57133 15.1338L8.90146 12.6338C9.37975 12.3576 9.99134 12.5215 10.2675 12.9998Z',
  d12: 'M16.5002 19.7939C16.0219 20.0701 15.4103 19.9062 15.1342 19.4279L12.6342 15.0978C12.358 14.6195 12.5219 14.0079 13.0002 13.7318C13.4785 13.4556 14.0901 13.6195 14.3662 14.0978L16.8662 18.4279C17.1424 18.9062 16.9785 19.5178 16.5002 19.7939ZM11.0002 10.2677C10.5219 10.5438 9.9103 10.3799 9.63416 9.90164L7.13416 5.57151C6.85802 5.09322 7.02189 4.48163 7.50019 4.20549C7.97848 3.92934 8.59007 4.09322 8.86621 4.57151L11.3662 8.90164C11.6424 9.37993 11.4785 9.99152 11.0002 10.2677Z',
  d13: 'M16.4998 4.20605C16.9781 4.4822 17.142 5.09379 16.8658 5.57208L14.3658 9.90221C14.0897 10.3805 13.4781 10.5444 12.9998 10.2682C12.5215 9.99209 12.3576 9.3805 12.6338 8.90221L15.1338 4.57208C15.4099 4.09379 16.0215 3.92991 16.4998 4.20605ZM10.9998 13.7323C11.4781 14.0085 11.642 14.6201 11.3658 15.0984L8.86584 19.4285C8.5897 19.9068 7.97811 20.0707 7.49981 19.7945C7.02152 19.5184 6.85765 18.9068 7.13379 18.4285L9.63379 14.0984C9.90993 13.6201 10.5215 13.4562 10.9998 13.7323Z',
  d14: 'M19.7938 16.4998C19.5176 16.9781 18.906 17.142 18.4277 16.8658L14.0976 14.3658C13.6193 14.0897 13.4554 13.4781 13.7316 12.9998C14.0077 12.5215 14.6193 12.3576 15.0976 12.6338L19.4277 15.1338C19.906 15.4099 20.0699 16.0215 19.7938 16.4998ZM10.2675 10.9998C9.99134 11.4781 9.37975 11.642 8.90146 11.3658L4.57133 8.86584C4.09304 8.5897 3.92916 7.97811 4.20531 7.49981C4.48145 7.02152 5.09304 6.85765 5.57133 7.13379L9.90146 9.63379C10.3798 9.90993 10.5436 10.5215 10.2675 10.9998Z',
  d15: 'M13 3V10H11V3H13ZM13 14V21H11V14H13Z',
  d16: 'M21 13L14 13L14 11L21 11L21 13ZM10 13L3 13L3 11L10 11L10 13Z',
  d17: 'M20.2938 8.36584L14.2316 11.8658L13.2316 10.1338L19.2938 6.63379L20.2938 8.36584ZM10.7675 13.8658L4.7053 17.3658L3.7053 15.6338L9.76748 12.1338L10.7675 13.8658Z',
  d18: 'M15.6342 20.2939L12.1342 14.2318L13.8662 13.2318L17.3662 19.2939L15.6342 20.2939ZM10.1342 10.7677L6.63416 4.70549L8.36621 3.70549L11.8662 9.76767L10.1342 10.7677Z',
  d19: 'M17.3658 4.70605L13.8658 10.7682L12.1338 9.76823L15.6338 3.70605L17.3658 4.70605ZM11.8658 14.2323L8.36584 20.2945L6.63379 19.2945L10.1338 13.2323L11.8658 14.2323Z',
  d20: 'M19.2938 17.3658L13.2316 13.8658L14.2316 12.1338L20.2938 15.6338L19.2938 17.3658ZM9.76748 11.8658L3.70531 8.36584L4.70531 6.63379L10.7675 10.1338L9.76748 11.8658Z',
} as const;

export const IconLoomStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="loom-stroke-rounded IconLoomStrokeRounded"
    >
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

export const IconLoomDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="loom-duotone-rounded IconLoomDuotoneRounded"
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

export const IconLoomTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="loom-twotone-rounded IconLoomTwotoneRounded"
    >
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
        opacity="var(--icon-opacity)" 
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
        opacity="var(--icon-opacity)" 
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
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLoomSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="loom-solid-rounded IconLoomSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
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

export const IconLoomBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="loom-bulk-rounded IconLoomBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconLoomStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="loom-stroke-sharp IconLoomStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLoomSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="loom-solid-sharp IconLoomSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfLoom: TheIconSelfPack = {
  name: 'Loom',
  StrokeRounded: IconLoomStrokeRounded,
  DuotoneRounded: IconLoomDuotoneRounded,
  TwotoneRounded: IconLoomTwotoneRounded,
  SolidRounded: IconLoomSolidRounded,
  BulkRounded: IconLoomBulkRounded,
  StrokeSharp: IconLoomStrokeSharp,
  SolidSharp: IconLoomSolidSharp,
};