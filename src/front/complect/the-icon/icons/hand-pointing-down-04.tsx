import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M10.7551 13.485V19.9954C10.7551 20.8264 10.0828 21.5 9.25337 21.5C8.42397 21.5 7.7516 20.8264 7.7516 19.9954V9.96807M10.7551 16.4892L11.8095 16.4624C12.8939 16.4347 13.7587 15.5461 13.7587 14.4593V13.4552M13.4774 15.4844L14.8131 15.4297C15.8975 15.4021 16.7622 14.5134 16.7622 13.4266V12.4226M16.4764 14.4593L18.0168 14.27C19.0161 14.135 19.7588 13.2759 19.7495 12.2657L19.7015 7.06579C19.7015 4.88227 17.5884 2.5 15.3223 2.5H10.4416C9.24932 2.5 7.83196 3.28085 6.60714 5.34841L4.99227 7.78577C4.41202 8.54219 3.58569 9.90362 5.15816 11.7712L7.7516 14.531',
  d2: 'M19.75 12.3057V12.3077C19.7491 13.2845 19.0425 14.1179 18.0788 14.2785L16.75 14.5V13.5C16.75 14.6046 15.8546 15.5 14.75 15.5H13.75V14.5C13.75 15.6046 12.8546 16.5 11.75 16.5H10.75V20C10.75 20.8284 10.0784 21.5 9.25 21.5C8.42157 21.5 7.75 20.8284 7.75 20V14.5L6.2843 13.1253C5.07555 11.79 4.47118 11.1224 4.30904 10.3244C4.25813 10.0738 4.24003 9.81789 4.25519 9.56279C4.30345 8.75046 4.80807 8.00724 5.81729 6.5208L6.3809 5.69069C7.01844 4.75168 7.33722 4.28217 7.72767 3.91042C8.41108 3.25974 9.26656 2.81019 10.197 2.61279C10.7286 2.5 11.3033 2.5 12.4527 2.5C14.5057 2.5 15.5323 2.5 16.3566 2.78643C17.8056 3.28992 18.9455 4.40918 19.4583 5.832C19.75 6.64141 19.75 7.64936 19.75 9.66527V11.5V12.3057Z',
  d3: 'M10.7517 13.485V19.9954C10.7517 20.8264 10.0794 21.5 9.24995 21.5C8.42055 21.5 7.74818 20.8264 7.74818 19.9954V9.96807M10.7517 16.4892L11.8061 16.4624C12.8905 16.4347 13.7553 15.5461 13.7553 14.4593V13.4552M7.74818 14.531L5.15474 11.7712C3.58227 9.90362 4.4086 8.54219 4.98885 7.78577L6.60372 5.34841C7.82854 3.28085 9.2459 2.5 10.4382 2.5L13.2354 2.5L16.002 2.71037',
  d4: 'M10.7585 13.485V19.9954C10.7585 20.8264 10.0862 21.5 9.25679 21.5C8.42739 21.5 7.75502 20.8264 7.75502 19.9954V9.96807M10.7585 16.4892L11.8129 16.4624C12.8973 16.4347 13.7621 15.5461 13.7621 14.4593V13.4552M13.4808 15.4844L14.8165 15.4297C15.9009 15.4021 16.7656 14.5134 16.7656 13.4266V12.4226M16.4798 14.4593L18.0202 14.27C19.0195 14.135 19.7622 13.2759 19.7529 12.2657L19.7049 7.06579C19.7049 4.88227 17.5918 2.5 15.3257 2.5H10.445C9.25274 2.5 7.83538 3.28085 6.61056 5.34841L4.99569 7.78577C4.41544 8.54219 3.58911 9.90362 5.16158 11.7712L7.75502 14.531',
  d5: 'M6.66968 13.1883C6.66968 13.7285 6.66968 13.9986 6.51751 14.0847C6.49805 14.0957 6.47741 14.1046 6.45598 14.111C6.2885 14.1613 6.09343 13.9745 5.70329 13.6009C5.12016 12.9568 4.64652 12.4336 4.30239 11.9709C3.94502 11.4904 3.68545 11.0219 3.57406 10.4737C3.5102 10.1594 3.48749 9.8383 3.50651 9.51822C3.53969 8.9597 3.73104 8.45994 4.01761 7.93509C4.29344 7.42991 4.689 6.84733 5.17578 6.13039L5.81233 5.19283C6.40022 4.32677 6.76124 3.79491 7.21051 3.36717C7.99531 2.61995 8.97624 2.10502 10.0414 1.87904C10.6507 1.74975 11.565 1.7498 12.6268 1.7499C14.513 1.74961 15.6574 1.74943 16.6027 2.0779C18.2621 2.65446 19.5731 3.93834 20.1639 5.57764C20.5005 6.51183 20.5003 7.64211 20.5 9.48804L20.5 11.4999C20.5 11.7654 20.4803 12.4165 20.4705 12.7089C20.4705 13.7115 19.636 14.6898 18.5021 14.9508C18.2562 15.0073 18.1333 15.0356 18.0201 14.9455C17.907 14.8555 17.907 14.7097 17.907 14.4183V12.5616C17.907 12.329 17.7135 12.1404 17.4748 12.1404C17.2361 12.1404 17.0426 12.329 17.0426 12.5616V14.9976C17.0426 15.1068 17.0426 15.1615 17.0206 15.2156C16.9987 15.2698 16.966 15.3036 16.9004 15.3713C16.4823 15.803 15.8807 16.1152 15.0483 16.2155C14.7836 16.2474 14.6513 16.2633 14.5503 16.1738C14.4493 16.0842 14.4493 15.9395 14.4493 15.6499V13.6849C14.4493 13.4522 14.2558 13.2636 14.0171 13.2636C13.7784 13.2636 13.5849 13.4522 13.5849 13.6849V16.2803C13.5849 16.4162 13.5849 16.4841 13.5526 16.548C13.5203 16.6119 13.4726 16.647 13.3771 16.7172C12.9215 17.0521 12.3588 17.2499 11.75 17.2499C11.6676 17.2495 11.519 17.2397 11.3596 17.2105C11.2071 17.1827 11.1309 17.1687 11.0613 17.0853C10.9917 17.0018 10.9917 16.9069 10.9917 16.7172V13.6849C10.9917 13.4522 10.7982 13.2636 10.5595 13.2636C10.3208 13.2636 10.1273 13.4522 10.1273 13.6849V20.9534C10.1273 21.6695 9.5468 22.25 8.8307 22.25C8.1146 22.25 7.53409 21.6695 7.53409 20.9534V9.75338C7.53409 9.52073 7.34058 9.33214 7.10188 9.33214C6.86319 9.33214 6.66968 9.52073 6.66968 9.75338V13.1883Z',
  d6: 'M13.7942 11.495V13.3983C13.7942 13.572 13.7664 13.8531 13.7135 14.008M13.7135 14.008C13.5165 14.5852 13.0284 15.0007 12.4033 15.0007H10.6931M13.7135 14.008H15.4966C16.1216 14.008 16.6143 13.5764 16.8114 12.9992M16.894 10.8103V12.3763C16.894 12.5499 16.8643 12.8443 16.8114 12.9992M16.8114 12.9992H18.5247C19.5132 12.9132 19.9963 12.2241 19.9963 11.4168V4.97708C19.9963 3.33561 18.6926 2.1175 17.1253 2.00488H8.09921L4.50316 7.5532C3.16171 9.82604 4.61069 11.3025 7.44966 13.8653M10.6931 15.0007V12.0094M10.6931 15.0007V20.2552C10.6931 20.5275 10.6602 20.7735 10.5927 20.9985C10.2971 21.9834 8.99502 22.3109 8.19243 21.6685C7.85184 21.3959 7.60985 21.0432 7.60985 20.6579V9.49368',
  d7: 'M8.75311 22.75C7.98402 22.75 7.38241 22.1649 7.38241 21.4689V9.21502H6.58175V13.3614L5.53391 12.4198C4.82023 11.676 4.30403 11.1369 3.93961 10.6746C3.57783 10.2157 3.38977 9.86133 3.31119 9.49642C3.25841 9.25133 3.23967 9.00114 3.25537 8.75184C3.30421 7.97636 3.74191 7.21661 4.94853 5.53983L4.95734 5.52759L7.79056 1.25H17.6083C19.3555 1.25 20.75 2.58326 20.75 4.20207V11.443C20.75 12.1505 20.1611 12.7241 19.4346 12.7241H18.0017L18.0086 10.6696H17.2079V12.557C17.2079 12.7074 17.1815 12.851 17.1332 12.9841C16.9524 13.4822 16.4647 13.8381 15.8926 13.8381H14.4597L14.4665 11.443H13.6659V13.671C13.6659 13.8214 13.6394 13.965 13.5911 14.098C13.4104 14.5961 12.9226 14.9521 12.3505 14.9521H10.9245V12H10.1238V21.4689C10.1238 22.1649 9.52221 22.75 8.75311 22.75Z',
};

