import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M14.9805 7.01562C14.9805 7.01562 15.4805 7.51562 15.9805 8.51562C15.9805 8.51562 17.5687 6.01562 18.9805 5.51562',
  d2: 'M9.99485 2.02141C7.49638 1.91562 5.56612 2.20344 5.56612 2.20344C4.34727 2.29059 2.01146 2.97391 2.01148 6.9646C2.0115 10.9214 1.98564 15.7993 2.01148 17.744C2.01148 18.932 2.7471 21.7034 5.29326 21.8519C8.3881 22.0324 13.9627 22.0708 16.5205 21.8519C17.2051 21.8133 19.4846 21.2758 19.7731 18.7957C20.072 16.2264 20.0125 14.4407 20.0125 14.0157',
  d3: 'M21.9999 7.01562C21.9999 9.77705 19.7591 12.0156 16.995 12.0156C14.231 12.0156 11.9902 9.77705 11.9902 7.01562C11.9902 4.2542 14.231 2.01562 16.995 2.01562C19.7591 2.01562 21.9999 4.2542 21.9999 7.01562Z',
  d4: 'M6.98047 13.0156H10.9805',
  d5: 'M6.98047 17.0156H14.9805',
  d6: 'M11.5294 22H10.4706C6.47751 22 4.48098 22 3.24049 20.8284C2 19.6569 2 17.7712 2 14V10C2 6.22876 2 4.34315 3.24049 3.17157C4.48098 2 6.47752 2 10.4706 2H15.9999C16.1596 2 16.3171 2.00936 16.4719 2.02755C13.9587 2.29136 12 4.41694 12 7C12 9.76142 14.2386 12 17 12C18.1256 12 19.1643 11.6281 19.9999 11.0004V14.4185C19.9982 17.9124 19.9532 19.701 18.7595 20.8284C17.519 22 15.5225 22 11.5294 22Z',
  d7: 'M15 7.5C15 7.5 15.5 7.5 16 8.5C16 8.5 17.5882 6 19 5.5',
  d8: 'M22 7C22 9.76142 19.7614 12 17 12C14.2386 12 12 9.76142 12 7C12 4.23858 14.2386 2 17 2C19.7614 2 22 4.23858 22 7Z',
  d9: 'M10.3995 2.02141C7.90102 1.91562 5.56417 2.20303 5.56417 2.20303C4.34532 2.29018 2.00951 2.97351 2.00953 6.9642C2.00955 10.921 1.98369 15.7989 2.00953 17.7436C2.00953 18.9316 2.74515 21.703 5.29131 21.8515C8.38615 22.032 13.9607 22.0704 16.5185 21.8515C17.2031 21.8129 19.4826 21.2754 19.7711 18.7953C20.07 16.226 20.0105 14.4403 20.0105 14.0153',
  d10: 'M7 13H11',
  d11: 'M7 17H15',
  d12: 'M15.0034 7.49805C15.0034 7.49805 15.5032 7.49805 16.003 8.49805C16.003 8.49805 17.5906 5.99805 19.0018 5.49805',
  d13: 'M22.0005 6.99805C22.0005 9.75947 19.7627 11.998 17.0024 11.998C14.2421 11.998 12.0044 9.75947 12.0044 6.99805C12.0044 4.23663 14.2421 1.99805 17.0024 1.99805C19.7627 1.99805 22.0005 4.23663 22.0005 6.99805Z',
  d14: 'M7.00635 12.998H11.0048',
  d15: 'M7.00635 16.998H15.0032',
  d16: 'M10.46 2.0235C7.96254 1.91771 5.56423 2.20343 5.56423 2.20343C4.34586 2.29058 2.01097 2.9739 2.01099 6.96459C2.01101 10.9214 1.98516 15.7993 2.01099 17.744C2.01099 18.932 2.74632 21.7034 5.29148 21.8519C8.3851 22.0324 13.9575 22.0708 16.5143 21.8519C17.1986 21.8133 19.4772 21.2758 19.7656 18.7957C20.0644 16.2264 19.9929 14.8009 19.9929 14.3759',
  d17: 'M17 1.25C13.8244 1.25 11.25 3.82436 11.25 7C11.25 10.1756 13.8244 12.75 17 12.75C20.1756 12.75 22.75 10.1756 22.75 7C22.75 3.82436 20.1756 1.25 17 1.25ZM19.2504 6.20717C19.6408 6.06889 19.8453 5.64027 19.707 5.24982C19.5687 4.85937 19.1401 4.65495 18.7496 4.79323C18.2675 4.96399 17.8199 5.28384 17.4411 5.61601C17.0546 5.955 16.6963 6.34574 16.3947 6.70726C16.2485 6.88246 16.1135 7.05341 15.9928 7.21192C15.9046 7.12935 15.8162 7.05964 15.7285 7.00117L15.7233 6.99771C15.565 6.89209 15.3522 6.7502 15 6.7502C14.5858 6.7502 14.25 7.08599 14.25 7.5002C14.25 7.87492 14.5248 8.18546 14.8839 8.24127C14.8875 8.2434 14.8917 8.24603 14.8965 8.24924C14.9522 8.28637 15.1237 8.42459 15.3292 8.83561C15.4501 9.07738 15.6917 9.2354 15.9616 9.24922C16.2315 9.26304 16.4882 9.13018 16.6332 8.90213C16.796 8.67148 17.276 7.9924 17.5465 7.66815C17.8184 7.34217 18.1219 7.01416 18.4302 6.74377C18.7463 6.46657 19.0266 6.28642 19.2504 6.20717Z',
  d18: 'M12.5824 1.25084C10.86 2.57633 9.75 4.65854 9.75 7C9.75 11.0041 12.9959 14.25 17 14.25C18.3725 14.25 19.6559 13.8686 20.75 13.2061V14.0593C20.75 15.8946 20.75 17.3527 20.5875 18.4948C20.4194 19.6753 20.0647 20.6274 19.2745 21.3737C18.4904 22.1142 17.5001 22.4415 16.2712 22.5976C15.0706 22.75 13.5341 22.75 11.5833 22.75H10.4167C8.46586 22.75 6.92941 22.75 5.72885 22.5976C4.49987 22.4415 3.50965 22.1142 2.72552 21.3737C1.93534 20.6274 1.5806 19.6753 1.41255 18.4948C1.24997 17.3527 1.24998 15.8946 1.25 14.0593V14.0593V9.94068V9.94067C1.24998 8.10541 1.24997 6.64729 1.41255 5.50521C1.5806 4.32468 1.93534 3.37259 2.72552 2.62631C3.50965 1.88575 4.49987 1.55847 5.72885 1.40242C6.92941 1.24998 8.46584 1.24999 10.4167 1.25H11.5833H11.5835C11.9294 1.25 12.2622 1.25 12.5824 1.25084ZM5 13C5 12.4477 5.44772 12 6 12H9.10825C9.66054 12 10.1083 12.4477 10.1083 13C10.1083 13.5523 9.66054 14 9.10825 14H6C5.44772 14 5 13.5523 5 13ZM6 16C5.44772 16 5 16.4477 5 17C5 17.5523 5.44772 18 6 18H14C14.5523 18 15 17.5523 15 17C15 16.4477 14.5523 16 14 16H6Z',
  d19: 'M12.5824 1.25084C10.86 2.57633 9.75 4.65854 9.75 7C9.75 11.0041 12.9959 14.25 17 14.25C18.3725 14.25 19.6559 13.8686 20.75 13.2061V14.0593C20.75 15.8946 20.75 17.3527 20.5875 18.4948C20.4194 19.6753 20.0647 20.6274 19.2745 21.3737C18.4904 22.1142 17.5001 22.4415 16.2712 22.5976C15.0706 22.75 13.5341 22.75 11.5833 22.75H10.4167C8.46586 22.75 6.92941 22.75 5.72885 22.5976C4.49987 22.4415 3.50965 22.1142 2.72552 21.3737C1.93534 20.6274 1.5806 19.6753 1.41255 18.4948C1.24997 17.3527 1.24998 15.8946 1.25 14.0593V9.94068C1.24998 8.10542 1.24997 6.64729 1.41255 5.50521C1.5806 4.32468 1.93534 3.37259 2.72552 2.62631C3.50965 1.88575 4.49987 1.55847 5.72885 1.40242C6.92941 1.24998 8.46584 1.24999 10.4167 1.25H11.5833C11.9292 1.25 12.2621 1.25 12.5824 1.25084Z',
  d20: 'M5 13C5 12.4477 5.44772 12 6 12H9.10825C9.66054 12 10.1083 12.4477 10.1083 13C10.1083 13.5523 9.66054 14 9.10825 14H6C5.44772 14 5 13.5523 5 13Z',
  d21: 'M5 17C5 16.4477 5.44772 16 6 16L14 16C14.5523 16 15 16.4477 15 17C15 17.5523 14.5523 18 14 18L6 18C5.44772 18 5 17.5523 5 17Z',
  d22: 'M6 13H12',
  d23: 'M6 17H16',
  d24: 'M10.5 2H2.01C2.00448 2 2 2.00448 2 2.01V21.99C2 21.9955 2.00448 22 2.01 22H19.99C19.9955 22 20 21.9955 20 21.99V14.3676',
  d25: 'M14.75 7L16.25 8.5L19.25 5.5M22 7C22 9.76142 19.7614 12 17 12C14.2386 12 12 9.76142 12 7C12 4.23858 14.2386 2 17 2C19.7614 2 22 4.23858 22 7Z',
  d26: 'M1.25 2.22727C1.25 1.68754 1.68652 1.25 2.225 1.25H10.4838V3.20455H3.2V20.7955H18.8L18.7999 14.3636L20.7499 14.3635L20.75 21.7727C20.75 22.0319 20.6473 22.2805 20.4644 22.4638C20.2816 22.647 20.0336 22.75 19.775 22.75H2.225C1.96641 22.75 1.71842 22.647 1.53557 22.4638C1.35272 22.2805 1.25 22.0319 1.25 21.7727V2.22727Z',
  d27: 'M17 1.25C13.8244 1.25 11.25 3.82436 11.25 7C11.25 10.1756 13.8244 12.75 17 12.75C20.1756 12.75 22.75 10.1756 22.75 7C22.75 3.82436 20.1756 1.25 17 1.25ZM19.7804 6.03039L18.7197 4.96973L16.2501 7.4394L15.2804 6.46973L14.2197 7.53039L16.2501 9.56072L19.7804 6.03039Z',
  d28: 'M12 14H6V12H12V14Z',
  d29: 'M16 18L6 18L6 16L16 16V18Z',
};

