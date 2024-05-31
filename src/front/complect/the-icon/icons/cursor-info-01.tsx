import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M10 3.32038C6.75053 2.8233 3.67361 2.85605 2.76477 3.76477C0.59286 5.93695 3.42489 20.494 6.53497 20.1912C8.24124 20.0189 9.43225 17.2787 10.8342 16.4228C11.3865 16.0856 11.8761 16.4281 12.222 16.8784L15.569 21.2348C16.1521 21.9939 16.5628 22.2198 17.4421 21.7696C18.7939 21.0775 20.0785 19.7911 20.7696 18.4418C21.2198 17.5628 20.9939 17.152 20.235 16.569L18 14.8519',
  d2: 'M15.6982 5.33428C15.6982 4.65455 16.2579 4.10352 16.9482 4.10352C17.6386 4.10352 18.1982 4.65455 18.1982 5.33428C18.1982 5.5793 18.1255 5.80759 18.0002 5.99939C17.6824 6.48571 17.1439 6.95283 16.9903 7.5M17 9.5H17.009M22 7C22 9.76142 19.7614 12 17 12C14.2386 12 12 9.76142 12 7C12 4.23858 14.2386 2 17 2C19.7614 2 22 4.23858 22 7Z',
  d3: 'M13.0497 3.93449C12.3918 4.78109 12 5.84479 12 7C12 9.22746 13.4566 11.1147 15.4692 11.7613C15.4532 11.7855 15.4378 11.8098 15.4229 11.8342C15.0857 12.3865 15.4281 12.876 15.8784 13.222L20.235 16.569C20.9939 17.152 21.2198 17.5628 20.7696 18.4418C20.0785 19.7911 18.7939 21.0775 17.4421 21.7696C16.5628 22.2198 16.1521 21.9939 15.569 21.2348L12.222 16.8784C11.8761 16.4281 11.3865 16.0856 10.8342 16.4228C10.2718 16.7661 9.74337 17.4127 9.202 18.0751C8.3938 19.0639 7.55678 20.088 6.53497 20.1912C3.42489 20.494 0.59286 5.93695 2.76477 3.76477C3.95893 2.57077 8.89614 2.88907 13.0497 3.93449Z',
  d4: 'M10.1883 2.59055C10.5966 2.65396 10.8007 2.68567 10.8698 2.82498C10.9389 2.96429 10.8325 3.16087 10.6197 3.55403C10.065 4.57899 9.75 5.75271 9.75 7C9.75 11.0041 12.9959 14.25 17 14.25C17.3513 14.25 17.6968 14.225 18.0347 14.1767C18.1698 14.1574 18.2374 14.1478 18.296 14.1631C18.3546 14.1785 18.4056 14.2177 18.5077 14.2962L20.6919 15.9742C21.0776 16.2705 21.4943 16.6379 21.6673 17.1574C21.8559 17.7237 21.6993 18.2717 21.4371 18.7837C20.6745 20.2728 19.276 21.6733 17.7838 22.4372C17.2718 22.6994 16.7237 22.8559 16.1575 22.6673C15.6379 22.4942 15.2706 22.0775 14.9742 21.6918L11.6273 17.3353C11.459 17.1162 11.3422 17.0537 11.2767 17.0492C11.2617 17.0482 11.2992 17.0507 11.2517 17.0631C11.2042 17.0755 11.1957 17.0811 11.1786 17.0924C10.9394 17.249 10.6766 17.5011 10.3732 17.8449C10.1757 18.0685 9.993 18.2923 9.79915 18.5297C9.66501 18.694 9.5253 18.8652 9.37198 19.0469C9.0218 19.4621 8.62932 19.8956 8.19377 20.239C7.75659 20.5837 7.22975 20.8748 6.6103 20.9374L6.60768 20.9376C5.8994 21.0066 5.30547 20.6395 4.85888 20.19C4.407 19.7351 4.00723 19.1021 3.65577 18.3896C2.94924 16.9572 2.35535 15.0323 1.93559 13.0624C1.51493 11.0883 1.25924 9.0223 1.25025 7.29428C1.24575 6.43167 1.3025 5.62989 1.44097 4.95576C1.57439 4.30625 1.80522 3.66371 2.23441 3.23447C2.66365 2.80529 3.30626 2.57439 3.95577 2.44097C4.62991 2.3025 5.43169 2.24575 6.2943 2.25025C7.47953 2.25642 8.82377 2.37864 10.1883 2.59055Z',
  d5: 'M17 1.25C13.8244 1.25 11.25 3.82436 11.25 7C11.25 10.1756 13.8244 12.75 17 12.75C20.1756 12.75 22.75 10.1756 22.75 7C22.75 3.82436 20.1756 1.25 17 1.25ZM16.5 5.53155C16.5 5.27695 16.7129 5.05078 17 5.05078C17.2871 5.05078 17.5 5.27695 17.5 5.53155C17.5 5.62581 17.4725 5.71228 17.4241 5.78636C17.3368 5.92 17.2419 6.03526 17.1221 6.18083L17.1221 6.18084L17.1221 6.18088C17.0555 6.26187 16.9811 6.35223 16.896 6.46035C16.6938 6.71734 16.4394 7.06917 16.32 7.49454C16.208 7.89334 16.4405 8.30739 16.8393 8.41935C17.2381 8.53131 17.6522 8.29878 17.7641 7.89999C17.7983 7.77819 17.89 7.62287 18.0748 7.38793C18.115 7.33691 18.1642 7.2769 18.2182 7.21101C18.3648 7.03229 18.5469 6.8103 18.6798 6.60695C18.882 6.29744 19 5.92732 19 5.53155C19 4.42668 18.0936 3.55078 17 3.55078C15.9064 3.55078 15 4.42668 15 5.53155C15 5.94576 15.3358 6.28155 15.75 6.28155C16.1642 6.28155 16.5 5.94576 16.5 5.53155ZM17.0518 8.94727C16.6375 8.94727 16.3018 9.28305 16.3018 9.69727C16.3018 10.1115 16.6375 10.4473 17.0518 10.4473H17.0607C17.475 10.4473 17.8107 10.1115 17.8107 9.69727C17.8107 9.28305 17.475 8.94727 17.0607 8.94727H17.0518Z',
  d6: 'M16 14.3996L20 18.3996L16.4005 22L11.0001 16.5996L5.59999 21.9993L2 4L9 5.39999',
  d7: 'M16.9844 7.98828C16.9844 7.41406 17.3596 6.80754 17.5393 6.57498C18.1211 5.96336 18.3134 5.55702 18.1211 4.91233C17.636 3.61706 15.6973 3.97671 15.6973 5.33767M16.9844 9V10',
  d8: 'M10.0741 4.84997C9.86346 5.52931 9.75 6.2514 9.75 7C9.75 10.9742 12.9477 14.2016 16.9106 14.2495L20.5303 17.8692C20.8232 18.1621 20.8232 18.6369 20.5304 18.9298L16.931 22.5303C16.7903 22.671 16.5995 22.75 16.4006 22.75C16.2017 22.75 16.0109 22.671 15.8702 22.5303L11.0001 17.6602L6.13031 22.5297C5.93473 22.7252 5.64738 22.7973 5.38265 22.7171C5.11793 22.637 4.91881 22.4176 4.86457 22.1464L1.26458 4.1471C1.2154 3.90121 1.29236 3.647 1.46968 3.46968C1.647 3.29237 1.9012 3.2154 2.1471 3.26458L10.0741 4.84997Z',
  d9: 'M17 1.25C13.8244 1.25 11.25 3.82436 11.25 7C11.25 10.1756 13.8244 12.75 17 12.75C20.1756 12.75 22.75 10.1756 22.75 7C22.75 3.82436 20.1756 1.25 17 1.25ZM16.4492 5.33428C16.4492 5.07968 16.6621 4.85352 16.9492 4.85352C17.2364 4.85352 17.4492 5.07968 17.4492 5.33428C17.4492 5.42855 17.4218 5.51502 17.3733 5.58909C17.322 5.6676 17.25 5.7554 17.1318 5.89797C17.0238 6.02826 16.8854 6.1954 16.7559 6.38671C16.4869 6.78419 16.2413 7.30731 16.2413 8H17.7413C17.7413 7.69269 17.8417 7.45867 17.9982 7.22742C18.0814 7.10437 18.1756 6.98925 18.2868 6.85508L18.305 6.83315C18.4034 6.71445 18.5277 6.56463 18.629 6.40968C18.8313 6.10017 18.9492 5.73006 18.9492 5.33428C18.9492 4.22942 18.0428 3.35352 16.9492 3.35352C15.8557 3.35352 14.9492 4.22942 14.9492 5.33428H16.4492ZM17.001 8.75C16.5868 8.75 16.251 9.08579 16.251 9.5C16.251 9.91421 16.5868 10.25 17.001 10.25H17.01C17.4242 10.25 17.76 9.91421 17.76 9.5C17.76 9.08579 17.4242 8.75 17.01 8.75H17.001Z',
} as const;

