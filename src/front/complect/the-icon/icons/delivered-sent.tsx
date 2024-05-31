import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 9V13.947C2 16.329 2 17.52 2.73223 18.26C3.2191 18.752 3.90328 18.9169 5 18.9722M12.4271 5C13.3404 5.2999 14.0564 6.02354 14.3532 6.94653C14.5 7.40322 14.5 7.96752 14.5 9.09613C14.5 9.84853 14.5 10.2247 14.5979 10.5292C14.7957 11.1445 15.2731 11.6269 15.882 11.8269C16.1832 11.9258 16.5555 11.9258 17.3 11.9258H22V13.947C22 16.329 22 17.52 21.2678 18.26C20.7809 18.752 20.0967 18.9169 19 18.9722M9 19H15',
  d2: 'M14.5 7H16.3212C17.7766 7 18.5042 7 19.0964 7.35371C19.6886 7.70742 20.0336 8.34811 20.7236 9.6295L22 12',
  d3: 'M7.32653 8L8.81309 6.82582C9.60436 6.20083 10 5.88833 10 5.5M7.32653 3L8.81309 4.17417C9.60436 4.79917 10 5.11168 10 5.5M10 5.5L2 5.5',
  d4: 'M2 13.947C2 16.329 2 17.52 2.73223 18.26C3.2191 18.752 3.90328 18.9169 5 18.9722C5.0149 17.8804 5.90473 17 7 17C8.10457 17 9 17.8954 9 19H15C15 17.8954 15.8954 17 17 17C18.0953 17 18.9849 17.8804 18.9998 18.9722C20.0965 18.9169 20.7809 18.752 21.2678 18.26C22 17.52 22 16.329 22 13.947V11.9258H17.3C16.5555 11.9258 16.1832 11.9258 15.882 11.8269C15.2731 11.6269 14.7957 11.1445 14.5979 10.5292C14.5 10.2247 14.5 9.84853 14.5 9.09613C14.5 7.96752 14.5 7.40322 14.3532 6.94653C14.1566 6.33499 13.7759 5.81096 13.2757 5.43971C13.1531 5.3487 13.0918 5.30319 12.6332 5.15159C12.1746 5 11.9388 5 11.4672 5H2V13.947Z',
  d5: 'M14.5 19.25C14.5 17.8693 15.6193 16.75 17 16.75C18.3807 16.75 19.5 17.8693 19.5 19.25C19.5 20.6307 18.3807 21.75 17 21.75C15.6193 21.75 14.5 20.6307 14.5 19.25Z',
  d6: 'M4.5 19.25C4.5 17.8693 5.61929 16.75 7 16.75C8.38071 16.75 9.5 17.8693 9.5 19.25C9.5 20.6307 8.38071 21.75 7 21.75C5.61929 21.75 4.5 20.6307 4.5 19.25Z',
  d7: 'M2.25 4.49414C1.69772 4.49414 1.25 4.94186 1.25 5.49414C1.25 6.04643 1.69772 6.49414 2.25 6.49414L6.25004 6.49414L6.25002 7.0884C6.24989 7.26404 6.24974 7.47969 6.27181 7.65613L6.27223 7.65947C6.288 7.78592 6.35983 8.36196 6.92543 8.63632C7.49225 8.91128 7.99239 8.60935 8.1006 8.54403L8.10463 8.54159C8.25765 8.44938 8.56908 8.20489 8.56908 8.20489C8.94491 7.91025 9.45937 7.50455 9.85038 7.12412C10.0455 6.93429 10.2467 6.71703 10.4056 6.48612C10.5468 6.28086 10.75 5.93066 10.75 5.5C10.75 5.06933 10.5468 4.71914 10.4056 4.51388C10.2467 4.28297 10.0455 4.06571 9.85038 3.87588C9.45937 3.49545 8.94492 3.08975 8.56909 2.79512C8.56909 2.79512 8.25765 2.55062 8.10463 2.45841L8.10059 2.45597C7.99239 2.39065 7.49225 2.08872 6.92543 2.36368C6.35983 2.63804 6.28799 3.21408 6.27223 3.34053L6.27181 3.34387C6.24974 3.52031 6.24989 3.73597 6.25002 3.9116L6.25004 4.49414L2.25 4.49414Z',
  d8: 'M1.33788 7.83299C1.42575 7.74512 1.56718 7.74513 1.85004 7.74515L4.49221 7.74531C4.73165 7.74533 4.85137 7.74534 4.93066 7.80363C5.00994 7.86193 5.05182 7.99597 5.13558 8.26404C5.28192 8.73239 5.6156 9.39122 6.37987 9.76195C7.56278 10.3358 8.58286 9.71479 8.73785 9.62044C8.81073 9.5633 8.91535 9.48289 9.03972 9.38729L9.03978 9.38725C9.54129 9.00177 10.3639 8.36945 10.7221 8.02101C10.9446 7.80446 11.2106 7.52233 11.4354 7.19554C11.6211 6.92559 12 6.31591 12 5.50097C12 5.27026 11.9697 5.056 11.9219 4.86125C11.8453 4.5489 11.807 4.39273 11.8813 4.31361C11.9556 4.23449 12.0857 4.25781 12.3459 4.30444C12.5024 4.33249 12.6713 4.37526 12.8686 4.44046C13.1015 4.51745 13.269 4.57872 13.4017 4.64162C13.5563 4.71491 13.6497 4.78422 13.7201 4.83654L13.7227 4.83844C14.2156 5.20426 14.6149 5.68824 14.8818 6.25H16.4237L16.4684 6.25C17.1196 6.24998 17.6773 6.24996 18.14 6.29575C18.6346 6.34471 19.0971 6.45139 19.5385 6.70981C19.9799 6.96823 20.2951 7.3168 20.5735 7.72042C20.834 8.09804 21.0984 8.57933 21.4071 9.14131L22.6376 11.3811C22.7254 11.541 22.7605 11.7149 22.7488 11.8836C22.7496 11.8979 22.75 11.9123 22.75 11.9268V14.0013C22.75 15.147 22.75 16.0816 22.6519 16.8191C22.5495 17.5889 22.3282 18.2556 21.8009 18.7885C21.5415 19.0507 21.2488 19.239 20.9263 19.375C20.841 19.411 20.75 19.3434 20.75 19.2507C20.75 17.1797 19.0711 15.5007 17 15.5007C14.9289 15.5007 13.25 17.1797 13.25 19.2507C13.25 19.3967 13.25 19.4698 13.2358 19.5142C13.2039 19.6145 13.1414 19.677 13.0411 19.709C12.9966 19.7231 12.933 19.7231 12.8058 19.7231H11.1942C11.067 19.7231 11.0034 19.7231 10.9589 19.709C10.8586 19.677 10.7961 19.6145 10.7642 19.5142C10.75 19.4698 10.75 19.3967 10.75 19.2507C10.75 17.1797 9.07107 15.5007 7 15.5007C4.92893 15.5007 3.25 17.1797 3.25 19.2507C3.25 19.3434 3.15905 19.411 3.07366 19.375C2.75117 19.239 2.45854 19.0507 2.19912 18.7885C1.67184 18.2556 1.45049 17.5889 1.34808 16.8191C1.24996 16.0816 1.24998 15.1469 1.25 14.0013V14.0013V8.34515C1.25 8.06229 1.25 7.92086 1.33788 7.83299ZM20.3734 11.1768L19.7601 10.0604C19.4243 9.44913 19.2046 9.05146 19.004 8.76068C18.8154 8.48728 18.6866 8.37417 18.567 8.30415C18.4474 8.23414 18.2847 8.17661 17.9497 8.14345C17.5934 8.10818 17.132 8.10709 16.4237 8.10709H15.2446C15.2503 8.36368 15.2502 8.64519 15.25 8.95831L15.25 9.09709C15.25 9.90734 15.2591 10.1363 15.3119 10.3006C15.437 10.6897 15.7375 10.991 16.116 11.1153C16.2745 11.1673 16.4966 11.1768 17.3 11.1768H20.3734Z',
  d9: 'M19 19C19 20.1046 18.1046 21 17 21C15.8954 21 15 20.1046 15 19C15 17.8954 15.8954 17 17 17C18.1046 17 19 17.8954 19 19Z',
  d10: 'M8.99805 19C8.99805 20.1046 8.10262 21 6.99805 21C5.89348 21 4.99805 20.1046 4.99805 19C4.99805 17.8954 5.89348 17 6.99805 17C8.10262 17 8.99805 17.8954 8.99805 19Z',
  d11: 'M2 10V18.983H5M12 5.5L14.5 5.50001V12.5H22V18.983L19 19M9 18.9832H15',
  d12: 'M14.5 7.49977L19 7.49976L22 12.4998',
  d13: 'M6 9L9 6L6 3M2 6H8.59304',
  d14: 'M14.5 19.5C14.5 18.1193 15.6193 17 17 17C18.3807 17 19.5 18.1193 19.5 19.5C19.5 20.8807 18.3807 22 17 22C15.6193 22 14.5 20.8807 14.5 19.5Z',
  d15: 'M4.5 19.5C4.5 18.1193 5.61929 17 7 17C8.38071 17 9.5 18.1193 9.5 19.5C9.5 20.8807 8.38071 22 7 22C5.61929 22 4.5 20.8807 4.5 19.5Z',
  d16: 'M1.25 7.95705V19.233C1.25 19.6473 1.58579 19.983 2 19.983H3.28082C3.26049 19.8249 3.25 19.6637 3.25 19.5C3.25 17.4289 4.92893 15.75 7 15.75C9.07107 15.75 10.75 17.4289 10.75 19.5C10.75 19.6637 10.7395 19.8249 10.7192 19.983H13.2808C13.2605 19.8249 13.25 19.6637 13.25 19.5C13.25 17.4289 14.9289 15.75 17 15.75C19.0711 15.75 20.75 17.4289 20.75 19.5C20.75 19.6637 20.7395 19.8249 20.7192 19.983H22C22.4142 19.983 22.75 19.6473 22.75 19.233V12.75C22.75 12.6141 22.7131 12.4807 22.6431 12.3641L19.4246 6.99987L15.25 6.99988V5.75C15.25 5.33579 14.9142 5 14.5 5H10.7249L11.432 5.70705L5.95711 11.1819L2.81802 7.95705H1.25ZM15.25 11.9999V8.49976L18.5754 8.49976L20.6754 11.9999H15.25Z',
  d17: 'M5.95711 2L9.66421 5.70711L5.95711 9.41421L4.54289 8L5.83579 6.70711H1.25V4.70711H5.83579L4.54289 3.41421L5.95711 2Z',
} as const;

