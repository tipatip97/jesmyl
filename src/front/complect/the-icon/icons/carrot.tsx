import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M8.20026 9.07541C6.09891 11.1768 0.635392 20.0024 2.31647 21.6835C3.99756 23.3646 12.8232 17.9011 14.9246 15.7997C17.0259 13.6984 18.2868 12.4376 14.9246 9.07541C11.5624 5.71325 10.3016 6.97406 8.20026 9.07541Z',
  d2: 'M14.5 15.5L13 14',
  d3: 'M7 11L8.5 12.5',
  d4: 'M9 19L8 18',
  d5: 'M15 2C15.5185 2.51852 15.8555 3.63331 15.0001 5.11102M22 9C21.4815 8.48148 20.3668 8.14445 18.8892 9M19.2782 4.72192L17.3339 6.66636',
  d6: 'M15.4549 8.54549C13.7523 6.84292 12.3579 6.06745 10.9726 6.28618C10.2993 6.39251 9.72233 6.72312 9.20534 7.1236C8.70139 7.51398 8.20036 8.01504 7.69233 8.52309L7.66993 8.54549C7.48245 8.73297 7.27274 8.96685 7.04679 9.23897C6.88781 9.43043 6.80832 9.52616 6.81368 9.64226C6.81905 9.75835 6.90912 9.84842 7.08926 10.0286L9.03068 11.9701C9.32356 12.263 9.32354 12.7379 9.03064 13.0308C8.73773 13.3237 8.26286 13.3237 7.96998 13.0308L6.3195 11.3802C6.08418 11.1448 5.96651 11.0271 5.8255 11.0409C5.68448 11.0546 5.59276 11.1912 5.40931 11.4644C4.64548 12.6019 3.85528 13.9056 3.17711 15.1866C2.45756 16.5457 1.8387 17.9261 1.50915 19.097C1.34499 19.6803 1.24132 20.2503 1.25057 20.7594C1.25968 21.26 1.38141 21.8095 1.78614 22.2143C2.19088 22.619 2.7404 22.7407 3.24106 22.7498C3.75013 22.7591 4.32008 22.6554 4.90338 22.4913C6.07433 22.1617 7.45468 21.5429 8.81384 20.8233C9.05331 20.6965 9.17304 20.6331 9.21377 20.5301C9.23038 20.4881 9.23739 20.4415 9.23387 20.3965C9.22524 20.286 9.12827 20.1891 8.93435 19.9951L7.47 18.5308C7.1771 18.2379 7.1771 17.763 7.47 17.4701C7.76289 17.1772 8.23776 17.1772 8.53066 17.4701L10.4411 19.3806C10.601 19.5404 10.6809 19.6203 10.7845 19.6324C10.8881 19.6445 10.9834 19.5857 11.174 19.468C12.3689 18.7299 13.4759 17.9673 14.3245 17.3049C14.5615 17.1198 14.6801 17.0273 14.6884 16.8924C14.6966 16.7574 14.5879 16.6487 14.3705 16.4313L12.47 14.5308C12.1771 14.2379 12.1771 13.763 12.47 13.4701C12.7629 13.1772 13.2378 13.1772 13.5307 13.4701L15.4931 15.4325C15.6966 15.6361 15.7984 15.7378 15.9262 15.7353C16.0539 15.7327 16.1493 15.6294 16.34 15.4228C16.5331 15.2136 16.7145 15.0046 16.8768 14.7951C17.2773 14.2781 17.6079 13.7012 17.7142 13.0278C17.933 11.6425 17.1575 10.2481 15.4549 8.54549Z',
  d7: 'M14.043 1.54286C14.4335 1.15235 15.0667 1.15238 15.4572 1.54293C16.3543 2.44005 16.6539 4.06841 15.6156 5.86201C15.3389 6.33998 14.7272 6.50316 14.2492 6.22647C13.7712 5.94978 13.608 5.338 13.8847 4.86003C14.5573 3.6982 14.1828 3.09698 14.0429 2.95707C13.6524 2.56653 13.6525 1.93337 14.043 1.54286ZM19.7354 4.26479C20.1259 4.65529 20.1259 5.28846 19.7354 5.679L17.7912 7.62344C17.4007 8.01398 16.7675 8.01401 16.3769 7.6235C15.9864 7.233 15.9864 6.59983 16.3769 6.20929L18.3211 4.26485C18.7116 3.87431 19.3448 3.87428 19.7354 4.26479ZM18.1382 8.38459C19.9317 7.34613 21.5601 7.64573 22.4572 8.54293C22.8477 8.93347 22.8477 9.56663 22.4572 9.95714C22.0666 10.3476 21.4334 10.3476 21.0429 9.95707C20.9031 9.81723 20.3021 9.44276 19.1403 10.1154C18.6624 10.3921 18.0506 10.229 17.7739 9.75107C17.4971 9.27312 17.6602 8.66133 18.1382 8.38459Z',
  d8: 'M14.5 15.5L12.3938 13.3938M7 11L9.14909 13.1491M9.389 19.389L7.3938 17.3938',
  d9: 'M15.7049 8.29476C14.0023 6.59219 12.6079 5.81672 11.2226 6.03545C10.5493 6.14177 9.97233 6.47238 9.45534 6.87287C8.95139 7.26325 8.45036 7.76431 7.94233 8.27236L7.91993 8.29476C7.64302 8.57167 7.3176 8.94983 6.96298 9.40288L8.73809 11.1777L7.67748 12.2384L6.06308 10.6243C5.17975 11.8873 4.22575 13.4273 3.42711 14.9358C2.70756 16.295 2.0887 17.6754 1.75915 18.8463C1.59499 19.4296 1.49132 19.9995 1.50057 20.5086C1.50968 21.0093 1.63141 21.5588 2.03614 21.9635C2.44088 22.3683 2.9904 22.49 3.49106 22.4991C4.00013 22.5084 4.57008 22.4047 5.15338 22.2405C6.32433 21.911 7.70468 21.2921 9.06384 20.5726C9.26845 20.4642 9.47364 20.3531 9.67863 20.2396L7.67743 18.2384L8.73809 17.1777L11.0226 19.4622C12.6294 18.4933 14.115 17.4569 15.0825 16.6435L13.1774 14.7384L14.2381 13.6777L16.1711 15.6107C16.5205 15.2544 16.8512 14.9001 17.1268 14.5443C17.5273 14.0274 17.8579 13.4504 17.9642 12.777C18.183 11.3917 17.4075 9.99733 15.7049 8.29476Z',
  d10: 'M14.3203 5.2105C15.1608 3.7586 14.7476 2.86974 14.439 2.5611L15.4997 1.50049C16.3761 2.37704 16.7332 4.03626 15.6185 5.96199L14.3203 5.2105ZM16.1063 6.83348L18.3283 4.61126L19.389 5.67187L17.167 7.89409L16.1063 6.83348ZM18.0383 8.38174C19.9639 7.26678 21.6231 7.62389 22.4997 8.50049L21.439 9.5611C21.1304 9.25251 20.2417 8.83926 18.7899 9.67985L18.0383 8.38174Z',
} as const;

export const IconCarrotStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="carrot-stroke-rounded IconCarrotStrokeRounded"
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCarrotDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="carrot-duotone-rounded IconCarrotDuotoneRounded"
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCarrotTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="carrot-twotone-rounded IconCarrotTwotoneRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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

export const IconCarrotSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="carrot-solid-rounded IconCarrotSolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconCarrotBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="carrot-bulk-rounded IconCarrotBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconCarrotStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="carrot-stroke-sharp IconCarrotStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCarrotSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="carrot-solid-sharp IconCarrotSolidSharp"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCarrot: TheIconSelfPack = {
  name: 'Carrot',
  StrokeRounded: IconCarrotStrokeRounded,
  DuotoneRounded: IconCarrotDuotoneRounded,
  TwotoneRounded: IconCarrotTwotoneRounded,
  SolidRounded: IconCarrotSolidRounded,
  BulkRounded: IconCarrotBulkRounded,
  StrokeSharp: IconCarrotStrokeSharp,
  SolidSharp: IconCarrotSolidSharp,
};