# 🇳🇬 Naija Geo [![npm version](https://img.shields.io/npm/v/naija-geo.svg?style=flat-square)](https://www.npmjs.com/package/naija-geo) [![npm downloads](https://img.shields.io/npm/dt/naija-geo.svg?style=flat-square)](https://www.npmjs.com/package/naija-geo)

A comprehensive Nigeria geographical data package providing states, cities, Local Government Areas (LGAs), and senatorial districts.

![Nigeria Map Visualization](https://via.placeholder.com/800x400.png?text=Nigeria+Geo+Data+Visualization) *Add actual map image later*

## Features

- 🗺️ All 36 states + Federal Capital Territory (FCT)
- 🏙️ Cities and urban areas
- 🏛️ Local Government Areas (LGAs)
- 🏛️ Senatorial Districts
- 📦 Lightweight (under 50KB)
- 🦾 TypeScript support
- 📅 Regularly updated data

## Installation

```bash
npm install naija-geo
# or
yarn add naija-geo
# or
pnpm add naija-geo

## Usage

```javascript
const { getStates, getCities, getLGAs } = require('naija-geo');

// Get all states
const states = getStates();
console.log(states);

// Get cities in a state
const abiaCities = getCities('Abia');
console.log(abiaCities);

// Get LGAs in a state
const lagosLGAs = getLGAs('Lagos');
console.log(lagosLGAs);
```

## API

### `getStates()`
Returns an array of all 36 states + FCT

### `getCities(stateName: string)`
Returns cities in a specified state

### `getLGAs(stateName: string)`
Returns Local Government Areas in a specified state

## Data Structure
All methods return arrays of objects with:
```typescript
{
  name: string;
  code?: string; // State code where applicable
  lgas?: string[]; // Only in state objects
}
```

## Contributing
Contributions are welcome! Please ensure:
1. Data accuracy from reliable sources
2. Follow the existing data structure format
3. Update tests accordingly

```bash
# Development setup
git clone https://github.com/zuxcode/naija-geo.git
cd naija-geo
npm install
```

## License
MIT © [Alfred Nwanowai](https://github.com/zuxcode)

## Acknowledgements
- Nigerian Geographical Data Sources
- Community contributors

---

**Maintained by** [Alfred Nwanowai](https://github.com/zuxcode)  
**Stay Connected** → [![Twitter](https://img.shields.io/twitter/follow/chiTheDev?style=social)](https://twitter.com/chiTheDev)
