import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7.03345 13.6528L9 15.3722V6.50065C9 5.67186 9.67186 5 10.5006 5C11.3289 5 12.0006 5.67107 12.0013 6.49935L12.0045 11.263L14.6409 11.6903C16.3426 11.9492 17.1935 12.0786 17.7928 12.4427C18.7828 13.0441 19.5 14 19.5 15.2657C19.5 16.1841 19.2762 16.8002 18.732 18.4556C18.3867 19.5059 18.2141 20.0311 17.9326 20.4469C17.4691 21.1313 16.7853 21.6311 15.9984 21.8605C15.5204 21.9999 14.9745 21.9999 13.8826 21.9999H12.9571C11.5054 21.9999 10.7796 21.9999 10.1335 21.7298C10.0176 21.6814 9.90436 21.6267 9.79422 21.566C9.18004 21.2278 8.72235 20.6566 7.80698 19.5142L4.8436 15.8158C4.38822 15.2474 4.38518 14.4341 4.8363 13.8622C5.37851 13.175 6.37444 13.08 7.03345 13.6528Z',
  d2: 'M12.438 9.5C13.6677 8.81764 14.5 7.50601 14.5 6C14.5 3.79086 12.7091 2 10.5 2C8.29086 2 6.5 3.79086 6.5 6C6.5 7.50601 7.33229 8.81764 8.562 9.5',
  d3: 'M17.5166 3.99561L19.26 5.43632C19.5151 5.70828 19.5577 5.91336 19.4319 6.21471C19.3863 6.32386 19.3089 6.41604 19.2204 6.49449L17.5166 8.00446M14.5967 5.98052H18.3333',
  d4: 'M14.625 6.02271H19.4995M19.4995 6.02271C19.3604 6.45808 18.9819 6.72198 18.6581 7.01845L17.4704 8.02414M19.4995 6.02271C19.3863 5.57994 18.9738 5.2935 18.6581 4.99417L17.4704 3.97559',
  d5: 'M12.438 9.5C13.6677 8.81764 14.5 7.50601 14.5 6C14.5 3.79086 12.7091 2 10.5 2C8.29086 2 6.5 3.79086 6.5 6C6.5 7.50601 7.33229 8.81764 8.562 9.5M17.5166 3.99561L19.26 5.43632C19.5151 5.70828 19.5577 5.91336 19.4319 6.21471C19.3863 6.32386 19.3089 6.41604 19.2204 6.49449L17.5166 8.00446M14.5967 5.98052H18.3333',
  d6: 'M8.25 6.62565C8.25 5.38265 9.25765 4.375 10.5006 4.375C11.7429 4.375 12.7502 5.38147 12.7513 6.62371L12.7541 10.7497L14.7801 11.0779C15.6086 11.2039 16.267 11.3041 16.7916 11.4196C17.3261 11.5374 17.7805 11.6827 18.1822 11.9267C19.3364 12.6278 20.25 13.8 20.25 15.3907C20.25 16.375 20.0147 17.0875 19.5618 18.4592L19.5618 18.4592C19.2523 19.4015 18.8947 20.4886 18.5536 20.9924C17.993 21.8202 17.1645 22.4267 16.2083 22.7055C15.6259 22.8753 14.9788 22.8752 14.0015 22.8749H14.0015L12.8038 22.8749C11.5006 22.8754 10.6312 22.8757 9.84424 22.5468C9.70356 22.488 9.56609 22.4216 9.43244 22.348C8.68596 21.937 8.1397 21.2547 7.31796 20.2284L4.2583 16.4097C3.58461 15.5689 3.58017 14.3686 4.24748 13.5227C5.0537 12.5008 6.54177 12.3568 7.52546 13.2118L7.5271 13.2132L8.25 13.8452V6.62565Z',
  d7: 'M10.5 3.125C12.1569 3.125 13.5 4.46815 13.5 6.125C13.5 7.25318 12.8777 8.23739 11.9528 8.7506C11.4699 9.01857 11.2956 9.62729 11.5636 10.1102C11.8316 10.5931 12.4403 10.7674 12.9232 10.4994C14.4578 9.64788 15.5 8.00884 15.5 6.125C15.5 3.36358 13.2614 1.125 10.5 1.125C7.73858 1.125 5.5 3.36358 5.5 6.125C5.5 8.00884 6.54224 9.64788 8.07679 10.4994C8.55971 10.7674 9.16843 10.5931 9.4364 10.1102C9.70437 9.62729 9.53012 9.01857 9.0472 8.7506C8.12233 8.23739 7.5 7.25318 7.5 6.125C7.5 4.46815 8.84315 3.125 10.5 3.125Z',
  d8: 'M17.9869 3.55456C17.6719 3.28565 17.1985 3.32305 16.9296 3.6381C16.7768 3.81703 16.7229 4.04702 16.7625 4.26162V5.125H14.5C13.9477 5.125 13.5 5.57272 13.5 6.125C13.5 6.67728 13.9477 7.125 14.5 7.125H16.7625V7.9884C16.7229 8.20301 16.7768 8.433 16.9296 8.61193C17.1985 8.92698 17.6719 8.96438 17.9869 8.69547L19.1908 7.66791C19.4388 7.45628 19.6796 7.25086 19.8521 7.0579C20.0416 6.8459 20.25 6.54052 20.25 6.12502C20.25 5.70951 20.0416 5.40413 19.8521 5.19213C19.6796 4.99917 19.4388 4.79376 19.1908 4.58213L19.1908 4.58212L17.9869 3.55456Z',
  d9: 'M13.5 6.125C13.5 4.46815 12.1569 3.125 10.5 3.125C8.84315 3.125 7.5 4.46815 7.5 6.125C7.5 6.88528 7.78262 7.58017 8.25 8.1096V10.5753C8.19105 10.5558 8.13307 10.5306 8.07679 10.4994C6.54224 9.64788 5.5 8.00884 5.5 6.125C5.5 3.36358 7.73858 1.125 10.5 1.125C13.2614 1.125 15.5 3.36358 15.5 6.125C15.5 8.00884 14.4578 9.64788 12.9232 10.4994C12.8682 10.5299 12.8116 10.5547 12.754 10.574L12.7523 8.10699C13.2183 7.57789 13.5 6.88403 13.5 6.125Z',
  d10: 'M6.53995 13.6909L8.50548 15.4103V6.53874C8.50548 5.70995 9.17699 5.03809 10.0053 5.03809C10.8332 5.03809 11.5045 5.70916 11.5052 6.53744L11.5084 12.0381H15.5019C16.8818 12.0381 18.0006 13.1574 18.0006 14.5381V19.538C18.0006 20.9187 16.8818 22.038 15.5019 22.038H9.00522L4.35123 15.8539C3.89609 15.2855 3.89305 14.4722 4.34394 13.9003C4.88587 13.2131 5.88128 13.1181 6.53995 13.6909Z',
  d11: 'M11.9418 9.53809C13.1708 8.85573 14.0027 7.5441 14.0027 6.03809C14.0027 3.82895 12.2127 2.03809 10.0048 2.03809C7.79677 2.03809 6.00684 3.82895 6.00684 6.03809C6.00684 7.5441 6.83869 8.85573 8.06777 9.53809',
  d12: 'M13.9668 6.04871H19.8178M17.0056 3.04297L20.0118 6.02734L17.0199 9.03213',
  d13: 'M7.75 6.50065C7.75 5.25765 8.75765 4.25 10.0006 4.25C11.2429 4.25 12.2502 5.25647 12.2513 6.49871L12.2541 11.25H15.5C17.2949 11.25 18.75 12.7051 18.75 14.5V19.4999C18.75 21.2948 17.2949 22.7499 15.5 22.7499H8.62589L3.75058 16.275C3.08458 15.4347 3.08273 14.2403 3.74748 13.3977C4.5537 12.3758 6.04177 12.2318 7.02546 13.0868L7.0271 13.0882L7.75 13.7202V6.50065Z',
  d14: 'M17.2197 2.46973L16.159 3.53039L17.8787 5.25006H13.6893V6.75006H17.8787L16.159 8.46973L17.2197 9.53039L20.75 6.00006L17.2197 2.46973Z',
  d15: 'M10 2.75C8.20507 2.75 6.75 4.20507 6.75 6C6.75 7.22264 7.42482 8.2887 8.4259 8.8442C8.78809 9.04518 8.91878 9.50171 8.7178 9.8639C8.51682 10.2261 8.06028 10.3568 7.69809 10.1558C6.23975 9.34657 5.25 7.78939 5.25 6C5.25 3.37665 7.37665 1.25 10 1.25C12.6234 1.25 14.75 3.37665 14.75 6C14.75 7.78939 13.7602 9.34657 12.3019 10.1558C11.9397 10.3568 11.4832 10.2261 11.2822 9.8639C11.0812 9.50171 11.2119 9.04518 11.5741 8.8442C12.5752 8.2887 13.25 7.22264 13.25 6C13.25 4.20507 11.7949 2.75 10 2.75Z',
};

export const IconDragRight02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="drag-right-02-stroke-rounded IconDragRight02StrokeRounded"
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

export const IconDragRight02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="drag-right-02-duotone-rounded IconDragRight02DuotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconDragRight02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="drag-right-02-twotone-rounded IconDragRight02TwotoneRounded"
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
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDragRight02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="drag-right-02-solid-rounded IconDragRight02SolidRounded"
    >
      <path 
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
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDragRight02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="drag-right-02-bulk-rounded IconDragRight02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDragRight02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="drag-right-02-stroke-sharp IconDragRight02StrokeSharp"
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
        strokeLinecap="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconDragRight02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="drag-right-02-solid-sharp IconDragRight02SolidSharp"
    >
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfDragRight02: TheIconSelfPack = {
  name: 'DragRight02',
  StrokeRounded: IconDragRight02StrokeRounded,
  DuotoneRounded: IconDragRight02DuotoneRounded,
  TwotoneRounded: IconDragRight02TwotoneRounded,
  SolidRounded: IconDragRight02SolidRounded,
  BulkRounded: IconDragRight02BulkRounded,
  StrokeSharp: IconDragRight02StrokeSharp,
  SolidSharp: IconDragRight02SolidSharp,
};