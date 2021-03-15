# 🧩vue-lanyard

Vue hook for [lanyard](https://github.com/Phineas/lanyard/) for tracking your Discord presence through REST or websockets.

[![License](https://img.shields.io/badge/-MIT-f56565.svg?longCache=true&style=for-the-badge)](https://github.com/nurodev/vue-lanyard/blob/main/LICENSE)
[![Build](https://img.shields.io/github/workflow/status/nurodev/vue-lanyard/Build?label=%20&logo=github&logoColor=white&style=for-the-badge)](https://github.com/nurodev/vue-lanyard/actions?query=workflow%3A%22%F0%9F%94%A8+Build%22)
[![Version](https://img.shields.io/npm/v/vue-lanyard?label=%20&style=for-the-badge)](https://www.npmjs.com/package/vue-lanyard)
[![Downloads](https://img.shields.io/npm/dm/vue-lanyard?label=%20&logo=Docusign&logoColor=white&style=for-the-badge)](https://www.npmjs.com/package/vue-lanyard)

### 🦄 Usage

```typescript
<script setup lang="ts">
import { useLanyard } from 'vue-lanyard';
					
const DISCORD_ID = 'XXXXXXXXXXXXXXXXXX';

const { data } = await useLanyard(DISCORD_ID);
</script>
```

### ❗ Types

All types used for this library are also readily available & can be used as follows:

```typescript
import type { Data, Activity, ... } from 'vue-lanyard';
```

### ❤️ Acknowledgements

 - [Phineas Walton](https://github.com/Phineas/) – Author of lanyard
 - [Alistair Smith](https://github.com/alii/) – Author of this [`use-lanyard`](https://github.com/alii/use-lanyard) which heavily inspired this library
