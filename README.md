```markdown
# 🇳🇬 Nigeria Geo [![npm version](https://img.shields.io/npm/v/nigeria-geo.svg?style=flat-square)](https://www.npmjs.com/package/nigeria-geo) 
[![npm downloads](https://img.shields.io/npm/dt/nigeria-geo.svg?style=flat-square)](https://npmjs.com/package/nigeria-geo)

A comprehensive Nigeria geographical data package providing states, Local Government Areas (LGAs), and senatorial districts.

## Features

- 📌 All 36 states + Federal Capital Territory (FCT)
- 🏛️ Local Government Areas (LGAs)
- 🗳️ Senatorial Districts
- 🔍 Case-insensitive search
- 🦾 Full TypeScript support
- 📦 Lightweight (~50KB gzipped)

## Installation

```bash
npm install nigeria-geo
# or
yarn add nigeria-geo
# or
pnpm add nigeria-geo
```

## Usage

### Basic Usage

```javascript
import { niajaGeo } from 'nigeria-geo';

// Get all states
const allStates = niajaGeo.getStates();

// Get state details
const lagosState = niajaGeo.getState('Lagos');

// Get LGAs with duplicates removed
const riversLgas = niajaGeo.getLgas('Rivers');

// Find state by LGA
const state = niajaGeo.getStateByLga('Agege'); // Returns Lagos
```

### Class-based Initialization

```typescript
import NiajaGeo from 'nigeria-geo';

const customGeo = new NiajaGeo();
const kanoDistricts = customGeo.getDistricts('Kano');
```

## API Reference

### `getStates()`

**Returns**: `NiajaState[]`  
Get all Nigerian states with metadata:

```typescript
interface NiajaState {
  state: string;
  senatorialDistricts: string[];
  lgas: string[];
}
```

### `getState(stateName: string)`

**Parameters**:  
- `stateName`: Case-insensitive state name  

**Returns**: `NiajaState | null`  

```javascript
const abiaState = niajaGeo.getState('abia'); // Case-insensitive
```

### `getDistricts(stateName: string)`

**Returns**: `string[]` of senatorial districts  
```javascript
const districts = niajaGeo.getDistricts('Oyo');
```

### `getLgas(stateName: string)`

**Returns**: Unique combination of LGAs and districts (`string[]`)  
```javascript
const lgas = niajaGeo.getLgas('Kano');
```

### `getStateByLga(lgaName: string)`

**Parameters**:  
- `lgaName`: Case-insensitive LGA name  

**Returns**: `NiajaState | null`  
```javascript
const state = niajaGeo.getStateByLga('IKEJA'); // Returns Lagos
```

## Data Structure Example

```typescript
{
  state: 'Lagos',
  senatorialDistricts: ['Lagos West', 'Lagos Central', 'Lagos East'],
  lgas: [
    'Agege',
    'Ajeromi-Ifelodun',
    'Alimosho',
    'Amuwo-Odofin',
    // ... full list
  ]
}
```

## TypeScript Support

The package includes full type definitions:

```typescript
import type { NiajaState } from 'nigeria-geo';
```

## Contributing

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](CONTRIBUTING.md)

1. Verify data from [official sources](https://nigerianstat.gov.ng/)
2. Update data in `src/config.ts`
3. Add/update tests
4. Submit PR with documentation

```bash
git clone https://github.com/zuxcode/nigeria-geo.git
cd nigeria-geo
npm install
npm test
```

## License

MIT © [Alfred Nwanowai](https://github.com/zuxcode)  
**Maintainer**: [@chiTheDev](https://twitter.com/chiTheDev)

---

**[📚 Full Documentation](https://github.com/zuxcode/nigeria-geo#readme)** | 
**[🐛 Report Issue](https://github.com/zuxcode/nigeria-geo/issues)** | 
**[💡 Feature Request](https://github.com/zuxcode/nigeria-geo/discussions)**
