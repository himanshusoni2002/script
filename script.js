(function(){
    var script = {
 "definitions": [{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": -35.82,
  "pitch": 0
 },
 "id": "camera_40463EFD_5B73_1C7B_41B1_DB96E53FDDCB",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_EE1315C2_E50D_0EB4_41EA_7018A9A44044_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE29EC70_E50F_1E55_41CD_5DDBCB2C3F0E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE26FD1D_E50F_1FCC_41E6_674A1C467F24"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE2F3704_E50F_0BBD_41E3_B8682A50A3B9"
  }
 ],
 "hfov": 360,
 "label": "Geology Lobby",
 "id": "panorama_EE29323A_E50F_05D4_41E3_1A050EB18ADF",
 "thumbnailUrl": "media/panorama_EE29323A_E50F_05D4_41E3_1A050EB18ADF_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 140,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_EE29323A_E50F_05D4_41E3_1A050EB18ADF_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE29323A_E50F_05D4_41E3_1A050EB18ADF_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE29323A_E50F_05D4_41E3_1A050EB18ADF_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EE29323A_E50F_05D4_41E3_1A050EB18ADF_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE29323A_E50F_05D4_41E3_1A050EB18ADF_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE29323A_E50F_05D4_41E3_1A050EB18ADF_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EE29323A_E50F_05D4_41E3_1A050EB18ADF_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE29323A_E50F_05D4_41E3_1A050EB18ADF_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE29323A_E50F_05D4_41E3_1A050EB18ADF_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EE29323A_E50F_05D4_41E3_1A050EB18ADF_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE29323A_E50F_05D4_41E3_1A050EB18ADF_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE29323A_E50F_05D4_41E3_1A050EB18ADF_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EE29323A_E50F_05D4_41E3_1A050EB18ADF_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE29323A_E50F_05D4_41E3_1A050EB18ADF_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE29323A_E50F_05D4_41E3_1A050EB18ADF_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EE29323A_E50F_05D4_41E3_1A050EB18ADF_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE29323A_E50F_05D4_41E3_1A050EB18ADF_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE29323A_E50F_05D4_41E3_1A050EB18ADF_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EE29323A_E50F_05D4_41E3_1A050EB18ADF_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_EE29323A_E50F_05D4_41E3_1A050EB18ADF_tcap0",
  "this.overlay_58168B04_4CC1_B66B_41C7_D6DCEFA1BEAE",
  "this.overlay_549177FE_4CC3_DD97_41D2_DFCD890FBE74",
  "this.overlay_5432C05E_4CC3_B294_41BD_013B0B186BB5",
  "this.overlay_73236924_51C3_082F_41D2_68F020B4E3B6"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_EE3B7777_E50F_0A5C_41E0_975B9D854D5C_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_EE29EC70_E50F_1E55_41CD_5DDBCB2C3F0E_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE3B7777_E50F_0A5C_41E0_975B9D854D5C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE2BA753_E50D_0A54_41A5_26D2D3FDC5E8"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE24E1F2_E50D_0654_41C8_449A85C554A0"
  }
 ],
 "hfov": 360,
 "label": "Lobby Gfloor",
 "id": "panorama_EE0071D6_E50D_065C_41E1_377D18C833EB",
 "thumbnailUrl": "media/panorama_EE0071D6_E50D_065C_41E1_377D18C833EB_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 140,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_EE0071D6_E50D_065C_41E1_377D18C833EB_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE0071D6_E50D_065C_41E1_377D18C833EB_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE0071D6_E50D_065C_41E1_377D18C833EB_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EE0071D6_E50D_065C_41E1_377D18C833EB_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE0071D6_E50D_065C_41E1_377D18C833EB_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE0071D6_E50D_065C_41E1_377D18C833EB_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EE0071D6_E50D_065C_41E1_377D18C833EB_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE0071D6_E50D_065C_41E1_377D18C833EB_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE0071D6_E50D_065C_41E1_377D18C833EB_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EE0071D6_E50D_065C_41E1_377D18C833EB_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE0071D6_E50D_065C_41E1_377D18C833EB_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE0071D6_E50D_065C_41E1_377D18C833EB_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EE0071D6_E50D_065C_41E1_377D18C833EB_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE0071D6_E50D_065C_41E1_377D18C833EB_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE0071D6_E50D_065C_41E1_377D18C833EB_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EE0071D6_E50D_065C_41E1_377D18C833EB_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE0071D6_E50D_065C_41E1_377D18C833EB_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE0071D6_E50D_065C_41E1_377D18C833EB_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EE0071D6_E50D_065C_41E1_377D18C833EB_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_EE0071D6_E50D_065C_41E1_377D18C833EB_tcap0",
  "this.overlay_6C1C8ABC_4C4E_F79B_41CA_054D3D9C5F81",
  "this.overlay_6D6619B7_4C41_B594_41C3_E5C95FA3AD4A",
  "this.overlay_6EEB30E5_4C41_F3B5_41B0_F253E5112799",
  "this.overlay_73C4F530_51C7_1827_41C7_CF07C68D24AA"
 ]
},
{
 "class": "PlayList",
 "id": "mainPlayList",
 "items": [
  {
   "media": "this.panorama_EE441998_E50D_06D4_41B6_67E082FA8E64",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EE2D7730_E50F_0BD4_41EA_76D04CAB3845",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EE2D7730_E50F_0BD4_41EA_76D04CAB3845_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EE292CF3_E50F_1E54_41EB_C108BD9CCB49",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EE292CF3_E50F_1E54_41EB_C108BD9CCB49_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EE2CF389_E50F_0AB4_41EC_79A5E3F131A5",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EE2CF389_E50F_0AB4_41EC_79A5E3F131A5_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EE260721_E50F_0BF7_41E7_1A5DCE792CB7",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EE260721_E50F_0BF7_41E7_1A5DCE792CB7_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EE26521F_E50F_05CC_41CC_305CAB4B0D4F",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EE26521F_E50F_05CC_41CC_305CAB4B0D4F_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EE29EC70_E50F_1E55_41CD_5DDBCB2C3F0E",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EE29EC70_E50F_1E55_41CD_5DDBCB2C3F0E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EE3B7777_E50F_0A5C_41E0_975B9D854D5C",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EE3B7777_E50F_0A5C_41E0_975B9D854D5C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EE00BCB0_E50D_1ED4_41E9_660482BF251F",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EE00BCB0_E50D_1ED4_41E9_660482BF251F_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EE26FD1D_E50F_1FCC_41E6_674A1C467F24",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EE26FD1D_E50F_1FCC_41E6_674A1C467F24_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EE2DE5C7_E50D_0EBC_41EB_7F20078D80DE",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EE2DE5C7_E50D_0EBC_41EB_7F20078D80DE_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EE2B5235_E50D_05DC_41DC_C7CFD9A8CD5C",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EE2B5235_E50D_05DC_41DC_C7CFD9A8CD5C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EE2E0473_E50D_0E54_41E9_F7FED4507DF8",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EE2E0473_E50D_0E54_41E9_F7FED4507DF8_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EE138EC8_E50D_1AB5_41EB_583D3AEB8500",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EE138EC8_E50D_1AB5_41EB_583D3AEB8500_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EE1120BD_E50D_06CC_41E5_D131A255BF82",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EE1120BD_E50D_06CC_41E5_D131A255BF82_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EE024038_E50D_05D5_41D7_ED0C1FEF4C03",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EE024038_E50D_05D5_41D7_ED0C1FEF4C03_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EE2D527F_E50D_0A4C_41E1_6EF067CB57A1",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EE2D527F_E50D_0A4C_41E1_6EF067CB57A1_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EE2B0BC9_E50F_1AB7_41E4_A37BF9465CB5",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EE2B0BC9_E50F_1AB7_41E4_A37BF9465CB5_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EE1315C2_E50D_0EB4_41EA_7018A9A44044",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EE1315C2_E50D_0EB4_41EA_7018A9A44044_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EE136BCF_E50D_3A4B_41E8_E76CE85C4CC2",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EE136BCF_E50D_3A4B_41E8_E76CE85C4CC2_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EE10EDCE_E50F_1E4D_41EA_970C8ADE1052",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EE10EDCE_E50F_1E4D_41EA_970C8ADE1052_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EE2E82BA_E50F_0AD4_4188_A17A1C63EA59",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EE2E82BA_E50F_0AD4_4188_A17A1C63EA59_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EE2957C9_E50F_0AB4_41AD_99CDB988813A",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EE2957C9_E50F_0AB4_41AD_99CDB988813A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EE29323A_E50F_05D4_41E3_1A050EB18ADF",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EE29323A_E50F_05D4_41E3_1A050EB18ADF_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EE2F3704_E50F_0BBD_41E3_B8682A50A3B9",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EE2F3704_E50F_0BBD_41E3_B8682A50A3B9_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EE2F01CE_E50F_064C_41D4_83774C3F79EA",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EE2F01CE_E50F_064C_41D4_83774C3F79EA_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EE286634_E50F_0DDC_41C6_1FA8A4444D48",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EE286634_E50F_0DDC_41C6_1FA8A4444D48_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EE3A1C30_E50F_1DD4_41C1_4345802A63F5",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EE3A1C30_E50F_1DD4_41C1_4345802A63F5_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EE24E1F2_E50D_0654_41C8_449A85C554A0",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EE24E1F2_E50D_0654_41C8_449A85C554A0_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EE0071D6_E50D_065C_41E1_377D18C833EB",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EE0071D6_E50D_065C_41E1_377D18C833EB_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EE2BB6BB_E50D_0AD4_41B6_AEE7D63D1816",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EE2BB6BB_E50D_0AD4_41B6_AEE7D63D1816_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EE2A1D11_E50D_1FD4_41E3_3ED918C5C28B",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EE2A1D11_E50D_1FD4_41E3_3ED918C5C28B_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EE2BA753_E50D_0A54_41A5_26D2D3FDC5E8",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EE2BA753_E50D_0A54_41A5_26D2D3FDC5E8_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EE12CB61_E50D_FA77_41DA_BEC4D595DB4F",
   "class": "PanoramaPlayListItem",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_EE12CB61_E50D_FA77_41DA_BEC4D595DB4F_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 0)",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 5.51,
  "pitch": -16.53
 },
 "id": "camera_420DFB21_5B73_258B_41C1_0A63BADF1747",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 145.1,
  "pitch": 0
 },
 "id": "camera_47409238_5B73_67F9_4173_2C3BFDF9B4DE",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": -146.94,
  "pitch": 3.67
 },
 "id": "camera_40639EC1_5B73_1C8B_41A3_C543E99CD182",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 172.65,
  "pitch": 0
 },
 "id": "camera_41567D3A_5B73_1DF8_41BD_578D884CE6BB",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE1315C2_E50D_0EB4_41EA_7018A9A44044"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE00BCB0_E50D_1ED4_41E9_660482BF251F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE286634_E50F_0DDC_41C6_1FA8A4444D48"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE2D527F_E50D_0A4C_41E1_6EF067CB57A1"
  }
 ],
 "hfov": 360,
 "label": "Stairs 1stFloor",
 "id": "panorama_EE2B0BC9_E50F_1AB7_41E4_A37BF9465CB5",
 "thumbnailUrl": "media/panorama_EE2B0BC9_E50F_1AB7_41E4_A37BF9465CB5_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 140,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_EE2B0BC9_E50F_1AB7_41E4_A37BF9465CB5_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2B0BC9_E50F_1AB7_41E4_A37BF9465CB5_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2B0BC9_E50F_1AB7_41E4_A37BF9465CB5_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EE2B0BC9_E50F_1AB7_41E4_A37BF9465CB5_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2B0BC9_E50F_1AB7_41E4_A37BF9465CB5_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2B0BC9_E50F_1AB7_41E4_A37BF9465CB5_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EE2B0BC9_E50F_1AB7_41E4_A37BF9465CB5_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2B0BC9_E50F_1AB7_41E4_A37BF9465CB5_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2B0BC9_E50F_1AB7_41E4_A37BF9465CB5_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EE2B0BC9_E50F_1AB7_41E4_A37BF9465CB5_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2B0BC9_E50F_1AB7_41E4_A37BF9465CB5_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2B0BC9_E50F_1AB7_41E4_A37BF9465CB5_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EE2B0BC9_E50F_1AB7_41E4_A37BF9465CB5_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2B0BC9_E50F_1AB7_41E4_A37BF9465CB5_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2B0BC9_E50F_1AB7_41E4_A37BF9465CB5_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EE2B0BC9_E50F_1AB7_41E4_A37BF9465CB5_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2B0BC9_E50F_1AB7_41E4_A37BF9465CB5_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2B0BC9_E50F_1AB7_41E4_A37BF9465CB5_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EE2B0BC9_E50F_1AB7_41E4_A37BF9465CB5_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_EE2B0BC9_E50F_1AB7_41E4_A37BF9465CB5_tcap0",
  "this.overlay_784675FA_4DC1_A573_41B7_315C136B8ABE",
  "this.overlay_78B4AED4_4DCE_67B7_41D1_9B6C82155CAF",
  "this.overlay_71058F15_4DC2_A6B1_41C3_65F3C042FDA4",
  "this.overlay_75A30D4F_4DC6_AA91_41CB_7D8163302FE7",
  "this.overlay_73369406_51CF_3FEB_415E_4A450CD78D6B",
  "this.overlay_73CEC5E2_51CF_182B_41D2_668BD237C595",
  "this.overlay_721B1DE2_51CF_082B_41C2_A8039EBA16C9"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": -146.94,
  "pitch": 2.76
 },
 "id": "camera_4192EEA7_5B73_1C97_41C1_44F32E65411A",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": -36.73,
  "pitch": -7.35
 },
 "id": "camera_417AECDD_5B73_1CB8_41D4_E5CF1B9E04E9",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": -9.18,
  "pitch": 4.59
 },
 "id": "camera_41BCCE66_5B73_1F88_41BF_F2AFF9CCEADB",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 24.8,
  "pitch": 5.51
 },
 "id": "camera_4722926B_5B73_6798_41C2_877DAEE4160D",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": -119.39,
  "pitch": 1.84
 },
 "id": "camera_4734B27E_5B73_6478_41D2_FE11C42F14D1",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": -139.59,
  "pitch": 8.27
 },
 "id": "camera_40F3A067_5B73_6397_41BB_5B8A1B587BA2",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "duration": 500,
 "class": "FadeOutEffect",
 "id": "FadeOutEffect_63A922B2_51C1_182A_41AC_10042BE773F5",
 "easing": "cubic_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_EE2DE5C7_E50D_0EBC_41EB_7F20078D80DE_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 20.2,
  "pitch": -3.67
 },
 "id": "camera_400D1FA2_5B73_1C89_41D6_4ECA83D29730",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_EE138EC8_E50D_1AB5_41EB_583D3AEB8500_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": -79.9,
  "pitch": 1.84
 },
 "id": "camera_477FD1F8_5B73_6479_41D4_043ED5BE6C7D",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 4.59,
  "pitch": 0
 },
 "id": "camera_42063B42_5B73_2589_41CD_72506864F520",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE286634_E50F_0DDC_41C6_1FA8A4444D48"
  }
 ],
 "hfov": 360,
 "label": "ClassRoom",
 "id": "panorama_EE2E0473_E50D_0E54_41E9_F7FED4507DF8",
 "thumbnailUrl": "media/panorama_EE2E0473_E50D_0E54_41E9_F7FED4507DF8_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 140,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_EE2E0473_E50D_0E54_41E9_F7FED4507DF8_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2E0473_E50D_0E54_41E9_F7FED4507DF8_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2E0473_E50D_0E54_41E9_F7FED4507DF8_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EE2E0473_E50D_0E54_41E9_F7FED4507DF8_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2E0473_E50D_0E54_41E9_F7FED4507DF8_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2E0473_E50D_0E54_41E9_F7FED4507DF8_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EE2E0473_E50D_0E54_41E9_F7FED4507DF8_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2E0473_E50D_0E54_41E9_F7FED4507DF8_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2E0473_E50D_0E54_41E9_F7FED4507DF8_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EE2E0473_E50D_0E54_41E9_F7FED4507DF8_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2E0473_E50D_0E54_41E9_F7FED4507DF8_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2E0473_E50D_0E54_41E9_F7FED4507DF8_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EE2E0473_E50D_0E54_41E9_F7FED4507DF8_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2E0473_E50D_0E54_41E9_F7FED4507DF8_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2E0473_E50D_0E54_41E9_F7FED4507DF8_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EE2E0473_E50D_0E54_41E9_F7FED4507DF8_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2E0473_E50D_0E54_41E9_F7FED4507DF8_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2E0473_E50D_0E54_41E9_F7FED4507DF8_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EE2E0473_E50D_0E54_41E9_F7FED4507DF8_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_EE2E0473_E50D_0E54_41E9_F7FED4507DF8_tcap0",
  "this.overlay_7099530E_51BF_39FB_41B7_079C0862A7A3",
  "this.overlay_75CE2DC1_51C1_0869_41C1_10C826961A2E"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE2BB6BB_E50D_0AD4_41B6_AEE7D63D1816"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE00BCB0_E50D_1ED4_41E9_660482BF251F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE2B5235_E50D_05DC_41DC_C7CFD9A8CD5C"
  }
 ],
 "hfov": 360,
 "label": "Lab Lobby",
 "id": "panorama_EE2BA753_E50D_0A54_41A5_26D2D3FDC5E8",
 "thumbnailUrl": "media/panorama_EE2BA753_E50D_0A54_41A5_26D2D3FDC5E8_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 140,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_EE2BA753_E50D_0A54_41A5_26D2D3FDC5E8_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2BA753_E50D_0A54_41A5_26D2D3FDC5E8_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2BA753_E50D_0A54_41A5_26D2D3FDC5E8_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EE2BA753_E50D_0A54_41A5_26D2D3FDC5E8_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2BA753_E50D_0A54_41A5_26D2D3FDC5E8_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2BA753_E50D_0A54_41A5_26D2D3FDC5E8_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EE2BA753_E50D_0A54_41A5_26D2D3FDC5E8_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2BA753_E50D_0A54_41A5_26D2D3FDC5E8_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2BA753_E50D_0A54_41A5_26D2D3FDC5E8_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EE2BA753_E50D_0A54_41A5_26D2D3FDC5E8_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2BA753_E50D_0A54_41A5_26D2D3FDC5E8_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2BA753_E50D_0A54_41A5_26D2D3FDC5E8_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EE2BA753_E50D_0A54_41A5_26D2D3FDC5E8_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2BA753_E50D_0A54_41A5_26D2D3FDC5E8_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2BA753_E50D_0A54_41A5_26D2D3FDC5E8_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EE2BA753_E50D_0A54_41A5_26D2D3FDC5E8_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2BA753_E50D_0A54_41A5_26D2D3FDC5E8_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2BA753_E50D_0A54_41A5_26D2D3FDC5E8_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EE2BA753_E50D_0A54_41A5_26D2D3FDC5E8_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_EE2BA753_E50D_0A54_41A5_26D2D3FDC5E8_tcap0",
  "this.overlay_7CE40015_4DBE_5AB1_41C2_4B5BF0DE02B4",
  "this.overlay_7F17B833_4DBE_AAF1_41D2_3A9CDEDE17D8",
  "this.overlay_7DDE89C3_4DBE_ED91_4171_C634A246E477",
  "this.overlay_45DD7CFE_50C1_081A_41D0_1EA3FD60A27D",
  "this.overlay_737DD112_51C3_19EB_41CF_7B1B005121EC",
  "this.overlay_724A4802_51C1_37EB_41B5_9F6EA56FC294"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": -132.24,
  "pitch": 8.27
 },
 "id": "camera_411F3DA4_5B73_1C88_41C8_B506940DF623",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE2D527F_E50D_0A4C_41E1_6EF067CB57A1"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE2BA753_E50D_0A54_41A5_26D2D3FDC5E8"
  }
 ],
 "hfov": 360,
 "label": "Lobby Gfloor",
 "id": "panorama_EE2BB6BB_E50D_0AD4_41B6_AEE7D63D1816",
 "thumbnailUrl": "media/panorama_EE2BB6BB_E50D_0AD4_41B6_AEE7D63D1816_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 140,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_EE2BB6BB_E50D_0AD4_41B6_AEE7D63D1816_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2BB6BB_E50D_0AD4_41B6_AEE7D63D1816_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2BB6BB_E50D_0AD4_41B6_AEE7D63D1816_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EE2BB6BB_E50D_0AD4_41B6_AEE7D63D1816_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2BB6BB_E50D_0AD4_41B6_AEE7D63D1816_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2BB6BB_E50D_0AD4_41B6_AEE7D63D1816_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EE2BB6BB_E50D_0AD4_41B6_AEE7D63D1816_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2BB6BB_E50D_0AD4_41B6_AEE7D63D1816_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2BB6BB_E50D_0AD4_41B6_AEE7D63D1816_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EE2BB6BB_E50D_0AD4_41B6_AEE7D63D1816_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2BB6BB_E50D_0AD4_41B6_AEE7D63D1816_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2BB6BB_E50D_0AD4_41B6_AEE7D63D1816_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EE2BB6BB_E50D_0AD4_41B6_AEE7D63D1816_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2BB6BB_E50D_0AD4_41B6_AEE7D63D1816_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2BB6BB_E50D_0AD4_41B6_AEE7D63D1816_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EE2BB6BB_E50D_0AD4_41B6_AEE7D63D1816_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2BB6BB_E50D_0AD4_41B6_AEE7D63D1816_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2BB6BB_E50D_0AD4_41B6_AEE7D63D1816_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EE2BB6BB_E50D_0AD4_41B6_AEE7D63D1816_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_EE2BB6BB_E50D_0AD4_41B6_AEE7D63D1816_tcap0",
  "this.overlay_74F7077D_4DC1_E571_41C8_F164162A8317",
  "this.overlay_774C3FD1_4DC1_E5B1_41D0_596729583CE5"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_EE2E0473_E50D_0E54_41E9_F7FED4507DF8_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": -178.16,
  "pitch": -0.92
 },
 "id": "camera_414E7CFC_5B73_1C78_41B9_E3A1F83C1463",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 154.29,
  "pitch": 2.76
 },
 "id": "camera_40BAF128_5B73_6599_41D1_FB950387AD05",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 25.71,
  "pitch": 5.51
 },
 "id": "camera_41125DBF_5B73_1CF8_41CD_A7CAA38115E8",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE26521F_E50F_05CC_41CC_305CAB4B0D4F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE2D7730_E50F_0BD4_41EA_76D04CAB3845"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE2957C9_E50F_0AB4_41AD_99CDB988813A"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_EE441998_E50D_06D4_41B6_67E082FA8E64",
 "thumbnailUrl": "media/panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_t.jpg",
 "label": "Entry",
 "pitch": 0,
 "hfovMax": 110,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_tcap0",
  "this.overlay_351B192E_246F_17F5_4171_F2C8219B0923",
  "this.overlay_364342C0_246F_7AAE_4171_05DA4D7FD5F0",
  "this.overlay_35A1E6C5_2461_7AB6_41BF_271F704B5F04",
  "this.overlay_5DBCC98D_4874_8D35_41C5_4FF534544361",
  "this.overlay_682FC32E_48B4_7D74_4186_1C0B1D22DED4",
  "this.overlay_695CBE6F_48B5_87F5_41D0_8DC364A6E2F8",
  "this.overlay_69864B52_48B5_8D2C_41BC_569A8CC10993"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 3.67,
  "pitch": 2.76
 },
 "id": "camera_402A9F3D_5B73_1DFB_41BD_C37F0E5AFDEF",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": -35.82,
  "pitch": 1.84
 },
 "id": "camera_4212AB81_5B73_248B_41D3_B06C61FDCE23",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 149.69,
  "pitch": 11.94
 },
 "id": "camera_42282AA4_5B73_2489_41CD_8174E0F2E1DF",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_EE00BCB0_E50D_1ED4_41E9_660482BF251F_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 135,
  "pitch": 11.94
 },
 "id": "camera_42FECBBF_5B73_24F7_41D1_1504973C14D7",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 15.61,
  "pitch": 0.92
 },
 "id": "camera_466CB3B0_5B73_6488_41AC_98070187EC05",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE2E82BA_E50F_0AD4_4188_A17A1C63EA59"
  }
 ],
 "hfov": 360,
 "label": "Library",
 "id": "panorama_EE260721_E50F_0BF7_41E7_1A5DCE792CB7",
 "thumbnailUrl": "media/panorama_EE260721_E50F_0BF7_41E7_1A5DCE792CB7_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 140,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_EE260721_E50F_0BF7_41E7_1A5DCE792CB7_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE260721_E50F_0BF7_41E7_1A5DCE792CB7_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE260721_E50F_0BF7_41E7_1A5DCE792CB7_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EE260721_E50F_0BF7_41E7_1A5DCE792CB7_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE260721_E50F_0BF7_41E7_1A5DCE792CB7_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE260721_E50F_0BF7_41E7_1A5DCE792CB7_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EE260721_E50F_0BF7_41E7_1A5DCE792CB7_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE260721_E50F_0BF7_41E7_1A5DCE792CB7_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE260721_E50F_0BF7_41E7_1A5DCE792CB7_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EE260721_E50F_0BF7_41E7_1A5DCE792CB7_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE260721_E50F_0BF7_41E7_1A5DCE792CB7_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE260721_E50F_0BF7_41E7_1A5DCE792CB7_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EE260721_E50F_0BF7_41E7_1A5DCE792CB7_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE260721_E50F_0BF7_41E7_1A5DCE792CB7_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE260721_E50F_0BF7_41E7_1A5DCE792CB7_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EE260721_E50F_0BF7_41E7_1A5DCE792CB7_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE260721_E50F_0BF7_41E7_1A5DCE792CB7_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE260721_E50F_0BF7_41E7_1A5DCE792CB7_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EE260721_E50F_0BF7_41E7_1A5DCE792CB7_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_EE260721_E50F_0BF7_41E7_1A5DCE792CB7_tcap0",
  "this.overlay_68155209_48CB_9F3D_41B5_D68F33C8EABF",
  "this.overlay_735E109D_51C0_F819_41AD_D979E921795E"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": -96.43,
  "pitch": 8.27
 },
 "id": "camera_40749EDF_5B73_1CB7_41B6_353622E716D8",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_EE0071D6_E50D_065C_41E1_377D18C833EB_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": -178.16,
  "pitch": -4.59
 },
 "id": "camera_40E2A033_5B73_638F_41C1_BF775997D2A3",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 9.18,
  "pitch": 6.43
 },
 "id": "camera_42D5CC14_5B73_2389_41C3_B5587ABD6529",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_EE2E82BA_E50F_0AD4_4188_A17A1C63EA59_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "camera_40A9F0F6_5B73_6476_41BC_9AF314B743E6",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_EE2B5235_E50D_05DC_41DC_C7CFD9A8CD5C_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_EE2F01CE_E50F_064C_41D4_83774C3F79EA_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": -130.41,
  "pitch": 9.18
 },
 "id": "camera_47F542EF_5B73_6498_4170_9EDCCF367D8E",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "backgroundColorRatios": [],
 "bodyPaddingRight": 5,
 "id": "window_488F350A_514F_19FB_41BD_2A69B0BF6681",
 "bodyBackgroundColorDirection": "vertical",
 "bodyPaddingTop": 5,
 "scrollBarColor": "#000000",
 "shadowHorizontalLength": 3,
 "scrollBarVisible": "rollOver",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "width": 400,
 "shadowVerticalLength": 0,
 "horizontalAlign": "center",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "scrollBarOpacity": 0.5,
 "headerVerticalAlign": "middle",
 "minHeight": 20,
 "headerBackgroundColorRatios": [
  0,
  1,
  1
 ],
 "modal": true,
 "titlePaddingLeft": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "veilColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "backgroundColor": [],
 "titleFontColor": "#000000",
 "veilColorDirection": "horizontal",
 "title": "International Conference Jan 2024",
 "verticalAlign": "middle",
 "minWidth": 20,
 "titleFontSize": "1.29vmin",
 "headerBackgroundColorDirection": "vertical",
 "height": 600,
 "shadowSpread": 1,
 "headerBorderSize": 0,
 "shadow": true,
 "bodyPaddingBottom": 5,
 "titleFontWeight": "normal",
 "backgroundOpacity": 1,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "paddingLeft": 0,
 "propagateClick": false,
 "overflow": "scroll",
 "footerHeight": 5,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "veilOpacity": 0.4,
 "headerPaddingRight": 10,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingRight": 5,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "children": [
  "this.htmlText_488EC50B_514F_19F9_41D3_55957F269BD2"
 ],
 "closeButtonIconHeight": 12,
 "layout": "vertical",
 "bodyBorderSize": 0,
 "shadowColor": "#000000",
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorDirection": "vertical",
 "titleFontFamily": "Arial",
 "titleFontStyle": "normal",
 "borderSize": 0,
 "headerPaddingBottom": 10,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonIconColor": "#000000",
 "headerBorderColor": "#000000",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "headerPaddingTop": 10,
 "shadowBlurRadius": 6,
 "headerPaddingLeft": 10,
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "titleTextDecoration": "none",
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "headerBackgroundOpacity": 1,
 "closeButtonBackgroundColorRatios": [],
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "bodyPaddingLeft": 5,
 "gap": 10,
 "paddingBottom": 0,
 "headerBackgroundColor": [
  "#FF9900",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "class": "Window",
 "borderRadius": 5,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "closeButtonIconLineWidth": 2,
 "titlePaddingBottom": 5,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "data": {
  "name": "Window25781"
 },
 "bodyBorderColor": "#000000"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_EE10EDCE_E50F_1E4D_41EA_970C8ADE1052_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE3B7777_E50F_0A5C_41E0_975B9D854D5C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE29323A_E50F_05D4_41E3_1A050EB18ADF"
  }
 ],
 "hfov": 360,
 "label": "Reception",
 "id": "panorama_EE29EC70_E50F_1E55_41CD_5DDBCB2C3F0E",
 "thumbnailUrl": "media/panorama_EE29EC70_E50F_1E55_41CD_5DDBCB2C3F0E_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 140,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_EE29EC70_E50F_1E55_41CD_5DDBCB2C3F0E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE29EC70_E50F_1E55_41CD_5DDBCB2C3F0E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE29EC70_E50F_1E55_41CD_5DDBCB2C3F0E_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EE29EC70_E50F_1E55_41CD_5DDBCB2C3F0E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE29EC70_E50F_1E55_41CD_5DDBCB2C3F0E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE29EC70_E50F_1E55_41CD_5DDBCB2C3F0E_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EE29EC70_E50F_1E55_41CD_5DDBCB2C3F0E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE29EC70_E50F_1E55_41CD_5DDBCB2C3F0E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE29EC70_E50F_1E55_41CD_5DDBCB2C3F0E_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EE29EC70_E50F_1E55_41CD_5DDBCB2C3F0E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE29EC70_E50F_1E55_41CD_5DDBCB2C3F0E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE29EC70_E50F_1E55_41CD_5DDBCB2C3F0E_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EE29EC70_E50F_1E55_41CD_5DDBCB2C3F0E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE29EC70_E50F_1E55_41CD_5DDBCB2C3F0E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE29EC70_E50F_1E55_41CD_5DDBCB2C3F0E_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EE29EC70_E50F_1E55_41CD_5DDBCB2C3F0E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE29EC70_E50F_1E55_41CD_5DDBCB2C3F0E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE29EC70_E50F_1E55_41CD_5DDBCB2C3F0E_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EE29EC70_E50F_1E55_41CD_5DDBCB2C3F0E_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_EE29EC70_E50F_1E55_41CD_5DDBCB2C3F0E_tcap0",
  "this.overlay_5E66C049_4CC6_52FC_41CA_D869F1C64568",
  "this.overlay_5FC54751_4CC6_BEED_41AA_3FAF93BA9E87",
  "this.overlay_735AA0E7_51C1_3829_41C3_E0CBF39AD947",
  "this.overlay_73DC359E_51C3_181B_41D3_127B5EE8DD41"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": -82.65,
  "pitch": -8.27
 },
 "id": "camera_4167DCBE_5B73_1CF8_41C6_B79B23695A78",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 101.02,
  "pitch": 0.92
 },
 "id": "camera_409D7192_5B73_6489_41D3_11DB0C4BA544",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 131,
  "class": "PanoramaCameraPosition",
  "yaw": -140.51,
  "pitch": -5.51
 },
 "id": "camera_40EF3005_5B73_638B_41C3_5E1EBAEEFEE0",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_EE29323A_E50F_05D4_41E3_1A050EB18ADF_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 131,
  "class": "PanoramaCameraPosition",
  "yaw": 41.33,
  "pitch": 5.51
 },
 "id": "camera_42B3FC53_5B73_238F_41D3_0F4732B35C37",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_EE2BA753_E50D_0A54_41A5_26D2D3FDC5E8_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_EE2CF389_E50F_0AB4_41EC_79A5E3F131A5_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 45,
  "pitch": 0
 },
 "id": "camera_40C52096_5B73_6489_41C0_115911BC789D",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE2BA753_E50D_0A54_41A5_26D2D3FDC5E8"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE138EC8_E50D_1AB5_41EB_583D3AEB8500"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE2DE5C7_E50D_0EBC_41EB_7F20078D80DE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE3A1C30_E50F_1DD4_41C1_4345802A63F5"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE2E0473_E50D_0E54_41E9_F7FED4507DF8"
  }
 ],
 "hfov": 360,
 "label": "Garden",
 "id": "panorama_EE00BCB0_E50D_1ED4_41E9_660482BF251F",
 "thumbnailUrl": "media/panorama_EE00BCB0_E50D_1ED4_41E9_660482BF251F_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 140,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_EE00BCB0_E50D_1ED4_41E9_660482BF251F_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE00BCB0_E50D_1ED4_41E9_660482BF251F_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE00BCB0_E50D_1ED4_41E9_660482BF251F_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EE00BCB0_E50D_1ED4_41E9_660482BF251F_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE00BCB0_E50D_1ED4_41E9_660482BF251F_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE00BCB0_E50D_1ED4_41E9_660482BF251F_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EE00BCB0_E50D_1ED4_41E9_660482BF251F_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE00BCB0_E50D_1ED4_41E9_660482BF251F_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE00BCB0_E50D_1ED4_41E9_660482BF251F_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EE00BCB0_E50D_1ED4_41E9_660482BF251F_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE00BCB0_E50D_1ED4_41E9_660482BF251F_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE00BCB0_E50D_1ED4_41E9_660482BF251F_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EE00BCB0_E50D_1ED4_41E9_660482BF251F_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE00BCB0_E50D_1ED4_41E9_660482BF251F_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE00BCB0_E50D_1ED4_41E9_660482BF251F_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EE00BCB0_E50D_1ED4_41E9_660482BF251F_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE00BCB0_E50D_1ED4_41E9_660482BF251F_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE00BCB0_E50D_1ED4_41E9_660482BF251F_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EE00BCB0_E50D_1ED4_41E9_660482BF251F_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_EE00BCB0_E50D_1ED4_41E9_660482BF251F_tcap0",
  "this.overlay_09C56CB3_4C41_EBF1_41B4_6DF82DCD52F6",
  "this.overlay_099B81E4_4C41_DD97_41D1_7752F618B6FE",
  "this.overlay_087876A0_4C42_A78E_41C9_99E1218949D4",
  "this.overlay_083A9D6F_4C42_AA91_41C3_1B61EECB42C4",
  "this.overlay_0BD0BF7B_4C42_A571_41C4_7F656507C904",
  "this.overlay_732B801E_51C1_781B_41CC_4694B2D63511",
  "this.overlay_72A9FA2F_51DF_083A_41AE_32C7E03A2381",
  "this.overlay_724AF163_51DF_1829_41D0_5F01460C499B",
  "this.overlay_7565A0E4_51C1_382F_41C9_8653EE606184",
  "this.overlay_75B4A74B_51C1_1879_41C0_2E75B92F7AFD"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": -146.94,
  "pitch": 9.18
 },
 "id": "camera_41C7AE1A_5B73_1FB9_41BA_224C1B3478E0",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_EE024038_E50D_05D5_41D7_ED0C1FEF4C03_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "gyroscopeEnabled": true,
 "viewerArea": "this.MainViewer",
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "touchControlMode": "drag_rotation",
 "buttonCardboardView": "this.Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "mouseControlMode": "drag_acceleration"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE10EDCE_E50F_1E4D_41EA_970C8ADE1052"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE292CF3_E50F_1E54_41EB_C108BD9CCB49"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE260721_E50F_0BF7_41E7_1A5DCE792CB7"
  }
 ],
 "hfov": 360,
 "label": "Conf Lobby 2",
 "id": "panorama_EE2E82BA_E50F_0AD4_4188_A17A1C63EA59",
 "thumbnailUrl": "media/panorama_EE2E82BA_E50F_0AD4_4188_A17A1C63EA59_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 140,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_EE2E82BA_E50F_0AD4_4188_A17A1C63EA59_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2E82BA_E50F_0AD4_4188_A17A1C63EA59_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2E82BA_E50F_0AD4_4188_A17A1C63EA59_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EE2E82BA_E50F_0AD4_4188_A17A1C63EA59_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2E82BA_E50F_0AD4_4188_A17A1C63EA59_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2E82BA_E50F_0AD4_4188_A17A1C63EA59_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EE2E82BA_E50F_0AD4_4188_A17A1C63EA59_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2E82BA_E50F_0AD4_4188_A17A1C63EA59_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2E82BA_E50F_0AD4_4188_A17A1C63EA59_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EE2E82BA_E50F_0AD4_4188_A17A1C63EA59_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2E82BA_E50F_0AD4_4188_A17A1C63EA59_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2E82BA_E50F_0AD4_4188_A17A1C63EA59_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EE2E82BA_E50F_0AD4_4188_A17A1C63EA59_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2E82BA_E50F_0AD4_4188_A17A1C63EA59_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2E82BA_E50F_0AD4_4188_A17A1C63EA59_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EE2E82BA_E50F_0AD4_4188_A17A1C63EA59_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2E82BA_E50F_0AD4_4188_A17A1C63EA59_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2E82BA_E50F_0AD4_4188_A17A1C63EA59_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EE2E82BA_E50F_0AD4_4188_A17A1C63EA59_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_EE2E82BA_E50F_0AD4_4188_A17A1C63EA59_tcap0",
  "this.overlay_68C3A613_48B4_872D_41AE_A1054DFD01BB",
  "this.overlay_687E2ED5_48B4_84D5_4194_B0CA573E488F",
  "this.overlay_68342582_48B4_8530_41C8_C78B1BA78ED0",
  "this.overlay_70A45CDE_51C1_081B_41B7_A81B8F88EAFD",
  "this.overlay_73DD74AD_51C1_1839_41C4_1503B5A6AE65"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_EE286634_E50F_0DDC_41C6_1FA8A4444D48_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 22.96,
  "pitch": 3.67
 },
 "id": "camera_42A99C26_5B73_2389_41C8_595AF50AFB6F",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 81.73,
  "pitch": 1.84
 },
 "id": "camera_41D8AE31_5B73_1F88_41C7_91A8E7FB3F48",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": -97.35,
  "pitch": 4.59
 },
 "id": "camera_474F6218_5B73_67B9_41BF_989C4317F6CC",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_EE12CB61_E50D_FA77_41DA_BEC4D595DB4F_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": -135.92,
  "pitch": -17.45
 },
 "id": "camera_42505A85_5B73_248B_41CC_C9DDF147AEE1",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_EE2D7730_E50F_0BD4_41EA_76D04CAB3845_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 7.35,
  "pitch": 10.1
 },
 "id": "camera_4142DD1A_5B73_1DB8_41D6_2B6EDAEF687F",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE136BCF_E50D_3A4B_41E8_E76CE85C4CC2"
  }
 ],
 "hfov": 360,
 "label": "Staff Room",
 "id": "panorama_EE12CB61_E50D_FA77_41DA_BEC4D595DB4F",
 "thumbnailUrl": "media/panorama_EE12CB61_E50D_FA77_41DA_BEC4D595DB4F_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 140,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_EE12CB61_E50D_FA77_41DA_BEC4D595DB4F_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE12CB61_E50D_FA77_41DA_BEC4D595DB4F_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE12CB61_E50D_FA77_41DA_BEC4D595DB4F_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EE12CB61_E50D_FA77_41DA_BEC4D595DB4F_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE12CB61_E50D_FA77_41DA_BEC4D595DB4F_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE12CB61_E50D_FA77_41DA_BEC4D595DB4F_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EE12CB61_E50D_FA77_41DA_BEC4D595DB4F_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE12CB61_E50D_FA77_41DA_BEC4D595DB4F_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE12CB61_E50D_FA77_41DA_BEC4D595DB4F_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EE12CB61_E50D_FA77_41DA_BEC4D595DB4F_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE12CB61_E50D_FA77_41DA_BEC4D595DB4F_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE12CB61_E50D_FA77_41DA_BEC4D595DB4F_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EE12CB61_E50D_FA77_41DA_BEC4D595DB4F_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE12CB61_E50D_FA77_41DA_BEC4D595DB4F_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE12CB61_E50D_FA77_41DA_BEC4D595DB4F_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EE12CB61_E50D_FA77_41DA_BEC4D595DB4F_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE12CB61_E50D_FA77_41DA_BEC4D595DB4F_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE12CB61_E50D_FA77_41DA_BEC4D595DB4F_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EE12CB61_E50D_FA77_41DA_BEC4D595DB4F_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_EE12CB61_E50D_FA77_41DA_BEC4D595DB4F_tcap0",
  "this.overlay_096ACCC9_4C46_AB91_41C5_C69C71251AFE",
  "this.overlay_702B16BB_5141_3819_41BA_AECB2A6253E7"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": -36.73,
  "pitch": 3.67
 },
 "id": "camera_418E5E7D_5B73_1C78_41CC_C28EFF7DA5EF",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE136BCF_E50D_3A4B_41E8_E76CE85C4CC2"
  }
 ],
 "hfov": 360,
 "label": "Computer Lab",
 "id": "panorama_EE1120BD_E50D_06CC_41E5_D131A255BF82",
 "thumbnailUrl": "media/panorama_EE1120BD_E50D_06CC_41E5_D131A255BF82_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 140,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_EE1120BD_E50D_06CC_41E5_D131A255BF82_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE1120BD_E50D_06CC_41E5_D131A255BF82_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE1120BD_E50D_06CC_41E5_D131A255BF82_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EE1120BD_E50D_06CC_41E5_D131A255BF82_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE1120BD_E50D_06CC_41E5_D131A255BF82_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE1120BD_E50D_06CC_41E5_D131A255BF82_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EE1120BD_E50D_06CC_41E5_D131A255BF82_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE1120BD_E50D_06CC_41E5_D131A255BF82_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE1120BD_E50D_06CC_41E5_D131A255BF82_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EE1120BD_E50D_06CC_41E5_D131A255BF82_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE1120BD_E50D_06CC_41E5_D131A255BF82_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE1120BD_E50D_06CC_41E5_D131A255BF82_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EE1120BD_E50D_06CC_41E5_D131A255BF82_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE1120BD_E50D_06CC_41E5_D131A255BF82_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE1120BD_E50D_06CC_41E5_D131A255BF82_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EE1120BD_E50D_06CC_41E5_D131A255BF82_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE1120BD_E50D_06CC_41E5_D131A255BF82_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE1120BD_E50D_06CC_41E5_D131A255BF82_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EE1120BD_E50D_06CC_41E5_D131A255BF82_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_EE1120BD_E50D_06CC_41E5_D131A255BF82_tcap0",
  "this.overlay_0F8A7DAF_4C43_A591_41AC_D6CFA88E6134",
  "this.overlay_70E353FA_51C1_181B_41BF_60AD4C5468AF"
 ]
},
{
 "backgroundColorRatios": [],
 "bodyPaddingRight": 5,
 "id": "window_5D0DA03D_4875_BB54_41CD_B5865CB883FD",
 "bodyBackgroundColorDirection": "vertical",
 "bodyPaddingTop": 5,
 "scrollBarColor": "#000000",
 "shadowHorizontalLength": 3,
 "scrollBarVisible": "rollOver",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "width": 400,
 "closeButtonPaddingTop": 0,
 "horizontalAlign": "center",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "scrollBarOpacity": 0.5,
 "headerVerticalAlign": "middle",
 "shadowVerticalLength": 0,
 "minHeight": 20,
 "headerBackgroundColorRatios": [
  0,
  1,
  1
 ],
 "modal": true,
 "titlePaddingLeft": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "veilColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "backgroundColor": [],
 "titleFontColor": "#000000",
 "veilColorDirection": "horizontal",
 "closeButtonBorderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 20,
 "title": "About Bhupal Nobles",
 "titleFontSize": "1.29vmin",
 "headerBackgroundColorDirection": "vertical",
 "height": 600,
 "shadowSpread": 1,
 "headerBorderSize": 0,
 "shadow": true,
 "bodyPaddingBottom": 5,
 "closeButtonBackgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "titleFontWeight": "normal",
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "paddingLeft": 0,
 "propagateClick": false,
 "overflow": "scroll",
 "footerBackgroundOpacity": 1,
 "footerHeight": 5,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "veilOpacity": 0.4,
 "headerPaddingRight": 10,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingRight": 5,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "children": [
  "this.htmlText_5D0E603E_4875_BB54_41BD_97F18EC84F10"
 ],
 "closeButtonIconHeight": 12,
 "layout": "vertical",
 "bodyBorderSize": 0,
 "shadowColor": "#000000",
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorDirection": "vertical",
 "titleFontFamily": "Arial",
 "titleFontStyle": "normal",
 "borderSize": 0,
 "headerPaddingBottom": 10,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonIconColor": "#000000",
 "headerBorderColor": "#000000",
 "closeButtonBackgroundOpacity": 1,
 "closeButtonPaddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "headerPaddingTop": 10,
 "closeButtonPaddingLeft": 0,
 "shadowBlurRadius": 6,
 "headerPaddingLeft": 10,
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 0,
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerBorderColor": "#000000",
 "titleTextDecoration": "none",
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "headerBackgroundOpacity": 1,
 "closeButtonBackgroundColorRatios": [],
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "bodyPaddingLeft": 5,
 "gap": 10,
 "paddingBottom": 0,
 "headerBackgroundColor": [
  "#F7921E",
  "#EEEEEE",
  "#F7921E"
 ],
 "class": "Window",
 "borderRadius": 5,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "closeButtonIconLineWidth": 2,
 "titlePaddingBottom": 5,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "data": {
  "name": "Window11230"
 },
 "bodyBorderColor": "#000000",
 "footerBorderSize": 0
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE29EC70_E50F_1E55_41CD_5DDBCB2C3F0E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE2957C9_E50F_0AB4_41AD_99CDB988813A"
  }
 ],
 "hfov": 360,
 "label": "Pathway 2",
 "id": "panorama_EE26521F_E50F_05CC_41CC_305CAB4B0D4F",
 "thumbnailUrl": "media/panorama_EE26521F_E50F_05CC_41CC_305CAB4B0D4F_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 140,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_EE26521F_E50F_05CC_41CC_305CAB4B0D4F_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE26521F_E50F_05CC_41CC_305CAB4B0D4F_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE26521F_E50F_05CC_41CC_305CAB4B0D4F_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EE26521F_E50F_05CC_41CC_305CAB4B0D4F_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE26521F_E50F_05CC_41CC_305CAB4B0D4F_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE26521F_E50F_05CC_41CC_305CAB4B0D4F_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EE26521F_E50F_05CC_41CC_305CAB4B0D4F_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE26521F_E50F_05CC_41CC_305CAB4B0D4F_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE26521F_E50F_05CC_41CC_305CAB4B0D4F_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EE26521F_E50F_05CC_41CC_305CAB4B0D4F_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE26521F_E50F_05CC_41CC_305CAB4B0D4F_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE26521F_E50F_05CC_41CC_305CAB4B0D4F_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EE26521F_E50F_05CC_41CC_305CAB4B0D4F_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE26521F_E50F_05CC_41CC_305CAB4B0D4F_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE26521F_E50F_05CC_41CC_305CAB4B0D4F_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EE26521F_E50F_05CC_41CC_305CAB4B0D4F_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE26521F_E50F_05CC_41CC_305CAB4B0D4F_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE26521F_E50F_05CC_41CC_305CAB4B0D4F_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EE26521F_E50F_05CC_41CC_305CAB4B0D4F_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_EE26521F_E50F_05CC_41CC_305CAB4B0D4F_tcap0",
  "this.overlay_577C917F_48B4_BDD4_41B8_244F5049EDA4",
  "this.overlay_574618D2_48B7_8B2C_41BE_FFDF64372E05",
  "this.overlay_7361C7F6_51C1_F82B_419E_93A83A15BECD",
  "this.overlay_733FFAED_51C1_0839_41CD_D5B3D7A67030"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_EE1120BD_E50D_06CC_41E5_D131A255BF82_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 49.59,
  "pitch": 2.76
 },
 "id": "camera_425C6A45_5B73_278B_41C6_9A05EB0557C3",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 11.94,
  "pitch": 2.76
 },
 "id": "camera_41E30DDB_5B73_1CB8_41D5_625DF3616687",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE2B0BC9_E50F_1AB7_41E4_A37BF9465CB5"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE2BB6BB_E50D_0AD4_41B6_AEE7D63D1816"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE2A1D11_E50D_1FD4_41E3_3ED918C5C28B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE00BCB0_E50D_1ED4_41E9_660482BF251F"
  }
 ],
 "hfov": 360,
 "label": "Stairs Gfloor",
 "id": "panorama_EE2D527F_E50D_0A4C_41E1_6EF067CB57A1",
 "thumbnailUrl": "media/panorama_EE2D527F_E50D_0A4C_41E1_6EF067CB57A1_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 140,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_EE2D527F_E50D_0A4C_41E1_6EF067CB57A1_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2D527F_E50D_0A4C_41E1_6EF067CB57A1_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2D527F_E50D_0A4C_41E1_6EF067CB57A1_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EE2D527F_E50D_0A4C_41E1_6EF067CB57A1_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2D527F_E50D_0A4C_41E1_6EF067CB57A1_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2D527F_E50D_0A4C_41E1_6EF067CB57A1_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EE2D527F_E50D_0A4C_41E1_6EF067CB57A1_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2D527F_E50D_0A4C_41E1_6EF067CB57A1_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2D527F_E50D_0A4C_41E1_6EF067CB57A1_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EE2D527F_E50D_0A4C_41E1_6EF067CB57A1_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2D527F_E50D_0A4C_41E1_6EF067CB57A1_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2D527F_E50D_0A4C_41E1_6EF067CB57A1_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EE2D527F_E50D_0A4C_41E1_6EF067CB57A1_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2D527F_E50D_0A4C_41E1_6EF067CB57A1_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2D527F_E50D_0A4C_41E1_6EF067CB57A1_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EE2D527F_E50D_0A4C_41E1_6EF067CB57A1_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2D527F_E50D_0A4C_41E1_6EF067CB57A1_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2D527F_E50D_0A4C_41E1_6EF067CB57A1_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EE2D527F_E50D_0A4C_41E1_6EF067CB57A1_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_EE2D527F_E50D_0A4C_41E1_6EF067CB57A1_tcap0",
  "this.overlay_6B262BF3_4C43_D5AD_41CA_D61892EF98C6",
  "this.overlay_64C53432_4C42_52AC_41C9_757612FF2240",
  "this.overlay_64726203_4C42_566C_41BF_E935C8DA87A1",
  "this.overlay_469BA6D6_5143_186B_41BC_1136423B2D9A",
  "this.overlay_7517176F_51C1_1839_41AD_8AD99FE6F567",
  "this.overlay_74EA941A_51C1_381A_41AE_059F436721C3",
  "this.overlay_7356BE52_51C3_086B_41A7_3EB1E1E5F0EB",
  "this.overlay_73F69A86_51C3_08EB_41A6_25E51C9E8BC6"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE10EDCE_E50F_1E4D_41EA_970C8ADE1052"
  }
 ],
 "hfov": 360,
 "label": "Conference",
 "id": "panorama_EE2CF389_E50F_0AB4_41EC_79A5E3F131A5",
 "thumbnailUrl": "media/panorama_EE2CF389_E50F_0AB4_41EC_79A5E3F131A5_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 140,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_EE2CF389_E50F_0AB4_41EC_79A5E3F131A5_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2CF389_E50F_0AB4_41EC_79A5E3F131A5_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2CF389_E50F_0AB4_41EC_79A5E3F131A5_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EE2CF389_E50F_0AB4_41EC_79A5E3F131A5_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2CF389_E50F_0AB4_41EC_79A5E3F131A5_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2CF389_E50F_0AB4_41EC_79A5E3F131A5_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EE2CF389_E50F_0AB4_41EC_79A5E3F131A5_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2CF389_E50F_0AB4_41EC_79A5E3F131A5_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2CF389_E50F_0AB4_41EC_79A5E3F131A5_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EE2CF389_E50F_0AB4_41EC_79A5E3F131A5_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2CF389_E50F_0AB4_41EC_79A5E3F131A5_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2CF389_E50F_0AB4_41EC_79A5E3F131A5_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EE2CF389_E50F_0AB4_41EC_79A5E3F131A5_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2CF389_E50F_0AB4_41EC_79A5E3F131A5_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2CF389_E50F_0AB4_41EC_79A5E3F131A5_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EE2CF389_E50F_0AB4_41EC_79A5E3F131A5_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2CF389_E50F_0AB4_41EC_79A5E3F131A5_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2CF389_E50F_0AB4_41EC_79A5E3F131A5_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EE2CF389_E50F_0AB4_41EC_79A5E3F131A5_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_EE2CF389_E50F_0AB4_41EC_79A5E3F131A5_tcap0",
  "this.overlay_6800F72E_48CC_8577_41B1_5A5538B75D96",
  "this.overlay_49DF185E_514F_081B_41B1_B62183CF2E78",
  "this.overlay_734D88BC_51C3_081F_41B6_A6DC4FA9DC4E"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 24.8,
  "pitch": 1.84
 },
 "id": "camera_47B9635B_5B73_65B8_41D5_D53BDDBAA37E",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "camera_467D63CF_5B73_6498_41C1_6F5B4F81A30F",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 65.2,
  "pitch": 5.51
 },
 "id": "camera_408B915A_5B73_65B9_41BB_6FE5944EBC3B",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE1315C2_E50D_0EB4_41EA_7018A9A44044"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE2DE5C7_E50D_0EBC_41EB_7F20078D80DE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE024038_E50D_05D5_41D7_ED0C1FEF4C03"
  }
 ],
 "hfov": 360,
 "label": "Lab Lobby",
 "id": "panorama_EE136BCF_E50D_3A4B_41E8_E76CE85C4CC2",
 "thumbnailUrl": "media/panorama_EE136BCF_E50D_3A4B_41E8_E76CE85C4CC2_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 140,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_EE136BCF_E50D_3A4B_41E8_E76CE85C4CC2_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE136BCF_E50D_3A4B_41E8_E76CE85C4CC2_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE136BCF_E50D_3A4B_41E8_E76CE85C4CC2_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EE136BCF_E50D_3A4B_41E8_E76CE85C4CC2_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE136BCF_E50D_3A4B_41E8_E76CE85C4CC2_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE136BCF_E50D_3A4B_41E8_E76CE85C4CC2_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EE136BCF_E50D_3A4B_41E8_E76CE85C4CC2_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE136BCF_E50D_3A4B_41E8_E76CE85C4CC2_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE136BCF_E50D_3A4B_41E8_E76CE85C4CC2_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EE136BCF_E50D_3A4B_41E8_E76CE85C4CC2_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE136BCF_E50D_3A4B_41E8_E76CE85C4CC2_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE136BCF_E50D_3A4B_41E8_E76CE85C4CC2_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EE136BCF_E50D_3A4B_41E8_E76CE85C4CC2_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE136BCF_E50D_3A4B_41E8_E76CE85C4CC2_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE136BCF_E50D_3A4B_41E8_E76CE85C4CC2_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EE136BCF_E50D_3A4B_41E8_E76CE85C4CC2_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE136BCF_E50D_3A4B_41E8_E76CE85C4CC2_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE136BCF_E50D_3A4B_41E8_E76CE85C4CC2_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EE136BCF_E50D_3A4B_41E8_E76CE85C4CC2_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_EE136BCF_E50D_3A4B_41E8_E76CE85C4CC2_tcap0",
  "this.overlay_700A0D9F_4DC3_A5B1_41C3_23B3ED962461",
  "this.overlay_730893F1_4DC2_FD71_41C4_9590B60651F8",
  "this.overlay_70E516E2_4DC6_A793_41CF_AE036BC9689F",
  "this.overlay_70949D5B_51BF_0819_41C1_ED4F780703B5"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE2B0BC9_E50F_1AB7_41E4_A37BF9465CB5"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE136BCF_E50D_3A4B_41E8_E76CE85C4CC2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE00BCB0_E50D_1ED4_41E9_660482BF251F"
  }
 ],
 "hfov": 360,
 "label": "Stairs 2ndFloor",
 "id": "panorama_EE1315C2_E50D_0EB4_41EA_7018A9A44044",
 "thumbnailUrl": "media/panorama_EE1315C2_E50D_0EB4_41EA_7018A9A44044_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 140,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_EE1315C2_E50D_0EB4_41EA_7018A9A44044_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE1315C2_E50D_0EB4_41EA_7018A9A44044_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE1315C2_E50D_0EB4_41EA_7018A9A44044_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EE1315C2_E50D_0EB4_41EA_7018A9A44044_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE1315C2_E50D_0EB4_41EA_7018A9A44044_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE1315C2_E50D_0EB4_41EA_7018A9A44044_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EE1315C2_E50D_0EB4_41EA_7018A9A44044_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE1315C2_E50D_0EB4_41EA_7018A9A44044_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE1315C2_E50D_0EB4_41EA_7018A9A44044_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EE1315C2_E50D_0EB4_41EA_7018A9A44044_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE1315C2_E50D_0EB4_41EA_7018A9A44044_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE1315C2_E50D_0EB4_41EA_7018A9A44044_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EE1315C2_E50D_0EB4_41EA_7018A9A44044_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE1315C2_E50D_0EB4_41EA_7018A9A44044_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE1315C2_E50D_0EB4_41EA_7018A9A44044_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EE1315C2_E50D_0EB4_41EA_7018A9A44044_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE1315C2_E50D_0EB4_41EA_7018A9A44044_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE1315C2_E50D_0EB4_41EA_7018A9A44044_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EE1315C2_E50D_0EB4_41EA_7018A9A44044_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_EE1315C2_E50D_0EB4_41EA_7018A9A44044_tcap0",
  "this.overlay_713F94C1_4DDE_7B90_41CC_E085DD755ABA",
  "this.overlay_7318B7CA_4DC1_A593_41C2_AA9034A79828",
  "this.overlay_0FD574D0_4DBE_7B8F_419C_110F39EB0BA5",
  "this.overlay_70B7C043_5141_3869_41B3_26159B4A8081",
  "this.overlay_7542A970_5143_0827_41A6_76BAE5F317DB",
  "this.overlay_700F7F3A_5143_081A_41CF_8652E5EEFAE5"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": -134.08,
  "pitch": 2.76
 },
 "id": "camera_42F42BDA_5B73_24B9_41D1_1FB7605D5C21",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "duration": 500,
 "class": "FadeInEffect",
 "id": "FadeInEffect_63A932B2_51C1_182A_41A5_22E550C75423",
 "easing": "cubic_in"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": -31.22,
  "pitch": 13.78
 },
 "id": "camera_41290D58_5B73_1DB8_41B4_DE192A5555A7",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_EE24E1F2_E50D_0654_41C8_449A85C554A0_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 104.69,
  "pitch": -0.92
 },
 "id": "camera_47C74303_5B73_6588_41BF_D6647B8BF99F",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_EE26FD1D_E50F_1FCC_41E6_674A1C467F24_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE2F01CE_E50F_064C_41D4_83774C3F79EA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE3A1C30_E50F_1DD4_41C1_4345802A63F5"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE2D527F_E50D_0A4C_41E1_6EF067CB57A1"
  }
 ],
 "hfov": 360,
 "label": "Lobby Gfloor",
 "id": "panorama_EE2A1D11_E50D_1FD4_41E3_3ED918C5C28B",
 "thumbnailUrl": "media/panorama_EE2A1D11_E50D_1FD4_41E3_3ED918C5C28B_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 140,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_EE2A1D11_E50D_1FD4_41E3_3ED918C5C28B_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2A1D11_E50D_1FD4_41E3_3ED918C5C28B_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2A1D11_E50D_1FD4_41E3_3ED918C5C28B_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EE2A1D11_E50D_1FD4_41E3_3ED918C5C28B_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2A1D11_E50D_1FD4_41E3_3ED918C5C28B_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2A1D11_E50D_1FD4_41E3_3ED918C5C28B_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EE2A1D11_E50D_1FD4_41E3_3ED918C5C28B_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2A1D11_E50D_1FD4_41E3_3ED918C5C28B_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2A1D11_E50D_1FD4_41E3_3ED918C5C28B_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EE2A1D11_E50D_1FD4_41E3_3ED918C5C28B_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2A1D11_E50D_1FD4_41E3_3ED918C5C28B_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2A1D11_E50D_1FD4_41E3_3ED918C5C28B_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EE2A1D11_E50D_1FD4_41E3_3ED918C5C28B_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2A1D11_E50D_1FD4_41E3_3ED918C5C28B_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2A1D11_E50D_1FD4_41E3_3ED918C5C28B_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EE2A1D11_E50D_1FD4_41E3_3ED918C5C28B_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2A1D11_E50D_1FD4_41E3_3ED918C5C28B_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2A1D11_E50D_1FD4_41E3_3ED918C5C28B_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EE2A1D11_E50D_1FD4_41E3_3ED918C5C28B_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_EE2A1D11_E50D_1FD4_41E3_3ED918C5C28B_tcap0",
  "this.overlay_66A2DBEE_4C41_B5B7_41CD_9D6B8BA02234",
  "this.overlay_661579A5_4C42_D5B4_41A6_66D6F0E694E6",
  "this.overlay_625D4E52_4C41_AEEC_41C5_DF4D5A701FC8",
  "this.overlay_7339752F_51C3_1839_41CB_9F233FD1A501"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": -100.1,
  "pitch": 11.94
 },
 "id": "camera_4289CC65_5B73_238B_41A3_CC0D695D27DB",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 9.18,
  "pitch": -3.67
 },
 "id": "camera_42343B03_5B73_258F_41B8_4B35F826D541",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PlayList",
 "id": "ThumbnailList_F71FACEA_E50D_1E74_41DD_FC1218D891CD_playlist",
 "items": [
  {
   "media": "this.panorama_EE441998_E50D_06D4_41B6_67E082FA8E64",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_F71FACEA_E50D_1E74_41DD_FC1218D891CD_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EE2D7730_E50F_0BD4_41EA_76D04CAB3845",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EE2D7730_E50F_0BD4_41EA_76D04CAB3845_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_F71FACEA_E50D_1E74_41DD_FC1218D891CD_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EE292CF3_E50F_1E54_41EB_C108BD9CCB49",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EE292CF3_E50F_1E54_41EB_C108BD9CCB49_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_F71FACEA_E50D_1E74_41DD_FC1218D891CD_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EE2CF389_E50F_0AB4_41EC_79A5E3F131A5",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EE2CF389_E50F_0AB4_41EC_79A5E3F131A5_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_F71FACEA_E50D_1E74_41DD_FC1218D891CD_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EE260721_E50F_0BF7_41E7_1A5DCE792CB7",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EE260721_E50F_0BF7_41E7_1A5DCE792CB7_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_F71FACEA_E50D_1E74_41DD_FC1218D891CD_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EE26521F_E50F_05CC_41CC_305CAB4B0D4F",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EE26521F_E50F_05CC_41CC_305CAB4B0D4F_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_F71FACEA_E50D_1E74_41DD_FC1218D891CD_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EE29EC70_E50F_1E55_41CD_5DDBCB2C3F0E",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EE29EC70_E50F_1E55_41CD_5DDBCB2C3F0E_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_F71FACEA_E50D_1E74_41DD_FC1218D891CD_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EE3B7777_E50F_0A5C_41E0_975B9D854D5C",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EE3B7777_E50F_0A5C_41E0_975B9D854D5C_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_F71FACEA_E50D_1E74_41DD_FC1218D891CD_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EE00BCB0_E50D_1ED4_41E9_660482BF251F",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EE00BCB0_E50D_1ED4_41E9_660482BF251F_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_F71FACEA_E50D_1E74_41DD_FC1218D891CD_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EE26FD1D_E50F_1FCC_41E6_674A1C467F24",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EE26FD1D_E50F_1FCC_41E6_674A1C467F24_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_F71FACEA_E50D_1E74_41DD_FC1218D891CD_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EE2DE5C7_E50D_0EBC_41EB_7F20078D80DE",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EE2DE5C7_E50D_0EBC_41EB_7F20078D80DE_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_F71FACEA_E50D_1E74_41DD_FC1218D891CD_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EE2B5235_E50D_05DC_41DC_C7CFD9A8CD5C",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EE2B5235_E50D_05DC_41DC_C7CFD9A8CD5C_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_F71FACEA_E50D_1E74_41DD_FC1218D891CD_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EE2E0473_E50D_0E54_41E9_F7FED4507DF8",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EE2E0473_E50D_0E54_41E9_F7FED4507DF8_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_F71FACEA_E50D_1E74_41DD_FC1218D891CD_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EE138EC8_E50D_1AB5_41EB_583D3AEB8500",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EE138EC8_E50D_1AB5_41EB_583D3AEB8500_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_F71FACEA_E50D_1E74_41DD_FC1218D891CD_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EE1120BD_E50D_06CC_41E5_D131A255BF82",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EE1120BD_E50D_06CC_41E5_D131A255BF82_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_F71FACEA_E50D_1E74_41DD_FC1218D891CD_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EE024038_E50D_05D5_41D7_ED0C1FEF4C03",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EE024038_E50D_05D5_41D7_ED0C1FEF4C03_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_F71FACEA_E50D_1E74_41DD_FC1218D891CD_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EE2D527F_E50D_0A4C_41E1_6EF067CB57A1",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EE2D527F_E50D_0A4C_41E1_6EF067CB57A1_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_F71FACEA_E50D_1E74_41DD_FC1218D891CD_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EE2B0BC9_E50F_1AB7_41E4_A37BF9465CB5",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EE2B0BC9_E50F_1AB7_41E4_A37BF9465CB5_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_F71FACEA_E50D_1E74_41DD_FC1218D891CD_playlist, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EE1315C2_E50D_0EB4_41EA_7018A9A44044",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EE1315C2_E50D_0EB4_41EA_7018A9A44044_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_F71FACEA_E50D_1E74_41DD_FC1218D891CD_playlist, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EE136BCF_E50D_3A4B_41E8_E76CE85C4CC2",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EE136BCF_E50D_3A4B_41E8_E76CE85C4CC2_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_F71FACEA_E50D_1E74_41DD_FC1218D891CD_playlist, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EE10EDCE_E50F_1E4D_41EA_970C8ADE1052",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EE10EDCE_E50F_1E4D_41EA_970C8ADE1052_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_F71FACEA_E50D_1E74_41DD_FC1218D891CD_playlist, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EE2E82BA_E50F_0AD4_4188_A17A1C63EA59",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EE2E82BA_E50F_0AD4_4188_A17A1C63EA59_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_F71FACEA_E50D_1E74_41DD_FC1218D891CD_playlist, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EE2957C9_E50F_0AB4_41AD_99CDB988813A",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EE2957C9_E50F_0AB4_41AD_99CDB988813A_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_F71FACEA_E50D_1E74_41DD_FC1218D891CD_playlist, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EE29323A_E50F_05D4_41E3_1A050EB18ADF",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EE29323A_E50F_05D4_41E3_1A050EB18ADF_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_F71FACEA_E50D_1E74_41DD_FC1218D891CD_playlist, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EE2F3704_E50F_0BBD_41E3_B8682A50A3B9",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EE2F3704_E50F_0BBD_41E3_B8682A50A3B9_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_F71FACEA_E50D_1E74_41DD_FC1218D891CD_playlist, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EE2F01CE_E50F_064C_41D4_83774C3F79EA",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EE2F01CE_E50F_064C_41D4_83774C3F79EA_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_F71FACEA_E50D_1E74_41DD_FC1218D891CD_playlist, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EE286634_E50F_0DDC_41C6_1FA8A4444D48",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EE286634_E50F_0DDC_41C6_1FA8A4444D48_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_F71FACEA_E50D_1E74_41DD_FC1218D891CD_playlist, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EE3A1C30_E50F_1DD4_41C1_4345802A63F5",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EE3A1C30_E50F_1DD4_41C1_4345802A63F5_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_F71FACEA_E50D_1E74_41DD_FC1218D891CD_playlist, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EE24E1F2_E50D_0654_41C8_449A85C554A0",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EE24E1F2_E50D_0654_41C8_449A85C554A0_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_F71FACEA_E50D_1E74_41DD_FC1218D891CD_playlist, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EE0071D6_E50D_065C_41E1_377D18C833EB",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EE0071D6_E50D_065C_41E1_377D18C833EB_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_F71FACEA_E50D_1E74_41DD_FC1218D891CD_playlist, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EE2BB6BB_E50D_0AD4_41B6_AEE7D63D1816",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EE2BB6BB_E50D_0AD4_41B6_AEE7D63D1816_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_F71FACEA_E50D_1E74_41DD_FC1218D891CD_playlist, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EE2A1D11_E50D_1FD4_41E3_3ED918C5C28B",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EE2A1D11_E50D_1FD4_41E3_3ED918C5C28B_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_F71FACEA_E50D_1E74_41DD_FC1218D891CD_playlist, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EE2BA753_E50D_0A54_41A5_26D2D3FDC5E8",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EE2BA753_E50D_0A54_41A5_26D2D3FDC5E8_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_F71FACEA_E50D_1E74_41DD_FC1218D891CD_playlist, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EE12CB61_E50D_FA77_41DA_BEC4D595DB4F",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EE12CB61_E50D_FA77_41DA_BEC4D595DB4F_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_F71FACEA_E50D_1E74_41DD_FC1218D891CD_playlist, 33, 0)",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": -72.55,
  "pitch": -2.76
 },
 "id": "camera_403B9F72_5B73_1D89_41B9_45BC65143188",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 40.41,
  "pitch": 5.51
 },
 "id": "camera_429D8C81_5B73_1C88_41CB_47FCD7B9C078",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 54.18,
  "pitch": -1.84
 },
 "id": "camera_47A9033A_5B73_65F8_41C0_A1F9C3E9702B",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 131,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_EE2B0BC9_E50F_1AB7_41E4_A37BF9465CB5_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_EE26521F_E50F_05CC_41CC_305CAB4B0D4F_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": -45,
  "pitch": -5.51
 },
 "id": "camera_478B037C_5B73_6478_41C3_E2159762D16E",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": -72.55,
  "pitch": 3.67
 },
 "id": "camera_401E7FD3_5B73_1C8F_4194_0473806A2F7F",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE26521F_E50F_05CC_41CC_305CAB4B0D4F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE292CF3_E50F_1E54_41EB_C108BD9CCB49"
  }
 ],
 "hfov": 360,
 "label": "Pathway 1",
 "id": "panorama_EE2D7730_E50F_0BD4_41EA_76D04CAB3845",
 "thumbnailUrl": "media/panorama_EE2D7730_E50F_0BD4_41EA_76D04CAB3845_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 140,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_EE2D7730_E50F_0BD4_41EA_76D04CAB3845_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2D7730_E50F_0BD4_41EA_76D04CAB3845_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2D7730_E50F_0BD4_41EA_76D04CAB3845_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EE2D7730_E50F_0BD4_41EA_76D04CAB3845_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2D7730_E50F_0BD4_41EA_76D04CAB3845_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2D7730_E50F_0BD4_41EA_76D04CAB3845_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EE2D7730_E50F_0BD4_41EA_76D04CAB3845_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2D7730_E50F_0BD4_41EA_76D04CAB3845_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2D7730_E50F_0BD4_41EA_76D04CAB3845_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EE2D7730_E50F_0BD4_41EA_76D04CAB3845_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2D7730_E50F_0BD4_41EA_76D04CAB3845_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2D7730_E50F_0BD4_41EA_76D04CAB3845_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EE2D7730_E50F_0BD4_41EA_76D04CAB3845_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2D7730_E50F_0BD4_41EA_76D04CAB3845_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2D7730_E50F_0BD4_41EA_76D04CAB3845_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EE2D7730_E50F_0BD4_41EA_76D04CAB3845_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2D7730_E50F_0BD4_41EA_76D04CAB3845_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2D7730_E50F_0BD4_41EA_76D04CAB3845_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EE2D7730_E50F_0BD4_41EA_76D04CAB3845_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_EE2D7730_E50F_0BD4_41EA_76D04CAB3845_tcap0",
  "this.overlay_68D2F92A_48B7_8D7F_41AC_CFD17AD74243",
  "this.overlay_69E4854E_48B7_8534_419D_3E7ED8D2ADC0",
  "this.overlay_73EB9E06_51C7_0BEB_41CB_E26CAEB3B858",
  "this.overlay_72253B7F_51C1_0819_41D3_1F3F500CFB62"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_EE3A1C30_E50F_1DD4_41C1_4345802A63F5_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "backgroundColorRatios": [],
 "bodyPaddingRight": 5,
 "id": "window_43365AC7_50C1_0869_41BF_321D4B92CE46",
 "bodyBackgroundColorDirection": "vertical",
 "bodyPaddingTop": 5,
 "scrollBarColor": "#000000",
 "shadowHorizontalLength": 3,
 "scrollBarVisible": "rollOver",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "width": 400,
 "shadowVerticalLength": 0,
 "horizontalAlign": "center",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "scrollBarOpacity": 0.5,
 "headerVerticalAlign": "middle",
 "minHeight": 20,
 "headerBackgroundColorRatios": [
  0,
  1,
  1
 ],
 "modal": true,
 "titlePaddingLeft": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "veilColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "backgroundColor": [],
 "titleFontColor": "#000000",
 "veilColorDirection": "horizontal",
 "title": "International Conference January 2024",
 "verticalAlign": "middle",
 "minWidth": 20,
 "titleFontSize": "1.29vmin",
 "headerBackgroundColorDirection": "vertical",
 "height": 600,
 "shadowSpread": 1,
 "headerBorderSize": 0,
 "shadow": true,
 "bodyPaddingBottom": 5,
 "titleFontWeight": "normal",
 "backgroundOpacity": 1,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "paddingLeft": 0,
 "propagateClick": false,
 "overflow": "scroll",
 "footerHeight": 5,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "veilOpacity": 0.4,
 "headerPaddingRight": 10,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingRight": 5,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "children": [
  "this.htmlText_43341AC8_50C1_0867_41BA_7F7E6072D3DB"
 ],
 "closeButtonIconHeight": 12,
 "layout": "vertical",
 "bodyBorderSize": 0,
 "shadowColor": "#000000",
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorDirection": "vertical",
 "titleFontFamily": "Arial",
 "titleFontStyle": "normal",
 "borderSize": 0,
 "headerPaddingBottom": 10,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonIconColor": "#000000",
 "headerBorderColor": "#000000",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "headerPaddingTop": 10,
 "shadowBlurRadius": 6,
 "headerPaddingLeft": 10,
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "titleTextDecoration": "none",
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "headerBackgroundOpacity": 1,
 "closeButtonBackgroundColorRatios": [],
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "bodyPaddingLeft": 5,
 "gap": 10,
 "paddingBottom": 0,
 "headerBackgroundColor": [
  "#FF9900",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "class": "Window",
 "borderRadius": 5,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "closeButtonIconLineWidth": 2,
 "titlePaddingBottom": 5,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "data": {
  "name": "Window14007"
 },
 "bodyBorderColor": "#000000"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE2BA753_E50D_0A54_41A5_26D2D3FDC5E8"
  }
 ],
 "hfov": 360,
 "label": "Chemistry Lab",
 "id": "panorama_EE2B5235_E50D_05DC_41DC_C7CFD9A8CD5C",
 "thumbnailUrl": "media/panorama_EE2B5235_E50D_05DC_41DC_C7CFD9A8CD5C_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 140,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_EE2B5235_E50D_05DC_41DC_C7CFD9A8CD5C_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2B5235_E50D_05DC_41DC_C7CFD9A8CD5C_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2B5235_E50D_05DC_41DC_C7CFD9A8CD5C_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EE2B5235_E50D_05DC_41DC_C7CFD9A8CD5C_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2B5235_E50D_05DC_41DC_C7CFD9A8CD5C_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2B5235_E50D_05DC_41DC_C7CFD9A8CD5C_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EE2B5235_E50D_05DC_41DC_C7CFD9A8CD5C_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2B5235_E50D_05DC_41DC_C7CFD9A8CD5C_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2B5235_E50D_05DC_41DC_C7CFD9A8CD5C_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EE2B5235_E50D_05DC_41DC_C7CFD9A8CD5C_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2B5235_E50D_05DC_41DC_C7CFD9A8CD5C_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2B5235_E50D_05DC_41DC_C7CFD9A8CD5C_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EE2B5235_E50D_05DC_41DC_C7CFD9A8CD5C_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2B5235_E50D_05DC_41DC_C7CFD9A8CD5C_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2B5235_E50D_05DC_41DC_C7CFD9A8CD5C_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EE2B5235_E50D_05DC_41DC_C7CFD9A8CD5C_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2B5235_E50D_05DC_41DC_C7CFD9A8CD5C_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2B5235_E50D_05DC_41DC_C7CFD9A8CD5C_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EE2B5235_E50D_05DC_41DC_C7CFD9A8CD5C_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_EE2B5235_E50D_05DC_41DC_C7CFD9A8CD5C_tcap0",
  "this.overlay_7F5DE5FF_4DC1_A571_41D0_B7F364101BF8",
  "this.overlay_7337FF93_51C1_08E9_41CE_A0B0ACFD1045"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_EE2957C9_E50F_0AB4_41AD_99CDB988813A_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": -173.57,
  "pitch": 2.76
 },
 "id": "camera_42BFDC3C_5B73_23F9_41D0_EE8D1EFD1603",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "backgroundColorRatios": [],
 "bodyPaddingRight": 5,
 "id": "window_453C1861_50C1_0828_41C2_478EA9B6B8EB",
 "bodyBackgroundColorDirection": "vertical",
 "bodyPaddingTop": 5,
 "scrollBarColor": "#000000",
 "shadowHorizontalLength": 3,
 "scrollBarVisible": "rollOver",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "width": 400,
 "shadowVerticalLength": 0,
 "horizontalAlign": "center",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "scrollBarOpacity": 0.5,
 "headerVerticalAlign": "middle",
 "minHeight": 20,
 "headerBackgroundColorRatios": [
  0,
  1,
  1
 ],
 "modal": true,
 "titlePaddingLeft": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "veilColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "backgroundColor": [],
 "titleFontColor": "#000000",
 "veilColorDirection": "horizontal",
 "title": "Chemistry Lab",
 "verticalAlign": "middle",
 "minWidth": 20,
 "titleFontSize": "1.29vmin",
 "headerBackgroundColorDirection": "vertical",
 "height": 600,
 "shadowSpread": 1,
 "headerBorderSize": 0,
 "shadow": true,
 "bodyPaddingBottom": 5,
 "titleFontWeight": "normal",
 "backgroundOpacity": 1,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "paddingLeft": 0,
 "propagateClick": false,
 "overflow": "scroll",
 "footerHeight": 5,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "veilOpacity": 0.4,
 "headerPaddingRight": 10,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingRight": 5,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "children": [
  "this.htmlText_453E3862_50C1_082B_4176_BD62561AB7ED"
 ],
 "closeButtonIconHeight": 12,
 "layout": "vertical",
 "bodyBorderSize": 0,
 "shadowColor": "#000000",
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorDirection": "vertical",
 "titleFontFamily": "Arial",
 "titleFontStyle": "normal",
 "borderSize": 0,
 "headerPaddingBottom": 10,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonIconColor": "#000000",
 "headerBorderColor": "#000000",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "headerPaddingTop": 10,
 "shadowBlurRadius": 6,
 "headerPaddingLeft": 10,
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "titleTextDecoration": "none",
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "headerBackgroundOpacity": 1,
 "closeButtonBackgroundColorRatios": [],
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "bodyPaddingLeft": 5,
 "gap": 10,
 "paddingBottom": 0,
 "headerBackgroundColor": [
  "#FF9933",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "class": "Window",
 "borderRadius": 5,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "closeButtonIconLineWidth": 2,
 "titlePaddingBottom": 5,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "data": {
  "name": "Window16961"
 },
 "bodyBorderColor": "#000000"
},
{
 "backgroundColorRatios": [],
 "bodyPaddingRight": 5,
 "id": "window_44A66C12_50C1_0FEB_41CF_703B6CB356E2",
 "bodyBackgroundColorDirection": "vertical",
 "bodyPaddingTop": 5,
 "scrollBarColor": "#000000",
 "shadowHorizontalLength": 3,
 "scrollBarVisible": "rollOver",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "width": 400,
 "shadowVerticalLength": 0,
 "horizontalAlign": "center",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "scrollBarOpacity": 0.5,
 "headerVerticalAlign": "middle",
 "minHeight": 20,
 "headerBackgroundColorRatios": [
  0,
  1,
  1
 ],
 "modal": true,
 "titlePaddingLeft": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "veilColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "backgroundColor": [],
 "titleFontColor": "#000000",
 "veilColorDirection": "horizontal",
 "title": "Computer Lab",
 "verticalAlign": "middle",
 "minWidth": 20,
 "titleFontSize": "1.29vmin",
 "headerBackgroundColorDirection": "vertical",
 "height": 600,
 "shadowSpread": 1,
 "headerBorderSize": 0,
 "shadow": true,
 "bodyPaddingBottom": 5,
 "titleFontWeight": "normal",
 "backgroundOpacity": 1,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "paddingLeft": 0,
 "propagateClick": false,
 "overflow": "scroll",
 "footerHeight": 5,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "veilOpacity": 0.4,
 "headerPaddingRight": 10,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingRight": 5,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "children": [
  "this.htmlText_44A7BC13_50C1_0FE9_41C5_01D85BFAAD9C"
 ],
 "closeButtonIconHeight": 12,
 "layout": "vertical",
 "bodyBorderSize": 0,
 "shadowColor": "#000000",
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorDirection": "vertical",
 "titleFontFamily": "Arial",
 "titleFontStyle": "normal",
 "borderSize": 0,
 "headerPaddingBottom": 10,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonIconColor": "#000000",
 "headerBorderColor": "#000000",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "headerPaddingTop": 10,
 "shadowBlurRadius": 6,
 "headerPaddingLeft": 10,
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "titleTextDecoration": "none",
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "headerBackgroundOpacity": 1,
 "closeButtonBackgroundColorRatios": [],
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "bodyPaddingLeft": 5,
 "gap": 10,
 "paddingBottom": 0,
 "headerBackgroundColor": [
  "#FF9900",
  "#DDDDDD",
  "#EEEEEE"
 ],
 "class": "Window",
 "borderRadius": 5,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "closeButtonIconLineWidth": 2,
 "titlePaddingBottom": 5,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "data": {
  "name": "Window15363"
 },
 "bodyBorderColor": "#000000"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 5.51,
  "pitch": 1.84
 },
 "id": "camera_47513258_5B73_67B8_41D6_1F8EB301BFFE",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE12CB61_E50D_FA77_41DA_BEC4D595DB4F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE136BCF_E50D_3A4B_41E8_E76CE85C4CC2"
  }
 ],
 "hfov": 360,
 "label": "Staff Room",
 "id": "panorama_EE024038_E50D_05D5_41D7_ED0C1FEF4C03",
 "thumbnailUrl": "media/panorama_EE024038_E50D_05D5_41D7_ED0C1FEF4C03_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 140,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_EE024038_E50D_05D5_41D7_ED0C1FEF4C03_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE024038_E50D_05D5_41D7_ED0C1FEF4C03_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE024038_E50D_05D5_41D7_ED0C1FEF4C03_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EE024038_E50D_05D5_41D7_ED0C1FEF4C03_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE024038_E50D_05D5_41D7_ED0C1FEF4C03_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE024038_E50D_05D5_41D7_ED0C1FEF4C03_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EE024038_E50D_05D5_41D7_ED0C1FEF4C03_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE024038_E50D_05D5_41D7_ED0C1FEF4C03_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE024038_E50D_05D5_41D7_ED0C1FEF4C03_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EE024038_E50D_05D5_41D7_ED0C1FEF4C03_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE024038_E50D_05D5_41D7_ED0C1FEF4C03_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE024038_E50D_05D5_41D7_ED0C1FEF4C03_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EE024038_E50D_05D5_41D7_ED0C1FEF4C03_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE024038_E50D_05D5_41D7_ED0C1FEF4C03_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE024038_E50D_05D5_41D7_ED0C1FEF4C03_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EE024038_E50D_05D5_41D7_ED0C1FEF4C03_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE024038_E50D_05D5_41D7_ED0C1FEF4C03_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE024038_E50D_05D5_41D7_ED0C1FEF4C03_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EE024038_E50D_05D5_41D7_ED0C1FEF4C03_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_EE024038_E50D_05D5_41D7_ED0C1FEF4C03_tcap0",
  "this.overlay_0E6BA61B_4C42_66B1_41BE_D46183060398",
  "this.overlay_0E1FB459_4C42_7AB1_41CE_05D2B7AA5E68",
  "this.overlay_7069A132_5141_182B_41A3_84F2EC74D1E0"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 146.94,
  "pitch": 1.84
 },
 "id": "camera_41F68DFB_5B73_1C78_41D6_2D97D579E990",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 50.51,
  "pitch": 9.18
 },
 "id": "camera_42C92BF0_5B73_2489_41BE_BE673F90422B",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_EE292CF3_E50F_1E54_41EB_C108BD9CCB49_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": -91.84,
  "pitch": 2.76
 },
 "id": "camera_413CAD76_5B73_1D88_41C6_01309DFE892A",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 176.33,
  "pitch": 0
 },
 "id": "camera_47D8931A_5B73_65B8_4172_F63C5110B6FC",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "displayOriginPosition": {
  "hfov": 165,
  "class": "RotationalCameraDisplayPosition",
  "yaw": 3.07,
  "stereographicFactor": 1,
  "pitch": -90
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 3.07,
  "pitch": -19.71
 },
 "id": "panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_camera",
 "displayMovements": [
  {
   "duration": 1000,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "linear"
  },
  {
   "targetPitch": -19.71,
   "duration": 3000,
   "class": "TargetRotationalCameraDisplayMovement",
   "targetHfov": 100,
   "targetStereographicFactor": 0,
   "easing": "cubic_in_out"
  }
 ],
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": -136.84,
  "pitch": -14.69
 },
 "id": "camera_476D71CC_5B73_6499_41B3_7E6CF5584F0F",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 67.96,
  "pitch": 0
 },
 "id": "camera_42226AC4_5B73_2489_41BD_9E811D0248DE",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE1120BD_E50D_06CC_41E5_D131A255BF82"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE136BCF_E50D_3A4B_41E8_E76CE85C4CC2"
  }
 ],
 "hfov": 360,
 "label": "Computer Lab",
 "id": "panorama_EE2DE5C7_E50D_0EBC_41EB_7F20078D80DE",
 "thumbnailUrl": "media/panorama_EE2DE5C7_E50D_0EBC_41EB_7F20078D80DE_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 140,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_EE2DE5C7_E50D_0EBC_41EB_7F20078D80DE_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2DE5C7_E50D_0EBC_41EB_7F20078D80DE_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2DE5C7_E50D_0EBC_41EB_7F20078D80DE_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EE2DE5C7_E50D_0EBC_41EB_7F20078D80DE_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2DE5C7_E50D_0EBC_41EB_7F20078D80DE_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2DE5C7_E50D_0EBC_41EB_7F20078D80DE_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EE2DE5C7_E50D_0EBC_41EB_7F20078D80DE_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2DE5C7_E50D_0EBC_41EB_7F20078D80DE_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2DE5C7_E50D_0EBC_41EB_7F20078D80DE_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EE2DE5C7_E50D_0EBC_41EB_7F20078D80DE_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2DE5C7_E50D_0EBC_41EB_7F20078D80DE_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2DE5C7_E50D_0EBC_41EB_7F20078D80DE_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EE2DE5C7_E50D_0EBC_41EB_7F20078D80DE_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2DE5C7_E50D_0EBC_41EB_7F20078D80DE_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2DE5C7_E50D_0EBC_41EB_7F20078D80DE_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EE2DE5C7_E50D_0EBC_41EB_7F20078D80DE_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2DE5C7_E50D_0EBC_41EB_7F20078D80DE_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2DE5C7_E50D_0EBC_41EB_7F20078D80DE_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EE2DE5C7_E50D_0EBC_41EB_7F20078D80DE_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_EE2DE5C7_E50D_0EBC_41EB_7F20078D80DE_tcap0",
  "this.overlay_0FD8E006_4DBE_5A93_41D2_F5A32DAB0435",
  "this.overlay_0EE60E6B_4C42_6691_41CC_D3B5B57BC534",
  "this.overlay_459BF11B_50C1_1819_41CC_F55548D03CD1",
  "this.overlay_734DA450_51C1_1867_41D3_D5338B7D4BFA"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": -90.92,
  "pitch": -0.92
 },
 "id": "camera_41ABDE4B_5B73_1F98_41D3_5646CF8F0159",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 89.08,
  "pitch": 1.84
 },
 "id": "camera_40572F1C_5B73_1DB9_4185_8080719EA020",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_EE136BCF_E50D_3A4B_41E8_E76CE85C4CC2_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE2B0BC9_E50F_1AB7_41E4_A37BF9465CB5"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE00BCB0_E50D_1ED4_41E9_660482BF251F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE138EC8_E50D_1AB5_41EB_583D3AEB8500"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE2E0473_E50D_0E54_41E9_F7FED4507DF8"
  }
 ],
 "hfov": 360,
 "label": "Lobby 1stFloor",
 "id": "panorama_EE286634_E50F_0DDC_41C6_1FA8A4444D48",
 "thumbnailUrl": "media/panorama_EE286634_E50F_0DDC_41C6_1FA8A4444D48_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 140,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_EE286634_E50F_0DDC_41C6_1FA8A4444D48_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE286634_E50F_0DDC_41C6_1FA8A4444D48_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE286634_E50F_0DDC_41C6_1FA8A4444D48_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EE286634_E50F_0DDC_41C6_1FA8A4444D48_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE286634_E50F_0DDC_41C6_1FA8A4444D48_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE286634_E50F_0DDC_41C6_1FA8A4444D48_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EE286634_E50F_0DDC_41C6_1FA8A4444D48_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE286634_E50F_0DDC_41C6_1FA8A4444D48_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE286634_E50F_0DDC_41C6_1FA8A4444D48_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EE286634_E50F_0DDC_41C6_1FA8A4444D48_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE286634_E50F_0DDC_41C6_1FA8A4444D48_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE286634_E50F_0DDC_41C6_1FA8A4444D48_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EE286634_E50F_0DDC_41C6_1FA8A4444D48_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE286634_E50F_0DDC_41C6_1FA8A4444D48_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE286634_E50F_0DDC_41C6_1FA8A4444D48_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EE286634_E50F_0DDC_41C6_1FA8A4444D48_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE286634_E50F_0DDC_41C6_1FA8A4444D48_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE286634_E50F_0DDC_41C6_1FA8A4444D48_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EE286634_E50F_0DDC_41C6_1FA8A4444D48_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_EE286634_E50F_0DDC_41C6_1FA8A4444D48_tcap0",
  "this.overlay_414C6E6C_50C7_083F_41B8_596EADBA00BF",
  "this.overlay_4138F1E0_50C7_3827_41C6_2ABC23864A2D",
  "this.overlay_43DC8BFD_50C1_081E_41D1_59C392ACFE40",
  "this.overlay_73300994_51C1_08EF_41CB_56808B4FB25C",
  "this.overlay_72736905_51C1_09E9_419B_DA54232BA6DE",
  "this.overlay_7747C161_51C1_1829_41A0_A3B798148006",
  "this.overlay_47810CFD_51C1_7140_41C8_CD4EE58F271B",
  "this.overlay_46B015CA_51C3_3343_41BD_6DEFDA3DCCC5"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 10.1,
  "pitch": 0.92
 },
 "id": "camera_47E6B2D4_5B73_6488_41D6_6C27BD953041",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_EE2F3704_E50F_0BBD_41E3_B8682A50A3B9_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_EE2BB6BB_E50D_0AD4_41B6_AEE7D63D1816_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE0071D6_E50D_065C_41E1_377D18C833EB"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE2D7730_E50F_0BD4_41EA_76D04CAB3845"
  }
 ],
 "hfov": 360,
 "label": "Pathway3",
 "id": "panorama_EE24E1F2_E50D_0654_41C8_449A85C554A0",
 "thumbnailUrl": "media/panorama_EE24E1F2_E50D_0654_41C8_449A85C554A0_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 140,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_EE24E1F2_E50D_0654_41C8_449A85C554A0_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE24E1F2_E50D_0654_41C8_449A85C554A0_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE24E1F2_E50D_0654_41C8_449A85C554A0_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EE24E1F2_E50D_0654_41C8_449A85C554A0_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE24E1F2_E50D_0654_41C8_449A85C554A0_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE24E1F2_E50D_0654_41C8_449A85C554A0_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EE24E1F2_E50D_0654_41C8_449A85C554A0_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE24E1F2_E50D_0654_41C8_449A85C554A0_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE24E1F2_E50D_0654_41C8_449A85C554A0_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EE24E1F2_E50D_0654_41C8_449A85C554A0_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE24E1F2_E50D_0654_41C8_449A85C554A0_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE24E1F2_E50D_0654_41C8_449A85C554A0_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EE24E1F2_E50D_0654_41C8_449A85C554A0_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE24E1F2_E50D_0654_41C8_449A85C554A0_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE24E1F2_E50D_0654_41C8_449A85C554A0_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EE24E1F2_E50D_0654_41C8_449A85C554A0_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE24E1F2_E50D_0654_41C8_449A85C554A0_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE24E1F2_E50D_0654_41C8_449A85C554A0_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EE24E1F2_E50D_0654_41C8_449A85C554A0_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_EE24E1F2_E50D_0654_41C8_449A85C554A0_tcap0",
  "this.overlay_6D3C4821_4C42_D2AC_41B1_A5E0C89670DE",
  "this.overlay_6E908F6A_4C42_AEBF_41D0_EB2782A000A1",
  "this.overlay_7388F6FA_51C7_181B_41D0_1C23B23111F8",
  "this.overlay_73BC9D62_51C7_082A_41D0_81DD8C9B5B51"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_EE2D527F_E50D_0A4C_41E1_6EF067CB57A1_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": -64.29,
  "pitch": 11.94
 },
 "id": "camera_423BCAE3_5B73_248F_41AC_C4E0B3EA5B13",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 22.96,
  "pitch": 1.84
 },
 "id": "camera_40D620C3_5B73_648F_41D5_BF472BF5637A",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE286634_E50F_0DDC_41C6_1FA8A4444D48"
  }
 ],
 "hfov": 360,
 "label": "Geography Dept",
 "id": "panorama_EE138EC8_E50D_1AB5_41EB_583D3AEB8500",
 "thumbnailUrl": "media/panorama_EE138EC8_E50D_1AB5_41EB_583D3AEB8500_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 140,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_EE138EC8_E50D_1AB5_41EB_583D3AEB8500_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE138EC8_E50D_1AB5_41EB_583D3AEB8500_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE138EC8_E50D_1AB5_41EB_583D3AEB8500_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EE138EC8_E50D_1AB5_41EB_583D3AEB8500_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE138EC8_E50D_1AB5_41EB_583D3AEB8500_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE138EC8_E50D_1AB5_41EB_583D3AEB8500_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EE138EC8_E50D_1AB5_41EB_583D3AEB8500_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE138EC8_E50D_1AB5_41EB_583D3AEB8500_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE138EC8_E50D_1AB5_41EB_583D3AEB8500_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EE138EC8_E50D_1AB5_41EB_583D3AEB8500_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE138EC8_E50D_1AB5_41EB_583D3AEB8500_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE138EC8_E50D_1AB5_41EB_583D3AEB8500_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EE138EC8_E50D_1AB5_41EB_583D3AEB8500_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE138EC8_E50D_1AB5_41EB_583D3AEB8500_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE138EC8_E50D_1AB5_41EB_583D3AEB8500_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EE138EC8_E50D_1AB5_41EB_583D3AEB8500_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE138EC8_E50D_1AB5_41EB_583D3AEB8500_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE138EC8_E50D_1AB5_41EB_583D3AEB8500_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EE138EC8_E50D_1AB5_41EB_583D3AEB8500_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_EE138EC8_E50D_1AB5_41EB_583D3AEB8500_tcap0",
  "this.overlay_73283AD3_51C3_0869_41C4_FED99E828F71",
  "this.overlay_70BA2AEE_51C3_083A_41C9_FB93DF4FB602"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 131,
  "class": "PanoramaCameraPosition",
  "yaw": -37.65,
  "pitch": 3.67
 },
 "id": "camera_410FED8D_5B73_1C98_41CF_3424DEBBB577",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": -135,
  "pitch": 5.51
 },
 "id": "camera_42923C9E_5B73_1CB8_41BD_9D0BF3E755A8",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 38.57,
  "pitch": 1.84
 },
 "id": "camera_42C0BC02_5B73_2389_41CA_6D9DF7DD9907",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_EE2A1D11_E50D_1FD4_41E3_3ED918C5C28B_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 95.51,
  "pitch": 2.76
 },
 "id": "camera_42E81BA0_5B73_2489_41D1_10E8EA43196F",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE29323A_E50F_05D4_41E3_1A050EB18ADF"
  }
 ],
 "hfov": 360,
 "label": "Geology Lab",
 "id": "panorama_EE26FD1D_E50F_1FCC_41E6_674A1C467F24",
 "thumbnailUrl": "media/panorama_EE26FD1D_E50F_1FCC_41E6_674A1C467F24_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 140,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_EE26FD1D_E50F_1FCC_41E6_674A1C467F24_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE26FD1D_E50F_1FCC_41E6_674A1C467F24_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE26FD1D_E50F_1FCC_41E6_674A1C467F24_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EE26FD1D_E50F_1FCC_41E6_674A1C467F24_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE26FD1D_E50F_1FCC_41E6_674A1C467F24_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE26FD1D_E50F_1FCC_41E6_674A1C467F24_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EE26FD1D_E50F_1FCC_41E6_674A1C467F24_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE26FD1D_E50F_1FCC_41E6_674A1C467F24_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE26FD1D_E50F_1FCC_41E6_674A1C467F24_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EE26FD1D_E50F_1FCC_41E6_674A1C467F24_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE26FD1D_E50F_1FCC_41E6_674A1C467F24_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE26FD1D_E50F_1FCC_41E6_674A1C467F24_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EE26FD1D_E50F_1FCC_41E6_674A1C467F24_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE26FD1D_E50F_1FCC_41E6_674A1C467F24_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE26FD1D_E50F_1FCC_41E6_674A1C467F24_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EE26FD1D_E50F_1FCC_41E6_674A1C467F24_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE26FD1D_E50F_1FCC_41E6_674A1C467F24_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE26FD1D_E50F_1FCC_41E6_674A1C467F24_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EE26FD1D_E50F_1FCC_41E6_674A1C467F24_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_EE26FD1D_E50F_1FCC_41E6_674A1C467F24_tcap0",
  "this.overlay_5AB21E0A_4CDE_AE7F_41BD_A0D2C9EAE3F6",
  "this.overlay_73735981_51C1_08E9_41C1_CABE36F3DF12"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": -145.1,
  "pitch": 9.18
 },
 "id": "camera_479CA39B_5B73_64B8_41D1_6706FB453C0A",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE2A1D11_E50D_1FD4_41E3_3ED918C5C28B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE2F3704_E50F_0BBD_41E3_B8682A50A3B9"
  }
 ],
 "hfov": 360,
 "label": "Lobby Gflour",
 "id": "panorama_EE2F01CE_E50F_064C_41D4_83774C3F79EA",
 "thumbnailUrl": "media/panorama_EE2F01CE_E50F_064C_41D4_83774C3F79EA_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 140,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_EE2F01CE_E50F_064C_41D4_83774C3F79EA_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2F01CE_E50F_064C_41D4_83774C3F79EA_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2F01CE_E50F_064C_41D4_83774C3F79EA_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EE2F01CE_E50F_064C_41D4_83774C3F79EA_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2F01CE_E50F_064C_41D4_83774C3F79EA_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2F01CE_E50F_064C_41D4_83774C3F79EA_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EE2F01CE_E50F_064C_41D4_83774C3F79EA_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2F01CE_E50F_064C_41D4_83774C3F79EA_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2F01CE_E50F_064C_41D4_83774C3F79EA_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EE2F01CE_E50F_064C_41D4_83774C3F79EA_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2F01CE_E50F_064C_41D4_83774C3F79EA_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2F01CE_E50F_064C_41D4_83774C3F79EA_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EE2F01CE_E50F_064C_41D4_83774C3F79EA_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2F01CE_E50F_064C_41D4_83774C3F79EA_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2F01CE_E50F_064C_41D4_83774C3F79EA_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EE2F01CE_E50F_064C_41D4_83774C3F79EA_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2F01CE_E50F_064C_41D4_83774C3F79EA_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2F01CE_E50F_064C_41D4_83774C3F79EA_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EE2F01CE_E50F_064C_41D4_83774C3F79EA_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_EE2F01CE_E50F_064C_41D4_83774C3F79EA_tcap0",
  "this.overlay_550215E4_4CC2_5DAB_41CA_CCFF6824ED0A",
  "this.overlay_5697B56C_4CC2_72B5_418F_7D0FD974F9FE",
  "this.overlay_73E0D51A_51CF_781B_418B_31F286DA3006"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": -127.65,
  "pitch": 0.92
 },
 "id": "camera_421DCB61_5B73_258B_41CE_B08542355D2F",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_EE260721_E50F_0BF7_41E7_1A5DCE792CB7_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 6.43,
  "pitch": 9.18
 },
 "id": "camera_419F7E93_5B73_1C88_41C3_5612ECF3B2E7",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE2F01CE_E50F_064C_41D4_83774C3F79EA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE29323A_E50F_05D4_41E3_1A050EB18ADF"
  }
 ],
 "hfov": 360,
 "label": "Lobby GFloor",
 "id": "panorama_EE2F3704_E50F_0BBD_41E3_B8682A50A3B9",
 "thumbnailUrl": "media/panorama_EE2F3704_E50F_0BBD_41E3_B8682A50A3B9_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 140,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_EE2F3704_E50F_0BBD_41E3_B8682A50A3B9_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2F3704_E50F_0BBD_41E3_B8682A50A3B9_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2F3704_E50F_0BBD_41E3_B8682A50A3B9_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EE2F3704_E50F_0BBD_41E3_B8682A50A3B9_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2F3704_E50F_0BBD_41E3_B8682A50A3B9_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2F3704_E50F_0BBD_41E3_B8682A50A3B9_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EE2F3704_E50F_0BBD_41E3_B8682A50A3B9_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2F3704_E50F_0BBD_41E3_B8682A50A3B9_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2F3704_E50F_0BBD_41E3_B8682A50A3B9_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EE2F3704_E50F_0BBD_41E3_B8682A50A3B9_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2F3704_E50F_0BBD_41E3_B8682A50A3B9_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2F3704_E50F_0BBD_41E3_B8682A50A3B9_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EE2F3704_E50F_0BBD_41E3_B8682A50A3B9_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2F3704_E50F_0BBD_41E3_B8682A50A3B9_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2F3704_E50F_0BBD_41E3_B8682A50A3B9_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EE2F3704_E50F_0BBD_41E3_B8682A50A3B9_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2F3704_E50F_0BBD_41E3_B8682A50A3B9_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2F3704_E50F_0BBD_41E3_B8682A50A3B9_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EE2F3704_E50F_0BBD_41E3_B8682A50A3B9_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_EE2F3704_E50F_0BBD_41E3_B8682A50A3B9_tcap0",
  "this.overlay_5431BAB8_4CC2_579B_4154_49E4CB021778",
  "this.overlay_54616FC6_4CC2_ADF4_41C5_F66630EC837F"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE2A1D11_E50D_1FD4_41E3_3ED918C5C28B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE3B7777_E50F_0A5C_41E0_975B9D854D5C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE00BCB0_E50D_1ED4_41E9_660482BF251F"
  }
 ],
 "hfov": 360,
 "label": "Lobby Garden",
 "id": "panorama_EE3A1C30_E50F_1DD4_41C1_4345802A63F5",
 "thumbnailUrl": "media/panorama_EE3A1C30_E50F_1DD4_41C1_4345802A63F5_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 140,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_EE3A1C30_E50F_1DD4_41C1_4345802A63F5_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE3A1C30_E50F_1DD4_41C1_4345802A63F5_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE3A1C30_E50F_1DD4_41C1_4345802A63F5_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EE3A1C30_E50F_1DD4_41C1_4345802A63F5_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE3A1C30_E50F_1DD4_41C1_4345802A63F5_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE3A1C30_E50F_1DD4_41C1_4345802A63F5_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EE3A1C30_E50F_1DD4_41C1_4345802A63F5_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE3A1C30_E50F_1DD4_41C1_4345802A63F5_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE3A1C30_E50F_1DD4_41C1_4345802A63F5_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EE3A1C30_E50F_1DD4_41C1_4345802A63F5_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE3A1C30_E50F_1DD4_41C1_4345802A63F5_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE3A1C30_E50F_1DD4_41C1_4345802A63F5_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EE3A1C30_E50F_1DD4_41C1_4345802A63F5_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE3A1C30_E50F_1DD4_41C1_4345802A63F5_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE3A1C30_E50F_1DD4_41C1_4345802A63F5_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EE3A1C30_E50F_1DD4_41C1_4345802A63F5_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE3A1C30_E50F_1DD4_41C1_4345802A63F5_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE3A1C30_E50F_1DD4_41C1_4345802A63F5_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EE3A1C30_E50F_1DD4_41C1_4345802A63F5_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_EE3A1C30_E50F_1DD4_41C1_4345802A63F5_tcap0",
  "this.overlay_61B6F352_4C46_B6EC_41C8_EB802D5E8517",
  "this.overlay_611CBD45_4C46_B2F5_418F_9F5C43DB67B3",
  "this.overlay_08E3B775_4C42_E571_41D0_2728D234ED5A",
  "this.overlay_732C3192_51C3_18EB_41C4_6BBCEE49C5AF",
  "this.overlay_73B57259_51C3_7819_41D2_C4B85092AE72",
  "this.overlay_72709A42_51C3_086B_41C9_C72225E37BE8"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE26521F_E50F_05CC_41CC_305CAB4B0D4F"
  }
 ],
 "hfov": 360,
 "label": "Garden 2",
 "id": "panorama_EE2957C9_E50F_0AB4_41AD_99CDB988813A",
 "thumbnailUrl": "media/panorama_EE2957C9_E50F_0AB4_41AD_99CDB988813A_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 140,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_EE2957C9_E50F_0AB4_41AD_99CDB988813A_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2957C9_E50F_0AB4_41AD_99CDB988813A_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2957C9_E50F_0AB4_41AD_99CDB988813A_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EE2957C9_E50F_0AB4_41AD_99CDB988813A_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2957C9_E50F_0AB4_41AD_99CDB988813A_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2957C9_E50F_0AB4_41AD_99CDB988813A_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EE2957C9_E50F_0AB4_41AD_99CDB988813A_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2957C9_E50F_0AB4_41AD_99CDB988813A_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2957C9_E50F_0AB4_41AD_99CDB988813A_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EE2957C9_E50F_0AB4_41AD_99CDB988813A_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2957C9_E50F_0AB4_41AD_99CDB988813A_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2957C9_E50F_0AB4_41AD_99CDB988813A_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EE2957C9_E50F_0AB4_41AD_99CDB988813A_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2957C9_E50F_0AB4_41AD_99CDB988813A_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2957C9_E50F_0AB4_41AD_99CDB988813A_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EE2957C9_E50F_0AB4_41AD_99CDB988813A_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE2957C9_E50F_0AB4_41AD_99CDB988813A_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE2957C9_E50F_0AB4_41AD_99CDB988813A_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EE2957C9_E50F_0AB4_41AD_99CDB988813A_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_EE2957C9_E50F_0AB4_41AD_99CDB988813A_tcap0",
  "this.overlay_5D3FE192_4CC6_B26F_4197_6064F7BEAAFA",
  "this.overlay_7302E9A4_51C3_082F_41B7_54E317D39565"
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_63A902B2_51C1_182A_41CE_91314C97889E",
 "levels": [
  {
   "url": "media/zoomImage_7D5EC925_51C1_0829_418B_9B2C1DE9B1AE_0_0.jpg",
   "width": 1280,
   "class": "ImageResourceLevel",
   "height": 720
  },
  {
   "url": "media/zoomImage_7D5EC925_51C1_0829_418B_9B2C1DE9B1AE_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/zoomImage_7D5EC925_51C1_0829_418B_9B2C1DE9B1AE_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "camera_471532B3_5B73_6488_41BE_36765A2CDDA3",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "camera_4704A292_5B73_6488_41A3_902EC5B0E97B",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE0071D6_E50D_065C_41E1_377D18C833EB"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE29EC70_E50F_1E55_41CD_5DDBCB2C3F0E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE00BCB0_E50D_1ED4_41E9_660482BF251F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE3A1C30_E50F_1DD4_41C1_4345802A63F5"
  }
 ],
 "hfov": 360,
 "label": "Lobby Reception",
 "id": "panorama_EE3B7777_E50F_0A5C_41E0_975B9D854D5C",
 "thumbnailUrl": "media/panorama_EE3B7777_E50F_0A5C_41E0_975B9D854D5C_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 140,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_EE3B7777_E50F_0A5C_41E0_975B9D854D5C_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE3B7777_E50F_0A5C_41E0_975B9D854D5C_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE3B7777_E50F_0A5C_41E0_975B9D854D5C_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EE3B7777_E50F_0A5C_41E0_975B9D854D5C_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE3B7777_E50F_0A5C_41E0_975B9D854D5C_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE3B7777_E50F_0A5C_41E0_975B9D854D5C_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EE3B7777_E50F_0A5C_41E0_975B9D854D5C_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE3B7777_E50F_0A5C_41E0_975B9D854D5C_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE3B7777_E50F_0A5C_41E0_975B9D854D5C_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EE3B7777_E50F_0A5C_41E0_975B9D854D5C_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE3B7777_E50F_0A5C_41E0_975B9D854D5C_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE3B7777_E50F_0A5C_41E0_975B9D854D5C_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EE3B7777_E50F_0A5C_41E0_975B9D854D5C_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE3B7777_E50F_0A5C_41E0_975B9D854D5C_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE3B7777_E50F_0A5C_41E0_975B9D854D5C_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EE3B7777_E50F_0A5C_41E0_975B9D854D5C_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE3B7777_E50F_0A5C_41E0_975B9D854D5C_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE3B7777_E50F_0A5C_41E0_975B9D854D5C_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EE3B7777_E50F_0A5C_41E0_975B9D854D5C_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_EE3B7777_E50F_0A5C_41E0_975B9D854D5C_tcap0",
  "this.overlay_509512E9_4CC2_57BC_41C7_1E9E1B699A4E",
  "this.overlay_52F4AF53_4CC2_AEED_41CE_67D0B2480391",
  "this.overlay_57482257_4CC3_B694_41C9_9F5E22981D42",
  "this.overlay_6A76CCA7_4C42_53B5_4164_6654F4C56F9C",
  "this.overlay_73142C32_51C3_082A_41D2_24D4A8C53CD5",
  "this.overlay_72477849_51C3_0879_41A0_460471736E70",
  "this.overlay_7238610E_51C3_39FB_41CD_082FF1DEDFF8",
  "this.overlay_77061ED2_51C1_086B_41D3_53394F93E8E8"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE2E82BA_E50F_0AD4_4188_A17A1C63EA59"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE2CF389_E50F_0AB4_41EC_79A5E3F131A5"
  }
 ],
 "hfov": 360,
 "label": "Conf Lobby 3",
 "id": "panorama_EE10EDCE_E50F_1E4D_41EA_970C8ADE1052",
 "thumbnailUrl": "media/panorama_EE10EDCE_E50F_1E4D_41EA_970C8ADE1052_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 140,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_EE10EDCE_E50F_1E4D_41EA_970C8ADE1052_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE10EDCE_E50F_1E4D_41EA_970C8ADE1052_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE10EDCE_E50F_1E4D_41EA_970C8ADE1052_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EE10EDCE_E50F_1E4D_41EA_970C8ADE1052_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE10EDCE_E50F_1E4D_41EA_970C8ADE1052_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE10EDCE_E50F_1E4D_41EA_970C8ADE1052_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EE10EDCE_E50F_1E4D_41EA_970C8ADE1052_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE10EDCE_E50F_1E4D_41EA_970C8ADE1052_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE10EDCE_E50F_1E4D_41EA_970C8ADE1052_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EE10EDCE_E50F_1E4D_41EA_970C8ADE1052_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE10EDCE_E50F_1E4D_41EA_970C8ADE1052_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE10EDCE_E50F_1E4D_41EA_970C8ADE1052_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EE10EDCE_E50F_1E4D_41EA_970C8ADE1052_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE10EDCE_E50F_1E4D_41EA_970C8ADE1052_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE10EDCE_E50F_1E4D_41EA_970C8ADE1052_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EE10EDCE_E50F_1E4D_41EA_970C8ADE1052_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE10EDCE_E50F_1E4D_41EA_970C8ADE1052_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE10EDCE_E50F_1E4D_41EA_970C8ADE1052_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EE10EDCE_E50F_1E4D_41EA_970C8ADE1052_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_EE10EDCE_E50F_1E4D_41EA_970C8ADE1052_tcap0",
  "this.overlay_68CA8C2A_48B4_8B7C_41AC_FB48FE17738D",
  "this.overlay_68976BBF_48CB_8D55_41CB_A337548D2C44",
  "this.overlay_73DE6A4E_51C1_087A_41D3_789CAD20FA17"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 120.31,
  "pitch": 7.35
 },
 "id": "camera_4258FA65_5B73_278B_41C7_EF129FCC3D59",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE2D7730_E50F_0BD4_41EA_76D04CAB3845"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE2E82BA_E50F_0AD4_4188_A17A1C63EA59"
  }
 ],
 "hfov": 360,
 "label": "Conf Lobby 1",
 "id": "panorama_EE292CF3_E50F_1E54_41EB_C108BD9CCB49",
 "thumbnailUrl": "media/panorama_EE292CF3_E50F_1E54_41EB_C108BD9CCB49_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 140,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_EE292CF3_E50F_1E54_41EB_C108BD9CCB49_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE292CF3_E50F_1E54_41EB_C108BD9CCB49_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE292CF3_E50F_1E54_41EB_C108BD9CCB49_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EE292CF3_E50F_1E54_41EB_C108BD9CCB49_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE292CF3_E50F_1E54_41EB_C108BD9CCB49_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE292CF3_E50F_1E54_41EB_C108BD9CCB49_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EE292CF3_E50F_1E54_41EB_C108BD9CCB49_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE292CF3_E50F_1E54_41EB_C108BD9CCB49_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE292CF3_E50F_1E54_41EB_C108BD9CCB49_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EE292CF3_E50F_1E54_41EB_C108BD9CCB49_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE292CF3_E50F_1E54_41EB_C108BD9CCB49_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE292CF3_E50F_1E54_41EB_C108BD9CCB49_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EE292CF3_E50F_1E54_41EB_C108BD9CCB49_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE292CF3_E50F_1E54_41EB_C108BD9CCB49_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE292CF3_E50F_1E54_41EB_C108BD9CCB49_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EE292CF3_E50F_1E54_41EB_C108BD9CCB49_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE292CF3_E50F_1E54_41EB_C108BD9CCB49_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE292CF3_E50F_1E54_41EB_C108BD9CCB49_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EE292CF3_E50F_1E54_41EB_C108BD9CCB49_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_EE292CF3_E50F_1E54_41EB_C108BD9CCB49_tcap0",
  "this.overlay_68737A15_48B4_8F55_41B0_B67047C7F440",
  "this.overlay_681639D6_48B4_8CD4_41AD_73B3E3259483",
  "this.overlay_44F71E73_50C3_082A_41BB_5DF67F30C129",
  "this.overlay_736D4D85_51C7_08EE_418C_DB2805CD1114"
 ]
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "MainViewer",
 "left": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "toolTipOpacity": 0.5,
 "toolTipFontSize": 13,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 50,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "paddingRight": 0,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 7,
 "minWidth": 100,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "transitionMode": "blending",
 "playbackBarHeadShadowVerticalLength": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "playbackBarBorderSize": 0,
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "top": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 7,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 10,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "class": "ViewerArea",
 "borderRadius": 0,
 "paddingBottom": 0,
 "toolTipBorderRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "transitionDuration": 500,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "data": {
  "name": "--STICKER"
 },
 "children": [
  "this.Label_0C5F13A8_3BA0_A6FF_41BD_E3D21CFCE151"
 ],
 "left": 30,
 "width": 271,
 "scrollBarColor": "#000000",
 "id": "Container_0C5F33A8_3BA0_A6FF_41C3_2A6652E2CE94",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "layout": "absolute",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "bottom": 20,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "height": 97,
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "--BUTTON SET"
 },
 "children": [
  "this.Label_0E9CEE5D_36F3_E64E_419C_5A94FA5D3CA1",
  "this.Image_05314BAF_3AA1_A6F2_41CB_86A11240FA50",
  "this.Container_0542AAAA_3AA3_A6F3_41B2_0E208ADBBBE1"
 ],
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#F7931E"
 ],
 "contentOpaque": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "top": 0,
 "height": 60,
 "shadow": false,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "visible"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "---INFO photo"
 },
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderSize": 0,
 "paddingRight": 0,
 "bottom": "0%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "creationPolicy": "inAdvance",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "---REALTOR"
 },
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderSize": 0,
 "paddingRight": 0,
 "bottom": "0%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "creationPolicy": "inAdvance",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "itemThumbnailShadowColor": "#000000",
 "itemMode": "normal",
 "itemLabelFontStyle": "normal",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#FFFFFF",
 "id": "ThumbnailList_F71FACEA_E50D_1E74_41DD_FC1218D891CD",
 "scrollBarVisible": "rollOver",
 "right": "1.39%",
 "itemLabelHorizontalAlign": "center",
 "itemThumbnailOpacity": 1,
 "width": "97.105%",
 "itemLabelFontFamily": "Arial",
 "horizontalAlign": "left",
 "minHeight": 20,
 "itemThumbnailShadowOpacity": 0.27,
 "paddingRight": 20,
 "backgroundColor": [
  "#000000"
 ],
 "itemThumbnailShadowVerticalLength": 3,
 "itemPaddingRight": 3,
 "verticalAlign": "top",
 "minWidth": 20,
 "itemPaddingLeft": 3,
 "selectedItemLabelFontColor": "#FFCC00",
 "height": 158,
 "itemOpacity": 1,
 "shadow": false,
 "itemHorizontalAlign": "center",
 "itemLabelPosition": "bottom",
 "itemThumbnailShadowSpread": 1,
 "backgroundOpacity": 0.31,
 "itemBorderRadius": 0,
 "itemBackgroundOpacity": 0,
 "itemThumbnailShadowHorizontalLength": 3,
 "itemThumbnailBorderRadius": 5,
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "paddingLeft": 20,
 "propagateClick": false,
 "itemBackgroundColorRatios": [],
 "layout": "horizontal",
 "rollOverItemBackgroundOpacity": 0,
 "rollOverItemLabelFontWeight": "bold",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "selectedItemLabelFontWeight": "bold",
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "playList": "this.ThumbnailList_F71FACEA_E50D_1E74_41DD_FC1218D891CD_playlist",
 "itemThumbnailShadowBlurRadius": 8,
 "bottom": "1.99%",
 "itemLabelFontSize": 14,
 "itemVerticalAlign": "middle",
 "scrollBarMargin": 2,
 "itemLabelFontColor": "#FFFFFF",
 "itemThumbnailScaleMode": "fit_outside",
 "itemThumbnailHeight": 75,
 "paddingTop": 10,
 "itemBackgroundColorDirection": "vertical",
 "class": "ThumbnailList",
 "borderRadius": 5,
 "gap": 13,
 "paddingBottom": 10,
 "itemLabelGap": 8,
 "itemThumbnailShadow": true,
 "itemThumbnailWidth": 100,
 "itemPaddingBottom": 3,
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "ThumbnailList35762"
 },
 "scrollBarWidth": 10
},
{
 "backgroundColorRatios": [
  0
 ],
 "id": "veilPopupPanorama",
 "left": 0,
 "right": 0,
 "backgroundColorDirection": "vertical",
 "minHeight": 0,
 "borderSize": 0,
 "paddingRight": 0,
 "bottom": 0,
 "minWidth": 0,
 "backgroundColor": [
  "#000000"
 ],
 "top": 0,
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0.55,
 "class": "UIComponent",
 "borderRadius": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "visible": false,
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "propagateClick": false,
 "data": {
  "name": "UIComponent7708"
 }
},
{
 "backgroundColorRatios": [],
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "right": 0,
 "backgroundColorDirection": "vertical",
 "minHeight": 0,
 "borderSize": 0,
 "paddingRight": 0,
 "bottom": 0,
 "minWidth": 0,
 "backgroundColor": [],
 "top": 0,
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "class": "ZoomImage",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "custom",
 "paddingLeft": 0,
 "visible": false,
 "propagateClick": false,
 "data": {
  "name": "ZoomImage7709"
 }
},
{
 "fontFamily": "Arial",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "data": {
  "name": "CloseButton7710"
 },
 "id": "closeButtonPopupPanorama",
 "rollOverIconColor": "#666666",
 "fontSize": "1.29vmin",
 "right": 10,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 0,
 "horizontalAlign": "center",
 "fontColor": "#FFFFFF",
 "iconColor": "#000000",
 "borderSize": 0,
 "borderColor": "#000000",
 "paddingRight": 5,
 "top": 10,
 "minWidth": 0,
 "iconLineWidth": 5,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "label": "",
 "shadow": false,
 "iconHeight": 20,
 "shadowBlurRadius": 6,
 "paddingTop": 5,
 "pressedIconColor": "#888888",
 "backgroundOpacity": 0.3,
 "iconBeforeLabel": true,
 "class": "CloseButton",
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 5,
 "textDecoration": "none",
 "paddingLeft": 5,
 "visible": false,
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "fontStyle": "normal",
 "shadowSpread": 1,
 "cursor": "hand",
 "propagateClick": false,
 "fontWeight": "normal",
 "iconWidth": 20
},
{
 "fontFamily": "Arial",
 "backgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "width": 36,
 "data": {
  "name": "Button Settings Fullscreen"
 },
 "fontSize": 12,
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "horizontalAlign": "center",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "borderColor": "#000000",
 "paddingRight": 0,
 "backgroundColor": [
  "#F7931E"
 ],
 "layout": "horizontal",
 "mode": "toggle",
 "verticalAlign": "middle",
 "minWidth": 1,
 "pressedIconHeight": 30,
 "height": 60,
 "shadow": false,
 "iconHeight": 30,
 "iconURL": "skin/Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A.png",
 "shadowBlurRadius": 6,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundOpacity": 1,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "textDecoration": "none",
 "paddingLeft": 0,
 "fontStyle": "normal",
 "pressedIconWidth": 30,
 "pressedIconURL": "skin/Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A_pressed.png",
 "shadowSpread": 1,
 "cursor": "hand",
 "propagateClick": false,
 "fontWeight": "normal",
 "iconWidth": 30,
 "pressedRollOverBackgroundColor": [
  "#CE6700"
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 16.5,
 "id": "panorama_EE29323A_E50F_05D4_41E3_1A050EB18ADF_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.83,
   "image": "this.AnimatedImageResource_75E67EB5_4C42_EF94_41D2_57B74A09F19E",
   "pitch": -2.34,
   "yaw": 178.13,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_58168B04_4CC1_B66B_41C7_D6DCEFA1BEAE",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE26FD1D_E50F_1FCC_41E6_674A1C467F24, this.camera_408B915A_5B73_65B9_41BB_6FE5944EBC3B); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.83,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 178.13,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE29323A_E50F_05D4_41E3_1A050EB18ADF_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.34
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.83,
   "image": "this.AnimatedImageResource_75E6FEB6_4C42_EF94_41D0_15AEE9039AD1",
   "pitch": 2.18,
   "yaw": -91.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_549177FE_4CC3_DD97_41D2_DFCD890FBE74",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE29EC70_E50F_1E55_41CD_5DDBCB2C3F0E, this.camera_40BAF128_5B73_6599_41D1_FB950387AD05); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.83,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -91.68,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE29323A_E50F_05D4_41E3_1A050EB18ADF_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.18
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.84,
   "image": "this.AnimatedImageResource_75E56EB6_4C42_EF94_41CE_F90BD8F0549D",
   "pitch": 0.92,
   "yaw": 88.95,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5432C05E_4CC3_B294_41BD_013B0B186BB5",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE2F3704_E50F_0BBD_41E3_B8682A50A3B9, this.camera_409D7192_5B73_6489_41D3_11DB0C4BA544); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.84,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 88.95,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE29323A_E50F_05D4_41E3_1A050EB18ADF_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.92
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Geology Lab"
 },
 "items": [
  {
   "hfov": 24.74,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE29323A_E50F_05D4_41E3_1A050EB18ADF_0_HS_3_0.png",
      "width": 420,
      "class": "ImageResourceLevel",
      "height": 424
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.97,
   "yaw": 179.87,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_73236924_51C3_082F_41D2_68F020B4E3B6",
 "maps": [
  {
   "hfov": 24.74,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179.87,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE29323A_E50F_05D4_41E3_1A050EB18ADF_0_HS_3_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.97
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 16.5,
 "id": "panorama_EE0071D6_E50D_065C_41E1_377D18C833EB_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.67,
   "image": "this.AnimatedImageResource_75ED5ECE_4C42_EFF4_41CF_82F21C62656D",
   "pitch": 7.73,
   "yaw": -135.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_6C1C8ABC_4C4E_F79B_41CA_054D3D9C5F81",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE24E1F2_E50D_0654_41C8_449A85C554A0, this.camera_42E81BA0_5B73_2489_41D1_10E8EA43196F); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 14.67,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -135.17,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE0071D6_E50D_065C_41E1_377D18C833EB_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.73
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.67,
   "image": "this.AnimatedImageResource_75EDDECF_4C42_EFF4_41B2_54A4D47A6CA1",
   "pitch": 7.73,
   "yaw": -48.5,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_6D6619B7_4C41_B594_41C3_E5C95FA3AD4A",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE3B7777_E50F_0A5C_41E0_975B9D854D5C, this.camera_421DCB61_5B73_258B_41CE_B08542355D2F); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 14.67,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -48.5,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE0071D6_E50D_065C_41E1_377D18C833EB_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.73
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.8,
   "image": "this.AnimatedImageResource_75EDAECF_4C42_EFF4_41D2_33E1945BB907",
   "pitch": 1.2,
   "yaw": 43.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_6EEB30E5_4C41_F3B5_41B0_F253E5112799",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE2BA753_E50D_0A54_41A5_26D2D3FDC5E8, this.camera_4212AB81_5B73_248B_41D3_B06C61FDCE23); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 43.2,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE0071D6_E50D_065C_41E1_377D18C833EB_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.2
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Pathway"
 },
 "items": [
  {
   "hfov": 40.92,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE0071D6_E50D_065C_41E1_377D18C833EB_0_HS_3_0.png",
      "width": 691,
      "class": "ImageResourceLevel",
      "height": 424
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.32,
   "yaw": -122.34,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_73C4F530_51C7_1827_41C7_CF07C68D24AA",
 "maps": [
  {
   "hfov": 40.92,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -122.34,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE0071D6_E50D_065C_41E1_377D18C833EB_0_HS_3_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.32
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 16.5,
 "id": "panorama_EE2B0BC9_E50F_1AB7_41E4_A37BF9465CB5_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.82,
   "image": "this.AnimatedImageResource_4DACC751_5143_3866_4191_ADB8F260C8DA",
   "pitch": 3.44,
   "yaw": 43.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_784675FA_4DC1_A573_41B7_315C136B8ABE",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE1315C2_E50D_0EB4_41EA_7018A9A44044, this.camera_47E6B2D4_5B73_6488_41D6_6C27BD953041); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.82,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 43.48,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2B0BC9_E50F_1AB7_41E4_A37BF9465CB5_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.44
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.77,
   "image": "this.AnimatedImageResource_4DAC6751_5143_3866_41D3_19F615A93C17",
   "pitch": -4.07,
   "yaw": -139.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_78B4AED4_4DCE_67B7_41D1_9B6C82155CAF",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE00BCB0_E50D_1ED4_41E9_660482BF251F, this.camera_47F542EF_5B73_6498_4170_9EDCCF367D8E); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 14.77,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -139.44,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2B0BC9_E50F_1AB7_41E4_A37BF9465CB5_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.07
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.84,
   "image": "this.AnimatedImageResource_4DAFE752_5143_386A_41D3_A3F083D43809",
   "pitch": -1.59,
   "yaw": 135.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_71058F15_4DC2_A6B1_41C3_65F3C042FDA4",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE286634_E50F_0DDC_41C6_1FA8A4444D48, this.camera_47C74303_5B73_6588_41BF_D6647B8BF99F); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.84,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 135.68,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2B0BC9_E50F_1AB7_41E4_A37BF9465CB5_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.59
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.5,
   "image": "this.AnimatedImageResource_4DAF6752_5143_386A_41D1_96E12FB32689",
   "pitch": -13.9,
   "yaw": -0.74,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_75A30D4F_4DC6_AA91_41CB_7D8163302FE7",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE2D527F_E50D_0A4C_41E1_6EF067CB57A1, this.camera_47D8931A_5B73_65B8_4172_F63C5110B6FC); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.5,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.74,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2B0BC9_E50F_1AB7_41E4_A37BF9465CB5_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.9
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Lobby"
 },
 "items": [
  {
   "hfov": 40.83,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2B0BC9_E50F_1AB7_41E4_A37BF9465CB5_0_HS_4_0.png",
      "width": 691,
      "class": "ImageResourceLevel",
      "height": 424
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.46,
   "yaw": 150.23,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_73369406_51CF_3FEB_415E_4A450CD78D6B",
 "maps": [
  {
   "hfov": 40.83,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 150.23,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2B0BC9_E50F_1AB7_41E4_A37BF9465CB5_0_HS_4_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.46
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Ground Floor"
 },
 "items": [
  {
   "hfov": 39.36,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2B0BC9_E50F_1AB7_41E4_A37BF9465CB5_0_HS_5_0.png",
      "width": 691,
      "class": "ImageResourceLevel",
      "height": 424
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.02,
   "yaw": 6.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_73CEC5E2_51CF_182B_41D2_668BD237C595",
 "maps": [
  {
   "hfov": 39.36,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 6.28,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2B0BC9_E50F_1AB7_41E4_A37BF9465CB5_0_HS_5_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.02
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "2nd Floor"
 },
 "items": [
  {
   "hfov": 40.95,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2B0BC9_E50F_1AB7_41E4_A37BF9465CB5_0_HS_6_0.png",
      "width": 691,
      "class": "ImageResourceLevel",
      "height": 424
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.19,
   "yaw": 55.02,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_721B1DE2_51CF_082B_41C2_A8039EBA16C9",
 "maps": [
  {
   "hfov": 40.95,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 55.02,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2B0BC9_E50F_1AB7_41E4_A37BF9465CB5_0_HS_6_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.19
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 16.5,
 "id": "panorama_EE2E0473_E50D_0E54_41E9_F7FED4507DF8_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.84,
   "image": "this.AnimatedImageResource_63E9C26A_51C1_183A_41C2_CA83BF19EDFC",
   "pitch": -0.83,
   "yaw": 120.35,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7099530E_51BF_39FB_41B7_079C0862A7A3",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE286634_E50F_0DDC_41C6_1FA8A4444D48, this.camera_401E7FD3_5B73_1C8F_4194_0473806A2F7F); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.84,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 120.35,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2E0473_E50D_0E54_41E9_F7FED4507DF8_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.83
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Exit"
 },
 "items": [
  {
   "hfov": 25.02,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2E0473_E50D_0E54_41E9_F7FED4507DF8_0_HS_1_0.png",
      "width": 424,
      "class": "ImageResourceLevel",
      "height": 424
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.21,
   "yaw": 129.5,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_75CE2DC1_51C1_0869_41C1_10C826961A2E",
 "maps": [
  {
   "hfov": 25.02,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 129.5,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2E0473_E50D_0E54_41E9_F7FED4507DF8_0_HS_1_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.21
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 16.5,
 "id": "panorama_EE2BA753_E50D_0A54_41A5_26D2D3FDC5E8_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.84,
   "image": "this.AnimatedImageResource_4DA0D762_5143_382A_41B6_ABA1C80159FA",
   "pitch": -0.83,
   "yaw": 55.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7CE40015_4DBE_5AB1_41C2_4B5BF0DE02B4",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE2B5235_E50D_05DC_41DC_C7CFD9A8CD5C, this.camera_42343B03_5B73_258F_41B8_4B35F826D541); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.84,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 55.03,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2BA753_E50D_0A54_41A5_26D2D3FDC5E8_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.83
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.83,
   "image": "this.AnimatedImageResource_4DA04764_5143_382E_41D1_E1B4B20FC347",
   "pitch": 2.18,
   "yaw": -34.9,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7F17B833_4DBE_AAF1_41D2_3A9CDEDE17D8",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE2BB6BB_E50D_0AD4_41B6_AEE7D63D1816, this.camera_42226AC4_5B73_2489_41BD_9E811D0248DE); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.83,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -34.9,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2BA753_E50D_0A54_41A5_26D2D3FDC5E8_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.18
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.8,
   "image": "this.AnimatedImageResource_4DA3E766_5143_382A_4179_863407F6B670",
   "pitch": -5.1,
   "yaw": -122.08,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7DDE89C3_4DBE_ED91_4171_C634A246E477",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE00BCB0_E50D_1ED4_41E9_660482BF251F, this.camera_423BCAE3_5B73_248F_41AC_C4E0B3EA5B13); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.8,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -122.08,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2BA753_E50D_0A54_41A5_26D2D3FDC5E8_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.1
  }
 ]
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info Red 05"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.07,
   "image": "this.AnimatedImageResource_4DA37766_5143_382A_41C1_1F6B2487668F",
   "pitch": 19.96,
   "yaw": 55.54,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_45DD7CFE_50C1_081A_41D0_1EA3FD60A27D",
 "areas": [
  {
   "click": "this.showWindow(this.window_453C1861_50C1_0828_41C2_478EA9B6B8EB, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 8.07,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 55.54,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2BA753_E50D_0A54_41A5_26D2D3FDC5E8_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 19.96
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Garden"
 },
 "items": [
  {
   "hfov": 40.39,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2BA753_E50D_0A54_41A5_26D2D3FDC5E8_0_HS_4_0.png",
      "width": 691,
      "class": "ImageResourceLevel",
      "height": 424
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.48,
   "yaw": -109.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_737DD112_51C3_19EB_41CF_7B1B005121EC",
 "maps": [
  {
   "hfov": 40.39,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -109.28,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2BA753_E50D_0A54_41A5_26D2D3FDC5E8_0_HS_4_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.48
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Chemistry Lab"
 },
 "items": [
  {
   "hfov": 40.83,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2BA753_E50D_0A54_41A5_26D2D3FDC5E8_0_HS_5_0.png",
      "width": 691,
      "class": "ImageResourceLevel",
      "height": 424
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.46,
   "yaw": 61.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_724A4802_51C1_37EB_41B5_9F6EA56FC294",
 "maps": [
  {
   "hfov": 40.83,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 61.8,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2BA753_E50D_0A54_41A5_26D2D3FDC5E8_0_HS_5_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.46
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 16.5,
 "id": "panorama_EE2BB6BB_E50D_0AD4_41B6_AEE7D63D1816_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.79,
   "image": "this.AnimatedImageResource_4DA4B75C_5143_381E_41CD_87F9C1AF5495",
   "pitch": 1.96,
   "yaw": -21.36,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_74F7077D_4DC1_E571_41C8_F164162A8317",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE2BA753_E50D_0A54_41A5_26D2D3FDC5E8, this.camera_47409238_5B73_67F9_4173_2C3BFDF9B4DE); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 14.79,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -21.36,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2BB6BB_E50D_0AD4_41B6_AEE7D63D1816_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.96
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.8,
   "image": "this.AnimatedImageResource_4DA4375D_5143_381E_41D3_14CD7B6E2CBE",
   "pitch": 0.7,
   "yaw": 68.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_774C3FD1_4DC1_E5B1_41D0_596729583CE5",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE2D527F_E50D_0A4C_41E1_6EF067CB57A1, this.camera_474F6218_5B73_67B9_41BF_989C4317F6CC); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 68.57,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2BB6BB_E50D_0AD4_41B6_AEE7D63D1816_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.7
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 16.5,
 "id": "panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Faculty of Science"
 },
 "items": [
  {
   "hfov": 14.21,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_0_HS_3_0.png",
      "width": 166,
      "class": "ImageResourceLevel",
      "height": 31
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.56,
   "yaw": -10.3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_351B192E_246F_17F5_4171_F2C8219B0923",
 "maps": [
  {
   "hfov": 14.21,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -10.3,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_0_HS_3_0_map.gif",
      "width": 85,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.56
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "International Conference"
 },
 "items": [
  {
   "hfov": 17.52,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_0_HS_4_0.png",
      "width": 205,
      "class": "ImageResourceLevel",
      "height": 33
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.15,
   "yaw": 10.77,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_364342C0_246F_7AAE_4171_05DA4D7FD5F0",
 "maps": [
  {
   "hfov": 17.52,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 10.77,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_0_HS_4_0_map.gif",
      "width": 99,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.15
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Garden"
 },
 "items": [
  {
   "hfov": 7.64,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_0_HS_5_0.png",
      "width": 92,
      "class": "ImageResourceLevel",
      "height": 33
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.97,
   "yaw": -23.77,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_35A1E6C5_2461_7AB6_41BF_271F704B5F04",
 "maps": [
  {
   "hfov": 7.64,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -23.77,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_0_HS_5_0_map.gif",
      "width": 44,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.97
  }
 ]
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info Red 05"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.69,
   "image": "this.AnimatedImageResource_6E46F58D_48B5_8535_41C1_7CF2514F5617",
   "pitch": -25.4,
   "yaw": 3.99,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5DBCC98D_4874_8D35_41C5_4FF534544361",
 "areas": [
  {
   "click": "this.showWindow(this.window_5D0DA03D_4875_BB54_41CD_B5865CB883FD, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 4.69,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 3.99,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.4
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.33,
   "image": "this.AnimatedImageResource_6E02E292_48CC_7F2F_41D0_6E51B49CD597",
   "pitch": -22.25,
   "yaw": -24.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_682FC32E_48B4_7D74_4186_1C0B1D22DED4",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE2957C9_E50F_0AB4_41AD_99CDB988813A, this.camera_40639EC1_5B73_1C8B_41A3_C543E99CD182); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 6.33,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -24.88,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.25
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.56,
   "image": "this.AnimatedImageResource_6E015293_48CC_7F2D_41A1_4645223E5179",
   "pitch": -16.35,
   "yaw": -10.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_695CBE6F_48B5_87F5_41D0_8DC364A6E2F8",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE26521F_E50F_05CC_41CC_305CAB4B0D4F, this.camera_419F7E93_5B73_1C88_41C3_5612ECF3B2E7); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 6.56,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -10.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_0_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.35
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.57,
   "image": "this.AnimatedImageResource_6E01C293_48CC_7F2D_41C3_4D81F6D9E0FF",
   "pitch": -16.09,
   "yaw": 10.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_69864B52_48B5_8D2C_41BC_569A8CC10993",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE2D7730_E50F_0BD4_41EA_76D04CAB3845, this.camera_4192EEA7_5B73_1C97_41C1_44F32E65411A); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 6.57,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 10.2,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_0_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.09
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 16.5,
 "id": "panorama_EE260721_E50F_0BF7_41E7_1A5DCE792CB7_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.8,
   "image": "this.AnimatedImageResource_63E5A26F_51C1_183A_41CD_8485333132B3",
   "pitch": -0.3,
   "yaw": 100.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_68155209_48CB_9F3D_41B5_D68F33C8EABF",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE2E82BA_E50F_0AD4_4188_A17A1C63EA59, this.camera_40749EDF_5B73_1CB7_41B6_353622E716D8); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 100.48,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE260721_E50F_0BF7_41E7_1A5DCE792CB7_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.3
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Exit"
 },
 "items": [
  {
   "hfov": 24.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE260721_E50F_0BF7_41E7_1A5DCE792CB7_0_HS_2_0.png",
      "width": 424,
      "class": "ImageResourceLevel",
      "height": 169
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.6,
   "yaw": 109.91,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_735E109D_51C0_F819_41AD_D979E921795E",
 "maps": [
  {
   "hfov": 24.84,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 109.91,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE260721_E50F_0BF7_41E7_1A5DCE792CB7_0_HS_2_0_map.gif",
      "width": 40,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.6
  }
 ]
},
{
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "htmlText_488EC50B_514F_19F9_41D3_55957F269BD2",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "borderSize": 0,
 "minHeight": 0,
 "paddingRight": 10,
 "scrollBarMargin": 2,
 "minWidth": 0,
 "height": "100%",
 "shadow": false,
 "paddingTop": 10,
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">The International conference on \"Sustainable Development in Information Technology &amp; Management\" is jointly organized by the Department of Management and the Department of Computer Science &amp; Application, BNU, Udaipur. With the rapid transformations and developments, as never seen before, happening all around us and making unprecedented changes in our lives, the motivation behind the conference is to explore the sustainability angle of the developments taking place in all fields particularly the business and digital fields so that our next generation can look forward to a bright, promising and sustainable future.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">The conference will provide an interdisciplinary forum for scholars, teachers and professionals from diversified streams for sharing of ideas and perspectives; presentation of research findings; and brainstorming the issues and their solutions towards sustainable development.The conference also attempts to provide a unique platform where inspiration, knowledge and opportunities will converge to enable the delegates to grow both personally and professionally.</SPAN></DIV></div>",
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingBottom": 10,
 "paddingLeft": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText25782"
 }
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 16.5,
 "id": "panorama_EE29EC70_E50F_1E55_41CD_5DDBCB2C3F0E_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.84,
   "image": "this.AnimatedImageResource_75F89EB3_4C42_EFAC_41D0_76D94B1DB5A1",
   "pitch": 1.43,
   "yaw": 49.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5E66C049_4CC6_52FC_41CA_D869F1C64568",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE3B7777_E50F_0A5C_41E0_975B9D854D5C, this.camera_40463EFD_5B73_1C7B_41B1_DB96E53FDDCB); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.84,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 49.26,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE29EC70_E50F_1E55_41CD_5DDBCB2C3F0E_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.43
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.83,
   "image": "this.AnimatedImageResource_75E76EB4_4C42_EF94_41BD_8A7061BC9761",
   "pitch": 2.68,
   "yaw": -40.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5FC54751_4CC6_BEED_41AA_3FAF93BA9E87",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE29323A_E50F_05D4_41E3_1A050EB18ADF, this.camera_40572F1C_5B73_1DB9_4185_8080719EA020); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.83,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -40.68,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE29EC70_E50F_1E55_41CD_5DDBCB2C3F0E_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.68
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Lobby"
 },
 "items": [
  {
   "hfov": 40.93,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE29EC70_E50F_1E55_41CD_5DDBCB2C3F0E_0_HS_2_0.png",
      "width": 691,
      "class": "ImageResourceLevel",
      "height": 424
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.7,
   "yaw": -26.38,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_735AA0E7_51C1_3829_41C3_E0CBF39AD947",
 "maps": [
  {
   "hfov": 40.93,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -26.38,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE29EC70_E50F_1E55_41CD_5DDBCB2C3F0E_0_HS_2_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.7
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Main Lobby"
 },
 "items": [
  {
   "hfov": 40.94,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE29EC70_E50F_1E55_41CD_5DDBCB2C3F0E_0_HS_3_0.png",
      "width": 691,
      "class": "ImageResourceLevel",
      "height": 424
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.44,
   "yaw": 59.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_73DC359E_51C3_181B_41D3_127B5EE8DD41",
 "maps": [
  {
   "hfov": 40.94,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 59.04,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE29EC70_E50F_1E55_41CD_5DDBCB2C3F0E_0_HS_3_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.44
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EE00BCB0_E50D_1ED4_41E9_660482BF251F_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 16.5,
 "id": "panorama_EE00BCB0_E50D_1ED4_41E9_660482BF251F_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.8,
   "image": "this.AnimatedImageResource_4DA23768_5143_3826_41A6_64819A3B96F7",
   "pitch": 0.95,
   "yaw": -94.97,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_09C56CB3_4C41_EBF1_41B4_6DF82DCD52F6",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE3A1C30_E50F_1DD4_41C1_4345802A63F5, this.camera_479CA39B_5B73_64B8_41D1_6706FB453C0A); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -94.97,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE00BCB0_E50D_1ED4_41E9_660482BF251F_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.95
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.84,
   "image": "this.AnimatedImageResource_4DBDC769_5143_3826_41D3_0A1FB9A2798F",
   "pitch": -0.08,
   "yaw": 117.34,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_099B81E4_4C41_DD97_41D1_7752F618B6FE",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE2BA753_E50D_0A54_41A5_26D2D3FDC5E8, this.camera_47A9033A_5B73_65F8_41C0_A1F9C3E9702B); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.84,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 117.34,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE00BCB0_E50D_1ED4_41E9_660482BF251F_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.08
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.38,
   "image": "this.AnimatedImageResource_4DA2F76A_5143_383A_41B7_E79B91D2F2A2",
   "pitch": 16,
   "yaw": 43.23,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_087876A0_4C42_A78E_41C9_99E1218949D4",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE2DE5C7_E50D_0EBC_41EB_7F20078D80DE, this.camera_478B037C_5B73_6478_41C3_E2159762D16E); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.38,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 43.23,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE00BCB0_E50D_1ED4_41E9_660482BF251F_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 16
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.71,
   "image": "this.AnimatedImageResource_6388E292_51C1_18EA_4164_61AC2B953024",
   "pitch": 8.71,
   "yaw": -4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_083A9D6F_4C42_AA91_41C3_1B61EECB42C4",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE138EC8_E50D_1AB5_41EB_583D3AEB8500, this.camera_47B9635B_5B73_65B8_41D5_D53BDDBAA37E); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.71,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -4,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE00BCB0_E50D_1ED4_41E9_660482BF251F_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.71
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.68,
   "image": "this.AnimatedImageResource_63894293_51C1_18EA_41CB_C2E7179E562F",
   "pitch": 9.47,
   "yaw": 26.65,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0BD0BF7B_4C42_A571_41C4_7F656507C904",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE2E0473_E50D_0E54_41E9_F7FED4507DF8, this.camera_466CB3B0_5B73_6488_41AC_98070187EC05); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.68,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 26.65,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE00BCB0_E50D_1ED4_41E9_660482BF251F_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.47
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Computer\u000d    Lab"
 },
 "items": [
  {
   "hfov": 21.26,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE00BCB0_E50D_1ED4_41E9_660482BF251F_0_HS_5_0.png",
      "width": 386,
      "class": "ImageResourceLevel",
      "height": 250
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 21.54,
   "yaw": 45.97,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_732B801E_51C1_781B_41CC_4694B2D63511",
 "maps": [
  {
   "hfov": 21.26,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 45.97,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE00BCB0_E50D_1ED4_41E9_660482BF251F_0_HS_5_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 21.54
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "ClassRoom"
 },
 "items": [
  {
   "hfov": 40.02,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE00BCB0_E50D_1ED4_41E9_660482BF251F_0_HS_6_0.png",
      "width": 691,
      "class": "ImageResourceLevel",
      "height": 156
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 12.25,
   "yaw": 37.18,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_72A9FA2F_51DF_083A_41AE_32C7E03A2381",
 "maps": [
  {
   "hfov": 40.02,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 37.18,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE00BCB0_E50D_1ED4_41E9_660482BF251F_0_HS_6_0_map.gif",
      "width": 70,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 12.25
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "GeoDept"
 },
 "items": [
  {
   "hfov": 20.88,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE00BCB0_E50D_1ED4_41E9_660482BF251F_0_HS_7_0.png",
      "width": 360,
      "class": "ImageResourceLevel",
      "height": 161
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 12.12,
   "yaw": -1.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_724AF163_51DF_1829_41D0_5F01460C499B",
 "maps": [
  {
   "hfov": 20.88,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.76,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE00BCB0_E50D_1ED4_41E9_660482BF251F_0_HS_7_0_map.gif",
      "width": 35,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 12.12
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Lobby"
 },
 "items": [
  {
   "hfov": 40.87,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE00BCB0_E50D_1ED4_41E9_660482BF251F_0_HS_8_0.png",
      "width": 691,
      "class": "ImageResourceLevel",
      "height": 424
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.45,
   "yaw": -80.64,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_7565A0E4_51C1_382F_41C9_8653EE606184",
 "maps": [
  {
   "hfov": 40.87,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -80.64,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE00BCB0_E50D_1ED4_41E9_660482BF251F_0_HS_8_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.45
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Lab Lobby"
 },
 "items": [
  {
   "hfov": 40.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE00BCB0_E50D_1ED4_41E9_660482BF251F_0_HS_9_0.png",
      "width": 691,
      "class": "ImageResourceLevel",
      "height": 424
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.21,
   "yaw": 127.87,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_75B4A74B_51C1_1879_41C0_2E75B92F7AFD",
 "maps": [
  {
   "hfov": 40.84,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 127.87,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE00BCB0_E50D_1ED4_41E9_660482BF251F_0_HS_9_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.21
  }
 ]
},
{
 "fontFamily": "Arial",
 "backgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "width": 36,
 "data": {
  "name": "Button settings VR"
 },
 "id": "Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0",
 "fontSize": 12,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 60,
 "iconURL": "skin/Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0.png",
 "backgroundColor": [
  "#F7931E"
 ],
 "shadow": false,
 "iconHeight": 30,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 0,
 "fontStyle": "normal",
 "pressedIconURL": "skin/Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0_pressed.png",
 "shadowSpread": 1,
 "cursor": "hand",
 "propagateClick": false,
 "fontWeight": "normal",
 "iconWidth": 30,
 "rollOverBackgroundOpacity": 1
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 16.5,
 "id": "panorama_EE2E82BA_E50F_0AD4_4188_A17A1C63EA59_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.84,
   "image": "this.AnimatedImageResource_6E1D229B_48CC_7F5D_4185_FAF3F1887243",
   "pitch": 0.17,
   "yaw": 6.3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_68C3A613_48B4_872D_41AE_A1054DFD01BB",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE292CF3_E50F_1E54_41EB_C108BD9CCB49, this.camera_41BCCE66_5B73_1F88_41BF_F2AFF9CCEADB); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.84,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 6.3,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2E82BA_E50F_0AD4_4188_A17A1C63EA59_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.17
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.83,
   "image": "this.AnimatedImageResource_6E1D829B_48CC_7F5D_4191_697A772D299C",
   "pitch": -2.59,
   "yaw": 108.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_687E2ED5_48B4_84D5_4194_B0CA573E488F",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE260721_E50F_0BF7_41E7_1A5DCE792CB7, this.camera_418E5E7D_5B73_1C78_41CC_C28EFF7DA5EF); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.83,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 108.8,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2E82BA_E50F_0AD4_4188_A17A1C63EA59_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.59
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.82,
   "image": "this.AnimatedImageResource_6E1DD29C_48CC_7F5B_41CD_32C8BC7233F0",
   "pitch": 3.69,
   "yaw": -171.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_68342582_48B4_8530_41C8_C78B1BA78ED0",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE10EDCE_E50F_1E4D_41EA_970C8ADE1052, this.camera_41ABDE4B_5B73_1F98_41D3_5646CF8F0159); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.82,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -171.57,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2E82BA_E50F_0AD4_4188_A17A1C63EA59_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.69
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Library"
 },
 "items": [
  {
   "hfov": 25,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2E82BA_E50F_0AD4_4188_A17A1C63EA59_0_HS_6_0.png",
      "width": 424,
      "class": "ImageResourceLevel",
      "height": 424
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.72,
   "yaw": 114.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_70A45CDE_51C1_081B_41B7_A81B8F88EAFD",
 "maps": [
  {
   "hfov": 25,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 114.93,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2E82BA_E50F_0AD4_4188_A17A1C63EA59_0_HS_6_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.72
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Conference"
 },
 "items": [
  {
   "hfov": 25.12,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2E82BA_E50F_0AD4_4188_A17A1C63EA59_0_HS_7_0.png",
      "width": 424,
      "class": "ImageResourceLevel",
      "height": 424
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.82,
   "yaw": -169.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_73DD74AD_51C1_1839_41C4_1503B5A6AE65",
 "maps": [
  {
   "hfov": 25.12,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -169.45,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2E82BA_E50F_0AD4_4188_A17A1C63EA59_0_HS_7_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.82
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 16.5,
 "id": "panorama_EE12CB61_E50D_FA77_41DA_BEC4D595DB4F_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.82,
   "image": "this.AnimatedImageResource_4D99A741_5143_3866_41B9_E42B326F857A",
   "pitch": -3.6,
   "yaw": 142.71,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_096ACCC9_4C46_AB91_41C5_C69C71251AFE",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE136BCF_E50D_3A4B_41E8_E76CE85C4CC2, this.camera_40A9F0F6_5B73_6476_41BC_9AF314B743E6); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.82,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 142.71,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE12CB61_E50D_FA77_41DA_BEC4D595DB4F_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.6
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Exit"
 },
 "items": [
  {
   "hfov": 24.92,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE12CB61_E50D_FA77_41DA_BEC4D595DB4F_0_HS_1_0.png",
      "width": 424,
      "class": "ImageResourceLevel",
      "height": 424
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.22,
   "yaw": 151.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_702B16BB_5141_3819_41BA_AECB2A6253E7",
 "maps": [
  {
   "hfov": 24.92,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 151.86,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE12CB61_E50D_FA77_41DA_BEC4D595DB4F_0_HS_1_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.22
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 16.5,
 "id": "panorama_EE1120BD_E50D_06CC_41E5_D131A255BF82_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.82,
   "image": "this.AnimatedImageResource_4D981743_5143_386A_41C8_C343C9D0F9AE",
   "pitch": -3.09,
   "yaw": 128.14,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0F8A7DAF_4C43_A591_41AC_D6CFA88E6134",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE136BCF_E50D_3A4B_41E8_E76CE85C4CC2, this.camera_467D63CF_5B73_6498_41C1_6F5B4F81A30F); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.82,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 128.14,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE1120BD_E50D_06CC_41E5_D131A255BF82_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.09
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Exit"
 },
 "items": [
  {
   "hfov": 24.88,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE1120BD_E50D_06CC_41E5_D131A255BF82_0_HS_1_0.png",
      "width": 424,
      "class": "ImageResourceLevel",
      "height": 424
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.98,
   "yaw": 136.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_70E353FA_51C1_181B_41BF_60AD4C5468AF",
 "maps": [
  {
   "hfov": 24.88,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 136.79,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE1120BD_E50D_06CC_41E5_D131A255BF82_0_HS_1_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.98
  }
 ]
},
{
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "htmlText_5D0E603E_4875_BB54_41BD_97F18EC84F10",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "borderSize": 0,
 "minHeight": 0,
 "paddingRight": 10,
 "scrollBarMargin": 2,
 "minWidth": 0,
 "height": "100%",
 "shadow": false,
 "paddingTop": 10,
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:12px;\">The Bhupal Nobles' University endeavors to promote the advancement and dissemination of knowledge. It aims to provide instructions in the disciplines and courses stated in the bulletin along with the provision for research and consultancy. The University has been set up to inculcate the best of practices for sustainable development of the society and the nation. The University has been established with the noble objective of eradicating illiteracy, ignorance and pernicious social evils through the spread of enlightening, progressive and value oriented education.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Our Vision:</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">To develop into a global educational centre maintaining high standards in both teaching and research with focus on quantitative and qualitative progress.</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Our Mission:</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">To contribute and work with a sense of commitment towards educational, cultural, economic, environmental, health and social development of the nation at large.</SPAN></DIV></div>",
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingBottom": 10,
 "paddingLeft": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText11231"
 }
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 16.5,
 "id": "panorama_EE26521F_E50F_05CC_41CC_305CAB4B0D4F_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.76,
   "image": "this.AnimatedImageResource_6E1AB29E_48CC_7F57_4180_8BEBD4AF3F1A",
   "pitch": 6.7,
   "yaw": 7.05,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_577C917F_48B4_BDD4_41B8_244F5049EDA4",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE29EC70_E50F_1E55_41CD_5DDBCB2C3F0E, this.camera_425C6A45_5B73_278B_41C6_9A05EB0557C3); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.76,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 7.05,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE26521F_E50F_05CC_41CC_305CAB4B0D4F_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.7
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.84,
   "image": "this.AnimatedImageResource_6E19229E_48CC_7F57_41B2_257B76C2A8DD",
   "pitch": 0.42,
   "yaw": -169.56,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_574618D2_48B7_8B2C_41BE_FFDF64372E05",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE2957C9_E50F_0AB4_41AD_99CDB988813A, this.camera_4258FA65_5B73_278B_41C7_EF129FCC3D59); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.84,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -169.56,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE26521F_E50F_05CC_41CC_305CAB4B0D4F_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.42
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Faculty of Science"
 },
 "items": [
  {
   "hfov": 40.86,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE26521F_E50F_05CC_41CC_305CAB4B0D4F_0_HS_2_0.png",
      "width": 691,
      "class": "ImageResourceLevel",
      "height": 424
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.83,
   "yaw": 9.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_7361C7F6_51C1_F82B_419E_93A83A15BECD",
 "maps": [
  {
   "hfov": 40.86,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 9.8,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE26521F_E50F_05CC_41CC_305CAB4B0D4F_0_HS_2_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.83
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Garden"
 },
 "items": [
  {
   "hfov": 40.86,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE26521F_E50F_05CC_41CC_305CAB4B0D4F_0_HS_3_0.png",
      "width": 691,
      "class": "ImageResourceLevel",
      "height": 424
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.71,
   "yaw": -155.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_733FFAED_51C1_0839_41CD_D5B3D7A67030",
 "maps": [
  {
   "hfov": 40.86,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -155.76,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE26521F_E50F_05CC_41CC_305CAB4B0D4F_0_HS_3_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.71
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 16.5,
 "id": "panorama_EE2D527F_E50D_0A4C_41E1_6EF067CB57A1_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.52,
   "image": "this.AnimatedImageResource_75ECFED0_4C42_EFEC_4196_2352D9B9A9EB",
   "pitch": 13.49,
   "yaw": -97.96,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_6B262BF3_4C43_D5AD_41CA_D61892EF98C6",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE2A1D11_E50D_1FD4_41E3_3ED918C5C28B, this.camera_429D8C81_5B73_1C88_41CB_47FCD7B9C078); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.52,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -97.96,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2D527F_E50D_0A4C_41E1_6EF067CB57A1_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 13.49
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.82,
   "image": "this.AnimatedImageResource_75EB0ED1_4C42_EFEC_41C8_EE86D727FE03",
   "pitch": 3.19,
   "yaw": -10.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_64C53432_4C42_52AC_41C9_757612FF2240",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE2B0BC9_E50F_1AB7_41E4_A37BF9465CB5, this.camera_42B3FC53_5B73_238F_41D3_0F4732B35C37); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.82,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -10.79,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2D527F_E50D_0A4C_41E1_6EF067CB57A1_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.19
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.84,
   "image": "this.AnimatedImageResource_75EB9ED2_4C42_EFEC_418E_59F379A436A5",
   "pitch": 0.42,
   "yaw": 80.66,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_64726203_4C42_566C_41BF_E935C8DA87A1",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE2BB6BB_E50D_0AD4_41B6_AEE7D63D1816, this.camera_4289CC65_5B73_238B_41A3_CC0D695D27DB); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.84,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 80.66,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2D527F_E50D_0A4C_41E1_6EF067CB57A1_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.42
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.8,
   "image": "this.AnimatedImageResource_4DA6875F_5143_381A_41D3_F9A599CF74B6",
   "pitch": -0.05,
   "yaw": 170.82,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_469BA6D6_5143_186B_41BC_1136423B2D9A",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE00BCB0_E50D_1ED4_41E9_660482BF251F, this.camera_42923C9E_5B73_1CB8_41BD_9D0BF3E755A8); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 170.82,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2D527F_E50D_0A4C_41E1_6EF067CB57A1_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.05
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Lobby"
 },
 "items": [
  {
   "hfov": 40.49,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2D527F_E50D_0A4C_41E1_6EF067CB57A1_0_HS_4_0.png",
      "width": 691,
      "class": "ImageResourceLevel",
      "height": 424
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.6,
   "yaw": -83.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_7517176F_51C1_1839_41AD_8AD99FE6F567",
 "maps": [
  {
   "hfov": 40.49,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -83.41,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2D527F_E50D_0A4C_41E1_6EF067CB57A1_0_HS_4_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.6
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Garden"
 },
 "items": [
  {
   "hfov": 26.56,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2D527F_E50D_0A4C_41E1_6EF067CB57A1_0_HS_5_0.png",
      "width": 449,
      "class": "ImageResourceLevel",
      "height": 424
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.21,
   "yaw": 176.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_74EA941A_51C1_381A_41AE_059F436721C3",
 "maps": [
  {
   "hfov": 26.56,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 176.73,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2D527F_E50D_0A4C_41E1_6EF067CB57A1_0_HS_5_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.21
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Lobby"
 },
 "items": [
  {
   "hfov": 40.81,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2D527F_E50D_0A4C_41E1_6EF067CB57A1_0_HS_6_0.png",
      "width": 691,
      "class": "ImageResourceLevel",
      "height": 424
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.71,
   "yaw": 95.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_7356BE52_51C3_086B_41A7_3EB1E1E5F0EB",
 "maps": [
  {
   "hfov": 40.81,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 95.46,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2D527F_E50D_0A4C_41E1_6EF067CB57A1_0_HS_6_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.71
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "First Floor"
 },
 "items": [
  {
   "hfov": 40.95,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2D527F_E50D_0A4C_41E1_6EF067CB57A1_0_HS_7_0.png",
      "width": 691,
      "class": "ImageResourceLevel",
      "height": 424
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.69,
   "yaw": 0.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_73F69A86_51C3_08EB_41A6_25E51C9E8BC6",
 "maps": [
  {
   "hfov": 40.95,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.25,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2D527F_E50D_0A4C_41E1_6EF067CB57A1_0_HS_7_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.69
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 16.5,
 "id": "panorama_EE2CF389_E50F_0AB4_41EC_79A5E3F131A5_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.83,
   "image": "this.AnimatedImageResource_6E1FC29A_48CC_7F5F_41D1_F6C4745DF8D4",
   "pitch": 2.18,
   "yaw": -119.56,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_6800F72E_48CC_8577_41B1_5A5538B75D96",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE10EDCE_E50F_1E4D_41EA_970C8ADE1052, this.camera_400D1FA2_5B73_1C89_41D6_4ECA83D29730); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.83,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -119.56,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2CF389_E50F_0AB4_41EC_79A5E3F131A5_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.18
  }
 ]
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info Red 05"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.4,
   "image": "this.AnimatedImageResource_4D948746_5143_386A_4198_B6056D613838",
   "pitch": 11.85,
   "yaw": 24.77,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_49DF185E_514F_081B_41B1_B62183CF2E78",
 "areas": [
  {
   "click": "this.showWindow(this.window_488F350A_514F_19FB_41BD_2A69B0BF6681, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 8.4,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 24.77,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2CF389_E50F_0AB4_41EC_79A5E3F131A5_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 11.85
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Exit"
 },
 "items": [
  {
   "hfov": 25,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2CF389_E50F_0AB4_41EC_79A5E3F131A5_0_HS_3_0.png",
      "width": 424,
      "class": "ImageResourceLevel",
      "height": 165
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.72,
   "yaw": -110.66,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_734D88BC_51C3_081F_41B6_A6DC4FA9DC4E",
 "maps": [
  {
   "hfov": 25,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -110.66,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2CF389_E50F_0AB4_41EC_79A5E3F131A5_0_HS_3_0_map.gif",
      "width": 41,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.72
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 16.5,
 "id": "panorama_EE136BCF_E50D_3A4B_41E8_E76CE85C4CC2_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.8,
   "image": "this.AnimatedImageResource_4D9B6743_5143_386A_4174_5D6B0B6E0E2E",
   "pitch": -0.56,
   "yaw": 0.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_700A0D9F_4DC3_A5B1_41C3_23B3ED962461",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE1315C2_E50D_0EB4_41EA_7018A9A44044, this.camera_4167DCBE_5B73_1CF8_41C6_B79B23695A78); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.24,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE136BCF_E50D_3A4B_41E8_E76CE85C4CC2_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.56
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.76,
   "image": "this.AnimatedImageResource_4D9B3743_5143_386A_41C9_0C52CE940C83",
   "pitch": -6.86,
   "yaw": 134.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_730893F1_4DC2_FD71_41C4_9590B60651F8",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE2DE5C7_E50D_0EBC_41EB_7F20078D80DE, this.camera_417AECDD_5B73_1CB8_41D4_E5CF1B9E04E9); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.76,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 134.17,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE136BCF_E50D_3A4B_41E8_E76CE85C4CC2_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.86
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.8,
   "image": "this.AnimatedImageResource_4D9AE744_5143_386E_41B6_D82A314AD478",
   "pitch": -5.1,
   "yaw": -169.56,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_70E516E2_4DC6_A793_41CF_AE036BC9689F",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE024038_E50D_05D5_41D7_ED0C1FEF4C03, this.camera_414E7CFC_5B73_1C78_41B9_E3A1F83C1463); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.8,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -169.56,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE136BCF_E50D_3A4B_41E8_E76CE85C4CC2_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.1
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Stairs"
 },
 "items": [
  {
   "hfov": 24.99,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE136BCF_E50D_3A4B_41E8_E76CE85C4CC2_0_HS_3_0.png",
      "width": 424,
      "class": "ImageResourceLevel",
      "height": 424
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.97,
   "yaw": 7.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_70949D5B_51BF_0819_41C1_ED4F780703B5",
 "maps": [
  {
   "hfov": 24.99,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 7.16,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE136BCF_E50D_3A4B_41E8_E76CE85C4CC2_0_HS_3_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.97
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 16.5,
 "id": "panorama_EE1315C2_E50D_0EB4_41EA_7018A9A44044_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.8,
   "image": "this.AnimatedImageResource_4D9A6744_5143_386E_41D2_7E99CF388836",
   "pitch": 0.95,
   "yaw": 9.54,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_713F94C1_4DDE_7B90_41CC_E085DD755ABA",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE136BCF_E50D_3A4B_41E8_E76CE85C4CC2, this.camera_40E2A033_5B73_638F_41C1_BF775997D2A3); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 9.54,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE1315C2_E50D_0EB4_41EA_7018A9A44044_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.95
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.58,
   "image": "this.AnimatedImageResource_4D9A0744_5143_386E_41CD_99EF4436B06B",
   "pitch": -12.14,
   "yaw": -81.13,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7318B7CA_4DC1_A593_41C2_AA9034A79828",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE2B0BC9_E50F_1AB7_41E4_A37BF9465CB5, this.camera_40EF3005_5B73_638B_41C3_5E1EBAEEFEE0); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.58,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -81.13,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE1315C2_E50D_0EB4_41EA_7018A9A44044_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.14
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.68,
   "image": "this.AnimatedImageResource_4D95A745_5143_386E_41BB_AEA666E31666",
   "pitch": -7.34,
   "yaw": 92.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0FD574D0_4DBE_7B8F_419C_110F39EB0BA5",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE00BCB0_E50D_1ED4_41E9_660482BF251F, this.camera_40F3A067_5B73_6397_41BB_5B8A1B587BA2); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 14.68,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 92.69,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE1315C2_E50D_0EB4_41EA_7018A9A44044_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.34
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Garden"
 },
 "items": [
  {
   "hfov": 24.64,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE1315C2_E50D_0EB4_41EA_7018A9A44044_0_HS_3_0.png",
      "width": 424,
      "class": "ImageResourceLevel",
      "height": 424
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.24,
   "yaw": 98.1,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_70B7C043_5141_3869_41B3_26159B4A8081",
 "maps": [
  {
   "hfov": 24.64,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 98.1,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE1315C2_E50D_0EB4_41EA_7018A9A44044_0_HS_3_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.24
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "1st Floor"
 },
 "items": [
  {
   "hfov": 23.96,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE1315C2_E50D_0EB4_41EA_7018A9A44044_0_HS_4_0.png",
      "width": 424,
      "class": "ImageResourceLevel",
      "height": 424
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.52,
   "yaw": -77.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_7542A970_5143_0827_41A6_76BAE5F317DB",
 "maps": [
  {
   "hfov": 23.96,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -77.25,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE1315C2_E50D_0EB4_41EA_7018A9A44044_0_HS_4_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.52
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Lab Lobby"
 },
 "items": [
  {
   "hfov": 25.06,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE1315C2_E50D_0EB4_41EA_7018A9A44044_0_HS_5_0.png",
      "width": 424,
      "class": "ImageResourceLevel",
      "height": 424
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.96,
   "yaw": 12.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_700F7F3A_5143_081A_41CF_8652E5EEFAE5",
 "maps": [
  {
   "hfov": 25.06,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 12.44,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE1315C2_E50D_0EB4_41EA_7018A9A44044_0_HS_5_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.96
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 16.5,
 "id": "panorama_EE2A1D11_E50D_1FD4_41E3_3ED918C5C28B_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.27,
   "image": "this.AnimatedImageResource_75EA3ED8_4C42_EF9C_41C5_AD96BE8FA392",
   "pitch": -17.92,
   "yaw": -135.64,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_66A2DBEE_4C41_B5B7_41CD_9D6B8BA02234",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE2D527F_E50D_0A4C_41E1_6EF067CB57A1, this.camera_41D8AE31_5B73_1F88_41C7_91A8E7FB3F48); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.27,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -135.64,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2A1D11_E50D_1FD4_41E3_3ED918C5C28B_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.92
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.81,
   "image": "this.AnimatedImageResource_75EA8ED8_4C42_EF9C_41B1_E2452D7A84A8",
   "pitch": 4.19,
   "yaw": 42.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_661579A5_4C42_D5B4_41A6_66D6F0E694E6",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE2F01CE_E50F_064C_41D4_83774C3F79EA, this.camera_41F68DFB_5B73_1C78_41D6_2D97D579E990); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.81,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 42.98,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2A1D11_E50D_1FD4_41E3_3ED918C5C28B_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.19
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.82,
   "image": "this.AnimatedImageResource_75E96ED9_4C42_EF9C_41B1_0CB7400F10CB",
   "pitch": -3.85,
   "yaw": -46.96,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_625D4E52_4C41_AEEC_41C5_DF4D5A701FC8",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE3A1C30_E50F_1DD4_41C1_4345802A63F5, this.camera_41C7AE1A_5B73_1FB9_41BA_224C1B3478E0); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.82,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -46.96,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2A1D11_E50D_1FD4_41E3_3ED918C5C28B_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.85
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Garden Lobby"
 },
 "items": [
  {
   "hfov": 40.58,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2A1D11_E50D_1FD4_41E3_3ED918C5C28B_0_HS_3_0.png",
      "width": 691,
      "class": "ImageResourceLevel",
      "height": 424
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.73,
   "yaw": -40.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_7339752F_51C3_1839_41CB_9F233FD1A501",
 "maps": [
  {
   "hfov": 40.58,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -40.2,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2A1D11_E50D_1FD4_41E3_3ED918C5C28B_0_HS_3_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.73
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 16.5,
 "id": "panorama_EE2D7730_E50F_0BD4_41EA_76D04CAB3845_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.84,
   "image": "this.AnimatedImageResource_6E1BD29D_48CC_7F55_41C8_B330E399ACC8",
   "pitch": -0.58,
   "yaw": -145.94,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_68D2F92A_48B7_8D7F_41AC_CFD17AD74243",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE292CF3_E50F_1E54_41EB_C108BD9CCB49, this.camera_41567D3A_5B73_1DF8_41BD_578D884CE6BB); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.84,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -145.94,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2D7730_E50F_0BD4_41EA_76D04CAB3845_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.58
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.84,
   "image": "this.AnimatedImageResource_6E1A329D_48CC_7F55_41C7_B47DBBF0393F",
   "pitch": 0.42,
   "yaw": 24.64,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_69E4854E_48B7_8534_419D_3E7ED8D2ADC0",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE26521F_E50F_05CC_41CC_305CAB4B0D4F, this.camera_4142DD1A_5B73_1DB8_41D6_2B6EDAEF687F); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.84,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 24.64,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2D7730_E50F_0BD4_41EA_76D04CAB3845_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.42
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Faculty of Science"
 },
 "items": [
  {
   "hfov": 40.83,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2D7730_E50F_0BD4_41EA_76D04CAB3845_0_HS_4_0.png",
      "width": 691,
      "class": "ImageResourceLevel",
      "height": 173
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.46,
   "yaw": 27.89,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_73EB9E06_51C7_0BEB_41CB_E26CAEB3B858",
 "maps": [
  {
   "hfov": 40.83,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 27.89,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2D7730_E50F_0BD4_41EA_76D04CAB3845_0_HS_4_0_map.gif",
      "width": 63,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.46
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Conference"
 },
 "items": [
  {
   "hfov": 25.03,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2D7730_E50F_0BD4_41EA_76D04CAB3845_0_HS_5_0.png",
      "width": 424,
      "class": "ImageResourceLevel",
      "height": 424
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.96,
   "yaw": -144.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_72253B7F_51C1_0819_41D3_1F3F500CFB62",
 "maps": [
  {
   "hfov": 25.03,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -144.83,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2D7730_E50F_0BD4_41EA_76D04CAB3845_0_HS_5_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.96
  }
 ]
},
{
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "htmlText_43341AC8_50C1_0867_41BA_7F7E6072D3DB",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "borderSize": 0,
 "minHeight": 0,
 "paddingRight": 10,
 "scrollBarMargin": 2,
 "minWidth": 0,
 "height": "100%",
 "shadow": false,
 "paddingTop": 10,
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">The International conference on \"Sustainable Development in Information Technology &amp; Management\" is jointly organized by the Department of Management and the Department of Computer Science &amp; Application, BNU, Udaipur. With the rapid transformations and developments, as never seen before, happening all around us and making unprecedented changes in our lives, the motivation behind the conference is to explore the sustainability angle of the developments taking place in all fields particularly the business and digital fields so that our next generation can look forward to a bright, promising and sustainable future.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">The conference will provide an interdisciplinary forum for scholars, teachers and professionals from diversified streams for sharing of ideas and perspectives; presentation of research findings; and brainstorming the issues and their solutions towards sustainable development.The conference also attempts to provide a unique platform where inspiration, knowledge and opportunities will converge to enable the delegates to grow both personally and professionally.</SPAN></DIV></div>",
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingBottom": 10,
 "paddingLeft": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText14008"
 }
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 16.5,
 "id": "panorama_EE2B5235_E50D_05DC_41DC_C7CFD9A8CD5C_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.31,
   "image": "this.AnimatedImageResource_4DA2C767_5143_382A_41C1_6ED4E2387F00",
   "pitch": -25.93,
   "yaw": -160.54,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7F5DE5FF_4DC1_A571_41D0_B7F364101BF8",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE2BA753_E50D_0A54_41A5_26D2D3FDC5E8, this.camera_4734B27E_5B73_6478_41D2_FE11C42F14D1); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 13.31,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -160.54,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2B5235_E50D_05DC_41DC_C7CFD9A8CD5C_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.93
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Exit"
 },
 "items": [
  {
   "hfov": 36.63,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2B5235_E50D_05DC_41DC_C7CFD9A8CD5C_0_HS_1_0.png",
      "width": 691,
      "class": "ImageResourceLevel",
      "height": 424
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.57,
   "yaw": -144.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_7337FF93_51C1_08E9_41CE_A0B0ACFD1045",
 "maps": [
  {
   "hfov": 36.63,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -144.2,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2B5235_E50D_05DC_41DC_C7CFD9A8CD5C_0_HS_1_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.57
  }
 ]
},
{
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "htmlText_453E3862_50C1_082B_4176_BD62561AB7ED",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "borderSize": 0,
 "minHeight": 0,
 "paddingRight": 10,
 "scrollBarMargin": 2,
 "minWidth": 0,
 "height": "100%",
 "shadow": false,
 "paddingTop": 10,
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Equipped with state-of-the-art equipment and safety protocols, our lab provides students with the perfect setting to explore the mysteries of matter, reactions, and elements. From synthesizing compounds to analyzing chemical reactions, our lab fosters a collaborative environment where students can unleash their scientific potential. Join us as we delve into the wonders of chemistry and uncover the building blocks of our universe.</SPAN></DIV></div>",
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingBottom": 10,
 "paddingLeft": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText16962"
 }
},
{
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "htmlText_44A7BC13_50C1_0FE9_41C5_01D85BFAAD9C",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "borderSize": 0,
 "minHeight": 0,
 "paddingRight": 10,
 "scrollBarMargin": 2,
 "minWidth": 0,
 "height": "100%",
 "shadow": false,
 "paddingTop": 10,
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Our lab is equipped with cutting-edge technology and software, providing students with a dynamic learning environment to explore the realms of computer science and technology. Whether you're delving into programming, graphic design, data analysis, or networking, our lab offers the resources and support you need to excel. Join us as we embark on a journey of discovery and innovation in the digital age.</SPAN></DIV></div>",
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingBottom": 10,
 "paddingLeft": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText15364"
 }
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 16.5,
 "id": "panorama_EE024038_E50D_05D5_41D7_ED0C1FEF4C03_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.83,
   "image": "this.AnimatedImageResource_4D9E6741_5143_3866_41C0_8BFEF379DC3F",
   "pitch": -2.84,
   "yaw": 2.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0E6BA61B_4C42_66B1_41BE_D46183060398",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE136BCF_E50D_3A4B_41E8_E76CE85C4CC2, this.camera_471532B3_5B73_6488_41BE_36765A2CDDA3); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.83,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.03,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE024038_E50D_05D5_41D7_ED0C1FEF4C03_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.84
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.82,
   "image": "this.AnimatedImageResource_4D9E0741_5143_3866_41CD_E973B7BA2566",
   "pitch": -3.85,
   "yaw": -172.07,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0E1FB459_4C42_7AB1_41CE_05D2B7AA5E68",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE12CB61_E50D_FA77_41DA_BEC4D595DB4F, this.camera_4704A292_5B73_6488_41A3_902EC5B0E97B); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.82,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -172.07,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE024038_E50D_05D5_41D7_ED0C1FEF4C03_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.85
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Exit"
 },
 "items": [
  {
   "hfov": 24.95,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE024038_E50D_05D5_41D7_ED0C1FEF4C03_0_HS_2_0.png",
      "width": 424,
      "class": "ImageResourceLevel",
      "height": 424
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.72,
   "yaw": 10.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_7069A132_5141_182B_41A3_84F2EC74D1E0",
 "maps": [
  {
   "hfov": 24.95,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 10.43,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE024038_E50D_05D5_41D7_ED0C1FEF4C03_0_HS_2_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.72
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 16.5,
 "id": "panorama_EE2DE5C7_E50D_0EBC_41EB_7F20078D80DE_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.67,
   "image": "this.AnimatedImageResource_4D993742_5143_386A_41CC_9DA3692926F6",
   "pitch": -9.88,
   "yaw": -54.75,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0FD8E006_4DBE_5A93_41D2_F5A32DAB0435",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE1120BD_E50D_06CC_41E5_D131A255BF82, this.camera_420DFB21_5B73_258B_41C1_0A63BADF1747); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.67,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -54.75,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2DE5C7_E50D_0EBC_41EB_7F20078D80DE_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.88
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.69,
   "image": "this.AnimatedImageResource_4D98E742_5143_386A_41CA_EEE2D06E97EB",
   "pitch": -9.12,
   "yaw": 155.27,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0EE60E6B_4C42_6691_41CC_D3B5B57BC534",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE136BCF_E50D_3A4B_41E8_E76CE85C4CC2, this.camera_42063B42_5B73_2589_41CD_72506864F520); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.69,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 155.27,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2DE5C7_E50D_0EBC_41EB_7F20078D80DE_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.12
  }
 ]
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info Red 05"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.56,
   "image": "this.AnimatedImageResource_4D98A742_5143_386A_41CA_C2523DA02E6F",
   "pitch": 4.56,
   "yaw": -54.87,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_459BF11B_50C1_1819_41CC_F55548D03CD1",
 "areas": [
  {
   "click": "this.showWindow(this.window_44A66C12_50C1_0FEB_41CF_703B6CB356E2, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 8.56,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -54.87,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2DE5C7_E50D_0EBC_41EB_7F20078D80DE_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.56
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Exit"
 },
 "items": [
  {
   "hfov": 24.5,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2DE5C7_E50D_0EBC_41EB_7F20078D80DE_0_HS_3_0.png",
      "width": 424,
      "class": "ImageResourceLevel",
      "height": 424
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.75,
   "yaw": 163.92,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_734DA450_51C1_1867_41D3_D5338B7D4BFA",
 "maps": [
  {
   "hfov": 24.5,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 163.92,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2DE5C7_E50D_0EBC_41EB_7F20078D80DE_0_HS_3_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.75
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 16.5,
 "id": "panorama_EE286634_E50F_0DDC_41C6_1FA8A4444D48_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.84,
   "image": "this.AnimatedImageResource_4DAF0753_5143_386A_41D1_1BEE6F0D31C3",
   "pitch": 0.17,
   "yaw": -74.34,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_414C6E6C_50C7_083F_41B8_596EADBA00BF",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE2B0BC9_E50F_1AB7_41E4_A37BF9465CB5, this.camera_410FED8D_5B73_1C98_41CF_3424DEBBB577); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.84,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -74.34,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE286634_E50F_0DDC_41C6_1FA8A4444D48_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.17
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.84,
   "image": "this.AnimatedImageResource_4DAE8754_5143_386E_41B0_1633C08E9153",
   "pitch": -1.09,
   "yaw": 17.6,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4138F1E0_50C7_3827_41C6_2ABC23864A2D",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE138EC8_E50D_1AB5_41EB_583D3AEB8500, this.camera_41125DBF_5B73_1CF8_41CD_A7CAA38115E8); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.84,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 17.6,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE286634_E50F_0DDC_41C6_1FA8A4444D48_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.09
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.84,
   "image": "this.AnimatedImageResource_4DAE2754_5143_386E_41BB_CFE87253E221",
   "pitch": 0.17,
   "yaw": 96.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_43DC8BFD_50C1_081E_41D1_59C392ACFE40",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE2E0473_E50D_0E54_41E9_F7FED4507DF8, this.camera_41E30DDB_5B73_1CB8_41D5_625DF3616687); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.84,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 96.24,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE286634_E50F_0DDC_41C6_1FA8A4444D48_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.17
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Geography\u000dDepartment"
 },
 "items": [
  {
   "hfov": 40.91,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE286634_E50F_0DDC_41C6_1FA8A4444D48_0_HS_3_0.png",
      "width": 691,
      "class": "ImageResourceLevel",
      "height": 424
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.58,
   "yaw": 26.63,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_73300994_51C1_08EF_41CB_56808B4FB25C",
 "maps": [
  {
   "hfov": 40.91,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 26.63,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE286634_E50F_0DDC_41C6_1FA8A4444D48_0_HS_3_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.58
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "ClassRoom"
 },
 "items": [
  {
   "hfov": 40.92,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE286634_E50F_0DDC_41C6_1FA8A4444D48_0_HS_4_0.png",
      "width": 691,
      "class": "ImageResourceLevel",
      "height": 424
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.2,
   "yaw": 106.02,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_72736905_51C1_09E9_419B_DA54232BA6DE",
 "maps": [
  {
   "hfov": 40.92,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 106.02,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE286634_E50F_0DDC_41C6_1FA8A4444D48_0_HS_4_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.2
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Stairs"
 },
 "items": [
  {
   "hfov": 40.87,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE286634_E50F_0DDC_41C6_1FA8A4444D48_0_HS_5_0.png",
      "width": 691,
      "class": "ImageResourceLevel",
      "height": 424
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.45,
   "yaw": -59.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_7747C161_51C1_1829_41A0_A3B798148006",
 "maps": [
  {
   "hfov": 40.87,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -59.29,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE286634_E50F_0DDC_41C6_1FA8A4444D48_0_HS_5_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.45
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.77,
   "image": "this.AnimatedImageResource_739AAB80_51C3_77C0_419C_A23ACD925494",
   "pitch": -4.07,
   "yaw": -174.61,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_47810CFD_51C1_7140_41C8_CD4EE58F271B",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE00BCB0_E50D_1ED4_41E9_660482BF251F, this.camera_411F3DA4_5B73_1C88_41C8_B506940DF623); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 14.77,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -174.61,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE286634_E50F_0DDC_41C6_1FA8A4444D48_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.07
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Garden"
 },
 "items": [
  {
   "hfov": 40.47,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE286634_E50F_0DDC_41C6_1FA8A4444D48_0_HS_7_0.png",
      "width": 691,
      "class": "ImageResourceLevel",
      "height": 424
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.73,
   "yaw": -161.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_46B015CA_51C3_3343_41BD_6DEFDA3DCCC5",
 "maps": [
  {
   "hfov": 40.47,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -161.28,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE286634_E50F_0DDC_41C6_1FA8A4444D48_0_HS_7_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.73
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 16.5,
 "id": "panorama_EE24E1F2_E50D_0654_41C8_449A85C554A0_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.84,
   "image": "this.AnimatedImageResource_75E02EC5_4C42_EFF3_41B8_64CB6403255B",
   "pitch": -1.09,
   "yaw": -88.91,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_6D3C4821_4C42_D2AC_41B1_A5E0C89670DE",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE0071D6_E50D_065C_41E1_377D18C833EB, this.camera_40C52096_5B73_6489_41C0_115911BC789D); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.84,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -88.91,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE24E1F2_E50D_0654_41C8_449A85C554A0_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.09
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.84,
   "image": "this.AnimatedImageResource_4DAA475A_5143_381A_41C5_95D9E9897F53",
   "pitch": 1.93,
   "yaw": -166.54,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_6E908F6A_4C42_AEBF_41D0_EB2782A000A1",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE2D7730_E50F_0BD4_41EA_76D04CAB3845, this.camera_40D620C3_5B73_648F_41D5_BF472BF5637A); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.84,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -166.54,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE24E1F2_E50D_0654_41C8_449A85C554A0_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.93
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Lobby"
 },
 "items": [
  {
   "hfov": 40.83,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE24E1F2_E50D_0654_41C8_449A85C554A0_0_HS_2_0.png",
      "width": 691,
      "class": "ImageResourceLevel",
      "height": 424
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.46,
   "yaw": -73.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_7388F6FA_51C7_181B_41D0_1C23B23111F8",
 "maps": [
  {
   "hfov": 40.83,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -73.86,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE24E1F2_E50D_0654_41C8_449A85C554A0_0_HS_2_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.46
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Pathway"
 },
 "items": [
  {
   "hfov": 40.93,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE24E1F2_E50D_0654_41C8_449A85C554A0_0_HS_3_0.png",
      "width": 691,
      "class": "ImageResourceLevel",
      "height": 424
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.95,
   "yaw": -154,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_73BC9D62_51C7_082A_41D0_81DD8C9B5B51",
 "maps": [
  {
   "hfov": 40.93,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -154,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE24E1F2_E50D_0654_41C8_449A85C554A0_0_HS_3_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.95
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 16.5,
 "id": "panorama_EE138EC8_E50D_1AB5_41EB_583D3AEB8500_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.79,
   "image": "this.AnimatedImageResource_63E6126A_51C1_183A_41D2_C8004D957FBB",
   "pitch": -2.06,
   "yaw": -171.09,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_73283AD3_51C3_0869_41C4_FED99E828F71",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE286634_E50F_0DDC_41C6_1FA8A4444D48, this.camera_403B9F72_5B73_1D89_41B9_45BC65143188); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 14.79,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -171.09,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE138EC8_E50D_1AB5_41EB_583D3AEB8500_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.06
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Exit"
 },
 "items": [
  {
   "hfov": 24.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE138EC8_E50D_1AB5_41EB_583D3AEB8500_0_HS_1_0.png",
      "width": 424,
      "class": "ImageResourceLevel",
      "height": 203
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.6,
   "yaw": -162.67,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_70BA2AEE_51C3_083A_41C9_FB93DF4FB602",
 "maps": [
  {
   "hfov": 24.84,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -162.67,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE138EC8_E50D_1AB5_41EB_583D3AEB8500_0_HS_1_0_map.gif",
      "width": 33,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.6
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 16.5,
 "id": "panorama_EE26FD1D_E50F_1FCC_41E6_674A1C467F24_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.79,
   "image": "this.AnimatedImageResource_639C9278_51C1_1826_41C1_7AF8D357584D",
   "pitch": 2.46,
   "yaw": -43.97,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5AB21E0A_4CDE_AE7F_41BD_A0D2C9EAE3F6",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE29323A_E50F_05D4_41E3_1A050EB18ADF, this.camera_402A9F3D_5B73_1DFB_41BD_C37F0E5AFDEF); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 14.79,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -43.97,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE26FD1D_E50F_1FCC_41E6_674A1C467F24_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.46
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Exit"
 },
 "items": [
  {
   "hfov": 40.59,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE26FD1D_E50F_1FCC_41E6_674A1C467F24_0_HS_1_0.png",
      "width": 691,
      "class": "ImageResourceLevel",
      "height": 169
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.6,
   "yaw": -27.13,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_73735981_51C1_08E9_41C1_CABE36F3DF12",
 "maps": [
  {
   "hfov": 40.59,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -27.13,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE26FD1D_E50F_1FCC_41E6_674A1C467F24_0_HS_1_0_map.gif",
      "width": 65,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.6
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 16.5,
 "id": "panorama_EE2F01CE_E50F_064C_41D4_83774C3F79EA_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.84,
   "image": "this.AnimatedImageResource_75E36EBE_4C42_EF94_41BD_45FAB44E9AA8",
   "pitch": -0.33,
   "yaw": 54.53,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_550215E4_4CC2_5DAB_41CA_CCFF6824ED0A",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE2A1D11_E50D_1FD4_41E3_3ED918C5C28B, this.camera_476D71CC_5B73_6499_41B3_7E6CF5584F0F); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.84,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 54.53,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2F01CE_E50F_064C_41D4_83774C3F79EA_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.33
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.84,
   "image": "this.AnimatedImageResource_75E3FEBF_4C42_EF94_4190_9D26302BB8C3",
   "pitch": 0.42,
   "yaw": 146.23,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5697B56C_4CC2_72B5_418F_7D0FD974F9FE",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE2F3704_E50F_0BBD_41E3_B8682A50A3B9, this.camera_477FD1F8_5B73_6479_41D4_043ED5BE6C7D); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.84,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 146.23,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2F01CE_E50F_064C_41D4_83774C3F79EA_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.42
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Lobby"
 },
 "items": [
  {
   "hfov": 40.94,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2F01CE_E50F_064C_41D4_83774C3F79EA_0_HS_2_0.png",
      "width": 691,
      "class": "ImageResourceLevel",
      "height": 424
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.19,
   "yaw": 68.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_73E0D51A_51CF_781B_418B_31F286DA3006",
 "maps": [
  {
   "hfov": 40.94,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 68.83,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2F01CE_E50F_064C_41D4_83774C3F79EA_0_HS_2_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.19
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 16.5,
 "id": "panorama_EE2F3704_E50F_0BBD_41E3_B8682A50A3B9_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.84,
   "image": "this.AnimatedImageResource_75E47EB8_4C42_EF9C_41A9_E359748E7C8A",
   "pitch": 1.93,
   "yaw": -78.87,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5431BAB8_4CC2_579B_4154_49E4CB021778",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE29323A_E50F_05D4_41E3_1A050EB18ADF, this.camera_413CAD76_5B73_1D88_41C6_01309DFE892A); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.84,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -78.87,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2F3704_E50F_0BBD_41E3_B8682A50A3B9_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.93
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.84,
   "image": "this.AnimatedImageResource_75E4DEB8_4C42_EF9C_41B5_8B59E2EE6F1C",
   "pitch": 0.17,
   "yaw": 101.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_54616FC6_4CC2_ADF4_41C5_F66630EC837F",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE2F01CE_E50F_064C_41D4_83774C3F79EA, this.camera_41290D58_5B73_1DB8_41B4_DE192A5555A7); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.84,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 101.76,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2F3704_E50F_0BBD_41E3_B8682A50A3B9_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.17
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 16.5,
 "id": "panorama_EE3A1C30_E50F_1DD4_41C1_4345802A63F5_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.76,
   "image": "this.AnimatedImageResource_75E2DEC0_4C42_EFEC_418E_C8BD819EFAE8",
   "pitch": 6.7,
   "yaw": -146.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_61B6F352_4C46_B6EC_41C8_EB802D5E8517",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE3B7777_E50F_0A5C_41E0_975B9D854D5C, this.camera_42282AA4_5B73_2489_41CD_8174E0F2E1DF); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.76,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -146.44,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE3A1C30_E50F_1DD4_41C1_4345802A63F5_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.7
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.8,
   "image": "this.AnimatedImageResource_4DA94755_5143_386E_41CE_3EA868335F85",
   "pitch": 0.21,
   "yaw": 88.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_611CBD45_4C46_B2F5_418F_9F5C43DB67B3",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 88.17,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE3A1C30_E50F_1DD4_41C1_4345802A63F5_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.21
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.79,
   "image": "this.AnimatedImageResource_4DA8C756_5143_386A_41D0_6BF4F59DC1B3",
   "pitch": 5.2,
   "yaw": 36.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_08E3B775_4C42_E571_41D0_2728D234ED5A",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE2A1D11_E50D_1FD4_41E3_3ED918C5C28B, this.camera_42505A85_5B73_248B_41CC_C9DDF147AEE1); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.79,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 36.44,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE3A1C30_E50F_1DD4_41C1_4345802A63F5_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.2
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Garden"
 },
 "items": [
  {
   "hfov": 40.94,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE3A1C30_E50F_1DD4_41C1_4345802A63F5_0_HS_3_0.png",
      "width": 691,
      "class": "ImageResourceLevel",
      "height": 424
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.19,
   "yaw": 100.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_732C3192_51C3_18EB_41C4_6BBCEE49C5AF",
 "maps": [
  {
   "hfov": 40.94,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 100.49,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE3A1C30_E50F_1DD4_41C1_4345802A63F5_0_HS_3_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.19
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Lobby"
 },
 "items": [
  {
   "hfov": 40.93,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE3A1C30_E50F_1DD4_41C1_4345802A63F5_0_HS_4_0.png",
      "width": 691,
      "class": "ImageResourceLevel",
      "height": 424
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.82,
   "yaw": 51.5,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_73B57259_51C3_7819_41D2_C4B85092AE72",
 "maps": [
  {
   "hfov": 40.93,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 51.5,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE3A1C30_E50F_1DD4_41C1_4345802A63F5_0_HS_4_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.82
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Lobby"
 },
 "items": [
  {
   "hfov": 40.88,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE3A1C30_E50F_1DD4_41C1_4345802A63F5_0_HS_5_0.png",
      "width": 691,
      "class": "ImageResourceLevel",
      "height": 424
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.33,
   "yaw": -131.89,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_72709A42_51C3_086B_41C9_C72225E37BE8",
 "maps": [
  {
   "hfov": 40.88,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -131.89,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE3A1C30_E50F_1DD4_41C1_4345802A63F5_0_HS_5_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.33
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 16.5,
 "id": "panorama_EE2957C9_E50F_0AB4_41AD_99CDB988813A_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.84,
   "image": "this.AnimatedImageResource_75E7EEB5_4C42_EF94_41A0_7253D1F22FFB",
   "pitch": -0.58,
   "yaw": -140.92,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5D3FE192_4CC6_B26F_4197_6064F7BEAAFA",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE26521F_E50F_05CC_41CC_305CAB4B0D4F, this.camera_42D5CC14_5B73_2389_41C3_B5587ABD6529); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.84,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -140.92,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2957C9_E50F_0AB4_41AD_99CDB988813A_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.58
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Exit"
 },
 "items": [
  {
   "hfov": 40.81,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2957C9_E50F_0AB4_41AD_99CDB988813A_0_HS_1_0.png",
      "width": 691,
      "class": "ImageResourceLevel",
      "height": 424
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.71,
   "yaw": -124.1,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_7302E9A4_51C3_082F_41B7_54E317D39565",
 "maps": [
  {
   "hfov": 40.81,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -124.1,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE2957C9_E50F_0AB4_41AD_99CDB988813A_0_HS_1_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.71
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 16.5,
 "id": "panorama_EE3B7777_E50F_0A5C_41E0_975B9D854D5C_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.58,
   "image": "this.AnimatedImageResource_75E1EEC2_4C42_EFEC_41C0_1EC18AB782A6",
   "pitch": -9.85,
   "yaw": -37.19,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_509512E9_4CC2_57BC_41C7_1E9E1B699A4E",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE3A1C30_E50F_1DD4_41C1_4345802A63F5, this.camera_42C0BC02_5B73_2389_41CA_6D9DF7DD9907); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 14.58,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -37.19,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE3B7777_E50F_0A5C_41E0_975B9D854D5C_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.85
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.74,
   "image": "this.AnimatedImageResource_75E2FEC3_4C42_EFEC_41CE_15D8199BCAF5",
   "pitch": -5.08,
   "yaw": -14.33,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_52F4AF53_4CC2_AEED_41CE_67D0B2480391",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE00BCB0_E50D_1ED4_41E9_660482BF251F, this.camera_42C92BF0_5B73_2489_41BE_BE673F90422B); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 14.74,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -14.33,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE3B7777_E50F_0A5C_41E0_975B9D854D5C_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.08
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.78,
   "image": "this.AnimatedImageResource_75E17EC3_4C42_EFEC_4142_FA626111D6E0",
   "pitch": -3.32,
   "yaw": 51.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_57482257_4CC3_B694_41C9_9F5E22981D42",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE0071D6_E50D_065C_41E1_377D18C833EB, this.camera_42FECBBF_5B73_24F7_41D1_1504973C14D7); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 14.78,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 51.24,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE3B7777_E50F_0A5C_41E0_975B9D854D5C_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.32
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.8,
   "image": "this.AnimatedImageResource_75E1FEC4_4C42_EFF4_41A0_22BCB53CBA8A",
   "pitch": -0.05,
   "yaw": -127.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_6A76CCA7_4C42_53B5_4164_6654F4C56F9C",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE29EC70_E50F_1E55_41CD_5DDBCB2C3F0E, this.camera_42F42BDA_5B73_24B9_41D1_1FB7605D5C21); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -127.88,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE3B7777_E50F_0A5C_41E0_975B9D854D5C_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.05
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Pathway"
 },
 "items": [
  {
   "hfov": 40.87,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE3B7777_E50F_0A5C_41E0_975B9D854D5C_0_HS_4_0.png",
      "width": 691,
      "class": "ImageResourceLevel",
      "height": 424
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.45,
   "yaw": -114.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_73142C32_51C3_082A_41D2_24D4A8C53CD5",
 "maps": [
  {
   "hfov": 40.87,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -114.81,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE3B7777_E50F_0A5C_41E0_975B9D854D5C_0_HS_4_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.45
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Garden"
 },
 "items": [
  {
   "hfov": 40.53,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE3B7777_E50F_0A5C_41E0_975B9D854D5C_0_HS_5_0.png",
      "width": 691,
      "class": "ImageResourceLevel",
      "height": 424
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.23,
   "yaw": -1.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_72477849_51C3_0879_41A0_460471736E70",
 "maps": [
  {
   "hfov": 40.53,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.76,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE3B7777_E50F_0A5C_41E0_975B9D854D5C_0_HS_5_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.23
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Lobby"
 },
 "items": [
  {
   "hfov": 40.76,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE3B7777_E50F_0A5C_41E0_975B9D854D5C_0_HS_6_0.png",
      "width": 691,
      "class": "ImageResourceLevel",
      "height": 424
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.46,
   "yaw": 65.82,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_7238610E_51C3_39FB_41CD_082FF1DEDFF8",
 "maps": [
  {
   "hfov": 40.76,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 65.82,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE3B7777_E50F_0A5C_41E0_975B9D854D5C_0_HS_6_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.46
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Garden\u000dLobby"
 },
 "items": [
  {
   "hfov": 27.22,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE3B7777_E50F_0A5C_41E0_975B9D854D5C_0_HS_7_0.png",
      "width": 466,
      "class": "ImageResourceLevel",
      "height": 424
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.99,
   "yaw": -29.77,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_77061ED2_51C1_086B_41D3_53394F93E8E8",
 "maps": [
  {
   "hfov": 27.22,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -29.77,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE3B7777_E50F_0A5C_41E0_975B9D854D5C_0_HS_7_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.99
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 16.5,
 "id": "panorama_EE10EDCE_E50F_1E4D_41EA_970C8ADE1052_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.82,
   "image": "this.AnimatedImageResource_6E1E329A_48CC_7F5F_41BB_562A22705B8C",
   "pitch": -3.85,
   "yaw": -90.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_68CA8C2A_48B4_8B7C_41AC_FB48FE17738D",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE2CF389_E50F_0AB4_41EC_79A5E3F131A5, this.camera_4722926B_5B73_6798_41C2_877DAEE4160D); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.82,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -90.17,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE10EDCE_E50F_1E4D_41EA_970C8ADE1052_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.85
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.6,
   "image": "this.AnimatedImageResource_4D952747_5143_386A_41C8_248AFD25DA42",
   "pitch": -11.64,
   "yaw": 19.36,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_68976BBF_48CB_8D55_41CB_A337548D2C44",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE2E82BA_E50F_0AD4_4188_A17A1C63EA59, this.camera_47513258_5B73_67B8_41D6_1F8EB301BFFE); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.6,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 19.36,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE10EDCE_E50F_1E4D_41EA_970C8ADE1052_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.64
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Conference"
 },
 "items": [
  {
   "hfov": 24.92,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE10EDCE_E50F_1E4D_41EA_970C8ADE1052_0_HS_4_0.png",
      "width": 424,
      "class": "ImageResourceLevel",
      "height": 424
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.22,
   "yaw": -89.06,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_73DE6A4E_51C1_087A_41D3_789CAD20FA17",
 "maps": [
  {
   "hfov": 24.92,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -89.06,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE10EDCE_E50F_1E4D_41EA_970C8ADE1052_0_HS_4_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.22
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 16.5,
 "id": "panorama_EE292CF3_E50F_1E54_41EB_C108BD9CCB49_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.84,
   "image": "this.AnimatedImageResource_6E1B029C_48CC_7F5B_41C9_75F656840F42",
   "pitch": 1.68,
   "yaw": -7.77,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_68737A15_48B4_8F55_41B0_B67047C7F440",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE2D7730_E50F_0BD4_41EA_76D04CAB3845, this.camera_42A99C26_5B73_2389_41C8_595AF50AFB6F); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.84,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -7.77,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE292CF3_E50F_1E54_41EB_C108BD9CCB49_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.68
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 04"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.84,
   "image": "this.AnimatedImageResource_6E1B529D_48CC_7F55_41A3_B2AE3D419B21",
   "pitch": -0.33,
   "yaw": 173.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_681639D6_48B4_8CD4_41AD_73B3E3259483",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EE2E82BA_E50F_0AD4_4188_A17A1C63EA59, this.camera_42BFDC3C_5B73_23F9_41D0_EE8D1EFD1603); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.84,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 173.86,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE292CF3_E50F_1E54_41EB_C108BD9CCB49_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.33
  }
 ]
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Info Red 05"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.59,
   "image": "this.AnimatedImageResource_4D970749_5143_3866_41CF_C15623EF8E58",
   "pitch": 0.29,
   "yaw": 159.42,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_44F71E73_50C3_082A_41BB_5DF67F30C129",
 "areas": [
  {
   "click": "this.showWindow(this.window_43365AC7_50C1_0869_41BF_321D4B92CE46, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 8.59,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 159.42,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE292CF3_E50F_1E54_41EB_C108BD9CCB49_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.29
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Conference"
 },
 "items": [
  {
   "hfov": 25.05,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE292CF3_E50F_1E54_41EB_C108BD9CCB49_0_HS_5_0.png",
      "width": 424,
      "class": "ImageResourceLevel",
      "height": 424
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.21,
   "yaw": 177.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_736D4D85_51C7_08EE_418C_DB2805CD1114",
 "maps": [
  {
   "hfov": 25.05,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 177.49,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EE292CF3_E50F_1E54_41EB_C108BD9CCB49_0_HS_5_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.21
  }
 ]
},
{
 "fontFamily": "Montserrat",
 "data": {
  "name": "text 1"
 },
 "left": "0%",
 "width": 239,
 "id": "Label_0C5F13A8_3BA0_A6FF_41BD_E3D21CFCE151",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "text": "LOREM",
 "fontColor": "#FFFFFF",
 "textShadowOpacity": 1,
 "textShadowColor": "#000000",
 "paddingRight": 0,
 "top": "5.15%",
 "minWidth": 1,
 "verticalAlign": "top",
 "height": 67,
 "fontSize": 54,
 "shadow": false,
 "paddingTop": 0,
 "textShadowBlurRadius": 10,
 "textShadowHorizontalLength": 0,
 "backgroundOpacity": 0,
 "class": "Label",
 "borderRadius": 0,
 "paddingBottom": 0,
 "textDecoration": "none",
 "paddingLeft": 0,
 "visible": false,
 "textShadowVerticalLength": 0,
 "fontStyle": "normal",
 "propagateClick": false,
 "fontWeight": "bold"
},
{
 "fontFamily": "Montserrat",
 "data": {
  "name": "Label Company Name"
 },
 "left": 57,
 "width": 241,
 "id": "Label_0E9CEE5D_36F3_E64E_419C_5A94FA5D3CA1",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "text": "BN University",
 "fontColor": "#FFFFFF",
 "paddingRight": 0,
 "top": "0%",
 "minWidth": 1,
 "verticalAlign": "middle",
 "height": 60,
 "fontSize": 31,
 "click": "this.mainPlayList.set('selectedIndex', 0)",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "class": "Label",
 "textDecoration": "none",
 "paddingLeft": 0,
 "fontStyle": "normal",
 "propagateClick": false,
 "fontWeight": "normal"
},
{
 "maxHeight": 30,
 "maxWidth": 40,
 "id": "Image_05314BAF_3AA1_A6F2_41CB_86A11240FA50",
 "left": 13,
 "width": "4.222%",
 "borderSize": 0,
 "url": "skin/Image_05314BAF_3AA1_A6F2_41CB_86A11240FA50.png",
 "minHeight": 1,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "bottom": "-1.67%",
 "top": "1.67%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "click": "this.mainPlayList.set('selectedIndex', 0)",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Image",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "paddingLeft": 0,
 "propagateClick": false,
 "data": {
  "name": "logo"
 }
},
{
 "data": {
  "name": "-button set container"
 },
 "children": [
  "this.IconButton_5EF03DC7_519F_9286_41B5_DD4096D317FC",
  "this.IconButton_7B201C51_3AA0_A251_41CD_5CC0A59F2DE8",
  "this.IconButton_7B21FC51_3AA0_A251_41CC_46CDE74591EA",
  "this.IconButton_7B212C50_3AA0_A1AF_41C5_F659ED22BD52",
  "this.Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0",
  "this.Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A"
 ],
 "width": 1199,
 "scrollBarColor": "#000000",
 "id": "Container_0542AAAA_3AA3_A6F3_41B2_0E208ADBBBE1",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "layout": "horizontal",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "right",
 "paddingRight": 15,
 "top": "0%",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "contentOpaque": false,
 "verticalAlign": "middle",
 "height": 60,
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 3,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_26D3A42C_3F86_BA30_419B_2C6BE84D2718",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "shadowHorizontalLength": 0,
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "shadowVerticalLength": 0,
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "bottom": "10%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "top": "10%",
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "layout": "horizontal",
 "shadow": true,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "layout": "vertical",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "right",
 "paddingRight": 20,
 "top": "10%",
 "bottom": "80%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "shadow": false,
 "paddingTop": 20,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_27875147_3F82_7A70_41CC_C0FFBB32BEFD",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "shadowHorizontalLength": 0,
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "shadowVerticalLength": 0,
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "bottom": "10%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "top": "10%",
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "overflow": "scroll",
 "shadow": true,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "paddingTop": 0,
 "shadowOpacity": 0.3,
 "layout": "horizontal",
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "layout": "vertical",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "right",
 "paddingRight": 20,
 "top": "10%",
 "bottom": "80%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "shadow": false,
 "paddingTop": 20,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_75E67EB5_4C42_EF94_41D2_57B74A09F19E",
 "levels": [
  {
   "url": "media/panorama_EE29323A_E50F_05D4_41E3_1A050EB18ADF_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_75E6FEB6_4C42_EF94_41D0_15AEE9039AD1",
 "levels": [
  {
   "url": "media/panorama_EE29323A_E50F_05D4_41E3_1A050EB18ADF_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_75E56EB6_4C42_EF94_41CE_F90BD8F0549D",
 "levels": [
  {
   "url": "media/panorama_EE29323A_E50F_05D4_41E3_1A050EB18ADF_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_75ED5ECE_4C42_EFF4_41CF_82F21C62656D",
 "levels": [
  {
   "url": "media/panorama_EE0071D6_E50D_065C_41E1_377D18C833EB_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_75EDDECF_4C42_EFF4_41B2_54A4D47A6CA1",
 "levels": [
  {
   "url": "media/panorama_EE0071D6_E50D_065C_41E1_377D18C833EB_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_75EDAECF_4C42_EFF4_41D2_33E1945BB907",
 "levels": [
  {
   "url": "media/panorama_EE0071D6_E50D_065C_41E1_377D18C833EB_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4DACC751_5143_3866_4191_ADB8F260C8DA",
 "levels": [
  {
   "url": "media/panorama_EE2B0BC9_E50F_1AB7_41E4_A37BF9465CB5_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4DAC6751_5143_3866_41D3_19F615A93C17",
 "levels": [
  {
   "url": "media/panorama_EE2B0BC9_E50F_1AB7_41E4_A37BF9465CB5_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4DAFE752_5143_386A_41D3_A3F083D43809",
 "levels": [
  {
   "url": "media/panorama_EE2B0BC9_E50F_1AB7_41E4_A37BF9465CB5_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4DAF6752_5143_386A_41D1_96E12FB32689",
 "levels": [
  {
   "url": "media/panorama_EE2B0BC9_E50F_1AB7_41E4_A37BF9465CB5_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_63E9C26A_51C1_183A_41C2_CA83BF19EDFC",
 "levels": [
  {
   "url": "media/panorama_EE2E0473_E50D_0E54_41E9_F7FED4507DF8_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4DA0D762_5143_382A_41B6_ABA1C80159FA",
 "levels": [
  {
   "url": "media/panorama_EE2BA753_E50D_0A54_41A5_26D2D3FDC5E8_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4DA04764_5143_382E_41D1_E1B4B20FC347",
 "levels": [
  {
   "url": "media/panorama_EE2BA753_E50D_0A54_41A5_26D2D3FDC5E8_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4DA3E766_5143_382A_4179_863407F6B670",
 "levels": [
  {
   "url": "media/panorama_EE2BA753_E50D_0A54_41A5_26D2D3FDC5E8_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4DA37766_5143_382A_41C1_1F6B2487668F",
 "levels": [
  {
   "url": "media/panorama_EE2BA753_E50D_0A54_41A5_26D2D3FDC5E8_0_HS_3_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4DA4B75C_5143_381E_41CD_87F9C1AF5495",
 "levels": [
  {
   "url": "media/panorama_EE2BB6BB_E50D_0AD4_41B6_AEE7D63D1816_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4DA4375D_5143_381E_41D3_14CD7B6E2CBE",
 "levels": [
  {
   "url": "media/panorama_EE2BB6BB_E50D_0AD4_41B6_AEE7D63D1816_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_6E46F58D_48B5_8535_41C1_7CF2514F5617",
 "levels": [
  {
   "url": "media/panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_0_HS_6_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_6E02E292_48CC_7F2F_41D0_6E51B49CD597",
 "levels": [
  {
   "url": "media/panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_0_HS_7_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_6E015293_48CC_7F2D_41A1_4645223E5179",
 "levels": [
  {
   "url": "media/panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_0_HS_8_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_6E01C293_48CC_7F2D_41C3_4D81F6D9E0FF",
 "levels": [
  {
   "url": "media/panorama_EE441998_E50D_06D4_41B6_67E082FA8E64_0_HS_9_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_63E5A26F_51C1_183A_41CD_8485333132B3",
 "levels": [
  {
   "url": "media/panorama_EE260721_E50F_0BF7_41E7_1A5DCE792CB7_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_75F89EB3_4C42_EFAC_41D0_76D94B1DB5A1",
 "levels": [
  {
   "url": "media/panorama_EE29EC70_E50F_1E55_41CD_5DDBCB2C3F0E_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_75E76EB4_4C42_EF94_41BD_8A7061BC9761",
 "levels": [
  {
   "url": "media/panorama_EE29EC70_E50F_1E55_41CD_5DDBCB2C3F0E_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4DA23768_5143_3826_41A6_64819A3B96F7",
 "levels": [
  {
   "url": "media/panorama_EE00BCB0_E50D_1ED4_41E9_660482BF251F_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4DBDC769_5143_3826_41D3_0A1FB9A2798F",
 "levels": [
  {
   "url": "media/panorama_EE00BCB0_E50D_1ED4_41E9_660482BF251F_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4DA2F76A_5143_383A_41B7_E79B91D2F2A2",
 "levels": [
  {
   "url": "media/panorama_EE00BCB0_E50D_1ED4_41E9_660482BF251F_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_6388E292_51C1_18EA_4164_61AC2B953024",
 "levels": [
  {
   "url": "media/panorama_EE00BCB0_E50D_1ED4_41E9_660482BF251F_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_63894293_51C1_18EA_41CB_C2E7179E562F",
 "levels": [
  {
   "url": "media/panorama_EE00BCB0_E50D_1ED4_41E9_660482BF251F_0_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_6E1D229B_48CC_7F5D_4185_FAF3F1887243",
 "levels": [
  {
   "url": "media/panorama_EE2E82BA_E50F_0AD4_4188_A17A1C63EA59_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_6E1D829B_48CC_7F5D_4191_697A772D299C",
 "levels": [
  {
   "url": "media/panorama_EE2E82BA_E50F_0AD4_4188_A17A1C63EA59_0_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_6E1DD29C_48CC_7F5B_41CD_32C8BC7233F0",
 "levels": [
  {
   "url": "media/panorama_EE2E82BA_E50F_0AD4_4188_A17A1C63EA59_0_HS_5_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4D99A741_5143_3866_41B9_E42B326F857A",
 "levels": [
  {
   "url": "media/panorama_EE12CB61_E50D_FA77_41DA_BEC4D595DB4F_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4D981743_5143_386A_41C8_C343C9D0F9AE",
 "levels": [
  {
   "url": "media/panorama_EE1120BD_E50D_06CC_41E5_D131A255BF82_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_6E1AB29E_48CC_7F57_4180_8BEBD4AF3F1A",
 "levels": [
  {
   "url": "media/panorama_EE26521F_E50F_05CC_41CC_305CAB4B0D4F_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_6E19229E_48CC_7F57_41B2_257B76C2A8DD",
 "levels": [
  {
   "url": "media/panorama_EE26521F_E50F_05CC_41CC_305CAB4B0D4F_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_75ECFED0_4C42_EFEC_4196_2352D9B9A9EB",
 "levels": [
  {
   "url": "media/panorama_EE2D527F_E50D_0A4C_41E1_6EF067CB57A1_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_75EB0ED1_4C42_EFEC_41C8_EE86D727FE03",
 "levels": [
  {
   "url": "media/panorama_EE2D527F_E50D_0A4C_41E1_6EF067CB57A1_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_75EB9ED2_4C42_EFEC_418E_59F379A436A5",
 "levels": [
  {
   "url": "media/panorama_EE2D527F_E50D_0A4C_41E1_6EF067CB57A1_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4DA6875F_5143_381A_41D3_F9A599CF74B6",
 "levels": [
  {
   "url": "media/panorama_EE2D527F_E50D_0A4C_41E1_6EF067CB57A1_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_6E1FC29A_48CC_7F5F_41D1_F6C4745DF8D4",
 "levels": [
  {
   "url": "media/panorama_EE2CF389_E50F_0AB4_41EC_79A5E3F131A5_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4D948746_5143_386A_4198_B6056D613838",
 "levels": [
  {
   "url": "media/panorama_EE2CF389_E50F_0AB4_41EC_79A5E3F131A5_0_HS_2_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4D9B6743_5143_386A_4174_5D6B0B6E0E2E",
 "levels": [
  {
   "url": "media/panorama_EE136BCF_E50D_3A4B_41E8_E76CE85C4CC2_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4D9B3743_5143_386A_41C9_0C52CE940C83",
 "levels": [
  {
   "url": "media/panorama_EE136BCF_E50D_3A4B_41E8_E76CE85C4CC2_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4D9AE744_5143_386E_41B6_D82A314AD478",
 "levels": [
  {
   "url": "media/panorama_EE136BCF_E50D_3A4B_41E8_E76CE85C4CC2_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4D9A6744_5143_386E_41D2_7E99CF388836",
 "levels": [
  {
   "url": "media/panorama_EE1315C2_E50D_0EB4_41EA_7018A9A44044_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4D9A0744_5143_386E_41CD_99EF4436B06B",
 "levels": [
  {
   "url": "media/panorama_EE1315C2_E50D_0EB4_41EA_7018A9A44044_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4D95A745_5143_386E_41BB_AEA666E31666",
 "levels": [
  {
   "url": "media/panorama_EE1315C2_E50D_0EB4_41EA_7018A9A44044_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_75EA3ED8_4C42_EF9C_41C5_AD96BE8FA392",
 "levels": [
  {
   "url": "media/panorama_EE2A1D11_E50D_1FD4_41E3_3ED918C5C28B_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_75EA8ED8_4C42_EF9C_41B1_E2452D7A84A8",
 "levels": [
  {
   "url": "media/panorama_EE2A1D11_E50D_1FD4_41E3_3ED918C5C28B_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_75E96ED9_4C42_EF9C_41B1_0CB7400F10CB",
 "levels": [
  {
   "url": "media/panorama_EE2A1D11_E50D_1FD4_41E3_3ED918C5C28B_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_6E1BD29D_48CC_7F55_41C8_B330E399ACC8",
 "levels": [
  {
   "url": "media/panorama_EE2D7730_E50F_0BD4_41EA_76D04CAB3845_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_6E1A329D_48CC_7F55_41C7_B47DBBF0393F",
 "levels": [
  {
   "url": "media/panorama_EE2D7730_E50F_0BD4_41EA_76D04CAB3845_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4DA2C767_5143_382A_41C1_6ED4E2387F00",
 "levels": [
  {
   "url": "media/panorama_EE2B5235_E50D_05DC_41DC_C7CFD9A8CD5C_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4D9E6741_5143_3866_41C0_8BFEF379DC3F",
 "levels": [
  {
   "url": "media/panorama_EE024038_E50D_05D5_41D7_ED0C1FEF4C03_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4D9E0741_5143_3866_41CD_E973B7BA2566",
 "levels": [
  {
   "url": "media/panorama_EE024038_E50D_05D5_41D7_ED0C1FEF4C03_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4D993742_5143_386A_41CC_9DA3692926F6",
 "levels": [
  {
   "url": "media/panorama_EE2DE5C7_E50D_0EBC_41EB_7F20078D80DE_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4D98E742_5143_386A_41CA_EEE2D06E97EB",
 "levels": [
  {
   "url": "media/panorama_EE2DE5C7_E50D_0EBC_41EB_7F20078D80DE_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4D98A742_5143_386A_41CA_C2523DA02E6F",
 "levels": [
  {
   "url": "media/panorama_EE2DE5C7_E50D_0EBC_41EB_7F20078D80DE_0_HS_2_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4DAF0753_5143_386A_41D1_1BEE6F0D31C3",
 "levels": [
  {
   "url": "media/panorama_EE286634_E50F_0DDC_41C6_1FA8A4444D48_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4DAE8754_5143_386E_41B0_1633C08E9153",
 "levels": [
  {
   "url": "media/panorama_EE286634_E50F_0DDC_41C6_1FA8A4444D48_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4DAE2754_5143_386E_41BB_CFE87253E221",
 "levels": [
  {
   "url": "media/panorama_EE286634_E50F_0DDC_41C6_1FA8A4444D48_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_739AAB80_51C3_77C0_419C_A23ACD925494",
 "levels": [
  {
   "url": "media/panorama_EE286634_E50F_0DDC_41C6_1FA8A4444D48_0_HS_6_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_75E02EC5_4C42_EFF3_41B8_64CB6403255B",
 "levels": [
  {
   "url": "media/panorama_EE24E1F2_E50D_0654_41C8_449A85C554A0_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4DAA475A_5143_381A_41C5_95D9E9897F53",
 "levels": [
  {
   "url": "media/panorama_EE24E1F2_E50D_0654_41C8_449A85C554A0_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_63E6126A_51C1_183A_41D2_C8004D957FBB",
 "levels": [
  {
   "url": "media/panorama_EE138EC8_E50D_1AB5_41EB_583D3AEB8500_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_639C9278_51C1_1826_41C1_7AF8D357584D",
 "levels": [
  {
   "url": "media/panorama_EE26FD1D_E50F_1FCC_41E6_674A1C467F24_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_75E36EBE_4C42_EF94_41BD_45FAB44E9AA8",
 "levels": [
  {
   "url": "media/panorama_EE2F01CE_E50F_064C_41D4_83774C3F79EA_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_75E3FEBF_4C42_EF94_4190_9D26302BB8C3",
 "levels": [
  {
   "url": "media/panorama_EE2F01CE_E50F_064C_41D4_83774C3F79EA_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_75E47EB8_4C42_EF9C_41A9_E359748E7C8A",
 "levels": [
  {
   "url": "media/panorama_EE2F3704_E50F_0BBD_41E3_B8682A50A3B9_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_75E4DEB8_4C42_EF9C_41B5_8B59E2EE6F1C",
 "levels": [
  {
   "url": "media/panorama_EE2F3704_E50F_0BBD_41E3_B8682A50A3B9_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_75E2DEC0_4C42_EFEC_418E_C8BD819EFAE8",
 "levels": [
  {
   "url": "media/panorama_EE3A1C30_E50F_1DD4_41C1_4345802A63F5_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4DA94755_5143_386E_41CE_3EA868335F85",
 "levels": [
  {
   "url": "media/panorama_EE3A1C30_E50F_1DD4_41C1_4345802A63F5_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4DA8C756_5143_386A_41D0_6BF4F59DC1B3",
 "levels": [
  {
   "url": "media/panorama_EE3A1C30_E50F_1DD4_41C1_4345802A63F5_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_75E7EEB5_4C42_EF94_41A0_7253D1F22FFB",
 "levels": [
  {
   "url": "media/panorama_EE2957C9_E50F_0AB4_41AD_99CDB988813A_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_75E1EEC2_4C42_EFEC_41C0_1EC18AB782A6",
 "levels": [
  {
   "url": "media/panorama_EE3B7777_E50F_0A5C_41E0_975B9D854D5C_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_75E2FEC3_4C42_EFEC_41CE_15D8199BCAF5",
 "levels": [
  {
   "url": "media/panorama_EE3B7777_E50F_0A5C_41E0_975B9D854D5C_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_75E17EC3_4C42_EFEC_4142_FA626111D6E0",
 "levels": [
  {
   "url": "media/panorama_EE3B7777_E50F_0A5C_41E0_975B9D854D5C_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_75E1FEC4_4C42_EFF4_41A0_22BCB53CBA8A",
 "levels": [
  {
   "url": "media/panorama_EE3B7777_E50F_0A5C_41E0_975B9D854D5C_1_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_6E1E329A_48CC_7F5F_41BB_562A22705B8C",
 "levels": [
  {
   "url": "media/panorama_EE10EDCE_E50F_1E4D_41EA_970C8ADE1052_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4D952747_5143_386A_41C8_248AFD25DA42",
 "levels": [
  {
   "url": "media/panorama_EE10EDCE_E50F_1E4D_41EA_970C8ADE1052_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_6E1B029C_48CC_7F5B_41C9_75F656840F42",
 "levels": [
  {
   "url": "media/panorama_EE292CF3_E50F_1E54_41EB_C108BD9CCB49_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_6E1B529D_48CC_7F55_41A3_B2AE3D419B21",
 "levels": [
  {
   "url": "media/panorama_EE292CF3_E50F_1E54_41EB_C108BD9CCB49_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4D970749_5143_3866_41CF_C15623EF8E58",
 "levels": [
  {
   "url": "media/panorama_EE292CF3_E50F_1E54_41EB_C108BD9CCB49_0_HS_4_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ]
},
{
 "maxHeight": 512,
 "maxWidth": 512,
 "width": 38,
 "id": "IconButton_5EF03DC7_519F_9286_41B5_DD4096D317FC",
 "transparencyActive": false,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "minWidth": 1,
 "mode": "push",
 "verticalAlign": "middle",
 "height": 36,
 "click": "this.openLink('http://www.bhupalnobles.site', '_top')",
 "iconURL": "skin/IconButton_5EF03DC7_519F_9286_41B5_DD4096D317FC.png",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "class": "IconButton",
 "paddingLeft": 0,
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton6027"
 }
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "width": 44,
 "id": "IconButton_7B201C51_3AA0_A251_41CD_5CC0A59F2DE8",
 "transparencyActive": true,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "minWidth": 1,
 "mode": "push",
 "verticalAlign": "middle",
 "height": 44,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, true, 0, null, null, false)",
 "iconURL": "skin/IconButton_7B201C51_3AA0_A251_41CD_5CC0A59F2DE8.png",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_7B201C51_3AA0_A251_41CD_5CC0A59F2DE8_rollover.png",
 "class": "IconButton",
 "paddingLeft": 0,
 "pressedIconURL": "skin/IconButton_7B201C51_3AA0_A251_41CD_5CC0A59F2DE8_pressed.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton Realtor"
 }
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "width": 44,
 "id": "IconButton_7B21FC51_3AA0_A251_41CC_46CDE74591EA",
 "transparencyActive": true,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "minWidth": 1,
 "mode": "push",
 "verticalAlign": "middle",
 "height": 44,
 "click": "this.showPopupImage(this.ImageResource_63A902B2_51C1_182A_41CE_91314C97889E, null, '90%', '90%', this.FadeInEffect_63A932B2_51C1_182A_41A5_22E550C75423, this.FadeOutEffect_63A922B2_51C1_182A_41AC_10042BE773F5, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingLeft':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, false)",
 "iconURL": "skin/IconButton_7B21FC51_3AA0_A251_41CC_46CDE74591EA.png",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_7B21FC51_3AA0_A251_41CC_46CDE74591EA_rollover.png",
 "class": "IconButton",
 "paddingLeft": 0,
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton Photoalbum"
 }
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "width": 44,
 "id": "IconButton_7B212C50_3AA0_A1AF_41C5_F659ED22BD52",
 "transparencyActive": true,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "minWidth": 1,
 "mode": "push",
 "verticalAlign": "middle",
 "height": 44,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, true, 0, null, null, false)",
 "iconURL": "skin/IconButton_7B212C50_3AA0_A1AF_41C5_F659ED22BD52.png",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_7B212C50_3AA0_A1AF_41C5_F659ED22BD52_rollover.png",
 "class": "IconButton",
 "paddingLeft": 0,
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton Info"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "-left"
 },
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "85%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "horizontalAlign": "center",
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "contentOpaque": false,
 "verticalAlign": "middle",
 "backgroundColor": [
  "#000000"
 ],
 "height": "100%",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "orange line"
 },
 "id": "Container_26D3A42C_3F86_BA30_419B_2C6BE84D2718",
 "width": 8,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#F7931E"
 ],
 "height": "100%",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "-right"
 },
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "scrollBarOpacity": 0.51,
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "width": "50%",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderSize": 0,
 "paddingRight": 50,
 "scrollBarMargin": 2,
 "minWidth": 460,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "shadow": false,
 "paddingTop": 20,
 "backgroundOpacity": 1,
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 20,
 "paddingLeft": 50,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "width": "25%",
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "transparencyActive": false,
 "borderSize": 0,
 "minHeight": 50,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "minWidth": 50,
 "mode": "push",
 "verticalAlign": "middle",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "class": "IconButton",
 "paddingLeft": 0,
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "X"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "-left"
 },
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "55%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "horizontalAlign": "center",
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "contentOpaque": false,
 "verticalAlign": "middle",
 "backgroundColor": [
  "#000000"
 ],
 "height": "100%",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "orange line"
 },
 "id": "Container_27875147_3F82_7A70_41CC_C0FFBB32BEFD",
 "width": 8,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#F7931E"
 ],
 "height": "100%",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "-right"
 },
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "scrollBarOpacity": 0.51,
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "width": "45%",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderSize": 0,
 "paddingRight": 60,
 "scrollBarMargin": 2,
 "minWidth": 460,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "shadow": false,
 "paddingTop": 20,
 "backgroundOpacity": 1,
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 20,
 "paddingLeft": 60,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "width": "25%",
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "transparencyActive": false,
 "borderSize": 0,
 "minHeight": 50,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "minWidth": 50,
 "mode": "push",
 "verticalAlign": "middle",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "class": "IconButton",
 "paddingLeft": 0,
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "X"
 }
},
{
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "width": "100%",
 "borderSize": 0,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "minHeight": 1,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "top": "0%",
 "minWidth": 1,
 "verticalAlign": "middle",
 "height": "100%",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Image",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_outside",
 "paddingLeft": 0,
 "propagateClick": false,
 "data": {
  "name": "photo"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "minHeight": 0,
 "horizontalAlign": "right",
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 60,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 20,
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container text"
 },
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "scrollBarOpacity": 0.79,
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "minHeight": 520,
 "horizontalAlign": "left",
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "minWidth": 100,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 30,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "width": 370,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 40,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "left": "0%",
 "width": "100%",
 "borderSize": 0,
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "minHeight": 1,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "top": "0%",
 "minWidth": 1,
 "verticalAlign": "bottom",
 "height": "100%",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Image",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_outside",
 "paddingLeft": 0,
 "propagateClick": false,
 "data": {
  "name": "Image"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "minHeight": 0,
 "horizontalAlign": "right",
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 60,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 20,
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container text"
 },
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "scrollBarOpacity": 0.79,
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "minHeight": 520,
 "horizontalAlign": "left",
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "minWidth": 100,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 30,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "width": 370,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 40,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#F7931E",
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 10,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": "100%",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:7.54vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.46vh;font-family:'Montserrat';\"><B>BHUPAL NOBLES</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.46vh;font-family:'Montserrat';\"><B>UNIVERSITY</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.68vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:1.68vh;font-family:'Montserrat';\"><B>Established By:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:1.68vh;font-family:'Montserrat';\"><B>he Rajasthan Legislative Assembly</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:1.68vh;font-family:'Montserrat';\"><B>Act No. 23, 2015</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.68vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:1.68vh;font-family:'Montserrat';\"><B>Promoted By:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:1.68vh;font-family:'Montserrat';\"><B>Vidya Pracharini Sabha, Bhupal Nobles' Sansthan,Udaipur,</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:1.68vh;font-family:'Montserrat';\"><B>Rajasthan</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.68vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\">The Bhupal Nobles' University endeavors to promote the advancement and dissemination of knowledge. It aims to provide instructions in the disciplines and courses stated in the bulletin along with the provision for research and consultancy. The University has been set up to inculcate the best of practices for sustainable development of the society and the nation. The University has been established with the noble objective of eradicating illiteracy, ignorance and pernicious social evils through the spread of enlightening, progressive and value oriented education.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.68vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.68vh;font-family:'Montserrat';\"><B>Our Vision:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.68vh;\"> </SPAN>\u2022 To contribute and work with a sense of commitment towards educational, cultural, economic, environmental, health and social development of the nation at large.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 To provide education so as to ensure that our students become self-sufficient after their years with us.</SPAN></DIV></div>",
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingBottom": 20,
 "paddingLeft": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText"
 }
},
{
 "fontFamily": "Montserrat",
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Button Lorem Ipsum"
 },
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "width": 221,
 "fontSize": "1.96vh",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "horizontalAlign": "center",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "borderColor": "#000000",
 "paddingRight": 0,
 "backgroundColor": [
  "#F7931E"
 ],
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "minWidth": 1,
 "label": "Go To Website",
 "height": 50,
 "click": "this.openLink('http://www.bhupalnobles.site', '_top')",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0.8,
 "paddingTop": 0,
 "rollOverBackgroundOpacity": 1,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "textDecoration": "none",
 "paddingLeft": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "fontStyle": "normal",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": false,
 "fontWeight": "bold",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": "45%",
 "shadow": false,
 "paddingTop": 6,
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:7.54vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.46vh;font-family:'Montserrat';\"><B>BCA III YEAR</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.46vh;font-family:'Montserrat';\"><B>PROJECT </B></SPAN></SPAN></DIV></div>",
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingBottom": 10,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText18899"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "- content"
 },
 "children": [
  "this.Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "80%",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "maxHeight": 200,
 "maxWidth": 200,
 "width": "25%",
 "id": "Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
 "borderSize": 0,
 "url": "skin/Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0.jpg",
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "height": "100%",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Image",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "paddingLeft": 0,
 "propagateClick": false,
 "data": {
  "name": "agent photo"
 }
},
{
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#F7931E",
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "scrollBarVisible": "rollOver",
 "width": "72.431%",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 10,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": "94.118%",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:1.99vh;font-family:'Montserrat';\"><B>HIMANSHU SONI</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.68vh;font-family:'Montserrat';\">BCA III YEAR - BN UNIVERSITY</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.05vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Montserrat';\">+918619243280</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.05vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Montserrat';\">MY AGENCY:</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Montserrat';\">visualsone.com@gmail.com</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Montserrat';\">www.visualsone.com</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.05vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.05vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\">PROJECT ON WEBSITE AND VIRTUAL TOUR\u201d</SPAN></DIV><p STYLE=\"margin:0; line-height:1.05vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\">SUBMITTED BY: HIMANSHU SONI</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\">CLASS: BCA III YEAR</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\">ROLL NO: 2212084</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\">ENROLLMENT NO: 21/12084</SPAN></DIV><p STYLE=\"margin:0; line-height:1.05vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.05vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingBottom": 10,
 "paddingLeft": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText19460"
 }
}],
 "start": "this.init(); this.syncPlaylists([this.ThumbnailList_F71FACEA_E50D_1E74_41DD_FC1218D891CD_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A].forEach(function(component) { component.set('visible', false); }) }",
 "data": {
  "name": "Player468"
 },
 "children": [
  "this.MainViewer",
  "this.Container_0C5F33A8_3BA0_A6FF_41C3_2A6652E2CE94",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
  "this.ThumbnailList_F71FACEA_E50D_1E74_41DD_FC1218D891CD",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "layout": "absolute",
 "minHeight": 20,
 "horizontalAlign": "left",
 "backgroundPreloadEnabled": true,
 "borderSize": 0,
 "buttonToggleFullscreen": "this.Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A",
 "scripts": {
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getKey": function(key){  return window[key]; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "existsKey": function(key){  return key in window; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "unregisterKey": function(key){  delete window[key]; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "registerKey": function(key, value){  window[key] = value; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } }
 },
 "paddingRight": 0,
 "defaultVRPointer": "laser",
 "scrollBarMargin": 2,
 "minWidth": 20,
 "downloadEnabled": false,
 "contentOpaque": false,
 "verticalAlign": "top",
 "height": "100%",
 "shadow": false,
 "paddingTop": 0,
 "class": "Player",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "mouseWheelEnabled": true,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "visible",
 "desktopMipmappingEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
