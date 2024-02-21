const horizontalWoodGrains = [
    // 1st floor
    {
        x: 4,
        y: 10,
        d: "M1.69,2.804c4.792,-0.088 9.755,-0.53 14.532,-0.602c2.107,-0.031 4.174,0.004 6.174,0.19c3.567,0.294 5.774,0.565 7.505,0.875c3.345,0.598 4.916,1.377 11.008,2.893c4.004,0.984 8.324,2.172 12.714,3.151c2.882,0.643 5.795,1.193 8.664,1.551c3.921,0.472 8.593,0.857 13.54,1.145c6.663,0.389 13.826,0.612 20.31,0.807c4.942,0.121 10.153,0.189 15.469,0.15c3.832,-0.027 7.714,-0.116 11.592,-0.194c3.894,-0.077 7.774,-0.168 11.59,-0.227c-3.813,-0.163 -7.693,-0.315 -11.585,-0.447c-4.528,-0.153 -9.062,-0.314 -13.513,-0.447c-4.632,-0.139 -9.168,-0.241 -13.495,-0.44c-6.467,-0.271 -13.608,-0.615 -20.254,-1.044c-4.907,-0.317 -9.543,-0.676 -13.431,-1.147c-2.816,-0.328 -5.674,-0.853 -8.507,-1.455c-4.386,-0.933 -8.71,-2.058 -12.713,-2.992c-6.171,-1.422 -7.766,-2.197 -11.154,-2.719c-1.768,-0.273 -4.022,-0.471 -7.659,-0.66c-2.045,-0.085 -4.151,-0.028 -6.293,0.123c-4.774,0.339 -9.708,1.109 -14.494,1.489Z",
        width: 148,
    },
    {
        x: -40,
        y: 10,
        d: "M1.69,1.69c4.885,0.393 12.832,1.056 20.929,1.944c3.282,0.359 6.585,0.758 9.72,1.186c1.423,0.194 2.812,0.385 4.146,0.594c8.015,1.234 15.995,3.835 23.933,5.644c3.518,0.802 7.028,1.444 10.527,1.762c3.463,0.309 7.139,0.387 10.899,0.319c8.472,-0.151 17.37,-0.998 25.204,-1.181c8.895,-0.249 20.272,-0.535 32.315,-0.94c3.195,-0.108 6.436,-0.242 9.691,-0.371c7.612,-0.304 15.29,-0.629 22.616,-0.888c-7.331,-0.067 -15.017,-0.12 -22.636,-0.119c-3.258,0.001 -6.502,0.003 -9.7,0.034c-12.05,0.116 -23.426,0.383 -32.324,0.516c-7.832,0.153 -16.731,0.929 -25.2,1.085c-3.693,0.068 -7.305,0.027 -10.708,-0.26c-3.425,-0.283 -6.861,-0.893 -10.309,-1.641c-7.99,-1.734 -16.038,-4.222 -24.102,-5.36c-1.348,-0.187 -2.749,-0.369 -4.188,-0.527c-3.158,-0.347 -6.489,-0.622 -9.796,-0.846c-8.134,-0.553 -16.114,-0.79 -21.017,-0.951Z",
        width: 140,
    },
    {
        x: -60,
        y: 6,
        d: "M112.582,9.912c-0.018,0.025 -0.065,0.088 -0.104,0.125c-0.111,0.104 -0.255,0.207 -0.429,0.312c-0.992,0.6 -2.775,1.192 -5.033,1.768c-2.852,0.727 -6.44,1.416 -10.189,1.964c-2.386,0.371 -4.673,0.424 -6.877,0.322c-5.929,-0.272 -11.256,-1.677 -16.241,-1.36c5.005,-0.055 10.26,1.656 16.181,2.217c2.263,0.215 4.618,0.254 7.091,-0.019c1.666,-0.19 3.303,-0.402 4.859,-0.648c2.751,-0.434 5.251,-0.957 7.235,-1.503c1.888,-0.519 3.323,-1.085 4.11,-1.637c0.621,-0.436 0.903,-0.926 0.948,-1.359c0.248,-2.384 -1,-4.182 -3.408,-5.469c-2.124,-1.135 -5.21,-1.869 -8.886,-2.288c-5.027,-0.573 -11.182,-0.586 -17.443,-0.335c-5.975,0.24 -12.046,0.724 -17.321,1.118c-8.614,0.686 -18.1,1.123 -27.502,1.198c-3.972,0.031 -7.927,-0.01 -11.798,-0.11c-9.582,-0.248 -18.636,-0.95 -26.085,-2.518c7.394,1.921 16.431,3.155 26.032,3.743c3.884,0.238 7.859,0.355 11.849,0.395c9.445,0.093 18.978,-0.295 27.639,-0.883c5.258,-0.383 11.31,-0.827 17.263,-1.082c6.164,-0.264 12.222,-0.32 17.177,0.2c3.43,0.359 6.32,0.977 8.311,2.011c1.746,0.907 2.763,2.124 2.621,3.838Z",
        width: 60,
    },
    // 2nd floor
    {
        x: 18,
        y: 10,
        d: "M11.455,1.69c0,0 -1.975,0.005 -4.227,0.741c-1.318,0.431 -2.717,1.106 -3.862,2.16c-1.378,1.268 -2.34,3.079 -2.473,5.517c-0.113,2.636 1.168,4.265 2.984,5.281c1.239,0.693 2.752,1.082 4.229,1.29c1.593,0.224 3.139,0.235 4.206,0.264c2.126,0.033 4.124,-0.263 5.842,-0.794c2.346,-0.726 4.187,-1.861 5.167,-3.08c1.058,-1.317 1.245,-2.731 0.271,-3.899c-0.447,-0.535 -1.157,-1.033 -2.199,-1.407c-1.297,-0.464 -3.107,-0.763 -5.547,-0.81c2.804,0.483 4.68,1.179 5.842,1.965c0.795,0.538 1.188,1.106 1.226,1.702c0.023,0.37 -0.123,0.733 -0.366,1.096c-0.336,0.504 -0.881,0.974 -1.57,1.412c-1.964,1.249 -5.104,2.121 -8.613,1.962c-1.016,-0.03 -2.488,-0.057 -4.007,-0.257c-1.261,-0.167 -2.561,-0.448 -3.632,-1.01c-1.306,-0.686 -2.252,-1.803 -2.234,-3.673c0.001,-1.734 0.562,-3.082 1.376,-4.157c0.405,-0.534 0.86,-1.008 1.354,-1.424c2.659,-2.237 6.233,-2.879 6.233,-2.879Z",
        width: 88,
    },
    {
        x: 0,
        y: 6,
        d: "M1.69,2.189c0,-0 2.566,0.046 6.459,0.119c1.89,0.036 4.085,0.091 6.453,0.122c1.655,0.021 3.389,0.021 5.157,0.033c2.558,0.017 5.183,0.039 7.728,0.09c2.238,0.044 4.414,0.103 6.424,0.197c4.86,0.19 8.804,0.848 12.072,1.672c5.204,1.312 8.69,3.1 11.339,4.444c1.59,0.793 3.652,1.765 5.994,2.365c1.357,0.348 2.803,0.571 4.292,0.587c3.219,0.034 6.633,-0.882 9.79,-3.697c-3.295,2.408 -6.643,2.976 -9.735,2.675c-1.392,-0.136 -2.724,-0.458 -3.978,-0.855c-2.201,-0.697 -4.149,-1.653 -5.64,-2.464c-2.703,-1.446 -6.246,-3.425 -11.604,-4.833c-3.364,-0.884 -7.445,-1.52 -12.461,-1.707c-4.906,-0.127 -10.784,-0.074 -16.175,0.096c-0.876,0.028 -1.739,0.057 -2.583,0.099c-1.349,0.067 -2.646,0.152 -3.871,0.239c-5.627,0.4 -9.661,0.818 -9.661,0.818Z",
        width: 80,
    },
    {
        x: -20,
        y: 8,
        d: "M1.69,1.736c0,0 4.295,0.024 10.206,0.404c3.074,0.198 6.581,0.481 10.147,0.933c3.006,0.34 5.812,0.673 8.673,1.013c2.764,0.328 5.577,0.666 8.663,1.058c4.819,0.611 10.303,1.338 17.304,2.325c4.563,0.621 8.35,1.231 11.824,1.778c4.153,0.654 7.858,1.232 11.887,1.705c4.549,0.534 9.511,0.923 15.997,1.121c1.919,0.051 4.236,-0.19 6.528,-0.648c1.447,-0.288 2.882,-0.663 4.203,-1.077c2.304,-0.723 4.261,-1.577 5.336,-2.377c0.635,-0.472 0.981,-0.952 1.02,-1.368c0.046,-0.489 -0.178,-0.916 -0.681,-1.252c-0.549,-0.367 -1.459,-0.641 -2.577,-0.823c-2.483,-0.403 -6.01,-0.404 -8.638,-0.37c2.606,0.13 6.1,0.351 8.535,0.902c0.994,0.224 1.803,0.499 2.277,0.858c0.23,0.173 0.366,0.361 0.331,0.592c-0.04,0.261 -0.334,0.497 -0.751,0.772c-1.057,0.699 -2.956,1.387 -5.168,1.962c-1.302,0.338 -2.712,0.627 -4.126,0.858c-2.198,0.359 -4.405,0.567 -6.231,0.475c-6.426,-0.3 -11.337,-0.777 -15.84,-1.364c-4.002,-0.522 -7.68,-1.141 -11.809,-1.807c-3.484,-0.561 -7.289,-1.147 -11.87,-1.763c-7.022,-0.909 -12.521,-1.589 -17.356,-2.132c-3.098,-0.348 -5.922,-0.645 -8.699,-0.911c-2.871,-0.275 -5.691,-0.513 -8.709,-0.768c-3.609,-0.257 -7.148,-0.365 -10.247,-0.375c-5.934,-0.019 -10.229,0.279 -10.229,0.279Z",
        width: 120,
    },
    {
        x: 0,
        y: 8,
        d: "M1.69,1.69c0,0 3.705,0.724 8.667,1.64c2.661,0.491 5.679,1.035 8.68,1.56c0.776,0.135 1.55,0.271 2.318,0.396c3.47,0.567 6.779,1.049 9.304,1.412c3.93,0.55 7.119,0.823 10.346,0.932c4.421,0.15 8.913,-0.005 15.5,-0.112c4.446,-0.111 11.639,-1.284 19.666,-2.478c4.402,-0.655 9.057,-1.304 13.648,-1.79c1.976,-0.209 3.938,-0.393 5.865,-0.534c6.252,-0.458 12.114,-0.427 16.758,0.739c-4.594,-1.485 -10.49,-1.977 -16.809,-1.867c-1.949,0.034 -3.937,0.131 -5.938,0.276c-4.63,0.336 -9.324,0.909 -13.76,1.499c-7.956,1.059 -15.071,2.214 -19.468,2.284c-6.55,0.164 -11.016,0.342 -15.414,0.249c-3.176,-0.067 -6.316,-0.273 -10.189,-0.75c-2.388,-0.285 -5.468,-0.701 -8.735,-1.11c-1.916,-0.24 -3.895,-0.476 -5.834,-0.701c-7.627,-0.884 -14.605,-1.645 -14.605,-1.645Z",
        width: 110,
    },
    {
        x: 0,
        y: 12,
        d: "M16.53,1.69c0,0 -3.333,-0.165 -6.903,0.162c-0.461,0.042 -0.923,0.095 -1.383,0.164c-1.125,0.17 -2.223,0.42 -3.206,0.716c-1.451,0.438 -2.646,1.034 -3.359,1.739c-0.559,0.554 -0.844,1.193 -0.853,1.89c-0.02,1.765 0.528,2.829 1.441,3.551c0.749,0.592 1.805,0.944 3.142,1.195c1.217,0.229 2.694,0.382 4.382,0.689c2.665,0.445 5.191,0.431 7.041,-0.091c2.182,-0.616 3.478,-1.891 3.36,-3.701c-0.136,-1.361 -0.873,-2.025 -2.011,-2.225c-0.708,-0.124 -1.57,-0.068 -2.481,0.076c-1.184,0.186 -2.431,0.499 -3.49,0.623c1.796,0.09 4.239,-0.259 5.736,0.237c0.599,0.198 0.974,0.587 0.949,1.332c0.002,1.178 -1.019,1.796 -2.455,2.124c-1.68,0.385 -3.94,0.312 -6.314,-0.175c-1.155,-0.223 -2.211,-0.382 -3.155,-0.527c-1.15,-0.176 -2.121,-0.327 -2.884,-0.624c-0.986,-0.384 -1.508,-1.066 -1.533,-2.49c-0.008,-0.374 0.243,-0.679 0.602,-0.97c0.573,-0.464 1.403,-0.855 2.362,-1.201c0.914,-0.33 1.941,-0.605 2.985,-0.864c0.439,-0.109 0.876,-0.22 1.313,-0.326c3.452,-0.837 6.714,-1.304 6.714,-1.304Z",
        width: 40,
    },
    // 3rd floor
    {
        x: 8,
        y: 6,
        d:"M1.502,5.62c0,0 1.655,-0.713 3.681,-1.433l2.426,-0.854c0.915,-0.291 1.799,-0.503 2.54,-0.514c0.687,-0.019 1.778,0.039 3.097,0.086c0.956,0.033 2.03,0.066 3.156,0.08c1.031,0.012 2.104,0.006 3.171,-0.021c1.086,-0.027 2.163,-0.061 3.18,-0.158c0.57,-0.054 1.113,-0.13 1.633,-0.22c1.589,-0.274 2.882,-0.647 3.693,-1.084c-0.474,0.119 -1.072,0.169 -1.784,0.191c-0.935,0.028 -2.023,-0.045 -3.222,-0.092c-1.025,-0.041 -2.116,-0.059 -3.22,-0.101c-1.654,-0.063 -3.331,-0.152 -4.848,-0.201c-2.126,-0.07 -3.938,-0.065 -4.928,-0.004c-0.862,0.068 -1.889,0.347 -2.926,0.771c-0.587,0.241 -1.184,0.511 -1.746,0.823c-0.744,0.414 -1.421,0.871 -2.014,1.287c-1.141,0.803 -1.889,1.444 -1.889,1.444Z",
        width: 38,
    },
    {
        x: 0,
        y: 13,
        d:"M31.243,5.055c0,-0 -12.557,-3.465 -21.367,-4c-2.727,-0.166 -5.104,-0.035 -6.671,0.518c-1.336,0.471 -2.121,1.27 -2.27,2.348c-0.443,3.266 1.977,5.467 7.242,6.942c5.146,1.442 13.099,2.272 23.548,3.194c8.224,0.7 14.647,0.823 20.066,0.587c7.964,-0.346 13.754,-1.439 19.915,-2.431c5.139,-0.845 13.527,-2.361 23.368,-2.722c3.221,-0.118 6.598,-0.12 10.071,0.068c7.103,0.384 14.604,1.55 21.98,4.155c-7.302,-2.928 -14.787,-4.452 -21.912,-5.095c-1.912,-0.173 -3.798,-0.28 -5.646,-0.331c-3.978,-0.111 -7.782,0.027 -11.305,0.286c-6.968,0.514 -12.837,1.522 -16.795,2.124c-6.11,0.945 -11.855,1.958 -19.747,2.288c-5.363,0.224 -11.72,0.145 -19.862,-0.523c-10.341,-0.815 -18.212,-1.563 -23.318,-2.928c-1.892,-0.506 -3.393,-1.09 -4.481,-1.81c-1.424,-0.943 -2.092,-2.114 -1.908,-3.648c0.079,-0.67 0.638,-1.09 1.458,-1.404c1.453,-0.554 3.671,-0.712 6.227,-0.655c8.777,0.198 21.407,3.037 21.407,3.037Z",
        width: 130,
    },
    {
        x: -40,
        y: 4,
        d:"M1.502,4.597c0,-0 3.325,-1.297 6.897,-2.028c1.589,-0.325 3.221,-0.55 4.629,-0.443c1.061,0.058 2.838,0.401 5.042,0.872c2.219,0.474 4.859,1.091 7.634,1.709c2.813,0.627 5.762,1.266 8.543,1.777c3.633,0.668 6.982,1.114 9.368,1.152c3.587,0.023 5.779,-0.223 7.099,-0.652c1.932,-0.628 2.252,-1.574 2.244,-2.484c-0.006,-0.315 -0.157,-0.652 -0.504,-0.95c-0.364,-0.311 -0.94,-0.616 -1.641,-0.867c-1.808,-0.647 -4.417,-1.015 -5.731,-0.733c0.955,-0.094 2.541,0.226 3.989,0.722c0.989,0.34 1.907,0.762 2.495,1.199c0.288,0.214 0.504,0.395 0.487,0.598c-0.046,0.589 -0.386,1.07 -1.663,1.398c-1.273,0.326 -3.347,0.484 -6.736,0.325c-1.637,-0.064 -3.732,-0.36 -6.064,-0.764c-1.836,-0.318 -3.815,-0.71 -5.832,-1.12c-1.291,-0.263 -2.597,-0.53 -3.891,-0.796c-2.563,-0.529 -5.074,-1.056 -7.313,-1.494c-3.316,-0.648 -6.044,-1.099 -7.481,-1.127c-0.487,-0.005 -0.996,0.019 -1.518,0.085c-1.096,0.138 -2.248,0.418 -3.368,0.768c-3.517,1.102 -6.685,2.853 -6.685,2.853Z",
        width: 26,
    },
    {
        x: 0,
        y: 8,
        d:"M1.502,6.693c0,-0 6.871,-2.217 14.451,-3.52c0.969,-0.167 1.948,-0.319 2.926,-0.457c2.344,-0.33 4.679,-0.556 6.833,-0.535c4.642,0.021 9.616,0.487 15.206,1.282c3.514,0.5 7.27,1.139 11.34,1.876c3.523,0.637 7.283,1.336 11.318,2.124c7.41,1.403 13.637,1.737 19.304,1.381c1.987,-0.124 3.901,-0.346 5.774,-0.615c4.537,-0.654 8.812,-1.631 13.242,-2.573c-4.47,0.644 -8.789,1.301 -13.343,1.684c-1.862,0.156 -3.761,0.258 -5.727,0.31c-5.578,0.15 -11.688,-0.207 -18.942,-1.728c-4.039,-0.823 -7.798,-1.581 -11.329,-2.222c-4.095,-0.745 -7.88,-1.348 -11.421,-1.813c-5.673,-0.744 -10.722,-1.113 -15.426,-1.063c-2.216,0.036 -4.618,0.299 -7.015,0.731c-0.987,0.178 -1.972,0.386 -2.943,0.613c-7.527,1.762 -14.248,4.525 -14.248,4.525Z",
        width: 110,
    },
    {
        x: -20,
        y: 6,
        d:"M1.502,2.173c0,-0 3.33,-0.551 9.486,-0.354c2.755,0.089 6.07,0.341 9.917,0.826c1.343,0.169 2.752,0.354 4.222,0.586c7.213,1.099 11.591,1.655 15.653,1.877c4.504,0.246 8.616,0.083 15.765,-0.16c4.556,-0.182 8.399,-0.562 11.998,-0.996c4.039,-0.488 7.768,-1.035 11.869,-1.395c3.088,-0.271 6.385,-0.445 10.188,-0.405c1.003,0.008 1.955,0.041 2.862,0.083c2.543,0.117 4.723,0.354 6.64,0.675c6.471,1.082 9.937,3.029 14.01,3.338c-4.064,-0.554 -7.414,-2.75 -13.845,-4.184c-1.934,-0.431 -4.142,-0.797 -6.729,-1.01c-0.922,-0.076 -1.891,-0.124 -2.912,-0.158c-3.852,-0.116 -7.197,-0.015 -10.329,0.209c-4.125,0.295 -7.879,0.79 -11.941,1.245c-3.564,0.399 -7.366,0.776 -11.875,0.939c-7.085,0.298 -11.159,0.476 -15.627,0.288c-4.029,-0.17 -8.379,-0.633 -15.546,-1.603c-1.233,-0.163 -2.42,-0.309 -3.565,-0.417c-3.128,-0.293 -5.922,-0.39 -8.363,-0.393c-7.721,-0.008 -11.878,1.009 -11.878,1.009Z",
        width: 94,
    },
    {
        x: 0,
        y: 12,
        d:"M5.944,1.502c-0,0 -1.166,0.461 -2.412,1.508c-0.465,0.391 -0.927,0.858 -1.346,1.414c-0.293,0.388 -0.553,0.817 -0.768,1.289c-0.455,0.994 -0.677,2.165 -0.59,3.489c0.122,1.579 0.799,2.719 1.739,3.543c0.729,0.638 1.63,1.08 2.574,1.367c0.921,0.28 1.883,0.406 2.749,0.456c1.558,0.063 2.934,-0.419 4.005,-1.222c1.196,-0.896 2.026,-2.165 2.317,-3.425c0.137,-0.593 0.172,-1.184 0.06,-1.728c-0.145,-0.703 -0.48,-1.339 -1.065,-1.801c-0.857,-0.678 -2.229,-1.017 -4.248,-0.598c2.019,0 3.211,0.566 3.803,1.421c0.282,0.407 0.373,0.883 0.366,1.382c-0.005,0.322 -0.063,0.653 -0.166,0.984c-0.24,0.772 -0.749,1.524 -1.436,2.131c-0.897,0.793 -2.123,1.316 -3.54,1.206c-1.21,-0.065 -2.638,-0.311 -3.79,-0.973c-0.99,-0.568 -1.775,-1.456 -1.948,-2.884c-0.146,-1.086 0.004,-2.052 0.289,-2.907c0.142,-0.426 0.305,-0.825 0.495,-1.199c1.104,-2.174 2.912,-3.453 2.912,-3.453Z",
        width: 20,
    },
    // 4th floor
    {
        x: 0,
        y: 22,
        d:"M117.399,2.915c-0,-0 -4.227,0.646 -12.014,1.038c-2.617,0.132 -5.634,0.226 -9.03,0.289c-2.764,0.05 -5.778,0.097 -9.03,0.06c-4.702,-0.034 -10.929,-0.392 -17.98,-0.845c-3.798,-0.244 -7.834,-0.521 -11.999,-0.788c-5.856,-0.375 -11.965,-0.742 -18.023,-1.041c-4.065,-0.2 -8.106,-0.362 -12.033,-0.472c-1.392,-0.039 -2.77,-0.076 -4.129,-0.092c-2.117,-0.026 -4.187,-0.02 -6.197,0.008c-5.788,0.081 -11.061,0.359 -15.462,0.862c4.847,-0.272 10.724,-0.168 17.166,0.106c1.68,0.072 3.396,0.154 5.144,0.238c1.689,0.08 3.406,0.16 5.143,0.249c7.837,0.4 16.073,0.974 23.996,1.513c4.737,0.322 9.363,0.624 13.722,0.881c8.144,0.481 15.361,0.794 20.651,0.766c3.269,-0.031 6.298,-0.104 9.074,-0.248c2.17,-0.113 4.183,-0.263 6.036,-0.429c9.695,-0.87 14.965,-2.095 14.965,-2.095Z",
        width: 118,
    },
    {
        x: -64,
        y: 10,
        d:"M82.095,8.02c-1.754,0.054 -4.327,0.05 -6.677,-0.187c-1.665,-0.168 -3.215,-0.452 -4.264,-0.924c-0.415,-0.185 -0.842,-0.818 -0.529,-1.535c0.194,-0.445 0.661,-0.898 1.506,-1.339c1.691,-0.882 4.822,-1.635 10.342,-1.854c3.655,-0.18 6.386,0.184 8.31,0.871c2.199,0.785 3.282,1.956 3.295,3.234c0.007,0.675 -0.319,1.212 -0.854,1.657c-0.753,0.627 -1.884,1.071 -3.223,1.414c-2.709,0.693 -6.236,0.927 -9.46,1.039c-2.304,0.085 -5.195,-0.008 -8.489,-0.196c-4.059,-0.231 -8.723,-0.617 -13.651,-1.029c-6.648,-0.556 -13.774,-1.152 -20.531,-1.546c-3.795,-0.208 -7.436,-0.355 -10.935,-0.385c-2.504,-0.022 -4.934,0.015 -7.295,0.094c-6.564,0.217 -12.578,0.781 -18.138,1.647c4.533,-0.476 9.354,-0.717 14.516,-0.757c3.473,-0.026 7.096,0.055 10.89,0.199c3.479,0.133 7.1,0.308 10.873,0.586c5.881,0.412 12.038,1.001 17.918,1.543c4.199,0.387 8.256,0.754 11.969,1.026c5.146,0.378 9.637,0.573 12.936,0.437c4.024,-0.176 8.498,-0.559 11.404,-1.697c2.23,-0.873 3.572,-2.217 3.529,-4.057c-0.041,-1.725 -1.314,-3.5 -4.299,-4.515c-2.054,-0.698 -4.96,-1.053 -8.836,-0.794c-5.73,0.437 -8.956,1.357 -10.674,2.35c-1.369,0.79 -1.846,1.645 -1.9,2.347c-0.07,0.898 0.533,1.606 1.091,1.823c1.114,0.43 2.736,0.648 4.472,0.727c2.369,0.109 4.949,-0.029 6.704,-0.179Z",
        width: 70,
    },
    {
        x: 0,
        y: 16,
        d:"M83.338,4.321c-0,0 -2.769,0.215 -7.032,0.482c-2.049,0.128 -4.437,0.252 -7.029,0.405c-2.933,0.173 -6.119,0.381 -9.359,0.517c-3.363,0.141 -6.779,0.239 -10.02,0.213c-4.456,-0.004 -8.276,-0.21 -11.633,-0.5c-4.551,-0.393 -8.249,-0.972 -11.517,-1.596c-3.368,-0.643 -6.278,-1.339 -9.196,-1.843c-2.037,-0.352 -4.075,-0.605 -6.263,-0.716c-2.89,-0.146 -6.031,-0.022 -9.787,0.503c4.726,-0.27 8.435,0.048 11.873,0.62c1.702,0.284 3.334,0.63 4.987,1.008c2.619,0.598 5.287,1.272 8.335,1.918c2.509,0.531 5.276,1.036 8.486,1.432c2.218,0.274 4.648,0.496 7.351,0.633c2.254,0.114 4.697,0.16 7.365,0.147c5.473,-0.062 11.439,-0.438 16.8,-0.921c0.68,-0.061 1.35,-0.121 2.007,-0.192c1.646,-0.177 3.213,-0.378 4.671,-0.574c5.886,-0.793 9.961,-1.536 9.961,-1.536Z",
        width: 76,
    },
    {
        x: 0,
        y: 8,
        d:"M85.814,2.338l14.939,-0.401c1.431,-0.05 3.858,-0.016 5.55,1.082c0.904,0.587 1.572,1.503 1.707,2.92c0.101,0.988 -0.418,1.805 -1.505,2.515c-1.123,0.733 -2.811,1.327 -5.083,1.823c-4.724,1.031 -11.905,1.591 -21.792,1.723c-4.421,0.076 -8.485,0.094 -12.297,0.071c-4.369,-0.026 -8.407,-0.118 -12.277,-0.296c-8.385,-0.385 -15.976,-1.171 -24.404,-2.544c-1.877,-0.295 -3.604,-0.573 -5.209,-0.811c-5.114,-0.757 -8.959,-1.234 -12.234,-1.466c-4.362,-0.309 -7.709,-0.153 -11.707,0.492c4.003,-0.437 7.333,-0.406 11.65,0.107c3.247,0.385 7.042,1.061 12.105,1.99c1.594,0.292 3.316,0.598 5.182,0.939c8.467,1.496 16.097,2.424 24.536,2.892c3.891,0.215 7.953,0.333 12.348,0.363c3.825,0.025 7.902,-0.025 12.337,-0.118c10.019,-0.244 17.292,-0.887 22.065,-2c2.465,-0.575 4.281,-1.282 5.488,-2.101c1.545,-1.049 2.169,-2.295 1.996,-3.714c-0.236,-1.825 -1.144,-2.981 -2.341,-3.694c-1.912,-1.138 -4.587,-1.1 -6.161,-0.975l-14.893,1.203Z",
        width: 120,
    },
];
const startGrainIndexes = [0, 8, 3, 14];

