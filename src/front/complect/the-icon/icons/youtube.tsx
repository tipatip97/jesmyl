import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 20.5C13.8097 20.5 15.5451 20.3212 17.1534 19.9934C19.1623 19.5839 20.1668 19.3791 21.0834 18.2006C22 17.0221 22 15.6693 22 12.9635V11.0365C22 8.33073 22 6.97787 21.0834 5.79937C20.1668 4.62088 19.1623 4.41613 17.1534 4.00662C15.5451 3.67877 13.8097 3.5 12 3.5C10.1903 3.5 8.45489 3.67877 6.84656 4.00662C4.83766 4.41613 3.83321 4.62088 2.9166 5.79937C2 6.97787 2 8.33073 2 11.0365V12.9635C2 15.6693 2 17.0221 2.9166 18.2006C3.83321 19.3791 4.83766 19.5839 6.84656 19.9934C8.45489 20.3212 10.1903 20.5 12 20.5Z',
  d2: 'M15.9621 12.3129C15.8137 12.9187 15.0241 13.3538 13.4449 14.2241C11.7272 15.1705 10.8684 15.6438 10.1728 15.4615C9.9372 15.3997 9.7202 15.2911 9.53799 15.1438C9 14.7089 9 13.8059 9 12C9 10.1941 9 9.29112 9.53799 8.85618C9.7202 8.70886 9.9372 8.60029 10.1728 8.53854C10.8684 8.35621 11.7272 8.82945 13.4449 9.77593C15.0241 10.6462 15.8137 11.0813 15.9621 11.6871C16.0126 11.8933 16.0126 12.1067 15.9621 12.3129Z',
  d3: 'M17.1534 19.9934C15.5451 20.3212 13.8097 20.5 12 20.5C10.1903 20.5 8.45489 20.3212 6.84656 19.9934C4.83766 19.5839 3.83321 19.3791 2.9166 18.2006C2 17.0221 2 15.6693 2 12.9635V11.0365C2 8.33073 2 6.97787 2.9166 5.79937C3.83321 4.62088 4.83766 4.41613 6.84656 4.00662C8.45489 3.67877 10.1903 3.5 12 3.5C13.8097 3.5 15.5451 3.67877 17.1534 4.00662C19.1623 4.41613 20.1668 4.62088 21.0834 5.79937C22 6.97787 22 8.33073 22 11.0365V12.9635C22 15.6693 22 17.0221 21.0834 18.2006C20.1668 19.3791 19.1623 19.5839 17.1534 19.9934ZM13.4449 14.2241C15.0241 13.3538 15.8137 12.9187 15.9621 12.3129C16.0126 12.1067 16.0126 11.8933 15.9621 11.6871C15.8137 11.0813 15.0241 10.6462 13.4449 9.77593C11.7272 8.82945 10.8684 8.35621 10.1728 8.53854C9.9372 8.60029 9.7202 8.70887 9.53799 8.85618C9 9.29112 9 10.1941 9 12C9 13.8059 9 14.7089 9.53799 15.1438C9.7202 15.2911 9.9372 15.3997 10.1728 15.4615C10.8684 15.6438 11.7272 15.1705 13.4449 14.2241Z',
  d4: 'M6.69674 3.27174C8.35573 2.93356 10.1414 2.75 12 2.75C13.8586 2.75 15.6443 2.93356 17.3032 3.27174L17.4305 3.29766C19.3251 3.68329 20.5875 3.94024 21.6754 5.33892C22.7516 6.72258 22.751 8.3272 22.75 10.8124V13.1876C22.751 15.6728 22.7516 17.2774 21.6754 18.6611C20.5875 20.0598 19.3251 20.3167 17.4305 20.7023L17.3032 20.7283C15.6443 21.0664 13.8586 21.25 12 21.25C10.1414 21.25 8.35573 21.0664 6.69674 20.7283L6.56946 20.7023C4.67483 20.3167 3.41243 20.0598 2.32458 18.6611C1.2484 17.2774 1.249 15.6728 1.24993 13.1876L1.24993 10.8124C1.249 8.3272 1.2484 6.72258 2.32458 5.33892C3.41243 3.94024 4.67483 3.68329 6.56946 3.29766L6.69674 3.27174ZM11.2945 8.25224C11.813 8.46986 12.4429 8.82163 13.213 9.25173C13.3144 9.30834 13.4163 9.36458 13.5183 9.42088C14.0217 9.69878 14.528 9.9783 14.9949 10.314C15.4145 10.6157 15.8126 10.9896 15.9444 11.5349C16.0184 11.841 16.0184 12.159 15.9444 12.4651C15.8126 13.0104 15.4145 13.3843 14.9949 13.686C14.528 14.0217 14.0216 14.3013 13.5182 14.5792C13.4162 14.6355 13.3144 14.6917 13.213 14.7483C12.4429 15.1784 11.8131 15.5301 11.2945 15.7478C10.4515 16.1015 9.55759 16.1302 8.82288 15.5282C8.36304 15.1514 8.20049 14.6119 8.12917 14.0683C7.95682 12.7544 7.95674 11.2462 8.12917 9.93172C8.20049 9.38806 8.36304 8.84858 8.82288 8.47181C9.55759 7.86983 10.4515 7.89845 11.2945 8.25224Z',
  d5: 'M11.9999 2.75C10.1413 2.75 8.3556 2.93356 6.69662 3.27174L6.56934 3.29766C4.67471 3.68329 3.41231 3.94024 2.32445 5.33892C1.24828 6.72258 1.24888 8.3272 1.24981 10.8124V13.1876C1.24888 15.6728 1.24828 17.2774 2.32445 18.6611C3.41231 20.0598 4.67471 20.3167 6.56934 20.7023L6.69662 20.7283C8.3556 21.0664 10.1413 21.25 11.9999 21.25C13.8585 21.25 15.6441 21.0664 17.3031 20.7283L17.4304 20.7023C19.325 20.3167 20.5874 20.0598 21.6753 18.6611C22.7515 17.2774 22.7509 15.6728 22.7499 13.1876V10.8124C22.7509 8.3272 22.7515 6.72258 21.6753 5.33892C20.5874 3.94024 19.325 3.68329 17.4304 3.29766L17.3031 3.27174C15.6441 2.93356 13.8585 2.75 11.9999 2.75Z',
  d6: 'M13.213 9.25173C12.4429 8.82163 11.813 8.46986 11.2945 8.25224C10.4515 7.89845 9.55759 7.86983 8.82288 8.47181C8.36304 8.84858 8.20049 9.38806 8.12917 9.93172C7.95674 11.2462 7.95682 12.7544 8.12917 14.0683C8.20049 14.6119 8.36304 15.1514 8.82288 15.5282C9.55759 16.1302 10.4515 16.1015 11.2945 15.7478C11.8131 15.5301 12.4429 15.1784 13.213 14.7483C13.8149 14.4122 14.4334 14.0897 14.9949 13.686C15.4145 13.3843 15.8126 13.0104 15.9444 12.4651C16.0184 12.159 16.0184 11.841 15.9444 11.5349C15.8126 10.9896 15.4145 10.6157 14.9949 10.314C14.4334 9.91029 13.8149 9.58784 13.213 9.25173Z',
  d7: 'M16 12L8.99982 8V16L16 12Z',
  d8: 'M22 5C19.2145 4.37208 15.752 4 12 4C8.24798 4 4.78554 4.37208 2 5V19C4.78554 19.6279 8.24798 20 12 20C15.752 20 19.2145 19.6279 22 19V5Z',
  d9: 'M12 3.25C8.20223 3.25 4.68347 3.62627 1.83507 4.26836L1.25 4.40025L1.25 19.5998L1.83507 19.7316C4.68347 20.3737 8.20223 20.75 12 20.75C15.7978 20.75 19.3165 20.3737 22.1649 19.7316L22.75 19.5998L22.75 4.40025L22.1649 4.26836C19.3165 3.62627 15.7978 3.25 12 3.25ZM9 7.5L17 12L9 16.5L9 7.5Z',
} as const;

export const IconYoutubeStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="youtube-stroke-rounded IconYoutubeStrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconYoutubeDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="youtube-duotone-rounded IconYoutubeDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconYoutubeTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="youtube-twotone-rounded IconYoutubeTwotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconYoutubeSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="youtube-solid-rounded IconYoutubeSolidRounded"
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

export const IconYoutubeBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="youtube-bulk-rounded IconYoutubeBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconYoutubeStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="youtube-stroke-sharp IconYoutubeStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconYoutubeSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="youtube-solid-sharp IconYoutubeSolidSharp"
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

export const iconPackOfYoutube: TheIconSelfPack = {
  name: 'Youtube',
  StrokeRounded: IconYoutubeStrokeRounded,
  DuotoneRounded: IconYoutubeDuotoneRounded,
  TwotoneRounded: IconYoutubeTwotoneRounded,
  SolidRounded: IconYoutubeSolidRounded,
  BulkRounded: IconYoutubeBulkRounded,
  StrokeSharp: IconYoutubeStrokeSharp,
  SolidSharp: IconYoutubeSolidSharp,
};