const colors = ["#FFAE57", "#FF7853", "#EA5151", "#CC3F57", "#9A2555"];
const bgColor = "#2E2733";
const itemStyle = {
  star5: {
    color: colors[0]
  },
  star4: {
    color: colors[1]
  },
  star3: {
    color: colors[2]
  },
  star2: {
    color: colors[3]
  }
};
const data = [
  {
    name: "Fiction",
    itemStyle: {color: colors[1]},
    children: [
      {
        name: "Novels",
        children: [
          {
            name: "5☆",
            children: [
              {
                name: "Pain"
              },
              {
                name: "Compassion"
              },
              {
                name: "The Tenant Downstairs"
              }
            ]
          },
          {
            name: "4☆",
            children: [
              {
                name: "The Cross of Nothingness"
              },
              {
                name: "Silent Confessions"
              },
              {
                name: "The End of Childhood"
              }
            ]
          },
          {
            name: "3☆",
            children: [
              {
                name: "The Diary of a Mad Old Man"
              }
            ]
          }
        ]
      },
      {
        name: "Other",
        children: [
          {
            name: "5☆",
            children: [
              {
                name: "Nabokov: The Complete Short Stories"
              }
            ]
          },
          {
            name: "4☆",
            children: [
              {
                name: "Requiem"
              },
              {
                name: "Life Puzzle Edition"
              }
            ]
          },
          {
            name: "3☆",
            children: [
              {
                name: "More than Loving You, I Need You"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Non-Fiction",
    itemStyle: {
      color: colors[2]
    },
    children: [
      {
        name: "Design",
        children: [
          {
            name: "5☆",
            children: [
              {
                name: "Uninterface Interaction"
              }
            ]
          },
          {
            name: "4☆",
            children: [
              {
                name: "Global Illumination and Rendering Techniques for Digital Drawing"
              },
              {
                name: "Anatomical Book of Japanese Architecture"
              }
            ]
          },
          {
            name: "3☆",
            children: [
              {
                name: "Fantasy World Art & RPG Map Drawing Lecture"
              }
            ]
          }
        ]
      },
      {
        name: "Social Sciences",
        children: [
          {
            name: "5☆",
            children: [
              {
                name: "Pain Points"
              }
            ]
          },
          {
            name: "4☆",
            children: [
              {
                name: "The Effective Manager"
              },
              {
                name: "Evolution"
              },
              {
                name: "The Arrival of the Post-Desire Era"
              }
            ]
          },
          {
            name: "3☆",
            children: [
              {
                name: "Madness and Civilization"
              }
            ]
          }
        ]
      },
      {
        name: "Psychology",
        children: [
          {
            name: "5☆",
            children: [
              {
                name: "Neurotic Personalities of Our Time"
              }
            ]
          },
          {
            name: "4☆",
            children: [
              {
                name: "The Pygmalion Effect"
              },
              {
                name: "The Wounded"
              }
            ]
          },
          {
            name: "3☆"
          },
          {
            name: "2☆",
            children: [
              {
                name: "Obsession"
              }
            ]
          }
        ]
      },
      {
        name: "Home and Living",
        children: [
          {
            name: "4☆",
            children: [
              {
                name: "Making a House a Home"
              },
              {
                name: "Living Only the Necessary Life"
              },
              {
                name: "Nordic Minimalism"
              }
            ]
          }
        ]
      },
      {
        name: "Picture Books",
        children: [
          {
            name: "5☆",
            children: [
              {
                name: "Design Poem"
              }
            ]
          },
          {
            name: "4☆",
            children: [
              {
                name: "If Life Deceives You"
              },
              {
                name: "The Mysterious Animal Picture Book of the Naturalist"
              }
            ]
          },
          {
            name: "3☆",
            children: [
              {
                name: "Direction"
              }
            ]
          }
        ]
      },
      {
        name: "Philosophy",
        children: [
          {
            name: "4☆",
            children: [
              {
                name: "The Wisdom of Life"
              }
            ]
          }
        ]
      },
      {
        name: "Technology",
        children: [
          {
            name: "5☆",
            children: [
              {
                name: "Clean Code"
              }
            ]
          },
          {
            name: "4☆",
            children: [
              {
                name: "Three.js Development Guide"
              }
            ]
          }
        ]
      }
    ]
  }
];

for (let j = 0; j < data.length; ++j) {
  let level1 = data[j].children;
  for (let i = 0; i < level1.length; ++i) {
    let block = level1[i].children;
    let bookScore = [];
    let bookScoreId;
    for (let star = 0; star < block.length; ++star) {
      let style = (function (name) {
        switch (name) {
          case "5☆":
            bookScoreId = 0;
            return itemStyle.star5;
          case "4☆":
            bookScoreId = 1;
            return itemStyle.star4;
          case "3☆":
            bookScoreId = 2;
            return itemStyle.star3;
          case "2☆":
            bookScoreId = 3;
            return itemStyle.star2;
        }
      })(block[star].name);
      block[star].label = {
        color: style.color,
        downplay: {
          opacity: 0.5
        }
      };
      if (block[star].children) {
        style = {
          opacity: 1,
          color: style.color
        };
        block[star].children.forEach(function (book) {
          book.value = 1;
          book.itemStyle = style;
          book.label = {
            color: style.color
          };
          let value = 1;
          if (bookScoreId === 0 || bookScoreId === 3) {
            value = 5;
          }
          if (bookScore[bookScoreId]) {
            bookScore[bookScoreId].value += value;
          } else {
            bookScore[bookScoreId] = {
              color: colors[bookScoreId],
              value: value
            };
          }
        });
      }
    }
    level1[i].itemStyle = {
      color: data[j].itemStyle.color
    };
  }
}

option = {
  backgroundColor: bgColor,
  color: colors,
  series: [
    {
      type: "sunburst",
      center: ["50%", "48%"],
      data: data,
      sort: function (a, b) {
        if (a.depth === 1) {
          return b.getValue() - a.getValue();
        } else {
          return a.dataIndex - b.dataIndex;
        }
      },
      label: {
        rotate: "radial",
        color: bgColor
      },
      itemStyle: {
        borderColor: bgColor,
        borderWidth: 2
      },
      levels: [
        {},
        {
          r0: 0,
          r: 40,
          label: {
            rotate: 0
          }
        },
        {
          r0: 40,
          r: 105
        },
        {
          r0: 115,
          r: 140,
          itemStyle: {
            shadowBlur: 2,
            shadowColor: colors[2],
            color: "transparent"
          },
          label: {
            rotate: "tangential",
            fontSize: 10,
            color: colors[0]
          }
        },
        {
          r0: 140,
          r: 145,
          itemStyle: {
            shadowBlur: 80,
            shadowColor: colors[0]
          },
          label: {
            position: "outside",
            textShadowBlur: 5,
            textShadowColor: "#333"
          },
          downplay: {
            label: {
              opacity: 0.5
            }
          }
        }
      ]
    }
  ]
};

export {};