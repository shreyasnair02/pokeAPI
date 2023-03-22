const pokemonData = [
  {
    id: 0,
    name: "bulbasaur",
    pokemon_data: {
      abilities: [
        {
          ability: {
            name: "overgrow",
            url: "https://pokeapi.co/api/v2/ability/65/",
          },
          is_hidden: false,
          slot: 1,
        },
        {
          ability: {
            name: "chlorophyll",
            url: "https://pokeapi.co/api/v2/ability/34/",
          },
          is_hidden: true,
          slot: 3,
        },
      ],
      base_experience: 64,
      height: 7,
      sprites: {
        back_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
        back_female: null,
        back_shiny:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
        back_shiny_female: null,
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        front_female: null,
        front_shiny:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
        front_shiny_female: null,
        other: {
          dream_world: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
            front_female: null,
          },
          "official-artwork": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
          },
        },
        versions: {
          "generation-i": {
            "red-blue": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/1.png",
              back_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/1.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/1.png",
              front_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/1.png",
            },
            yellow: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/1.png",
              back_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/1.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/1.png",
              front_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/1.png",
            },
          },
          "generation-ii": {
            crystal: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/1.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/1.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/1.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/1.png",
            },
            gold: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/1.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/1.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/1.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/1.png",
            },
            silver: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/1.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/1.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/1.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/1.png",
            },
          },
          "generation-iii": {
            emerald: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/emerald/1.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/1.png",
            },
            "firered-leafgreen": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/1.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/1.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/1.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/1.png",
            },
            "ruby-sapphire": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/1.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/1.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/1.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/1.png",
            },
          },
          "generation-iv": {
            "diamond-pearl": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/1.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/1.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/1.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/1.png",
              front_shiny_female: null,
            },
            "heartgold-soulsilver": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/1.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/1.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/1.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/1.png",
              front_shiny_female: null,
            },
            platinum: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/1.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/1.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/1.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/1.png",
              front_shiny_female: null,
            },
          },
          "generation-v": {
            "black-white": {
              animated: {
                back_default:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/1.gif",
                back_female: null,
                back_shiny:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/1.gif",
                back_shiny_female: null,
                front_default:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif",
                front_female: null,
                front_shiny:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/1.gif",
                front_shiny_female: null,
              },
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/1.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/1.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/1.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/1.png",
              front_shiny_female: null,
            },
          },
          "generation-vi": {
            "omegaruby-alphasapphire": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/1.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/1.png",
              front_shiny_female: null,
            },
            "x-y": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/1.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/1.png",
              front_shiny_female: null,
            },
          },
          "generation-vii": {
            icons: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/icons/1.png",
              front_female: null,
            },
            "ultra-sun-ultra-moon": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/1.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/1.png",
              front_shiny_female: null,
            },
          },
          "generation-viii": {
            icons: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-viii/icons/1.png",
              front_female: null,
            },
          },
        },
      },
      stats: [
        {
          base_stat: 45,
          effort: 0,
          stat: {
            name: "hp",
            url: "https://pokeapi.co/api/v2/stat/1/",
          },
        },
        {
          base_stat: 49,
          effort: 0,
          stat: {
            name: "attack",
            url: "https://pokeapi.co/api/v2/stat/2/",
          },
        },
        {
          base_stat: 49,
          effort: 0,
          stat: {
            name: "defense",
            url: "https://pokeapi.co/api/v2/stat/3/",
          },
        },
        {
          base_stat: 65,
          effort: 1,
          stat: {
            name: "special-attack",
            url: "https://pokeapi.co/api/v2/stat/4/",
          },
        },
        {
          base_stat: 65,
          effort: 0,
          stat: {
            name: "special-defense",
            url: "https://pokeapi.co/api/v2/stat/5/",
          },
        },
        {
          base_stat: 45,
          effort: 0,
          stat: {
            name: "speed",
            url: "https://pokeapi.co/api/v2/stat/6/",
          },
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "grass",
            url: "https://pokeapi.co/api/v2/type/12/",
          },
        },
        {
          slot: 2,
          type: {
            name: "poison",
            url: "https://pokeapi.co/api/v2/type/4/",
          },
        },
      ],
      weight: 69,
    },
  },
  {
    id: 1,
    name: "ivysaur",
    pokemon_data: {
      abilities: [
        {
          ability: {
            name: "overgrow",
            url: "https://pokeapi.co/api/v2/ability/65/",
          },
          is_hidden: false,
          slot: 1,
        },
        {
          ability: {
            name: "chlorophyll",
            url: "https://pokeapi.co/api/v2/ability/34/",
          },
          is_hidden: true,
          slot: 3,
        },
      ],
      base_experience: 142,
      height: 10,
      sprites: {
        back_default:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/2.png",
        back_female: null,
        back_shiny:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/shiny/2.png",
        back_shiny_female: null,
        front_default:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/2.png",
        front_female: null,
        front_shiny:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/shiny/2.png",
        front_shiny_female: null,
        other: {
          dream_world: {
            front_default:
              "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/2.svg",
            front_female: null,
          },
          "official-artwork": {
            front_default:
              "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/official-artwork/2.png",
          },
        },
        versions: {
          "generation-i": {
            "red-blue": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/2.png",
              back_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/2.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/2.png",
              front_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/2.png",
            },
            yellow: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/2.png",
              back_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/2.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/2.png",
              front_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/2.png",
            },
          },
          "generation-ii": {
            crystal: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/2.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/2.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/2.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/2.png",
            },
            gold: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/2.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/2.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/2.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/2.png",
            },
            silver: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/2.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/2.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/2.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/2.png",
            },
          },
          "generation-iii": {
            emerald: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/emerald/2.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/2.png",
            },
            "firered-leafgreen": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/2.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/2.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/2.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/2.png",
            },
            "ruby-sapphire": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/2.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/2.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/2.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/2.png",
            },
          },
          "generation-iv": {
            "diamond-pearl": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/2.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/2.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/2.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/2.png",
              front_shiny_female: null,
            },
            "heartgold-soulsilver": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/2.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/2.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/2.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/2.png",
              front_shiny_female: null,
            },
            platinum: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/2.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/2.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/2.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/2.png",
              front_shiny_female: null,
            },
          },
          "generation-v": {
            "black-white": {
              animated: {
                back_default:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/2.gif",
                back_female: null,
                back_shiny:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/2.gif",
                back_shiny_female: null,
                front_default:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/2.gif",
                front_female: null,
                front_shiny:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/2.gif",
                front_shiny_female: null,
              },
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/2.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/2.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/2.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/2.png",
              front_shiny_female: null,
            },
          },
          "generation-vi": {
            "omegaruby-alphasapphire": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/2.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/2.png",
              front_shiny_female: null,
            },
            "x-y": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/2.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/2.png",
              front_shiny_female: null,
            },
          },
          "generation-vii": {
            icons: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/icons/2.png",
              front_female: null,
            },
            "ultra-sun-ultra-moon": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/2.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/2.png",
              front_shiny_female: null,
            },
          },
          "generation-viii": {
            icons: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-viii/icons/2.png",
              front_female: null,
            },
          },
        },
      },
      stats: [
        {
          base_stat: 60,
          effort: 0,
          stat: {
            name: "hp",
            url: "https://pokeapi.co/api/v2/stat/1/",
          },
        },
        {
          base_stat: 62,
          effort: 0,
          stat: {
            name: "attack",
            url: "https://pokeapi.co/api/v2/stat/2/",
          },
        },
        {
          base_stat: 63,
          effort: 0,
          stat: {
            name: "defense",
            url: "https://pokeapi.co/api/v2/stat/3/",
          },
        },
        {
          base_stat: 80,
          effort: 1,
          stat: {
            name: "special-attack",
            url: "https://pokeapi.co/api/v2/stat/4/",
          },
        },
        {
          base_stat: 80,
          effort: 1,
          stat: {
            name: "special-defense",
            url: "https://pokeapi.co/api/v2/stat/5/",
          },
        },
        {
          base_stat: 60,
          effort: 0,
          stat: {
            name: "speed",
            url: "https://pokeapi.co/api/v2/stat/6/",
          },
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "grass",
            url: "https://pokeapi.co/api/v2/type/12/",
          },
        },
        {
          slot: 2,
          type: {
            name: "poison",
            url: "https://pokeapi.co/api/v2/type/4/",
          },
        },
      ],
      weight: 130,
    },
  },
  {
    id: 2,
    name: "venusaur",
    pokemon_data: {
      abilities: [
        {
          ability: {
            name: "overgrow",
            url: "https://pokeapi.co/api/v2/ability/65/",
          },
          is_hidden: false,
          slot: 1,
        },
        {
          ability: {
            name: "chlorophyll",
            url: "https://pokeapi.co/api/v2/ability/34/",
          },
          is_hidden: true,
          slot: 3,
        },
      ],
      base_experience: 236,
      height: 20,
      sprites: {
        back_default:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/3.png",
        back_female:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/female/3.png",
        back_shiny:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/shiny/3.png",
        back_shiny_female:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/shiny/female/3.png",
        front_default:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/3.png",
        front_female:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/female/3.png",
        front_shiny:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/shiny/3.png",
        front_shiny_female:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/shiny/female/3.png",
        other: {
          dream_world: {
            front_default:
              "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/3.svg",
            front_female: null,
          },
          "official-artwork": {
            front_default:
              "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/official-artwork/3.png",
          },
        },
        versions: {
          "generation-i": {
            "red-blue": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/3.png",
              back_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/3.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/3.png",
              front_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/3.png",
            },
            yellow: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/3.png",
              back_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/3.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/3.png",
              front_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/3.png",
            },
          },
          "generation-ii": {
            crystal: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/3.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/3.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/3.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/3.png",
            },
            gold: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/3.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/3.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/3.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/3.png",
            },
            silver: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/3.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/3.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/3.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/3.png",
            },
          },
          "generation-iii": {
            emerald: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/emerald/3.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/3.png",
            },
            "firered-leafgreen": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/3.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/3.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/3.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/3.png",
            },
            "ruby-sapphire": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/3.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/3.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/3.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/3.png",
            },
          },
          "generation-iv": {
            "diamond-pearl": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/3.png",
              back_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/female/3.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/3.png",
              back_shiny_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/female/3.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/3.png",
              front_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/female/3.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/3.png",
              front_shiny_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/female/3.png",
            },
            "heartgold-soulsilver": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/3.png",
              back_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/female/3.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/3.png",
              back_shiny_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/female/3.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/3.png",
              front_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/female/3.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/3.png",
              front_shiny_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/female/3.png",
            },
            platinum: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/3.png",
              back_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/female/3.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/3.png",
              back_shiny_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/female/3.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/3.png",
              front_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/female/3.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/3.png",
              front_shiny_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/female/3.png",
            },
          },
          "generation-v": {
            "black-white": {
              animated: {
                back_default:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/3.gif",
                back_female:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/female/3.gif",
                back_shiny:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/3.gif",
                back_shiny_female:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/female/3.gif",
                front_default:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/3.gif",
                front_female:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/female/3.gif",
                front_shiny:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/3.gif",
                front_shiny_female:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/female/3.gif",
              },
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/3.png",
              back_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/female/3.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/3.png",
              back_shiny_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/female/3.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/3.png",
              front_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/female/3.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/3.png",
              front_shiny_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/female/3.png",
            },
          },
          "generation-vi": {
            "omegaruby-alphasapphire": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/3.png",
              front_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/female/3.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/3.png",
              front_shiny_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/female/3.png",
            },
            "x-y": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/3.png",
              front_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/female/3.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/3.png",
              front_shiny_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/female/3.png",
            },
          },
          "generation-vii": {
            icons: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/icons/3.png",
              front_female: null,
            },
            "ultra-sun-ultra-moon": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/3.png",
              front_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/female/3.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/3.png",
              front_shiny_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/female/3.png",
            },
          },
          "generation-viii": {
            icons: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-viii/icons/3.png",
              front_female: null,
            },
          },
        },
      },
      stats: [
        {
          base_stat: 80,
          effort: 0,
          stat: {
            name: "hp",
            url: "https://pokeapi.co/api/v2/stat/1/",
          },
        },
        {
          base_stat: 82,
          effort: 0,
          stat: {
            name: "attack",
            url: "https://pokeapi.co/api/v2/stat/2/",
          },
        },
        {
          base_stat: 83,
          effort: 0,
          stat: {
            name: "defense",
            url: "https://pokeapi.co/api/v2/stat/3/",
          },
        },
        {
          base_stat: 100,
          effort: 2,
          stat: {
            name: "special-attack",
            url: "https://pokeapi.co/api/v2/stat/4/",
          },
        },
        {
          base_stat: 100,
          effort: 1,
          stat: {
            name: "special-defense",
            url: "https://pokeapi.co/api/v2/stat/5/",
          },
        },
        {
          base_stat: 80,
          effort: 0,
          stat: {
            name: "speed",
            url: "https://pokeapi.co/api/v2/stat/6/",
          },
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "grass",
            url: "https://pokeapi.co/api/v2/type/12/",
          },
        },
        {
          slot: 2,
          type: {
            name: "poison",
            url: "https://pokeapi.co/api/v2/type/4/",
          },
        },
      ],
      weight: 1000,
    },
  },
  {
    id: 3,
    name: "charmander",
    pokemon_data: {
      abilities: [
        {
          ability: {
            name: "blaze",
            url: "https://pokeapi.co/api/v2/ability/66/",
          },
          is_hidden: false,
          slot: 1,
        },
        {
          ability: {
            name: "solar-power",
            url: "https://pokeapi.co/api/v2/ability/94/",
          },
          is_hidden: true,
          slot: 3,
        },
      ],
      base_experience: 62,
      height: 6,
      sprites: {
        back_default:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/4.png",
        back_female: null,
        back_shiny:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/shiny/4.png",
        back_shiny_female: null,
        front_default:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/4.png",
        front_female: null,
        front_shiny:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/shiny/4.png",
        front_shiny_female: null,
        other: {
          dream_world: {
            front_default:
              "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/4.svg",
            front_female: null,
          },
          "official-artwork": {
            front_default:
              "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/official-artwork/4.png",
          },
        },
        versions: {
          "generation-i": {
            "red-blue": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/4.png",
              back_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/4.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/4.png",
              front_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/4.png",
            },
            yellow: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/4.png",
              back_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/4.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/4.png",
              front_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/4.png",
            },
          },
          "generation-ii": {
            crystal: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/4.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/4.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/4.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/4.png",
            },
            gold: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/4.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/4.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/4.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/4.png",
            },
            silver: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/4.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/4.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/4.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/4.png",
            },
          },
          "generation-iii": {
            emerald: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/emerald/4.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/4.png",
            },
            "firered-leafgreen": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/4.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/4.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/4.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/4.png",
            },
            "ruby-sapphire": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/4.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/4.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/4.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/4.png",
            },
          },
          "generation-iv": {
            "diamond-pearl": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/4.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/4.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/4.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/4.png",
              front_shiny_female: null,
            },
            "heartgold-soulsilver": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/4.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/4.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/4.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/4.png",
              front_shiny_female: null,
            },
            platinum: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/4.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/4.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/4.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/4.png",
              front_shiny_female: null,
            },
          },
          "generation-v": {
            "black-white": {
              animated: {
                back_default:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/4.gif",
                back_female: null,
                back_shiny:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/4.gif",
                back_shiny_female: null,
                front_default:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/4.gif",
                front_female: null,
                front_shiny:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/4.gif",
                front_shiny_female: null,
              },
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/4.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/4.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/4.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/4.png",
              front_shiny_female: null,
            },
          },
          "generation-vi": {
            "omegaruby-alphasapphire": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/4.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/4.png",
              front_shiny_female: null,
            },
            "x-y": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/4.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/4.png",
              front_shiny_female: null,
            },
          },
          "generation-vii": {
            icons: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/icons/4.png",
              front_female: null,
            },
            "ultra-sun-ultra-moon": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/4.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/4.png",
              front_shiny_female: null,
            },
          },
          "generation-viii": {
            icons: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-viii/icons/4.png",
              front_female: null,
            },
          },
        },
      },
      stats: [
        {
          base_stat: 39,
          effort: 0,
          stat: {
            name: "hp",
            url: "https://pokeapi.co/api/v2/stat/1/",
          },
        },
        {
          base_stat: 52,
          effort: 0,
          stat: {
            name: "attack",
            url: "https://pokeapi.co/api/v2/stat/2/",
          },
        },
        {
          base_stat: 43,
          effort: 0,
          stat: {
            name: "defense",
            url: "https://pokeapi.co/api/v2/stat/3/",
          },
        },
        {
          base_stat: 60,
          effort: 0,
          stat: {
            name: "special-attack",
            url: "https://pokeapi.co/api/v2/stat/4/",
          },
        },
        {
          base_stat: 50,
          effort: 0,
          stat: {
            name: "special-defense",
            url: "https://pokeapi.co/api/v2/stat/5/",
          },
        },
        {
          base_stat: 65,
          effort: 1,
          stat: {
            name: "speed",
            url: "https://pokeapi.co/api/v2/stat/6/",
          },
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "fire",
            url: "https://pokeapi.co/api/v2/type/10/",
          },
        },
      ],
      weight: 85,
    },
  },
  {
    id: 4,
    name: "charmeleon",
    pokemon_data: {
      abilities: [
        {
          ability: {
            name: "blaze",
            url: "https://pokeapi.co/api/v2/ability/66/",
          },
          is_hidden: false,
          slot: 1,
        },
        {
          ability: {
            name: "solar-power",
            url: "https://pokeapi.co/api/v2/ability/94/",
          },
          is_hidden: true,
          slot: 3,
        },
      ],
      base_experience: 142,
      height: 11,
      sprites: {
        back_default:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/5.png",
        back_female: null,
        back_shiny:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/shiny/5.png",
        back_shiny_female: null,
        front_default:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/5.png",
        front_female: null,
        front_shiny:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/shiny/5.png",
        front_shiny_female: null,
        other: {
          dream_world: {
            front_default:
              "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/5.svg",
            front_female: null,
          },
          "official-artwork": {
            front_default:
              "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/official-artwork/5.png",
          },
        },
        versions: {
          "generation-i": {
            "red-blue": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/5.png",
              back_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/5.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/5.png",
              front_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/5.png",
            },
            yellow: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/5.png",
              back_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/5.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/5.png",
              front_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/5.png",
            },
          },
          "generation-ii": {
            crystal: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/5.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/5.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/5.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/5.png",
            },
            gold: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/5.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/5.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/5.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/5.png",
            },
            silver: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/5.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/5.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/5.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/5.png",
            },
          },
          "generation-iii": {
            emerald: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/emerald/5.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/5.png",
            },
            "firered-leafgreen": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/5.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/5.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/5.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/5.png",
            },
            "ruby-sapphire": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/5.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/5.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/5.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/5.png",
            },
          },
          "generation-iv": {
            "diamond-pearl": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/5.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/5.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/5.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/5.png",
              front_shiny_female: null,
            },
            "heartgold-soulsilver": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/5.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/5.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/5.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/5.png",
              front_shiny_female: null,
            },
            platinum: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/5.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/5.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/5.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/5.png",
              front_shiny_female: null,
            },
          },
          "generation-v": {
            "black-white": {
              animated: {
                back_default:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/5.gif",
                back_female: null,
                back_shiny:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/5.gif",
                back_shiny_female: null,
                front_default:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/5.gif",
                front_female: null,
                front_shiny:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/5.gif",
                front_shiny_female: null,
              },
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/5.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/5.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/5.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/5.png",
              front_shiny_female: null,
            },
          },
          "generation-vi": {
            "omegaruby-alphasapphire": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/5.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/5.png",
              front_shiny_female: null,
            },
            "x-y": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/5.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/5.png",
              front_shiny_female: null,
            },
          },
          "generation-vii": {
            icons: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/icons/5.png",
              front_female: null,
            },
            "ultra-sun-ultra-moon": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/5.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/5.png",
              front_shiny_female: null,
            },
          },
          "generation-viii": {
            icons: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-viii/icons/5.png",
              front_female: null,
            },
          },
        },
      },
      stats: [
        {
          base_stat: 58,
          effort: 0,
          stat: {
            name: "hp",
            url: "https://pokeapi.co/api/v2/stat/1/",
          },
        },
        {
          base_stat: 64,
          effort: 0,
          stat: {
            name: "attack",
            url: "https://pokeapi.co/api/v2/stat/2/",
          },
        },
        {
          base_stat: 58,
          effort: 0,
          stat: {
            name: "defense",
            url: "https://pokeapi.co/api/v2/stat/3/",
          },
        },
        {
          base_stat: 80,
          effort: 1,
          stat: {
            name: "special-attack",
            url: "https://pokeapi.co/api/v2/stat/4/",
          },
        },
        {
          base_stat: 65,
          effort: 0,
          stat: {
            name: "special-defense",
            url: "https://pokeapi.co/api/v2/stat/5/",
          },
        },
        {
          base_stat: 80,
          effort: 1,
          stat: {
            name: "speed",
            url: "https://pokeapi.co/api/v2/stat/6/",
          },
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "fire",
            url: "https://pokeapi.co/api/v2/type/10/",
          },
        },
      ],
      weight: 190,
    },
  },
  {
    id: 5,
    name: "charizard",
    pokemon_data: {
      abilities: [
        {
          ability: {
            name: "blaze",
            url: "https://pokeapi.co/api/v2/ability/66/",
          },
          is_hidden: false,
          slot: 1,
        },
        {
          ability: {
            name: "solar-power",
            url: "https://pokeapi.co/api/v2/ability/94/",
          },
          is_hidden: true,
          slot: 3,
        },
      ],
      base_experience: 240,
      height: 17,
      sprites: {
        back_default:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/6.png",
        back_female: null,
        back_shiny:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/shiny/6.png",
        back_shiny_female: null,
        front_default:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/6.png",
        front_female: null,
        front_shiny:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/shiny/6.png",
        front_shiny_female: null,
        other: {
          dream_world: {
            front_default:
              "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/6.svg",
            front_female: null,
          },
          "official-artwork": {
            front_default:
              "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/official-artwork/6.png",
          },
        },
        versions: {
          "generation-i": {
            "red-blue": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/6.png",
              back_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/6.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/6.png",
              front_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/6.png",
            },
            yellow: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/6.png",
              back_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/6.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/6.png",
              front_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/6.png",
            },
          },
          "generation-ii": {
            crystal: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/6.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/6.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/6.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/6.png",
            },
            gold: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/6.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/6.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/6.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/6.png",
            },
            silver: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/6.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/6.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/6.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/6.png",
            },
          },
          "generation-iii": {
            emerald: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/emerald/6.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/6.png",
            },
            "firered-leafgreen": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/6.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/6.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/6.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/6.png",
            },
            "ruby-sapphire": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/6.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/6.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/6.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/6.png",
            },
          },
          "generation-iv": {
            "diamond-pearl": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/6.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/6.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/6.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/6.png",
              front_shiny_female: null,
            },
            "heartgold-soulsilver": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/6.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/6.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/6.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/6.png",
              front_shiny_female: null,
            },
            platinum: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/6.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/6.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/6.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/6.png",
              front_shiny_female: null,
            },
          },
          "generation-v": {
            "black-white": {
              animated: {
                back_default:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/6.gif",
                back_female: null,
                back_shiny:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/6.gif",
                back_shiny_female: null,
                front_default:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/6.gif",
                front_female: null,
                front_shiny:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/6.gif",
                front_shiny_female: null,
              },
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/6.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/6.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/6.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/6.png",
              front_shiny_female: null,
            },
          },
          "generation-vi": {
            "omegaruby-alphasapphire": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/6.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/6.png",
              front_shiny_female: null,
            },
            "x-y": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/6.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/6.png",
              front_shiny_female: null,
            },
          },
          "generation-vii": {
            icons: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/icons/6.png",
              front_female: null,
            },
            "ultra-sun-ultra-moon": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/6.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/6.png",
              front_shiny_female: null,
            },
          },
          "generation-viii": {
            icons: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-viii/icons/6.png",
              front_female: null,
            },
          },
        },
      },
      stats: [
        {
          base_stat: 78,
          effort: 0,
          stat: {
            name: "hp",
            url: "https://pokeapi.co/api/v2/stat/1/",
          },
        },
        {
          base_stat: 84,
          effort: 0,
          stat: {
            name: "attack",
            url: "https://pokeapi.co/api/v2/stat/2/",
          },
        },
        {
          base_stat: 78,
          effort: 0,
          stat: {
            name: "defense",
            url: "https://pokeapi.co/api/v2/stat/3/",
          },
        },
        {
          base_stat: 109,
          effort: 3,
          stat: {
            name: "special-attack",
            url: "https://pokeapi.co/api/v2/stat/4/",
          },
        },
        {
          base_stat: 85,
          effort: 0,
          stat: {
            name: "special-defense",
            url: "https://pokeapi.co/api/v2/stat/5/",
          },
        },
        {
          base_stat: 100,
          effort: 0,
          stat: {
            name: "speed",
            url: "https://pokeapi.co/api/v2/stat/6/",
          },
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "fire",
            url: "https://pokeapi.co/api/v2/type/10/",
          },
        },
        {
          slot: 2,
          type: {
            name: "flying",
            url: "https://pokeapi.co/api/v2/type/3/",
          },
        },
      ],
      weight: 905,
    },
  },
  {
    id: 6,
    name: "squirtle",
    pokemon_data: {
      abilities: [
        {
          ability: {
            name: "torrent",
            url: "https://pokeapi.co/api/v2/ability/67/",
          },
          is_hidden: false,
          slot: 1,
        },
        {
          ability: {
            name: "rain-dish",
            url: "https://pokeapi.co/api/v2/ability/44/",
          },
          is_hidden: true,
          slot: 3,
        },
      ],
      base_experience: 63,
      height: 5,
      sprites: {
        back_default:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/7.png",
        back_female: null,
        back_shiny:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/shiny/7.png",
        back_shiny_female: null,
        front_default:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/7.png",
        front_female: null,
        front_shiny:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/shiny/7.png",
        front_shiny_female: null,
        other: {
          dream_world: {
            front_default:
              "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/7.svg",
            front_female: null,
          },
          "official-artwork": {
            front_default:
              "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/official-artwork/7.png",
          },
        },
        versions: {
          "generation-i": {
            "red-blue": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/7.png",
              back_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/7.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/7.png",
              front_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/7.png",
            },
            yellow: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/7.png",
              back_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/7.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/7.png",
              front_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/7.png",
            },
          },
          "generation-ii": {
            crystal: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/7.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/7.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/7.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/7.png",
            },
            gold: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/7.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/7.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/7.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/7.png",
            },
            silver: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/7.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/7.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/7.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/7.png",
            },
          },
          "generation-iii": {
            emerald: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/emerald/7.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/7.png",
            },
            "firered-leafgreen": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/7.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/7.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/7.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/7.png",
            },
            "ruby-sapphire": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/7.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/7.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/7.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/7.png",
            },
          },
          "generation-iv": {
            "diamond-pearl": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/7.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/7.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/7.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/7.png",
              front_shiny_female: null,
            },
            "heartgold-soulsilver": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/7.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/7.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/7.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/7.png",
              front_shiny_female: null,
            },
            platinum: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/7.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/7.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/7.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/7.png",
              front_shiny_female: null,
            },
          },
          "generation-v": {
            "black-white": {
              animated: {
                back_default:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/7.gif",
                back_female: null,
                back_shiny:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/7.gif",
                back_shiny_female: null,
                front_default:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/7.gif",
                front_female: null,
                front_shiny:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/7.gif",
                front_shiny_female: null,
              },
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/7.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/7.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/7.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/7.png",
              front_shiny_female: null,
            },
          },
          "generation-vi": {
            "omegaruby-alphasapphire": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/7.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/7.png",
              front_shiny_female: null,
            },
            "x-y": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/7.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/7.png",
              front_shiny_female: null,
            },
          },
          "generation-vii": {
            icons: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/icons/7.png",
              front_female: null,
            },
            "ultra-sun-ultra-moon": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/7.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/7.png",
              front_shiny_female: null,
            },
          },
          "generation-viii": {
            icons: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-viii/icons/7.png",
              front_female: null,
            },
          },
        },
      },
      stats: [
        {
          base_stat: 44,
          effort: 0,
          stat: {
            name: "hp",
            url: "https://pokeapi.co/api/v2/stat/1/",
          },
        },
        {
          base_stat: 48,
          effort: 0,
          stat: {
            name: "attack",
            url: "https://pokeapi.co/api/v2/stat/2/",
          },
        },
        {
          base_stat: 65,
          effort: 1,
          stat: {
            name: "defense",
            url: "https://pokeapi.co/api/v2/stat/3/",
          },
        },
        {
          base_stat: 50,
          effort: 0,
          stat: {
            name: "special-attack",
            url: "https://pokeapi.co/api/v2/stat/4/",
          },
        },
        {
          base_stat: 64,
          effort: 0,
          stat: {
            name: "special-defense",
            url: "https://pokeapi.co/api/v2/stat/5/",
          },
        },
        {
          base_stat: 43,
          effort: 0,
          stat: {
            name: "speed",
            url: "https://pokeapi.co/api/v2/stat/6/",
          },
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "water",
            url: "https://pokeapi.co/api/v2/type/11/",
          },
        },
      ],
      weight: 90,
    },
  },
  {
    id: 7,
    name: "wartortle",
    pokemon_data: {
      abilities: [
        {
          ability: {
            name: "torrent",
            url: "https://pokeapi.co/api/v2/ability/67/",
          },
          is_hidden: false,
          slot: 1,
        },
        {
          ability: {
            name: "rain-dish",
            url: "https://pokeapi.co/api/v2/ability/44/",
          },
          is_hidden: true,
          slot: 3,
        },
      ],
      base_experience: 142,
      height: 10,
      sprites: {
        back_default:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/8.png",
        back_female: null,
        back_shiny:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/shiny/8.png",
        back_shiny_female: null,
        front_default:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/8.png",
        front_female: null,
        front_shiny:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/shiny/8.png",
        front_shiny_female: null,
        other: {
          dream_world: {
            front_default:
              "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/8.svg",
            front_female: null,
          },
          "official-artwork": {
            front_default:
              "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/official-artwork/8.png",
          },
        },
        versions: {
          "generation-i": {
            "red-blue": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/8.png",
              back_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/8.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/8.png",
              front_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/8.png",
            },
            yellow: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/8.png",
              back_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/8.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/8.png",
              front_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/8.png",
            },
          },
          "generation-ii": {
            crystal: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/8.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/8.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/8.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/8.png",
            },
            gold: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/8.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/8.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/8.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/8.png",
            },
            silver: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/8.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/8.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/8.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/8.png",
            },
          },
          "generation-iii": {
            emerald: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/emerald/8.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/8.png",
            },
            "firered-leafgreen": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/8.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/8.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/8.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/8.png",
            },
            "ruby-sapphire": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/8.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/8.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/8.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/8.png",
            },
          },
          "generation-iv": {
            "diamond-pearl": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/8.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/8.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/8.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/8.png",
              front_shiny_female: null,
            },
            "heartgold-soulsilver": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/8.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/8.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/8.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/8.png",
              front_shiny_female: null,
            },
            platinum: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/8.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/8.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/8.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/8.png",
              front_shiny_female: null,
            },
          },
          "generation-v": {
            "black-white": {
              animated: {
                back_default:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/8.gif",
                back_female: null,
                back_shiny:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/8.gif",
                back_shiny_female: null,
                front_default:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/8.gif",
                front_female: null,
                front_shiny:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/8.gif",
                front_shiny_female: null,
              },
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/8.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/8.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/8.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/8.png",
              front_shiny_female: null,
            },
          },
          "generation-vi": {
            "omegaruby-alphasapphire": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/8.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/8.png",
              front_shiny_female: null,
            },
            "x-y": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/8.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/8.png",
              front_shiny_female: null,
            },
          },
          "generation-vii": {
            icons: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/icons/8.png",
              front_female: null,
            },
            "ultra-sun-ultra-moon": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/8.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/8.png",
              front_shiny_female: null,
            },
          },
          "generation-viii": {
            icons: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-viii/icons/8.png",
              front_female: null,
            },
          },
        },
      },
      stats: [
        {
          base_stat: 59,
          effort: 0,
          stat: {
            name: "hp",
            url: "https://pokeapi.co/api/v2/stat/1/",
          },
        },
        {
          base_stat: 63,
          effort: 0,
          stat: {
            name: "attack",
            url: "https://pokeapi.co/api/v2/stat/2/",
          },
        },
        {
          base_stat: 80,
          effort: 1,
          stat: {
            name: "defense",
            url: "https://pokeapi.co/api/v2/stat/3/",
          },
        },
        {
          base_stat: 65,
          effort: 0,
          stat: {
            name: "special-attack",
            url: "https://pokeapi.co/api/v2/stat/4/",
          },
        },
        {
          base_stat: 80,
          effort: 1,
          stat: {
            name: "special-defense",
            url: "https://pokeapi.co/api/v2/stat/5/",
          },
        },
        {
          base_stat: 58,
          effort: 0,
          stat: {
            name: "speed",
            url: "https://pokeapi.co/api/v2/stat/6/",
          },
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "water",
            url: "https://pokeapi.co/api/v2/type/11/",
          },
        },
      ],
      weight: 225,
    },
  },
  {
    id: 8,
    name: "blastoise",
    pokemon_data: {
      abilities: [
        {
          ability: {
            name: "torrent",
            url: "https://pokeapi.co/api/v2/ability/67/",
          },
          is_hidden: false,
          slot: 1,
        },
        {
          ability: {
            name: "rain-dish",
            url: "https://pokeapi.co/api/v2/ability/44/",
          },
          is_hidden: true,
          slot: 3,
        },
      ],
      base_experience: 239,
      height: 16,
      sprites: {
        back_default:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/9.png",
        back_female: null,
        back_shiny:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/shiny/9.png",
        back_shiny_female: null,
        front_default:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/9.png",
        front_female: null,
        front_shiny:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/shiny/9.png",
        front_shiny_female: null,
        other: {
          dream_world: {
            front_default:
              "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/9.svg",
            front_female: null,
          },
          "official-artwork": {
            front_default:
              "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/official-artwork/9.png",
          },
        },
        versions: {
          "generation-i": {
            "red-blue": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/9.png",
              back_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/9.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/9.png",
              front_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/9.png",
            },
            yellow: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/9.png",
              back_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/9.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/9.png",
              front_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/9.png",
            },
          },
          "generation-ii": {
            crystal: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/9.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/9.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/9.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/9.png",
            },
            gold: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/9.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/9.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/9.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/9.png",
            },
            silver: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/9.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/9.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/9.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/9.png",
            },
          },
          "generation-iii": {
            emerald: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/emerald/9.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/9.png",
            },
            "firered-leafgreen": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/9.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/9.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/9.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/9.png",
            },
            "ruby-sapphire": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/9.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/9.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/9.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/9.png",
            },
          },
          "generation-iv": {
            "diamond-pearl": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/9.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/9.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/9.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/9.png",
              front_shiny_female: null,
            },
            "heartgold-soulsilver": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/9.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/9.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/9.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/9.png",
              front_shiny_female: null,
            },
            platinum: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/9.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/9.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/9.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/9.png",
              front_shiny_female: null,
            },
          },
          "generation-v": {
            "black-white": {
              animated: {
                back_default:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/9.gif",
                back_female: null,
                back_shiny:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/9.gif",
                back_shiny_female: null,
                front_default:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/9.gif",
                front_female: null,
                front_shiny:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/9.gif",
                front_shiny_female: null,
              },
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/9.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/9.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/9.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/9.png",
              front_shiny_female: null,
            },
          },
          "generation-vi": {
            "omegaruby-alphasapphire": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/9.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/9.png",
              front_shiny_female: null,
            },
            "x-y": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/9.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/9.png",
              front_shiny_female: null,
            },
          },
          "generation-vii": {
            icons: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/icons/9.png",
              front_female: null,
            },
            "ultra-sun-ultra-moon": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/9.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/9.png",
              front_shiny_female: null,
            },
          },
          "generation-viii": {
            icons: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-viii/icons/9.png",
              front_female: null,
            },
          },
        },
      },
      stats: [
        {
          base_stat: 79,
          effort: 0,
          stat: {
            name: "hp",
            url: "https://pokeapi.co/api/v2/stat/1/",
          },
        },
        {
          base_stat: 83,
          effort: 0,
          stat: {
            name: "attack",
            url: "https://pokeapi.co/api/v2/stat/2/",
          },
        },
        {
          base_stat: 100,
          effort: 0,
          stat: {
            name: "defense",
            url: "https://pokeapi.co/api/v2/stat/3/",
          },
        },
        {
          base_stat: 85,
          effort: 0,
          stat: {
            name: "special-attack",
            url: "https://pokeapi.co/api/v2/stat/4/",
          },
        },
        {
          base_stat: 105,
          effort: 3,
          stat: {
            name: "special-defense",
            url: "https://pokeapi.co/api/v2/stat/5/",
          },
        },
        {
          base_stat: 78,
          effort: 0,
          stat: {
            name: "speed",
            url: "https://pokeapi.co/api/v2/stat/6/",
          },
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "water",
            url: "https://pokeapi.co/api/v2/type/11/",
          },
        },
      ],
      weight: 855,
    },
  },
  {
    id: 9,
    name: "caterpie",
    pokemon_data: {
      abilities: [
        {
          ability: {
            name: "shield-dust",
            url: "https://pokeapi.co/api/v2/ability/19/",
          },
          is_hidden: false,
          slot: 1,
        },
        {
          ability: {
            name: "run-away",
            url: "https://pokeapi.co/api/v2/ability/50/",
          },
          is_hidden: true,
          slot: 3,
        },
      ],
      base_experience: 39,
      height: 3,
      sprites: {
        back_default:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/10.png",
        back_female: null,
        back_shiny:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/shiny/10.png",
        back_shiny_female: null,
        front_default:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/10.png",
        front_female: null,
        front_shiny:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/shiny/10.png",
        front_shiny_female: null,
        other: {
          dream_world: {
            front_default:
              "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/10.svg",
            front_female: null,
          },
          "official-artwork": {
            front_default:
              "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/official-artwork/10.png",
          },
        },
        versions: {
          "generation-i": {
            "red-blue": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/10.png",
              back_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/10.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/10.png",
              front_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/10.png",
            },
            yellow: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/10.png",
              back_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/10.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/10.png",
              front_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/10.png",
            },
          },
          "generation-ii": {
            crystal: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/10.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/10.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/10.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/10.png",
            },
            gold: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/10.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/10.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/10.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/10.png",
            },
            silver: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/10.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/10.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/10.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/10.png",
            },
          },
          "generation-iii": {
            emerald: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/emerald/10.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/10.png",
            },
            "firered-leafgreen": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/10.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/10.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/10.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/10.png",
            },
            "ruby-sapphire": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/10.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/10.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/10.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/10.png",
            },
          },
          "generation-iv": {
            "diamond-pearl": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/10.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/10.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/10.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/10.png",
              front_shiny_female: null,
            },
            "heartgold-soulsilver": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/10.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/10.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/10.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/10.png",
              front_shiny_female: null,
            },
            platinum: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/10.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/10.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/10.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/10.png",
              front_shiny_female: null,
            },
          },
          "generation-v": {
            "black-white": {
              animated: {
                back_default:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/10.gif",
                back_female: null,
                back_shiny:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/10.gif",
                back_shiny_female: null,
                front_default:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/10.gif",
                front_female: null,
                front_shiny:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/10.gif",
                front_shiny_female: null,
              },
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/10.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/10.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/10.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/10.png",
              front_shiny_female: null,
            },
          },
          "generation-vi": {
            "omegaruby-alphasapphire": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/10.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/10.png",
              front_shiny_female: null,
            },
            "x-y": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/10.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/10.png",
              front_shiny_female: null,
            },
          },
          "generation-vii": {
            icons: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/icons/10.png",
              front_female: null,
            },
            "ultra-sun-ultra-moon": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/10.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/10.png",
              front_shiny_female: null,
            },
          },
          "generation-viii": {
            icons: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-viii/icons/10.png",
              front_female: null,
            },
          },
        },
      },
      stats: [
        {
          base_stat: 45,
          effort: 1,
          stat: {
            name: "hp",
            url: "https://pokeapi.co/api/v2/stat/1/",
          },
        },
        {
          base_stat: 30,
          effort: 0,
          stat: {
            name: "attack",
            url: "https://pokeapi.co/api/v2/stat/2/",
          },
        },
        {
          base_stat: 35,
          effort: 0,
          stat: {
            name: "defense",
            url: "https://pokeapi.co/api/v2/stat/3/",
          },
        },
        {
          base_stat: 20,
          effort: 0,
          stat: {
            name: "special-attack",
            url: "https://pokeapi.co/api/v2/stat/4/",
          },
        },
        {
          base_stat: 20,
          effort: 0,
          stat: {
            name: "special-defense",
            url: "https://pokeapi.co/api/v2/stat/5/",
          },
        },
        {
          base_stat: 45,
          effort: 0,
          stat: {
            name: "speed",
            url: "https://pokeapi.co/api/v2/stat/6/",
          },
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "bug",
            url: "https://pokeapi.co/api/v2/type/7/",
          },
        },
      ],
      weight: 29,
    },
  },
  {
    id: 10,
    name: "metapod",
    pokemon_data: {
      abilities: [
        {
          ability: {
            name: "shed-skin",
            url: "https://pokeapi.co/api/v2/ability/61/",
          },
          is_hidden: false,
          slot: 1,
        },
      ],
      base_experience: 72,
      height: 7,
      sprites: {
        back_default:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/11.png",
        back_female: null,
        back_shiny:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/shiny/11.png",
        back_shiny_female: null,
        front_default:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/11.png",
        front_female: null,
        front_shiny:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/shiny/11.png",
        front_shiny_female: null,
        other: {
          dream_world: {
            front_default:
              "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/11.svg",
            front_female: null,
          },
          "official-artwork": {
            front_default:
              "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/official-artwork/11.png",
          },
        },
        versions: {
          "generation-i": {
            "red-blue": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/11.png",
              back_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/11.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/11.png",
              front_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/11.png",
            },
            yellow: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/11.png",
              back_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/11.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/11.png",
              front_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/11.png",
            },
          },
          "generation-ii": {
            crystal: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/11.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/11.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/11.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/11.png",
            },
            gold: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/11.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/11.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/11.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/11.png",
            },
            silver: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/11.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/11.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/11.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/11.png",
            },
          },
          "generation-iii": {
            emerald: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/emerald/11.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/11.png",
            },
            "firered-leafgreen": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/11.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/11.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/11.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/11.png",
            },
            "ruby-sapphire": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/11.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/11.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/11.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/11.png",
            },
          },
          "generation-iv": {
            "diamond-pearl": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/11.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/11.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/11.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/11.png",
              front_shiny_female: null,
            },
            "heartgold-soulsilver": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/11.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/11.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/11.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/11.png",
              front_shiny_female: null,
            },
            platinum: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/11.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/11.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/11.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/11.png",
              front_shiny_female: null,
            },
          },
          "generation-v": {
            "black-white": {
              animated: {
                back_default:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/11.gif",
                back_female: null,
                back_shiny:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/11.gif",
                back_shiny_female: null,
                front_default:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/11.gif",
                front_female: null,
                front_shiny:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/11.gif",
                front_shiny_female: null,
              },
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/11.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/11.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/11.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/11.png",
              front_shiny_female: null,
            },
          },
          "generation-vi": {
            "omegaruby-alphasapphire": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/11.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/11.png",
              front_shiny_female: null,
            },
            "x-y": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/11.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/11.png",
              front_shiny_female: null,
            },
          },
          "generation-vii": {
            icons: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/icons/11.png",
              front_female: null,
            },
            "ultra-sun-ultra-moon": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/11.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/11.png",
              front_shiny_female: null,
            },
          },
          "generation-viii": {
            icons: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-viii/icons/11.png",
              front_female: null,
            },
          },
        },
      },
      stats: [
        {
          base_stat: 50,
          effort: 0,
          stat: {
            name: "hp",
            url: "https://pokeapi.co/api/v2/stat/1/",
          },
        },
        {
          base_stat: 20,
          effort: 0,
          stat: {
            name: "attack",
            url: "https://pokeapi.co/api/v2/stat/2/",
          },
        },
        {
          base_stat: 55,
          effort: 2,
          stat: {
            name: "defense",
            url: "https://pokeapi.co/api/v2/stat/3/",
          },
        },
        {
          base_stat: 25,
          effort: 0,
          stat: {
            name: "special-attack",
            url: "https://pokeapi.co/api/v2/stat/4/",
          },
        },
        {
          base_stat: 25,
          effort: 0,
          stat: {
            name: "special-defense",
            url: "https://pokeapi.co/api/v2/stat/5/",
          },
        },
        {
          base_stat: 30,
          effort: 0,
          stat: {
            name: "speed",
            url: "https://pokeapi.co/api/v2/stat/6/",
          },
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "bug",
            url: "https://pokeapi.co/api/v2/type/7/",
          },
        },
      ],
      weight: 99,
    },
  },
  {
    id: 11,
    name: "butterfree",
    pokemon_data: {
      abilities: [
        {
          ability: {
            name: "compound-eyes",
            url: "https://pokeapi.co/api/v2/ability/14/",
          },
          is_hidden: false,
          slot: 1,
        },
        {
          ability: {
            name: "tinted-lens",
            url: "https://pokeapi.co/api/v2/ability/110/",
          },
          is_hidden: true,
          slot: 3,
        },
      ],
      base_experience: 178,
      height: 11,
      sprites: {
        back_default:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/12.png",
        back_female:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/female/12.png",
        back_shiny:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/shiny/12.png",
        back_shiny_female:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/shiny/female/12.png",
        front_default:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/12.png",
        front_female:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/female/12.png",
        front_shiny:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/shiny/12.png",
        front_shiny_female:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/shiny/female/12.png",
        other: {
          dream_world: {
            front_default:
              "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/12.svg",
            front_female: null,
          },
          "official-artwork": {
            front_default:
              "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/official-artwork/12.png",
          },
        },
        versions: {
          "generation-i": {
            "red-blue": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/12.png",
              back_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/12.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/12.png",
              front_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/12.png",
            },
            yellow: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/12.png",
              back_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/12.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/12.png",
              front_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/12.png",
            },
          },
          "generation-ii": {
            crystal: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/12.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/12.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/12.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/12.png",
            },
            gold: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/12.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/12.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/12.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/12.png",
            },
            silver: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/12.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/12.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/12.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/12.png",
            },
          },
          "generation-iii": {
            emerald: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/emerald/12.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/12.png",
            },
            "firered-leafgreen": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/12.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/12.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/12.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/12.png",
            },
            "ruby-sapphire": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/12.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/12.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/12.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/12.png",
            },
          },
          "generation-iv": {
            "diamond-pearl": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/12.png",
              back_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/female/12.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/12.png",
              back_shiny_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/female/12.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/12.png",
              front_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/female/12.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/12.png",
              front_shiny_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/female/12.png",
            },
            "heartgold-soulsilver": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/12.png",
              back_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/female/12.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/12.png",
              back_shiny_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/female/12.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/12.png",
              front_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/female/12.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/12.png",
              front_shiny_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/female/12.png",
            },
            platinum: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/12.png",
              back_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/female/12.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/12.png",
              back_shiny_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/female/12.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/12.png",
              front_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/female/12.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/12.png",
              front_shiny_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/female/12.png",
            },
          },
          "generation-v": {
            "black-white": {
              animated: {
                back_default:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/12.gif",
                back_female:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/female/12.gif",
                back_shiny:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/12.gif",
                back_shiny_female:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/female/12.gif",
                front_default:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/12.gif",
                front_female:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/female/12.gif",
                front_shiny:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/12.gif",
                front_shiny_female:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/female/12.gif",
              },
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/12.png",
              back_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/female/12.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/12.png",
              back_shiny_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/female/12.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/12.png",
              front_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/female/12.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/12.png",
              front_shiny_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/female/12.png",
            },
          },
          "generation-vi": {
            "omegaruby-alphasapphire": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/12.png",
              front_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/female/12.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/12.png",
              front_shiny_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/female/12.png",
            },
            "x-y": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/12.png",
              front_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/female/12.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/12.png",
              front_shiny_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/female/12.png",
            },
          },
          "generation-vii": {
            icons: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/icons/12.png",
              front_female: null,
            },
            "ultra-sun-ultra-moon": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/12.png",
              front_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/female/12.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/12.png",
              front_shiny_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/female/12.png",
            },
          },
          "generation-viii": {
            icons: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-viii/icons/12.png",
              front_female: null,
            },
          },
        },
      },
      stats: [
        {
          base_stat: 60,
          effort: 0,
          stat: {
            name: "hp",
            url: "https://pokeapi.co/api/v2/stat/1/",
          },
        },
        {
          base_stat: 45,
          effort: 0,
          stat: {
            name: "attack",
            url: "https://pokeapi.co/api/v2/stat/2/",
          },
        },
        {
          base_stat: 50,
          effort: 0,
          stat: {
            name: "defense",
            url: "https://pokeapi.co/api/v2/stat/3/",
          },
        },
        {
          base_stat: 90,
          effort: 2,
          stat: {
            name: "special-attack",
            url: "https://pokeapi.co/api/v2/stat/4/",
          },
        },
        {
          base_stat: 80,
          effort: 1,
          stat: {
            name: "special-defense",
            url: "https://pokeapi.co/api/v2/stat/5/",
          },
        },
        {
          base_stat: 70,
          effort: 0,
          stat: {
            name: "speed",
            url: "https://pokeapi.co/api/v2/stat/6/",
          },
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "bug",
            url: "https://pokeapi.co/api/v2/type/7/",
          },
        },
        {
          slot: 2,
          type: {
            name: "flying",
            url: "https://pokeapi.co/api/v2/type/3/",
          },
        },
      ],
      weight: 320,
    },
  },
  {
    id: 12,
    name: "weedle",
    pokemon_data: {
      abilities: [
        {
          ability: {
            name: "shield-dust",
            url: "https://pokeapi.co/api/v2/ability/19/",
          },
          is_hidden: false,
          slot: 1,
        },
        {
          ability: {
            name: "run-away",
            url: "https://pokeapi.co/api/v2/ability/50/",
          },
          is_hidden: true,
          slot: 3,
        },
      ],
      base_experience: 39,
      height: 3,
      sprites: {
        back_default:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/13.png",
        back_female: null,
        back_shiny:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/shiny/13.png",
        back_shiny_female: null,
        front_default:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/13.png",
        front_female: null,
        front_shiny:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/shiny/13.png",
        front_shiny_female: null,
        other: {
          dream_world: {
            front_default:
              "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/13.svg",
            front_female: null,
          },
          "official-artwork": {
            front_default:
              "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/official-artwork/13.png",
          },
        },
        versions: {
          "generation-i": {
            "red-blue": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/13.png",
              back_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/13.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/13.png",
              front_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/13.png",
            },
            yellow: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/13.png",
              back_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/13.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/13.png",
              front_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/13.png",
            },
          },
          "generation-ii": {
            crystal: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/13.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/13.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/13.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/13.png",
            },
            gold: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/13.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/13.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/13.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/13.png",
            },
            silver: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/13.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/13.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/13.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/13.png",
            },
          },
          "generation-iii": {
            emerald: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/emerald/13.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/13.png",
            },
            "firered-leafgreen": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/13.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/13.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/13.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/13.png",
            },
            "ruby-sapphire": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/13.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/13.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/13.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/13.png",
            },
          },
          "generation-iv": {
            "diamond-pearl": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/13.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/13.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/13.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/13.png",
              front_shiny_female: null,
            },
            "heartgold-soulsilver": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/13.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/13.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/13.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/13.png",
              front_shiny_female: null,
            },
            platinum: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/13.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/13.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/13.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/13.png",
              front_shiny_female: null,
            },
          },
          "generation-v": {
            "black-white": {
              animated: {
                back_default:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/13.gif",
                back_female: null,
                back_shiny:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/13.gif",
                back_shiny_female: null,
                front_default:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/13.gif",
                front_female: null,
                front_shiny:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/13.gif",
                front_shiny_female: null,
              },
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/13.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/13.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/13.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/13.png",
              front_shiny_female: null,
            },
          },
          "generation-vi": {
            "omegaruby-alphasapphire": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/13.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/13.png",
              front_shiny_female: null,
            },
            "x-y": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/13.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/13.png",
              front_shiny_female: null,
            },
          },
          "generation-vii": {
            icons: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/icons/13.png",
              front_female: null,
            },
            "ultra-sun-ultra-moon": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/13.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/13.png",
              front_shiny_female: null,
            },
          },
          "generation-viii": {
            icons: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-viii/icons/13.png",
              front_female: null,
            },
          },
        },
      },
      stats: [
        {
          base_stat: 40,
          effort: 0,
          stat: {
            name: "hp",
            url: "https://pokeapi.co/api/v2/stat/1/",
          },
        },
        {
          base_stat: 35,
          effort: 0,
          stat: {
            name: "attack",
            url: "https://pokeapi.co/api/v2/stat/2/",
          },
        },
        {
          base_stat: 30,
          effort: 0,
          stat: {
            name: "defense",
            url: "https://pokeapi.co/api/v2/stat/3/",
          },
        },
        {
          base_stat: 20,
          effort: 0,
          stat: {
            name: "special-attack",
            url: "https://pokeapi.co/api/v2/stat/4/",
          },
        },
        {
          base_stat: 20,
          effort: 0,
          stat: {
            name: "special-defense",
            url: "https://pokeapi.co/api/v2/stat/5/",
          },
        },
        {
          base_stat: 50,
          effort: 1,
          stat: {
            name: "speed",
            url: "https://pokeapi.co/api/v2/stat/6/",
          },
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "bug",
            url: "https://pokeapi.co/api/v2/type/7/",
          },
        },
        {
          slot: 2,
          type: {
            name: "poison",
            url: "https://pokeapi.co/api/v2/type/4/",
          },
        },
      ],
      weight: 32,
    },
  },
  {
    id: 13,
    name: "kakuna",
    pokemon_data: {
      abilities: [
        {
          ability: {
            name: "shed-skin",
            url: "https://pokeapi.co/api/v2/ability/61/",
          },
          is_hidden: false,
          slot: 1,
        },
      ],
      base_experience: 72,
      height: 6,
      sprites: {
        back_default:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/14.png",
        back_female: null,
        back_shiny:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/shiny/14.png",
        back_shiny_female: null,
        front_default:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/14.png",
        front_female: null,
        front_shiny:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/shiny/14.png",
        front_shiny_female: null,
        other: {
          dream_world: {
            front_default:
              "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/14.svg",
            front_female: null,
          },
          "official-artwork": {
            front_default:
              "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/official-artwork/14.png",
          },
        },
        versions: {
          "generation-i": {
            "red-blue": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/14.png",
              back_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/14.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/14.png",
              front_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/14.png",
            },
            yellow: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/14.png",
              back_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/14.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/14.png",
              front_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/14.png",
            },
          },
          "generation-ii": {
            crystal: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/14.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/14.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/14.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/14.png",
            },
            gold: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/14.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/14.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/14.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/14.png",
            },
            silver: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/14.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/14.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/14.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/14.png",
            },
          },
          "generation-iii": {
            emerald: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/emerald/14.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/14.png",
            },
            "firered-leafgreen": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/14.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/14.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/14.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/14.png",
            },
            "ruby-sapphire": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/14.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/14.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/14.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/14.png",
            },
          },
          "generation-iv": {
            "diamond-pearl": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/14.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/14.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/14.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/14.png",
              front_shiny_female: null,
            },
            "heartgold-soulsilver": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/14.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/14.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/14.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/14.png",
              front_shiny_female: null,
            },
            platinum: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/14.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/14.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/14.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/14.png",
              front_shiny_female: null,
            },
          },
          "generation-v": {
            "black-white": {
              animated: {
                back_default:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/14.gif",
                back_female: null,
                back_shiny:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/14.gif",
                back_shiny_female: null,
                front_default:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/14.gif",
                front_female: null,
                front_shiny:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/14.gif",
                front_shiny_female: null,
              },
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/14.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/14.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/14.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/14.png",
              front_shiny_female: null,
            },
          },
          "generation-vi": {
            "omegaruby-alphasapphire": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/14.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/14.png",
              front_shiny_female: null,
            },
            "x-y": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/14.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/14.png",
              front_shiny_female: null,
            },
          },
          "generation-vii": {
            icons: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/icons/14.png",
              front_female: null,
            },
            "ultra-sun-ultra-moon": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/14.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/14.png",
              front_shiny_female: null,
            },
          },
          "generation-viii": {
            icons: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-viii/icons/14.png",
              front_female: null,
            },
          },
        },
      },
      stats: [
        {
          base_stat: 45,
          effort: 0,
          stat: {
            name: "hp",
            url: "https://pokeapi.co/api/v2/stat/1/",
          },
        },
        {
          base_stat: 25,
          effort: 0,
          stat: {
            name: "attack",
            url: "https://pokeapi.co/api/v2/stat/2/",
          },
        },
        {
          base_stat: 50,
          effort: 2,
          stat: {
            name: "defense",
            url: "https://pokeapi.co/api/v2/stat/3/",
          },
        },
        {
          base_stat: 25,
          effort: 0,
          stat: {
            name: "special-attack",
            url: "https://pokeapi.co/api/v2/stat/4/",
          },
        },
        {
          base_stat: 25,
          effort: 0,
          stat: {
            name: "special-defense",
            url: "https://pokeapi.co/api/v2/stat/5/",
          },
        },
        {
          base_stat: 35,
          effort: 0,
          stat: {
            name: "speed",
            url: "https://pokeapi.co/api/v2/stat/6/",
          },
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "bug",
            url: "https://pokeapi.co/api/v2/type/7/",
          },
        },
        {
          slot: 2,
          type: {
            name: "poison",
            url: "https://pokeapi.co/api/v2/type/4/",
          },
        },
      ],
      weight: 100,
    },
  },
  {
    id: 14,
    name: "beedrill",
    pokemon_data: {
      abilities: [
        {
          ability: {
            name: "swarm",
            url: "https://pokeapi.co/api/v2/ability/68/",
          },
          is_hidden: false,
          slot: 1,
        },
        {
          ability: {
            name: "sniper",
            url: "https://pokeapi.co/api/v2/ability/97/",
          },
          is_hidden: true,
          slot: 3,
        },
      ],
      base_experience: 178,
      height: 10,
      sprites: {
        back_default:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/15.png",
        back_female: null,
        back_shiny:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/shiny/15.png",
        back_shiny_female: null,
        front_default:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/15.png",
        front_female: null,
        front_shiny:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/shiny/15.png",
        front_shiny_female: null,
        other: {
          dream_world: {
            front_default:
              "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/15.svg",
            front_female: null,
          },
          "official-artwork": {
            front_default:
              "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/official-artwork/15.png",
          },
        },
        versions: {
          "generation-i": {
            "red-blue": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/15.png",
              back_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/15.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/15.png",
              front_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/15.png",
            },
            yellow: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/15.png",
              back_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/15.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/15.png",
              front_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/15.png",
            },
          },
          "generation-ii": {
            crystal: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/15.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/15.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/15.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/15.png",
            },
            gold: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/15.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/15.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/15.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/15.png",
            },
            silver: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/15.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/15.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/15.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/15.png",
            },
          },
          "generation-iii": {
            emerald: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/emerald/15.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/15.png",
            },
            "firered-leafgreen": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/15.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/15.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/15.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/15.png",
            },
            "ruby-sapphire": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/15.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/15.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/15.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/15.png",
            },
          },
          "generation-iv": {
            "diamond-pearl": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/15.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/15.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/15.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/15.png",
              front_shiny_female: null,
            },
            "heartgold-soulsilver": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/15.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/15.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/15.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/15.png",
              front_shiny_female: null,
            },
            platinum: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/15.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/15.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/15.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/15.png",
              front_shiny_female: null,
            },
          },
          "generation-v": {
            "black-white": {
              animated: {
                back_default:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/15.gif",
                back_female: null,
                back_shiny:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/15.gif",
                back_shiny_female: null,
                front_default:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/15.gif",
                front_female: null,
                front_shiny:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/15.gif",
                front_shiny_female: null,
              },
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/15.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/15.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/15.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/15.png",
              front_shiny_female: null,
            },
          },
          "generation-vi": {
            "omegaruby-alphasapphire": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/15.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/15.png",
              front_shiny_female: null,
            },
            "x-y": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/15.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/15.png",
              front_shiny_female: null,
            },
          },
          "generation-vii": {
            icons: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/icons/15.png",
              front_female: null,
            },
            "ultra-sun-ultra-moon": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/15.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/15.png",
              front_shiny_female: null,
            },
          },
          "generation-viii": {
            icons: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-viii/icons/15.png",
              front_female: null,
            },
          },
        },
      },
      stats: [
        {
          base_stat: 65,
          effort: 0,
          stat: {
            name: "hp",
            url: "https://pokeapi.co/api/v2/stat/1/",
          },
        },
        {
          base_stat: 90,
          effort: 2,
          stat: {
            name: "attack",
            url: "https://pokeapi.co/api/v2/stat/2/",
          },
        },
        {
          base_stat: 40,
          effort: 0,
          stat: {
            name: "defense",
            url: "https://pokeapi.co/api/v2/stat/3/",
          },
        },
        {
          base_stat: 45,
          effort: 0,
          stat: {
            name: "special-attack",
            url: "https://pokeapi.co/api/v2/stat/4/",
          },
        },
        {
          base_stat: 80,
          effort: 1,
          stat: {
            name: "special-defense",
            url: "https://pokeapi.co/api/v2/stat/5/",
          },
        },
        {
          base_stat: 75,
          effort: 0,
          stat: {
            name: "speed",
            url: "https://pokeapi.co/api/v2/stat/6/",
          },
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "bug",
            url: "https://pokeapi.co/api/v2/type/7/",
          },
        },
        {
          slot: 2,
          type: {
            name: "poison",
            url: "https://pokeapi.co/api/v2/type/4/",
          },
        },
      ],
      weight: 295,
    },
  },
  {
    id: 15,
    name: "pidgey",
    pokemon_data: {
      abilities: [
        {
          ability: {
            name: "keen-eye",
            url: "https://pokeapi.co/api/v2/ability/51/",
          },
          is_hidden: false,
          slot: 1,
        },
        {
          ability: {
            name: "tangled-feet",
            url: "https://pokeapi.co/api/v2/ability/77/",
          },
          is_hidden: false,
          slot: 2,
        },
        {
          ability: {
            name: "big-pecks",
            url: "https://pokeapi.co/api/v2/ability/145/",
          },
          is_hidden: true,
          slot: 3,
        },
      ],
      base_experience: 50,
      height: 3,
      sprites: {
        back_default:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/16.png",
        back_female: null,
        back_shiny:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/shiny/16.png",
        back_shiny_female: null,
        front_default:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/16.png",
        front_female: null,
        front_shiny:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/shiny/16.png",
        front_shiny_female: null,
        other: {
          dream_world: {
            front_default:
              "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/16.svg",
            front_female: null,
          },
          "official-artwork": {
            front_default:
              "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/official-artwork/16.png",
          },
        },
        versions: {
          "generation-i": {
            "red-blue": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/16.png",
              back_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/16.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/16.png",
              front_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/16.png",
            },
            yellow: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/16.png",
              back_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/16.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/16.png",
              front_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/16.png",
            },
          },
          "generation-ii": {
            crystal: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/16.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/16.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/16.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/16.png",
            },
            gold: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/16.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/16.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/16.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/16.png",
            },
            silver: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/16.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/16.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/16.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/16.png",
            },
          },
          "generation-iii": {
            emerald: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/emerald/16.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/16.png",
            },
            "firered-leafgreen": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/16.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/16.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/16.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/16.png",
            },
            "ruby-sapphire": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/16.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/16.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/16.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/16.png",
            },
          },
          "generation-iv": {
            "diamond-pearl": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/16.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/16.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/16.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/16.png",
              front_shiny_female: null,
            },
            "heartgold-soulsilver": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/16.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/16.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/16.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/16.png",
              front_shiny_female: null,
            },
            platinum: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/16.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/16.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/16.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/16.png",
              front_shiny_female: null,
            },
          },
          "generation-v": {
            "black-white": {
              animated: {
                back_default:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/16.gif",
                back_female: null,
                back_shiny:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/16.gif",
                back_shiny_female: null,
                front_default:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/16.gif",
                front_female: null,
                front_shiny:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/16.gif",
                front_shiny_female: null,
              },
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/16.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/16.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/16.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/16.png",
              front_shiny_female: null,
            },
          },
          "generation-vi": {
            "omegaruby-alphasapphire": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/16.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/16.png",
              front_shiny_female: null,
            },
            "x-y": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/16.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/16.png",
              front_shiny_female: null,
            },
          },
          "generation-vii": {
            icons: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/icons/16.png",
              front_female: null,
            },
            "ultra-sun-ultra-moon": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/16.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/16.png",
              front_shiny_female: null,
            },
          },
          "generation-viii": {
            icons: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-viii/icons/16.png",
              front_female: null,
            },
          },
        },
      },
      stats: [
        {
          base_stat: 40,
          effort: 0,
          stat: {
            name: "hp",
            url: "https://pokeapi.co/api/v2/stat/1/",
          },
        },
        {
          base_stat: 45,
          effort: 0,
          stat: {
            name: "attack",
            url: "https://pokeapi.co/api/v2/stat/2/",
          },
        },
        {
          base_stat: 40,
          effort: 0,
          stat: {
            name: "defense",
            url: "https://pokeapi.co/api/v2/stat/3/",
          },
        },
        {
          base_stat: 35,
          effort: 0,
          stat: {
            name: "special-attack",
            url: "https://pokeapi.co/api/v2/stat/4/",
          },
        },
        {
          base_stat: 35,
          effort: 0,
          stat: {
            name: "special-defense",
            url: "https://pokeapi.co/api/v2/stat/5/",
          },
        },
        {
          base_stat: 56,
          effort: 1,
          stat: {
            name: "speed",
            url: "https://pokeapi.co/api/v2/stat/6/",
          },
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "normal",
            url: "https://pokeapi.co/api/v2/type/1/",
          },
        },
        {
          slot: 2,
          type: {
            name: "flying",
            url: "https://pokeapi.co/api/v2/type/3/",
          },
        },
      ],
      weight: 18,
    },
  },
  {
    id: 16,
    name: "pidgeotto",
    pokemon_data: {
      abilities: [
        {
          ability: {
            name: "keen-eye",
            url: "https://pokeapi.co/api/v2/ability/51/",
          },
          is_hidden: false,
          slot: 1,
        },
        {
          ability: {
            name: "tangled-feet",
            url: "https://pokeapi.co/api/v2/ability/77/",
          },
          is_hidden: false,
          slot: 2,
        },
        {
          ability: {
            name: "big-pecks",
            url: "https://pokeapi.co/api/v2/ability/145/",
          },
          is_hidden: true,
          slot: 3,
        },
      ],
      base_experience: 122,
      height: 11,
      sprites: {
        back_default:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/17.png",
        back_female: null,
        back_shiny:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/shiny/17.png",
        back_shiny_female: null,
        front_default:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/17.png",
        front_female: null,
        front_shiny:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/shiny/17.png",
        front_shiny_female: null,
        other: {
          dream_world: {
            front_default:
              "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/17.svg",
            front_female: null,
          },
          "official-artwork": {
            front_default:
              "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/official-artwork/17.png",
          },
        },
        versions: {
          "generation-i": {
            "red-blue": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/17.png",
              back_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/17.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/17.png",
              front_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/17.png",
            },
            yellow: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/17.png",
              back_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/17.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/17.png",
              front_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/17.png",
            },
          },
          "generation-ii": {
            crystal: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/17.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/17.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/17.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/17.png",
            },
            gold: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/17.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/17.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/17.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/17.png",
            },
            silver: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/17.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/17.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/17.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/17.png",
            },
          },
          "generation-iii": {
            emerald: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/emerald/17.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/17.png",
            },
            "firered-leafgreen": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/17.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/17.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/17.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/17.png",
            },
            "ruby-sapphire": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/17.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/17.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/17.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/17.png",
            },
          },
          "generation-iv": {
            "diamond-pearl": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/17.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/17.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/17.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/17.png",
              front_shiny_female: null,
            },
            "heartgold-soulsilver": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/17.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/17.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/17.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/17.png",
              front_shiny_female: null,
            },
            platinum: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/17.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/17.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/17.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/17.png",
              front_shiny_female: null,
            },
          },
          "generation-v": {
            "black-white": {
              animated: {
                back_default:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/17.gif",
                back_female: null,
                back_shiny:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/17.gif",
                back_shiny_female: null,
                front_default:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/17.gif",
                front_female: null,
                front_shiny:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/17.gif",
                front_shiny_female: null,
              },
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/17.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/17.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/17.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/17.png",
              front_shiny_female: null,
            },
          },
          "generation-vi": {
            "omegaruby-alphasapphire": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/17.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/17.png",
              front_shiny_female: null,
            },
            "x-y": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/17.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/17.png",
              front_shiny_female: null,
            },
          },
          "generation-vii": {
            icons: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/icons/17.png",
              front_female: null,
            },
            "ultra-sun-ultra-moon": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/17.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/17.png",
              front_shiny_female: null,
            },
          },
          "generation-viii": {
            icons: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-viii/icons/17.png",
              front_female: null,
            },
          },
        },
      },
      stats: [
        {
          base_stat: 63,
          effort: 0,
          stat: {
            name: "hp",
            url: "https://pokeapi.co/api/v2/stat/1/",
          },
        },
        {
          base_stat: 60,
          effort: 0,
          stat: {
            name: "attack",
            url: "https://pokeapi.co/api/v2/stat/2/",
          },
        },
        {
          base_stat: 55,
          effort: 0,
          stat: {
            name: "defense",
            url: "https://pokeapi.co/api/v2/stat/3/",
          },
        },
        {
          base_stat: 50,
          effort: 0,
          stat: {
            name: "special-attack",
            url: "https://pokeapi.co/api/v2/stat/4/",
          },
        },
        {
          base_stat: 50,
          effort: 0,
          stat: {
            name: "special-defense",
            url: "https://pokeapi.co/api/v2/stat/5/",
          },
        },
        {
          base_stat: 71,
          effort: 2,
          stat: {
            name: "speed",
            url: "https://pokeapi.co/api/v2/stat/6/",
          },
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "normal",
            url: "https://pokeapi.co/api/v2/type/1/",
          },
        },
        {
          slot: 2,
          type: {
            name: "flying",
            url: "https://pokeapi.co/api/v2/type/3/",
          },
        },
      ],
      weight: 300,
    },
  },
  {
    id: 17,
    name: "pidgeot",
    pokemon_data: {
      abilities: [
        {
          ability: {
            name: "keen-eye",
            url: "https://pokeapi.co/api/v2/ability/51/",
          },
          is_hidden: false,
          slot: 1,
        },
        {
          ability: {
            name: "tangled-feet",
            url: "https://pokeapi.co/api/v2/ability/77/",
          },
          is_hidden: false,
          slot: 2,
        },
        {
          ability: {
            name: "big-pecks",
            url: "https://pokeapi.co/api/v2/ability/145/",
          },
          is_hidden: true,
          slot: 3,
        },
      ],
      base_experience: 216,
      height: 15,
      sprites: {
        back_default:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/18.png",
        back_female: null,
        back_shiny:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/shiny/18.png",
        back_shiny_female: null,
        front_default:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/18.png",
        front_female: null,
        front_shiny:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/shiny/18.png",
        front_shiny_female: null,
        other: {
          dream_world: {
            front_default:
              "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/18.svg",
            front_female: null,
          },
          "official-artwork": {
            front_default:
              "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/official-artwork/18.png",
          },
        },
        versions: {
          "generation-i": {
            "red-blue": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/18.png",
              back_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/18.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/18.png",
              front_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/18.png",
            },
            yellow: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/18.png",
              back_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/18.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/18.png",
              front_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/18.png",
            },
          },
          "generation-ii": {
            crystal: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/18.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/18.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/18.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/18.png",
            },
            gold: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/18.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/18.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/18.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/18.png",
            },
            silver: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/18.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/18.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/18.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/18.png",
            },
          },
          "generation-iii": {
            emerald: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/emerald/18.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/18.png",
            },
            "firered-leafgreen": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/18.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/18.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/18.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/18.png",
            },
            "ruby-sapphire": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/18.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/18.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/18.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/18.png",
            },
          },
          "generation-iv": {
            "diamond-pearl": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/18.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/18.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/18.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/18.png",
              front_shiny_female: null,
            },
            "heartgold-soulsilver": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/18.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/18.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/18.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/18.png",
              front_shiny_female: null,
            },
            platinum: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/18.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/18.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/18.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/18.png",
              front_shiny_female: null,
            },
          },
          "generation-v": {
            "black-white": {
              animated: {
                back_default:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/18.gif",
                back_female: null,
                back_shiny:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/18.gif",
                back_shiny_female: null,
                front_default:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/18.gif",
                front_female: null,
                front_shiny:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/18.gif",
                front_shiny_female: null,
              },
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/18.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/18.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/18.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/18.png",
              front_shiny_female: null,
            },
          },
          "generation-vi": {
            "omegaruby-alphasapphire": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/18.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/18.png",
              front_shiny_female: null,
            },
            "x-y": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/18.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/18.png",
              front_shiny_female: null,
            },
          },
          "generation-vii": {
            icons: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/icons/18.png",
              front_female: null,
            },
            "ultra-sun-ultra-moon": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/18.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/18.png",
              front_shiny_female: null,
            },
          },
          "generation-viii": {
            icons: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-viii/icons/18.png",
              front_female: null,
            },
          },
        },
      },
      stats: [
        {
          base_stat: 83,
          effort: 0,
          stat: {
            name: "hp",
            url: "https://pokeapi.co/api/v2/stat/1/",
          },
        },
        {
          base_stat: 80,
          effort: 0,
          stat: {
            name: "attack",
            url: "https://pokeapi.co/api/v2/stat/2/",
          },
        },
        {
          base_stat: 75,
          effort: 0,
          stat: {
            name: "defense",
            url: "https://pokeapi.co/api/v2/stat/3/",
          },
        },
        {
          base_stat: 70,
          effort: 0,
          stat: {
            name: "special-attack",
            url: "https://pokeapi.co/api/v2/stat/4/",
          },
        },
        {
          base_stat: 70,
          effort: 0,
          stat: {
            name: "special-defense",
            url: "https://pokeapi.co/api/v2/stat/5/",
          },
        },
        {
          base_stat: 101,
          effort: 3,
          stat: {
            name: "speed",
            url: "https://pokeapi.co/api/v2/stat/6/",
          },
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "normal",
            url: "https://pokeapi.co/api/v2/type/1/",
          },
        },
        {
          slot: 2,
          type: {
            name: "flying",
            url: "https://pokeapi.co/api/v2/type/3/",
          },
        },
      ],
      weight: 395,
    },
  },
  {
    id: 18,
    name: "rattata",
    pokemon_data: {
      abilities: [
        {
          ability: {
            name: "run-away",
            url: "https://pokeapi.co/api/v2/ability/50/",
          },
          is_hidden: false,
          slot: 1,
        },
        {
          ability: {
            name: "guts",
            url: "https://pokeapi.co/api/v2/ability/62/",
          },
          is_hidden: false,
          slot: 2,
        },
        {
          ability: {
            name: "hustle",
            url: "https://pokeapi.co/api/v2/ability/55/",
          },
          is_hidden: true,
          slot: 3,
        },
      ],
      base_experience: 51,
      height: 3,
      sprites: {
        back_default:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/19.png",
        back_female:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/female/19.png",
        back_shiny:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/shiny/19.png",
        back_shiny_female:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/shiny/female/19.png",
        front_default:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/19.png",
        front_female:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/female/19.png",
        front_shiny:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/shiny/19.png",
        front_shiny_female:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/shiny/female/19.png",
        other: {
          dream_world: {
            front_default:
              "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/19.svg",
            front_female: null,
          },
          "official-artwork": {
            front_default:
              "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/official-artwork/19.png",
          },
        },
        versions: {
          "generation-i": {
            "red-blue": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/19.png",
              back_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/19.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/19.png",
              front_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/19.png",
            },
            yellow: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/19.png",
              back_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/19.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/19.png",
              front_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/19.png",
            },
          },
          "generation-ii": {
            crystal: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/19.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/19.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/19.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/19.png",
            },
            gold: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/19.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/19.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/19.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/19.png",
            },
            silver: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/19.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/19.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/19.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/19.png",
            },
          },
          "generation-iii": {
            emerald: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/emerald/19.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/19.png",
            },
            "firered-leafgreen": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/19.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/19.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/19.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/19.png",
            },
            "ruby-sapphire": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/19.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/19.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/19.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/19.png",
            },
          },
          "generation-iv": {
            "diamond-pearl": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/19.png",
              back_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/female/19.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/19.png",
              back_shiny_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/female/19.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/19.png",
              front_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/female/19.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/19.png",
              front_shiny_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/female/19.png",
            },
            "heartgold-soulsilver": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/19.png",
              back_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/female/19.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/19.png",
              back_shiny_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/female/19.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/19.png",
              front_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/female/19.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/19.png",
              front_shiny_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/female/19.png",
            },
            platinum: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/19.png",
              back_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/female/19.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/19.png",
              back_shiny_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/female/19.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/19.png",
              front_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/female/19.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/19.png",
              front_shiny_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/female/19.png",
            },
          },
          "generation-v": {
            "black-white": {
              animated: {
                back_default:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/19.gif",
                back_female:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/female/19.gif",
                back_shiny:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/19.gif",
                back_shiny_female:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/female/19.gif",
                front_default:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/19.gif",
                front_female:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/female/19.gif",
                front_shiny:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/19.gif",
                front_shiny_female:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/female/19.gif",
              },
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/19.png",
              back_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/female/19.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/19.png",
              back_shiny_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/female/19.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/19.png",
              front_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/female/19.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/19.png",
              front_shiny_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/female/19.png",
            },
          },
          "generation-vi": {
            "omegaruby-alphasapphire": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/19.png",
              front_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/female/19.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/19.png",
              front_shiny_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/female/19.png",
            },
            "x-y": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/19.png",
              front_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/female/19.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/19.png",
              front_shiny_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/female/19.png",
            },
          },
          "generation-vii": {
            icons: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/icons/19.png",
              front_female: null,
            },
            "ultra-sun-ultra-moon": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/19.png",
              front_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/female/19.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/19.png",
              front_shiny_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/female/19.png",
            },
          },
          "generation-viii": {
            icons: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-viii/icons/19.png",
              front_female: null,
            },
          },
        },
      },
      stats: [
        {
          base_stat: 30,
          effort: 0,
          stat: {
            name: "hp",
            url: "https://pokeapi.co/api/v2/stat/1/",
          },
        },
        {
          base_stat: 56,
          effort: 0,
          stat: {
            name: "attack",
            url: "https://pokeapi.co/api/v2/stat/2/",
          },
        },
        {
          base_stat: 35,
          effort: 0,
          stat: {
            name: "defense",
            url: "https://pokeapi.co/api/v2/stat/3/",
          },
        },
        {
          base_stat: 25,
          effort: 0,
          stat: {
            name: "special-attack",
            url: "https://pokeapi.co/api/v2/stat/4/",
          },
        },
        {
          base_stat: 35,
          effort: 0,
          stat: {
            name: "special-defense",
            url: "https://pokeapi.co/api/v2/stat/5/",
          },
        },
        {
          base_stat: 72,
          effort: 1,
          stat: {
            name: "speed",
            url: "https://pokeapi.co/api/v2/stat/6/",
          },
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "normal",
            url: "https://pokeapi.co/api/v2/type/1/",
          },
        },
      ],
      weight: 35,
    },
  },
  {
    id: 19,
    name: "raticate",
    pokemon_data: {
      abilities: [
        {
          ability: {
            name: "run-away",
            url: "https://pokeapi.co/api/v2/ability/50/",
          },
          is_hidden: false,
          slot: 1,
        },
        {
          ability: {
            name: "guts",
            url: "https://pokeapi.co/api/v2/ability/62/",
          },
          is_hidden: false,
          slot: 2,
        },
        {
          ability: {
            name: "hustle",
            url: "https://pokeapi.co/api/v2/ability/55/",
          },
          is_hidden: true,
          slot: 3,
        },
      ],
      base_experience: 145,
      height: 7,
      sprites: {
        back_default:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/20.png",
        back_female:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/female/20.png",
        back_shiny:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/shiny/20.png",
        back_shiny_female:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/shiny/female/20.png",
        front_default:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/20.png",
        front_female:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/female/20.png",
        front_shiny:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/shiny/20.png",
        front_shiny_female:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/shiny/female/20.png",
        other: {
          dream_world: {
            front_default:
              "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/20.svg",
            front_female: null,
          },
          "official-artwork": {
            front_default:
              "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/official-artwork/20.png",
          },
        },
        versions: {
          "generation-i": {
            "red-blue": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/20.png",
              back_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/20.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/20.png",
              front_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/20.png",
            },
            yellow: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/20.png",
              back_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/20.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/20.png",
              front_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/20.png",
            },
          },
          "generation-ii": {
            crystal: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/20.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/20.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/20.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/20.png",
            },
            gold: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/20.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/20.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/20.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/20.png",
            },
            silver: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/20.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/20.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/20.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/20.png",
            },
          },
          "generation-iii": {
            emerald: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/emerald/20.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/20.png",
            },
            "firered-leafgreen": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/20.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/20.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/20.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/20.png",
            },
            "ruby-sapphire": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/20.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/20.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/20.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/20.png",
            },
          },
          "generation-iv": {
            "diamond-pearl": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/20.png",
              back_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/female/20.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/20.png",
              back_shiny_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/female/20.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/20.png",
              front_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/female/20.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/20.png",
              front_shiny_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/female/20.png",
            },
            "heartgold-soulsilver": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/20.png",
              back_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/female/20.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/20.png",
              back_shiny_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/female/20.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/20.png",
              front_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/female/20.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/20.png",
              front_shiny_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/female/20.png",
            },
            platinum: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/20.png",
              back_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/female/20.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/20.png",
              back_shiny_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/female/20.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/20.png",
              front_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/female/20.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/20.png",
              front_shiny_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/female/20.png",
            },
          },
          "generation-v": {
            "black-white": {
              animated: {
                back_default:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/20.gif",
                back_female:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/female/20.gif",
                back_shiny:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/20.gif",
                back_shiny_female:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/female/20.gif",
                front_default:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/20.gif",
                front_female:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/female/20.gif",
                front_shiny:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/20.gif",
                front_shiny_female:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/female/20.gif",
              },
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/20.png",
              back_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/female/20.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/20.png",
              back_shiny_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/female/20.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/20.png",
              front_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/female/20.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/20.png",
              front_shiny_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/female/20.png",
            },
          },
          "generation-vi": {
            "omegaruby-alphasapphire": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/20.png",
              front_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/female/20.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/20.png",
              front_shiny_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/female/20.png",
            },
            "x-y": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/20.png",
              front_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/female/20.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/20.png",
              front_shiny_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/female/20.png",
            },
          },
          "generation-vii": {
            icons: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/icons/20.png",
              front_female: null,
            },
            "ultra-sun-ultra-moon": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/20.png",
              front_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/female/20.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/20.png",
              front_shiny_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/female/20.png",
            },
          },
          "generation-viii": {
            icons: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-viii/icons/20.png",
              front_female: null,
            },
          },
        },
      },
      stats: [
        {
          base_stat: 55,
          effort: 0,
          stat: {
            name: "hp",
            url: "https://pokeapi.co/api/v2/stat/1/",
          },
        },
        {
          base_stat: 81,
          effort: 0,
          stat: {
            name: "attack",
            url: "https://pokeapi.co/api/v2/stat/2/",
          },
        },
        {
          base_stat: 60,
          effort: 0,
          stat: {
            name: "defense",
            url: "https://pokeapi.co/api/v2/stat/3/",
          },
        },
        {
          base_stat: 50,
          effort: 0,
          stat: {
            name: "special-attack",
            url: "https://pokeapi.co/api/v2/stat/4/",
          },
        },
        {
          base_stat: 70,
          effort: 0,
          stat: {
            name: "special-defense",
            url: "https://pokeapi.co/api/v2/stat/5/",
          },
        },
        {
          base_stat: 97,
          effort: 2,
          stat: {
            name: "speed",
            url: "https://pokeapi.co/api/v2/stat/6/",
          },
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "normal",
            url: "https://pokeapi.co/api/v2/type/1/",
          },
        },
      ],
      weight: 185,
    },
  },
  {
    id: 20,
    name: "spearow",
    pokemon_data: {
      abilities: [
        {
          ability: {
            name: "keen-eye",
            url: "https://pokeapi.co/api/v2/ability/51/",
          },
          is_hidden: false,
          slot: 1,
        },
        {
          ability: {
            name: "sniper",
            url: "https://pokeapi.co/api/v2/ability/97/",
          },
          is_hidden: true,
          slot: 3,
        },
      ],
      base_experience: 52,
      height: 3,
      sprites: {
        back_default:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/21.png",
        back_female: null,
        back_shiny:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/shiny/21.png",
        back_shiny_female: null,
        front_default:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/21.png",
        front_female: null,
        front_shiny:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/shiny/21.png",
        front_shiny_female: null,
        other: {
          dream_world: {
            front_default:
              "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/21.svg",
            front_female: null,
          },
          "official-artwork": {
            front_default:
              "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/official-artwork/21.png",
          },
        },
        versions: {
          "generation-i": {
            "red-blue": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/21.png",
              back_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/21.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/21.png",
              front_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/21.png",
            },
            yellow: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/21.png",
              back_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/21.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/21.png",
              front_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/21.png",
            },
          },
          "generation-ii": {
            crystal: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/21.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/21.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/21.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/21.png",
            },
            gold: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/21.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/21.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/21.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/21.png",
            },
            silver: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/21.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/21.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/21.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/21.png",
            },
          },
          "generation-iii": {
            emerald: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/emerald/21.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/21.png",
            },
            "firered-leafgreen": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/21.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/21.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/21.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/21.png",
            },
            "ruby-sapphire": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/21.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/21.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/21.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/21.png",
            },
          },
          "generation-iv": {
            "diamond-pearl": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/21.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/21.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/21.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/21.png",
              front_shiny_female: null,
            },
            "heartgold-soulsilver": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/21.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/21.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/21.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/21.png",
              front_shiny_female: null,
            },
            platinum: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/21.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/21.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/21.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/21.png",
              front_shiny_female: null,
            },
          },
          "generation-v": {
            "black-white": {
              animated: {
                back_default:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/21.gif",
                back_female: null,
                back_shiny:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/21.gif",
                back_shiny_female: null,
                front_default:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/21.gif",
                front_female: null,
                front_shiny:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/21.gif",
                front_shiny_female: null,
              },
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/21.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/21.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/21.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/21.png",
              front_shiny_female: null,
            },
          },
          "generation-vi": {
            "omegaruby-alphasapphire": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/21.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/21.png",
              front_shiny_female: null,
            },
            "x-y": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/21.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/21.png",
              front_shiny_female: null,
            },
          },
          "generation-vii": {
            icons: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/icons/21.png",
              front_female: null,
            },
            "ultra-sun-ultra-moon": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/21.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/21.png",
              front_shiny_female: null,
            },
          },
          "generation-viii": {
            icons: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-viii/icons/21.png",
              front_female: null,
            },
          },
        },
      },
      stats: [
        {
          base_stat: 40,
          effort: 0,
          stat: {
            name: "hp",
            url: "https://pokeapi.co/api/v2/stat/1/",
          },
        },
        {
          base_stat: 60,
          effort: 0,
          stat: {
            name: "attack",
            url: "https://pokeapi.co/api/v2/stat/2/",
          },
        },
        {
          base_stat: 30,
          effort: 0,
          stat: {
            name: "defense",
            url: "https://pokeapi.co/api/v2/stat/3/",
          },
        },
        {
          base_stat: 31,
          effort: 0,
          stat: {
            name: "special-attack",
            url: "https://pokeapi.co/api/v2/stat/4/",
          },
        },
        {
          base_stat: 31,
          effort: 0,
          stat: {
            name: "special-defense",
            url: "https://pokeapi.co/api/v2/stat/5/",
          },
        },
        {
          base_stat: 70,
          effort: 1,
          stat: {
            name: "speed",
            url: "https://pokeapi.co/api/v2/stat/6/",
          },
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "normal",
            url: "https://pokeapi.co/api/v2/type/1/",
          },
        },
        {
          slot: 2,
          type: {
            name: "flying",
            url: "https://pokeapi.co/api/v2/type/3/",
          },
        },
      ],
      weight: 20,
    },
  },
  {
    id: 21,
    name: "fearow",
    pokemon_data: {
      abilities: [
        {
          ability: {
            name: "keen-eye",
            url: "https://pokeapi.co/api/v2/ability/51/",
          },
          is_hidden: false,
          slot: 1,
        },
        {
          ability: {
            name: "sniper",
            url: "https://pokeapi.co/api/v2/ability/97/",
          },
          is_hidden: true,
          slot: 3,
        },
      ],
      base_experience: 155,
      height: 12,
      sprites: {
        back_default:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/22.png",
        back_female: null,
        back_shiny:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/shiny/22.png",
        back_shiny_female: null,
        front_default:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/22.png",
        front_female: null,
        front_shiny:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/shiny/22.png",
        front_shiny_female: null,
        other: {
          dream_world: {
            front_default:
              "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/22.svg",
            front_female: null,
          },
          "official-artwork": {
            front_default:
              "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/official-artwork/22.png",
          },
        },
        versions: {
          "generation-i": {
            "red-blue": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/22.png",
              back_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/22.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/22.png",
              front_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/22.png",
            },
            yellow: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/22.png",
              back_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/22.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/22.png",
              front_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/22.png",
            },
          },
          "generation-ii": {
            crystal: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/22.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/22.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/22.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/22.png",
            },
            gold: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/22.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/22.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/22.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/22.png",
            },
            silver: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/22.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/22.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/22.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/22.png",
            },
          },
          "generation-iii": {
            emerald: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/emerald/22.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/22.png",
            },
            "firered-leafgreen": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/22.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/22.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/22.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/22.png",
            },
            "ruby-sapphire": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/22.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/22.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/22.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/22.png",
            },
          },
          "generation-iv": {
            "diamond-pearl": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/22.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/22.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/22.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/22.png",
              front_shiny_female: null,
            },
            "heartgold-soulsilver": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/22.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/22.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/22.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/22.png",
              front_shiny_female: null,
            },
            platinum: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/22.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/22.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/22.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/22.png",
              front_shiny_female: null,
            },
          },
          "generation-v": {
            "black-white": {
              animated: {
                back_default:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/22.gif",
                back_female: null,
                back_shiny:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/22.gif",
                back_shiny_female: null,
                front_default:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/22.gif",
                front_female: null,
                front_shiny:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/22.gif",
                front_shiny_female: null,
              },
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/22.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/22.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/22.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/22.png",
              front_shiny_female: null,
            },
          },
          "generation-vi": {
            "omegaruby-alphasapphire": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/22.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/22.png",
              front_shiny_female: null,
            },
            "x-y": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/22.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/22.png",
              front_shiny_female: null,
            },
          },
          "generation-vii": {
            icons: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/icons/22.png",
              front_female: null,
            },
            "ultra-sun-ultra-moon": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/22.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/22.png",
              front_shiny_female: null,
            },
          },
          "generation-viii": {
            icons: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-viii/icons/22.png",
              front_female: null,
            },
          },
        },
      },
      stats: [
        {
          base_stat: 65,
          effort: 0,
          stat: {
            name: "hp",
            url: "https://pokeapi.co/api/v2/stat/1/",
          },
        },
        {
          base_stat: 90,
          effort: 0,
          stat: {
            name: "attack",
            url: "https://pokeapi.co/api/v2/stat/2/",
          },
        },
        {
          base_stat: 65,
          effort: 0,
          stat: {
            name: "defense",
            url: "https://pokeapi.co/api/v2/stat/3/",
          },
        },
        {
          base_stat: 61,
          effort: 0,
          stat: {
            name: "special-attack",
            url: "https://pokeapi.co/api/v2/stat/4/",
          },
        },
        {
          base_stat: 61,
          effort: 0,
          stat: {
            name: "special-defense",
            url: "https://pokeapi.co/api/v2/stat/5/",
          },
        },
        {
          base_stat: 100,
          effort: 2,
          stat: {
            name: "speed",
            url: "https://pokeapi.co/api/v2/stat/6/",
          },
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "normal",
            url: "https://pokeapi.co/api/v2/type/1/",
          },
        },
        {
          slot: 2,
          type: {
            name: "flying",
            url: "https://pokeapi.co/api/v2/type/3/",
          },
        },
      ],
      weight: 380,
    },
  },
  {
    id: 22,
    name: "ekans",
    pokemon_data: {
      abilities: [
        {
          ability: {
            name: "intimidate",
            url: "https://pokeapi.co/api/v2/ability/22/",
          },
          is_hidden: false,
          slot: 1,
        },
        {
          ability: {
            name: "shed-skin",
            url: "https://pokeapi.co/api/v2/ability/61/",
          },
          is_hidden: false,
          slot: 2,
        },
        {
          ability: {
            name: "unnerve",
            url: "https://pokeapi.co/api/v2/ability/127/",
          },
          is_hidden: true,
          slot: 3,
        },
      ],
      base_experience: 58,
      height: 20,
      sprites: {
        back_default:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/23.png",
        back_female: null,
        back_shiny:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/shiny/23.png",
        back_shiny_female: null,
        front_default:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/23.png",
        front_female: null,
        front_shiny:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/shiny/23.png",
        front_shiny_female: null,
        other: {
          dream_world: {
            front_default:
              "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/23.svg",
            front_female: null,
          },
          "official-artwork": {
            front_default:
              "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/official-artwork/23.png",
          },
        },
        versions: {
          "generation-i": {
            "red-blue": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/23.png",
              back_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/23.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/23.png",
              front_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/23.png",
            },
            yellow: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/23.png",
              back_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/23.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/23.png",
              front_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/23.png",
            },
          },
          "generation-ii": {
            crystal: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/23.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/23.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/23.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/23.png",
            },
            gold: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/23.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/23.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/23.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/23.png",
            },
            silver: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/23.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/23.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/23.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/23.png",
            },
          },
          "generation-iii": {
            emerald: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/emerald/23.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/23.png",
            },
            "firered-leafgreen": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/23.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/23.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/23.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/23.png",
            },
            "ruby-sapphire": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/23.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/23.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/23.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/23.png",
            },
          },
          "generation-iv": {
            "diamond-pearl": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/23.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/23.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/23.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/23.png",
              front_shiny_female: null,
            },
            "heartgold-soulsilver": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/23.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/23.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/23.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/23.png",
              front_shiny_female: null,
            },
            platinum: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/23.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/23.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/23.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/23.png",
              front_shiny_female: null,
            },
          },
          "generation-v": {
            "black-white": {
              animated: {
                back_default:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/23.gif",
                back_female: null,
                back_shiny:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/23.gif",
                back_shiny_female: null,
                front_default:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/23.gif",
                front_female: null,
                front_shiny:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/23.gif",
                front_shiny_female: null,
              },
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/23.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/23.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/23.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/23.png",
              front_shiny_female: null,
            },
          },
          "generation-vi": {
            "omegaruby-alphasapphire": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/23.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/23.png",
              front_shiny_female: null,
            },
            "x-y": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/23.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/23.png",
              front_shiny_female: null,
            },
          },
          "generation-vii": {
            icons: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/icons/23.png",
              front_female: null,
            },
            "ultra-sun-ultra-moon": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/23.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/23.png",
              front_shiny_female: null,
            },
          },
          "generation-viii": {
            icons: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-viii/icons/23.png",
              front_female: null,
            },
          },
        },
      },
      stats: [
        {
          base_stat: 35,
          effort: 0,
          stat: {
            name: "hp",
            url: "https://pokeapi.co/api/v2/stat/1/",
          },
        },
        {
          base_stat: 60,
          effort: 1,
          stat: {
            name: "attack",
            url: "https://pokeapi.co/api/v2/stat/2/",
          },
        },
        {
          base_stat: 44,
          effort: 0,
          stat: {
            name: "defense",
            url: "https://pokeapi.co/api/v2/stat/3/",
          },
        },
        {
          base_stat: 40,
          effort: 0,
          stat: {
            name: "special-attack",
            url: "https://pokeapi.co/api/v2/stat/4/",
          },
        },
        {
          base_stat: 54,
          effort: 0,
          stat: {
            name: "special-defense",
            url: "https://pokeapi.co/api/v2/stat/5/",
          },
        },
        {
          base_stat: 55,
          effort: 0,
          stat: {
            name: "speed",
            url: "https://pokeapi.co/api/v2/stat/6/",
          },
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "poison",
            url: "https://pokeapi.co/api/v2/type/4/",
          },
        },
      ],
      weight: 69,
    },
  },
  {
    id: 23,
    name: "arbok",
    pokemon_data: {
      abilities: [
        {
          ability: {
            name: "intimidate",
            url: "https://pokeapi.co/api/v2/ability/22/",
          },
          is_hidden: false,
          slot: 1,
        },
        {
          ability: {
            name: "shed-skin",
            url: "https://pokeapi.co/api/v2/ability/61/",
          },
          is_hidden: false,
          slot: 2,
        },
        {
          ability: {
            name: "unnerve",
            url: "https://pokeapi.co/api/v2/ability/127/",
          },
          is_hidden: true,
          slot: 3,
        },
      ],
      base_experience: 157,
      height: 35,
      sprites: {
        back_default:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/24.png",
        back_female: null,
        back_shiny:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/shiny/24.png",
        back_shiny_female: null,
        front_default:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/24.png",
        front_female: null,
        front_shiny:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/shiny/24.png",
        front_shiny_female: null,
        other: {
          dream_world: {
            front_default:
              "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/24.svg",
            front_female: null,
          },
          "official-artwork": {
            front_default:
              "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/official-artwork/24.png",
          },
        },
        versions: {
          "generation-i": {
            "red-blue": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/24.png",
              back_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/24.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/24.png",
              front_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/24.png",
            },
            yellow: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/24.png",
              back_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/24.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/24.png",
              front_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/24.png",
            },
          },
          "generation-ii": {
            crystal: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/24.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/24.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/24.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/24.png",
            },
            gold: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/24.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/24.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/24.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/24.png",
            },
            silver: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/24.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/24.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/24.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/24.png",
            },
          },
          "generation-iii": {
            emerald: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/emerald/24.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/24.png",
            },
            "firered-leafgreen": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/24.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/24.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/24.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/24.png",
            },
            "ruby-sapphire": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/24.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/24.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/24.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/24.png",
            },
          },
          "generation-iv": {
            "diamond-pearl": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/24.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/24.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/24.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/24.png",
              front_shiny_female: null,
            },
            "heartgold-soulsilver": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/24.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/24.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/24.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/24.png",
              front_shiny_female: null,
            },
            platinum: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/24.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/24.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/24.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/24.png",
              front_shiny_female: null,
            },
          },
          "generation-v": {
            "black-white": {
              animated: {
                back_default:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/24.gif",
                back_female: null,
                back_shiny:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/24.gif",
                back_shiny_female: null,
                front_default:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/24.gif",
                front_female: null,
                front_shiny:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/24.gif",
                front_shiny_female: null,
              },
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/24.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/24.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/24.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/24.png",
              front_shiny_female: null,
            },
          },
          "generation-vi": {
            "omegaruby-alphasapphire": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/24.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/24.png",
              front_shiny_female: null,
            },
            "x-y": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/24.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/24.png",
              front_shiny_female: null,
            },
          },
          "generation-vii": {
            icons: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/icons/24.png",
              front_female: null,
            },
            "ultra-sun-ultra-moon": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/24.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/24.png",
              front_shiny_female: null,
            },
          },
          "generation-viii": {
            icons: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-viii/icons/24.png",
              front_female: null,
            },
          },
        },
      },
      stats: [
        {
          base_stat: 60,
          effort: 0,
          stat: {
            name: "hp",
            url: "https://pokeapi.co/api/v2/stat/1/",
          },
        },
        {
          base_stat: 95,
          effort: 2,
          stat: {
            name: "attack",
            url: "https://pokeapi.co/api/v2/stat/2/",
          },
        },
        {
          base_stat: 69,
          effort: 0,
          stat: {
            name: "defense",
            url: "https://pokeapi.co/api/v2/stat/3/",
          },
        },
        {
          base_stat: 65,
          effort: 0,
          stat: {
            name: "special-attack",
            url: "https://pokeapi.co/api/v2/stat/4/",
          },
        },
        {
          base_stat: 79,
          effort: 0,
          stat: {
            name: "special-defense",
            url: "https://pokeapi.co/api/v2/stat/5/",
          },
        },
        {
          base_stat: 80,
          effort: 0,
          stat: {
            name: "speed",
            url: "https://pokeapi.co/api/v2/stat/6/",
          },
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "poison",
            url: "https://pokeapi.co/api/v2/type/4/",
          },
        },
      ],
      weight: 650,
    },
  },
  {
    id: 24,
    name: "pikachu",
    pokemon_data: {
      abilities: [
        {
          ability: {
            name: "static",
            url: "https://pokeapi.co/api/v2/ability/9/",
          },
          is_hidden: false,
          slot: 1,
        },
        {
          ability: {
            name: "lightning-rod",
            url: "https://pokeapi.co/api/v2/ability/31/",
          },
          is_hidden: true,
          slot: 3,
        },
      ],
      base_experience: 112,
      height: 4,
      sprites: {
        back_default:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/25.png",
        back_female:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/female/25.png",
        back_shiny:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/shiny/25.png",
        back_shiny_female:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/shiny/female/25.png",
        front_default:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/25.png",
        front_female:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/female/25.png",
        front_shiny:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/shiny/25.png",
        front_shiny_female:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/shiny/female/25.png",
        other: {
          dream_world: {
            front_default:
              "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/25.svg",
            front_female: null,
          },
          "official-artwork": {
            front_default:
              "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/official-artwork/25.png",
          },
        },
        versions: {
          "generation-i": {
            "red-blue": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/25.png",
              back_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/25.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/25.png",
              front_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/25.png",
            },
            yellow: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/25.png",
              back_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/25.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/25.png",
              front_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/25.png",
            },
          },
          "generation-ii": {
            crystal: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/25.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/25.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/25.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/25.png",
            },
            gold: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/25.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/25.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/25.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/25.png",
            },
            silver: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/25.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/25.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/25.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/25.png",
            },
          },
          "generation-iii": {
            emerald: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/emerald/25.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/25.png",
            },
            "firered-leafgreen": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/25.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/25.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/25.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/25.png",
            },
            "ruby-sapphire": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/25.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/25.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/25.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/25.png",
            },
          },
          "generation-iv": {
            "diamond-pearl": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/25.png",
              back_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/female/25.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/25.png",
              back_shiny_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/female/25.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/25.png",
              front_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/female/25.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/25.png",
              front_shiny_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/female/25.png",
            },
            "heartgold-soulsilver": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/25.png",
              back_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/female/25.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/25.png",
              back_shiny_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/female/25.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/25.png",
              front_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/female/25.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/25.png",
              front_shiny_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/female/25.png",
            },
            platinum: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/25.png",
              back_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/female/25.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/25.png",
              back_shiny_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/female/25.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/25.png",
              front_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/female/25.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/25.png",
              front_shiny_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/female/25.png",
            },
          },
          "generation-v": {
            "black-white": {
              animated: {
                back_default:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/25.gif",
                back_female:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/female/25.gif",
                back_shiny:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/25.gif",
                back_shiny_female:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/female/25.gif",
                front_default:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/25.gif",
                front_female:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/female/25.gif",
                front_shiny:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/25.gif",
                front_shiny_female:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/female/25.gif",
              },
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/25.png",
              back_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/female/25.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/25.png",
              back_shiny_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/female/25.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/25.png",
              front_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/female/25.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/25.png",
              front_shiny_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/female/25.png",
            },
          },
          "generation-vi": {
            "omegaruby-alphasapphire": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/25.png",
              front_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/female/25.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/25.png",
              front_shiny_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/female/25.png",
            },
            "x-y": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/25.png",
              front_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/female/25.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/25.png",
              front_shiny_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/female/25.png",
            },
          },
          "generation-vii": {
            icons: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/icons/25.png",
              front_female: null,
            },
            "ultra-sun-ultra-moon": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/25.png",
              front_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/female/25.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/25.png",
              front_shiny_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/female/25.png",
            },
          },
          "generation-viii": {
            icons: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-viii/icons/25.png",
              front_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-viii/icons/female/25.png",
            },
          },
        },
      },
      stats: [
        {
          base_stat: 35,
          effort: 0,
          stat: {
            name: "hp",
            url: "https://pokeapi.co/api/v2/stat/1/",
          },
        },
        {
          base_stat: 55,
          effort: 0,
          stat: {
            name: "attack",
            url: "https://pokeapi.co/api/v2/stat/2/",
          },
        },
        {
          base_stat: 40,
          effort: 0,
          stat: {
            name: "defense",
            url: "https://pokeapi.co/api/v2/stat/3/",
          },
        },
        {
          base_stat: 50,
          effort: 0,
          stat: {
            name: "special-attack",
            url: "https://pokeapi.co/api/v2/stat/4/",
          },
        },
        {
          base_stat: 50,
          effort: 0,
          stat: {
            name: "special-defense",
            url: "https://pokeapi.co/api/v2/stat/5/",
          },
        },
        {
          base_stat: 90,
          effort: 2,
          stat: {
            name: "speed",
            url: "https://pokeapi.co/api/v2/stat/6/",
          },
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "electric",
            url: "https://pokeapi.co/api/v2/type/13/",
          },
        },
      ],
      weight: 60,
    },
  },
  {
    id: 25,
    name: "raichu",
    pokemon_data: {
      abilities: [
        {
          ability: {
            name: "static",
            url: "https://pokeapi.co/api/v2/ability/9/",
          },
          is_hidden: false,
          slot: 1,
        },
        {
          ability: {
            name: "lightning-rod",
            url: "https://pokeapi.co/api/v2/ability/31/",
          },
          is_hidden: true,
          slot: 3,
        },
      ],
      base_experience: 218,
      height: 8,
      sprites: {
        back_default:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/26.png",
        back_female:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/female/26.png",
        back_shiny:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/shiny/26.png",
        back_shiny_female:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/shiny/female/26.png",
        front_default:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/26.png",
        front_female:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/female/26.png",
        front_shiny:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/shiny/26.png",
        front_shiny_female:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/shiny/female/26.png",
        other: {
          dream_world: {
            front_default:
              "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/26.svg",
            front_female: null,
          },
          "official-artwork": {
            front_default:
              "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/official-artwork/26.png",
          },
        },
        versions: {
          "generation-i": {
            "red-blue": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/26.png",
              back_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/26.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/26.png",
              front_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/26.png",
            },
            yellow: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/26.png",
              back_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/26.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/26.png",
              front_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/26.png",
            },
          },
          "generation-ii": {
            crystal: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/26.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/26.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/26.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/26.png",
            },
            gold: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/26.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/26.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/26.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/26.png",
            },
            silver: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/26.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/26.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/26.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/26.png",
            },
          },
          "generation-iii": {
            emerald: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/emerald/26.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/26.png",
            },
            "firered-leafgreen": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/26.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/26.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/26.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/26.png",
            },
            "ruby-sapphire": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/26.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/26.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/26.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/26.png",
            },
          },
          "generation-iv": {
            "diamond-pearl": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/26.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/26.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/26.png",
              front_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/female/26.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/26.png",
              front_shiny_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/female/26.png",
            },
            "heartgold-soulsilver": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/26.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/26.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/26.png",
              front_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/female/26.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/26.png",
              front_shiny_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/female/26.png",
            },
            platinum: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/26.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/26.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/26.png",
              front_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/female/26.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/26.png",
              front_shiny_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/female/26.png",
            },
          },
          "generation-v": {
            "black-white": {
              animated: {
                back_default:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/26.gif",
                back_female:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/female/26.gif",
                back_shiny:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/26.gif",
                back_shiny_female:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/female/26.gif",
                front_default:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/26.gif",
                front_female:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/female/26.gif",
                front_shiny:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/26.gif",
                front_shiny_female:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/female/26.gif",
              },
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/26.png",
              back_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/female/26.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/26.png",
              back_shiny_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/female/26.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/26.png",
              front_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/female/26.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/26.png",
              front_shiny_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/female/26.png",
            },
          },
          "generation-vi": {
            "omegaruby-alphasapphire": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/26.png",
              front_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/female/26.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/26.png",
              front_shiny_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/female/26.png",
            },
            "x-y": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/26.png",
              front_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/female/26.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/26.png",
              front_shiny_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/female/26.png",
            },
          },
          "generation-vii": {
            icons: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/icons/26.png",
              front_female: null,
            },
            "ultra-sun-ultra-moon": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/26.png",
              front_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/female/26.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/26.png",
              front_shiny_female:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/female/26.png",
            },
          },
          "generation-viii": {
            icons: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-viii/icons/26.png",
              front_female: null,
            },
          },
        },
      },
      stats: [
        {
          base_stat: 60,
          effort: 0,
          stat: {
            name: "hp",
            url: "https://pokeapi.co/api/v2/stat/1/",
          },
        },
        {
          base_stat: 90,
          effort: 0,
          stat: {
            name: "attack",
            url: "https://pokeapi.co/api/v2/stat/2/",
          },
        },
        {
          base_stat: 55,
          effort: 0,
          stat: {
            name: "defense",
            url: "https://pokeapi.co/api/v2/stat/3/",
          },
        },
        {
          base_stat: 90,
          effort: 0,
          stat: {
            name: "special-attack",
            url: "https://pokeapi.co/api/v2/stat/4/",
          },
        },
        {
          base_stat: 80,
          effort: 0,
          stat: {
            name: "special-defense",
            url: "https://pokeapi.co/api/v2/stat/5/",
          },
        },
        {
          base_stat: 110,
          effort: 3,
          stat: {
            name: "speed",
            url: "https://pokeapi.co/api/v2/stat/6/",
          },
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "electric",
            url: "https://pokeapi.co/api/v2/type/13/",
          },
        },
      ],
      weight: 300,
    },
  },
  {
    id: 26,
    name: "sandshrew",
    pokemon_data: {
      abilities: [
        {
          ability: {
            name: "sand-veil",
            url: "https://pokeapi.co/api/v2/ability/8/",
          },
          is_hidden: false,
          slot: 1,
        },
        {
          ability: {
            name: "sand-rush",
            url: "https://pokeapi.co/api/v2/ability/146/",
          },
          is_hidden: true,
          slot: 3,
        },
      ],
      base_experience: 60,
      height: 6,
      sprites: {
        back_default:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/27.png",
        back_female: null,
        back_shiny:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/shiny/27.png",
        back_shiny_female: null,
        front_default:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/27.png",
        front_female: null,
        front_shiny:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/shiny/27.png",
        front_shiny_female: null,
        other: {
          dream_world: {
            front_default:
              "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/27.svg",
            front_female: null,
          },
          "official-artwork": {
            front_default:
              "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/official-artwork/27.png",
          },
        },
        versions: {
          "generation-i": {
            "red-blue": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/27.png",
              back_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/27.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/27.png",
              front_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/27.png",
            },
            yellow: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/27.png",
              back_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/27.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/27.png",
              front_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/27.png",
            },
          },
          "generation-ii": {
            crystal: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/27.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/27.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/27.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/27.png",
            },
            gold: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/27.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/27.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/27.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/27.png",
            },
            silver: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/27.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/27.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/27.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/27.png",
            },
          },
          "generation-iii": {
            emerald: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/emerald/27.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/27.png",
            },
            "firered-leafgreen": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/27.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/27.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/27.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/27.png",
            },
            "ruby-sapphire": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/27.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/27.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/27.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/27.png",
            },
          },
          "generation-iv": {
            "diamond-pearl": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/27.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/27.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/27.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/27.png",
              front_shiny_female: null,
            },
            "heartgold-soulsilver": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/27.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/27.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/27.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/27.png",
              front_shiny_female: null,
            },
            platinum: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/27.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/27.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/27.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/27.png",
              front_shiny_female: null,
            },
          },
          "generation-v": {
            "black-white": {
              animated: {
                back_default:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/27.gif",
                back_female: null,
                back_shiny:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/27.gif",
                back_shiny_female: null,
                front_default:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/27.gif",
                front_female: null,
                front_shiny:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/27.gif",
                front_shiny_female: null,
              },
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/27.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/27.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/27.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/27.png",
              front_shiny_female: null,
            },
          },
          "generation-vi": {
            "omegaruby-alphasapphire": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/27.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/27.png",
              front_shiny_female: null,
            },
            "x-y": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/27.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/27.png",
              front_shiny_female: null,
            },
          },
          "generation-vii": {
            icons: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/icons/27.png",
              front_female: null,
            },
            "ultra-sun-ultra-moon": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/27.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/27.png",
              front_shiny_female: null,
            },
          },
          "generation-viii": {
            icons: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-viii/icons/27.png",
              front_female: null,
            },
          },
        },
      },
      stats: [
        {
          base_stat: 50,
          effort: 0,
          stat: {
            name: "hp",
            url: "https://pokeapi.co/api/v2/stat/1/",
          },
        },
        {
          base_stat: 75,
          effort: 0,
          stat: {
            name: "attack",
            url: "https://pokeapi.co/api/v2/stat/2/",
          },
        },
        {
          base_stat: 85,
          effort: 1,
          stat: {
            name: "defense",
            url: "https://pokeapi.co/api/v2/stat/3/",
          },
        },
        {
          base_stat: 20,
          effort: 0,
          stat: {
            name: "special-attack",
            url: "https://pokeapi.co/api/v2/stat/4/",
          },
        },
        {
          base_stat: 30,
          effort: 0,
          stat: {
            name: "special-defense",
            url: "https://pokeapi.co/api/v2/stat/5/",
          },
        },
        {
          base_stat: 40,
          effort: 0,
          stat: {
            name: "speed",
            url: "https://pokeapi.co/api/v2/stat/6/",
          },
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "ground",
            url: "https://pokeapi.co/api/v2/type/5/",
          },
        },
      ],
      weight: 120,
    },
  },
  {
    id: 27,
    name: "sandslash",
    pokemon_data: {
      abilities: [
        {
          ability: {
            name: "sand-veil",
            url: "https://pokeapi.co/api/v2/ability/8/",
          },
          is_hidden: false,
          slot: 1,
        },
        {
          ability: {
            name: "sand-rush",
            url: "https://pokeapi.co/api/v2/ability/146/",
          },
          is_hidden: true,
          slot: 3,
        },
      ],
      base_experience: 158,
      height: 10,
      sprites: {
        back_default:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/28.png",
        back_female: null,
        back_shiny:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/shiny/28.png",
        back_shiny_female: null,
        front_default:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/28.png",
        front_female: null,
        front_shiny:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/shiny/28.png",
        front_shiny_female: null,
        other: {
          dream_world: {
            front_default:
              "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/28.svg",
            front_female: null,
          },
          "official-artwork": {
            front_default:
              "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/official-artwork/28.png",
          },
        },
        versions: {
          "generation-i": {
            "red-blue": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/28.png",
              back_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/28.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/28.png",
              front_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/28.png",
            },
            yellow: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/28.png",
              back_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/28.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/28.png",
              front_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/28.png",
            },
          },
          "generation-ii": {
            crystal: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/28.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/28.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/28.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/28.png",
            },
            gold: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/28.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/28.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/28.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/28.png",
            },
            silver: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/28.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/28.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/28.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/28.png",
            },
          },
          "generation-iii": {
            emerald: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/emerald/28.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/28.png",
            },
            "firered-leafgreen": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/28.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/28.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/28.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/28.png",
            },
            "ruby-sapphire": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/28.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/28.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/28.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/28.png",
            },
          },
          "generation-iv": {
            "diamond-pearl": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/28.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/28.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/28.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/28.png",
              front_shiny_female: null,
            },
            "heartgold-soulsilver": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/28.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/28.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/28.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/28.png",
              front_shiny_female: null,
            },
            platinum: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/28.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/28.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/28.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/28.png",
              front_shiny_female: null,
            },
          },
          "generation-v": {
            "black-white": {
              animated: {
                back_default:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/28.gif",
                back_female: null,
                back_shiny:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/28.gif",
                back_shiny_female: null,
                front_default:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/28.gif",
                front_female: null,
                front_shiny:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/28.gif",
                front_shiny_female: null,
              },
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/28.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/28.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/28.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/28.png",
              front_shiny_female: null,
            },
          },
          "generation-vi": {
            "omegaruby-alphasapphire": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/28.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/28.png",
              front_shiny_female: null,
            },
            "x-y": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/28.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/28.png",
              front_shiny_female: null,
            },
          },
          "generation-vii": {
            icons: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/icons/28.png",
              front_female: null,
            },
            "ultra-sun-ultra-moon": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/28.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/28.png",
              front_shiny_female: null,
            },
          },
          "generation-viii": {
            icons: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-viii/icons/28.png",
              front_female: null,
            },
          },
        },
      },
      stats: [
        {
          base_stat: 75,
          effort: 0,
          stat: {
            name: "hp",
            url: "https://pokeapi.co/api/v2/stat/1/",
          },
        },
        {
          base_stat: 100,
          effort: 0,
          stat: {
            name: "attack",
            url: "https://pokeapi.co/api/v2/stat/2/",
          },
        },
        {
          base_stat: 110,
          effort: 2,
          stat: {
            name: "defense",
            url: "https://pokeapi.co/api/v2/stat/3/",
          },
        },
        {
          base_stat: 45,
          effort: 0,
          stat: {
            name: "special-attack",
            url: "https://pokeapi.co/api/v2/stat/4/",
          },
        },
        {
          base_stat: 55,
          effort: 0,
          stat: {
            name: "special-defense",
            url: "https://pokeapi.co/api/v2/stat/5/",
          },
        },
        {
          base_stat: 65,
          effort: 0,
          stat: {
            name: "speed",
            url: "https://pokeapi.co/api/v2/stat/6/",
          },
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "ground",
            url: "https://pokeapi.co/api/v2/type/5/",
          },
        },
      ],
      weight: 295,
    },
  },
  {
    id: 28,
    name: "nidoran-f",
    pokemon_data: {
      abilities: [
        {
          ability: {
            name: "poison-point",
            url: "https://pokeapi.co/api/v2/ability/38/",
          },
          is_hidden: false,
          slot: 1,
        },
        {
          ability: {
            name: "rivalry",
            url: "https://pokeapi.co/api/v2/ability/79/",
          },
          is_hidden: false,
          slot: 2,
        },
        {
          ability: {
            name: "hustle",
            url: "https://pokeapi.co/api/v2/ability/55/",
          },
          is_hidden: true,
          slot: 3,
        },
      ],
      base_experience: 55,
      height: 4,
      sprites: {
        back_default:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/29.png",
        back_female: null,
        back_shiny:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/shiny/29.png",
        back_shiny_female: null,
        front_default:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/29.png",
        front_female: null,
        front_shiny:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/shiny/29.png",
        front_shiny_female: null,
        other: {
          dream_world: {
            front_default:
              "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/29.svg",
            front_female: null,
          },
          "official-artwork": {
            front_default:
              "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/official-artwork/29.png",
          },
        },
        versions: {
          "generation-i": {
            "red-blue": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/29.png",
              back_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/29.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/29.png",
              front_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/29.png",
            },
            yellow: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/29.png",
              back_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/29.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/29.png",
              front_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/29.png",
            },
          },
          "generation-ii": {
            crystal: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/29.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/29.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/29.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/29.png",
            },
            gold: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/29.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/29.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/29.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/29.png",
            },
            silver: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/29.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/29.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/29.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/29.png",
            },
          },
          "generation-iii": {
            emerald: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/emerald/29.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/29.png",
            },
            "firered-leafgreen": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/29.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/29.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/29.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/29.png",
            },
            "ruby-sapphire": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/29.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/29.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/29.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/29.png",
            },
          },
          "generation-iv": {
            "diamond-pearl": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/29.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/29.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/29.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/29.png",
              front_shiny_female: null,
            },
            "heartgold-soulsilver": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/29.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/29.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/29.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/29.png",
              front_shiny_female: null,
            },
            platinum: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/29.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/29.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/29.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/29.png",
              front_shiny_female: null,
            },
          },
          "generation-v": {
            "black-white": {
              animated: {
                back_default:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/29.gif",
                back_female: null,
                back_shiny:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/29.gif",
                back_shiny_female: null,
                front_default:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/29.gif",
                front_female: null,
                front_shiny:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/29.gif",
                front_shiny_female: null,
              },
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/29.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/29.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/29.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/29.png",
              front_shiny_female: null,
            },
          },
          "generation-vi": {
            "omegaruby-alphasapphire": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/29.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/29.png",
              front_shiny_female: null,
            },
            "x-y": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/29.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/29.png",
              front_shiny_female: null,
            },
          },
          "generation-vii": {
            icons: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/icons/29.png",
              front_female: null,
            },
            "ultra-sun-ultra-moon": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/29.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/29.png",
              front_shiny_female: null,
            },
          },
          "generation-viii": {
            icons: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-viii/icons/29.png",
              front_female: null,
            },
          },
        },
      },
      stats: [
        {
          base_stat: 55,
          effort: 1,
          stat: {
            name: "hp",
            url: "https://pokeapi.co/api/v2/stat/1/",
          },
        },
        {
          base_stat: 47,
          effort: 0,
          stat: {
            name: "attack",
            url: "https://pokeapi.co/api/v2/stat/2/",
          },
        },
        {
          base_stat: 52,
          effort: 0,
          stat: {
            name: "defense",
            url: "https://pokeapi.co/api/v2/stat/3/",
          },
        },
        {
          base_stat: 40,
          effort: 0,
          stat: {
            name: "special-attack",
            url: "https://pokeapi.co/api/v2/stat/4/",
          },
        },
        {
          base_stat: 40,
          effort: 0,
          stat: {
            name: "special-defense",
            url: "https://pokeapi.co/api/v2/stat/5/",
          },
        },
        {
          base_stat: 41,
          effort: 0,
          stat: {
            name: "speed",
            url: "https://pokeapi.co/api/v2/stat/6/",
          },
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "poison",
            url: "https://pokeapi.co/api/v2/type/4/",
          },
        },
      ],
      weight: 70,
    },
  },
  {
    id: 29,
    name: "nidorina",
    pokemon_data: {
      abilities: [
        {
          ability: {
            name: "poison-point",
            url: "https://pokeapi.co/api/v2/ability/38/",
          },
          is_hidden: false,
          slot: 1,
        },
        {
          ability: {
            name: "rivalry",
            url: "https://pokeapi.co/api/v2/ability/79/",
          },
          is_hidden: false,
          slot: 2,
        },
        {
          ability: {
            name: "hustle",
            url: "https://pokeapi.co/api/v2/ability/55/",
          },
          is_hidden: true,
          slot: 3,
        },
      ],
      base_experience: 128,
      height: 8,
      sprites: {
        back_default:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/30.png",
        back_female: null,
        back_shiny:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/shiny/30.png",
        back_shiny_female: null,
        front_default:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/30.png",
        front_female: null,
        front_shiny:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/shiny/30.png",
        front_shiny_female: null,
        other: {
          dream_world: {
            front_default:
              "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/30.svg",
            front_female: null,
          },
          "official-artwork": {
            front_default:
              "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/official-artwork/30.png",
          },
        },
        versions: {
          "generation-i": {
            "red-blue": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/30.png",
              back_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/30.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/30.png",
              front_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/30.png",
            },
            yellow: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/30.png",
              back_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/30.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/30.png",
              front_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/30.png",
            },
          },
          "generation-ii": {
            crystal: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/30.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/30.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/30.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/30.png",
            },
            gold: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/30.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/30.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/30.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/30.png",
            },
            silver: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/30.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/30.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/30.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/30.png",
            },
          },
          "generation-iii": {
            emerald: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/emerald/30.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/30.png",
            },
            "firered-leafgreen": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/30.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/30.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/30.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/30.png",
            },
            "ruby-sapphire": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/30.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/30.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/30.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/30.png",
            },
          },
          "generation-iv": {
            "diamond-pearl": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/30.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/30.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/30.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/30.png",
              front_shiny_female: null,
            },
            "heartgold-soulsilver": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/30.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/30.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/30.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/30.png",
              front_shiny_female: null,
            },
            platinum: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/30.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/30.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/30.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/30.png",
              front_shiny_female: null,
            },
          },
          "generation-v": {
            "black-white": {
              animated: {
                back_default:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/30.gif",
                back_female: null,
                back_shiny:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/30.gif",
                back_shiny_female: null,
                front_default:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/30.gif",
                front_female: null,
                front_shiny:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/30.gif",
                front_shiny_female: null,
              },
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/30.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/30.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/30.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/30.png",
              front_shiny_female: null,
            },
          },
          "generation-vi": {
            "omegaruby-alphasapphire": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/30.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/30.png",
              front_shiny_female: null,
            },
            "x-y": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/30.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/30.png",
              front_shiny_female: null,
            },
          },
          "generation-vii": {
            icons: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/icons/30.png",
              front_female: null,
            },
            "ultra-sun-ultra-moon": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/30.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/30.png",
              front_shiny_female: null,
            },
          },
          "generation-viii": {
            icons: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-viii/icons/30.png",
              front_female: null,
            },
          },
        },
      },
      stats: [
        {
          base_stat: 70,
          effort: 2,
          stat: {
            name: "hp",
            url: "https://pokeapi.co/api/v2/stat/1/",
          },
        },
        {
          base_stat: 62,
          effort: 0,
          stat: {
            name: "attack",
            url: "https://pokeapi.co/api/v2/stat/2/",
          },
        },
        {
          base_stat: 67,
          effort: 0,
          stat: {
            name: "defense",
            url: "https://pokeapi.co/api/v2/stat/3/",
          },
        },
        {
          base_stat: 55,
          effort: 0,
          stat: {
            name: "special-attack",
            url: "https://pokeapi.co/api/v2/stat/4/",
          },
        },
        {
          base_stat: 55,
          effort: 0,
          stat: {
            name: "special-defense",
            url: "https://pokeapi.co/api/v2/stat/5/",
          },
        },
        {
          base_stat: 56,
          effort: 0,
          stat: {
            name: "speed",
            url: "https://pokeapi.co/api/v2/stat/6/",
          },
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "poison",
            url: "https://pokeapi.co/api/v2/type/4/",
          },
        },
      ],
      weight: 200,
    },
  },
  {
    id: 30,
    name: "nidoqueen",
    pokemon_data: {
      abilities: [
        {
          ability: {
            name: "poison-point",
            url: "https://pokeapi.co/api/v2/ability/38/",
          },
          is_hidden: false,
          slot: 1,
        },
        {
          ability: {
            name: "rivalry",
            url: "https://pokeapi.co/api/v2/ability/79/",
          },
          is_hidden: false,
          slot: 2,
        },
        {
          ability: {
            name: "sheer-force",
            url: "https://pokeapi.co/api/v2/ability/125/",
          },
          is_hidden: true,
          slot: 3,
        },
      ],
      base_experience: 227,
      height: 13,
      sprites: {
        back_default:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/31.png",
        back_female: null,
        back_shiny:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/back/shiny/31.png",
        back_shiny_female: null,
        front_default:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/31.png",
        front_female: null,
        front_shiny:
          "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/shiny/31.png",
        front_shiny_female: null,
        other: {
          dream_world: {
            front_default:
              "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/31.svg",
            front_female: null,
          },
          "official-artwork": {
            front_default:
              "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/official-artwork/31.png",
          },
        },
        versions: {
          "generation-i": {
            "red-blue": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/31.png",
              back_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/31.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/31.png",
              front_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/31.png",
            },
            yellow: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/31.png",
              back_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/31.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/31.png",
              front_gray:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/31.png",
            },
          },
          "generation-ii": {
            crystal: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/31.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/31.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/31.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/31.png",
            },
            gold: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/31.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/31.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/31.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/31.png",
            },
            silver: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/31.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/31.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/31.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/31.png",
            },
          },
          "generation-iii": {
            emerald: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/emerald/31.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/31.png",
            },
            "firered-leafgreen": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/31.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/31.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/31.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/31.png",
            },
            "ruby-sapphire": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/31.png",
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/31.png",
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/31.png",
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/31.png",
            },
          },
          "generation-iv": {
            "diamond-pearl": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/31.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/31.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/31.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/31.png",
              front_shiny_female: null,
            },
            "heartgold-soulsilver": {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/31.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/31.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/31.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/31.png",
              front_shiny_female: null,
            },
            platinum: {
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/31.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/31.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/31.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/31.png",
              front_shiny_female: null,
            },
          },
          "generation-v": {
            "black-white": {
              animated: {
                back_default:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/31.gif",
                back_female: null,
                back_shiny:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/31.gif",
                back_shiny_female: null,
                front_default:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/31.gif",
                front_female: null,
                front_shiny:
                  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/31.gif",
                front_shiny_female: null,
              },
              back_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/31.png",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/31.png",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/31.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/31.png",
              front_shiny_female: null,
            },
          },
          "generation-vi": {
            "omegaruby-alphasapphire": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/31.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/31.png",
              front_shiny_female: null,
            },
            "x-y": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/31.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/31.png",
              front_shiny_female: null,
            },
          },
          "generation-vii": {
            icons: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/icons/31.png",
              front_female: null,
            },
            "ultra-sun-ultra-moon": {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/31.png",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/31.png",
              front_shiny_female: null,
            },
          },
          "generation-viii": {
            icons: {
              front_default:
                "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/versions/generation-viii/icons/31.png",
              front_female: null,
            },
          },
        },
      },
      stats: [
        {
          base_stat: 90,
          effort: 3,
          stat: {
            name: "hp",
            url: "https://pokeapi.co/api/v2/stat/1/",
          },
        },
        {
          base_stat: 92,
          effort: 0,
          stat: {
            name: "attack",
            url: "https://pokeapi.co/api/v2/stat/2/",
          },
        },
        {
          base_stat: 87,
          effort: 0,
          stat: {
            name: "defense",
            url: "https://pokeapi.co/api/v2/stat/3/",
          },
        },
        {
          base_stat: 75,
          effort: 0,
          stat: {
            name: "special-attack",
            url: "https://pokeapi.co/api/v2/stat/4/",
          },
        },
        {
          base_stat: 85,
          effort: 0,
          stat: {
            name: "special-defense",
            url: "https://pokeapi.co/api/v2/stat/5/",
          },
        },
        {
          base_stat: 76,
          effort: 0,
          stat: {
            name: "speed",
            url: "https://pokeapi.co/api/v2/stat/6/",
          },
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "poison",
            url: "https://pokeapi.co/api/v2/type/4/",
          },
        },
        {
          slot: 2,
          type: {
            name: "ground",
            url: "https://pokeapi.co/api/v2/type/5/",
          },
        },
      ],
      weight: 600,
    },
  },
];
export default pokemonData;
