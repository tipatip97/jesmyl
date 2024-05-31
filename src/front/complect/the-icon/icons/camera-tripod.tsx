import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 10C2 6.49335 2 4.74003 2.90796 3.55992C3.07418 3.34388 3.25989 3.14579 3.46243 2.96849C4.56878 2 6.21252 2 9.5 2H14.5C17.7875 2 19.4312 2 20.5376 2.96849C20.7401 3.14579 20.9258 3.34388 21.092 3.55992C22 4.74003 22 6.49335 22 10C22 13.5066 22 15.26 21.092 16.4401C20.9258 16.6561 20.7401 16.8542 20.5376 17.0315C19.4312 18 17.7875 18 14.5 18H9.5C6.21252 18 4.56878 18 3.46243 17.0315C3.25989 16.8542 3.07418 16.6561 2.90796 16.4401C2 15.26 2 13.5066 2 10Z',
  d2: 'M17 22L12.8333 18M7 22L11.1667 18',
  d3: 'M12 18L12 23',
  d4: 'M2.90796 3.55992C2 4.74003 2 6.49335 2 10C2 13.5066 2 15.26 2.90796 16.4401C3.07418 16.6561 3.25989 16.8542 3.46243 17.0315C4.56877 18 6.21251 18 9.49998 18H14.5C17.7875 18 19.4312 18 20.5376 17.0315C20.7401 16.8542 20.9258 16.6561 21.092 16.4401C22 15.26 22 13.5066 22 10C22 6.49335 22 4.74003 21.092 3.55992C20.9258 3.34388 20.7401 3.14579 20.5376 2.96849C19.4312 2 17.7875 2 14.5 2H9.5C6.21252 2 4.56878 2 3.46243 2.96849C3.25989 3.14579 3.07418 3.34388 2.90796 3.55992ZM12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z',
  d5: 'M12 18.5532C11.9602 18.613 11.9132 18.6695 11.8592 18.7214L7.69253 22.7214C7.29412 23.1039 6.66109 23.0909 6.27861 22.6925C5.89614 22.2941 5.90906 21.6611 6.30747 21.2786L10.4741 17.2786C10.8725 16.8961 11.5056 16.9091 11.8881 17.3075C11.9302 17.3513 11.9675 17.398 12 17.4469C12.0325 17.398 12.0698 17.3513 12.1119 17.3075C12.4944 16.9091 13.1275 16.8961 13.5259 17.2786L17.6925 21.2786C18.0909 21.6611 18.1039 22.2941 17.7214 22.6925C17.3389 23.0909 16.7059 23.1039 16.3075 22.7214L12.1408 18.7214C12.0868 18.6695 12.0398 18.613 12 18.5532Z',
  d6: 'M12 17C12.5523 17 13 17.4477 13 18L13 23C13 23.5523 12.5523 24 12 24C11.4477 24 11 23.5523 11 23L11 18C11 17.4477 11.4477 17 12 17Z',
  d7: 'M9.44821 1.25H14.5518H14.5518C16.1516 1.24999 17.4234 1.24997 18.4305 1.37695C19.4688 1.50786 20.3224 1.78336 21.0316 2.40417C21.2715 2.61417 21.4907 2.84818 21.6865 3.10258C22.2595 3.84732 22.5113 4.73658 22.6319 5.8249C22.75 6.89042 22.75 8.23962 22.75 9.95365V10.0464C22.75 11.7604 22.75 13.1096 22.6319 14.1751C22.5113 15.2634 22.2595 16.1527 21.6865 16.8974C21.4907 17.1518 21.2715 17.3858 21.0316 17.5958C20.3224 18.2166 19.4688 18.4921 18.4305 18.623C17.4234 18.75 16.1516 18.75 14.5518 18.75H9.44819C7.8484 18.75 6.57657 18.75 5.56947 18.623C4.53118 18.4921 3.6776 18.2166 2.96842 17.5958C2.72853 17.3858 2.50927 17.1518 2.31354 16.8974C1.74054 16.1527 1.48866 15.2634 1.36806 14.1751C1.24998 13.1096 1.24999 11.7604 1.25 10.0464V10.0464V9.9536V9.95359C1.24999 8.23959 1.24998 6.89041 1.36806 5.8249C1.48866 4.73658 1.74054 3.84732 2.31354 3.10258C2.50927 2.84818 2.72853 2.61417 2.96842 2.40417C3.6776 1.78336 4.53118 1.50786 5.56947 1.37695C6.57657 1.24997 7.84841 1.24999 9.4482 1.25H9.44821ZM8.5 10C8.5 8.067 10.067 6.5 12 6.5C13.933 6.5 15.5 8.067 15.5 10C15.5 11.933 13.933 13.5 12 13.5C10.067 13.5 8.5 11.933 8.5 10Z',
  d8: 'M8.9416 18.7499C9.1067 18.75 9.27554 18.75 9.44819 18.75H14.5518C14.7245 18.75 14.8933 18.75 15.0584 18.7499L17.6925 21.2786C18.0909 21.6611 18.1039 22.2942 17.7214 22.6926C17.3389 23.091 16.7059 23.1039 16.3075 22.7214L13 19.5463L13 23C13 23.5523 12.5523 24 12 24C11.4477 24 11 23.5523 11 23L11 19.5463L7.69253 22.7214C7.29412 23.1039 6.66109 23.091 6.27861 22.6926C5.89614 22.2942 5.90906 21.6611 6.30747 21.2786L8.9416 18.7499Z',
  d9: 'M14.5518 1.25H9.44821C7.84841 1.24999 6.57657 1.24997 5.56947 1.37695C4.53118 1.50786 3.6776 1.78336 2.96842 2.40417C2.72853 2.61417 2.50927 2.84818 2.31354 3.10258C1.74054 3.84732 1.48866 4.73658 1.36806 5.8249C1.24998 6.89041 1.24999 8.2396 1.25 9.9536V10.0464C1.24999 11.7604 1.24998 13.1096 1.36806 14.1751C1.48866 15.2634 1.74054 16.1527 2.31354 16.8974C2.50927 17.1518 2.72853 17.3858 2.96842 17.5958C3.6776 18.2166 4.53118 18.4921 5.56947 18.623C6.57657 18.75 7.8484 18.75 9.44819 18.75H14.5518C16.1516 18.75 17.4234 18.75 18.4305 18.623C19.4688 18.4921 20.3224 18.2166 21.0316 17.5958C21.2715 17.3858 21.4907 17.1518 21.6865 16.8974C22.2595 16.1527 22.5113 15.2634 22.6319 14.1751C22.75 13.1096 22.75 11.7604 22.75 10.0464V9.95365C22.75 8.23962 22.75 6.89042 22.6319 5.8249C22.5113 4.73658 22.2595 3.84732 21.6865 3.10258C21.4907 2.84818 21.2715 2.61417 21.0316 2.40417C20.3224 1.78336 19.4688 1.50786 18.4305 1.37695C17.4234 1.24997 16.1516 1.24999 14.5518 1.25Z',
  d10: 'M12 6.5C10.067 6.5 8.5 8.067 8.5 10C8.5 11.933 10.067 13.5 12 13.5C13.933 13.5 15.5 11.933 15.5 10C15.5 8.067 13.933 6.5 12 6.5Z',
  d11: 'M22 18V2H2V18H22Z',
  d12: 'M7 21L11.1667 18M12.8333 18L17 21M12 18V22',
  d13: 'M1.25 2C1.25 1.58579 1.58579 1.25 2 1.25H22C22.4142 1.25 22.75 1.58579 22.75 2V18C22.75 18.4142 22.4142 18.75 22 18.75H14.5431L17.5827 20.9385L16.4141 22.5615L12.9984 20.1022V22.75H10.9984V20.1022L7.58267 22.5615L6.41406 20.9385L9.45361 18.75H2C1.58579 18.75 1.25 18.4142 1.25 18V2ZM12 13.5C13.933 13.5 15.5 11.933 15.5 10C15.5 8.067 13.933 6.5 12 6.5C10.067 6.5 8.5 8.067 8.5 10C8.5 11.933 10.067 13.5 12 13.5Z',
} as const;

