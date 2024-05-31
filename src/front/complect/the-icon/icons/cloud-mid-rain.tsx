import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M17.4776 8.7803L17.5 8.78025C19.9853 8.78025 22 10.7212 22 13.1154C22 14.8176 20.9817 16.2906 19.5 17M17.4776 8.7803C17.4924 8.62164 17.5 8.46095 17.5 8.29856C17.5 5.37225 15.0376 3 12 3C9.12324 3 6.76233 5.12773 6.52042 7.83875M17.4776 8.7803C17.3753 9.8732 16.9286 10.8704 16.2428 11.6704M6.52042 7.83875C3.98398 8.07128 2 10.1293 2 12.6338C2 14.566 3.18102 16.2326 4.88559 17M6.52042 7.83875C6.67826 7.82428 6.83823 7.81688 7 7.81688C8.12582 7.81688 9.16474 8.17534 10.0005 8.78025',
  d2: 'M12.0434 12L10.907 13.036C10.3596 13.596 10.3596 14.492 10.9358 15.052C11.224 15.332 11.6401 15.5 12.0434 15.5C12.4468 15.5 12.7797 15.36 13.0678 15.108C13.6441 14.548 13.6441 13.624 13.0678 13.064L12.0434 12Z',
  d3: 'M8.54345 17.5L7.40701 18.536C6.8596 19.096 6.85963 19.992 7.43585 20.552C7.72396 20.832 8.14009 21 8.54345 21C8.9468 21 9.27972 20.86 9.56783 20.608C10.1441 20.048 10.1441 19.124 9.56783 18.564L8.54345 17.5Z',
  d4: 'M15.5434 17.5L14.407 18.536C13.8596 19.096 13.8596 19.992 14.4358 20.552C14.724 20.832 15.1401 21 15.5434 21C15.9468 21 16.2797 20.86 16.5678 20.608C17.1441 20.048 17.1441 19.124 16.5678 18.564L15.5434 17.5Z',
  d5: 'M12 3C15.0376 3 17.5 5.46243 17.5 8.5C17.5 8.66856 17.4924 8.83536 17.4776 9.00005L17.5 9C19.9853 9 22 11.0147 22 13.5C22 15.9853 19.9853 18 17.5 18H16.0248L15.5434 17.5L14.995 18H9.02483L8.54345 17.5L7.99497 18H7C4.23858 18 2 15.7614 2 13C2 10.4003 3.98398 8.26407 6.52042 8.0227C6.76233 5.20862 9.12324 3 12 3ZM12.0434 12L10.907 13.036C10.3596 13.596 10.3596 14.492 10.9359 15.052C11.224 15.332 11.6401 15.5 12.0434 15.5C12.4468 15.5 12.7797 15.36 13.0678 15.108C13.6441 14.548 13.6441 13.624 13.0678 13.064L12.0434 12Z',
  d6: 'M11.5382 11.4457C11.8384 11.1721 12.302 11.1872 12.5837 11.4798L13.6004 12.5358C14.4698 13.3912 14.4665 14.7945 13.5905 15.6458C13.5811 15.655 13.5715 15.6639 13.5616 15.6725C13.1484 16.0339 12.6433 16.25 12.0434 16.25C11.4464 16.25 10.8423 16.0069 10.4131 15.5898C9.53631 14.7377 9.53602 13.3656 10.3707 12.5117C10.3807 12.5014 10.3911 12.4914 10.4017 12.4817L11.5382 11.4457Z',
  d7: 'M8.03817 16.9457C8.3384 16.6721 8.80196 16.6872 9.08373 16.9798L10.1004 18.0358C10.9698 18.8912 10.9665 20.2945 10.0905 21.1458C10.0811 21.155 10.0715 21.1639 10.0616 21.1725C9.64845 21.5339 9.14333 21.75 8.54344 21.75C7.94636 21.75 7.34229 21.5069 6.91314 21.0898C6.03631 20.2377 6.03602 18.8656 6.87068 18.0117C6.88074 18.0014 6.8911 17.9914 6.90174 17.9817L8.03817 16.9457Z',
  d8: 'M15.0382 16.9457C15.3384 16.6721 15.802 16.6872 16.0837 16.9798L17.1004 18.0358C17.9698 18.8912 17.9665 20.2945 17.0905 21.1458C17.0811 21.155 17.0715 21.1639 17.0616 21.1725C16.6484 21.5339 16.1433 21.75 15.5434 21.75C14.9464 21.75 14.3423 21.5069 13.9131 21.0898C13.0363 20.2377 13.036 18.8656 13.8707 18.0117C13.8807 18.0014 13.8911 17.9914 13.9017 17.9817L15.0382 16.9457Z',
  d9: 'M5.93931 6.96783C5.88991 7.16384 5.8652 7.26184 5.80872 7.3197C5.75224 7.37755 5.65424 7.40476 5.45825 7.45919C3.03106 8.1332 1.25 10.3583 1.25 13C1.25 15.2264 2.51532 17.1572 4.36606 18.1126C4.60297 18.2349 4.72143 18.2961 4.83872 18.2597C4.95601 18.2234 5.03299 18.0802 5.18695 17.7939C5.34702 17.4961 5.55083 17.2161 5.79802 16.9632C5.82821 16.9323 5.85929 16.9023 5.89119 16.8732L7.02762 15.8372C7.22143 15.6606 7.43792 15.524 7.66679 15.4272C8.04822 15.2659 8.23894 15.1853 8.28926 15.0988C8.33957 15.0124 8.31799 14.8278 8.27484 14.4587C8.15013 13.3917 8.49555 12.2841 9.29802 11.4632C9.3282 11.4323 9.35927 11.4023 9.39118 11.3732L10.5276 10.3372C11.4283 9.51615 12.819 9.56148 13.6643 10.4395L14.6686 11.4826C15.4811 12.2918 15.8357 13.3864 15.7325 14.4447C15.6961 14.8181 15.6779 15.0049 15.7305 15.0906C15.783 15.1764 15.9777 15.2528 16.3672 15.4057C16.6597 15.5205 16.9325 15.6987 17.1643 15.9395L18.1686 16.9826C18.4586 17.2715 18.6903 17.5967 18.8637 17.9437C19.0045 18.2256 19.0749 18.3665 19.1887 18.407C19.3024 18.4475 19.4196 18.3948 19.6538 18.2893C21.4792 17.4671 22.75 15.6319 22.75 13.5C22.75 11.0285 21.0422 8.95589 18.7423 8.39786C18.4989 8.3388 18.3772 8.30927 18.3147 8.23828C18.2522 8.1673 18.2385 8.04461 18.2112 7.79924C17.8628 4.67731 15.2149 2.25 12 2.25C9.07671 2.25 6.62272 4.25653 5.93931 6.96783Z',
  d10: 'M10.907 13.036L12.0434 12L13.0678 13.064C13.6441 13.624 13.6441 14.548 13.0678 15.108C12.7797 15.36 12.4468 15.5 12.0434 15.5C11.6401 15.5 11.224 15.332 10.9358 15.052C10.3596 14.492 10.3596 13.596 10.907 13.036Z',
  d11: 'M7.40701 18.536L8.54345 17.5L9.56783 18.564C10.1441 19.124 10.1441 20.048 9.56783 20.608C9.27973 20.86 8.9468 21 8.54345 21C8.14009 21 7.72396 20.832 7.43585 20.552C6.85963 19.992 6.8596 19.096 7.40701 18.536Z',
  d12: 'M14.407 18.536L15.5434 17.5L16.5678 18.564C17.1441 19.124 17.1441 20.048 16.5678 20.608C16.2797 20.86 15.9468 21 15.5434 21C15.1401 21 14.724 20.832 14.4358 20.552C13.8596 19.992 13.8596 19.096 14.407 18.536Z',
  d13: 'M13.6004 12.5358C14.4698 13.3913 14.4665 14.7946 13.5905 15.6459L13.5764 15.6596L13.5616 15.6726C13.1484 16.0339 12.6433 16.25 12.0434 16.25C11.4464 16.25 10.8423 16.007 10.4131 15.5899C9.53631 14.7377 9.53602 13.3656 10.3707 12.5118L10.3858 12.4963L12.0775 10.9541L13.6004 12.5358Z',
  d14: 'M10.1004 18.0358C10.9698 18.8913 10.9665 20.2946 10.0905 21.1459L10.0764 21.1596L10.0616 21.1726C9.64845 21.5339 9.14333 21.75 8.54344 21.75C7.94636 21.75 7.34229 21.507 6.91314 21.0899C6.03631 20.2377 6.03602 18.8656 6.87068 18.0118L6.88578 17.9963L8.57753 16.4541L10.1004 18.0358Z',
  d15: 'M17.1004 18.0358C17.9698 18.8913 17.9665 20.2946 17.0905 21.1459L17.0764 21.1596L17.0616 21.1726C16.6484 21.5339 16.1433 21.75 15.5434 21.75C14.9464 21.75 14.3423 21.507 13.9131 21.0899C13.0363 20.2377 13.036 18.8656 13.8707 18.0118L13.8858 17.9963L15.5775 16.4541L17.1004 18.0358Z',
  d16: 'M5.853 7.36454C3.22664 7.89643 1.25 10.217 1.25 13C1.25 15.4491 2.78121 17.5406 4.93854 18.3694C5.10959 17.8563 5.39662 17.374 5.79801 16.9633L5.8433 16.917L8.30612 14.6719C8.10604 13.5411 8.44197 12.3391 9.29801 11.4633L9.3433 11.417L12.1457 8.8623L14.6686 11.4828C15.4828 12.2937 15.8373 13.3913 15.7319 14.4518L18.1686 16.9828C18.6107 17.4231 18.9173 17.9479 19.0882 18.5055C21.2114 17.8324 22.75 15.8459 22.75 13.5C22.75 10.8541 20.7927 8.66534 18.2469 8.30273C18.1428 4.94224 15.3858 2.25 12 2.25C8.93585 2.25 6.38731 4.45456 5.853 7.36454Z',
} as const;