export const IconDeliveredSentStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="delivered-sent-stroke-rounded IconDeliveredSentStrokeRounded"
    >
      <circle 
        cx="17" 
        cy="19" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        cx="7" 
        cy="19" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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

export const IconDeliveredSentDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="delivered-sent-duotone-rounded IconDeliveredSentDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <circle 
        cx="17" 
        cy="19" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        cx="7" 
        cy="19" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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

export const IconDeliveredSentTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="delivered-sent-twotone-rounded IconDeliveredSentTwotoneRounded"
    >
      <circle 
        cx="17" 
        cy="19" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        cx="7" 
        cy="19" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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

export const IconDeliveredSentSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="delivered-sent-solid-rounded IconDeliveredSentSolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDeliveredSentBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="delivered-sent-bulk-rounded IconDeliveredSentBulkRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDeliveredSentStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="delivered-sent-stroke-sharp IconDeliveredSentStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconDeliveredSentSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="delivered-sent-solid-sharp IconDeliveredSentSolidSharp"
    >
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfDeliveredSent: TheIconSelfPack = {
  name: 'DeliveredSent',
  StrokeRounded: IconDeliveredSentStrokeRounded,
  DuotoneRounded: IconDeliveredSentDuotoneRounded,
  TwotoneRounded: IconDeliveredSentTwotoneRounded,
  SolidRounded: IconDeliveredSentSolidRounded,
  BulkRounded: IconDeliveredSentBulkRounded,
  StrokeSharp: IconDeliveredSentStrokeSharp,
  SolidSharp: IconDeliveredSentSolidSharp,
};