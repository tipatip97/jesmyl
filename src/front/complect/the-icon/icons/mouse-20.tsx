import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 6V2.5M12 12V10',
  d2: 'M7.32948 4.4758C8.3873 4.23124 9.44531 3.70349 10.5038 2.89255C11.2805 2.29747 11.6689 1.99993 12.0012 2C12.3334 2.00007 12.7219 2.29794 13.4988 2.89369C14.5555 3.70396 15.6126 4.23133 16.6698 4.47578C17.4472 4.65552 17.8358 4.74538 18.0319 4.92956C18.228 5.11373 18.3175 5.40051 18.4964 5.97405C20.7629 13.2374 19.2955 19.4907 13.0181 21.7565C12.5682 21.9188 12.3433 22 12.0018 22C11.6603 22 11.4354 21.9188 10.9855 21.7565C4.70756 19.4907 3.23607 13.2373 5.50297 5.97386C5.68195 5.4004 5.77144 5.11367 5.96751 4.92951C6.16359 4.74535 6.55222 4.6555 7.32948 4.4758Z',
  d3: 'M10.5 7.5C10.5 7.03406 10.5 6.80109 10.5761 6.61732C10.6776 6.37229 10.8723 6.17761 11.1173 6.07612C11.3011 6 11.5341 6 12 6C12.4659 6 12.6989 6 12.8827 6.07612C13.1277 6.17761 13.3224 6.37229 13.4239 6.61732C13.5 6.80109 13.5 7.03406 13.5 7.5V8.5C13.5 8.96594 13.5 9.19891 13.4239 9.38268C13.3224 9.62771 13.1277 9.82239 12.8827 9.92388C12.6989 10 12.4659 10 12 10C11.5341 10 11.3011 10 11.1173 9.92388C10.8723 9.82239 10.6776 9.62771 10.5761 9.38268C10.5 9.19891 10.5 8.96594 10.5 8.5V7.5Z',
  d4: 'M14.5 17C14.0126 17.6704 13.4275 18.2232 12.7332 18.6351C12.4273 18.8166 12.2743 18.9074 12 18.9074C11.7257 18.9074 11.5727 18.8166 11.2668 18.6351C10.5725 18.2232 9.98741 17.6704 9.5 17',
  d5: 'M10.5038 2.89255C9.44531 3.70349 8.3873 4.23124 7.32948 4.4758C6.55222 4.6555 6.16359 4.74535 5.96751 4.92951C5.77144 5.11367 5.68195 5.4004 5.50297 5.97386C3.23607 13.2373 4.70756 19.4907 10.9855 21.7565C11.4353 21.9188 11.6603 22 12.0018 22C12.3433 22 12.5682 21.9188 13.0181 21.7565C19.2955 19.4907 20.7629 13.2374 18.4964 5.97405C18.3175 5.40053 18.228 5.11373 18.0319 4.92956C17.8358 4.74538 17.4472 4.65552 16.6698 4.47578C15.6126 4.23133 14.5555 3.70396 13.4988 2.89369C12.7219 2.29794 12.3334 2.00007 12.0012 2C11.6689 1.99993 11.2805 2.29747 10.5038 2.89255ZM10.5761 6.61732C10.5 6.80109 10.5 7.03406 10.5 7.5V8.5C10.5 8.96594 10.5 9.19891 10.5761 9.38268C10.6776 9.62771 10.8723 9.82239 11.1173 9.92388C11.3011 10 11.5341 10 12 10C12.4659 10 12.6989 10 12.8827 9.92388C13.1277 9.82239 13.3224 9.62771 13.4239 9.38268C13.5 9.19891 13.5 8.96594 13.5 8.5V7.5C13.5 7.03406 13.5 6.80109 13.4239 6.61732C13.3224 6.37229 13.1277 6.17761 12.8827 6.07612C12.6989 6 12.4659 6 12 6C11.5341 6 11.3011 6 11.1173 6.07612C10.8723 6.17761 10.6776 6.37229 10.5761 6.61732Z',
  d6: 'M11.25 1.50744C11.25 1.38576 11.1218 1.30935 11.0189 1.37429C10.7541 1.54143 10.4125 1.80312 10.0477 2.08263L10.0477 2.08264C9.05524 2.843 8.09312 3.31493 7.16058 3.53053C6.79519 3.61499 6.45376 3.69392 6.20819 3.77016C5.96474 3.84576 5.68142 3.95477 5.4541 4.16828C5.24882 4.36108 5.12691 4.58562 5.03645 4.80295C4.95375 5.00165 4.86911 5.27293 4.78707 5.53586C3.62551 9.25767 3.39436 12.8023 4.32473 15.7504C5.26564 18.732 7.37611 21.0366 10.7309 22.2474C11.1427 22.3962 11.5278 22.5355 12.0019 22.5354C12.4759 22.5354 12.861 22.3962 13.2727 22.2474C16.6274 21.0365 18.7368 18.7319 19.6766 15.7503C20.6058 12.8021 20.3737 9.25769 19.2124 5.53609C19.1304 5.27312 19.0458 5.0018 18.9631 4.80308C18.8726 4.58574 18.7507 4.36116 18.5454 4.16834C18.3181 3.95482 18.0348 3.84579 17.7913 3.77019C17.5457 3.69393 17.2042 3.61499 16.8388 3.53051C15.9068 3.31502 14.9457 2.84349 13.9552 2.08398C13.5903 1.80414 13.2487 1.54218 12.9839 1.37485C12.8797 1.30906 12.75 1.38643 12.75 1.5096V4.62669C12.75 4.77691 12.75 4.85202 12.7714 4.90557C12.7905 4.95349 12.8037 4.97322 12.8406 5.00922C12.8819 5.04946 12.9778 5.0892 13.1697 5.16866C13.5985 5.34628 13.9392 5.68696 14.1168 6.11576C14.199 6.31426 14.2266 6.5096 14.2387 6.68724C14.25 6.85257 14.25 7.04941 14.25 7.26369V8.30721C14.25 8.52149 14.25 8.71834 14.2387 8.88366C14.2266 9.0613 14.199 9.25664 14.1168 9.45515C13.9392 9.88395 13.5985 10.2246 13.1697 10.4022C12.9778 10.4817 12.8819 10.5214 12.8406 10.5617C12.8037 10.5977 12.7905 10.6174 12.7714 10.6653C12.75 10.7189 12.75 10.794 12.75 10.9442V11.7854C12.75 12.1997 12.4142 12.5354 12 12.5354C11.5858 12.5354 11.25 12.1997 11.25 11.7854V10.9442C11.25 10.794 11.25 10.7189 11.2286 10.6653C11.2095 10.6174 11.1963 10.5977 11.1594 10.5617C11.1181 10.5214 11.0222 10.4817 10.8303 10.4022C10.4015 10.2246 10.0608 9.88395 9.88321 9.45515C9.80099 9.25664 9.77338 9.0613 9.76126 8.88366C9.74998 8.71834 9.74999 8.52149 9.75 8.30722V8.30721V8.30721L9.75 7.28545L9.75 7.26369V7.26369V7.26368C9.74999 7.04941 9.74998 6.85257 9.76126 6.68724C9.77338 6.5096 9.80099 6.31426 9.88321 6.11576C10.0608 5.68696 10.4015 5.34628 10.8303 5.16866C11.0222 5.0892 11.1181 5.04946 11.1594 5.00923C11.1963 4.97322 11.2095 4.95349 11.2286 4.90557C11.25 4.85202 11.25 4.77691 11.25 4.6267V1.50744ZM12.4961 9.02768C12.3885 9.03502 12.2442 9.03545 12.0024 9.03545L12 9.03545L11.9985 9.03545C11.7562 9.03545 11.6117 9.03503 11.5039 9.02768C11.4809 9.02611 11.4625 9.02436 11.4479 9.02266C11.4375 9.02146 11.4324 9.02086 11.3985 9.00831C11.3647 8.99576 11.3631 8.99468 11.36 8.99254C11.3335 8.97468 11.3108 8.95192 11.2929 8.9255C11.2908 8.92233 11.2897 8.92075 11.2771 8.88691C11.2646 8.85308 11.264 8.8479 11.2628 8.83756C11.2611 8.82297 11.2593 8.80453 11.2578 8.78155C11.2504 8.67355 11.25 8.52868 11.25 8.28545V7.28545C11.25 7.04222 11.2504 6.89736 11.2578 6.78935C11.2593 6.76637 11.2611 6.74794 11.2628 6.73334C11.264 6.723 11.2646 6.71783 11.2771 6.68399C11.2897 6.65015 11.2908 6.64856 11.2929 6.64539C11.3108 6.61899 11.3335 6.59623 11.3599 6.57837C11.3631 6.57622 11.3647 6.57515 11.3985 6.5626C11.4324 6.55004 11.4376 6.54944 11.4479 6.54824C11.4625 6.54654 11.4809 6.54479 11.5039 6.54323C11.6119 6.53586 11.7568 6.53545 12 6.53545C12.2432 6.53545 12.3881 6.53586 12.4961 6.54323C12.5191 6.54479 12.5375 6.54654 12.5521 6.54824C12.5624 6.54944 12.5676 6.55004 12.6015 6.5626C12.6353 6.57515 12.6369 6.57623 12.6401 6.57837C12.6665 6.59623 12.6892 6.61897 12.7071 6.64536C12.7092 6.64854 12.7103 6.65013 12.7228 6.68398C12.7354 6.71783 12.736 6.72302 12.7372 6.73338C12.7389 6.74797 12.7407 6.76639 12.7422 6.78935C12.7496 6.89736 12.75 7.04222 12.75 7.28545V8.28545C12.75 8.52868 12.7496 8.67355 12.7422 8.78155C12.7407 8.80452 12.7389 8.82295 12.7372 8.83754C12.736 8.8479 12.7354 8.85307 12.7229 8.88692C12.7103 8.92076 12.7092 8.92235 12.7071 8.92552C12.6892 8.95192 12.6665 8.97468 12.6401 8.99254C12.6369 8.99468 12.6353 8.99575 12.6015 9.0083C12.5676 9.02086 12.5625 9.02146 12.5521 9.02266C12.5375 9.02436 12.5191 9.02611 12.4961 9.02768ZM10.1067 16.3445C9.86309 16.0094 9.39404 15.9353 9.05901 16.1789C8.72399 16.4225 8.64986 16.8915 8.89344 17.2265C9.43437 17.9706 10.0932 18.5964 10.8841 19.0656L10.9253 19.0901C11.2049 19.2567 11.5174 19.4429 12.0001 19.4429C12.4827 19.4429 12.7952 19.2567 13.0748 19.0901L13.116 19.0656C13.907 18.5964 14.5657 17.9706 15.1067 17.2265C15.3502 16.8915 15.2761 16.4225 14.9411 16.1789C14.6061 15.9353 14.137 16.0094 13.8934 16.3445C13.4596 16.9412 12.9481 17.4211 12.3506 17.7756C12.2714 17.8226 12.2152 17.8558 12.1658 17.8831C12.1178 17.9096 12.0892 17.9231 12.0705 17.9308C12.0542 17.9374 12.0466 17.9392 12.0426 17.9399C12.0383 17.9408 12.0262 17.9429 12.0001 17.9429C11.9739 17.9429 11.9618 17.9408 11.9575 17.9399C11.9535 17.9392 11.9459 17.9374 11.9296 17.9308C11.9109 17.9231 11.8823 17.9096 11.8343 17.8831C11.7849 17.8558 11.7287 17.8226 11.6495 17.7756C11.052 17.4211 10.5406 16.9412 10.1067 16.3445Z',
  d7: 'M11.0189 1.374C11.2822 1.20782 11.614 1.03507 12.0014 1.03516C12.3888 1.03524 12.7206 1.20823 12.9839 1.37456C13.2487 1.54189 13.5903 1.80385 13.9552 2.08368C14.9457 2.8432 15.9068 3.31473 16.8388 3.53022C17.2042 3.6147 17.5457 3.69364 17.7913 3.7699C18.0348 3.8455 18.3181 3.95453 18.5454 4.16805C18.7507 4.36087 18.8726 4.58544 18.9631 4.80279C19.0458 5.00151 19.1304 5.27283 19.2124 5.53579C20.3737 9.25739 20.6058 12.8019 19.6766 15.75C18.7368 18.7316 16.6274 21.0362 13.2727 22.2471C12.861 22.3959 12.4759 22.5352 12.0019 22.5352C11.5278 22.5352 11.1427 22.3959 10.7309 22.2471C7.37611 21.0363 5.26564 18.7317 4.32473 15.7502C3.39436 12.802 3.62551 9.25738 4.78707 5.53557C4.86911 5.27264 4.95375 5.00136 5.03645 4.80265C5.12691 4.58533 5.24882 4.36078 5.4541 4.16798C5.68142 3.95448 5.96474 3.84546 6.20819 3.76987C6.45376 3.69362 6.79519 3.6147 7.16058 3.53024C8.09312 3.31464 9.05524 2.84271 10.0477 2.08235L10.0477 2.08233C10.4125 1.80283 10.7541 1.54113 11.0189 1.374Z',
  d8: 'M12.75 1.23884C12.5328 1.12578 12.2817 1.03522 12.0014 1.03516C11.7199 1.0351 11.4678 1.12627 11.25 1.23987V5.06093C11.1154 5.07808 10.9737 5.10898 10.8303 5.16837C10.4015 5.34598 10.0608 5.68666 9.88321 6.11546C9.80099 6.31397 9.77338 6.50931 9.76126 6.68695C9.74998 6.85224 9.74999 7.04905 9.75 7.26328V7.26336V7.2634V7.28516V8.30691V8.30695V8.30704C9.74999 8.52126 9.74998 8.71807 9.76126 8.88337C9.77338 9.06101 9.80099 9.25635 9.88321 9.45485C10.0608 9.88365 10.4015 10.2243 10.8303 10.4019C10.9737 10.4613 11.1154 10.4922 11.25 10.5094V11.7852C11.25 12.1994 11.5858 12.5352 12 12.5352C12.4142 12.5352 12.75 12.1994 12.75 11.7852V10.5094C12.8846 10.4922 13.0263 10.4613 13.1697 10.4019C13.5985 10.2243 13.9392 9.88365 14.1168 9.45485C14.199 9.25635 14.2266 9.06101 14.2387 8.88337C14.25 8.71804 14.25 8.52119 14.25 8.30692V7.2634C14.25 7.04912 14.25 6.85227 14.2387 6.68695C14.2266 6.50931 14.199 6.31397 14.1168 6.11546C13.9392 5.68666 13.5985 5.34598 13.1697 5.16837C13.0263 5.10898 12.8846 5.07808 12.75 5.06093V1.23884ZM12.4961 9.02738C12.3884 9.03473 12.2439 9.03516 12.0017 9.03516L12 9.03516C11.7568 9.03516 11.6119 9.03475 11.5039 9.02738C11.4371 9.02282 11.4087 9.01672 11.4013 9.01485C11.3425 8.98958 11.2956 8.94268 11.2703 8.88385C11.2684 8.87649 11.2623 8.84809 11.2578 8.78126C11.2504 8.67325 11.25 8.52839 11.25 8.28516V7.28516C11.25 7.04193 11.2504 6.89706 11.2578 6.78906C11.2623 6.72223 11.2684 6.69382 11.2703 6.68647C11.2956 6.62763 11.3425 6.58074 11.4013 6.55546C11.4087 6.55359 11.4371 6.54749 11.5039 6.54293C11.6119 6.53556 11.7568 6.53516 12 6.53516C12.2432 6.53516 12.3881 6.53556 12.4961 6.54293C12.5629 6.54749 12.5913 6.55359 12.5987 6.55546C12.6575 6.58074 12.7044 6.62764 12.7297 6.68647C12.7316 6.69382 12.7377 6.72223 12.7422 6.78906C12.7496 6.89706 12.75 7.04193 12.75 7.28516V8.28516C12.75 8.52839 12.7496 8.67325 12.7422 8.78126C12.7377 8.84809 12.7316 8.87649 12.7297 8.88385C12.7044 8.94268 12.6575 8.98958 12.5987 9.01485C12.5913 9.01672 12.5629 9.02282 12.4961 9.02738Z',
  d9: 'M9.05901 16.1786C9.39404 15.935 9.86309 16.0091 10.1067 16.3442C10.5406 16.9409 11.052 17.4208 11.6495 17.7753C11.7287 17.8223 11.7849 17.8555 11.8343 17.8828C11.8823 17.9093 11.9109 17.9228 11.9296 17.9305C11.9459 17.9371 11.9535 17.9389 11.9575 17.9396C11.9618 17.9405 11.9739 17.9426 12.0001 17.9426C12.0262 17.9426 12.0383 17.9405 12.0426 17.9396C12.0466 17.9389 12.0542 17.9371 12.0705 17.9305C12.0892 17.9228 12.1178 17.9093 12.1658 17.8828C12.2152 17.8555 12.2714 17.8223 12.3506 17.7753C12.9481 17.4208 13.4596 16.9409 13.8934 16.3442C14.137 16.0091 14.6061 15.935 14.9411 16.1786C15.2761 16.4222 15.3502 16.8912 15.1067 17.2262C14.5657 17.9703 13.907 18.5961 13.116 19.0653C13.1023 19.0734 13.0886 19.0816 13.0748 19.0899C12.7952 19.2564 12.4827 19.4426 12.0001 19.4426C11.5174 19.4426 11.2049 19.2564 10.9253 19.0899C10.9115 19.0816 10.8978 19.0734 10.8841 19.0653C10.0932 18.5961 9.43437 17.9703 8.89344 17.2262C8.64986 16.8912 8.72399 16.4222 9.05901 16.1786Z',
  d10: 'M12 7V2M12 13V11',
  d11: 'M13.5 7H10.5V11H13.5V7Z',
  d12: 'M14.5 17C13.8497 17.8945 13.0254 18.5797 12 19C10.9746 18.5797 10.1503 17.8945 9.5 17',
  d13: 'M17.8727 4.96811C15.2563 4.4074 12.7291 3.30149 12.0104 2.01586C12.0066 2.00894 11.9969 2.00882 11.993 2.01574C11.3545 3.16052 8.69603 4.43192 6.06623 5.00547C4.10315 9.37797 4.148 12.6164 5.30506 16.1762C6.00182 17.7769 6.83825 19.204 9.01997 20.6856C10.7083 21.7179 11.9922 22 11.9922 22C11.9922 22 13.4208 21.691 15.1366 20.6057C16.5859 19.5341 18.0664 17.9112 18.8113 15.7636C20.1983 11.7652 19.287 8.0778 17.8727 4.96811Z',
  d14: 'M12.751 5.98848V1.5C13.1566 2.00193 13.9063 2.49209 14.8735 2.92254C15.9173 3.3871 17.0943 3.7302 18.051 3.93695L18.4102 4.01458L18.5689 4.3458C20.3291 8.01983 20.7238 11.9798 19.6779 15.3196C18.6247 18.6827 16.1182 21.3767 12.1986 22.4461L12.001 22.5L11.8034 22.4461C7.88384 21.3767 5.37736 18.6827 4.32415 15.3196C3.27825 11.9798 3.67287 8.01983 5.4331 4.3458L5.59179 4.01458L5.95103 3.93695C6.90772 3.7302 8.08477 3.3871 9.12861 2.92253C10.0956 2.49215 10.8453 2.00209 11.251 1.50025V5.98848H10.501C10.0868 5.98848 9.75098 6.32394 9.75098 6.73775V10.7339C9.75098 11.1477 10.0868 11.4832 10.501 11.4832H11.251V12.732H12.751V11.4832H13.501C13.9152 11.4832 14.251 11.1477 14.251 10.7339V6.73775C14.251 6.32394 13.9152 5.98848 13.501 5.98848H12.751ZM13.8936 16.5586C13.3796 17.2655 12.7547 17.8116 12.0002 18.1784C11.2456 17.8116 10.6207 17.2655 10.1068 16.5586L8.89355 17.4407C9.61704 18.4358 10.5485 19.2152 11.7157 19.6936C11.898 19.7683 12.1023 19.7683 12.2846 19.6936C13.4518 19.2152 14.3833 18.4358 15.1068 17.4407L13.8936 16.5586Z',
  d15: 'M11.251 9.98462V7.48703H12.751V9.98462H11.251Z',
} as const;

export const IconMouse20StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-20-stroke-rounded IconMouse20StrokeRounded"
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMouse20DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-20-duotone-rounded IconMouse20DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMouse20TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-20-twotone-rounded IconMouse20TwotoneRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMouse20SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-20-solid-rounded IconMouse20SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMouse20BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-20-bulk-rounded IconMouse20BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMouse20StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-20-stroke-sharp IconMouse20StrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMouse20SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-20-solid-sharp IconMouse20SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMouse20: TheIconSelfPack = {
  name: 'Mouse20',
  StrokeRounded: IconMouse20StrokeRounded,
  DuotoneRounded: IconMouse20DuotoneRounded,
  TwotoneRounded: IconMouse20TwotoneRounded,
  SolidRounded: IconMouse20SolidRounded,
  BulkRounded: IconMouse20BulkRounded,
  StrokeSharp: IconMouse20StrokeSharp,
  SolidSharp: IconMouse20SolidSharp,
};