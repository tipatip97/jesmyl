import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M18.4368 5.56324C17.7156 4.84207 16.9002 4.34309 16.1458 4.10787C15.8323 4.01011 15.6755 3.96123 15.3675 4.03713C15.0594 4.11302 14.8899 4.28249 14.551 4.62141L4.62141 14.551C4.28248 14.8899 4.11302 15.0594 4.03713 15.3675C3.96123 15.6755 4.01011 15.8323 4.10787 16.1458C4.34309 16.9002 4.84207 17.7156 5.56324 18.4368C6.28441 19.1579 7.0998 19.6569 7.85419 19.8921C8.16773 19.9899 8.3245 20.0388 8.63255 19.9629C8.94059 19.887 9.11005 19.7175 9.44898 19.3786L19.3786 9.44898C19.7175 9.11005 19.887 8.94059 19.9629 8.63255C20.0388 8.3245 19.9899 8.16773 19.8921 7.85419C19.6569 7.0998 19.1579 6.28441 18.4368 5.56324Z',
  d2: 'M19.2904 6C20.1754 5.65327 21.1891 4.98877 21.549 4.62887C22.1503 4.02748 22.1503 3.05243 21.549 2.45104C20.9476 1.84965 19.9725 1.84965 19.3711 2.45104C19.0112 2.81094 18.3467 3.82465 18 4.70962',
  d3: 'M6 19.2904C5.65327 20.1754 4.98877 21.1891 4.62887 21.549C4.02748 22.1503 3.05243 22.1503 2.45104 21.549C1.84965 20.9476 1.84965 19.9725 2.45104 19.3711C2.81094 19.0112 3.82465 18.3467 4.70962 18',
  d4: 'M16.11 3.88513C16.9499 4.14703 17.8163 4.68668 18.5648 5.43521C19.3133 6.18374 19.853 7.05011 20.1149 7.89005C20.1546 8.01697 20.2144 8.20823 20.237 8.38492C20.2647 8.60096 20.2473 8.80392 20.1934 9.02244C20.0712 9.51848 19.7723 9.81584 19.498 10.0887L10.0887 19.498C9.81585 19.7723 9.51849 20.0712 9.02244 20.1934C8.80392 20.2473 8.60097 20.2647 8.38492 20.237C8.20822 20.2144 8.01697 20.1546 7.89005 20.1149C7.05011 19.853 6.18374 19.3133 5.43521 18.5648C4.68668 17.8163 4.14703 16.9499 3.88513 16.11C3.84542 15.983 3.78558 15.7918 3.76298 15.6151C3.73534 15.399 3.75274 15.1961 3.80659 14.9776C3.9288 14.4815 4.22773 14.1842 4.50199 13.9113L13.9113 4.50199C14.1842 4.22773 14.4815 3.9288 14.9776 3.80659C15.1961 3.75274 15.399 3.73534 15.6151 3.76298C15.7918 3.78558 15.983 3.84542 16.11 3.88513Z',
  d5: 'M3.05195 18.0028C3.19214 17.917 3.37374 17.9659 3.46275 18.104C3.76918 18.5797 4.13635 19.0328 4.55133 19.4477C4.96628 19.8627 5.41929 20.2298 5.89492 20.5362C6.03309 20.6253 6.0819 20.8069 5.9961 20.947C5.98279 20.9688 5.96949 20.9903 5.9562 21.0117C5.69128 21.4376 5.39957 21.8379 5.1592 22.0782C4.26491 22.9725 2.815 22.9725 1.92071 22.0782C1.02643 21.184 1.02643 19.734 1.92071 18.8398C2.16108 18.5994 2.5614 18.3077 2.98727 18.0428C3.00864 18.0295 3.0302 18.0161 3.05195 18.0028Z',
  d6: 'M18.0048 3.05218C17.919 3.19236 17.9678 3.37395 18.1059 3.46296C18.5815 3.76935 19.0344 4.13645 19.4493 4.55133C19.8643 4.96634 20.2315 5.41942 20.538 5.89513C20.627 6.0333 20.8086 6.08211 20.9488 5.99632C20.9706 5.98294 20.9923 5.96957 21.0138 5.9562C21.4396 5.69128 21.8399 5.39957 22.0803 5.1592C22.9746 4.26491 22.9746 2.815 22.0803 1.92071C21.186 1.02643 19.7361 1.02643 18.8418 1.92071C18.6015 2.16108 18.3098 2.5614 18.0448 2.98727C18.0315 3.00871 18.0181 3.03036 18.0048 3.05218Z',
  d7: 'M3.05195 18.0038C3.19214 17.918 3.37374 17.9668 3.46275 18.105C3.76918 18.5806 4.13635 19.0337 4.55133 19.4487C4.96628 19.8636 5.41929 20.2308 5.89492 20.5372C6.03309 20.6262 6.0819 20.8078 5.9961 20.948C5.98279 20.9697 5.96949 20.9913 5.9562 21.0126C5.69128 21.4385 5.39957 21.8388 5.1592 22.0792C4.26491 22.9735 2.815 22.9735 1.92071 22.0792C1.02643 21.1849 1.02643 19.735 1.92071 18.8407C2.16108 18.6003 2.5614 18.3086 2.98727 18.0437C3.00864 18.0304 3.0302 18.0171 3.05195 18.0038Z',
  d8: 'M18.0041 3.05218C17.9183 3.19236 17.9671 3.37395 18.1053 3.46296C18.5809 3.76935 19.0338 4.13645 19.4487 4.55133C19.8637 4.96634 20.2309 5.41942 20.5373 5.89513C20.6263 6.0333 20.8079 6.08211 20.9481 5.99632C20.97 5.98294 20.9916 5.96957 21.0131 5.9562C21.439 5.69128 21.8393 5.39957 22.0797 5.1592C22.974 4.26491 22.974 2.815 22.0797 1.92071C21.1854 1.02643 19.7355 1.02643 18.8412 1.92071C18.6008 2.16108 18.3091 2.5614 18.0442 2.98727C18.0308 3.00871 18.0175 3.03036 18.0041 3.05218Z',
  d9: 'M21 8L16 3L3 16L8 21L21 8Z',
  d10: 'M2.73257 18.2075L5.79245 21.2674C5.57513 21.5943 5.35084 21.8876 5.1592 22.0793C4.26491 22.9735 2.815 22.9735 1.92071 22.0793C1.02643 21.185 1.02643 19.7351 1.92071 18.8408C2.11236 18.6491 2.40568 18.4248 2.73257 18.2075ZM15.4697 2.46967C15.7626 2.17678 16.2374 2.17678 16.5303 2.46967L21.5303 7.46967C21.8232 7.76256 21.8232 8.23744 21.5303 8.53033L8.53033 21.5303C8.23744 21.8232 7.76256 21.8232 7.46967 21.5303L2.46967 16.5303C2.17678 16.2374 2.17678 15.7626 2.46967 15.4697L15.4697 2.46967ZM18.207 2.73169L21.2672 5.79187C21.5937 5.57473 21.8867 5.35067 22.0782 5.1592C22.9725 4.26491 22.9725 2.81499 22.0782 1.92071C21.1839 1.02643 19.734 1.02643 18.8397 1.92071C18.6482 2.11219 18.4242 2.40516 18.207 2.73169Z',
} as const;

export const IconRollingPinStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rolling-pin-stroke-rounded IconRollingPinStrokeRounded"
    >
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconRollingPinDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rolling-pin-duotone-rounded IconRollingPinDuotoneRounded"
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
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconRollingPinTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rolling-pin-twotone-rounded IconRollingPinTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconRollingPinSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rolling-pin-solid-rounded IconRollingPinSolidRounded"
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

export const IconRollingPinBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rolling-pin-bulk-rounded IconRollingPinBulkRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      </g>
    </TheIconWrapper>
  );
};

export const IconRollingPinStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rolling-pin-stroke-sharp IconRollingPinStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconRollingPinSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rolling-pin-solid-sharp IconRollingPinSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfRollingPin: TheIconSelfPack = {
  name: 'RollingPin',
  StrokeRounded: IconRollingPinStrokeRounded,
  DuotoneRounded: IconRollingPinDuotoneRounded,
  TwotoneRounded: IconRollingPinTwotoneRounded,
  SolidRounded: IconRollingPinSolidRounded,
  BulkRounded: IconRollingPinBulkRounded,
  StrokeSharp: IconRollingPinStrokeSharp,
  SolidSharp: IconRollingPinSolidSharp,
};