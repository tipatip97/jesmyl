import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M15.5 22V21.5C15.5 20.3954 16.4321 19.5005 17.4223 19.011C18.3846 18.5354 19.1943 17.7511 19.2965 16.8313L19.5 15L21.5 14L19 10.25C19 5.69365 15.3063 2 10.75 2C6.19365 2 2.5 5.69365 2.5 10.25C2.5 13.0379 3.88283 15.5028 6 16.9962M6 16.9962V22M6 16.9962C6.75065 17.5257 7.59362 17.9331 8.5 18.1895',
  d2: 'M11.3077 12L9.84703 7.47891C9.7552 7.19466 9.47344 7 9.15385 7C8.83425 7 8.55249 7.19466 8.46066 7.47891L7 12M14 7V12M7.53846 10.5H10.7692',
  d3: 'M10.75 2C6.19365 2 2.5 5.69365 2.5 10.25C2.5 13.0379 3.88283 15.5028 6 16.9962V22H15.5V21.5C15.5 20.3954 16.4321 19.5005 17.4223 19.011C18.3846 18.5354 19.1943 17.7511 19.2965 16.8313L19.5 15L21.5 14L19 10.25C19 5.69365 15.3063 2 10.75 2Z',
  d4: 'M1.75 10.25C1.75 13.15 3.12228 15.7295 5.25 17.3744V22C5.25 22.4142 5.58579 22.75 6 22.75H15.5C15.9142 22.75 16.25 22.4142 16.25 22V21.5C16.25 20.8308 16.8501 20.1305 17.7546 19.6834C18.8045 19.1644 19.8976 18.2128 20.0419 16.9141L20.2004 15.4883L21.8354 14.6708C22.0278 14.5746 22.1697 14.4004 22.2249 14.1925C22.2801 13.9846 22.2434 13.763 22.124 13.584L19.7471 10.0185C19.6243 5.15495 15.6432 1.25 10.75 1.25C5.77944 1.25 1.75 5.27944 1.75 10.25ZM9.15405 6.25C8.53997 6.25 7.94823 6.62604 7.74718 7.24834L6.28652 11.7694C6.15918 12.1636 6.37548 12.5863 6.76963 12.7137C7.16378 12.841 7.58654 12.6247 7.71388 12.2306L8.03068 11.25H10.2774L10.5942 12.2306C10.7216 12.6247 11.1443 12.841 11.5385 12.7137C11.9326 12.5863 12.1489 12.1636 12.0216 11.7694L10.5609 7.24834C10.3599 6.62604 9.76813 6.25 9.15405 6.25ZM9.15405 7.77291L9.7928 9.75H8.5153L9.15405 7.77291ZM14.7502 7C14.7502 6.58579 14.4144 6.25 14.0002 6.25C13.586 6.25 13.2502 6.58579 13.2502 7V12C13.2502 12.4142 13.586 12.75 14.0002 12.75C14.4144 12.75 14.7502 12.4142 14.7502 12V7Z',
  d5: 'M5.25 17.3744C3.12228 15.7295 1.75 13.15 1.75 10.25C1.75 5.27944 5.77944 1.25 10.75 1.25C15.6432 1.25 19.6243 5.15495 19.7471 10.0185L22.124 13.584C22.2434 13.763 22.2801 13.9846 22.2249 14.1925C22.1697 14.4004 22.0278 14.5746 21.8354 14.6708L20.2004 15.4883L20.0419 16.9141C19.8976 18.2128 18.8045 19.1644 17.7546 19.6834C16.8501 20.1305 16.25 20.8308 16.25 21.5V22C16.25 22.4142 15.9142 22.75 15.5 22.75H6C5.58579 22.75 5.25 22.4142 5.25 22V17.3744Z',
  d6: 'M7.74718 7.24834C7.94823 6.62604 8.53997 6.25 9.15405 6.25C9.76813 6.25 10.3599 6.62604 10.5609 7.24834L12.0216 11.7694C12.1489 12.1636 11.9326 12.5863 11.5385 12.7137C11.1443 12.841 10.7216 12.6247 10.5942 12.2306L10.2774 11.25H8.03068L7.71388 12.2306C7.58654 12.6247 7.16378 12.841 6.76963 12.7137C6.37548 12.5863 6.15918 12.1636 6.28652 11.7694L7.74718 7.24834ZM8.5153 9.75H9.7928L9.15405 7.77291L8.5153 9.75ZM14.0002 6.25C14.4144 6.25 14.7502 6.58579 14.7502 7V12C14.7502 12.4142 14.4144 12.75 14.0002 12.75C13.586 12.75 13.2502 12.4142 13.2502 12V7C13.2502 6.58579 13.586 6.25 14.0002 6.25Z',
  d7: 'M8.51482 18.2099C5.03242 17.2168 2.5 14.0524 2.5 10.3153C2.5 5.78146 6.02332 2 10.6445 2C15.2657 2 19.0138 5.72669 19.0138 10.2606L21.4482 13.9282C21.4826 13.9777 21.5293 14.0254 21.4756 14.0531L19.5079 14.994L18.4913 18.4903L15.4905 19.5271V22M6.01005 22V17.1885',
  d8: 'M14.0068 6.25V12.8299M7.65963 10.4678L9.32634 6.48298L10.8973 10.4678M7.65963 10.4678L6.70703 12.7453M7.65963 10.4678H10.8973M10.8973 10.4678L11.7951 12.7453',
  d9: 'M1.75 10.25C1.75 13.15 3.12228 15.7295 5.25 17.3744V22.75H16.25V20.0406L19.1125 19.0864L20.1305 15.5233L21.8354 14.6708C22.0278 14.5746 22.1697 14.4004 22.2249 14.1925C22.2801 13.9846 22.2434 13.763 22.124 13.584L19.7471 10.0185C19.6243 5.15495 15.6432 1.25 10.75 1.25C5.77944 1.25 1.75 5.27944 1.75 10.25ZM10.0081 6.25H8.49252L6.02539 12.4178L7.41811 12.9749L8.10807 11.25H10.3925L11.0825 12.9749L12.4752 12.4178L10.0081 6.25ZM9.79252 9.75H8.70807L9.25029 8.39444L9.79252 9.75ZM14.7503 12.75V6.25H13.2503V12.75H14.7503Z',
} as const;

