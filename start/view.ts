import edge from 'edge.js'

import { addCollection, edgeIconify } from 'edge-iconify'

import { icons as mdIcons } from '@iconify-json/mdi'

addCollection(mdIcons)

edge.use(edgeIconify)
