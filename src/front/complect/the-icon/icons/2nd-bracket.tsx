import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M17.225 3C18.6145 3.15381 19.5498 3.50143 20.2479 4.28705C21.5 5.69617 21.5 7.96411 21.5 12.5C21.5 17.0359 21.5 19.3038 20.2479 20.713C19.5498 21.4986 18.6145 21.8462 17.225 22M6.77501 22C5.38551 21.8462 4.45021 21.4986 3.75212 20.713C2.5 19.3038 2.5 17.0359 2.5 12.5C2.5 7.96411 2.5 5.69617 3.75212 4.28705C4.45021 3.50143 5.38551 3.15381 6.77501 3',
  d2: 'M2.5 12.5C2.5 7.96411 2.5 5.69617 3.75212 4.28705C4.45021 3.50143 5.38551 3.15381 6.77501 3M21.5 12.5C21.5 7.96411 21.5 5.69617 20.2479 4.28705C19.5498 3.50143 18.6145 3.15381 17.225 3',
  d3: 'M8.01742 2.86258C8.09338 3.54875 7.5987 4.16657 6.91254 4.24252C5.66179 4.38097 5.08899 4.66452 4.68652 5.11745C4.30398 5.54797 4.04061 6.17305 3.89769 7.36938C3.75211 8.588 3.75 10.2007 3.75 12.5001C3.75 14.7995 3.75211 16.4122 3.89769 17.6308C4.04061 18.8272 4.30398 19.4523 4.68652 19.8828C5.08899 20.3357 5.66179 20.6192 6.91254 20.7577C7.5987 20.8337 8.09338 21.4515 8.01742 22.1376C7.94147 22.8238 7.32365 23.3185 6.63748 23.2425C5.10923 23.0734 3.81143 22.6617 2.81772 21.5434C1.94814 20.5647 1.58545 19.3513 1.41534 17.9274C1.24995 16.543 1.24998 14.7805 1.25 12.5824V12.4179C1.24998 10.2197 1.24995 8.4572 1.41534 7.07282C1.58545 5.64892 1.94814 4.43547 2.81772 3.45686C3.81143 2.33855 5.10923 1.92687 6.63748 1.7577C7.32364 1.68174 7.94146 2.17642 8.01742 2.86258ZM15.9826 2.86258C16.0585 2.17642 16.6764 1.68174 17.3625 1.7577C18.8908 1.92687 20.1886 2.33856 21.1823 3.45686C22.0519 4.43547 22.4146 5.64892 22.5847 7.07282C22.75 8.4572 22.75 10.2197 22.75 12.4179V12.5823C22.75 14.7805 22.75 16.543 22.5847 17.9274C22.4146 19.3513 22.0519 20.5647 21.1823 21.5434C20.1886 22.6617 18.8908 23.0733 17.3625 23.2425C16.6764 23.3185 16.0585 22.8238 15.9826 22.1376C15.9066 21.4515 16.4013 20.8337 17.0875 20.7577C18.3382 20.6192 18.911 20.3357 19.3135 19.8828C19.696 19.4523 19.9594 18.8272 20.1023 17.6308C20.2479 16.4122 20.25 14.7995 20.25 12.5001C20.25 10.2007 20.2479 8.588 20.1023 7.36938C19.9594 6.17305 19.696 5.54797 19.3135 5.11745C18.911 4.66452 18.3382 4.38097 17.0875 4.24252C16.4013 4.16657 15.9066 3.54875 15.9826 2.86258Z',
  d4: 'M8.01742 2.36258C8.09338 3.04875 7.5987 3.66657 6.91254 3.74252C5.66179 3.88097 5.08899 4.16452 4.68652 4.61745C4.30398 5.04797 4.04061 5.67305 3.89769 6.86938C3.75211 8.088 3.75 9.70068 3.75 12.0001C3.75 14.2995 3.75211 15.9122 3.89769 17.1308C4.04061 18.3272 4.30398 18.9523 4.68652 19.3828C5.08899 19.8357 5.66179 20.1192 6.91254 20.2577C7.5987 20.3337 8.09338 20.9515 8.01742 21.6376C7.94147 22.3238 7.32365 22.8185 6.63748 22.7425C5.10923 22.5734 3.81143 22.1617 2.81772 21.0434C1.94814 20.0647 1.58545 18.8513 1.41534 17.4274C1.24995 16.043 1.24998 14.2805 1.25 12.0824V11.9179C1.24998 9.71974 1.24995 7.9572 1.41534 6.57282C1.58545 5.14892 1.94814 3.93547 2.81772 2.95686C3.81143 1.83855 5.10923 1.42687 6.63748 1.2577C7.32364 1.18174 7.94146 1.67642 8.01742 2.36258Z',
  d5: 'M15.9843 2.36258C16.0602 1.67641 16.678 1.18174 17.3642 1.2577C18.8925 1.42687 20.1903 1.83856 21.184 2.95686C22.0535 3.93547 22.4162 5.14892 22.5863 6.57282C22.7517 7.9572 22.7517 9.71975 22.7517 11.9179V12.0823C22.7517 14.2805 22.7517 16.043 22.5863 17.4274C22.4162 18.8513 22.0535 20.0647 21.184 21.0434C20.1903 22.1617 18.8925 22.5733 17.3642 22.7425C16.678 22.8185 16.0602 22.3238 15.9843 21.6376C15.9083 20.9515 16.403 20.3337 17.0891 20.2577C18.3399 20.1192 18.9127 19.8357 19.3151 19.3828C19.6977 18.9523 19.9611 18.3272 20.104 17.1308C20.2496 15.9122 20.2517 14.2995 20.2517 12.0001C20.2517 9.70068 20.2496 8.088 20.104 6.86938C19.9611 5.67305 19.6977 5.04797 19.3151 4.61745C18.9127 4.16452 18.3399 3.88097 17.0891 3.74252C16.403 3.66656 15.9083 3.04874 15.9843 2.36258Z',
  d6: 'M17 3.00005L21 3.00003V21H17M7 21L3 21V3H7',
  d7: 'M1.75 1.75H7V4.25H4.25V19.75L6.99999 19.75L7.00001 22.25L1.75 22.25V1.75ZM22.25 1.75002V22.25H17V19.75H19.75V4.25004L17 4.25005L17 1.75005L22.25 1.75002Z',
} as const;

export const Icon2ndBracketStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="2nd-bracket-stroke-rounded Icon2ndBracketStrokeRounded"
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

export const Icon2ndBracketDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="2nd-bracket-duotone-rounded Icon2ndBracketDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const Icon2ndBracketTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="2nd-bracket-twotone-rounded Icon2ndBracketTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const Icon2ndBracketSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="2nd-bracket-solid-rounded Icon2ndBracketSolidRounded"
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

export const Icon2ndBracketBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="2nd-bracket-bulk-rounded Icon2ndBracketBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const Icon2ndBracketStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="2nd-bracket-stroke-sharp Icon2ndBracketStrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const Icon2ndBracketSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="2nd-bracket-solid-sharp Icon2ndBracketSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOf2ndBracket: TheIconSelfPack = {
  name: '2ndBracket',
  StrokeRounded: Icon2ndBracketStrokeRounded,
  DuotoneRounded: Icon2ndBracketDuotoneRounded,
  TwotoneRounded: Icon2ndBracketTwotoneRounded,
  SolidRounded: Icon2ndBracketSolidRounded,
  BulkRounded: Icon2ndBracketBulkRounded,
  StrokeSharp: Icon2ndBracketStrokeSharp,
  SolidSharp: Icon2ndBracketSolidSharp,
};