// function adjustWoodGrainLines() {
//     const shelfSvg = document.getElementById('shelfSvg');
//     const width = shelfSvg.clientWidth; // Get the current width of the SVG
//     // Determine the number of wood grain lines to show based on the width
//     // Add or remove lines by manipulating the SVG's DOM
// }

// // Listen for resize events
// window.addEventListener('resize', adjustWoodGrainLines);

// Initial adjustment
// adjustWoodGrainLines();
// function populateWoodGrains() {
//     const svgContainer = document.getElementById('shelf-svg');
  
//     woodGrains.forEach(grain => {
//       const pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
//       pathElement.setAttribute('d', grain.d);
//       pathElement.setAttribute('transform', grain.transform);
//       pathElement.setAttribute('style', grain.style);
//       svgContainer.appendChild(pathElement);
//     });
//   }

function adjustRect() {
    const container = document.getElementById('shelf-container');
    const rects = document.querySelectorAll('#shelf-svg .shelf-rect');
    const containerWidth = container.offsetWidth;
    let totalHeight = 0;
    let spacingBetweenRects = 0; // Adjust this value if there is space between rects
    const strokeWidthOffset = parseFloat(getComputedStyle(rects[0]).getPropertyValue('stroke-width')) / 2;

    rects.forEach((rect, index) => {
        rect.setAttribute('width', containerWidth - 2 * strokeWidthOffset);
        rect.setAttribute('x', strokeWidthOffset);
        rect.setAttribute('y', strokeWidthOffset + rect.getBBox().height * index);
        totalHeight += rect.getBBox().height + spacingBetweenRects;
    });

    container.style.height = `${totalHeight + 2 * strokeWidthOffset}px`;

    const rightWoodGrains = document.getElementById('shelf-wood-grain-line-group-right');
    rightWoodGrains.setAttribute('transform', `translate(${containerWidth - 2 * strokeWidthOffset}, 0)`);
}