export const IconArtificialIntelligence02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="artificial-intelligence-02-stroke-rounded IconArtificialIntelligence02StrokeRounded"
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

export const IconArtificialIntelligence02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="artificial-intelligence-02-duotone-rounded IconArtificialIntelligence02DuotoneRounded"
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

export const IconArtificialIntelligence02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="artificial-intelligence-02-twotone-rounded IconArtificialIntelligence02TwotoneRounded"
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

export const IconArtificialIntelligence02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="artificial-intelligence-02-solid-rounded IconArtificialIntelligence02SolidRounded"
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

export const IconArtificialIntelligence02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="artificial-intelligence-02-bulk-rounded IconArtificialIntelligence02BulkRounded"
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
    </TheIconWrapper>
  );
};

export const IconArtificialIntelligence02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="artificial-intelligence-02-stroke-sharp IconArtificialIntelligence02StrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="bevel" 
      />
    </TheIconWrapper>
  );
};

export const IconArtificialIntelligence02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="artificial-intelligence-02-solid-sharp IconArtificialIntelligence02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfArtificialIntelligence02: TheIconSelfPack = {
  name: 'ArtificialIntelligence02',
  StrokeRounded: IconArtificialIntelligence02StrokeRounded,
  DuotoneRounded: IconArtificialIntelligence02DuotoneRounded,
  TwotoneRounded: IconArtificialIntelligence02TwotoneRounded,
  SolidRounded: IconArtificialIntelligence02SolidRounded,
  BulkRounded: IconArtificialIntelligence02BulkRounded,
  StrokeSharp: IconArtificialIntelligence02StrokeSharp,
  SolidSharp: IconArtificialIntelligence02SolidSharp,
};