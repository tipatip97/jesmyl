import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M4 18.6458V8.05426C4 5.20025 4 3.77325 4.87868 2.88663C5.75736 2 7.17157 2 10 2H14C16.8284 2 18.2426 2 19.1213 2.88663C20 3.77325 20 5.20025 20 8.05426V18.6458C20 20.1575 20 20.9133 19.538 21.2108C18.7831 21.6971 17.6161 20.6774 17.0291 20.3073C16.5441 20.0014 16.3017 19.8485 16.0325 19.8397C15.7417 19.8301 15.4949 19.9768 14.9709 20.3073L13.06 21.5124C12.5445 21.8374 12.2868 22 12 22C11.7132 22 11.4555 21.8374 10.94 21.5124L9.02913 20.3073C8.54415 20.0014 8.30166 19.8485 8.03253 19.8397C7.74172 19.8301 7.49493 19.9768 6.97087 20.3073C6.38395 20.6774 5.21687 21.6971 4.46195 21.2108C4 20.9133 4 20.1575 4 18.6458Z',
  d2: 'M11 11H8',
  d3: 'M14 7L8 7',
  d4: 'M14.0553 1.25H9.9447H9.94469C8.57748 1.24998 7.47477 1.24996 6.60736 1.36764C5.70602 1.48992 4.94761 1.75161 4.34597 2.35869C3.74526 2.96484 3.48716 3.72735 3.36641 4.63362C3.24997 5.50753 3.24998 6.61904 3.25 7.99973V7.99974L3.25 18.7008C3.24996 19.4095 3.24992 20.0198 3.3149 20.4869C3.38152 20.9658 3.54247 21.5107 4.05584 21.8414C4.81435 22.3299 5.655 21.9917 6.12709 21.7447C6.39744 21.6033 7.16019 21.0865 7.37095 20.9417C7.64376 20.7696 7.7948 20.678 7.9079 20.6249C7.9296 20.6016 8.0012 20.5706 8.11404 20.6327C8.22825 20.6899 8.37416 20.7809 8.62906 20.9417L10.5667 22.1636C10.8013 22.3116 11.0235 22.4518 11.2239 22.5507C11.4476 22.6611 11.7007 22.75 12 22.75C12.2993 22.75 12.5524 22.6611 12.7761 22.5507C12.9764 22.4518 13.1986 22.3117 13.4331 22.1638L13.4332 22.1637L13.4333 22.1636L15.371 20.9417C15.6438 20.7696 15.7948 20.678 15.9079 20.6249C15.933 20.6036 16.0093 20.5753 16.114 20.6327C16.1851 20.6683 16.4654 20.8523 16.7285 21.0249C16.8882 21.1297 17.0415 21.2303 17.1378 21.2911C17.3485 21.4359 17.6026 21.6033 17.8729 21.7447C18.345 21.9917 19.1857 22.3299 19.9442 21.8414C20.4575 21.5107 20.6185 20.9658 20.6851 20.4869C20.7501 20.0198 20.75 19.4095 20.75 18.7008L20.75 7.99978C20.75 6.61907 20.75 5.50754 20.6336 4.63362C20.5128 3.72735 20.2547 2.96484 19.654 2.35869C19.0524 1.75161 18.294 1.48992 17.3926 1.36764C16.5252 1.24996 15.4225 1.24998 14.0553 1.25H14.0553ZM12 11C12 11.5523 11.5523 12 11 12H8C7.44772 12 7 11.5523 7 11C7 10.4477 7.44772 10 8 10H11C11.5523 10 12 10.4477 12 11ZM14 8C14.5523 8 15 7.55228 15 7C15 6.44772 14.5523 6 14 6H8C7.44772 6 7 6.44772 7 7C7 7.55228 7.44772 8 8 8H14Z',
  d5: 'M14.0553 1.25H9.9447H9.94469C8.57748 1.24998 7.47477 1.24996 6.60736 1.36764C5.70602 1.48992 4.94761 1.75161 4.34597 2.35869C3.74526 2.96484 3.48716 3.72735 3.36641 4.63362C3.24997 5.50753 3.24998 6.61904 3.25 7.99973V7.99974L3.25 18.7008C3.24996 19.4095 3.24992 20.0198 3.3149 20.4869C3.38152 20.9658 3.54247 21.5107 4.05584 21.8414C4.81435 22.3299 5.655 21.9917 6.12709 21.7447C6.39744 21.6033 7.16019 21.0865 7.37095 20.9417C7.64376 20.7696 7.7948 20.678 7.9079 20.6249C7.9296 20.6016 8.0012 20.5706 8.11404 20.6327C8.22825 20.6899 8.37416 20.7809 8.62906 20.9417L10.5667 22.1636C10.8013 22.3116 11.0235 22.4518 11.2239 22.5507C11.4476 22.6611 11.7007 22.75 12 22.75C12.2993 22.75 12.5524 22.6611 12.7761 22.5507C12.9765 22.4518 13.1986 22.3117 13.4332 22.1637L13.4333 22.1636L15.371 20.9417C15.6438 20.7696 15.7948 20.678 15.9079 20.6249C15.933 20.6036 16.0093 20.5753 16.114 20.6327C16.2283 20.6899 16.8829 21.1303 17.1378 21.2911C17.3485 21.4359 17.6026 21.6033 17.8729 21.7447C18.345 21.9917 19.1857 22.3299 19.9442 21.8414C20.4575 21.5107 20.6185 20.9658 20.6851 20.4869C20.7501 20.0198 20.75 19.4095 20.75 18.7008L20.75 7.99978C20.75 6.61907 20.75 5.50754 20.6336 4.63362C20.5128 3.72735 20.2547 2.96484 19.654 2.35869C19.0524 1.75161 18.294 1.48992 17.3926 1.36764C16.5252 1.24996 15.4225 1.24998 14.0553 1.25H14.0553Z',
  d6: 'M12 11C12 11.5523 11.5523 12 11 12H8C7.44772 12 7 11.5523 7 11C7 10.4477 7.44772 10 8 10H11C11.5523 10 12 10.4477 12 11Z',
  d7: 'M15 7C15 7.55228 14.5523 8 14 8H8C7.44772 8 7 7.55228 7 7C7 6.44772 7.44772 6 8 6L14 6C14.5523 6 15 6.44772 15 7Z',
  d8: 'M12.0517 11H8.07617',
  d9: 'M15.0334 7H8.07617',
  d10: 'M20.5391 21.3338V2.10007C20.5391 2.0448 20.4943 2 20.4391 2H3.63712C3.58189 2 3.53711 2.0448 3.53711 2.10007V21.367C3.53711 21.4418 3.61616 21.4902 3.68271 21.4561L7.51081 19.4946L11.9948 21.9874C12.0249 22.0041 12.0615 22.0042 12.0917 21.9875L16.6058 19.4946L20.3937 21.423C20.4602 21.4569 20.5391 21.4085 20.5391 21.3338Z',
  d11: 'M2.9677 1.45748C3.10835 1.31682 3.29913 1.23779 3.49805 1.23779H20.498C20.9123 1.23779 21.248 1.57358 21.248 1.98779V21.5001C21.248 21.7604 21.1131 22.002 20.8916 22.1386C20.67 22.2751 20.3935 22.2871 20.161 22.1701L16.5154 20.3361L12.3623 22.6434C12.1358 22.7693 11.8603 22.7693 11.6338 22.6434L7.48072 20.3361L3.83658 22.1701C3.6041 22.2871 3.32757 22.2752 3.10599 22.1386C2.8844 22.0021 2.74945 21.7604 2.74943 21.5002L2.74805 1.98785C2.74803 1.78892 2.82704 1.59815 2.9677 1.45748ZM7.99805 10.25H11.998V11.75H7.99805V10.25ZM14.998 6.25H7.99805V7.75H14.998V6.25Z',
};

export const IconInvoice01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="invoice-01-stroke-rounded IconInvoice01StrokeRounded"
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

export const IconInvoice01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="invoice-01-duotone-rounded IconInvoice01DuotoneRounded"
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

export const IconInvoice01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="invoice-01-twotone-rounded IconInvoice01TwotoneRounded"
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

export const IconInvoice01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="invoice-01-solid-rounded IconInvoice01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconInvoice01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="invoice-01-bulk-rounded IconInvoice01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconInvoice01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="invoice-01-stroke-sharp IconInvoice01StrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconInvoice01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="invoice-01-solid-sharp IconInvoice01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfInvoice01: TheIconSelfPack = {
  name: 'Invoice01',
  StrokeRounded: IconInvoice01StrokeRounded,
  DuotoneRounded: IconInvoice01DuotoneRounded,
  TwotoneRounded: IconInvoice01TwotoneRounded,
  SolidRounded: IconInvoice01SolidRounded,
  BulkRounded: IconInvoice01BulkRounded,
  StrokeSharp: IconInvoice01StrokeSharp,
  SolidSharp: IconInvoice01SolidSharp,
};