export const IconDocumentValidationStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="document-validation-stroke-rounded IconDocumentValidationStrokeRounded"
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDocumentValidationDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="document-validation-duotone-rounded IconDocumentValidationDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDocumentValidationTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="document-validation-twotone-rounded IconDocumentValidationTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDocumentValidationSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="document-validation-solid-rounded IconDocumentValidationSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDocumentValidationBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="document-validation-bulk-rounded IconDocumentValidationBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDocumentValidationStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="document-validation-stroke-sharp IconDocumentValidationStrokeSharp"
    >
      <path 
        d={d.d22} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d23} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d24} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d25} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconDocumentValidationSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="document-validation-solid-sharp IconDocumentValidationSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d27} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d28} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d29} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfDocumentValidation: TheIconSelfPack = {
  name: 'DocumentValidation',
  StrokeRounded: IconDocumentValidationStrokeRounded,
  DuotoneRounded: IconDocumentValidationDuotoneRounded,
  TwotoneRounded: IconDocumentValidationTwotoneRounded,
  SolidRounded: IconDocumentValidationSolidRounded,
  BulkRounded: IconDocumentValidationBulkRounded,
  StrokeSharp: IconDocumentValidationStrokeSharp,
  SolidSharp: IconDocumentValidationSolidSharp,
};