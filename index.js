/*!
 * Vue Material for Bedrock.
 *
 * Copyright (c) 2018 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

import * as components from './components.js';
export {components};

export function install(Vue, options) {
  // define all components
  Object.values(components).forEach(c => Vue.component(c.name, c));
}
