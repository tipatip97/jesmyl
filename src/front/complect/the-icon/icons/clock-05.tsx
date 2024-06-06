import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 22C6.47711 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C16.4776 2 20.2257 4.94289 21.5 9H19',
  d2: 'M12 8V12L14 14',
  d3: 'M21.9551 13C21.9848 12.6709 22 12.3373 22 12M15 22C15.3416 21.8876 15.6753 21.7564 16 21.6078M20.7906 17C20.9835 16.6284 21.1555 16.2433 21.305 15.8462M18.1925 20.2292C18.5369 19.9441 18.8631 19.6358 19.1688 19.3065',
  d4: 'M12.0005 3.20452C7.14297 3.20452 3.20516 7.14233 3.20516 11.9999C3.20516 16.8574 7.14294 20.7952 12.0005 20.7952C12.5402 20.7952 12.9777 21.2327 12.9777 21.7725C12.9777 22.3122 12.5402 22.7497 12.0005 22.7497C6.06348 22.7497 1.25064 17.9369 1.25064 11.9999C1.25064 6.06288 6.06352 1.25 12.0005 1.25C16.8203 1.25 20.8488 4.41956 22.2168 8.77525C22.31 9.07209 22.2564 9.39558 22.0722 9.64639C21.8881 9.89719 21.5956 10.0453 21.2845 10.0453H18.8413C18.3016 10.0453 17.864 9.60781 17.864 9.06809C17.864 8.79822 17.9734 8.5539 18.1503 8.37705L18.7732 7.75414C19.0461 7.4812 19.1826 7.34473 19.1937 7.15968C19.2049 6.97462 19.0942 6.8335 18.8728 6.55125C17.2725 4.51089 14.7971 3.20452 12.0005 3.20452ZM20.7955 12.0007C20.7955 11.461 21.233 11.0234 21.7727 11.0234C22.3125 11.0234 22.75 11.461 22.75 12.0007C22.75 12.3597 22.7338 12.715 22.7021 13.0659C22.6536 13.6034 22.1784 13.9998 21.6409 13.9513C21.1034 13.9027 20.707 13.4276 20.7555 12.89C20.7819 12.5976 20.7955 12.3009 20.7955 12.0007ZM20.179 15.415C20.3693 14.9099 20.933 14.6547 21.4381 14.8449C21.9431 15.0352 22.1984 15.5989 22.0081 16.1039C21.8483 16.5282 21.6644 16.9399 21.4582 17.3372C21.2096 17.8162 20.6197 18.003 20.1407 17.7544C19.6616 17.5058 19.4748 16.9159 19.7234 16.4368C19.8942 16.1079 20.0465 15.7668 20.179 15.415ZM18.2896 18.4762C18.6568 18.0806 19.2751 18.0576 19.6707 18.4248C20.0663 18.792 20.0893 19.4103 19.7222 19.8059C19.3946 20.1588 19.0447 20.4896 18.6748 20.7957C18.259 21.1398 17.643 21.0817 17.2989 20.6659C16.9548 20.2501 17.0129 19.634 17.4287 19.2899C17.7322 19.0388 18.0198 18.7669 18.2896 18.4762ZM15.5023 20.5014C15.9931 20.2767 16.573 20.4924 16.7977 20.9831C17.0224 21.4739 16.8068 22.0538 16.316 22.2785C15.966 22.4388 15.6061 22.5802 15.2375 22.7016C14.7248 22.8703 14.1724 22.5915 14.0036 22.0788C13.8349 21.5662 14.1137 21.0138 14.6264 20.845C14.9254 20.7466 15.2177 20.6318 15.5023 20.5014Z',
  d5: 'M12 7C12.5523 7 13 7.44772 13 8V11.5858L14.7071 13.2929C15.0976 13.6834 15.0976 14.3166 14.7071 14.7071C14.3166 15.0976 13.6834 15.0976 13.2929 14.7071L11.2929 12.7071C11.1054 12.5196 11 12.2652 11 12V8C11 7.44772 11.4477 7 12 7Z',
  d6: 'M3.20516 11.9999C3.20516 7.14233 7.14297 3.20452 12.0005 3.20452C14.7971 3.20452 17.2725 4.51089 18.8728 6.55125C19.0942 6.8335 19.2049 6.97462 19.1937 7.15968C19.1826 7.34473 19.0461 7.4812 18.7732 7.75414L18.1503 8.37705C17.9734 8.5539 17.864 8.79822 17.864 9.06809C17.864 9.60781 18.3016 10.0453 18.8413 10.0453H21.2845C21.5956 10.0453 21.8881 9.89719 22.0722 9.64639C22.2564 9.39558 22.31 9.07209 22.2168 8.77525C20.8488 4.41956 16.8203 1.25 12.0005 1.25C6.06352 1.25 1.25064 6.06288 1.25064 11.9999C1.25064 17.9369 6.06348 22.7497 12.0005 22.7497C12.5402 22.7497 12.9777 22.3122 12.9777 21.7725C12.9777 21.2327 12.5402 20.7952 12.0005 20.7952C7.14294 20.7952 3.20516 16.8574 3.20516 11.9999Z',
  d7: 'M21.7727 11.0234C21.233 11.0234 20.7955 11.461 20.7955 12.0007C20.7955 12.3009 20.7819 12.5976 20.7555 12.89C20.707 13.4276 21.1034 13.9027 21.6409 13.9513C22.1784 13.9998 22.6536 13.6034 22.7021 13.0659C22.7338 12.715 22.75 12.3597 22.75 12.0007C22.75 11.461 22.3125 11.0234 21.7727 11.0234ZM21.4381 14.8449C20.933 14.6547 20.3693 14.9099 20.179 15.415C20.0465 15.7668 19.8942 16.1079 19.7234 16.4368C19.4748 16.9159 19.6616 17.5058 20.1407 17.7544C20.6197 18.003 21.2096 17.8162 21.4582 17.3372C21.6644 16.9399 21.8483 16.5282 22.0081 16.1039C22.1984 15.5989 21.9431 15.0352 21.4381 14.8449ZM19.6707 18.4248C19.2751 18.0576 18.6568 18.0806 18.2896 18.4762C18.0198 18.7669 17.7322 19.0388 17.4287 19.2899C17.0129 19.634 16.9548 20.2501 17.2989 20.6659C17.643 21.0817 18.259 21.1398 18.6748 20.7957C19.0447 20.4896 19.3946 20.1588 19.7222 19.8059C20.0893 19.4103 20.0663 18.792 19.6707 18.4248ZM16.7977 20.9831C16.573 20.4924 15.9931 20.2767 15.5023 20.5014C15.2177 20.6318 14.9254 20.7466 14.6264 20.845C14.1137 21.0138 13.8349 21.5662 14.0036 22.0788C14.1724 22.5915 14.7248 22.8703 15.2375 22.7016C15.6061 22.5802 15.966 22.4388 16.316 22.2785C16.8068 22.0538 17.0224 21.4739 16.7977 20.9831Z',
  d8: 'M12 22C6.47711 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C16.4776 2 20.2257 4.94289 21.5 9H18.5',
  d9: 'M12 7V12L14.5 14.5',
  d10: 'M10.748 7H12.748V11.5858L14.9552 13.7929L13.5409 15.2071L10.748 12.4142V7Z',
  d11: 'M20.2744 8C18.808 5.03275 15.7788 3 12.25 3C7.27944 3 3.25 7.02944 3.25 12C3.25 16.9706 7.2794 21 12.25 21V23C6.17482 23 1.25 18.0751 1.25 12C1.25 5.92487 6.17487 1 12.25 1C17.1819 1 21.3041 4.24331 22.704 8.70035C22.7994 9.00409 22.7445 9.33511 22.5561 9.59176C22.3677 9.8484 22.0683 10 21.75 10H18.75V8H20.2744Z',
  d12: 'M20.7508 10.7373V11.7373C20.7508 12.0445 20.737 12.3481 20.7099 12.6473L20.62 13.6433L22.6118 13.8232L22.7018 12.8273C22.7342 12.4683 22.7508 12.1047 22.7508 11.7373V10.7373H20.7508ZM20.4725 14.2952L20.12 15.231C19.9844 15.591 19.8285 15.94 19.6538 16.2767L19.1932 17.1642L20.9683 18.0855L21.429 17.198C21.64 16.7914 21.8281 16.3701 21.9916 15.936L22.3441 15.0002L20.4725 14.2952ZM18.8669 17.6306L18.1866 18.3635C17.9105 18.661 17.6162 18.9392 17.3057 19.1961L16.5353 19.8337L17.8104 21.3745L18.5808 20.7369C18.9593 20.4237 19.3173 20.0853 19.6525 19.7241L20.3328 18.9912L18.8669 17.6306ZM16.2437 20.0195L15.3345 20.4358C15.0432 20.5692 14.7441 20.6867 14.4381 20.7874L13.4883 21.1001L14.1136 22.9998L15.0634 22.6872C15.4407 22.563 15.809 22.4183 16.1671 22.2543L17.0763 21.838L16.2437 20.0195Z',
};

export const IconClock05StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="clock-05-stroke-rounded IconClock05StrokeRounded"
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

export const IconClock05DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="clock-05-duotone-rounded IconClock05DuotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="12" 
        cy="12" 
        r="10" 
        fill="var(--icon-fill)"></circle>
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

export const IconClock05TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="clock-05-twotone-rounded IconClock05TwotoneRounded"
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

export const IconClock05SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="clock-05-solid-rounded IconClock05SolidRounded"
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

export const IconClock05BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="clock-05-bulk-rounded IconClock05BulkRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
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

export const IconClock05StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="clock-05-stroke-sharp IconClock05StrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconClock05SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="clock-05-solid-sharp IconClock05SolidSharp"
    >
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
    </TheIconWrapper>
  );
};

export const iconPackOfClock05: TheIconSelfPack = {
  name: 'Clock05',
  StrokeRounded: IconClock05StrokeRounded,
  DuotoneRounded: IconClock05DuotoneRounded,
  TwotoneRounded: IconClock05TwotoneRounded,
  SolidRounded: IconClock05SolidRounded,
  BulkRounded: IconClock05BulkRounded,
  StrokeSharp: IconClock05StrokeSharp,
  SolidSharp: IconClock05SolidSharp,
};