export const IconCursorInfo01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-info-01-stroke-rounded IconCursorInfo01StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconCursorInfo01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-info-01-duotone-rounded IconCursorInfo01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
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
    </TheIconWrapper>
  );
};

export const IconCursorInfo01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-info-01-twotone-rounded IconCursorInfo01TwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconCursorInfo01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-info-01-solid-rounded IconCursorInfo01SolidRounded"
    >
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

export const IconCursorInfo01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-info-01-bulk-rounded IconCursorInfo01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconCursorInfo01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-info-01-stroke-sharp IconCursorInfo01StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <circle 
        cx="17" 
        cy="7" 
        r="5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const IconCursorInfo01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-info-01-solid-sharp IconCursorInfo01SolidSharp"
    >
      <path 
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

export const iconPackOfCursorInfo01: TheIconSelfPack = {
  name: 'CursorInfo01',
  StrokeRounded: IconCursorInfo01StrokeRounded,
  DuotoneRounded: IconCursorInfo01DuotoneRounded,
  TwotoneRounded: IconCursorInfo01TwotoneRounded,
  SolidRounded: IconCursorInfo01SolidRounded,
  BulkRounded: IconCursorInfo01BulkRounded,
  StrokeSharp: IconCursorInfo01StrokeSharp,
  SolidSharp: IconCursorInfo01SolidSharp,
};