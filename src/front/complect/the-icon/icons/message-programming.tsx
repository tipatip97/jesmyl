import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M13.5408 2H10.4592C6.31544 2 4.24354 2 3.0137 3.29036C1.78386 4.58072 1.9131 6.61897 2.17158 10.6955L2.35136 13.5308C2.41077 14.4677 2.44047 14.9361 2.54563 15.3268C2.95174 16.8356 4.19333 17.9853 5.74644 18.2907C6.14862 18.3698 6.62477 18.3698 7.57709 18.3698C7.82895 18.3698 7.95488 18.3698 8.05944 18.3913C8.46404 18.4742 8.78017 18.7858 8.86432 19.1846C8.88607 19.2877 8.88607 19.4118 8.88607 19.6601V20.5506C8.88607 21.3921 8.88607 21.8129 9.16017 21.9574C9.43427 22.102 9.78945 21.8686 10.4998 21.4018L14.7275 18.6237C14.8513 18.5424 14.9132 18.5017 14.979 18.4706C15.075 18.4252 15.1775 18.3946 15.2829 18.3799C15.3552 18.3698 15.4296 18.3698 15.5783 18.3698C17.3243 18.3698 18.1973 18.3698 18.9047 18.1072C19.9387 17.7233 20.7747 16.9491 21.2279 15.9559C21.538 15.2764 21.5924 14.4175 21.7013 12.6999L21.8284 10.6955C22.0869 6.61897 22.2161 4.58072 20.9863 3.29036C19.7565 2 17.6846 2 13.5408 2Z',
  d2: 'M16 8L17.2265 9.05719C17.7422 9.50163 18 9.72386 18 10C18 10.2761 17.7422 10.4984 17.2265 10.9428L16 12',
  d3: 'M8 8L6.77346 9.05719C6.25782 9.50163 6 9.72386 6 10C6 10.2761 6.25782 10.4984 6.77346 10.9428L8 12',
  d4: 'M13 7L11 13',
  d5: 'M18.457 1.4181C17.217 1.24997 15.6214 1.24999 13.5985 1.25H10.4014C8.37853 1.24999 6.78298 1.24997 5.54295 1.4181C4.27083 1.59057 3.25173 1.95352 2.47077 2.77292C1.68818 3.59401 1.38232 4.62406 1.28662 5.89166C1.19358 7.12423 1.29324 8.69571 1.41931 10.6838L1.60884 13.6729C1.66237 14.5191 1.69642 15.0574 1.82138 15.5217C2.30302 17.3112 3.77278 18.667 5.60172 19.0266C6.07656 19.12 6.62073 19.1199 7.48362 19.1198C7.7011 19.1042 8.13604 19.1903 8.13604 19.6601L8.13604 20.6004C8.13595 20.9777 8.13588 21.3417 8.1786 21.6266C8.22373 21.9275 8.3496 22.3778 8.81021 22.6208C9.26658 22.8615 9.70825 22.7167 9.9829 22.5889C10.2454 22.4667 10.5513 22.2656 10.8705 22.0557L15.1394 19.2505C15.1915 19.2109 15.3371 19.1198 15.7498 19.1198C17.3305 19.1202 18.3302 19.1205 19.1658 18.8103C20.3844 18.3578 21.3733 17.4439 21.9102 16.2673C22.2785 15.4601 22.3409 14.4711 22.4389 12.9203L22.5806 10.6838V10.6837V10.6837V10.6837V10.6837C22.7067 8.69565 22.8064 7.12421 22.7133 5.89166C22.6176 4.62406 22.3118 3.59401 21.5292 2.77292C20.7482 1.95352 19.7291 1.59057 18.457 1.4181ZM15.3472 8.75748C14.9289 8.3969 14.8821 7.76547 15.2427 7.34714C15.6032 6.9288 16.2347 6.88198 16.653 7.24255L17.8795 8.29975L17.9166 8.33166C18.1416 8.52548 18.3807 8.7314 18.5555 8.92891C18.7532 9.15222 19.0001 9.50662 19.0001 10C19.0001 10.4934 18.7532 10.8478 18.5555 11.0711C18.3807 11.2686 18.1416 11.4746 17.9166 11.6684L17.8795 11.7003L16.653 12.7575C16.2347 13.1181 15.6032 13.0712 15.2427 12.6529C14.8821 12.2346 14.9289 11.6031 15.3472 11.2426L16.5738 10.1854C16.6554 10.1151 16.7257 10.0544 16.7877 10C16.7257 9.94562 16.6554 9.88498 16.5738 9.81467L15.3472 8.75748ZM8.75758 7.34714C9.11816 7.76547 9.07134 8.3969 8.653 8.75748L7.42646 9.81467C7.34489 9.88498 7.27457 9.94562 7.21254 10C7.27457 10.0544 7.34489 10.1151 7.42646 10.1854L8.653 11.2426C9.07134 11.6031 9.11816 12.2346 8.75758 12.6529C8.39701 13.0712 7.76558 13.1181 7.34724 12.7575L6.1207 11.7003L6.08366 11.6684L6.08365 11.6684C5.85862 11.4746 5.61953 11.2686 5.44471 11.0711C5.24703 10.8478 5.00012 10.4934 5.00012 10C5.00012 9.50662 5.24703 9.15222 5.44471 8.92891C5.61954 8.7314 5.85863 8.52548 6.08366 8.33166L6.1207 8.29975L7.34724 7.24255C7.76558 6.88198 8.39701 6.9288 8.75758 7.34714ZM13.9491 7.3165C14.1237 6.79256 13.8406 6.22624 13.3166 6.05159C12.7927 5.87694 12.2264 6.1601 12.0517 6.68404L10.0517 12.684C9.87706 13.208 10.1602 13.7743 10.6842 13.949C11.2081 14.1236 11.7744 13.8404 11.9491 13.3165L13.9491 7.3165Z',
  d6: 'M13.5985 1.25C15.6214 1.24999 17.217 1.24997 18.457 1.4181C19.7291 1.59057 20.7482 1.95352 21.5292 2.77292C22.3118 3.59401 22.6176 4.62406 22.7133 5.89166C22.8064 7.12422 22.7067 8.69568 22.5806 10.6837V10.6838L22.4389 12.9203C22.3409 14.4711 22.2785 15.4601 21.9102 16.2673C21.3733 17.4439 20.3844 18.3578 19.1658 18.8103C18.3302 19.1205 17.3305 19.1202 15.7498 19.1198C15.3371 19.1198 15.1915 19.2109 15.1394 19.2505L10.8705 22.0557C10.5513 22.2656 10.2454 22.4667 9.9829 22.5889C9.70825 22.7167 9.26658 22.8615 8.81021 22.6208C8.3496 22.3778 8.22373 21.9275 8.1786 21.6266C8.13588 21.3417 8.13595 20.9777 8.13604 20.6004L8.13604 19.6601C8.13604 19.1903 7.7011 19.1042 7.48362 19.1198C6.62073 19.1199 6.07656 19.12 5.60172 19.0266C3.77278 18.667 2.30302 17.3112 1.82138 15.5217C1.69642 15.0574 1.66237 14.5191 1.60884 13.6729L1.41931 10.6838C1.29324 8.69571 1.19358 7.12423 1.28662 5.89166C1.38232 4.62406 1.68818 3.59401 2.47077 2.77292C3.25173 1.95352 4.27083 1.59057 5.54295 1.4181C6.78298 1.24997 8.37853 1.24999 10.4014 1.25H13.5985Z',
  d7: 'M15.2427 7.34714C14.8821 7.76547 14.9289 8.3969 15.3472 8.75748L16.5738 9.81467L17.2267 9.05721L16.5738 9.81467C16.6554 9.88498 16.7257 9.94562 16.7877 10C16.7257 10.0544 16.6554 10.1151 16.5738 10.1854L15.3472 11.2426C14.9289 11.6031 14.8821 12.2346 15.2427 12.6529C15.6032 13.0712 16.2347 13.1181 16.653 12.7575L17.8795 11.7003C17.8918 11.6897 17.9042 11.679 17.9166 11.6684C18.1416 11.4746 18.3807 11.2686 18.5555 11.0711C18.7532 10.8478 19.0001 10.4934 19.0001 10C19.0001 9.50662 18.7532 9.15222 18.5555 8.92891C18.3807 8.7314 18.1416 8.52548 17.9166 8.33166C17.9042 8.32098 17.8918 8.31034 17.8795 8.29975C17.8795 8.29975 17.8795 8.29975 17.8795 8.29974L16.653 7.24255C16.2347 6.88198 15.6032 6.9288 15.2427 7.34714Z',
  d8: 'M8.75758 7.34714C9.11816 7.76547 9.07134 8.3969 8.653 8.75748L7.42646 9.81467L6.77358 9.05721L7.42646 9.81467C7.34489 9.88498 7.27457 9.94562 7.21254 10C7.27457 10.0544 7.34489 10.1151 7.42646 10.1854L8.653 11.2426C9.07134 11.6031 9.11816 12.2346 8.75758 12.6529C8.39701 13.0712 7.76558 13.1181 7.34724 12.7575L6.1207 11.7003C6.1084 11.6897 6.09605 11.679 6.08366 11.6684C5.85863 11.4746 5.61954 11.2686 5.44471 11.0711C5.24703 10.8478 5.00012 10.4934 5.00012 10C5.00012 9.50662 5.24703 9.15222 5.44471 8.92891C5.61954 8.7314 5.85863 8.52548 6.08366 8.33166C6.09605 8.32098 6.10841 8.31034 6.1207 8.29975C6.1207 8.29975 6.1207 8.29975 6.1207 8.29974L7.34724 7.24255C7.76558 6.88198 8.39701 6.9288 8.75758 7.34714Z',
  d9: 'M13.3166 6.05159C13.8406 6.22624 14.1237 6.79256 13.9491 7.3165L11.9491 13.3165C11.7744 13.8404 11.2081 14.1236 10.6842 13.949C10.1602 13.7743 9.87706 13.208 10.0517 12.684L12.0517 6.68404C12.2264 6.1601 12.7927 5.87694 13.3166 6.05159Z',
  d10: 'M15.4985 7.55664L17.9997 10.066L15.4985 12.5754',
  d11: 'M8.49487 7.55664L5.99365 10.066L8.49487 12.5754',
  d12: 'M12.9984 7.05469L10.9966 13.0772',
  d13: 'M21.9004 2H2.09956C2.04431 2 1.99951 2.04494 1.99951 2.10038L1.99971 17.9812C1.99971 18.0366 2.04451 18.0815 2.09976 18.0815H6.03352V21.8994C6.03352 21.9838 6.13087 22.0305 6.19632 21.9776L11.018 18.0815H21.9004C21.9557 18.0815 22.0005 18.0366 22.0005 17.9812V2.10038C22.0005 2.04494 21.9557 2 21.9004 2Z',
  d14: 'M22 1.25L2 1.25C1.58579 1.25 1.25 1.58579 1.25 2V18C1.25 18.4142 1.58579 18.75 2 18.75H5.25V22C5.25 22.2883 5.41526 22.5511 5.67511 22.676C5.93496 22.8009 6.24339 22.7658 6.46852 22.5857L11.2631 18.75L22 18.75C22.1989 18.75 22.3897 18.671 22.5303 18.5303C22.671 18.3897 22.75 18.1989 22.75 18V2C22.75 1.80109 22.671 1.61032 22.5303 1.46967C22.3897 1.32902 22.1989 1.25 22 1.25ZM14.9688 8.03039L16.9384 10.0001L14.9688 11.9697L16.0294 13.0304L19.0597 10.0001L16.0294 6.96973L14.9688 8.03039ZM7.96978 6.96973L9.03044 8.03039L7.06077 10.0001L9.03044 11.9697L7.96978 13.0304L4.93945 10.0001L7.96978 6.96973ZM12.2891 6.7627L10.2891 12.7627L11.7121 13.237L13.7121 7.23704L12.2891 6.7627Z',
} as const;

