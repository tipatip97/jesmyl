import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M19.1012 18H7.96299C5.02913 18 3.56221 18 2.66807 16.8828C0.97093 14.7623 2.9047 9.1238 4.07611 7C4.47324 9.4 8.56152 9.33333 10.0507 9C9.05852 7.00119 10.3831 6.33413 11.0453 6.00059L11.0465 6C14 9.5 20.3149 11.404 21.8624 15.2188C22.5309 16.8667 20.6262 18 19.1012 18Z',
  d2: 'M2 14C6.16467 15.4294 8.73097 15.8442 12.0217 14.8039C13.0188 14.4887 13.5174 14.3311 13.8281 14.3525C14.1389 14.3739 14.7729 14.6695 16.0408 15.2608C17.6243 15.9992 19.7971 16.4243 22 15.3583',
  d3: 'M13.5 9.5L15 8',
  d4: 'M15.5 11L17 9.5',
  d5: 'M21.9246 15.3943C21.9071 15.3365 21.8864 15.278 21.8624 15.2188C20.9807 13.0454 18.5516 11.4923 16.0784 9.91081C14.2104 8.71645 12.3173 7.50597 11.0465 6L11.0453 6.00059C10.3831 6.33413 9.05851 7.00119 10.0507 9C8.56151 9.33333 4.47323 9.4 4.07611 7C3.27884 8.44546 2.12844 11.519 2.00995 14.0034C6.16875 15.43 8.73359 15.8434 12.0217 14.8039C13.0188 14.4887 13.5174 14.3311 13.8281 14.3525C14.1389 14.3739 14.7729 14.6695 16.0408 15.2608C17.6061 15.9908 19.7476 16.4146 21.9246 15.3943Z',
  d6: 'M2 14C2.00332 14.0011 2.00664 14.0023 2.00996 14.0034M2.00996 14.0034C6.16876 15.43 8.7336 15.8434 12.0217 14.8039C13.0188 14.4887 13.5174 14.3311 13.8281 14.3525C14.1389 14.3739 14.7729 14.6695 16.0408 15.2608C17.6062 15.9908 19.7476 16.4146 21.9246 15.3943C22.3947 16.9466 20.5715 18 19.1012 18H7.96299C5.02913 18 3.56221 18 2.66807 16.8828C2.12601 16.2055 1.95435 15.1693 2.00996 14.0034Z',
  d7: 'M14.1816 7.75672L14.4687 7.46967C14.7616 7.17678 15.2365 7.17678 15.5294 7.46967C15.8222 7.76256 15.8222 8.23744 15.5294 8.53033L15.4477 8.61198C15.0129 8.32839 14.5886 8.0448 14.1816 7.75672Z',
  d8: 'M16.2858 9.15255L16.4687 8.96967C16.7616 8.67678 17.2365 8.67678 17.5294 8.96967C17.8066 9.24693 17.8214 9.68727 17.5737 9.98194C17.5125 9.94192 17.4513 9.90207 17.3901 9.86235C17.082 9.66228 16.7742 9.46524 16.469 9.26982C16.408 9.23076 16.3466 9.19149 16.2858 9.15255Z',
  d9: 'M11.6178 5.51635C11.3939 5.25107 11.0172 5.17406 10.7072 5.33019C10.3863 5.49116 9.69534 5.83785 9.29258 6.47372C8.95753 7.00267 8.84961 7.64248 9.02625 8.38925C8.36842 8.44237 7.54965 8.4338 6.79345 8.28851C5.59573 8.0584 4.9298 7.57682 4.81411 6.8776C4.76196 6.56245 4.51591 6.31491 4.20108 6.26086C3.88624 6.2068 3.57172 6.3581 3.41744 6.63781C2.79521 7.76593 1.99382 9.77564 1.56124 11.7848C1.39869 12.5398 1.28418 13.3127 1.25523 14.0514C1.24558 14.2976 1.24544 14.5401 1.25619 14.7767C1.26494 14.9694 1.28108 15.162 1.30614 15.3525C1.40384 16.0956 1.63552 16.7955 2.08058 17.3516C2.68004 18.1006 3.46637 18.4418 4.42644 18.6005C5.33278 18.7502 6.48432 18.7502 7.89521 18.7502L19.0993 18.7502C19.9889 18.7502 20.9791 18.4384 21.7026 17.8686C22.0276 17.5931 22.4074 17.1662 22.5791 16.7445C22.7668 16.2878 22.8166 15.7588 22.6405 15.177L22.64 15.1756C22.616 15.0962 22.5878 15.0166 22.5555 14.937C21.705 12.8404 19.6237 11.3226 17.5724 9.98235C17.5586 9.99882 17.5439 10.0148 17.5284 10.0303L16.0284 11.5303C15.7355 11.8232 15.2606 11.8232 14.9677 11.5303C14.6748 11.2374 14.6748 10.7626 14.9677 10.4697L16.2845 9.15293C16.002 8.97198 15.722 8.79217 15.4464 8.61237L14.0284 10.0303C13.7355 10.3232 13.2606 10.3232 12.9677 10.0303C12.6748 9.73744 12.6748 9.26256 12.9677 8.96967L14.1803 7.75713C13.1925 7.05802 12.3065 6.33248 11.6178 5.51635ZM3.25235 16.4139C3.54702 16.7821 3.94122 16.9995 4.67161 17.1202C5.44168 17.2474 6.4688 17.2498 7.96171 17.2498H19.1C20.0166 17.2498 20.5112 16.9017 20.946 16.5369C18.9715 17.0346 17.1127 16.5887 15.7226 15.9404C15.083 15.6421 14.6223 15.4275 14.2821 15.2836C13.778 15.059 13.4658 15.1189 13.3726 15.177C13.1061 15.2474 12.7525 15.359 12.2465 15.5189C9.02207 16.5383 6.44113 16.2261 2.78126 15.0508C2.81429 15.3904 2.95475 16.1386 3.25235 16.4139Z',
  d10: 'M10.7072 5.33019C11.0172 5.17406 11.3939 5.25107 11.6178 5.51635C12.8088 6.92774 14.5901 8.0682 16.4666 9.26954L16.4666 9.26955L16.467 9.26982C16.7723 9.46524 17.08 9.66228 17.3882 9.86235C19.4979 11.2322 21.6795 12.7776 22.5555 14.937C22.5878 15.0166 22.616 15.0962 22.64 15.1756L22.6405 15.177C22.8166 15.7588 22.7668 16.2878 22.5791 16.7445C22.4074 17.1662 22.0276 17.5931 21.7026 17.8686C20.9791 18.4384 19.9889 18.7502 19.0993 18.7502L7.89521 18.7502C6.48432 18.7502 5.33278 18.7502 4.42644 18.6005C3.46637 18.4418 2.68004 18.1006 2.08058 17.3516C1.63552 16.7955 1.40384 16.0956 1.30614 15.3525C1.28108 15.162 1.26494 14.9694 1.25619 14.7767C1.24544 14.5401 1.24558 14.2976 1.25523 14.0514C1.28418 13.3127 1.39869 12.5398 1.56124 11.7848C1.99382 9.77564 2.79521 7.76593 3.41744 6.63781C3.57172 6.3581 3.88624 6.2068 4.20108 6.26086C4.51591 6.31491 4.76196 6.56245 4.81411 6.8776C4.9298 7.57682 5.59573 8.0584 6.79345 8.28851C7.54965 8.4338 8.36842 8.44237 9.02625 8.38925C8.84961 7.64248 8.95753 7.00267 9.29258 6.47372C9.69534 5.83785 10.3863 5.49116 10.7072 5.33019ZM3.25235 16.4139C3.54702 16.7821 3.94122 16.9995 4.67161 17.1202C5.44168 17.2474 6.4688 17.2498 7.96171 17.2498H19.1C20.0166 17.2498 20.5112 16.9017 20.946 16.5369C18.9715 17.0346 17.1127 16.5887 15.7226 15.9404C15.083 15.6421 14.6223 15.4275 14.2821 15.2836C13.778 15.059 13.4658 15.1189 13.3726 15.177C13.1061 15.2474 12.7525 15.359 12.2465 15.5189C9.02207 16.5383 6.44113 16.2261 2.78126 15.0508C2.81429 15.3904 2.95475 16.1386 3.25235 16.4139Z',
  d11: 'M15.4463 8.61305C15.0115 8.32947 14.5873 8.04588 14.1803 7.75781L12.9677 8.97036C12.6748 9.26325 12.6748 9.73812 12.9677 10.031C13.2606 10.3239 13.7355 10.3239 14.0284 10.031L15.4463 8.61305Z',
  d12: 'M17.5724 9.98304C17.511 9.94288 17.4495 9.90289 17.3882 9.86304C17.08 9.66296 16.7723 9.46593 16.467 9.27051C16.4062 9.23158 16.3451 9.19243 16.2845 9.15361L14.9677 10.4704C14.6748 10.7632 14.6748 11.2381 14.9677 11.531C15.2606 11.8239 15.7355 11.8239 16.0284 11.531L17.5284 10.031C17.5439 10.0155 17.5586 9.99951 17.5724 9.98304Z',
  d13: 'M22 15H2',
  d14: 'M13 10L16 7',
  d15: 'M15 12L18 9',
  d16: 'M11.619 5.51623C11.3951 5.25094 11.0185 5.17394 10.7084 5.33007L10.6748 5.34697C10.3539 5.50794 9.69655 5.83773 9.29379 6.4736C8.95875 7.00255 8.85082 7.64236 9.02746 8.38913C8.36963 8.44224 7.55086 8.43367 6.79466 8.28839C5.59694 8.05828 4.93101 7.57669 4.81532 6.87748C4.76317 6.56233 4.51712 6.31479 4.20229 6.26073C3.88745 6.20668 3.57293 6.35798 3.41865 6.63769C2.79642 7.76581 1.99503 9.77552 1.56245 11.7847C1.38527 12.6076 1.26517 13.4519 1.25073 14.2499H22.2243C21.2925 12.5978 19.5959 11.3204 17.8768 10.1816L15.5282 12.5303L14.4675 11.4696L16.5896 9.34757C16.8549 9.51746 17.1218 9.6887 17.3891 9.86223C17.5514 9.96759 17.7143 10.074 17.8768 10.1816L18.5279 9.53026L17.4672 8.4696L16.5896 9.34757L16.4685 9.26985C16.1237 9.04913 15.782 8.83039 15.4467 8.61171L13.5282 10.5303L12.4675 9.4696L14.1806 7.75655C14.5875 8.0446 15.012 8.32816 15.4467 8.61171L16.5279 7.53026L15.4672 6.4696L14.1806 7.75655C13.1932 7.05762 12.3073 6.33199 11.619 5.51623Z',
  d17: 'M22.7453 15.7499C22.762 16.0342 22.7261 16.3119 22.6409 16.5776C22.4795 17.0808 22.1583 17.4893 21.7857 17.8019C21.054 18.4157 20.021 18.7499 19.1005 18.7499L7.89646 18.7499C6.48557 18.75 5.33398 18.75 4.42764 18.6002C3.46757 18.4416 2.68124 18.1004 2.08178 17.3514C1.7147 16.8927 1.49465 16.3383 1.37383 15.7499H22.7453Z',
};

export const IconRunningShoesStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="running-shoes-stroke-rounded IconRunningShoesStrokeRounded"
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

export const IconRunningShoesDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="running-shoes-duotone-rounded IconRunningShoesDuotoneRounded"
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
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconRunningShoesTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="running-shoes-twotone-rounded IconRunningShoesTwotoneRounded"
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

export const IconRunningShoesSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="running-shoes-solid-rounded IconRunningShoesSolidRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
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

export const IconRunningShoesBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="running-shoes-bulk-rounded IconRunningShoesBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
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
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRunningShoesStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="running-shoes-stroke-sharp IconRunningShoesStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
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
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRunningShoesSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="running-shoes-solid-sharp IconRunningShoesSolidSharp"
    >
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfRunningShoes: TheIconSelfPack = {
  name: 'RunningShoes',
  StrokeRounded: IconRunningShoesStrokeRounded,
  DuotoneRounded: IconRunningShoesDuotoneRounded,
  TwotoneRounded: IconRunningShoesTwotoneRounded,
  SolidRounded: IconRunningShoesSolidRounded,
  BulkRounded: IconRunningShoesBulkRounded,
  StrokeSharp: IconRunningShoesStrokeSharp,
  SolidSharp: IconRunningShoesSolidSharp,
};