import { Relatorio_erros, artigo } from '../database/models'
import tokenService from '../services/tokenService'

const storeFile = (file) => {
    return new Promise((resolve, reject) => {
        const arquivo = utilsService.renameFile()
        file.mv(utilsService.formatUploadPath(arquivo), (error) => {
            if (error) {
                reject({ error: error })
            } else {
                resolve({ arquivo: arquivo })
            }
        })
    })
}


export default {

    add: (req, res, next) => {
        try {
            Relatorio_erros.create(req.body).then(response => {
                res.status(201).json({ success: true, relatorio_erros: response })
            }).catch(error => {
                res.status(400).json({
                    error: error,
                    success: false,
                    message: 'Ocorreu um erro enquanto os dados eram inseridos.'
                })
            })
        } catch (error) {
            res.status(500).json({
                error: error,
                success: false,
                message: 'Ocorreu um erro desconhecido com o sistema.'
            })
            next(error)
        }
    },

    update: (req, res, next) => {
        try {
            Relatorio_erros.findOne({ where: { id: req.params.id } }).then(relatorio_erros => {
                if (relatorio_erros) {
                    return relatorio_erros.update(req.body).then(response => {
                        res.status(200).json({ success: true, relatorio_erros: response })
                    })
                } else {
                    res.status(404).json({
                        success: false,
                        message: 'O registro solicitado não foi encontrado no sistema.'
                    })
                }
            }).catch(error => {
                res.status(400).json({
                    error: error,
                    success: false,
                    message: 'Ocorreu um erro enquanto os dados eram atualizados.'
                })
            })
        } catch (error) {
            res.status(500).json({
                error: error,
                success: false,
                message: 'Ocorreu um erro desconhecido com o sistema.'
            })
            next(error)
        }
    },

    list: (req, res, next) => {
        try {
            Relatorio_erros.findAll({

                include: [
                    {
                        model: Artigo,
                        as: 'arttigo'
                    },

                ],

            }).then((response) => {
                res.status(200).json({ success: true, relatorio_erros: response })
            }).catch((error) => {
                res.status(400).json({
                    error: error,
                    success: false,
                    message: 'Ocorreu um erro enquanto os dados eram recuperados.'
                })
            })
        } catch (error) {
            res.status(500).json({
                error: error,
                success: false,
                message: 'Ocorreu um erro desconhecido com o sistema.'
            })
            next(error)
        }
    },

    findById: (req, res, next) => {
        try {
            Relatorio_erros.findOne({ where: { id: req.params.id } }).then((response) => {
                if (response) {
                    res.status(200).json({ success: true, relatorio_erros: response })
                } else {
                    res.status(404).json({
                        success: false,
                        message: 'O registro solicitado não foi encontrado no sistema.'
                    })
                }
            }).catch((error) => {
                res.status(400).json({
                    error: error,
                    success: false,
                    message: 'Ocorreu um erro enquanto o dado era recuperado.'
                })
            })
        } catch (error) {
            res.status(500).json({
                error: error,
                success: false,
                message: 'Ocorreu um erro desconhecido com o sistema.'
            })
            next(error)
        }
    },

    listAtivos: (req, res, next) => {
        try {
            Relatorio_erros.findAll({ where: { ativo: true } }).then((response) => {
                res.status(200).json({ success: true, relatorio_erros: response })
            }).catch((error) => {
                res.status(400).json({
                    error: error,
                    success: false,
                    message: 'Ocorreu um erro enquanto os dados eram recuperados.'
                })
            })
        } catch (error) {
            res.status(500).json({
                error: error,
                success: false,
                message: 'Ocorreu um erro desconhecido com o sistema.'
            })
            next(error)
        }
    },
    download: (req, res, next) => {
        try {
            Relatorio_erros.findOne({ where: { foto: req.params.file } }).then(relatorio_erros => {
                if (relatorio_erros) {
                    res.sendFile(utilsService.formatDownloadPath(relatorio_erros), {
                        root: 'screenshot/',
                        dotfiles: 'deny',
                        headers: {
                            'x-sent': true,
                            'x-timestamp': Date.now(),
                            'Content-Type': 'application/pdf'//passa paramentro como foto
                        }
                    }, (error) => {
                        if (error) {
                            res.status(404).json({
                                error: error,
                                success: false,
                                message: 'O arquivo solicitado não foi encontrado no sistema.'
                            })
                        }
                    })
                } else {
                    res.status(404).json({
                        success: false,
                        message: 'O arquivo solicitado não foi encontrado no sistema.'
                    })
                }
            }).catch(error => {
                res.status(400).json({
                    error: error,
                    success: false,
                    message: 'Ocorreu um erro enquanto os dados eram recuperados.'
                })
            })
        } catch (error) {
            res.status(500).json({
                error: error,
                success: false,
                message: 'Ocorreu um erro desconhecido com o sistema.'
            })
            next(error)
        }
    }

}