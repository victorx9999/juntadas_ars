import routerx from 'express-promise-router'
import artigoController from '../controllers/artigoController'
import auth from '../middlewares/auth'

const router = routerx()

router.get('/ativos', /*auth.verifyUsuario,*/ artigoController.listAtivos)
router.get('/:id', /*auth.verifyUsuario, */artigoController.findById)
router.get('/', /*auth.verifyUsuario,*/ artigoController.list)
router.post('/', /*auth.verifyUsuario,*/ artigoController.add)
router.put('/activate/:id',/* auth.verifyUsuario,*/ artigoController.activate)
router.put('/deactivate/:id',/* auth.verifyUsuario,*/ artigoController.deactivate)
router.put('/:id', /*auth.verifyUsuario,*/ artigoController.update)
router.get('/download/:file', artigoController.download)

export default router