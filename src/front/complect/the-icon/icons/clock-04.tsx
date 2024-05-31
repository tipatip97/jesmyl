import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C7.52232 2 3.77426 4.94289 2.5 9H5',
  d2: 'M12 8V12L14 14',
  d3: 'M2 12C2 12.3373 2.0152 12.6709 2.04494 13M9 22C8.6584 21.8876 8.32471 21.7564 8 21.6078M3.20939 17C3.01655 16.6284 2.84453 16.2433 2.69497 15.8462M4.83122 19.3065C5.1369 19.6358 5.46306 19.9441 5.80755 20.2292',
  d4: 'M12 7C12.5523 7 13 7.44772 13 8V11.5858L14.7071 13.2929C15.0976 13.6834 15.0976 14.3166 14.7071 14.7071C14.3166 15.0976 13.6834 15.0976 13.2929 14.7071L11.2929 12.7071C11.1054 12.5196 11 12.2652 11 12V8C11 7.44772 11.4477 7 12 7Z',
  d5: 'M11.9995 3.20452C16.857 3.20452 20.7948 7.14233 20.7948 11.9999C20.7948 16.8574 16.8571 20.7952 11.9995 20.7952C11.4598 20.7952 11.0223 21.2327 11.0223 21.7725C11.0223 22.3122 11.4598 22.7497 11.9995 22.7497C17.9365 22.7497 22.7494 17.9369 22.7494 11.9999C22.7494 6.06288 17.9365 1.25 11.9995 1.25C7.17974 1.25 3.15124 4.41956 1.78319 8.77525C1.68996 9.07209 1.74365 9.39558 1.92776 9.64639C2.11188 9.89719 2.40442 10.0453 2.71555 10.0453H5.1587C5.69843 10.0453 6.13596 9.60781 6.13596 9.06809C6.13596 8.79822 6.02658 8.5539 5.84973 8.37705L5.22681 7.75414C4.95387 7.4812 4.8174 7.34473 4.80626 7.15968C4.79512 6.97462 4.9058 6.8335 5.12717 6.55125C6.72748 4.51089 9.20293 3.20452 11.9995 3.20452ZM3.20452 12.0007C3.20452 11.461 2.76699 11.0234 2.22726 11.0234C1.68753 11.0234 1.25 11.461 1.25 12.0007C1.25 12.3597 1.26618 12.715 1.29788 13.0659C1.34643 13.6034 1.82155 13.9998 2.35909 13.9513C2.89663 13.9027 3.29303 13.4276 3.24447 12.89C3.21806 12.5976 3.20452 12.3009 3.20452 12.0007ZM3.82096 15.415C3.63071 14.9099 3.06703 14.6547 2.56195 14.8449C2.05687 15.0352 1.80164 15.5989 1.9919 16.1039C2.1517 16.5282 2.33556 16.9399 2.54176 17.3372C2.79038 17.8162 3.38028 18.003 3.85933 17.7544C4.33838 17.5058 4.52518 16.9159 4.27655 16.4368C4.10583 16.1079 3.95347 15.7668 3.82096 15.415ZM5.71037 18.4762C5.34319 18.0806 4.72485 18.0576 4.32927 18.4248C3.93369 18.792 3.91066 19.4103 4.27783 19.8059C4.60545 20.1588 4.9553 20.4896 5.32517 20.7957C5.74097 21.1398 6.35701 21.0817 6.70111 20.6659C7.04522 20.2501 6.98709 19.634 6.57129 19.2899C6.26784 19.0388 5.98021 18.7669 5.71037 18.4762ZM8.49767 20.5014C8.00694 20.2767 7.42698 20.4924 7.20228 20.9831C6.97758 21.4739 7.19325 22.0538 7.68398 22.2785C8.03398 22.4388 8.3939 22.5802 8.76255 22.7016C9.27522 22.8703 9.82761 22.5915 9.99636 22.0788C10.1651 21.5662 9.8863 21.0138 9.37363 20.845C9.07461 20.7466 8.78231 20.6318 8.49767 20.5014Z',
  d6: 'M20.7948 11.9999C20.7948 7.14233 16.857 3.20452 11.9995 3.20452C9.20293 3.20452 6.72748 4.51089 5.12717 6.55125C4.9058 6.8335 4.79512 6.97462 4.80626 7.15968C4.8174 7.34473 4.95387 7.4812 5.22681 7.75414L5.84973 8.37705C6.02658 8.5539 6.13596 8.79822 6.13596 9.06809C6.13596 9.60781 5.69843 10.0453 5.1587 10.0453H2.71555C2.40442 10.0453 2.11188 9.89719 1.92776 9.64639C1.74365 9.39558 1.68996 9.07209 1.78319 8.77525C3.15124 4.41956 7.17974 1.25 11.9995 1.25C17.9365 1.25 22.7494 6.06288 22.7494 11.9999C22.7494 17.9369 17.9365 22.7497 11.9995 22.7497C11.4598 22.7497 11.0223 22.3122 11.0223 21.7725C11.0223 21.2327 11.4598 20.7952 11.9995 20.7952C16.8571 20.7952 20.7948 16.8574 20.7948 11.9999Z',
  d7: 'M2.22726 11.0234C2.76699 11.0234 3.20452 11.461 3.20452 12.0007C3.20452 12.3009 3.21806 12.5976 3.24447 12.89C3.29303 13.4276 2.89663 13.9027 2.35909 13.9513C1.82155 13.9998 1.34643 13.6034 1.29788 13.0659C1.26618 12.715 1.25 12.3597 1.25 12.0007C1.25 11.461 1.68753 11.0234 2.22726 11.0234ZM2.56195 14.8449C3.06703 14.6547 3.63071 14.9099 3.82096 15.415C3.95347 15.7668 4.10583 16.1079 4.27655 16.4368C4.52518 16.9159 4.33838 17.5058 3.85933 17.7544C3.38028 18.003 2.79038 17.8162 2.54176 17.3372C2.33556 16.9399 2.1517 16.5282 1.9919 16.1039C1.80164 15.5989 2.05687 15.0352 2.56195 14.8449ZM4.32927 18.4248C4.72485 18.0576 5.34319 18.0806 5.71037 18.4762C5.98021 18.7669 6.26784 19.0388 6.57129 19.2899C6.98709 19.634 7.04522 20.2501 6.70111 20.6659C6.35701 21.0817 5.74097 21.1398 5.32517 20.7957C4.9553 20.4896 4.60545 20.1588 4.27783 19.8059C3.91066 19.4103 3.93369 18.792 4.32927 18.4248ZM7.20228 20.9831C7.42698 20.4924 8.00694 20.2767 8.49767 20.5014C8.78231 20.6318 9.07461 20.7466 9.37363 20.845C9.8863 21.0138 10.1651 21.5662 9.99636 22.0788C9.82761 22.5915 9.27522 22.8703 8.76255 22.7016C8.3939 22.5802 8.03398 22.4388 7.68398 22.2785C7.19325 22.0538 6.97758 21.4739 7.20228 20.9831Z',
  d8: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C7.52232 2 3.77426 4.94289 2.5 9H5.5',
  d9: 'M12 7V12L14.5 14.5',
  d10: 'M11 7H13V11.5858L15.2071 13.7929L13.7929 15.2071L11 12.4142V7Z',
  d11: 'M3.97364 8C5.44004 5.03275 8.4692 3 11.998 3C16.9686 3 20.998 7.02944 20.998 12C20.998 16.9706 16.9686 21 11.9981 21V23C18.0732 23 22.998 18.0751 22.998 12C22.998 5.92487 18.0731 1 11.998 1C7.06612 1 2.94388 4.24331 1.54401 8.70035C1.44861 9.00409 1.50354 9.33511 1.69194 9.59176C1.88034 9.8484 2.17968 10 2.49805 10H5.49805V8H3.97364Z',
  d12: 'M3.49805 10.7373V11.7373C3.49805 12.0445 3.5119 12.3481 3.53893 12.6473L3.62889 13.6433L1.637 13.8232L1.54704 12.8273C1.51461 12.4683 1.49805 12.1047 1.49805 11.7373V10.7373H3.49805ZM3.77633 14.2952L4.12883 15.231C4.26442 15.591 4.42033 15.94 4.59502 16.2767L5.05567 17.1642L3.28051 18.0855L2.81986 17.198C2.60886 16.7914 2.42072 16.3701 2.25721 15.936L1.90471 15.0002L3.77633 14.2952ZM5.3819 17.6306L6.0622 18.3635C6.33832 18.661 6.63265 18.9392 6.94315 19.1961L7.71355 19.8337L6.43844 21.3745L5.66804 20.7369C5.28956 20.4237 4.93157 20.0853 4.59633 19.7241L3.91603 18.9912L5.3819 17.6306ZM8.00514 20.0195L8.91436 20.4358C9.20563 20.5692 9.50473 20.6867 9.8107 20.7874L10.7606 21.1001L10.1353 22.9998L9.1854 22.6872C8.80817 22.563 8.43988 22.4183 8.08173 22.2543L7.17251 21.838L8.00514 20.0195Z',
} as const;

export const IconClock04StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="clock-04-stroke-rounded IconClock04StrokeRounded"
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

export const IconClock04DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="clock-04-duotone-rounded IconClock04DuotoneRounded"
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

export const IconClock04TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="clock-04-twotone-rounded IconClock04TwotoneRounded"
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

export const IconClock04SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="clock-04-solid-rounded IconClock04SolidRounded"
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

export const IconClock04BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="clock-04-bulk-rounded IconClock04BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconClock04StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="clock-04-stroke-sharp IconClock04StrokeSharp"
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

export const IconClock04SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="clock-04-solid-sharp IconClock04SolidSharp"
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

export const iconPackOfClock04: TheIconSelfPack = {
  name: 'Clock04',
  StrokeRounded: IconClock04StrokeRounded,
  DuotoneRounded: IconClock04DuotoneRounded,
  TwotoneRounded: IconClock04TwotoneRounded,
  SolidRounded: IconClock04SolidRounded,
  BulkRounded: IconClock04BulkRounded,
  StrokeSharp: IconClock04StrokeSharp,
  SolidSharp: IconClock04SolidSharp,
};