export const IconCameraTripodStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-tripod-stroke-rounded IconCameraTripodStrokeRounded"
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
      <circle 
        cx="12" 
        cy="9.5" 
        r="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const IconCameraTripodDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-tripod-duotone-rounded IconCameraTripodDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
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
      <circle 
        cx="12" 
        cy="10" 
        r="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const IconCameraTripodTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-tripod-twotone-rounded IconCameraTripodTwotoneRounded"
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
      <circle 
        opacity="var(--icon-opacity)" 
        cx="12" 
        cy="9.5" 
        r="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const IconCameraTripodSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-tripod-solid-rounded IconCameraTripodSolidRounded"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCameraTripodBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-tripod-bulk-rounded IconCameraTripodBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCameraTripodStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-tripod-stroke-sharp IconCameraTripodStrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="12" 
        cy="10" 
        r="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
    </TheIconWrapper>
  );
};

export const IconCameraTripodSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-tripod-solid-sharp IconCameraTripodSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCameraTripod: TheIconSelfPack = {
  name: 'CameraTripod',
  StrokeRounded: IconCameraTripodStrokeRounded,
  DuotoneRounded: IconCameraTripodDuotoneRounded,
  TwotoneRounded: IconCameraTripodTwotoneRounded,
  SolidRounded: IconCameraTripodSolidRounded,
  BulkRounded: IconCameraTripodBulkRounded,
  StrokeSharp: IconCameraTripodStrokeSharp,
  SolidSharp: IconCameraTripodSolidSharp,
};