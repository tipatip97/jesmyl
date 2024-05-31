import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M22 14V10C22 6.22876 22 4.34315 20.8284 3.17157C19.6569 2 17.7712 2 14 2H12C8.22876 2 6.34315 2 5.17157 3.17157C4 4.34315 4 6.22876 4 10V14C4 17.7712 4 19.6569 5.17157 20.8284C6.34315 22 8.22876 22 12 22H14C17.7712 22 19.6569 22 20.8284 20.8284C22 19.6569 22 17.7712 22 14Z',
  d2: 'M11.7857 10H15.2143C16.2918 10 16.8305 10 17.1653 9.70711C17.5 9.41421 17.5 8.94281 17.5 8C17.5 7.05719 17.5 6.58579 17.1653 6.29289C16.8305 6 16.2918 6 15.2143 6H11.7857C10.7082 6 10.1695 6 9.83474 6.29289C9.5 6.58579 9.5 7.05719 9.5 8C9.5 8.94281 9.5 9.41421 9.83474 9.70711C10.1695 10 10.7082 10 11.7857 10Z',
  d3: 'M5 6L2 6M5 12H2M5 18H2',
  d4: 'M22 10V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H12C8.22876 22 6.34315 22 5.17157 20.8284C4 19.6569 4 17.7712 4 14V10C4 6.22876 4 4.34315 5.17157 3.17157C6.34315 2 8.22876 2 12 2H14C17.7712 2 19.6569 2 20.8284 3.17157C22 4.34315 22 6.22876 22 10ZM15.2143 10H11.7857C10.7082 10 10.1695 10 9.83473 9.70711C9.5 9.41421 9.5 8.94281 9.5 8C9.5 7.05719 9.5 6.58579 9.83473 6.29289C10.1695 6 10.7082 6 11.7857 6H15.2143C16.2918 6 16.8305 6 17.1653 6.29289C17.5 6.58579 17.5 7.05719 17.5 8C17.5 8.94281 17.5 9.41421 17.1653 9.70711C16.8305 10 16.2918 10 15.2143 10Z',
  d5: 'M14.0564 1.25H14.0564H14.0564H11.9436H11.9436H11.9436C10.1058 1.24998 8.65019 1.24997 7.51098 1.40314C6.33856 1.56076 5.38961 1.89288 4.64124 2.64124C3.89288 3.38961 3.56076 4.33856 3.40314 5.51098C3.24997 6.65019 3.24998 8.10581 3.25 9.94356V9.94357V9.94358V14.0564V14.0564V14.0564C3.24998 15.8942 3.24997 17.3498 3.40314 18.489C3.56076 19.6614 3.89288 20.6104 4.64124 21.3588C5.38961 22.1071 6.33856 22.4392 7.51098 22.5969C8.65018 22.75 10.1058 22.75 11.9435 22.75H11.9436H14.0564H14.0565C15.8942 22.75 17.3498 22.75 18.489 22.5969C19.6614 22.4392 20.6104 22.1071 21.3588 21.3588C22.1071 20.6104 22.4392 19.6614 22.5969 18.489C22.75 17.3498 22.75 15.8942 22.75 14.0565V14.0564V9.94359V9.94354C22.75 8.1058 22.75 6.65018 22.5969 5.51098C22.4392 4.33856 22.1071 3.38961 21.3588 2.64124C20.6104 1.89288 19.6614 1.56076 18.489 1.40314C17.3498 1.24997 15.8942 1.24998 14.0564 1.25ZM11.2857 5.25L11.2436 5.25H11.2436H11.2436C10.7409 5.24997 10.2995 5.24994 9.94407 5.29175C9.56635 5.33619 9.17267 5.43814 8.84087 5.72846C8.49466 6.0314 8.35823 6.41347 8.30055 6.78883C8.24987 7.11872 8.24993 7.52204 8.25001 7.95108L8.25001 8L8.25001 8.04892C8.24993 8.47797 8.24987 8.88129 8.30055 9.21118C8.35823 9.58653 8.49466 9.96861 8.84087 10.2715C9.17267 10.5619 9.56635 10.6638 9.94407 10.7083C10.2995 10.7501 10.741 10.75 11.2436 10.75L11.2857 10.75L14.7564 10.75C15.2591 10.75 15.7005 10.7501 16.0559 10.7083C16.4337 10.6638 16.8274 10.5619 17.1592 10.2715C17.5054 9.96861 17.6418 9.58653 17.6995 9.21118C17.7502 8.8813 17.7501 8.47799 17.75 8.04895V8.04894L17.75 8L17.75 7.95107V7.95105C17.7501 7.52202 17.7502 7.11871 17.6995 6.78883C17.6418 6.41347 17.5054 6.0314 17.1592 5.72846C16.8274 5.43814 16.4337 5.33619 16.0559 5.29175C15.7006 5.24994 15.2591 5.24997 14.7564 5.25H14.7564L11.2857 5.25Z',
  d6: 'M1.25 6C1.25 5.44772 1.69772 5 2.25 5L5.25 5C5.80229 5 6.25 5.44772 6.25 6C6.25 6.55229 5.80228 7 5.25 7L2.25 7C1.69772 7 1.25 6.55228 1.25 6ZM1.25 12C1.25 11.4477 1.69772 11 2.25 11H5.25C5.80228 11 6.25 11.4477 6.25 12C6.25 12.5523 5.80228 13 5.25 13H2.25C1.69772 13 1.25 12.5523 1.25 12ZM1.25 18C1.25 17.4477 1.69772 17 2.25 17H5.25C5.80228 17 6.25 17.4477 6.25 18C6.25 18.5523 5.80228 19 5.25 19H2.25C1.69772 19 1.25 18.5523 1.25 18Z',
  d7: 'M14.0564 1.25C15.8942 1.24998 17.3498 1.24997 18.489 1.40314C19.6614 1.56076 20.6104 1.89288 21.3588 2.64124C22.1071 3.38961 22.4392 4.33856 22.5969 5.51098C22.75 6.65018 22.75 8.1058 22.75 9.94354V9.94359V14.0564V14.0565C22.75 15.8942 22.75 17.3498 22.5969 18.489C22.4392 19.6614 22.1071 20.6104 21.3588 21.3588C20.6104 22.1071 19.6614 22.4392 18.489 22.5969C17.3498 22.75 15.8942 22.75 14.0565 22.75H14.0564H11.9436H11.9435C10.1058 22.75 8.65018 22.75 7.51098 22.5969C6.33856 22.4392 5.38961 22.1071 4.64124 21.3588C3.89288 20.6104 3.56076 19.6614 3.40314 18.489C3.24997 17.3498 3.24998 15.8942 3.25 14.0564V14.0564V9.94358V9.94357C3.24998 8.10582 3.24997 6.65019 3.40314 5.51098C3.56076 4.33856 3.89288 3.38961 4.64124 2.64124C5.38961 1.89288 6.33856 1.56076 7.51098 1.40314C8.65019 1.24997 10.1058 1.24998 11.9436 1.25H11.9436H14.0564H14.0564Z',
  d8: 'M11.2436 5.25L11.2857 5.25L14.7564 5.25H14.7564C15.2591 5.24997 15.7006 5.24994 16.0559 5.29175C16.4337 5.33619 16.8274 5.43814 17.1592 5.72846C17.5054 6.0314 17.6418 6.41347 17.6995 6.78883C17.7502 7.11871 17.7501 7.52202 17.75 7.95105V7.95107L17.75 8L17.75 8.04894V8.04895C17.7501 8.47799 17.7502 8.8813 17.6995 9.21118C17.6418 9.58653 17.5054 9.96861 17.1592 10.2715C16.8274 10.5619 16.4337 10.6638 16.0559 10.7083C15.7005 10.7501 15.2591 10.75 14.7564 10.75L11.2857 10.75L11.2436 10.75C10.741 10.75 10.2995 10.7501 9.94407 10.7083C9.56635 10.6638 9.17267 10.5619 8.84087 10.2715C8.49466 9.96861 8.35823 9.58653 8.30055 9.21118C8.24986 8.88129 8.24993 8.47797 8.25001 8.04892L8.25001 8L8.25001 7.95108C8.24993 7.52204 8.24986 7.11872 8.30055 6.78883C8.35823 6.41347 8.49466 6.0314 8.84087 5.72846C9.17267 5.43814 9.56635 5.33619 9.94407 5.29175C10.2995 5.24994 10.7409 5.24997 11.2436 5.25H11.2436Z',
  d9: 'M4 22H22V2H4V22Z',
  d10: 'M9.5 10H17.5V6H9.5V10Z',
  d11: 'M6 6L2 6M6 12H2M6 18H2',
  d12: 'M3.5 2C3.5 1.58579 3.83579 1.25 4.25 1.25H21.75C22.1642 1.25 22.5 1.58579 22.5 2V22C22.5 22.4142 22.1642 22.75 21.75 22.75H4.25C3.83579 22.75 3.5 22.4142 3.5 22V19H1.5V17H3.5V13H1.5V11H3.5V7H1.5V5H3.5V2ZM17.5 5H8.5V10H17.5V5Z',
} as const;

export const IconNotebook01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="notebook-01-stroke-rounded IconNotebook01StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNotebook01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="notebook-01-duotone-rounded IconNotebook01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNotebook01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="notebook-01-twotone-rounded IconNotebook01TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconNotebook01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="notebook-01-solid-rounded IconNotebook01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconNotebook01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="notebook-01-bulk-rounded IconNotebook01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconNotebook01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="notebook-01-stroke-sharp IconNotebook01StrokeSharp"
    >
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNotebook01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="notebook-01-solid-sharp IconNotebook01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfNotebook01: TheIconSelfPack = {
  name: 'Notebook01',
  StrokeRounded: IconNotebook01StrokeRounded,
  DuotoneRounded: IconNotebook01DuotoneRounded,
  TwotoneRounded: IconNotebook01TwotoneRounded,
  SolidRounded: IconNotebook01SolidRounded,
  BulkRounded: IconNotebook01BulkRounded,
  StrokeSharp: IconNotebook01StrokeSharp,
  SolidSharp: IconNotebook01SolidSharp,
};