export const IconHandPointingDown04StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-pointing-down-04-stroke-rounded IconHandPointingDown04StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHandPointingDown04DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-pointing-down-04-duotone-rounded IconHandPointingDown04DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHandPointingDown04TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-pointing-down-04-twotone-rounded IconHandPointingDown04TwotoneRounded"
    >
      <path 
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

export const IconHandPointingDown04SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-pointing-down-04-solid-rounded IconHandPointingDown04SolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHandPointingDown04BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-pointing-down-04-bulk-rounded IconHandPointingDown04BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHandPointingDown04StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-pointing-down-04-stroke-sharp IconHandPointingDown04StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconHandPointingDown04SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-pointing-down-04-solid-sharp IconHandPointingDown04SolidSharp"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfHandPointingDown04: TheIconSelfPack = {
  name: 'HandPointingDown04',
  StrokeRounded: IconHandPointingDown04StrokeRounded,
  DuotoneRounded: IconHandPointingDown04DuotoneRounded,
  TwotoneRounded: IconHandPointingDown04TwotoneRounded,
  SolidRounded: IconHandPointingDown04SolidRounded,
  BulkRounded: IconHandPointingDown04BulkRounded,
  StrokeSharp: IconHandPointingDown04StrokeSharp,
  SolidSharp: IconHandPointingDown04SolidSharp,
};