// Adjust on load and window resize
window.addEventListener('load', adjustRect);
window.addEventListener('resize', adjustRect);

// function adjustShelfContainerHeight() {
//     // const container = document.getElementById('shelf-container');
//     // const rects = document.querySelectorAll('#shelf-svg .shelf-rect');
//     // let totalHeight = 0;
//     // let spacingBetweenRects = 0; // Adjust this value if there is space between rects

//     // rects.forEach(rect => {
//     //     // Add the height of each rect to the total height
//     //     totalHeight += rect.getBBox().height + spacingBetweenRects;
//     // });

//     // // Set the total height to the container
//     // container.style.height = `${totalHeight}px`;

//     // // If you want the outer container div to adjust as well, uncomment the following line
//     // // document.getElementById('shelf-container').style.height = `${totalHeight}px`;
// }

// // Call this function to initially set the container height and whenever rects are added or removed
// adjustShelfContainerHeight();
// window.addEventListener('load', adjustShelfContainerHeight);
// window.addEventListener('resize', adjustShelfContainerHeight);

function populateWoodGrains() {
    const container = document.getElementById('shelf-container');
    let lengthOfShelf = container.offsetWidth - 64;
    let floors = [0, 1, 2, 3];

    floors.forEach((floor, floorIndex) => {
        let nextGrainIndex = startGrainIndexes[floorIndex % startGrainIndexes.length];
        let roomForMoreGrains = true;
        let gap = lengthOfShelf;
        let offsetX = 32;

        while (roomForMoreGrains) {
            if (nextGrainIndex >= horizontalWoodGrains.length) {
                nextGrainIndex = 0;
            }

            let nextGrain = horizontalWoodGrains[nextGrainIndex];

            if (gap < nextGrain.width) {
                roomForMoreGrains = false;
            } else {
                insertGrain(floor, nextGrain, offsetX);
                gap -= nextGrain.width;
                offsetX += nextGrain.width;
                nextGrainIndex++;
            }
        }
    });
}

