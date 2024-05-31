import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M18 11L20.3458 8.84853C20.7819 8.44853 21 8.24853 21 8M18 5L20.3458 7.15147C20.7819 7.55147 21 7.75147 21 8M21 8C3 8 3 21 3 21',
  d2: 'M13 21L18 16M18 21L13 16',
  d3: 'M17.263 4.32408C17.6363 3.91707 18.2689 3.88973 18.6759 4.26303L21.6052 6.99301C21.7834 7.20722 22 7.54155 22 8.00001C22 8.45846 21.7834 8.79279 21.6052 9.007L18.6759 11.737C18.2689 12.1103 17.6363 12.0829 17.263 11.6759C16.8897 11.2689 16.9171 10.6363 17.3241 10.263L18.61 9.08368C11.4944 9.59946 7.91183 12.412 6.07219 15.0692C5.03562 16.5665 4.51568 18.0668 4.25564 19.1936C4.12587 19.756 4.06183 20.2211 4.0303 20.5398C4.01455 20.699 4.00365 20.9227 4.00001 21.0016C3.99936 21.5533 3.55188 22 3 22C2.44772 22 2 21.5523 2 21C2 20.8086 2.0206 20.5392 2.04001 20.343C2.0788 19.9508 2.15538 19.4003 2.30686 18.7439C2.60932 17.4332 3.21438 15.6835 4.42781 13.9308C6.68758 10.6667 10.9368 7.56226 18.7755 7.06819L17.3241 5.73698C16.9171 5.36368 16.8897 4.7311 17.263 4.32408Z',
  d4: 'M2 5.5C2 3.567 3.567 2 5.5 2C7.433 2 9 3.567 9 5.5C9 7.433 7.433 9 5.5 9C3.567 9 2 7.433 2 5.5Z',
  d5: 'M12.2929 15.2929C12.6834 14.9024 13.3166 14.9024 13.7071 15.2929L15.5 17.0858L17.2929 15.2929C17.6834 14.9024 18.3166 14.9024 18.7071 15.2929C19.0976 15.6834 19.0976 16.3166 18.7071 16.7071L16.9142 18.5L18.7071 20.2929C19.0976 20.6834 19.0976 21.3166 18.7071 21.7071C18.3166 22.0976 17.6834 22.0976 17.2929 21.7071L15.5 19.9142L13.7071 21.7071C13.3166 22.0976 12.6834 22.0976 12.2929 21.7071C11.9024 21.3166 11.9024 20.6834 12.2929 20.2929L14.0858 18.5L12.2929 16.7071C11.9024 16.3166 11.9024 15.6834 12.2929 15.2929Z',
  d6: 'M17.5 11.5L21 8L17.5 4.5M3 21C3 21 3 8.21755 20.5501 8.00274',
  d7: 'M17.7929 3.79297L22 8.00008L17.7929 12.2072L16.3787 10.793L18.0792 9.09243C11.0411 9.63031 7.90176 12.4269 6.07219 15.0696C5.03562 16.5669 4.51568 18.0672 4.25564 19.194C4.12587 19.7563 4.06183 20.2214 4.0303 20.5402C4.01455 20.6994 4.00697 20.8216 4.00333 20.9005C4.00151 20.9399 4.00068 20.9685 4.0003 20.9854L4.00001 21.0019C4.00001 21.0019 4 21.0004 3 21.0004C2 21.0004 2 20.9989 2 20.9989L2 20.9971L2.00002 20.9926L2.00013 20.98L2.0008 20.9408C2.00152 20.9085 2.00288 20.8641 2.00546 20.8083C2.0106 20.6968 2.0206 20.5396 2.04001 20.3434C2.07879 19.9512 2.15538 19.4007 2.30686 18.7443C2.60932 17.4336 3.21438 15.6839 4.42781 13.9312C6.67658 10.6829 10.4812 7.59254 18.2472 7.07566L16.3787 5.20718L17.7929 3.79297Z',
  d8: 'M15.5001 20.2071L13.7072 22L12.293 20.5858L14.0859 18.7929L12.293 17L13.7072 15.5858L15.5001 17.3787L17.293 15.5858L18.7072 17L16.9143 18.7929L18.7072 20.5858L17.293 22L15.5001 20.2071Z',
} as const;

export const IconStrategyStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="strategy-stroke-rounded IconStrategyStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="5.5" 
        cy="5.5" 
        r="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconStrategyDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="strategy-duotone-rounded IconStrategyDuotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="5.5" 
        cy="5.5" 
        r="2.5" 
        fill="var(--icon-fill)"></circle>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="5.5" 
        cy="5.5" 
        r="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconStrategyTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="strategy-twotone-rounded IconStrategyTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        opacity="var(--icon-opacity)" 
        cx="5.5" 
        cy="5.5" 
        r="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconStrategySolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="strategy-solid-rounded IconStrategySolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
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

export const IconStrategyBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="strategy-bulk-rounded IconStrategyBulkRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconStrategyStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="strategy-stroke-sharp IconStrategyStrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <circle 
        cx="5.5" 
        cy="5.5" 
        r="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconStrategySolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="strategy-solid-sharp IconStrategySolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
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

export const iconPackOfStrategy: TheIconSelfPack = {
  name: 'Strategy',
  StrokeRounded: IconStrategyStrokeRounded,
  DuotoneRounded: IconStrategyDuotoneRounded,
  TwotoneRounded: IconStrategyTwotoneRounded,
  SolidRounded: IconStrategySolidRounded,
  BulkRounded: IconStrategyBulkRounded,
  StrokeSharp: IconStrategyStrokeSharp,
  SolidSharp: IconStrategySolidSharp,
};