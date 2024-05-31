import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7.78063 13.9568V9.49317M7.78063 9.49317V3.97805C7.78063 3.15846 8.46371 2.49792 9.2834 2.49792C10.1031 2.49792 10.749 3.15846 10.749 3.97805V7.974M7.78063 9.49317C6.46635 10.684 5.05205 12.1884 4.86159 12.5737C3.97541 13.9225 4.0683 14.5755 5.05588 16.2259C5.89469 17.6277 7.02277 19.1833 7.08862 19.2579C7.75886 20.0174 7.6256 20.0175 8.59705 20.7307C9.46453 21.3327 11.2639 21.7522 15.4822 21.3327C18.9187 20.8019 19.742 17.8026 19.7241 16.3692V12.8295C19.9382 9.88749 18.7083 9.75469 16.4752 9.46512M10.749 7.974V10.4976M10.749 7.974C11.3063 7.06532 13.3303 7.43254 13.7247 9.14847M13.7604 10.4936V9.49317C13.7604 9.4143 13.7565 9.33519 13.7453 9.25717M13.7247 9.14847C13.7264 9.15569 13.728 9.16293 13.7296 9.1702C13.736 9.19899 13.7412 9.228 13.7453 9.25717M13.7247 9.14847C13.7288 9.18343 13.7357 9.21967 13.7453 9.25717M13.7247 9.14847C13.5846 7.95246 16.6156 8.24402 16.739 10.3474V11.4905',
  d2: 'M19.75 11.6961V11.6941C19.7491 10.7173 19.0425 9.88392 18.0788 9.7233L16.75 9.50183V10.5018C16.75 9.39726 15.8546 8.50183 14.75 8.50183H13.75V9.50183C13.75 8.39726 12.8546 7.50183 11.75 7.50183H10.75V4.00183C10.75 3.1734 10.0784 2.50183 9.25 2.50183C8.42157 2.50183 7.75 3.1734 7.75 4.00183V9.50183L6.2843 10.8765C5.07555 12.2118 4.47118 12.8794 4.30904 13.6774C4.25813 13.928 4.24003 14.1839 4.25519 14.439C4.30345 15.2513 4.80807 15.9946 5.81729 17.481L6.3809 18.3111C7.01844 19.2501 7.33722 19.7196 7.72767 20.0914C8.41108 20.7421 9.26656 21.1916 10.197 21.389C10.7286 21.5018 11.3033 21.5018 12.4527 21.5018C14.5057 21.5018 15.5323 21.5018 16.3566 21.2154C17.8056 20.7119 18.9455 19.5926 19.4583 18.1698C19.75 17.3604 19.75 16.3524 19.75 14.3365V12.5018V11.6961Z',
  d3: 'M7.77868 13.9568V9.49317M7.77868 9.49317V3.97805C7.77868 3.15846 8.46176 2.49792 9.28145 2.49792C10.1011 2.49792 10.747 3.15846 10.747 3.97805V7.974M7.77868 9.49317C6.4644 10.684 5.0501 12.1884 4.85964 12.5737C3.97346 13.9225 4.06635 14.5755 5.05393 16.2259C5.89274 17.6277 7.02082 19.1833 7.08667 19.2579C7.75691 20.0174 7.62365 20.0175 8.5951 20.7307C9.46258 21.3327 11.2619 21.7522 15.4802 21.3327C18.9167 20.8019 19.74 17.8026 19.7221 16.3692V12.8295C19.9362 9.8875 18.7063 9.7547 16.4732 9.46513M10.747 7.974V10.4976M10.747 7.974C11.3043 7.06532 13.3283 7.43254 13.7227 9.14847M13.7227 9.14847C13.7244 9.15569 13.726 9.16294 13.7276 9.17021C13.734 9.199 13.7392 9.228 13.7433 9.25717M13.7227 9.14847C13.7268 9.18343 13.7337 9.21967 13.7433 9.25717M13.7227 9.14847C13.5826 7.95246 16.6136 8.24402 16.737 10.3474V11.4905M13.7584 10.4936V9.49317C13.7584 9.4143 13.7545 9.33519 13.7433 9.25717',
  d4: 'M7.59508 13.9569V9.4933M7.59508 9.4933V3.97818C7.59508 3.15859 8.27816 2.49805 9.09785 2.49805C9.91755 2.49805 10.5635 3.15859 10.5635 3.97818V7.97413M7.59508 9.4933C6.2808 10.6841 4.8665 12.1885 4.67604 12.5738C3.78986 13.9226 3.88275 14.5756 4.87033 16.226C5.70914 17.6278 6.83722 19.1834 6.90307 19.258C7.57331 20.0175 7.44005 20.0176 8.4115 20.7308C9.27898 21.3328 11.0784 21.7523 15.2967 21.3328M10.5635 7.97413V10.4977M10.5635 7.97413C11.1208 7.06545 13.1448 7.43267 13.5392 9.1486M13.5392 9.1486C13.5409 9.15582 13.5425 9.16306 13.5441 9.17033C13.5505 9.19912 13.5557 9.22813 13.5598 9.2573M13.5392 9.1486C13.5433 9.18356 13.5502 9.2198 13.5598 9.2573M13.5749 10.4937V9.4933C13.5749 9.41443 13.571 9.33532 13.5598 9.2573',
  d5: 'M7.53063 13.9568V9.49317M7.53063 9.49317V3.97805C7.53063 3.15846 8.21371 2.49792 9.0334 2.49792C9.8531 2.49792 10.499 3.15846 10.499 3.97805V7.974M7.53063 9.49317C6.21635 10.684 4.80205 12.1884 4.61159 12.5737C3.72541 13.9225 3.8183 14.5755 4.80588 16.2259C5.64469 17.6277 6.77277 19.1833 6.83862 19.2579C7.50886 20.0174 7.3756 20.0175 8.34705 20.7307C9.21453 21.3327 11.0139 21.7522 15.2322 21.3327C18.6687 20.8019 19.492 17.8026 19.4741 16.3692V12.8295C19.6882 9.8875 18.4583 9.7547 16.2252 9.46513M10.499 7.974V10.4976M10.499 7.974C11.0563 7.06532 13.0803 7.43254 13.4747 9.14847M13.4747 9.14847C13.4764 9.15569 13.478 9.16294 13.4796 9.17021C13.486 9.199 13.4912 9.228 13.4953 9.25717M13.4747 9.14847C13.4788 9.18343 13.4857 9.21967 13.4953 9.25717M13.4747 9.14847C13.3346 7.95246 16.3656 8.24402 16.489 10.3474V11.4905M13.5104 10.4936V9.49317C13.5104 9.4143 13.5065 9.33519 13.4953 9.25717',
  d6: 'M6.41968 10.8117C6.41968 10.2715 6.41968 10.0014 6.26751 9.91528C6.24805 9.90425 6.22741 9.89544 6.20598 9.889C6.0385 9.8387 5.84343 10.0255 5.45329 10.3991C4.87016 11.0432 4.39652 11.5664 4.05239 12.0291C3.69502 12.5096 3.43545 12.9781 3.32406 13.5263C3.2602 13.8406 3.23749 14.1617 3.25651 14.4818C3.28969 15.0403 3.48104 15.5401 3.76761 16.0649C4.04344 16.5701 4.439 17.1527 4.92578 17.8696L5.56233 18.8072C6.15022 19.6732 6.51124 20.2051 6.96051 20.6328C7.74531 21.3801 8.72624 21.895 9.79137 22.121C10.4007 22.2502 11.315 22.2502 12.3768 22.2501C14.263 22.2504 15.4074 22.2506 16.3527 21.9221C18.0121 21.3455 19.3231 20.0617 19.9139 18.4224C20.2505 17.4882 20.2503 16.3579 20.25 14.512L20.25 12.5001C20.25 12.2346 20.2303 11.5835 20.2205 11.2911C20.2205 10.2885 19.386 9.31018 18.2521 9.04924C18.0062 8.99266 17.8833 8.96438 17.7701 9.05445C17.657 9.14453 17.657 9.29027 17.657 9.58175V11.4384C17.657 11.671 17.4635 11.8596 17.2248 11.8596C16.9861 11.8596 16.7926 11.671 16.7926 11.4384V9.0024C16.7926 8.89315 16.7926 8.83852 16.7706 8.78437C16.7487 8.73021 16.716 8.69639 16.6504 8.62873C16.2323 8.197 15.6307 7.8848 14.7983 7.78452C14.5336 7.75264 14.4013 7.7367 14.3003 7.82623C14.1993 7.91575 14.1993 8.06053 14.1993 8.35008V10.3151C14.1993 10.5478 14.0058 10.7364 13.7671 10.7364C13.5284 10.7364 13.3349 10.5478 13.3349 10.3151V7.71967C13.3349 7.5838 13.3349 7.51586 13.3026 7.45198C13.2703 7.38811 13.2226 7.35302 13.1271 7.28284C12.6715 6.94793 12.1088 6.75008 11.5 6.75008C11.4176 6.7505 11.269 6.76034 11.1096 6.78947C10.9571 6.81733 10.8809 6.83127 10.8113 6.91473C10.7417 6.99818 10.7417 7.09306 10.7417 7.28281V10.3151C10.7417 10.5478 10.5482 10.7364 10.3095 10.7364C10.0708 10.7364 9.87731 10.5478 9.87731 10.3151V3.04661C9.87731 2.33051 9.2968 1.75 8.5807 1.75C7.8646 1.75 7.28409 2.33051 7.28409 3.04661V14.2466C7.28409 14.4793 7.09058 14.6679 6.85188 14.6679C6.61319 14.6679 6.41968 14.4793 6.41968 14.2466V10.8117Z',
  d7: 'M13.7971 12.5074L13.7971 10.6041C13.7971 10.4305 13.7693 10.1493 13.7164 9.9944M13.7164 9.9944C13.5194 9.41721 13.0313 9.00172 12.4063 9.00172H10.696M13.7164 9.9944L15.4995 9.9944C16.1246 9.9944 16.6173 10.4261 16.8143 11.0033M16.897 13.1921V11.6262C16.897 11.4525 16.8673 11.1582 16.8143 11.0033M16.8143 11.0033H18.5277C19.5161 11.0893 19.9992 11.7783 19.9992 12.5856V19.0254C19.9992 20.6668 18.6955 21.8849 17.1282 21.9976L8.10214 21.9976L4.50609 16.4492C3.16464 14.1764 4.61362 12.7 7.45259 10.1372M10.696 9.00172V11.993M10.696 9.00172V3.74724C10.696 3.47491 10.6631 3.2289 10.5956 3.0039C10.3001 2.01907 8.99795 1.69151 8.19536 2.33391C7.85476 2.60652 7.61278 2.95928 7.61278 3.34457L7.61278 14.5088',
  d8: 'M8.75311 1.25C7.98402 1.25 7.38241 1.83514 7.38241 2.53109V14.785H6.58175V10.6386L5.53391 11.5802C4.82023 12.324 4.30403 12.8631 3.93961 13.3254C3.57783 13.7843 3.38977 14.1387 3.31119 14.5036C3.25841 14.7487 3.23967 14.9989 3.25537 15.2482C3.30421 16.0236 3.74191 16.7834 4.94853 18.4602L4.95734 18.4724L7.79056 22.75H17.6083C19.3555 22.75 20.75 21.4167 20.75 19.7979V12.557C20.75 11.8495 20.1611 11.2759 19.4346 11.2759H18.0017C18.0063 11.3311 18.0086 11.3868 18.0086 11.443V13.3304H17.2079V11.443C17.2079 11.2926 17.1815 11.149 17.1332 11.0159C16.9524 10.5178 16.4647 10.1619 15.8926 10.1619H14.4597C14.4642 10.2171 14.4665 10.2728 14.4665 10.329V12.557H13.6659V10.329C13.6659 10.1786 13.6394 10.035 13.5911 9.90195C13.4104 9.40386 12.9226 9.04793 12.3505 9.04793H10.9245V12H10.1238V2.53109C10.1238 1.83514 9.52221 1.25 8.75311 1.25Z',
} as const;

export const IconTap08StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tap-08-stroke-rounded IconTap08StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTap08DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tap-08-duotone-rounded IconTap08DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTap08TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tap-08-twotone-rounded IconTap08TwotoneRounded"
    >
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTap08SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tap-08-solid-rounded IconTap08SolidRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTap08BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tap-08-bulk-rounded IconTap08BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTap08StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tap-08-stroke-sharp IconTap08StrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconTap08SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tap-08-solid-sharp IconTap08SolidSharp"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTap08: TheIconSelfPack = {
  name: 'Tap08',
  StrokeRounded: IconTap08StrokeRounded,
  DuotoneRounded: IconTap08DuotoneRounded,
  TwotoneRounded: IconTap08TwotoneRounded,
  SolidRounded: IconTap08SolidRounded,
  BulkRounded: IconTap08BulkRounded,
  StrokeSharp: IconTap08StrokeSharp,
  SolidSharp: IconTap08SolidSharp,
};