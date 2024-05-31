import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M16.7133 13.5937C18.1939 13.9846 19.2229 14.4792 20.1589 15.0848C21.5432 15.9804 22.1367 17.5944 21.9737 19.1517C21.9049 19.8099 21.3744 20.1246 20.7592 19.9544L19.3705 19.57C18.2697 19.2653 17.7193 19.1129 17.3837 18.71C17.0481 18.307 17.0086 17.751 16.9296 16.6391L16.7133 13.5937ZM16.7133 13.5937C13.7164 12.8025 10.2871 12.8016 7.28669 13.5937M7.28669 13.5937C5.80606 13.9846 4.77711 14.4792 3.84113 15.0848C2.45683 15.9804 1.86334 17.5944 2.02628 19.1517C2.09514 19.8099 2.62563 20.1246 3.24078 19.9544L4.62954 19.57C5.73032 19.2653 6.28071 19.1129 6.61631 18.71C6.95191 18.307 6.9914 17.751 7.07038 16.6391L7.28669 13.5937Z',
  d2: 'M12 4V6.85714M18 7.57143L15.6001 9M6 7.57143L8.39987 9',
  d3: 'M16.7133 13.5938C18.1939 13.9846 19.2229 14.4792 20.1589 15.0848C21.5432 15.9805 22.1367 17.5944 21.9737 19.1517C21.9049 19.8099 21.3744 20.1247 20.7592 19.9544L19.3705 19.57C18.2697 19.2653 17.7193 19.1129 17.3837 18.71C17.0481 18.307 17.0086 17.751 16.9296 16.6391L16.7133 13.5938Z',
  d4: 'M7.28669 13.5938C5.80606 13.9846 4.77711 14.4792 3.84113 15.0848C2.45683 15.9805 1.86334 17.5944 2.02628 19.1517C2.09514 19.8099 2.62563 20.1247 3.24078 19.9544L4.62954 19.57C5.73032 19.2653 6.28071 19.1129 6.61631 18.71C6.95191 18.307 6.9914 17.751 7.07038 16.6391L7.28669 13.5938Z',
  d5: 'M7.09551 12.9936C10.2215 12.1683 13.7827 12.1693 16.905 12.9936C18.4637 13.4051 19.5653 13.9323 20.5665 14.5801C22.2308 15.6569 22.9065 17.5712 22.7199 19.3548C22.6651 19.8782 22.4121 20.3411 21.976 20.6203C21.5476 20.8947 21.0341 20.9336 20.5594 20.8022L19.1331 20.4074C18.6148 20.264 18.1682 20.1404 17.8124 19.9984C17.4317 19.8465 17.0849 19.6479 16.8076 19.3149C16.5291 18.9804 16.3988 18.6044 16.3236 18.2039C16.2538 17.8327 16.2216 17.379 16.1846 16.8572L16.0697 15.2393C16.0542 15.0208 16.0464 14.9115 15.9781 14.8351C15.9098 14.7587 15.8045 14.7392 15.5939 14.7002C13.2546 14.2668 10.7478 14.2664 8.40662 14.7002C8.196 14.7392 8.09069 14.7587 8.0224 14.8351C7.95412 14.9115 7.94636 15.0208 7.93084 15.2393L7.81592 16.8572C7.77888 17.379 7.74668 17.8327 7.67694 18.2039C7.60169 18.6044 7.47144 18.9804 7.19289 19.3149C6.91561 19.6479 6.56887 19.8465 6.18808 19.9984C5.83234 20.1404 5.38577 20.2639 4.86744 20.4074L3.44112 20.8022C2.96646 20.9336 2.45292 20.8947 2.0245 20.6203C1.58838 20.3411 1.33538 19.8782 1.28061 19.3548C1.09401 17.5712 1.76976 15.6569 3.43398 14.5801C4.4352 13.9323 5.53686 13.4051 7.09551 12.9936Z',
  d6: 'M12.0004 3.125C12.5527 3.125 13.0004 3.57272 13.0004 4.125V6.98214C13.0004 7.53443 12.5527 7.98214 12.0004 7.98214C11.4481 7.98214 11.0004 7.53443 11.0004 6.98214V4.125C11.0004 3.57272 11.4481 3.125 12.0004 3.125ZM5.14112 7.18492C5.42361 6.71036 6.03733 6.55465 6.5119 6.83715L8.91178 8.26572C9.38634 8.54821 9.54205 9.16194 9.25955 9.6365C8.97706 10.1111 8.36333 10.2668 7.88877 9.98428L5.48889 8.55571C5.01433 8.27321 4.85862 7.65949 5.14112 7.18492ZM18.8597 7.18492C19.1422 7.65949 18.9865 8.27321 18.5119 8.55571L16.112 9.98428C15.6375 10.2668 15.0237 10.1111 14.7412 9.6365C14.4587 9.16194 14.6145 8.54821 15.089 8.26572L17.4889 6.83715C17.9635 6.55465 18.5772 6.71036 18.8597 7.18492Z',
  d7: 'M7.09527 12.9936C10.2212 12.1683 13.7824 12.1693 16.9048 12.9936C18.4634 13.4051 19.5651 13.9323 20.5663 14.5801C22.2305 15.6569 22.9063 17.5712 22.7197 19.3548C22.6649 19.8782 22.4119 20.3411 21.9758 20.6203C21.5474 20.8947 21.0338 20.9336 20.5592 20.8022L19.1329 20.4074C18.6145 20.264 18.168 20.1404 17.8122 19.9984C17.4314 19.8465 17.0847 19.6479 16.8074 19.3149C16.5288 18.9804 16.3986 18.6044 16.3233 18.2039C16.2536 17.8327 16.2214 17.379 16.1844 16.8572L16.0694 15.2393C16.0539 15.0208 16.0462 14.9115 15.9779 14.8351C15.9096 14.7587 15.8043 14.7392 15.5937 14.7002C13.2543 14.2668 10.7475 14.2664 8.40638 14.7002C8.19576 14.7392 8.09044 14.7587 8.02216 14.8351C7.95387 14.9115 7.94611 15.0208 7.93059 15.2393L7.81567 16.8572C7.77864 17.379 7.74643 17.8327 7.67669 18.2039C7.60144 18.6044 7.4712 18.9804 7.19264 19.3149C6.91537 19.6479 6.56862 19.8465 6.18783 19.9984C5.83209 20.1404 5.38552 20.2639 4.8672 20.4074L4.86717 20.4074L3.44087 20.8022C2.96622 20.9336 2.45268 20.8947 2.02425 20.6203C1.58814 20.3411 1.33514 19.8782 1.28037 19.3548C1.09377 17.5712 1.76952 15.6569 3.43373 14.5801C4.43496 13.9323 5.53662 13.4051 7.09527 12.9936Z',
  d8: 'M11.9998 4.00098V6.85143M17.9998 7.56405L15.5999 8.98928M5.99976 7.56405L8.39963 8.98928',
  d9: 'M7.25503 13.4754L7.10099 17.9646L2.04993 19.9523C2.04362 19.9548 2.03669 19.9504 2.03625 19.9436C1.88708 17.678 2.15926 16.0853 3.28898 15.2765C4.76505 14.2197 7.50621 13.0786 11.2998 12.9913C12.7717 12.8587 14.7327 12.9931 16.7966 13.6118M16.7966 13.6118C18.9595 14.2602 21.5391 15.0175 21.9401 17.2445C22.0284 17.735 22.0361 19.2878 21.8614 19.9926C21.8602 19.9974 21.8551 20.0001 21.8504 19.9986L16.7966 17.9646V13.6118Z',
  d10: 'M1.43692 20.4998L1.33479 19.5183C1.17197 17.9538 1.00525 15.4112 3.22641 13.9628C4.25075 13.2953 5.37825 12.7518 6.97394 12.3278C8.57804 11.9015 10.2909 11.6903 11.9996 11.6909C13.7084 11.6903 15.4214 11.9017 17.0254 12.328C18.6211 12.752 19.7484 13.2954 20.7727 13.9629C22.9939 15.4113 22.8274 17.954 22.6646 19.5185L22.5624 20.5L16.0828 17.9519V13.9631C14.7739 13.664 13.3888 13.5135 11.9999 13.514C10.611 13.5135 9.22544 13.6638 7.91657 13.9629V17.9519L1.43692 20.4998Z',
  d11: 'M10.9989 6.3569V3.49976H12.9989V6.3569H10.9989ZM15.0876 7.64047L17.4874 6.2119L18.5104 7.93047L16.1106 9.35904L15.0876 7.64047ZM7.8873 9.35904L5.48743 7.93047L6.51043 6.2119L8.91031 7.64047L7.8873 9.35904Z',
} as const;

