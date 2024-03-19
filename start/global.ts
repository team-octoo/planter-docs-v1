import edge from 'edge.js'

import { addCollection, edgeIconify } from 'edge-iconify'

import { icons as matIcons } from '@iconify-json/material-symbols'

addCollection(matIcons)

edge.use(edgeIconify)
