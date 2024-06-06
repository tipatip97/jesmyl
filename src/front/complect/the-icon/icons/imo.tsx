import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17L2 22L7 20.6622C8.47087 21.513 10.1786 22 12 22Z',
  d2: 'M7.00859 9L7 9M7.00112 11V15M8.91304 15V12.25C8.91304 11.5596 9.44836 11 10.1087 11C10.769 11 11.3043 11.5596 11.3043 12.25M11.3043 12.25V15M11.3043 12.25C11.3043 11.5596 11.8397 11 12.5 11C13.1603 11 13.6957 11.5596 13.6957 12.25V15M15.6087 12.25V13.75C15.6087 14.4404 16.144 15 16.8043 15C17.4647 15 18 14.4404 18 13.75V12.25C18 11.5596 17.4647 11 16.8043 11C16.144 11 15.6087 11.5596 15.6087 12.25Z',
  d3: 'M12 1.25C6.06296 1.25 1.25002 6.06294 1.25002 12C1.25002 13.8443 1.71505 15.5819 2.53467 17.1001L1.2755 21.8061C1.20627 22.0649 1.28029 22.3409 1.46969 22.5303C1.65909 22.7197 1.93512 22.7937 2.19387 22.7245L6.8999 21.4653C8.41808 22.285 10.1558 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM6 8.25C5.58579 8.25 5.25 8.58579 5.25 9C5.25 9.41421 5.58579 9.75 6 9.75H6.00937C6.42359 9.75 6.75937 9.41421 6.75937 9C6.75937 8.58579 6.42359 8.25 6.00937 8.25H6ZM6.75122 11C6.75122 10.5858 6.41543 10.25 6.00122 10.25C5.58701 10.25 5.25122 10.5858 5.25122 11V15C5.25122 15.4142 5.58701 15.75 6.00122 15.75C6.41543 15.75 6.75122 15.4142 6.75122 15V11ZM8.83696 12.25C8.83696 12.0036 9.05474 11.75 9.3913 11.75C9.72787 11.75 9.94565 12.0036 9.94565 12.25V15C9.94565 15.4142 10.2814 15.75 10.6957 15.75C11.1099 15.75 11.4457 15.4142 11.4457 15V12.25C11.4457 12.0036 11.6634 11.75 12 11.75C12.3366 11.75 12.5543 12.0036 12.5543 12.25V15C12.5543 15.4142 12.8901 15.75 13.3043 15.75C13.7186 15.75 14.0543 15.4142 14.0543 15V12.25C14.0543 11.1157 13.1042 10.25 12 10.25C11.5123 10.25 11.0547 10.4189 10.6957 10.7052C10.3366 10.4189 9.879 10.25 9.3913 10.25C8.28712 10.25 7.33696 11.1157 7.33696 12.25V15C7.33696 15.4142 7.67274 15.75 8.08696 15.75C8.50117 15.75 8.83696 15.4142 8.83696 15V12.25ZM16.1413 12.25C16.1413 12.0036 16.3591 11.75 16.6957 11.75C17.0322 11.75 17.25 12.0036 17.25 12.25V13.75C17.25 13.9964 17.0322 14.25 16.6957 14.25C16.3591 14.25 16.1413 13.9964 16.1413 13.75V12.25ZM16.6957 10.25C15.5915 10.25 14.6413 11.1157 14.6413 12.25V13.75C14.6413 14.8843 15.5915 15.75 16.6957 15.75C17.7998 15.75 18.75 14.8843 18.75 13.75V12.25C18.75 11.1157 17.7998 10.25 16.6957 10.25Z',
  d4: 'M1.25002 12C1.25002 6.06294 6.06296 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C10.1558 22.75 8.41808 22.285 6.8999 21.4653L2.19387 22.7245C1.93512 22.7937 1.65909 22.7197 1.46969 22.5303C1.28029 22.3409 1.20627 22.0649 1.2755 21.8061L2.53467 17.1001C1.71505 15.5819 1.25002 13.8443 1.25002 12Z',
  d5: 'M5.25 9C5.25 8.58579 5.58579 8.25 6 8.25H6.00937C6.42359 8.25 6.75937 8.58579 6.75937 9C6.75937 9.41421 6.42359 9.75 6.00937 9.75H6C5.58579 9.75 5.25 9.41421 5.25 9ZM6.00122 10.25C6.41543 10.25 6.75122 10.5858 6.75122 11V15C6.75122 15.4142 6.41543 15.75 6.00122 15.75C5.58701 15.75 5.25122 15.4142 5.25122 15V11C5.25122 10.5858 5.58701 10.25 6.00122 10.25ZM9.3913 11.75C9.05474 11.75 8.83696 12.0036 8.83696 12.25V15C8.83696 15.4142 8.50117 15.75 8.08696 15.75C7.67274 15.75 7.33696 15.4142 7.33696 15V12.25C7.33696 11.1157 8.28712 10.25 9.3913 10.25C9.879 10.25 10.3366 10.4189 10.6957 10.7052C11.0547 10.4189 11.5123 10.25 12 10.25C13.1042 10.25 14.0543 11.1157 14.0543 12.25V15C14.0543 15.4142 13.7186 15.75 13.3043 15.75C12.8901 15.75 12.5543 15.4142 12.5543 15V12.25C12.5543 12.0036 12.3366 11.75 12 11.75C11.6634 11.75 11.4457 12.0036 11.4457 12.25V15C11.4457 15.4142 11.1099 15.75 10.6957 15.75C10.2814 15.75 9.94565 15.4142 9.94565 15V12.25C9.94565 12.0036 9.72787 11.75 9.3913 11.75ZM16.6957 11.75C16.3591 11.75 16.1413 12.0036 16.1413 12.25V13.75C16.1413 13.9964 16.3591 14.25 16.6957 14.25C17.0322 14.25 17.25 13.9964 17.25 13.75V12.25C17.25 12.0036 17.0322 11.75 16.6957 11.75ZM14.6413 12.25C14.6413 11.1157 15.5915 10.25 16.6957 10.25C17.7998 10.25 18.75 11.1157 18.75 12.25V13.75C18.75 14.8843 17.7998 15.75 16.6957 15.75C15.5915 15.75 14.6413 14.8843 14.6413 13.75V12.25Z',
  d6: 'M6.49583 8.97656L6.49595 9.02217M6.47801 10.9759L6.49595 14.9889',
  d7: 'M8.90806 15.0062L8.89012 10.9932H13.6975C13.7031 10.9932 13.7075 10.9976 13.7075 11.0031L13.7254 15.0062M11.2988 10.9932L11.3168 15.0062',
  d8: 'M16.1172 11.0032C16.1172 10.9976 16.1216 10.9932 16.1272 10.9932H18.4914C18.497 10.9932 18.5014 10.9976 18.5014 11.0032V14.9959C18.5014 15.0014 18.497 15.0059 18.4914 15.0059H16.1272C16.1216 15.0059 16.1172 15.0014 16.1172 14.9959V11.0032Z',
  d9: 'M12 22.002C17.5239 22.002 22.002 17.5239 22.002 12C22.002 6.47607 17.5239 1.99805 12 1.99805C6.47605 1.99805 1.99803 6.47607 1.99803 12C1.99803 13.8889 2.432 15.4979 3.34202 17.005L2.00254 21.9852C2.00054 21.9926 2.00735 21.9995 2.0148 21.9974L6.97042 20.666C8.48342 21.5862 10.0997 22.002 12 22.002Z',
  d10: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 13.8443 1.71503 15.5819 2.53465 17.1001L1.27549 21.8061C1.20626 22.0649 1.28027 22.3409 1.46967 22.5303C1.65907 22.7197 1.9351 22.7937 2.19386 22.7245L6.89988 21.4653C8.41806 22.285 10.1557 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM6.75662 8.25H5.24803L5.24803 9.75H6.75662V8.25ZM6.74915 15.75V10.25H5.24915V15.75H6.74915ZM13.9457 10.25H7.66305V15.75H9.16305V11.75H10.0544V15.75H11.5544V11.75H12.4457V15.75H13.9457V10.25ZM18.75 10.25H14.8587V15.75H18.75V10.25ZM16.3587 14.25V11.75H17.25V14.25H16.3587Z',
} as const;

export const IconImoStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="imo-stroke-rounded IconImoStrokeRounded"
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

export const IconImoDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="imo-duotone-rounded IconImoDuotoneRounded"
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

export const IconImoTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="imo-twotone-rounded IconImoTwotoneRounded"
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

export const IconImoSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="imo-solid-rounded IconImoSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconImoBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="imo-bulk-rounded IconImoBulkRounded"
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

export const IconImoStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="imo-stroke-sharp IconImoStrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconImoSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="imo-solid-sharp IconImoSolidSharp"
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

export const iconPackOfImo: TheIconSelfPack = {
  name: 'Imo',
  StrokeRounded: IconImoStrokeRounded,
  DuotoneRounded: IconImoDuotoneRounded,
  TwotoneRounded: IconImoTwotoneRounded,
  SolidRounded: IconImoSolidRounded,
  BulkRounded: IconImoBulkRounded,
  StrokeSharp: IconImoStrokeSharp,
  SolidSharp: IconImoSolidSharp,
};