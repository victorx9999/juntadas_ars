import routerx from 'express-promise-router'

import papelRouter from './papelRouter'
import setorRouter from './setorRouter'
import usuarioRouter from './usuarioRouter'
import artigoRouter from './artigoRouter'
import relatorio_errosRouter from './relatorio_errosRouter'


const router = routerx()

router.use('/papeis', papelRouter)
router.use('/setores', setorRouter)
router.use('/usuarios', usuarioRouter)
router.use('/artigos', artigoRouter)
router.use('/relatorio_errosRouter', relatorio_errosRouter)

export { router }