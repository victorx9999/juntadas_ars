import routerx from 'express-promise-router'

import papelRouter from './papelRouter'
import setorTipoRouter from './setorTipoRouter'
import setorRouter from './setorRouter'
import usuarioRouter from './usuarioRouter'
import correspondenciaRouter from './correspondenciaRouter'





const router = routerx()

router.use('/papeis', papelRouter)
router.use('/tipos', setorTipoRouter)
router.use('/setores', setorRouter)
router.use('/usuarios', usuarioRouter)
router.use('/correspondencia', correspondenciaRouter)





export { router }