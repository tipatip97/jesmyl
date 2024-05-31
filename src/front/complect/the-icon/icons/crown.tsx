import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M3.51819 10.3058C3.13013 9.23176 2.9361 8.69476 3.01884 8.35065C3.10933 7.97427 3.377 7.68084 3.71913 7.58296C4.03193 7.49346 4.51853 7.70973 5.49173 8.14227C6.35253 8.52486 6.78293 8.71615 7.18732 8.70551C7.63257 8.69379 8.06088 8.51524 8.4016 8.19931C8.71105 7.91237 8.91861 7.45513 9.33373 6.54064L10.2486 4.52525C11.0128 2.84175 11.3949 2 12 2C12.6051 2 12.9872 2.84175 13.7514 4.52525L14.6663 6.54064C15.0814 7.45513 15.289 7.91237 15.5984 8.19931C15.9391 8.51524 16.3674 8.69379 16.8127 8.70551C17.2171 8.71615 17.6475 8.52486 18.5083 8.14227C19.4815 7.70973 19.9681 7.49346 20.2809 7.58296C20.623 7.68084 20.8907 7.97427 20.9812 8.35065C21.0639 8.69476 20.8699 9.23176 20.4818 10.3057L18.8138 14.9222C18.1002 16.897 17.7435 17.8844 16.9968 18.4422C16.2502 19 15.2854 19 13.3558 19H10.6442C8.71459 19 7.74977 19 7.00315 18.4422C6.25654 17.8844 5.89977 16.897 5.18622 14.9222L3.51819 10.3058Z',
  d2: 'M12 14H12.009',
  d3: 'M7 22H17',
  d4: 'M11.9998 1C11.2796 1 10.8376 1.5264 10.5503 1.97988C10.2554 2.4452 9.95117 3.1155 9.59009 3.91103L9.59009 3.91103C9.44988 4.2199 9.31383 4.53229 9.17756 4.84518C8.86046 5.57329 8.54218 6.30411 8.16755 6.99964C7.88171 7.53032 7.37683 7.83299 6.76135 7.61455C6.52927 7.53218 6.23722 7.40295 5.79615 7.20692C5.69004 7.15975 5.57926 7.10711 5.46493 7.05277C4.85848 6.76458 4.15216 6.42892 3.51264 6.61189C2.88386 6.79179 2.43635 7.31426 2.28943 7.92532C2.20015 8.29667 2.27799 8.67764 2.36923 9.00553C2.46354 9.3445 2.61703 9.76929 2.80214 10.2816L2.80216 10.2816L4.49446 14.9652L4.49447 14.9652L4.49448 14.9653C4.83952 15.9202 5.11802 16.691 5.40655 17.2893C5.99655 18.5128 6.92686 19.2598 8.2897 19.4248C8.91068 19.5 9.67242 19.5 10.5984 19.5H13.4012C14.3272 19.5 15.089 19.5 15.7099 19.4248C17.0728 19.2598 18.0031 18.5128 18.5931 17.2893C18.8816 16.691 19.1601 15.9202 19.5052 14.9651L21.1975 10.2816L21.1975 10.2815C21.3826 9.76926 21.5361 9.34449 21.6304 9.00553C21.7216 8.67764 21.7995 8.29667 21.7102 7.92532C21.5633 7.31426 21.1158 6.79179 20.487 6.61189C19.8539 6.43075 19.15 6.76336 18.5495 7.04714C18.4411 7.09835 18.3361 7.14797 18.2355 7.19269C18.174 7.22 18.1126 7.24761 18.0512 7.27524C17.7834 7.39565 17.5147 7.51644 17.2383 7.61455C16.6228 7.83299 16.1179 7.53032 15.8321 6.99964C15.4574 6.3041 15.1392 5.57327 14.8221 4.84515C14.6858 4.53226 14.5497 4.21987 14.4095 3.911L14.4095 3.91099C14.0485 3.11548 13.7442 2.44519 13.4494 1.97988C13.162 1.5264 12.72 1 11.9998 1ZM11.999 13C11.1743 13 10.5057 13.6716 10.5057 14.5C10.5057 15.3284 11.1743 16 11.999 16H12.0124C12.8372 16 13.5057 15.3284 13.5057 14.5C13.5057 13.6716 12.8372 13 12.0124 13H11.999Z',
  d5: 'M6 22C6 21.4477 6.44772 21 7 21H17C17.5523 21 18 21.4477 18 22C18 22.5523 17.5523 23 17 23H7C6.44772 23 6 22.5523 6 22Z',
  d6: 'M10.5503 1.97988C10.8376 1.5264 11.2796 1 11.9998 1C12.72 1 13.162 1.5264 13.4494 1.97988C13.7442 2.44519 14.0485 3.11548 14.4095 3.91099L14.4095 3.911C14.876 4.93864 15.2965 6.00522 15.8321 6.99964C16.1179 7.53032 16.6228 7.83299 17.2383 7.61455C17.5782 7.49393 17.9062 7.33903 18.2355 7.19269C18.8937 6.90012 19.7396 6.39807 20.487 6.61189C21.1158 6.79179 21.5633 7.31426 21.7102 7.92532C21.7995 8.29667 21.7216 8.67764 21.6304 9.00553C21.5361 9.34449 21.3826 9.76926 21.1975 10.2815L21.1975 10.2816L19.5052 14.9651C19.1601 15.9202 18.8816 16.691 18.5931 17.2893C18.0031 18.5128 17.0728 19.2598 15.7099 19.4248C15.089 19.5 14.3272 19.5 13.4012 19.5H10.5984C9.67242 19.5 8.91068 19.5 8.2897 19.4248C6.92686 19.2598 5.99655 18.5128 5.40655 17.2893C5.11802 16.691 4.83952 15.9202 4.49447 14.9652L4.49446 14.9652L2.80216 10.2816L2.80214 10.2816C2.61703 9.76929 2.46354 9.3445 2.36923 9.00553C2.27799 8.67764 2.20015 8.29667 2.28943 7.92532C2.43635 7.31426 2.88386 6.79179 3.51264 6.61189C4.27273 6.39442 5.12717 6.90957 5.79615 7.20692C6.23722 7.40295 6.52927 7.53218 6.76135 7.61455C7.37683 7.83299 7.88171 7.53032 8.16755 6.99964C8.70317 6.00523 9.12361 4.93866 9.59009 3.91103L9.59009 3.91103C9.95117 3.1155 10.2554 2.4452 10.5503 1.97988Z',
  d7: 'M10.5057 14.5C10.5057 13.6716 11.1743 13 11.999 13H12.0124C12.8372 13 13.5057 13.6716 13.5057 14.5C13.5057 15.3284 12.8372 16 12.0124 16H11.999C11.1743 16 10.5057 15.3284 10.5057 14.5Z',
  d8: 'M12.002 14H12.502',
  d9: 'M6.00195 22H18.002',
  d10: 'M16.0057 8.99017L12.1723 2.25855C12.0693 2.02518 12.0273 1.95688 11.9886 2.02519L8.03382 8.96903L3.11923 7.0135C3.04469 6.98332 2.9396 6.91808 3.04365 7.11616C3.04751 7.12351 3.05065 7.13149 3.05267 7.13954L6.01756 19L18.0293 18.9578L20.9909 7.05663C21.0111 6.97697 21.0013 6.97596 20.9253 7.00752L16.0057 8.99017Z',
  d11: 'M12.6512 1.6279C12.5177 1.39421 12.2692 1.25 12 1.25C11.7309 1.25 11.4824 1.39421 11.3488 1.6279L7.67263 8.06127L3.27857 6.30364C3.01706 6.19904 2.719 6.24977 2.50682 6.43498C2.29464 6.62019 2.20411 6.90866 2.27242 7.1819L5.41444 18.75H18.5856L21.7276 7.1819C21.7959 6.90866 21.7054 6.62019 21.4932 6.43498C21.281 6.24977 20.983 6.19904 20.7215 6.30364L16.3274 8.06127L12.6512 1.6279ZM13 13H11V15H13V13Z',
  d12: 'M18.5 22.75H5.5V20.75H18.5V22.75Z',
} as const;

export const IconCrownStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="crown-stroke-rounded IconCrownStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconCrownDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="crown-duotone-rounded IconCrownDuotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconCrownTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="crown-twotone-rounded IconCrownTwotoneRounded"
    >
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
      />
    </TheIconWrapper>
  );
};

export const IconCrownSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="crown-solid-rounded IconCrownSolidRounded"
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

export const IconCrownBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="crown-bulk-rounded IconCrownBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
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

export const IconCrownStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="crown-stroke-sharp IconCrownStrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCrownSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="crown-solid-sharp IconCrownSolidSharp"
    >
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

export const iconPackOfCrown: TheIconSelfPack = {
  name: 'Crown',
  StrokeRounded: IconCrownStrokeRounded,
  DuotoneRounded: IconCrownDuotoneRounded,
  TwotoneRounded: IconCrownTwotoneRounded,
  SolidRounded: IconCrownSolidRounded,
  BulkRounded: IconCrownBulkRounded,
  StrokeSharp: IconCrownStrokeSharp,
  SolidSharp: IconCrownSolidSharp,
};