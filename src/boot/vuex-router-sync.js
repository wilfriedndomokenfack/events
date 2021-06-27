import { sync } from 'vuex-router-sync'

import store from '@/store'
import { router } from '@/router'

sync(store, router) // done. Returns an unsync callback fn