export const IconCallRinging01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="call-ringing-01-stroke-rounded IconCallRinging01StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconCallRinging01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="call-ringing-01-duotone-rounded IconCallRinging01DuotoneRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      </g>
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
    </TheIconWrapper>
  );
};

export const IconCallRinging01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="call-ringing-01-twotone-rounded IconCallRinging01TwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconCallRinging01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="call-ringing-01-solid-rounded IconCallRinging01SolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCallRinging01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="call-ringing-01-bulk-rounded IconCallRinging01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCallRinging01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="call-ringing-01-stroke-sharp IconCallRinging01StrokeSharp"
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
    </TheIconWrapper>
  );
};

export const IconCallRinging01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="call-ringing-01-solid-sharp IconCallRinging01SolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfCallRinging01: TheIconSelfPack = {
  name: 'CallRinging01',
  StrokeRounded: IconCallRinging01StrokeRounded,
  DuotoneRounded: IconCallRinging01DuotoneRounded,
  TwotoneRounded: IconCallRinging01TwotoneRounded,
  SolidRounded: IconCallRinging01SolidRounded,
  BulkRounded: IconCallRinging01BulkRounded,
  StrokeSharp: IconCallRinging01StrokeSharp,
  SolidSharp: IconCallRinging01SolidSharp,
};