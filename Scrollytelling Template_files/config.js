var config = {
  style: "mapbox://styles/claire-cg/cl1b304a8000m15rq9rm906ay",
  accessToken:    "pk.eyJ1IjoiY2xhaXJlLWNnIiwiYSI6ImNrbnA3bjZxdTAwOHQyb3FwdXhhbDM5d3cifQ.cX3_pLwyHaV0y3N6_X6yaw",
  showMarkers: false,
  theme: "light",
  alignment: "left",
  title: "Italy, Migration, Urbanization",
  subtitle: "",
  byline: "",
  //footer: "Source: ISTAT Italian Census",
  chapters: [
    {
      id: "chap-1",
      title: "Italy's Urbanization",
      description:
        "Urban areas",
      location: {
        center: [7, 42.7],
        zoom: 5,
        pitch: 0.0,
        bearing: 0.0
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: "zone_urb",
          opacity: 1
        }
      ],
      onChapterExit: [
        {
          layer: "zone_urb",
          opacity: 0
        }
      ]
    },
    {
      id: "chap-2",
      title: "Destinations for Migration",
      image: "",
      description:
        "The percent of total internal migration by their destination.",
      location: {
        center: [7, 42.1],
        zoom: 5.1,
        pitch: 0.0,
        bearing: 0.0
      },
      onChapterEnter: [
        {
          layer: "migr_int_dest",
          opacity: 1
        }
      ],
      onChapterExit: [
        {
          layer: "migr_int_dest",
          opacity: 0
        }
      ]
    },
    {
      id: "chap-3",
      title: "Origins for Migration",
      image: "",
      description:
        "The percent of total internal migration by their origin.",
      location: {
        center: [7, 42.1],
        zoom: 5.1,
        pitch: 0.0,
        bearing: 0.0
      },
      onChapterEnter: [
        {
          layer: "migr_int_orgn",
          opacity: 1
        }
      ],
      onChapterExit: [
        {
          layer: "migr_int_orgn",
          opacity: 0
        }
      ]
    },
    {
      id: "chap-4",
      title: "Where are people migrating to from outside Italy?",
      image: "",
      description:
        "Percentage of total citizenship requests by region.",
      location: {
        center: [7, 42.1],
        zoom: 5.1,
        pitch: 0.0,
        bearing: 0
      },
      onChapterEnter: [
        {
          layer: "citt_motivi_pct",
          opacity: 1
        }
      ],
      onChapterExit: [
        {
          layer: "citt_motivi_pct",
          opacity: 0
        }
      ]
    },
      {
      id: "chap-5",
      title: "How many people are leaving Italy?",
      image: "",
      description:
        "Percentage of total emigrations by region.",
      location: {
        center: [7, 42.1],
        zoom: 5.1,
        pitch: 0.0,
        bearing: 0
      },
      onChapterEnter: [
        {
          layer: "emigr_pct",
          opacity: 1
        }
      ],
      onChapterExit: [
        {
          layer: "emigr_pct",
          opacity: 0
        }
      ]
    }
  ]
};