export const IconCloudMidRainStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-mid-rain-stroke-rounded IconCloudMidRainStrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCloudMidRainDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-mid-rain-duotone-rounded IconCloudMidRainDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCloudMidRainTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-mid-rain-twotone-rounded IconCloudMidRainTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <g 
        opacity="var(--icon-opacity)">
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      </g>
    </TheIconWrapper>
  );
};

export const IconCloudMidRainSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-mid-rain-solid-rounded IconCloudMidRainSolidRounded"
    >
      <path 
        d={d.d6} 
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
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCloudMidRainBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-mid-rain-bulk-rounded IconCloudMidRainBulkRounded"
    >
      <path 
        d={d.d6} 
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
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCloudMidRainStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-mid-rain-stroke-sharp IconCloudMidRainStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCloudMidRainSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-mid-rain-solid-sharp IconCloudMidRainSolidSharp"
    >
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCloudMidRain: TheIconSelfPack = {
  name: 'CloudMidRain',
  StrokeRounded: IconCloudMidRainStrokeRounded,
  DuotoneRounded: IconCloudMidRainDuotoneRounded,
  TwotoneRounded: IconCloudMidRainTwotoneRounded,
  SolidRounded: IconCloudMidRainSolidRounded,
  BulkRounded: IconCloudMidRainBulkRounded,
  StrokeSharp: IconCloudMidRainStrokeSharp,
  SolidSharp: IconCloudMidRainSolidSharp,
};