function updateWoodGrains() {
    // updateWoodGrainsPosition();
    updateWoodGrainsCount();
}

function updateWoodGrainsCount() {
    const floors = document.querySelectorAll('#shelf-svg .shelf-wood-grain-line-group-floor');
    const container = document.getElementById('shelf-container');
    let lengthOfShelf = container.offsetWidth - 64;
    // let floors = [0, 1, 2, 3];

    floors.forEach((floor, floorIndex) => {
        let nextGrainIndex = startGrainIndexes[floorIndex % startGrainIndexes.length];
        let roomForMoreGrains = true;
        let gap = lengthOfShelf;
        let grainTotalWidth = 0;
        let offsetX = 32;

        floor.querySelectorAll('path').forEach(path => {
            if (nextGrainIndex >= horizontalWoodGrains.length) {
                nextGrainIndex = 0;
            }

            let nextGrain = horizontalWoodGrains[nextGrainIndex];

            grainTotalWidth += nextGrain.width;

            if (grainTotalWidth > lengthOfShelf) {
                path.remove();
                roomForMoreGrains = false;
            } else {
                gap -= nextGrain.width;
                offsetX += nextGrain.width;
                nextGrainIndex++;
            }
        });

        if (roomForMoreGrains == false) {
            return 0;
        }
    
        while (roomForMoreGrains) {
            if (nextGrainIndex >= horizontalWoodGrains.length) {
                nextGrainIndex = 0;
            }

            let nextGrain = horizontalWoodGrains[nextGrainIndex];

            if (gap < nextGrain.width) {
                roomForMoreGrains = false;
            } else {
                insertGrain(floorIndex, nextGrain, offsetX);
                gap -= nextGrain.width;
                offsetX += nextGrain.width;
                nextGrainIndex++;
            }
        }
    });
}

