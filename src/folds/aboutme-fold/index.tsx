import { useGradientText } from "@/animations/useGradientText";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function AboutMeFold() {
  const trigger = useRef(null);
  const text = useGradientText();

  useEffect(() => {
    const paths = document.querySelectorAll<SVGPathElement>(".logo path");

    paths.forEach((path) => {
      const length = path.getTotalLength();
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

      gsap.to(path, {
        scrollTrigger: {
          trigger: trigger.current,
          start: "top center",
          end: "center center",
          scrub: false,
          markers: false,
          toggleActions: "play none none reverse",
        },
        strokeDashoffset: 0,
        duration: 4,
        delay: 0.25,
        ease: "power1.inOut",
      });
    });
  }, []);

  return (
    <main
      ref={trigger}
      className="h-full flex flex-col md:h-screen md:flex-row items-center px-4 py-4 max-w-[1280px] mx-auto"
    >
      <div className="md:w-1/2 flex flex-col gap-[1rem]">
        <div>
          <h3>
            <span ref={text}>About me</span>.
          </h3>
        </div>
        <div>
          <h6 className="font-light">
            An avid programming polyglot with a deep appreciation for various
            coding languages, an enthusiastic anime aficionado who enjoys
            exploring different genres, and a passionate musician.
          </h6>
        </div>
        <div>
          <p className="text-[15px] text-[#333333]">
            "The simplest things are often the most profound."
          </p>
        </div>
      </div>
      <div className="md:w-1/2 flex flex-col items-center justify-center">
        <svg
          className="logo max-h-[500px] max-w-[500px] pointer-events-none object-cover relative z-0 col-span-4 flex aspect-square w-full items-center overflow-clip rounded-md md:aspect-auto md:items-end"
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="2481.000000pt"
          height="3507.000000pt"
          viewBox="0 0 2481.000000 3507.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient
              id="gradientStroke"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "#79e7ff", stopOpacity: 1 }}
              />
              <stop
                offset="50%"
                style={{ stopColor: "#238cc8", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#47c5e1", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
          <g
            transform="translate(0.000000,3507.000000) scale(0.100000,-0.100000)"
            fill="none"
            stroke="url(#gradientStroke)"
            stroke-width="65"
          >
            <path
              stroke="url(#gradientStroke)"
              d="M11940 31034 c-19 -2 -84 -9 -144 -14 -348 -34 -913 -184 -1276 -340
-416 -178 -800 -397 -1142 -652 -261 -194 -469 -368 -627 -525 -90 -89 -168
-160 -173 -157 -4 3 -11 -3 -15 -13 -8 -22 -115 -145 -120 -139 -3 2 -15 51
-28 108 -29 123 -46 344 -46 593 -1 202 29 434 75 581 13 43 32 106 41 139 9
33 36 108 60 168 24 59 41 107 39 107 -9 0 -59 -34 -134 -91 -316 -239 -627
-769 -700 -1193 -31 -185 -21 -470 24 -673 l23 -102 -24 -6 c-24 -6 -637 -355
-890 -506 -376 -226 -685 -463 -857 -659 -109 -123 -146 -208 -242 -560 -73
-269 -213 -582 -446 -1003 -110 -199 -119 -220 -105 -234 14 -15 21 -13 73 12
62 31 244 207 357 347 34 42 63 75 65 74 1 -2 -2 -14 -8 -27 -19 -44 -233
-943 -279 -1174 -25 -125 -46 -268 -66 -456 -19 -172 -10 -288 23 -321 25 -25
57 -17 77 20 l14 27 1 -24 c0 -43 100 -662 130 -811 16 -80 66 -284 110 -455
44 -170 101 -394 126 -497 l47 -187 -41 -54 c-53 -69 -72 -114 -72 -177 l0
-50 -63 0 c-70 0 -176 -28 -332 -88 -154 -58 -283 -151 -384 -278 -142 -176
-226 -372 -277 -646 -21 -112 -29 -424 -15 -573 33 -347 158 -850 262 -1058
156 -310 412 -588 654 -710 127 -63 297 -97 378 -74 23 6 27 4 27 -12 0 -10
18 -113 41 -228 173 -888 471 -1697 854 -2318 101 -164 219 -338 303 -449 346
-452 942 -994 1285 -1167 31 -16 57 -34 57 -40 0 -21 61 -88 99 -110 21 -11
45 -33 54 -48 8 -15 63 -177 122 -361 58 -184 140 -442 182 -572 83 -260 85
-280 36 -338 -14 -17 -47 -42 -74 -54 -55 -27 -175 -123 -235 -188 -97 -106
-158 -201 -256 -402 -27 -55 -49 -83 -118 -144 -47 -41 -91 -87 -99 -101 -52
-99 -72 -120 -192 -196 -115 -73 -712 -370 -1013 -504 -602 -269 -1391 -555
-3706 -1346 -1311 -448 -1868 -648 -2145 -770 -223 -99 -869 -437 -1103 -577
l-132 -80 0 -74 0 -74 70 45 c204 131 867 490 1159 628 272 128 865 345 2181
797 2654 912 3345 1178 4182 1615 384 201 410 216 517 301 51 41 95 73 97 71
3 -2 0 -17 -6 -32 -12 -32 -13 -32 64 32 22 18 41 31 43 29 2 -2 -15 -43 -38
-92 -95 -207 -148 -369 -203 -625 -104 -489 -143 -977 -126 -1587 13 -433 33
-603 106 -896 76 -305 168 -538 258 -655 41 -53 76 -89 76 -79 0 3 -24 51 -54
109 -97 185 -173 416 -240 731 -46 216 -63 358 -77 639 -15 298 -6 908 15
1117 38 367 92 680 141 824 73 211 122 327 269 628 201 414 297 548 496 697
41 31 99 81 127 110 35 35 61 53 77 53 22 0 25 -5 32 -57 17 -124 -7 -298 -66
-483 -12 -36 -25 -101 -29 -145 -5 -44 -32 -201 -60 -348 -69 -360 -80 -442
-91 -647 -18 -339 -8 -926 20 -1110 14 -93 180 -685 225 -800 150 -391 591
-1002 889 -1234 220 -172 404 -272 722 -396 513 -200 1017 -318 1539 -361 162
-13 597 -7 694 11 147 26 657 186 1041 327 791 290 1594 743 2265 1278 366
291 660 551 813 717 838 912 1284 1717 1547 2793 87 352 136 666 150 950 10
198 -25 340 -125 502 l-19 32 35 7 c48 9 78 1 201 -52 212 -92 420 -207 628
-347 71 -48 79 -58 101 -117 9 -25 26 -67 39 -95 39 -84 45 -125 54 -353 14
-360 -1 -540 -85 -963 -73 -371 -158 -695 -243 -919 -182 -486 -667 -1353
-1013 -1811 -199 -263 -499 -588 -893 -966 -241 -231 -313 -294 -608 -532
-125 -101 -225 -186 -223 -189 3 -2 38 15 78 38 324 192 655 466 1103 915 378
378 540 564 744 858 255 366 632 1034 811 1437 160 359 300 887 392 1480 40
258 27 823 -22 952 -10 26 -17 48 -15 48 2 0 77 -30 167 -66 347 -140 563
-204 1723 -509 1778 -468 2117 -567 3013 -884 l142 -50 0 88 0 89 -172 62
c-716 257 -1246 414 -2438 725 -2004 522 -1804 467 -2235 617 l-200 70 -65 69
c-54 57 -94 86 -235 167 -93 55 -219 131 -280 171 -122 80 -281 160 -368 186
-56 16 -57 16 -134 -11 l-77 -27 -25 34 c-14 18 -49 56 -76 84 -78 78 -153
245 -190 425 -9 41 -20 77 -24 80 -5 3 -30 106 -55 230 -46 225 -93 541 -141
954 -15 121 -31 243 -36 270 -13 69 -39 438 -39 559 l0 99 64 141 c112 249
156 361 318 817 109 308 175 571 233 935 26 161 14 145 92 128 78 -16 120 -11
322 38 266 65 495 191 671 369 251 253 399 625 451 1135 15 153 6 595 -16 754
-40 291 -101 518 -195 735 -145 332 -280 492 -480 568 -82 31 -90 32 -230 32
-119 -1 -158 -5 -220 -23 -113 -33 -110 -34 -133 31 l-20 57 80 163 c87 174
136 314 177 498 22 103 37 195 91 580 23 162 48 593 41 700 -11 162 -36 360
-61 480 -46 223 -104 489 -119 546 -8 32 -13 60 -11 62 2 2 47 -19 101 -48 54
-28 103 -49 110 -46 8 3 16 1 19 -4 9 -15 35 -12 35 4 0 7 -6 19 -14 25 -8 7
-52 79 -97 162 -46 83 -107 181 -136 219 l-51 69 85 27 c47 15 87 34 90 41 3
7 -17 38 -43 68 -143 162 -174 200 -230 281 l-62 89 93 -3 c73 -3 112 1 177
18 45 13 98 25 116 27 19 3 36 12 39 20 3 9 -51 71 -149 171 -155 159 -245
267 -310 377 -68 114 -68 111 14 66 200 -109 464 -168 701 -157 203 9 279 22
222 36 -16 5 -68 22 -115 40 -47 17 -99 33 -116 35 -44 5 -164 67 -274 143
-268 183 -357 278 -851 898 -397 498 -533 643 -902 960 -228 196 -368 301
-652 489 -417 276 -657 418 -985 582 -124 61 -222 112 -219 113 3 0 66 -27
140 -61 150 -68 260 -111 266 -105 10 9 -159 103 -325 181 -458 215 -975 403
-1428 520 -148 38 -521 112 -754 149 -352 57 -385 59 -1010 61 -322 2 -601 1
-620 -1z m985 -44 c240 -12 409 -31 650 -71 504 -84 796 -154 1215 -291 298
-97 448 -162 872 -374 437 -218 641 -337 1073 -622 367 -242 573 -399 854
-652 302 -270 412 -392 834 -920 303 -378 400 -494 514 -607 134 -133 377
-306 508 -361 l80 -33 -60 6 c-165 17 -350 50 -435 77 -102 33 -235 95 -287
134 -36 28 -63 31 -63 8 0 -21 100 -215 151 -295 61 -94 117 -160 255 -301 68
-70 124 -130 124 -134 0 -4 -56 -5 -124 -2 -120 4 -126 5 -202 42 -81 40 -113
40 -106 0 2 -11 4 -29 5 -40 1 -12 9 -30 18 -40 8 -11 34 -51 57 -90 56 -96
153 -226 225 -301 l59 -61 -54 -6 c-29 -3 -69 -7 -88 -9 -54 -3 -51 -32 11
-113 63 -83 242 -354 237 -359 -2 -2 -50 25 -108 60 -109 67 -139 76 -161 49
-11 -13 -8 -36 20 -142 167 -630 206 -939 182 -1434 -21 -451 -44 -601 -152
-1002 -45 -168 -69 -221 -135 -310 -25 -33 -54 -76 -64 -96 l-18 -35 -151 9
-151 9 -6 36 c-50 294 -182 851 -288 1216 -62 214 -175 552 -273 815 -152 409
-374 818 -599 1106 -85 109 -182 217 -223 249 -14 11 0 -9 32 -44 129 -141
306 -425 468 -754 132 -268 187 -401 300 -723 190 -542 349 -1121 468 -1699
17 -82 36 -162 41 -177 16 -50 -9 -30 -39 30 -27 54 -86 131 -192 255 -101
117 -282 226 -500 302 -161 56 -515 158 -756 219 -511 128 -838 180 -1219 194
l-189 7 125 22 c303 55 576 78 820 70 191 -6 314 -24 460 -67 52 -16 96 -27
98 -25 7 7 -193 67 -288 87 -71 14 -152 21 -317 25 -228 6 -369 -2 -598 -35
-66 -9 -147 -16 -180 -16 -33 1 -46 -1 -30 -4 20 -3 -26 -14 -135 -33 -189
-33 -247 -34 -90 -1 l105 22 -85 -7 c-47 -4 -143 -8 -215 -8 -102 -1 -144 -6
-195 -22 -49 -16 -104 -23 -220 -27 -445 -18 -810 -64 -1000 -126 -99 -33
-241 -103 -327 -162 -114 -77 -278 -240 -299 -294 -34 -90 -5 -342 76 -665 16
-64 33 -125 37 -135 6 -15 0 -14 -38 8 -95 55 -347 129 -564 165 -83 13 -165
18 -335 17 -241 0 -365 -13 -578 -60 -63 -14 -116 -23 -119 -21 -2 3 -17 38
-32 79 -15 41 -53 118 -85 172 l-58 98 7 72 c13 139 -25 292 -105 414 -62 96
-206 232 -314 295 l-48 28 26 24 c79 73 73 244 -12 367 -43 62 -234 244 -332
317 -287 213 -636 346 -1040 397 -340 43 -824 -21 -1182 -155 -268 -100 -639
-319 -854 -504 -155 -134 -270 -266 -244 -282 5 -3 53 10 105 30 237 89 820
187 1088 183 87 -1 106 -3 67 -7 l-55 -6 98 -13 c107 -15 296 -53 367 -75 42
-12 30 -14 -185 -20 -443 -13 -961 -74 -1289 -152 -400 -94 -785 -270 -962
-437 l-54 -51 15 44 c67 205 124 390 160 529 147 556 352 1083 515 1325 75
110 180 240 180 221 0 -19 -27 -282 -35 -338 -8 -60 20 -48 56 25 40 78 169
286 364 582 191 291 286 448 380 628 41 78 75 135 75 127 0 -26 -46 -178 -90
-293 -45 -119 -49 -147 -22 -147 33 1 289 336 409 535 126 209 164 303 274
670 118 392 169 625 169 768 l0 91 27 -54 c43 -86 212 -239 368 -333 123 -73
351 -177 489 -222 146 -48 484 -135 546 -140 19 -2 48 -8 63 -14 55 -22 39
-10 -99 70 -271 159 -390 252 -633 498 l-185 186 84 -105 c110 -139 292 -319
413 -409 53 -41 161 -107 240 -148 78 -41 131 -71 117 -68 -14 4 -122 43 -240
87 -545 204 -855 374 -1097 602 -46 43 -83 72 -83 65 0 -7 -3 -9 -7 -6 -3 4
-21 -64 -39 -151 -55 -265 -150 -618 -251 -926 -69 -211 -120 -314 -269 -541
-76 -117 -224 -314 -224 -299 0 5 14 52 30 104 36 112 83 346 78 387 -5 50
-29 30 -62 -52 -86 -211 -233 -474 -459 -820 -83 -126 -195 -302 -249 -390
-54 -88 -102 -167 -107 -175 -15 -23 -13 7 9 155 16 111 17 132 5 144 -21 21
-37 9 -111 -83 -139 -175 -196 -264 -288 -451 -176 -356 -306 -699 -397 -1052
-22 -87 -74 -273 -115 -414 -41 -142 -74 -266 -74 -277 0 -12 -25 -54 -55 -94
-66 -87 -127 -209 -150 -298 -10 -38 -19 -123 -21 -205 -5 -134 -4 -145 25
-244 48 -165 56 -155 44 51 -22 348 19 490 211 729 112 139 214 220 395 313
317 162 651 256 1136 320 724 96 1345 96 2160 1 384 -46 566 -88 727 -172 227
-117 395 -304 444 -494 31 -121 -2 -409 -83 -708 -5 -21 -4 -22 16 -11 13 6
25 9 29 6 3 -3 0 -6 -6 -6 -7 0 -12 -7 -12 -15 0 -21 14 -19 116 15 377 129
782 177 1136 135 224 -26 468 -87 638 -160 44 -19 80 -32 80 -29 0 2 9 0 21
-6 11 -7 23 -10 25 -7 3 2 -9 51 -25 108 -88 306 -139 638 -112 721 14 42 162
189 261 259 83 59 222 129 325 163 150 50 410 88 805 117 228 16 1141 23 1305
10 389 -32 890 -137 1466 -307 290 -85 374 -116 509 -185 170 -87 221 -133
411 -375 14 -18 54 -85 90 -149 44 -81 65 -111 67 -97 2 12 -1 38 -7 58 -6 21
-8 40 -6 43 6 5 334 -14 340 -21 2 -2 11 -48 19 -103 13 -83 13 -112 3 -170
l-12 -70 -145 -12 c-80 -6 -171 -17 -203 -24 -32 -6 -59 -10 -61 -8 -3 2 -1
24 4 49 5 25 7 46 5 48 -2 2 -27 -68 -55 -155 -106 -318 -395 -983 -572 -1315
-214 -400 -257 -469 -362 -574 -79 -79 -105 -97 -196 -142 -236 -116 -550
-188 -965 -224 -298 -25 -1148 -5 -1343 32 -56 10 -259 99 -370 162 -112 63
-276 228 -375 378 -142 216 -330 592 -512 1021 -47 112 -93 209 -102 214 -9 6
-29 21 -44 33 -16 13 -29 19 -29 13 0 -6 -28 12 -62 40 -101 81 -331 184 -553
248 -223 64 -467 89 -707 71 -354 -26 -715 -104 -891 -193 l-89 -45 -108 -278
c-275 -714 -369 -902 -545 -1092 -142 -153 -347 -284 -525 -335 -154 -45 -438
-79 -980 -117 -663 -47 -1036 -35 -1337 45 -222 59 -347 163 -601 502 -213
283 -405 648 -557 1058 -20 55 -43 107 -51 115 -14 14 -70 10 -234 -15 -34 -6
-37 -3 -84 62 -28 37 -66 86 -87 108 -20 22 -60 72 -89 110 -29 39 -57 75 -61
81 -6 7 3 35 21 71 l30 60 119 7 c178 11 200 21 61 31 -63 4 -118 9 -121 11
-4 2 0 22 7 45 16 44 12 59 -15 59 -31 0 -48 31 -75 140 -15 58 -47 175 -72
260 -112 393 -288 1358 -310 1704 -3 60 -12 120 -19 134 -13 24 -14 22 -34
-44 -12 -38 -30 -85 -40 -104 l-19 -35 -8 40 c-10 54 30 355 67 504 16 63 29
127 29 141 0 41 67 401 96 514 14 56 46 202 70 326 24 124 55 273 68 333 13
59 21 107 17 107 -4 0 -75 -73 -158 -162 -83 -90 -172 -183 -198 -208 l-46
-45 90 175 c109 213 276 587 326 730 20 58 50 157 66 220 90 341 125 407 318
593 248 239 440 367 1132 752 89 50 201 116 251 147 49 32 134 81 188 109 93
47 106 58 100 84 -44 189 -54 482 -25 685 67 469 287 909 598 1194 45 42 85
76 89 76 4 0 -4 -25 -17 -54 -98 -222 -194 -640 -215 -941 -15 -210 18 -482
70 -590 17 -35 64 -95 75 -95 19 0 43 24 89 89 146 207 678 659 1126 956 453
300 922 524 1382 659 379 111 673 172 938 195 138 12 733 12 965 1z m-3291
-6345 c523 -61 935 -253 1271 -591 100 -100 145 -181 153 -269 6 -75 -8 -122
-48 -160 l-29 -27 -73 30 c-166 68 -332 103 -698 146 -297 35 -532 55 -750 62
-140 4 -200 10 -245 25 -120 37 -312 80 -410 89 -55 6 -127 15 -160 19 -196
29 -591 -13 -972 -104 -78 -19 -158 -41 -179 -50 -20 -8 -39 -13 -41 -11 -5 5
142 139 232 211 173 139 514 344 720 433 381 165 855 241 1229 197z m1908
-2083 c42 -64 80 -124 83 -133 4 -12 -18 -23 -112 -53 -65 -20 -125 -40 -133
-43 -12 -5 -13 -3 -3 8 11 14 58 210 69 293 4 25 9 46 13 45 3 0 41 -53 83
-117z m7806 -232 c93 -44 147 -83 250 -184 167 -162 225 -262 310 -527 96
-301 127 -595 102 -959 -53 -751 -401 -1382 -862 -1560 -103 -40 -463 -127
-476 -115 -1 1 2 45 8 98 39 378 90 1680 60 1542 -4 -22 -29 -254 -54 -516
-74 -763 -110 -1055 -166 -1339 -69 -350 -127 -581 -203 -805 -74 -217 -296
-824 -364 -995 -164 -413 -508 -941 -963 -1480 -58 -69 -155 -186 -215 -260
-61 -74 -148 -175 -195 -224 -74 -79 -78 -85 -30 -46 167 138 418 386 591 586
173 199 421 549 558 789 32 55 49 78 45 60 -6 -29 -5 -29 22 10 16 22 62 99
104 171 l75 130 -3 -230 c-2 -130 1 -263 7 -306 6 -41 18 -160 26 -265 42
-512 135 -1078 207 -1260 70 -179 91 -225 99 -225 5 0 30 -42 55 -92 91 -182
198 -319 280 -358 38 -19 49 -31 70 -77 40 -91 54 -151 69 -297 25 -234 21
-296 -35 -574 -177 -882 -479 -1639 -908 -2278 -232 -347 -607 -800 -883
-1069 -296 -288 -848 -732 -1219 -980 -568 -381 -1167 -688 -1800 -923 -483
-180 -819 -281 -1008 -303 -123 -15 -541 -6 -742 16 -565 61 -1275 248 -1558
410 -153 88 -376 237 -477 318 -297 240 -727 835 -870 1204 -47 124 -204 677
-221 783 -20 122 -34 424 -34 730 1 455 16 630 101 1160 33 207 123 586 146
611 11 13 14 44 12 137 -1 128 -10 182 -53 326 -14 48 -23 92 -20 97 3 5 -8
51 -25 102 -17 50 -62 198 -101 328 -67 227 -97 312 -174 499 -20 47 -36 98
-36 113 0 16 -5 37 -10 47 -9 17 -7 18 27 13 35 -6 37 -5 24 11 -8 10 -58 47
-110 84 -518 358 -692 497 -1000 797 -351 343 -554 603 -836 1070 -138 229
-339 669 -436 953 -246 724 -369 1280 -438 1982 -35 354 -45 572 -45 1000 0
427 10 652 45 965 10 98 22 250 26 337 3 87 9 158 12 158 4 0 17 -7 30 -16 20
-14 39 -16 124 -10 55 4 112 10 127 13 25 5 29 1 40 -33 54 -166 212 -517 319
-709 224 -399 527 -764 719 -863 223 -116 629 -166 1155 -143 437 20 1025 69
1212 102 127 22 253 62 349 110 298 151 485 355 662 724 58 120 226 536 339
836 l47 126 69 26 c70 28 234 75 344 100 l60 14 5 -176 c11 -421 2 -602 -40
-824 l-19 -97 -167 -223 c-389 -515 -601 -907 -634 -1169 -19 -158 18 -276
121 -383 77 -80 128 -109 296 -170 72 -26 162 -63 200 -82 37 -19 120 -59 184
-88 64 -29 136 -66 160 -82 24 -17 59 -38 78 -48 l35 -17 -34 42 c-18 23 -61
72 -96 110 -219 239 -354 583 -354 903 0 240 30 390 150 747 175 523 223 862
190 1348 -5 81 -12 163 -14 183 l-4 37 137 21 c443 68 748 44 1136 -89 147
-51 254 -102 363 -172 80 -52 83 -55 113 -128 197 -478 342 -784 500 -1060
165 -287 304 -441 514 -563 95 -55 308 -145 372 -156 64 -11 469 -37 748 -46
391 -14 905 34 1228 116 184 46 375 125 486 202 58 40 155 139 201 207 77 115
332 588 420 780 125 274 357 867 380 973 14 59 18 65 38 45 7 -7 51 -14 100
-16 l89 -4 26 -182 c40 -271 54 -392 81 -710 14 -158 27 -290 30 -294 10 -10
6 418 -4 533 -8 77 -8 111 0 113 6 2 32 50 59 105 34 74 60 113 92 143 100 91
277 147 397 125 134 -25 237 -96 307 -212 39 -63 93 -219 121 -349 15 -66 19
-126 18 -274 0 -167 1 -184 13 -150 21 61 32 220 22 327 -16 164 -80 383 -145
495 -136 232 -415 299 -674 161 -94 -51 -141 -95 -195 -186 l-42 -73 -12 78
c-11 63 -44 227 -68 330 l-5 23 121 -7 c153 -9 159 -5 185 126 8 39 106 82
236 105 111 19 129 18 198 -15z m-13508 -347 c55 -103 167 -227 221 -245 5 -2
5 -17 0 -38 -5 -19 -17 -71 -27 -115 -16 -74 -18 -78 -26 -49 -27 103 -136
195 -263 220 -100 21 -179 9 -278 -43 -91 -48 -204 -180 -277 -323 -40 -80
-80 -214 -80 -268 l1 -47 24 64 c68 176 218 412 306 482 93 73 222 98 335 64
75 -22 146 -91 190 -181 l36 -75 -21 -157 c-48 -356 -61 -559 -61 -943 l0
-266 -42 -13 c-150 -44 -218 -133 -218 -285 0 -94 17 -167 67 -285 20 -47 36
-98 37 -115 1 -27 -2 -30 -28 -27 -83 9 -227 119 -311 236 -196 277 -284 792
-195 1140 11 43 39 120 64 171 112 237 243 354 459 410 l92 24 -65 1 c-132 0
-241 -45 -348 -145 -79 -73 -130 -147 -193 -279 -79 -166 -94 -242 -93 -496 0
-196 2 -226 27 -344 43 -199 115 -378 202 -501 131 -185 356 -314 425 -245 28
28 26 47 -26 168 -82 190 -93 311 -38 412 32 59 66 91 135 126 l49 24 0 -79
c0 -204 37 -685 75 -975 12 -94 20 -173 18 -175 -2 -3 -30 -4 -62 -3 -62 2
-197 40 -266 75 -231 116 -498 423 -615 704 -44 106 -134 426 -164 584 -62
322 -68 440 -36 695 58 470 128 675 288 845 122 130 232 190 532 289 63 21
116 39 117 39 1 1 16 -25 33 -56z m5754 -1313 c-14 -50 -47 -155 -75 -233
-106 -299 -141 -481 -141 -732 0 -238 39 -408 147 -630 48 -97 82 -151 173
-274 23 -30 19 -29 -68 24 -130 79 -229 127 -350 170 -144 51 -209 87 -275
153 -98 99 -131 201 -114 353 21 181 120 390 367 769 67 104 349 490 357 490
2 0 -8 -41 -21 -90z"
            />
            <path
              d="M9650 27937 c0 -7 140 -96 238 -151 339 -192 972 -402 1519 -505 657
-124 943 -148 2028 -171 508 -11 704 -21 1085 -55 377 -34 683 -56 688 -50 3
3 -2 5 -12 5 -9 0 -50 22 -89 49 -74 50 -404 219 -510 261 -32 12 -56 25 -53
27 6 6 387 -95 578 -153 336 -102 547 -183 1033 -401 458 -205 800 -372 905
-441 144 -96 378 -321 452 -436 46 -72 48 -67 6 21 -51 109 -291 343 -480 471
-172 116 -577 324 -1033 530 -253 114 -362 158 -583 231 -324 108 -544 167
-762 205 -412 70 -595 83 -335 23 78 -18 132 -38 185 -67 184 -103 461 -246
525 -271 39 -16 65 -28 59 -29 -6 0 -82 11 -170 25 -175 27 -632 79 -844 95
-74 6 -400 15 -725 20 -1031 17 -1406 52 -2135 200 -544 110 -1177 332 -1487
521 -38 23 -71 43 -75 46 -5 2 -8 2 -8 0z"
            />
            <path
              d="M15075 24583 c-341 -23 -770 -149 -1095 -320 -195 -103 -306 -200
-362 -318 -26 -57 -30 -74 -26 -133 2 -47 12 -84 31 -124 25 -52 71 -97 84
-84 4 3 -8 34 -26 70 -22 42 -35 84 -38 124 -5 53 -2 68 25 126 58 124 195
237 427 353 419 211 866 307 1278 275 684 -52 1437 -390 1756 -788 34 -41 61
-73 61 -69 0 3 -12 29 -26 57 -54 107 -271 302 -457 412 -495 292 -1124 454
-1632 419z"
            />
            <path d="M15523 23763 c9 -2 25 -2 35 0 9 3 1 5 -18 5 -19 0 -27 -2 -17 -5z" />
            <path
              d="M8485 23469 c-211 -20 -520 -83 -740 -150 -340 -104 -691 -289 -865
-455 -87 -83 -120 -137 -149 -244 -60 -218 -58 -417 5 -657 65 -247 345 -829
525 -1093 176 -259 358 -372 684 -427 184 -30 588 -25 1050 15 541 47 678 66
889 118 192 48 273 115 408 340 91 152 122 218 261 549 252 603 394 1025 427
1262 12 93 9 126 -26 235 -24 73 -42 102 -60 96 -5 -1 -38 17 -72 40 -178 116
-647 237 -1289 331 -320 47 -784 65 -1048 40z m910 -88 c695 -91 1237 -224
1396 -341 30 -22 66 -46 81 -52 28 -12 37 -37 53 -148 24 -162 -134 -655 -454
-1424 -136 -325 -236 -511 -340 -635 -125 -149 -305 -192 -1111 -263 -310 -27
-412 -32 -675 -32 -283 -1 -320 1 -429 22 -398 76 -550 229 -877 876 -217 429
-332 769 -314 930 10 92 69 315 99 374 72 142 329 321 667 465 230 98 563 188
839 226 80 12 159 22 175 25 17 2 188 3 380 1 287 -2 379 -6 510 -24z"
            />
            <path
              d="M9135 23279 c-167 -21 -476 -116 -605 -186 -191 -103 -689 -423 -818
-526 -65 -52 -93 -66 -216 -109 -318 -112 -334 -118 -286 -112 62 7 185 39
309 79 85 28 117 44 180 93 161 125 717 479 882 562 74 38 262 101 404 136
136 34 370 44 464 20 121 -31 299 -134 472 -273 136 -109 367 -347 439 -452
88 -128 113 -156 133 -148 56 21 -27 152 -222 351 -284 289 -606 512 -811 560
-71 17 -212 19 -325 5z"
            />
            <path
              d="M9020 22654 c-560 -48 -836 -120 -1563 -404 -153 -60 -159 -80 -43
-161 389 -272 857 -544 956 -556 27 -3 55 -2 62 3 7 6 74 7 153 4 257 -9 550
13 985 76 247 36 884 170 823 173 -7 1 -112 -12 -235 -29 -122 -16 -223 -30
-224 -30 0 0 10 21 22 48 54 110 82 327 65 497 -6 54 -8 101 -6 103 5 6 234
-48 273 -64 36 -15 143 -100 240 -191 34 -32 62 -54 62 -48 0 13 -35 71 -72
118 -16 20 -27 37 -24 37 4 0 34 -11 68 -25 l62 -25 -54 50 c-30 27 -95 70
-145 96 -49 26 -110 61 -135 79 -55 40 -220 117 -236 111 -7 -3 -57 11 -111
30 -207 74 -385 103 -678 108 -110 2 -220 2 -245 0z m880 -342 c111 -55 105
-200 -10 -260 -40 -21 -55 -23 -135 -19 -49 3 -103 10 -120 17 -75 29 -118
109 -92 173 21 49 69 85 125 92 26 4 52 8 57 10 33 11 144 3 175 -13z m-617
-110 c12 -13 17 -42 19 -106 3 -82 1 -89 -21 -107 -31 -25 -47 -24 -76 6 -22
21 -25 33 -25 102 0 91 15 123 59 123 15 0 35 -8 44 -18z m-823 -49 c0 -104
68 -313 154 -479 l43 -84 -123 0 -124 0 -112 67 c-138 81 -370 223 -381 233
-5 4 38 34 95 68 208 122 423 242 436 242 8 0 12 -16 12 -47z"
            />
            <path
              d="M14780 23389 c-274 -24 -607 -95 -821 -174 -161 -60 -167 -64 -242
-145 -67 -72 -109 -135 -121 -180 l-7 -25 21 25 22 25 -5 -25 c-25 -123 -16
-247 33 -440 104 -413 334 -928 642 -1440 137 -228 217 -338 328 -450 228
-231 347 -265 925 -264 205 0 403 6 500 15 l160 14 -320 7 c-560 12 -810 33
-947 79 -80 27 -201 113 -287 205 -258 277 -695 1084 -880 1627 -86 251 -115
383 -115 517 0 162 17 213 92 280 70 63 87 72 227 122 384 138 757 187 1365
179 l145 -2 -105 -35 c-117 -39 -330 -143 -491 -240 -112 -67 -543 -362 -617
-421 -44 -36 -52 -65 -19 -71 9 -2 88 46 179 111 489 342 755 497 988 573 72
23 102 27 190 27 96 0 116 -4 235 -43 286 -93 430 -178 875 -514 324 -245 350
-263 429 -289 90 -31 231 -48 231 -29 0 18 -27 28 -143 56 -59 14 -121 33
-137 41 -16 9 -155 114 -309 235 -153 120 -316 245 -362 278 -114 81 -283 174
-415 227 -60 25 -105 45 -101 45 5 0 89 -14 188 -30 637 -107 1215 -264 1537
-416 156 -73 241 -132 354 -246 81 -82 97 -104 103 -139 32 -189 -183 -800
-460 -1304 -178 -324 -304 -503 -410 -583 -71 -54 -224 -137 -290 -158 -40
-13 -40 -13 -9 -13 75 -2 224 59 331 135 162 115 447 599 664 1124 184 449
240 739 170 884 -34 70 -189 220 -288 279 -257 153 -721 303 -1324 426 -378
77 -661 120 -923 141 -150 12 -647 11 -786 -1z"
            />
            <path
              d="M15225 22700 c-141 -12 -212 -36 -380 -131 -55 -31 -161 -90 -235
-131 -247 -138 -480 -276 -480 -284 0 -1 31 6 70 17 89 24 89 24 58 -8 -30
-33 -88 -122 -88 -137 0 -6 55 44 123 111 137 136 199 176 402 260 168 70 155
67 133 25 -51 -105 -48 -357 6 -537 8 -27 14 -50 13 -51 -1 -1 -54 6 -117 16
-63 10 -140 20 -170 23 -137 15 479 -137 805 -198 280 -52 480 -77 666 -82
149 -4 174 -3 245 17 380 105 562 204 889 484 178 153 199 174 187 193 -4 6
-117 30 -252 53 -301 50 -411 74 -905 199 -214 54 -422 106 -461 115 -67 15
-386 58 -408 55 -6 -1 -51 -5 -101 -9z m1023 -463 c54 -35 76 -77 69 -134 -9
-79 -85 -132 -168 -119 -114 18 -223 88 -235 151 -8 44 17 90 64 115 31 17 52
20 133 17 85 -2 101 -6 137 -30z m272 -22 c137 -42 371 -143 385 -166 3 -4
-61 -65 -142 -135 -164 -140 -205 -164 -410 -233 -68 -23 -125 -41 -128 -41
-3 0 10 31 29 69 20 38 49 124 66 192 28 112 31 136 28 247 -2 79 1 121 7 119
6 -3 80 -26 165 -52z m-931 25 c24 -12 51 -81 51 -129 0 -81 -73 -119 -125
-66 -21 21 -25 33 -25 88 0 94 41 139 99 107z"
            />
            <path
              d="M18816 21421 c5 -4 61 -46 124 -93 233 -171 340 -324 412 -585 19
-68 21 -105 22 -278 0 -184 -2 -207 -26 -296 -52 -191 -141 -334 -240 -383
-87 -43 -161 -28 -193 40 -34 73 -17 114 90 218 125 122 145 179 105 309 -33
106 -94 163 -304 282 l-50 28 20 -34 c12 -20 58 -60 110 -96 49 -34 106 -82
126 -108 37 -46 68 -125 68 -174 -1 -46 -36 -105 -100 -166 -120 -115 -145
-185 -97 -275 63 -119 212 -114 335 11 64 65 142 215 172 333 79 310 28 680
-124 909 -87 131 -242 270 -373 336 -60 30 -98 41 -77 22z"
            />
            <path
              d="M12760 19174 c-189 -35 -372 -121 -354 -168 12 -31 36 -27 286 47
116 35 231 49 360 45 121 -3 124 3 27 47 -53 23 -76 27 -177 30 -65 2 -128 2
-142 -1z"
            />
            <path d="M12778 16963 c18 -2 45 -2 60 0 15 2 0 4 -33 4 -33 0 -45 -2 -27 -4z" />
            <path d="M12888 16953 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z" />
            <path
              d="M12990 16937 c15 -17 454 -192 682 -271 61 -22 168 -72 250 -118 88
-50 158 -82 183 -85 87 -11 166 35 150 87 -14 43 -47 52 -213 61 -177 9 -137
-3 -567 161 -137 53 -297 111 -355 128 -58 18 -112 35 -120 38 -8 3 -13 2 -10
-1z"
            />
            <path
              d="M10850 16701 c-287 -83 -556 -166 -604 -186 -19 -8 -51 -15 -70 -15
-67 0 -102 -64 -61 -110 29 -32 76 -25 183 29 53 27 162 74 242 106 134 53
550 233 559 241 9 8 -23 0 -249 -65z"
            />
            <path
              d="M12065 16039 c-81 -11 -208 -44 -242 -64 -27 -15 -24 -16 62 -10 312
19 397 18 490 -4 49 -12 100 -29 113 -37 32 -21 50 -5 34 30 -32 71 -257 112
-457 85z"
            />
            <path d="M12153 15853 c9 -2 23 -2 30 0 6 3 -1 5 -18 5 -16 0 -22 -2 -12 -5z" />
            <path d="M12250 15850 c-15 -5 1 -6 40 -3 36 3 67 7 69 9 8 7 -84 2 -109 -6z" />
            <path
              d="M15305 14388 c-79 -50 -437 -231 -587 -297 -637 -281 -1468 -499
-2213 -580 -833 -91 -1408 -33 -2240 226 -115 35 -237 76 -269 89 -33 13 -61
22 -63 21 -11 -12 391 -180 597 -250 203 -70 622 -163 845 -189 151 -18 806
-17 985 0 965 95 1942 376 2580 743 179 103 438 268 420 269 -3 0 -27 -15 -55
-32z"
            />
            <path
              d="M15315 6968 c-621 -369 -1107 -546 -1840 -668 -529 -89 -990 -109
-1588 -70 -303 20 -784 82 -987 126 -272 60 -944 313 -1149 433 -36 22 -122
78 -191 125 -68 47 -126 83 -129 80 -6 -6 106 -107 196 -176 144 -111 285
-181 673 -333 382 -150 575 -202 930 -249 762 -102 1449 -111 2033 -26 870
127 1447 336 2089 757 104 68 154 106 136 102 -2 0 -79 -46 -173 -101z"
            />
          </g>
        </svg>
      </div>
    </main>
  );
}