export const IconMessageProgrammingStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="message-programming-stroke-rounded IconMessageProgrammingStrokeRounded"
    >
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
    </TheIconWrapper>
  );
};

export const IconMessageProgrammingDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="message-programming-duotone-rounded IconMessageProgrammingDuotoneRounded"
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

export const IconMessageProgrammingTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="message-programming-twotone-rounded IconMessageProgrammingTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMessageProgrammingSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="message-programming-solid-rounded IconMessageProgrammingSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMessageProgrammingBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="message-programming-bulk-rounded IconMessageProgrammingBulkRounded"
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
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMessageProgrammingStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="message-programming-stroke-sharp IconMessageProgrammingStrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMessageProgrammingSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="message-programming-solid-sharp IconMessageProgrammingSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMessageProgramming: TheIconSelfPack = {
  name: 'MessageProgramming',
  StrokeRounded: IconMessageProgrammingStrokeRounded,
  DuotoneRounded: IconMessageProgrammingDuotoneRounded,
  TwotoneRounded: IconMessageProgrammingTwotoneRounded,
  SolidRounded: IconMessageProgrammingSolidRounded,
  BulkRounded: IconMessageProgrammingBulkRounded,
  StrokeSharp: IconMessageProgrammingStrokeSharp,
  SolidSharp: IconMessageProgrammingSolidSharp,
};