// Dummy functions for demonstration
function getGapTotal(lengthOfShelf, floor) {
    // Calculate the remaining space
    return 100; // Placeholder return
}

function insertGrain(floor, grain, x) {
    const floors = document.querySelectorAll('#shelf-svg .shelf-wood-grain-line-group-floor');
    const newPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    newPath.setAttribute('d', grain.d);
    let heightOfShelf = 192;
    const newX = grain.x + x;
    const newY = grain.y + floor * heightOfShelf;
    newPath.setAttribute('transform', `translate(${newX}, ${newY})`);
    newPath.setAttribute('class', 'shelf-wood-grain-line-path'); // Assuming you want to apply styles
    floors[floor].appendChild(newPath);
}

function removeGrain(floor, grain, x) {
    const floors = document.querySelectorAll('#shelf-svg .shelf-wood-grain-line-group-floor');
    const newPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    newPath.setAttribute('d', grain.d);
    let heightOfShelf = 192;
    const newX = grain.x + x;
    const newY = grain.y + floor * heightOfShelf;
    newPath.setAttribute('transform', `translate(${newX}, ${newY})`);
    newPath.setAttribute('class', 'shelf-wood-grain-line-path'); // Assuming you want to apply styles
    floors[floor].appendChild(newPath);
}

window.addEventListener('load', populateWoodGrains);
window.addEventListener('resize', updateWoodGrains);