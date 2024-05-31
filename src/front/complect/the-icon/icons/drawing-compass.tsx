import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M10 10L5 22M14 10L19 22',
  d2: 'M12 4L12 2',
  d3: 'M3 13C4.99073 16.0242 8.27968 18 12 18C15.7203 18 19.0093 16.0242 21 13',
  d4: 'M12 17V19',
  d5: 'M3 13C4.99073 16.0242 8.27968 18 12 18C15.7203 18 19.0093 16.0242 21 13M12 17V19',
  d6: 'M12 1C12.5523 1 13 1.44772 13 2L13 4C13 4.55228 12.5523 5 12 5C11.4477 5 11 4.55228 11 4L11 2C11 1.44772 11.4477 1 12 1Z',
  d7: 'M8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7Z',
  d8: 'M8.63861 11.3528C8.53119 11.2697 8.3718 11.3077 8.31957 11.4331L4.07718 21.6148C3.86477 22.1246 4.10584 22.7101 4.61565 22.9225C5.12545 23.1349 5.71092 22.8938 5.92334 22.384L10.0903 12.3834C10.1345 12.2773 10.0803 12.1563 9.97356 12.114C9.49137 11.9227 9.04264 11.6653 8.63861 11.3528Z',
  d9: 'M14.027 12.114C13.9202 12.1563 13.8661 12.2773 13.9102 12.3834L18.0772 22.384C18.2896 22.8938 18.8751 23.1349 19.3849 22.9225C19.8947 22.7101 20.1358 22.1246 19.9233 21.6148L15.681 11.4331C15.6287 11.3078 15.4693 11.2698 15.3619 11.3528C14.9579 11.6653 14.5092 11.9227 14.027 12.114Z',
  d10: 'M2.45028 12.1648C2.91159 11.8612 3.53172 11.989 3.83539 12.4503C5.65982 15.2219 8.64882 17.0001 12.0001 17.0001C15.3514 17.0001 18.3404 15.2219 20.1648 12.4503C20.4685 11.989 21.0886 11.8612 21.5499 12.1648C22.0113 12.4685 22.1391 13.0886 21.8354 13.5499C19.6783 16.8268 16.0895 19.0001 12.0001 19.0001C7.91077 19.0001 4.32188 16.8268 2.16484 13.5499C1.86117 13.0886 1.98897 12.4685 2.45028 12.1648Z',
  d11: 'M12 16C12.5523 16 13 16.4477 13 17V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V17C11 16.4477 11.4477 16 12 16Z',
  d12: 'M13 2C13 1.44772 12.5523 1 12 1C11.4477 1 11 1.44772 11 2V3.12602C11.3196 3.04375 11.6547 3 12 3C12.3453 3 12.6804 3.04375 13 3.12602L13 2Z',
  d13: 'M10 9L5 22M14 9L19 22',
  d14: 'M12 16V20',
  d15: 'M12.998 1.5L12.998 3.5L10.998 3.5L10.998 1.5L12.998 1.5Z',
  d16: 'M8.24805 6.5C8.24805 4.42893 9.92698 2.75 11.998 2.75C14.0691 2.75 15.748 4.42893 15.748 6.5C15.748 8.57107 14.0691 10.25 11.998 10.25C9.92698 10.25 8.24805 8.57107 8.24805 6.5Z',
  d17: 'M11 20.0303V16.0303H13V20.0303H11Z',
  d18: 'M8.47809 10.3936L6.57443 15.3864C5.53464 14.6464 4.6283 13.6981 3.90607 12.5913L2.25 13.6909C3.19663 15.1416 4.42145 16.376 5.84434 17.3013L4.13585 21.7822L5.98636 22.5002L7.60932 18.2435C8.96534 18.8218 10.4462 19.1411 12 19.1411C13.554 19.1411 15.0352 18.8217 16.3914 18.2432L18.0145 22.5002L19.865 21.7822L18.1563 17.3008C19.5789 16.3756 20.8035 15.1414 21.75 13.6909L20.0939 12.5913C19.3718 13.6978 18.4657 14.646 17.4262 15.386L15.5225 10.3931C15.0244 10.844 14.4394 11.2008 13.7956 11.4351L15.679 16.3749C14.5389 16.8701 13.2968 17.1411 12 17.1411C10.7034 17.1411 9.46156 16.8703 8.32167 16.3752L10.2052 11.4353C9.56131 11.2011 8.97624 10.8445 8.47809 10.3936Z',
} as const;

export const IconDrawingCompassStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="drawing-compass-stroke-rounded IconDrawingCompassStrokeRounded"
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
      <circle 
        cx="12" 
        cy="7" 
        r="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDrawingCompassDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="drawing-compass-duotone-rounded IconDrawingCompassDuotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="12" 
        cy="7" 
        r="3" 
        fill="var(--icon-fill)"></circle>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
      <circle 
        cx="12" 
        cy="7" 
        r="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDrawingCompassTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="drawing-compass-twotone-rounded IconDrawingCompassTwotoneRounded"
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
      <circle 
        cx="12" 
        cy="7" 
        r="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDrawingCompassSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="drawing-compass-solid-rounded IconDrawingCompassSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
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
    </TheIconWrapper>
  );
};

export const IconDrawingCompassBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="drawing-compass-bulk-rounded IconDrawingCompassBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
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
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDrawingCompassStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="drawing-compass-stroke-sharp IconDrawingCompassStrokeSharp"
    >
      <path 
        d={d.d13} 
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
      <circle 
        cx="12" 
        cy="7" 
        r="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDrawingCompassSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="drawing-compass-solid-sharp IconDrawingCompassSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
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
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfDrawingCompass: TheIconSelfPack = {
  name: 'DrawingCompass',
  StrokeRounded: IconDrawingCompassStrokeRounded,
  DuotoneRounded: IconDrawingCompassDuotoneRounded,
  TwotoneRounded: IconDrawingCompassTwotoneRounded,
  SolidRounded: IconDrawingCompassSolidRounded,
  BulkRounded: IconDrawingCompassBulkRounded,
  StrokeSharp: IconDrawingCompassStrokeSharp,
  SolidSharp: IconDrawingCompassSolidSharp,
};