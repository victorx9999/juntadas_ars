import routerx from 'express-promise-router'
import relatorio_errosController from '../controllers/relatorio_errosController'
import auth from '../middlewares/auth'


const router = routerx()



router.get('/:id',/* auth.verifyAdmin,*/ relatorio_errosController.findById)
router.get('/',/* auth.verifyAdmin,*/ relatorio_errosController.list)
router.post('/',/* auth.verifyAdmin,*/ relatorio_errosController.add)
router.put('/:id',/* auth.verifyAdmin,*/ relatorio_errosController.update)


export default router